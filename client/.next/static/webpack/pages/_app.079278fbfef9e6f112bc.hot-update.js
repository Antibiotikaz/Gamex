webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/authReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/authReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  isLoaded: false
};
var cookie = new react_cookie__WEBPACK_IMPORTED_MODULE_1__["Cookies"]();

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_2__["LOGIN_USER"]:
      cookie.set("token", action.payload.token, {
        path: "/"
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoaded: true,
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["USER_LOADED"]:
      cookie.get("token");
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoaded: true,
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["USER_UPDATES_HEALTH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["USER_DATA_AFTER_ATTACK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_2__["NEW_STATS_AFTER_BATTLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        msg: "very gud"
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (authReducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2FkZWQiLCJjb29raWUiLCJDb29raWVzIiwiYXV0aFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsInNldCIsInBheWxvYWQiLCJ0b2tlbiIsInBhdGgiLCJ1c2VyIiwiZ2V0IiwibXNnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFVBQVEsRUFBRTtBQURTLENBQXJCO0FBSUEsSUFBTUMsTUFBTSxHQUFHLElBQUlDLG9EQUFKLEVBQWY7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCTCxZQUF5QjtBQUFBLE1BQVhNLE1BQVc7O0FBQ3BELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLGlEQUFMO0FBQ0VOLFlBQU0sQ0FBQ08sR0FBUCxDQUFXLE9BQVgsRUFBb0JILE1BQU0sQ0FBQ0ksT0FBUCxDQUFlQyxLQUFuQyxFQUEwQztBQUFFQyxZQUFJLEVBQUU7QUFBUixPQUExQztBQUNBLDZDQUNLUCxLQURMO0FBRUVKLGdCQUFRLEVBQUUsSUFGWjtBQUdFWSxZQUFJLEVBQUVQLE1BQU0sQ0FBQ0k7QUFIZjs7QUFNRixTQUFLRixrREFBTDtBQUNFTixZQUFNLENBQUNZLEdBQVAsQ0FBVyxPQUFYO0FBQ0EsNkNBQ0tULEtBREw7QUFFRUosZ0JBQVEsRUFBRSxJQUZaO0FBR0VZLFlBQUksRUFBRVAsTUFBTSxDQUFDSTtBQUhmOztBQUtGLFNBQUtGLDBEQUFMO0FBQ0UsNkNBQ0tILEtBREw7QUFFRVEsWUFBSSxFQUFFUCxNQUFNLENBQUNJO0FBRmY7O0FBSUYsU0FBS0YsNkRBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFUSxZQUFJLEVBQUVQLE1BQU0sQ0FBQ0k7QUFGZjs7QUFJQSxTQUFLRiw2REFBTDtBQUNFLDZDQUNLSCxLQURMO0FBRUVVLFdBQUcsRUFBRTtBQUZQOztBQUlKO0FBQ0UsYUFBT1YsS0FBUDtBQWhDSjtBQWtDRCxDQW5DRDs7QUFxQ2VELDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDc5Mjc4ZmJmZWY5ZTZmMTEyYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvb2tpZXMgfSBmcm9tIFwicmVhY3QtY29va2llXCI7XHJcblxyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzTG9hZGVkOiBmYWxzZSxcclxufTtcclxuXHJcbmNvbnN0IGNvb2tpZSA9IG5ldyBDb29raWVzKCk7XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSB0eXBlcy5MT0dJTl9VU0VSOlxyXG4gICAgICBjb29raWUuc2V0KFwidG9rZW5cIiwgYWN0aW9uLnBheWxvYWQudG9rZW4sIHsgcGF0aDogXCIvXCIgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNMb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSB0eXBlcy5VU0VSX0xPQURFRDpcclxuICAgICAgY29va2llLmdldChcInRva2VuXCIpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzTG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5VU0VSX1VQREFURVNfSEVBTFRIOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSB0eXBlcy5VU0VSX0RBVEFfQUZURVJfQVRUQUNLOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9O1xyXG4gICAgICBjYXNlIHR5cGVzLk5FV19TVEFUU19BRlRFUl9CQVRUTEU6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbXNnOiBcInZlcnkgZ3VkXCJcclxuICAgICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9