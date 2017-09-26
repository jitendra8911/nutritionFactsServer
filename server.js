// var express = require('express'),
//     app = express(),
//     bodyParser = require('body-parser'),
//     port = process.env.PORT || 3000;
//
//
// app.use(bodyParser.urlencoded( { extended: true }));
// app.use(bodyParser.json());
// var routes = require('./api/routes/nutritionRoute');
// routes(app);
// app.listen(port);
//
// console.log('nutrition facts api server started on port: ' + port);

let req = require('request');
process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;
const functions = require('firebase-functions');
let express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());
app.listen(port);


console.log('inside init');




// exports.getNutritionValues = function(req,res) {
//     let ingr = req.query.food;
//     request('https://api.edamam.com/api/food-database/parser?app_id=1f42d8bb&app_key=8ca5e6822e9abfd927289b214749ae7d&ingr=' + ingr, function (error, response, body) {
//         body = JSON.parse(body);
//         console.log('keys', _.keys(body));
//         if (_.isEmpty(body.hints)) {
//             console.log('could not find the nutrition values for the given food item, please try with different name');
//         } else {
//
//             console.log('body has data');
//         }
//         console.log('hello');
//         res_body = body.hints;
//         res.send(res_body);
//         // console.log('error:', error); // Print the error if one occurred
//         // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//         // console.log('body:', body); // Print the HTML for the Google homepage.
//         // app.tell(response);
//         // app.tell(error);
//     });
//
//
//
// };


// [START YourAction]
exports.yourAction = functions.https.onRequest((request, response) => {
    console.log('inside your action');
    const app = new App({request, response});
    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

// Fulfill action business logic
    function responseHandler (app) {
        let ingr = req.query.food;
        request('https://api.edamam.com/api/food-database/parser?app_id=1f42d8bb&app_key=8ca5e6822e9abfd927289b214749ae7d&ingr=' + ingr, function (error, response, body) {
            body = JSON.parse(body);
            console.log('body', body);
            if (_.isEmpty(body.hints)) {
                console.log('could not find the nutrition values for the given food item, please try with different name');
            } else {

                console.log('body has data');
            }
            app.tell('response', response);
            app.tell('error', error);
            //console.log('hello');
            //res_body = body.hints;
            //res.send(res_body);
            // console.log('error:', error); // Print the error if one occurred
            // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.
            // app.tell(response);
            // app.tell(error);
        });

    }

    const actionMap = new Map();
    actionMap.set('input.welcome', responseHandler);

    app.handleRequest(actionMap);
});