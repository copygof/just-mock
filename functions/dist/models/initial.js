"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialize = function initialize() {
  return _firebaseAdmin.default.initializeApp().firestore().settings({
    timestampsInSnapshots: true
  });
};

var _default = initialize;
exports.default = _default;