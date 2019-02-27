"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateResponseByEndpoint = exports.addResponseByEndpoint = exports.updateEndpoint = exports.addEndpoint = exports.getAPIEndpointByResponseName = exports.getAPIByEndpointList = exports.getAPIByEndpointDetail = exports.getAllAPI = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getAllAPI = function getAllAPI() {
  return _firebaseAdmin.default.firestore().collection('api_list').get().then(_utils.getDocumentListWithDetail);
};

exports.getAllAPI = getAllAPI;

var getAPIByEndpointDetail = function getAPIByEndpointDetail(endpoint) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).get().then(_utils.getDocumentDetail);
};

exports.getAPIByEndpointDetail = getAPIByEndpointDetail;

var getAPIByEndpointList = function getAPIByEndpointList(endpoint) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).collection('response').get().then(_utils.getDocumentListWithDetail);
};

exports.getAPIByEndpointList = getAPIByEndpointList;

var getAPIEndpointByResponseName = function getAPIEndpointByResponseName(endpoint, resopnseName) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).collection('response').doc(resopnseName).get().then(_utils.getDocumentDetail);
};
/** Add endpoint */


exports.getAPIEndpointByResponseName = getAPIEndpointByResponseName;

var addEndpoint = function addEndpoint(endpoint, data) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).set(_objectSpread({
    is_random: true,
    timeout: 0
  }, data));
};
/** Update endpoint */


exports.addEndpoint = addEndpoint;

var updateEndpoint = function updateEndpoint(endpoint, data) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).update(data);
};
/** Add response */


exports.updateEndpoint = updateEndpoint;

var addResponseByEndpoint = function addResponseByEndpoint(endpoint, responseName, data) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).collection('response').doc(responseName).set(_objectSpread({
    json_response: {},
    header: {},
    method: "GET",
    enable: true
  }, data));
};
/** Update response */


exports.addResponseByEndpoint = addResponseByEndpoint;

var updateResponseByEndpoint = function updateResponseByEndpoint(endpoint, responseName, data) {
  return _firebaseAdmin.default.firestore().collection('api_list').doc(endpoint).collection('response').doc(responseName).update(data);
};

exports.updateResponseByEndpoint = updateResponseByEndpoint;