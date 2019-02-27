"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMoskJsonResponse = exports.getProjectById = exports.getAllProject = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllProject = function getAllProject() {
  return _firebaseAdmin.default.firestore().collection('project').get().then(_utils.getDocumentListWithDetail);
};

exports.getAllProject = getAllProject;

var getProjectById = function getProjectById(projectId) {
  return _firebaseAdmin.default.firestore().collection('project').doc(projectId).get().then(_utils.getDocumentDetail);
};

exports.getProjectById = getProjectById;

var updateMoskJsonResponse = function updateMoskJsonResponse(projectId, endpoint) {
  return _firebaseAdmin.default.firestore().collection('project').doc(projectId).update('project_name', 'dfsfdfd').then(_utils.getDocumentDetail);
};

exports.updateMoskJsonResponse = updateMoskJsonResponse;