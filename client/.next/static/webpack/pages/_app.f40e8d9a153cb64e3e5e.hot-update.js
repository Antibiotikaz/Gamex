webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather, wonBattle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonBattle", function() { return wonBattle; });
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
var wonBattle = function wonBattle(enemyID, userId) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = {
                enemyID: enemyID,
                userId: userId
              };
              console.log(body.userId, "wont Battle userID");
              _context4.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/users/won/".concat(body.userId), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["NEW_STATS_AFTER_BATTLE"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImRpc3BhdGNoIiwiYm9keSIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNwYXduRW5lbXkiLCJlbmVteUlEIiwiZ2V0V2VhdGhlciIsIndvbkJhdHRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxNQUFXQyxNQUFYLFFBQVdBLE1BQVg7QUFBQSxNQUFtQkMsV0FBbkIsUUFBbUJBLFdBQW5CO0FBQUE7QUFBQSxpTUFBcUMsaUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25EQyxrQkFEbUQsR0FDNUM7QUFDWEosc0JBQU0sRUFBTkEsTUFEVztBQUVYQyxzQkFBTSxFQUFOQSxNQUZXO0FBR1hDLDJCQUFXLEVBQVhBO0FBSFcsZUFENEM7QUFBQTtBQUFBLHFCQU9uREcsNENBQUssQ0FDUkMsR0FERyw4Q0FDdUNGLElBQUksQ0FBQ0osTUFENUMsR0FDc0RJLElBRHRELEVBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQywwREFEQztBQUVQQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBUEcsRUFRSEwsSUFSRyxDQVFFLFlBQU07QUFDVkYsNERBQUssQ0FDRlEsR0FESCw4Q0FDNkNULElBQUksQ0FBQ0osTUFEbEQsR0FFR08sSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiTCwwQkFBUSxDQUFDO0FBQ1BNLHdCQUFJLEVBQUVDLDZEQURDO0FBRVBDLDJCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixtQkFBRCxDQUFSO0FBSUQsaUJBUEg7QUFRRCxlQWpCRyxXQWtCRyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsZUFwQkcsQ0FQbUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmO0FBOEJBLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLE9BQUQ7QUFBQTtBQUFBLGlNQUFhLGtCQUFPZixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQkMsa0JBRCtCLEdBQ3hCO0FBQ1hjLHVCQUFPLEVBQVBBO0FBRFcsZUFEd0I7QUFBQTtBQUFBLHFCQUkvQmIsNENBQUssQ0FDUlEsR0FERywrQ0FDd0NULElBQUksQ0FBQ2MsT0FEN0MsR0FDd0RkLElBRHhELEVBRUhHLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQyxvREFEQztBQUVQQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBUEcsV0FRRyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsZUFWRyxDQUorQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFpQkEsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTtBQUFBLGlNQUFNLGtCQUFPaEIsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDeEJFLDRDQUFLLENBQ1JRLEdBREcsaUhBSUhOLElBSkcsQ0FJRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQyxrREFEQztBQUVQQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4saUJBQUQsQ0FBUjtBQUlELGVBVEcsV0FVRyxVQUFDRSxHQUFELEVBQVM7QUFDZEMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0QsZUFaRyxDQUR3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFnQkEsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0YsT0FBRCxFQUFVbEIsTUFBVjtBQUFBO0FBQUEsaU1BQXFCLGtCQUFPRyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0Q0Msa0JBRHNDLEdBQy9CO0FBQ1hjLHVCQUFPLEVBQVBBLE9BRFc7QUFFWGxCLHNCQUFNLEVBQU5BO0FBRlcsZUFEK0I7QUFLNUNlLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVosSUFBSSxDQUFDSixNQUFqQixFQUF5QixvQkFBekI7QUFMNEM7QUFBQSxxQkFNdENLLDRDQUFLLENBQ1JDLEdBREcsMkNBQ29DRixJQUFJLENBQUNKLE1BRHpDLEdBQ21ESSxJQURuRCxFQUVIRyxJQUZHLENBRUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JMLHdCQUFRLENBQUM7QUFDUE0sc0JBQUksRUFBRUMsNkRBREM7QUFFUEMseUJBQU8sRUFBRUgsR0FBRyxDQUFDSTtBQUZOLGlCQUFELENBQVI7QUFJRCxlQVBHLFdBUUcsVUFBQ0UsR0FBRCxFQUFTO0FBQ2RDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNELGVBVkcsQ0FOc0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY0MGU4ZDlhMTUzY2I2NGUzZTVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF0dGFjayA9ICh7IHVzZXJJZCwgaGVhbHRoLCBlbmVteURhbWFnZSB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgdXNlcklkLFxyXG4gICAgaGVhbHRoLFxyXG4gICAgZW5lbXlEYW1hZ2UsXHJcbiAgfTtcclxuXHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9VUERBVEVTX0hFQUxUSCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC91c2Vycy9hdHRhY2svJHtib2R5LnVzZXJJZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZXMuVVNFUl9EQVRBX0FGVEVSX0FUVEFDSyxcclxuICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc3Bhd25FbmVteSA9IChlbmVteUlEKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBjb25zdCBib2R5ID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICB9O1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy9zcGF3bi8ke2JvZHkuZW5lbXlJRH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuRU5FTVlfU1BBV05FRCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/aWQ9NTk4MDk4JmFwcGlkPWI1NTE2Mzc4YmYwMWExMDc3YzVmNzEzMjNiYTk1MGFjJnVuaXRzPW1ldHJpY2BcclxuICAgIClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9XRUFUSEVSLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd29uQmF0dGxlID0gKGVuZW15SUQsIHVzZXJJZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICB1c2VySWQsXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhib2R5LnVzZXJJZCwgXCJ3b250IEJhdHRsZSB1c2VySURcIilcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL3dvbi8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5ORVdfU1RBVFNfQUZURVJfQkFUVExFLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=