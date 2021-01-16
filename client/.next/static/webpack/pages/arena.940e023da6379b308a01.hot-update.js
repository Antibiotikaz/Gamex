webpackHotUpdate_N_E("pages/arena",{

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather, wonBattle, statsReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonBattle", function() { return wonBattle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statsReset", function() { return statsReset; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var attack = function attack(_ref) {
  var userId = _ref.userId,
      health = _ref.health,
      enemyDamage = _ref.enemyDamage,
      enemyID = _ref.enemyID,
      damage = _ref.damage,
      enemyHealth = _ref.enemyHealth;
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = {
                userId: userId,
                health: health,
                enemyDamage: enemyDamage,
                enemyID: enemyID
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/users/attack/".concat(body.userId), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_UPDATES_HEALTH"],
                  payload: res.data
                });
              }).then(function () {
                axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:9000/users/attack/".concat(body.userId)).then(function (res) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_DATA_AFTER_ATTACK"],
                    payload: res.data
                  });
                });
              }).then(function () {
                axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/enemies/update/health/".concat(body.enemyID), body).then(function (res) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_ENEMY_HEALTH"],
                    payload: res.data
                  });
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};
var spawnEnemy = function spawnEnemy(enemyID) {
  return /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = {
                enemyID: enemyID
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:9000/enemies/spawn/".concat(body.enemyID), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ENEMY_SPAWNED"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
};
var getWeather = function getWeather() {
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://api.openweathermap.org/data/2.5/weather?id=598098&appid=b5516378bf01a1077c5f71323ba950ac&units=metric").then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_WEATHER"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var wonBattle = function wonBattle(_ref5) {
  var enemyID = _ref5.enemyID,
      userId = _ref5.userId;
  return /*#__PURE__*/function () {
    var _ref6 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = {
                enemyID: enemyID,
                userId: userId
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/users/won/".concat(body.userId), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["NEW_STATS_AFTER_BATTLE"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref6.apply(this, arguments);
    };
  }();
};
var statsReset = function statsReset(_ref7) {
  var userId = _ref7.userId;
  return /*#__PURE__*/function () {
    var _ref8 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              body = {
                userId: userId
              };
              console.log(body.userId, 'reset');
              _context5.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/users/statsReset/".concat(body.userId), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_STATS_RESET"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref8.apply(this, arguments);
    };
  }();
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImVuZW15SUQiLCJkYW1hZ2UiLCJlbmVteUhlYWx0aCIsImRpc3BhdGNoIiwiYm9keSIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNwYXduRW5lbXkiLCJnZXRXZWF0aGVyIiwid29uQmF0dGxlIiwic3RhdHNSZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsTUFBWCxRQUFXQSxNQUFYO0FBQUEsTUFBbUJDLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBLE1BQStCQyxPQUEvQixRQUErQkEsT0FBL0I7QUFBQSxNQUF1Q0MsTUFBdkMsUUFBdUNBLE1BQXZDO0FBQUEsTUFBK0NDLFdBQS9DLFFBQStDQSxXQUEvQztBQUFBO0FBQUEsaU1BQWlFLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvRUMsa0JBRCtFLEdBQ3hFO0FBQ1hQLHNCQUFNLEVBQU5BLE1BRFc7QUFFWEMsc0JBQU0sRUFBTkEsTUFGVztBQUdYQywyQkFBVyxFQUFYQSxXQUhXO0FBSVhDLHVCQUFPLEVBQVBBO0FBSlcsZUFEd0U7QUFBQTtBQUFBLHFCQVMvRUssNENBQUssQ0FDUkMsR0FERyw4Q0FDdUNGLElBQUksQ0FBQ1AsTUFENUMsR0FDc0RPLElBRHRELEVBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQywwREFEQztBQUVQQyx5QkFBTyxF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QUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLDZEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQVZHLENBTHdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEI7QUFtQkEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxNQUFFdkIsTUFBRixTQUFFQSxNQUFGO0FBQUE7QUFBQSxpTUFBYyxrQkFBT00sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaENDLGtCQURnQyxHQUN6QjtBQUNYUCxzQkFBTSxFQUFOQTtBQURXLGVBRHlCO0FBSXRDa0IscUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFJLENBQUNQLE1BQWpCLEVBQXlCLE9BQXpCO0FBSnNDO0FBQUEscUJBS2hDUSw0Q0FBSyxDQUNSQyxHQURHLGtEQUMyQ0YsSUFBSSxDQUFDUCxNQURoRCxHQUMwRE8sSUFEMUQsRUFFSEcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLHVEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQVZHLENBTGdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcmVuYS45NDBlMDIzZGE2Mzc5YjMwOGEwMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoeyB1c2VySWQsIGhlYWx0aCwgZW5lbXlEYW1hZ2UsZW5lbXlJRCxkYW1hZ2UsIGVuZW15SGVhbHRoIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICAgIGVuZW15SUQsXHJcbiAgfTtcclxuICBcclxuICBcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX1VQREFURVNfSEVBTFRILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX0RBVEFfQUZURVJfQVRUQUNLLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuICgoKSA9PiB7XHJcbiAgICAgICBheGlvc1xyXG4gICAgICAucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy91cGRhdGUvaGVhbHRoLyR7Ym9keS5lbmVteUlEfWAsXHJcbiAgICAgICAgYm9keVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRU5FTVlfSEVBTFRILFxyXG4gICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNwYXduRW5lbXkgPSAoZW5lbXlJRCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgfTtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvc3Bhd24vJHtib2R5LmVuZW15SUR9YCwgYm9keSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkVORU1ZX1NQQVdORUQsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoXHJcbiAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2lkPTU5ODA5OCZhcHBpZD1iNTUxNjM3OGJmMDFhMTA3N2M1ZjcxMzIzYmE5NTBhYyZ1bml0cz1tZXRyaWNgXHJcbiAgICApXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5HRVRfV0VBVEhFUixcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHdvbkJhdHRsZSA9ICh7ZW5lbXlJRCwgdXNlcklkfSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICB1c2VySWQsXHJcbiAgfTtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL3dvbi8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ORVdfU1RBVFNfQUZURVJfQkFUVExFLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHN0YXRzUmVzZXQgPSAoe3VzZXJJZH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhib2R5LnVzZXJJZCwgJ3Jlc2V0JylcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL3N0YXRzUmVzZXQvJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9TVEFUU19SRVNFVCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9