"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failure = exports.success = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var success = function success(data) {
  if (data.error) {
    return failure(data.error, data.code);
  }

  return {
    data: data,
    code: 200
  };
};

exports.success = success;

var failure = function failure(_ref) {
  var message = _ref.message,
      errors = _ref.errors;
  var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  return {
    error: _objectSpread({}, message ? {
      message: message
    } : {}, errors ? {
      errors: errors
    } : {}),
    code: code
  };
};

exports.failure = failure;