"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _celebrate = require("celebrate");

var User = _interopRequireWildcard(require("../models/user"));

var _user2 = _interopRequireDefault(require("../schema/user"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/:userId', function (req, res) {
  // const errors = validationResult(req)
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array(), code: 422 })
  // }
  return User.getUserById(req.params.userId).then(function (data) {
    return res.status(200).json(success(data));
  }).catch(function (error) {
    return res.status(400).json(failure(error));
  });
});
router.post('/', (0, _celebrate.celebrate)({
  body: _user2.default
}), function (req, res) {
  // const errors = validationResult(req)
  // if (!errors.isEmpty()) {
  //   return res.status(422).json({ errors: errors.array(), code: 422 })
  // }
  // console.log('req.body', req)
  return res.status(200).json({
    code: '200'
  }); // return User
  //   .getUserById(req.params.userId)
  //   .then(data => res.status(200).json(success(data)))
  //   .catch(error => res.status(400).json(failure(error)))
});
var _default = router;
exports.default = _default;