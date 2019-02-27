"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = exports.app = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var app = functions.https.onRequest(function (_, res) {
  res.send('Say hi app');
});
exports.app = app;
var api = functions.https.onRequest(_app.default);
exports.api = api;