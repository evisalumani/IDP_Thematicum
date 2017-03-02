var AppError = require('../utilities/appError');
var AppAuthError = require('../utilities/appAuthError');
var AppResponse = require('../utilities/appResponse');
var User = require('../models/user');
var authUtilities = require('../utilities/authUtilities');
import DataRepository from '../data_access/dataRepository';

let repo = new DataRepository();

exports.signup = function (req, res, next) {
    repo.isAccessCodeValid(req.body.accessCode, req.body.currentTime)
        .then(results => {
            if(!results) {
                return next(new AppError('Invalid Access Code', 500));
            }

            //check for password length
            if (req.body.user.password.length < 8) {
                return next(new AppError('Validation error: password must be no shorter than 8 characters', 500));
            }

            var user = new User({
                name: req.body.user.name,
                email: req.body.user.email,
                password: req.body.user.password,
                personalRole: req.body.user.personalRole
            });

            return repo.save(user);
        })
        .then(() => res.status(201).json(new AppResponse('User created', null)))
        .catch(err => next(err));
}

exports.signin = function (req, res, next) {
    repo.getUserByEmail(req.body.email)
        .then(user => {
            if(!user) {
                return next(new AppError('Invalid login credentials', 401));
            }

            //check password
            if (!user.passwordIsValid(req.body.password)) {
                return next(new AppError('Invalid login credentials', 401));
            }

            var token = authUtilities.jwtSign({user: user});
            res.status(200).json({
                message: 'Successful login',
                token: token,
                username: user.name
            });
        })
        .catch(err => next(err));
}

exports.isAuthenticated = function (req, res, next) {
    authUtilities.jwtVerify(req.query.token)
        .then(decoded => {
            return res.status(200).json(new AppResponse('User is authenticated', null));
        })
        .catch(err => {
            return next(new AppAuthError(err.name, 401));
        });
}