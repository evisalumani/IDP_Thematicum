var Theme = require('../models/theme');
var ThemeStockComposition = require('../models/themeStockComposition');
var UserThemeStockAllocation = require('../models/userThemeStockAllocation');
var Stock = require('../models/stock');
var mongoose = require('mongoose');
var _ = require('underscore');
var stockAllocationAggregation = require('../utilities/stockAllocationAggregation');
var AppError = require('../utilities/appError');
var AppResponse = require('../utilities/appResponse');
import DataRepository from '../data_access/dataRepository';

let repo = new DataRepository();

exports.createMany = function (req, res, next) {
    //add many stocks
    Promise.all(req.body.stockAllocation.map(allocationData =>
            repo.createStockCompositionAndAllocation(allocationData, req.theme, res.locals.user)))
        .then(result => {
            return res.status(201).json(new AppResponse('Theme-stock compositions and allocations created', result));
        })
        .catch(error => { next(error) });
}

exports.create = function(req, res, next) {
    repo.createStockAllocation(req.themeStockComposition, res.locals.user, req.body.exposure)
        .then(result => {
            return res.status(201).json(new AppResponse('Stock allocation created', result));
        })
        .catch(error => { next(error) });
}

exports.update = function(req, res, next) {
    //TODO: check implementation
    let stockAllocation = req.stockAllocation;
    stockAllocation.exposure = req.body.exposure;

    repo.save(stockAllocation)
        .then(result => {return res.status(200).json(new AppResponse('Stock allocation updated', result)) })
        .catch(err => next(err));

    // stockAllocation.save(function(err, result) {
    //     if(err) {
    //         return next(err);
    //     }
    //
    //     return res.status(200).json(new AppResponse('Stock allocation updated', result));
    // });
}

exports.listByTheme = function(req, res, next) {
    repo.getThemeStockCompositionsByTheme(req.theme._id)
        .then(results => Promise.all(results.map(composition => repo.getStockAllocationsByThemeStockComposition(composition, res.locals.user._id))))
        .then(results => {
            console.log('Stock Allocations')
            console.log(results);
            return res.status(200).json(new AppResponse('Stock allocation data retrieved', results));
        })
        .catch(err => next(err));


    // UserThemeStockAllocation
    //     .find()
    //     .populate({
    //         path: 'themeStockComposition',
    //         match: { theme: req.theme._id },
    //         populate: {
    //             path: 'stock',
    //             model: 'Stock'
    //         }
    //     }).exec(function(err, results) {
    //     if (err) {
    //         return next(err);
    //     }
    //
    //
    //     // console.log('All entries')
    //     // console.log(results);
    //     //filter non-null entries
    //     var nonNullEntries = _.filter(results, function(input) {
    //         return input.themeStockComposition != null;
    //     });
    //
    //     // console.log('Nonnull');
    //     // console.log(nonNullEntries);
    //     // if (nonNullEntries.length > 0 ) {
    //     //     console.log(nonNullEntries[0].themeStockComposition.stock)
    //     // }
    //
    //     var stockExposureDistribution = nonNullEntries != undefined && nonNullEntries.length > 0 ?
    //         stockAllocationAggregation.groupByStockAndExposure(nonNullEntries)
    //         : [];
    //
    //     return res.status(201).json(new AppResponse('Stock exposure distribution by theme', stockExposureDistribution));
    // });
}

exports.listByThemeAndUser = function(req, res, next) {
    UserThemeStockAllocation
        .find({user: res.locals.user._id})
        .populate({
            path: 'themeStockComposition',
            match: { theme: req.theme._id }
        }).exec(function(err, results) {
            if (err) {
                return next(err);
            }

            //filter non-null entries
            var nonNullEntries = _.filter(results, function(input) {
                return input.themeStockComposition != null;
            });

            return res.status(201).json(new AppResponse('Stock allocations by theme and by user', nonNullEntries));
    });
}

exports.listStockCompositions = function(req, res, next) {
    repo.getThemeStockCompositionsByTheme(req.theme._id)
        .then(results => Promise.all(results.map(composition => repo.getStockAllocationsByThemeStockComposition(composition, res.locals.user._id))))
        .then(results => {
            console.log('Stock Allocations')
            console.log(results);
            return res.status(200).json(new AppResponse('Stock allocation data retrieved', results));
        })
        .catch(err => next(err));


    // ThemeStockComposition.find({theme: req.theme._id})
    //     .populate('stock', 'companyName country')
    //     .exec(function(err, results) {
    //     if(err) {
    //         return next(err);
    //     }
    //
    //     if(!results) {
    //         return next(new AppError('No theme-stock compositions for the given theme', 404));
    //     }
    //
    //     return res.status(200).json(new AppResponse('Theme-stock compositions retrieved', results));
    // });
}

