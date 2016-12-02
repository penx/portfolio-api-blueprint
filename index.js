'use strict';
var path = require('path');
var express = require('express');
var drakovMiddleware = require('drakov').middleware;

Object.defineProperty(exports, '__esModule', {
    value: true
});

var argv = {
    sourceFiles: path.join(__dirname, 'api-blueprint.apib'),
    delay: 500
};

var app = express();
drakovMiddleware.init(app, argv, function(err, middlewareFunction) {
    if (err) {
        throw err;
    }
    app.use(middlewareFunction);
    app.use(function(req, res, next) {
        // by default, drakov continues to next route, but we want to halt all subsequent routing so that it can be used as as subapp
    });
});

exports.default = app;
