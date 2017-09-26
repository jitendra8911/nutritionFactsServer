'use strict';

var request = require('request');
var _ = require('lodash');
var res_body = {};
exports.getNutritionValues = function(req,res) {
    var ingr = req.query.food;
    // request('https://api.edamam.com/api/food-database/parser?app_id=1f42d8bb&app_key=8ca5e6822e9abfd927289b214749ae7d&ingr=' + ingr, function (error, response, body) {
    //     body = JSON.parse(body);
    //     console.log('keys', _.keys(body));
    //     if (_.isEmpty(body.hints)) {
    //         console.log('could not find the nutrition values for the given food item, please try with different name');
    //     } else {
    //
    //         console.log('body has data');
    //     }
    //     res_body = body.hints;
    //     res.send(res_body);
    //     // console.log('error:', error); // Print the error if one occurred
    //     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //     // console.log('body:', body); // Print the HTML for the Google homepage.
    //     // app.tell(response);
    //     // app.tell(error);
    // });

    res.send('hello')

};
