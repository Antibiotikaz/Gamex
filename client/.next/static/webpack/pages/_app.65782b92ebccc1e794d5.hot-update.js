webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather, wonBattle, tokenConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonBattle", function() { return wonBattle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenConfig", function() { return tokenConfig; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var attack = function attack(_ref) {
  var userId = _ref.userId,
      health = _ref.health,
      enemyDamage = _ref.enemyDamage;
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
                enemyDamage: enemyDamage
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:9000/users", tokenConfig(getState)).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["USER_LOADED"],
                  payload: res.data
                });
              }).then(function () {
                axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/users/attack/".concat(body.userId), body).then(function (res) {
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
}; // setup config/headers and token

var tokenConfig = function tokenConfig() {
  var cookie = new Cookies();
  var token = cookie.get("token"); // headers

  var config = {
    headers: {
      "content-type": "application/json"
    }
  }; //iff token, add to headers

  if (token) {
    config.headers["x-auth-token"] = token;
  }

  return config;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImRpc3BhdGNoIiwiYm9keSIsImF4aW9zIiwiZ2V0IiwidG9rZW5Db25maWciLCJnZXRTdGF0ZSIsInRoZW4iLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsInB1dCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiZW5lbXlJRCIsImdldFdlYXRoZXIiLCJ3b25CYXR0bGUiLCJjb29raWUiLCJDb29raWVzIiwidG9rZW4iLCJjb25maWciLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxNQUFYLFFBQVdBLE1BQVg7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUE7QUFBQSxpTUFBcUMsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25EQyxrQkFEbUQsR0FDNUM7QUFDWEosc0JBQU0sRUFBTkEsTUFEVztBQUVYQyxzQkFBTSxFQUFOQSxNQUZXO0FBR1hDLDJCQUFXLEVBQVhBO0FBSFcsZUFENEM7QUFBQTtBQUFBLHFCQU1uREcsNENBQUssQ0FDVkMsR0FESyxDQUNELDZCQURDLEVBQzhCQyxXQUFXLENBQUNDLFFBQUQsQ0FEekMsRUFFTEMsSUFGSyxDQUVBLFVBQUNDLEdBQUQsRUFBUztBQUNiUCx3QkFBUSxDQUFDO0FBQ1BRLHNCQUFJLEVBQUVDLGtEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQSyxFQVFMTCxJQVJLLENBUUEsWUFBTTtBQUNUSiw0REFBSyxDQUNM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LEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQVZHLENBTHdDOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbEIsQyxDQWlCUDs7QUFDTyxJQUFNVCxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQy9CLE1BQU1nQixNQUFNLEdBQUcsSUFBSUMsT0FBSixFQUFmO0FBRUEsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNqQixHQUFQLENBQVcsT0FBWCxDQUFkLENBSCtCLENBSy9COztBQUNBLE1BQU1vQixNQUFNLEdBQUc7QUFDYkMsV0FBTyxFQUFFO0FBQ1Asc0JBQWdCO0FBRFQ7QUFESSxHQUFmLENBTitCLENBWS9COztBQUNBLE1BQUlGLEtBQUosRUFBVztBQUNUQyxVQUFNLENBQUNDLE9BQVAsQ0FBZSxjQUFmLElBQWlDRixLQUFqQztBQUNEOztBQUNELFNBQU9DLE1BQVA7QUFDRCxDQWpCTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY1NzgyYjkyZWJjY2MxZTc5NGQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF0dGFjayA9ICh7IHVzZXJJZCwgaGVhbHRoLCBlbmVteURhbWFnZSB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkLFxyXG4gICAgaGVhbHRoLFxyXG4gICAgZW5lbXlEYW1hZ2UsXHJcbiAgfTtcclxuICBhd2FpdCBheGlvc1xyXG4gIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnNcIiwgdG9rZW5Db25maWcoZ2V0U3RhdGUpKVxyXG4gIC50aGVuKChyZXMpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogdHlwZXMuVVNFUl9MT0FERUQsXHJcbiAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICAgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9VUERBVEVTX0hFQUxUSCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9EQVRBX0FGVEVSX0FUVEFDSyxcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgfSlcclxuICBcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcGF3bkVuZW15ID0gKGVuZW15SUQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gIH07XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9lbmVtaWVzL3NwYXduLyR7Ym9keS5lbmVteUlEfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FTkVNWV9TUEFXTkVELFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9pZD01OTgwOTgmYXBwaWQ9YjU1MTYzNzhiZjAxYTEwNzdjNWY3MTMyM2JhOTUwYWMmdW5pdHM9bWV0cmljYFxyXG4gICAgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1dFQVRIRVIsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b25CYXR0bGUgPSAoe2VuZW15SUQsIHVzZXJJZH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gICAgdXNlcklkLFxyXG4gIH07XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy93b24vJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX1NUQVRTX0FGVEVSX0JBVFRMRSxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4vLyBzZXR1cCBjb25maWcvaGVhZGVycyBhbmQgdG9rZW5cclxuZXhwb3J0IGNvbnN0IHRva2VuQ29uZmlnID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKCk7XHJcblxyXG4gIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAvLyBoZWFkZXJzXHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgLy9pZmYgdG9rZW4sIGFkZCB0byBoZWFkZXJzXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBjb25maWcuaGVhZGVyc1tcIngtYXV0aC10b2tlblwiXSA9IHRva2VuO1xyXG4gIH1cclxuICByZXR1cm4gY29uZmlnO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9