exports.delete = function(req, res, next) {
    let stockAllocation = req.stockAllocation;
    let compositionId = stockAllocation.themeStockComposition;

    repo.remove(stockAllocation)
        .then(() => {
            return repo.notExistStockAllocationsForThemeStockComposition(compositionId);
        })
        .then(notExistStockAllocation => {
            if (notExistStockAllocation) {
                return repo.removeById(ThemeStockComposition, compositionId);
            }
        })
        .then(() => {
            return res.status(200).json(new AppResponse('Stock allocation deleted', null));
        })
        .catch(err => next(err));

    // stockAllocation.remove(function(err) {
    //     if(err) {
    //         return next(err);
    //     }
    //
    //     //if the deleted allocation was the only one for the specific theme-stock-composition, delete the composition too
    //     UserThemeStockAllocation.find({themeStockComposition: compositionId}, function(err, results) {
    //         if(err) {
    //             return next(err);
    //         }
    //
    //         //i.e. we deleted the only allocation remaining for this theme-stock composition
    //         if(!results || results.length == 0) {
    //             //delete composition
    //             //ThemeStockComposition.remove({_id: new mongoose.Types.ObjectId(compositionId)}
    //             ThemeStockComposition.findByIdAndRemove(compositionId , function(err) {
    //                 if(err) {
    //                     return next(err);
    //                 }
    //                 return res.status(200).json(new AppResponse('Stock allocation and composition deleted', null));
    //             });
    //         } else {
    //             return res.status(200).json(new AppResponse('Stock allocation deleted', null));
    //         }
    //     });
    // });
}

exports.themeById = function(req, res, next, id) {
    repo.getThemeById(id)
        .then(result => {
            if (!result) {
                return next(new AppError('No theme found for the given Id', 404))
            }

            req.theme = result;
            next();
        })
        .catch(err => next(err));
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return next(new AppError('Invalid Object Id', 400));
    // }
    //
    // Theme.findById(id).populate('creator', 'name personalRole')
    //     .exec(function (err, result) {
    //         if (err) {
    //             return next(err);
    //         }
    //
    //         if (!result) {
    //             return next(new AppError('No theme found for the given Id', 404));
    //         }
    //
    //         req.theme = result;
    //         next();
    //     });
}

exports.themeStockCompositionById = function(req, res, next, id) {
    repo.getById(ThemeStockComposition, id)
        .then(result => {
            if (!result) {
                return next(new AppError('No theme-stock composition found for the given Id', 404));
            }

            req.themeStockComposition = result;
            next();
        })
        .catch(err => next(err));

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return next(new AppError('Invalid Object Id', 400));
    // }
    //
    // ThemeStockComposition.findById(id, function(err, result) {
    //     if (err) {
    //         return next(err);
    //     }
    //
    //     if (!result) {
    //         return next(new AppError('No theme-stock composition found for the given Id', 404));
    //     }
    //
    //     req.themeStockComposition = result;
    //     next();
    // });
}

exports.stockAllocationById = function(req, res, next, id) {
    repo.getById(UserThemeStockAllocation, id)
        .then(result => {
            if (!result) {
                return next(new AppError('No stock allocation found for the given Id', 404));
            }

            //TODO: (maybe refactor) authorization check
            //"user" field of UserThemeStockAllocation is not populated => can check directly on it, instead of populating and checking its _id
            if (res.locals.user && result.user.equals(res.locals.user._id)) {
                req.stockAllocation = result;
                return next();
            }

            return next(new AppError('Not authorized', 403));
        })
        .catch(err => next(err));

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //     return next(new AppError('Invalid Object Id', 400));
    // }
    //
    // UserThemeStockAllocation.findById(id, function(err, result) {
    //     if (err) {
    //         return next(err);
    //     }
    //
    //     if (!result) {
    //         return next(new AppError('No stock allocation found for the given Id', 404));
    //     }
    //
    //     //TODO: (maybe refactor) authorization check
    //     //"user" field of UserThemeStockAllocation is not populated => can check directly on it, instead of populating and checking its _id
    //     if (res.locals.user && result.user.equals(res.locals.user._id)) {
    //         req.stockAllocation = result;
    //         return next();
    //     }
    //
    //     return next(new AppError('Not authorized', 403));
    // });
}

// function createStockCompositionAndAllocation(allocationData, theme, user) {
//     return getStockById(allocationData.stockId)
//         .then(stock => {
//             return createThemeStockComposition(theme, stock, user);
//         })
//         .then(themeStockComposition => {
//             return createStockAllocation(themeStockComposition, user, allocationData.exposure)
//         });
// }
//
// function createThemeStockComposition(theme, stock, user) {
//     var themeStockComposition = new ThemeStockComposition({
//         theme: theme,
//         stock: stock,
//         addedBy: user
//     });
//     return new Promise(function (resolve, reject) {
//         themeStockComposition.save(function(err, result) {
//             if(err) {
//                 reject(err);
//             }
//
//             console.log('created themeStockComposition')
//             resolve(result);
//         });
//     });
// }
//
// function createStockAllocation(themeStockComposition, user, exposure) {
//     var stockAllocation = new UserThemeStockAllocation({
//         user: user,
//         themeStockComposition: themeStockComposition,
//         exposure: exposure
//     });
//
//     return new Promise(function (resolve, reject) {
//         stockAllocation.save(function(err, result) {
//             if(err) {
//                 reject(err);
//             }
//
//             resolve(result);
//         });
//     });
// }
//
// function getStockById(id) {
//     return new Promise(function (resolve, reject) {
//         Stock.findById(id, function(err, result) {
//             if(err) {
//                 reject(err);
//             }
//
//             if(!result) {
//                 reject(new AppError('No stock found for the given Id', 404));
//             }
//
//             resolve(result);
//         });
//     });
// }