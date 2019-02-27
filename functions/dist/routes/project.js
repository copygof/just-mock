"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var Project = _interopRequireWildcard(require("../models/project"));

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var router = _express.default.Router();
/**
 * Get all project
*/


router.get('/', function (req, res) {
  console.log('====================');
  console.log('Get all project');
  console.log('====================');
  return Project.getAllProject().then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get detail by id
*/

router.get('/:projectId', function (req, res) {
  console.log('====================');
  console.log('Get detail by id');
  console.log('====================');
  return Project.getProjectById(req.params.projectId).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get endpoint response by project id
*/

router.get('/:projectId/:endpoint', function (req, res) {
  console.log('====================');
  console.log('Get endpoint response by project id');
  console.log('====================');
  return Project.getProjectById(req.params.projectId).then(function (data) {
    // const realData = success(data)
    var mathEndpointInApiList = function mathEndpointInApiList(apiDetail) {
      return apiDetail.endpoint === req.params.endpoint;
    };

    var hasEndpointInAPIList = data.api_list.some(mathEndpointInApiList);

    if (!hasEndpointInAPIList) {
      return Promise.reject({
        message: 'Not has endpoint in API list'
      });
    }

    var endpointDetail = data.api_list.find(mathEndpointInApiList);
    var isRandomResponse = endpointDetail.is_random_response;
    var endpointResponse = endpointDetail.response;
    var responseTimeout = endpointDetail.response_timeout;

    if (!isRandomResponse) {
      return res.setTimeout(responseTimeout).status(endpointResponse[0].json_response.code).header(endpointResponse[0].header).json(endpointResponse[0].json_response);
    }

    var endpointResponseEnable = endpointDetail.response.filter(function (value) {
      return value.enable;
    });

    var getRndInteger = function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var randomResonseNumber = getRndInteger(0, endpointResponseEnable.length - 1);
    return res.setTimeout(responseTimeout).status(endpointResponseEnable[randomResonseNumber].json_response.code).header(endpointResponseEnable[randomResonseNumber].header).json(endpointResponseEnable[randomResonseNumber].json_response);
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Upate endpoint response by project id
*/

router.post('/:projectId/:endpoint', function (req, res) {
  console.log('====================');
  console.log('Upate endpoint response by project id');
  console.log('====================');
  return Project.updateMoskJsonResponse.apply(Project, _toConsumableArray(req.params)).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
var _default = router;
exports.default = _default;