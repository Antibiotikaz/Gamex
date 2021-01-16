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
  var enemyID = _ref3.enemyID;
  return /*#__PURE__*/function () {
    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = {
                enemyID: enemyID
              };
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("http://localhost:9000/enemies/health/updateAfterHit/".concat(body.enemyID), body).then(function (res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQWN0aW9ucy9lbmVteUFjdGlvbnMuanMiXSwibmFtZXMiOlsidXBkYXRlRW5lbXlIZWFsdGgiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJkYW1hZ2UiLCJkaXNwYXRjaCIsImJvZHkiLCJheGlvcyIsInB1dCIsInRoZW4iLCJyZXMiLCJ0eXBlIiwidHlwZXMiLCJwYXlsb2FkIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXNldEVuZW15SGVhbHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLE1BQVdDLFdBQVgsUUFBV0EsV0FBWDtBQUFBLE1BQXdCQyxNQUF4QixRQUF3QkEsTUFBeEI7QUFBQTtBQUFBLGlNQUFxQyxpQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNURDLGtCQUQ0RCxHQUNyRDtBQUNUSix1QkFBTyxFQUFQQSxPQURTO0FBRVRDLDJCQUFXLEVBQVhBLFdBRlM7QUFHVEMsc0JBQU0sRUFBTkE7QUFIUyxlQURxRDtBQUFBO0FBQUEscUJBTzVERyw0Q0FBSyxDQUNSQyxHQURHLHVEQUU2Q0YsSUFBSSxDQUFDSixPQUZsRCxHQUdGSSxJQUhFLEVBS0hHLElBTEcsQ0FLRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQywwREFEQztBQUVKQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRlQsaUJBQUQsQ0FBUjtBQUlELGVBVkcsV0FXRyxVQUFDQyxHQUFELEVBQVM7QUFDVkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0wsZUFiRyxDQVA0RDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFyQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTFCO0FBdUJFLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUI7QUFBQSxNQUFFaEIsT0FBRixTQUFFQSxPQUFGO0FBQUE7QUFBQSxpTUFBZ0Isa0JBQU9HLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3hDQyxrQkFEd0MsR0FDakM7QUFDVEosdUJBQU8sRUFBUEE7QUFEUyxlQURpQztBQUFBO0FBQUEscUJBS3hDSyw0Q0FBSyxDQUNSQyxHQURHLCtEQUVxREYsSUFBSSxDQUFDSixPQUYxRCxHQUdGSSxJQUhFLEVBS0hHLElBTEcsQ0FLRSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsd0JBQVEsQ0FBQztBQUNQTSxzQkFBSSxFQUFFQyx3REFEQztBQUVKQyx5QkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRlQsaUJBQUQsQ0FBUjtBQUlELGVBVkcsV0FXRyxVQUFDQyxHQUFELEVBQVM7QUFDVkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0wsZUFiRyxDQUx3Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FyZW5hLjZjOGQ4NDkxNjc1MzlhOWUxZDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVFbmVteUhlYWx0aCA9ICh7ZW5lbXlJRCwgZW5lbXlIZWFsdGgsIGRhbWFnZSB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZW5lbXlJRCxcclxuICAgICAgICBlbmVteUhlYWx0aCxcclxuICAgICAgICBkYW1hZ2UsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy91cGRhdGUvaGVhbHRoLyR7Ym9keS5lbmVteUlEfWAsXHJcbiAgICAgICAgYm9keVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRU5FTVlfSEVBTFRILFxyXG4gICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBjb25zdCByZXNldEVuZW15SGVhbHRoID0gKHtlbmVteUlEIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICBlbmVteUlELFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgYXdhaXQgYXhpb3NcclxuICAgICAgLnB1dChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvaGVhbHRoL3VwZGF0ZUFmdGVySGl0LyR7Ym9keS5lbmVteUlEfWAsXHJcbiAgICAgICAgYm9keVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5FTkVNWV9TVEFUU19SRVNFVCxcclxuICAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9OyJdLCJzb3VyY2VSb290IjoiIn0=