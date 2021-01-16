webpackHotUpdate_N_E("pages/arena",{

/***/ "./store/Actions/enemyActions.js":
/*!***************************************!*\
  !*** ./store/Actions/enemyActions.js ***!
  \***************************************/
/*! exports provided: updateEnemyHealth, resetEnemyHealth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHealth", function() { return updateEnemyHealth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetEnemyHealth", function() { return resetEnemyHealth; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var updateEnemyHealth = function updateEnemyHealth(_ref) {
  var enemyID = _ref.enemyID,
      enemyHealth = _ref.enemyHealth,
      damage = _ref.damage;
  return /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = {
                enemyID: enemyID,
                enemyHealth: enemyHealth,
                damage: damage
              };
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/enemies/update/health/".concat(body.enemyID), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_ENEMY_HEALTH"],
                  payload: res.data
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
var resetEnemyHealth = function resetEnemyHealth(_ref3) {
  var enemyID = _ref3.enemyID,
      enemyHealth = _ref3.enemyHealth;
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = {
                enemyID: enemyID,
                enemyHealth: enemyHealth
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/enemies/update/health/".concat(body.enemyID), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["ENEMY_STATS_RESET"],
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
      return _ref4.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy9lbmVteUFjdGlvbnMuanMiXSwibmFtZXMiOlsidXBkYXRlRW5lbXlIZWFsdGgiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJkYW1hZ2UiLCJkaXNwYXRjaCIsImJvZHkiLCJheGlvcyIsInB1dCIsInRoZW4iLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXNldEVuZW15SGVhbHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLE1BQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQTtBQUFBLGlNQUFxQyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNURDLGtCQUQ0RCxHQUNyRDtBQUNUSix1QkFBTyxFQUFQQSxPQURTO0FBRVRDLDJCQUFXLEVBQVhBLFdBRlM7QUFHVEMsc0JBQU0sRUFBTkE7QUFIUyxlQURxRDtBQUFBO0FBQUEscUJBTzVERyw0Q0FBSyxDQUNSQyxHQURHLHVEQUU2Q0YsSUFBSSxDQUFDSixPQUZsRCxHQUdGSSxJQUhFLEVBS0hHLElBTEcsQ0FLRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQywwREFEQztBQUVKQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRlQsaUJBQUQsQ0FBUjtBQUlELGVBVkcsV0FXRyxVQUFDQyxHQUFELEVBQVM7QUFDVkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0wsZUFiRyxDQVA0RDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTFCO0FBdUJFLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFaEIsT0FBRixTQUFFQSxPQUFGO0FBQUEsTUFBV0MsV0FBWCxTQUFXQSxXQUFYO0FBQUE7QUFBQSxpTUFBNkIsa0JBQU9FLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JEQyxrQkFEcUQsR0FDOUM7QUFDVEosdUJBQU8sRUFBUEEsT0FEUztBQUVUQywyQkFBVyxFQUFYQTtBQUZTLGVBRDhDO0FBQUE7QUFBQSxxQkFNckRJLDRDQUFLLENBQ1JDLEdBREcsdURBRTZDRixJQUFJLENBQUNKLE9BRmxELEdBR0ZJLElBSEUsRUFLSEcsSUFMRyxDQUtFLFVBQUNDLEdBQUQsRUFBUztBQUNiTCx3QkFBUSxDQUFDO0FBQ1BNLHNCQUFJLEVBQUVDLHdEQURDO0FBRUpDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGVCxpQkFBRCxDQUFSO0FBSUQsZUFWRyxXQVdHLFVBQUNDLEdBQUQsRUFBUztBQUNWQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDTCxlQWJHLENBTnFEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTdCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJlbmEuMTM2OWNhNWYyMTM0NjI0MWNjY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUVuZW15SGVhbHRoID0gKHtlbmVteUlELCBlbmVteUhlYWx0aCwgZGFtYWdlIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbmVteUlELFxyXG4gICAgICAgIGVuZW15SGVhbHRoLFxyXG4gICAgICAgIGRhbWFnZSxcclxuICAgIH07XHJcbiAgICBcclxuICAgIGF3YWl0IGF4aW9zXHJcbiAgICAgIC5wdXQoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9lbmVtaWVzL3VwZGF0ZS9oZWFsdGgvJHtib2R5LmVuZW15SUR9YCxcclxuICAgICAgICBib2R5XHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9FTkVNWV9IRUFMVEgsXHJcbiAgICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IHJlc2V0RW5lbXlIZWFsdGggPSAoe2VuZW15SUQsIGVuZW15SGVhbHRoIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbmVteUlELFxyXG4gICAgICAgIGVuZW15SGVhbHRoLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLnB1dChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvdXBkYXRlL2hlYWx0aC8ke2JvZHkuZW5lbXlJRH1gLFxyXG4gICAgICAgIGJvZHlcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogdHlwZXMuRU5FTVlfU1RBVFNfUkVTRVQsXHJcbiAgICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfTsiXSwic291cmNlUm9vdCI6IiJ9