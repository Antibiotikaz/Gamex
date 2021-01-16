webpackHotUpdate_N_E("pages/_app",{

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
      enemyID = _ref.enemyID;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImVuZW15SUQiLCJkaXNwYXRjaCIsImJvZHkiLCJheGlvcyIsInB1dCIsInRoZW4iLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiZ2V0V2VhdGhlciIsIndvbkJhdHRsZSIsInN0YXRzUmVzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLE1BQVgsUUFBV0EsTUFBWDtBQUFBLE1BQW1CQyxXQUFuQixRQUFtQkEsV0FBbkI7QUFBQSxNQUErQkMsT0FBL0IsUUFBK0JBLE9BQS9CO0FBQUE7QUFBQSxpTUFBNkMsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzNEQyxrQkFEMkQsR0FDcEQ7QUFDWEwsc0JBQU0sRUFBTkEsTUFEVztBQUVYQyxzQkFBTSxFQUFOQSxNQUZXO0FBR1hDLDJCQUFXLEVBQVhBLFdBSFc7QUFJWEMsdUJBQU8sRUFBUEE7QUFKVyxlQURvRDtBQUFBO0FBQUEscUJBUzNERyw0Q0FBSyxDQUNSQyxHQURHLDhDQUN1Q0YsSUFBSSxDQUFDTCxNQUQ1QyxHQUNzREssSUFEdEQsRUFFSEcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLDBEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxFQVFITCxJQVJHLENBUUUsWUFBTTtBQUNWRiw0REFBSyxDQUNGUSxHQURI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QUNJO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBUEcsV0FRRyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsZUFWRyxDQUx3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWxCO0FBbUJBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBRXJCLE1BQUYsU0FBRUEsTUFBRjtBQUFBO0FBQUEsaU1BQWMsa0JBQU9JLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hDQyxrQkFEZ0MsR0FDekI7QUFDWEwsc0JBQU0sRUFBTkE7QUFEVyxlQUR5QjtBQUl0Q2dCLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVosSUFBSSxDQUFDTCxNQUFqQixFQUF5QixPQUF6QjtBQUpzQztBQUFBLHFCQUtoQ00sNENBQUssQ0FDUkMsR0FERyxrREFDMkNGLElBQUksQ0FBQ0wsTUFEaEQsR0FDMERLLElBRDFELEVBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQyx1REFEQztBQUVQQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBUEcsV0FRRyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsZUFWRyxDQUxnQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iODU3NTkwZTFjMGFlNDJjMzNiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoeyB1c2VySWQsIGhlYWx0aCwgZW5lbXlEYW1hZ2UsZW5lbXlJRCB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkLFxyXG4gICAgaGVhbHRoLFxyXG4gICAgZW5lbXlEYW1hZ2UsXHJcbiAgICBlbmVteUlELFxyXG4gIH07XHJcbiAgXHJcbiAgXHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9VUERBVEVTX0hFQUxUSCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9EQVRBX0FGVEVSX0FUVEFDSyxcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbiAoKCkgPT4ge1xyXG4gICAgICAgYXhpb3NcclxuICAgICAgLnB1dChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvdXBkYXRlL2hlYWx0aC8ke2JvZHkuZW5lbXlJRH1gLFxyXG4gICAgICAgIGJvZHlcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0VORU1ZX0hFQUxUSCxcclxuICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcGF3bkVuZW15ID0gKGVuZW15SUQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gIH07XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9lbmVtaWVzL3NwYXduLyR7Ym9keS5lbmVteUlEfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FTkVNWV9TUEFXTkVELFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9pZD01OTgwOTgmYXBwaWQ9YjU1MTYzNzhiZjAxYTEwNzdjNWY3MTMyM2JhOTUwYWMmdW5pdHM9bWV0cmljYFxyXG4gICAgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1dFQVRIRVIsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b25CYXR0bGUgPSAoe2VuZW15SUQsIHVzZXJJZH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gICAgdXNlcklkLFxyXG4gIH07XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy93b24vJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX1NUQVRTX0FGVEVSX0JBVFRMRSxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0c1Jlc2V0ID0gKHt1c2VySWR9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coYm9keS51c2VySWQsICdyZXNldCcpXHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9zdGF0c1Jlc2V0LyR7Ym9keS51c2VySWR9YCwgYm9keSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlVTRVJfU1RBVFNfUkVTRVQsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==