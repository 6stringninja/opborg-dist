"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
//const config = require('../libs/configuration')
var port = 80; //config.web.port;
var defaultRoutes = require('./web/router/default');
app.use('/static', express.static('../web/public'));
app.listen(port, function () { return console.log("Example app listening on port " + port + "!"); });
//# sourceMappingURL=init.js.map