webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_WEATHER, LOGIN_USER, USER_LOADED, LOGIN_FAIL, USER_UPDATES_HEALTH, USER_DATA_AFTER_ATTACK, ENEMY_SPAWNED, UPDATE_ENEMY_HEALTH, NEW_STATS_AFTER_BATTLE, USER_STATS_RESET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WEATHER", function() { return GET_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATES_HEALTH", function() { return USER_UPDATES_HEALTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DATA_AFTER_ATTACK", function() { return USER_DATA_AFTER_ATTACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_SPAWNED", function() { return ENEMY_SPAWNED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ENEMY_HEALTH", function() { return UPDATE_ENEMY_HEALTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEW_STATS_AFTER_BATTLE", function() { return NEW_STATS_AFTER_BATTLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STATS_RESET", function() { return USER_STATS_RESET; });
//GENERAL types
//Weather
var GET_WEATHER = "GET_WEATHER"; // Authentication types
//Login

var LOGIN_USER = "LOGIN_USER";
var USER_LOADED = "USER_LOADED";
var LOGIN_FAIL = "LOGIN_FAIL"; //USER ACTIONS
//Combat
//Attack

var USER_UPDATES_HEALTH = "USER_UPDATES_HEALTH";
var USER_DATA_AFTER_ATTACK = "USER_DATA_AFTER_ATTACK"; //SpawnEnemy

var ENEMY_SPAWNED = "ENEMY_SPAWNED"; //Update Enemy Health

var UPDATE_ENEMY_HEALTH = "UPDATE_ENEMY_HEALTH"; // Gained stats after battle

var NEW_STATS_AFTER_BATTLE = "NEW_STATS_AFTER_BATTLE"; // Users stats reset

var USER_STATS_RESET = "USER_STATS_RESET";

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdHlwZXMuanMiXSwibmFtZXMiOlsiR0VUX1dFQVRIRVIiLCJMT0dJTl9VU0VSIiwiVVNFUl9MT0FERUQiLCJMT0dJTl9GQUlMIiwiVVNFUl9VUERBVEVTX0hFQUxUSCIsIlVTRVJfREFUQV9BRlRFUl9BVFRBQ0siLCJFTkVNWV9TUEFXTkVEIiwiVVBEQVRFX0VORU1ZX0hFQUxUSCIsIk5FV19TVEFUU19BRlRFUl9CQVRUTEUiLCJVU0VSX1NUQVRTX1JFU0VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDTyxJQUFNQSxXQUFXLEdBQUcsYUFBcEIsQyxDQUVQO0FBRUE7O0FBQ08sSUFBTUMsVUFBVSxHQUFHLFlBQW5CO0FBQ0EsSUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFlBQW5CLEMsQ0FFUDtBQUNBO0FBRUE7O0FBQ08sSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CLEMsQ0FDUDs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsZUFBdEIsQyxDQUNQOztBQUNPLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QixDLENBQ1A7O0FBQ08sSUFBTUMsc0JBQXNCLEdBQUcsd0JBQS9CLEMsQ0FDUDs7QUFDTyxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZWMxNDA3YzdjZWYzNTc4ZTllYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9HRU5FUkFMIHR5cGVzXHJcblxyXG4vL1dlYXRoZXJcclxuZXhwb3J0IGNvbnN0IEdFVF9XRUFUSEVSID0gXCJHRVRfV0VBVEhFUlwiO1xyXG5cclxuLy8gQXV0aGVudGljYXRpb24gdHlwZXNcclxuXHJcbi8vTG9naW5cclxuZXhwb3J0IGNvbnN0IExPR0lOX1VTRVIgPSBcIkxPR0lOX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gXCJVU0VSX0xPQURFRFwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9IFwiTE9HSU5fRkFJTFwiO1xyXG5cclxuLy9VU0VSIEFDVElPTlNcclxuLy9Db21iYXRcclxuXHJcbi8vQXR0YWNrXHJcbmV4cG9ydCBjb25zdCBVU0VSX1VQREFURVNfSEVBTFRIID0gXCJVU0VSX1VQREFURVNfSEVBTFRIXCI7XHJcbmV4cG9ydCBjb25zdCBVU0VSX0RBVEFfQUZURVJfQVRUQUNLID0gXCJVU0VSX0RBVEFfQUZURVJfQVRUQUNLXCI7XHJcbi8vU3Bhd25FbmVteVxyXG5leHBvcnQgY29uc3QgRU5FTVlfU1BBV05FRCA9IFwiRU5FTVlfU1BBV05FRFwiO1xyXG4vL1VwZGF0ZSBFbmVteSBIZWFsdGhcclxuZXhwb3J0IGNvbnN0IFVQREFURV9FTkVNWV9IRUFMVEggPSBcIlVQREFURV9FTkVNWV9IRUFMVEhcIjtcclxuLy8gR2FpbmVkIHN0YXRzIGFmdGVyIGJhdHRsZVxyXG5leHBvcnQgY29uc3QgTkVXX1NUQVRTX0FGVEVSX0JBVFRMRSA9IFwiTkVXX1NUQVRTX0FGVEVSX0JBVFRMRVwiO1xyXG4vLyBVc2VycyBzdGF0cyByZXNldFxyXG5leHBvcnQgY29uc3QgVVNFUl9TVEFUU19SRVNFVCA9IFwiVVNFUl9TVEFUU19SRVNFVFwiO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9