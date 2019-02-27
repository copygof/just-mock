"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var API = _interopRequireWildcard(require("../models/api"));

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var router = _express.default.Router(); // schama
// {
//   "id": "success",
//   "json_response": {},
//   "header": {},
//   "method": "GET",
//   "enable": true
// }

/**
 * Get all API
*/


router.get('/', function (req, res) {
  return API.getAllAPI().then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get all API
*/

router.post('/endpoint', function (req, res) {
  return API.addEndpoint(req.body.endpoint, {
    is_random: req.body.is_random,
    timeout: req.body.timeout
  }).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get all API
*/

router.put('/endpoint', function (req, res) {
  var _req$body = req.body,
      endpoint = _req$body.endpoint,
      reqData = _objectWithoutProperties(_req$body, ["endpoint"]);

  return API.addEndpoint(endpoint, reqData).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get all API
*/

router.post('/endpoint/response', function (req, res) {
  var _req$body2 = req.body,
      endpoint = _req$body2.endpoint,
      response_name = _req$body2.response_name,
      reqData = _objectWithoutProperties(_req$body2, ["endpoint", "response_name"]);

  return API.addResponseByEndpoint(endpoint, response_name, {
    json_response: reqData.json_response,
    header: reqData.header,
    method: reqData.method,
    enable: reqData.enable
  }).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get all API
*/

router.put('/endpoint/response', function (req, res) {
  var _req$body3 = req.body,
      endpoint = _req$body3.endpoint,
      response_name = _req$body3.response_name,
      reqData = _objectWithoutProperties(_req$body3, ["endpoint", "response_name"]);

  return API.updateResponseByEndpoint(endpoint, response_name, reqData).then(function (data) {
    return res.status(200).json((0, _utils.success)(data));
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get detail by id
*/

router.all('/:endpoint', function (req, res) {
  return Promise.all([API.getAPIByEndpointDetail(req.params.endpoint), API.getAPIByEndpointList(req.params.endpoint)]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        endpointDetail = _ref2[0],
        endpointList = _ref2[1];

    if (req.query.view) {
      return res.status(200).json((0, _utils.success)(_objectSpread({}, endpointDetail, {
        items: endpointList
      })));
    }

    if (endpointList.length === 0) {
      return Promise.reject({
        message: 'endpoint is not exits.'
      });
    }

    var isRandomResponse = endpointDetail.is_random;
    var responseTimeout = endpointDetail.timeout;

    if (!isRandomResponse) {
      // when method is not eexits.
      if (endpointList[0].method.toUpperCase() !== 'GET') {
        return Promise.reject({
          message: 'method is invalid.'
        });
      }

      return res.setTimeout(responseTimeout).status(endpointList[0].json_response.code).header(endpointList[0].header).json(endpointList[0].json_response);
    }

    var endpointResponseEnable = endpointList.filter(function (value) {
      return value.enable;
    });

    var getRndInteger = function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var randomResonseNumber = getRndInteger(0, endpointResponseEnable.length - 1); // when method is not eexits.

    if (endpointResponseEnable[randomResonseNumber].method.toUpperCase() !== 'GET') {
      return Promise.reject({
        message: 'method is invalid.'
      });
    }

    return res.setTimeout(responseTimeout).status(endpointResponseEnable[randomResonseNumber].json_response.code).header(endpointResponseEnable[randomResonseNumber].header).json(endpointResponseEnable[randomResonseNumber].json_response);
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
/**
 * Get detail by id
*/

router.all('/:endpoint/:responseName', function (req, res) {
  return API.getAPIEndpointByResponseName(req.params.endpoint, req.params.responseName).then(function (data) {
    return res.status(data.json_response.code).header(data.header).json(data.json_response);
  }).catch(function (error) {
    return res.status(400).json((0, _utils.failure)(error));
  });
});
var _default = router;
exports.default = _default;