"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = _joi.default.object({
  username: _joi.default.string().email(),
  password: _joi.default.string().required(),
  user_image: _joi.default.string(),
  facebook_account: _joi.default.string(),
  facebook_token: _joi.default.string(),
  google_token: _joi.default.string()
});

var _default = userSchema;
exports.default = _default;