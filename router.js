var express = require('express');
var router = express.Router();
var app = express();


module.exports = function(app) {
    router.get('/', function (request, response) {
        response.end("Welcome to the homepage!");
    });

    router.get('/login', function (request, response) {
        response.end("Welcome to the login page!");
    });

    router.get('/register', function (request, response) {
        response.end("Welcome to the register page!");
    });

    app.use('/', router);

}