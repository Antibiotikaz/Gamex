webpackHotUpdate_N_E("pages/arena",{

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
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
              console.log(body, "body");
              _context2.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:9000/enemies/spawn/".concat(body.enemyID), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ENEMY_SPAWNED"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 4:
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
}; // export const wonBattle = (enemyID, userId) => async (dispatch) => {
//   const body = {
//     enemyID,
//     userId,
//   };
//   await axios
//     .get(`http://localhost:9000/enemies/spawn/${body.userId}`, body)
//     .then((res) => {
//       dispatch({
//         type: types.NEW_STATS_AFTER_BATTLE,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJhdHRhY2siLCJ1c2VySWQiLCJoZWFsdGgiLCJlbmVteURhbWFnZSIsImRpc3BhdGNoIiwiYm9keSIsImF4aW9zIiwicHV0IiwidGhlbiIsInJlcyIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNwYXduRW5lbXkiLCJlbmVteUlEIiwiZ2V0V2VhdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLE1BQVgsUUFBV0EsTUFBWDtBQUFBLE1BQW1CQyxXQUFuQixRQUFtQkEsV0FBbkI7QUFBQTtBQUFBLGlNQUFxQyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkRDLGtCQURtRCxHQUM1QztBQUNYSixzQkFBTSxFQUFOQSxNQURXO0FBRVhDLHNCQUFNLEVBQU5BLE1BRlc7QUFHWEMsMkJBQVcsRUFBWEE7QUFIVyxlQUQ0QztBQUFBO0FBQUEscUJBT25ERyw0Q0FBSyxDQUNSQyxHQURHLDhDQUN1Q0YsSUFBSSxDQUFDSixNQUQ1QyxHQUNzREksSUFEdEQsRUFFSEcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLDBEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxFQVFITCxJQVJHLENBUUUsWUFBTTtBQUNWRiw0REFBSyxDQUNGUSxHQURILDhDQUM2Q1QsSUFBSSxDQUFDSixNQURsRCxHQUVHTyxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JMLDBCQUFRLENBQUM7QUFDUE0sd0JBQUksRUFBRUMsNkRBREM7QUFFUEMsMkJBQU8sRUFBRUgsR0FBRyxDQUFDSTtBQUZOLG1CQUFELENBQVI7QUFJRCxpQkFQSDtBQVFELGVBakJHLFdBa0JHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQXBCRyxDQVBtRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWY7QUE4QkEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRDtBQUFBO0FBQUEsaU1BQWEsa0JBQU9mLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQy9CQyxrQkFEK0IsR0FDeEI7QUFDWGMsdUJBQU8sRUFBUEE7QUFEVyxlQUR3QjtBQUlyQ0gscUJBQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFaLEVBQWtCLE1BQWxCO0FBSnFDO0FBQUEscUJBSy9CQyw0Q0FBSyxDQUNSUSxHQURHLCtDQUN3Q1QsSUFBSSxDQUFDYyxPQUQ3QyxHQUN3RGQsSUFEeEQsRUFFSEcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLG9EQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQVZHLENBTCtCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQjtBQWtCQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBO0FBQUEsaU1BQU0sa0JBQU9oQixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN4QkUsNENBQUssQ0FDUlEsR0FERyxpSEFJSE4sSUFKRyxDQUlFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLGtEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFURyxXQVVHLFVBQUNFLEdBQUQsRUFBUztBQUNkQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDRCxlQVpHLENBRHdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFuQixDLENBZ0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJlbmEuZjFkMjFiNTk2NWI1ZTkwMjcxMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXR0YWNrID0gKHsgdXNlcklkLCBoZWFsdGgsIGVuZW15RGFtYWdlIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICB9O1xyXG5cclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX1VQREFURVNfSEVBTFRILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX0RBVEFfQUZURVJfQVRUQUNLLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcGF3bkVuZW15ID0gKGVuZW15SUQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coYm9keSwgXCJib2R5XCIpO1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy9zcGF3bi8ke2JvZHkuZW5lbXlJRH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuRU5FTVlfU1BBV05FRCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/aWQ9NTk4MDk4JmFwcGlkPWI1NTE2Mzc4YmYwMWExMDc3YzVmNzEzMjNiYTk1MGFjJnVuaXRzPW1ldHJpY2BcclxuICAgIClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9XRUFUSEVSLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3Qgd29uQmF0dGxlID0gKGVuZW15SUQsIHVzZXJJZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbi8vICAgY29uc3QgYm9keSA9IHtcclxuLy8gICAgIGVuZW15SUQsXHJcbi8vICAgICB1c2VySWQsXHJcbi8vICAgfTtcclxuLy8gICBhd2FpdCBheGlvc1xyXG4vLyAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvc3Bhd24vJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4vLyAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgdHlwZTogdHlwZXMuTkVXX1NUQVRTX0FGVEVSX0JBVFRMRSxcclxuLy8gICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgIH0pO1xyXG4vLyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9