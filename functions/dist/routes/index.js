"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _version = _interopRequireDefault(require("./version1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routers = _express.default.Router();

routers.use('/v1', _version.default);
var _default = routers;
exports.default = _default;