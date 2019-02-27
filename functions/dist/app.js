"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressJoiValidation = _interopRequireDefault(require("express-joi-validation"));

var _initial = _interopRequireDefault(require("./models/initial"));

var _errorHandling = require("./middlewares/errorHandling");

var _header = _interopRequireDefault(require("./schema/header"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('celebrate'),
    celebrate = _require.celebrate,
    errors = _require.errors;

var app = (0, _express.default)(); // initialize database from firestore

(0, _initial.default)(); // support parsing of application/json type post data

app.use(_bodyParser.default.json()); //support parsing of application/x-www-form-urlencoded post data

app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)({
  origin: true
}));
app.use((0, _expressJoiValidation.default)().headers(_header.default));
app.use(_routes.default);
app.use(errors());
app.use(_errorHandling.errorHandler);
app.use(_errorHandling.joiErrorHandling);
var _default = app;
exports.default = _default;