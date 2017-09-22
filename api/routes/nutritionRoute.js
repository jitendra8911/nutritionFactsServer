'use strict'
module.exports = function (app) {
    var nutritionCtrl = require('../controllers/nutritionController');

    // nutrition values
    app.route('/nutrition/values')
        .get(nutritionCtrl.getNutritionValues);

    app.route('/nutrition/healthFacts')
        .get(nutritionCtrl.getNutritionFacts);
}