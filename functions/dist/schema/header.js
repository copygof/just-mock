"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var headerSchema = _joi.default.object({
  // no auth token means no access!
  // 'authorization': Joi.string().regex(/^Bearer [A-Za-z0-9]+/).required(),
  // an api version must be specified
  // 'x-api-version': Joi.number().valid(1.0, 1.1, 1.2, 2.0)
  'Content-Type': 'application/json'
});

var _default = headerSchema;
exports.default = _default;