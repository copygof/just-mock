"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentListWithDetail = exports.getDocumentDetail = exports.getDocumentList = void 0;

var _fp = require("lodash/fp");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getDocumentList = function getDocumentList(_ref) {
  var docs = _ref.docs;
  return docs;
};

exports.getDocumentList = getDocumentList;

var getDocumentDetail = function getDocumentDetail(doc) {
  if (doc.exists) {
    return _objectSpread({
      id: doc.id
    }, doc.data());
  }

  return {
    error: {
      message: 'Not found!'
    },
    code: 404
  };
};

exports.getDocumentDetail = getDocumentDetail;

var getDocumentListWithDetail = function getDocumentListWithDetail(queryDocSnapshot) {
  return (0, _fp.pipe)(getDocumentList, (0, _fp.map)(getDocumentDetail))(queryDocSnapshot);
};

exports.getDocumentListWithDetail = getDocumentListWithDetail;