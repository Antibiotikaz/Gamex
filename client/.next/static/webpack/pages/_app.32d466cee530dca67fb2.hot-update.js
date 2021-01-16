webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/enemyReducer.js":
/*!****************************************!*\
  !*** ./store/reducers/enemyReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./store/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  isSpawned: false
};

var enemyReducer = function enemyReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["ENEMY_SPAWNED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        enemy: action.payload,
        isSpawned: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_ENEMY_HEALTH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        enemy: action.payload,
        isSpawned: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_1__["ENEMY_STATS_RESET"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        enemy: action.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (enemyReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvZW5lbXlSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImlzU3Bhd25lZCIsImVuZW15UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInR5cGVzIiwiZW5lbXkiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDakJDLFdBQVMsRUFBRTtBQURNLENBQXJCOztBQU1BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkgsWUFBeUI7QUFBQSxNQUFYSSxNQUFXOztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFFSSxTQUFLQyxvREFBTDtBQUVFLDZDQUNLSCxLQURMO0FBRUVJLGFBQUssRUFBRUgsTUFBTSxDQUFDSSxPQUZoQjtBQUdFUCxpQkFBUyxFQUFFO0FBSGI7O0FBS0EsU0FBS0ssMERBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFSSxhQUFLLEVBQUVILE1BQU0sQ0FBQ0ksT0FGaEI7QUFHRVAsaUJBQVMsRUFBRTtBQUhiOztBQUtBLFNBQUtLLHdEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRUksYUFBSyxFQUFFSCxNQUFNLENBQUNJO0FBRmhCOztBQUtSO0FBQ0UsYUFBT0wsS0FBUDtBQXRCSjtBQXdCRCxDQXpCRDs7QUEyQmVELDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzJkNDY2Y2VlNTMwZGNhNjdmYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzU3Bhd25lZDogZmFsc2UsXHJcbn07XHJcblxyXG5cclxuXHJcbmNvbnN0IGVuZW15UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICBcclxuICAgICAgY2FzZSB0eXBlcy5FTkVNWV9TUEFXTkVEOlxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBlbmVteTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICBpc1NwYXduZWQ6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgdHlwZXMuVVBEQVRFX0VORU1ZX0hFQUxUSDpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBlbmVteTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIGlzU3Bhd25lZDogdHJ1ZSxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNhc2UgdHlwZXMuRU5FTVlfU1RBVFNfUkVTRVQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgZW5lbXk6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlbmVteVJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==