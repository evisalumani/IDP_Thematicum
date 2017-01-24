var express = require('express');
var router = express.Router();
var themeController = require('../controllers/themes.controller');
var authUtilities = require('../utilities/authUtilities');

//auth middleware
router.use('/', authUtilities.authenticationMiddleware);

router.route('/tags')
    .get(themeController.getTags);

router.route('/')
    .get(themeController.list)
    .post(themeController.create);

router.route('/:themeId')
    .get(themeController.read)
    .put(themeController.update)
    .delete(themeController.deleteThemeData);

router.param('themeId', themeController.themeById);

module.exports = router;
