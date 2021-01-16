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
                enemyID: enemyID,
                damage: damage,
                enemyHealth: enemyHealth
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
                axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/enemies/updateAfterHit/health/".concat(body.enemyID), body).then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImVuZW15SUQiLCJkYW1hZ2UiLCJlbmVteUhlYWx0aCIsImRpc3BhdGNoIiwiYm9keSIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNwYXduRW5lbXkiLCJnZXRXZWF0aGVyIiwid29uQmF0dGxlIiwic3RhdHNSZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV0MsTUFBWCxRQUFXQSxNQUFYO0FBQUEsTUFBbUJDLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBLE1BQStCQyxPQUEvQixRQUErQkEsT0FBL0I7QUFBQSxNQUF1Q0MsTUFBdkMsUUFBdUNBLE1BQXZDO0FBQUEsTUFBK0NDLFdBQS9DLFFBQStDQSxXQUEvQztBQUFBO0FBQUEsaU1BQWlFLGlCQUFPQyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvRUMsa0JBRCtFLEdBQ3hFO0FBQ1hQLHNCQUFNLEVBQU5BLE1BRFc7QUFFWEMsc0JBQU0sRUFBTkEsTUFGVztBQUdYQywyQkFBVyxFQUFYQSxXQUhXO0FBSVhDLHVCQUFPLEVBQVBBLE9BSlc7QUFLWEMsc0JBQU0sRUFBTkEsTUFMVztBQU1YQywyQkFBVyxFQUFYQTtBQU5XLGVBRHdFO0FBQUE7QUFBQSxxQkFXL0VHLDRDQUFLLENBQ1JDLEdBREcsOENBQ3VDRixJQUFJLENBQUNQLE1BRDVDLEdBQ3NETyxJQUR0RCxFQUVIRyxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JMLHdC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cGFnZXMvYXJlbmEuNzQzZGYyNzg3ZWJlZTZmY2ZjODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXR0YWNrID0gKHsgdXNlcklkLCBoZWFsdGgsIGVuZW15RGFtYWdlLGVuZW15SUQsZGFtYWdlLCBlbmVteUhlYWx0aCB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkLFxyXG4gICAgaGVhbHRoLFxyXG4gICAgZW5lbXlEYW1hZ2UsXHJcbiAgICBlbmVteUlELFxyXG4gICAgZGFtYWdlLFxyXG4gICAgZW5lbXlIZWFsdGgsXHJcbiAgfTtcclxuICBcclxuICBcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX1VQREFURVNfSEVBTFRILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX0RBVEFfQUZURVJfQVRUQUNLLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuICgoKSA9PiB7XHJcbiAgICAgICBheGlvc1xyXG4gICAgICAucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy91cGRhdGVBZnRlckhpdC9oZWFsdGgvJHtib2R5LmVuZW15SUR9YCxcclxuICAgICAgICBib2R5XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9FTkVNWV9IRUFMVEgsXHJcbiAgICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3Bhd25FbmVteSA9IChlbmVteUlEKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICB9O1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy9zcGF3bi8ke2JvZHkuZW5lbXlJRH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuRU5FTVlfU1BBV05FRCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/aWQ9NTk4MDk4JmFwcGlkPWI1NTE2Mzc4YmYwMWExMDc3YzVmNzEzMjNiYTk1MGFjJnVuaXRzPW1ldHJpY2BcclxuICAgIClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9XRUFUSEVSLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd29uQmF0dGxlID0gKHtlbmVteUlELCB1c2VySWR9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICAgIHVzZXJJZCxcclxuICB9O1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvd29uLyR7Ym9keS51c2VySWR9YCwgYm9keSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLk5FV19TVEFUU19BRlRFUl9CQVRUTEUsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdHNSZXNldCA9ICh7dXNlcklkfSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIHVzZXJJZCxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGJvZHkudXNlcklkLCAncmVzZXQnKVxyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvc3RhdHNSZXNldC8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX1NUQVRTX1JFU0VULFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=