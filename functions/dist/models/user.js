"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserById = exports.getAllUser = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllUser = function getAllUser() {
  return _firebaseAdmin.default.firestore().collection('users').get().then(_utils.getDocumentListWithDetail);
};

exports.getAllUser = getAllUser;

var getUserById = function getUserById(userId) {
  return _firebaseAdmin.default.firestore().collection('users').doc(userId).get().then(_utils.getDocumentDetail);
};

exports.getUserById = getUserById;