webpackHotUpdate_N_E("pages/arena",{

/***/ "./pages/arena/index.js":
/*!******************************!*\
  !*** ./pages/arena/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Actions/userActions */ "./store/Actions/userActions.js");
/* harmony import */ var _arena_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arena.module.scss */ "./pages/arena/arena.module.scss");
/* harmony import */ var _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arena_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation/Navigation */ "./components/navigation/Navigation.js");
/* harmony import */ var _components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/statsTable/StatsTable */ "./components/statsTable/StatsTable.js");
/* harmony import */ var _store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Actions/enemyActions */ "./store/Actions/enemyActions.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/assets/images/goblin.png */ "./components/assets/images/goblin.png");
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/assets/images/orc.png */ "./components/assets/images/orc.png");
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\ernes\\Desktop\\HomProject\\gamex\\client\\pages\\arena\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












var Arena = function Arena() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  var userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$auth, _state$auth$user;

    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : (_state$auth$user = _state$auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user.id;
  });
  var health = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$auth2, _state$auth2$user;

    return (_state$auth2 = state.auth) === null || _state$auth2 === void 0 ? void 0 : (_state$auth2$user = _state$auth2.user) === null || _state$auth2$user === void 0 ? void 0 : _state$auth2$user.health;
  });
  var email = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$auth3, _state$auth3$user;

    return (_state$auth3 = state.auth) === null || _state$auth3 === void 0 ? void 0 : (_state$auth3$user = _state$auth3.user) === null || _state$auth3$user === void 0 ? void 0 : _state$auth3$user.email;
  });
  var userExp = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$auth4, _state$auth4$user;

    return (_state$auth4 = state.auth) === null || _state$auth4 === void 0 ? void 0 : (_state$auth4$user = _state$auth4.user) === null || _state$auth4$user === void 0 ? void 0 : _state$auth4$user.experience;
  });
  var isSpawned = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy = state.enemy) === null || _state$enemy === void 0 ? void 0 : _state$enemy.isSpawned;
  });
  var enemyID = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$enemy2, _state$enemy2$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy2 = state.enemy) === null || _state$enemy2 === void 0 ? void 0 : (_state$enemy2$enemy = _state$enemy2.enemy) === null || _state$enemy2$enemy === void 0 ? void 0 : _state$enemy2$enemy.id;
  });
  var enemyHealth = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$enemy3, _state$enemy3$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy3 = state.enemy) === null || _state$enemy3 === void 0 ? void 0 : (_state$enemy3$enemy = _state$enemy3.enemy) === null || _state$enemy3$enemy === void 0 ? void 0 : _state$enemy3$enemy.health;
  });
  var enemyDamage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$enemy4, _state$enemy4$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy4 = state.enemy) === null || _state$enemy4 === void 0 ? void 0 : (_state$enemy4$enemy = _state$enemy4.enemy) === null || _state$enemy4$enemy === void 0 ? void 0 : _state$enemy4$enemy.damage;
  });
  var enemyName = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$enemy5, _state$enemy5$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy5 = state.enemy) === null || _state$enemy5 === void 0 ? void 0 : (_state$enemy5$enemy = _state$enemy5.enemy) === null || _state$enemy5$enemy === void 0 ? void 0 : _state$enemy5$enemy.name;
  });
  console.log(userExp);
  var damage = 5;

  var spawnEnemyClick = function spawnEnemyClick() {
    var randomEnemy = Math.floor(Math.random() * 2);
    console.log(randomEnemy, "random");

    switch (randomEnemy) {
      case 0:
        enemyID = "5f4feb04fe6c9531fb739f09";
        return dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["spawnEnemy"])(enemyID));

      case 1:
        enemyID = "5f8350b47db530b225987ca7";
        return dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["spawnEnemy"])(enemyID));

      default:
        return console.log("Defaultas");
    }
  };

  var body = {
    userId: userId,
    health: health,
    enemyDamage: enemyDamage
  };
  var attackData = {
    enemyID: enemyID,
    enemyHealth: enemyHealth,
    damage: damage
  };

  var beginAttack = function beginAttack() {
    dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["attack"])(body));
    dispatch(Object(_store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__["updateEnemyHealth"])(attackData));

    if (enemyHealth === 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        title: "You won hero!",
        text: "".concat(enemyName, " was killed"),
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then(function (result) {
        if (result.isConfirmed) {
          router.reload();
        }
      });
    } else if (health <= 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        title: "You are dead heroe!",
        text: "".concat(email, ", was brutaly wounded and got into hospital"),
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then(function (result) {
        if (result.isConfirmed) {
          router.reload();
        }
      });
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: function onClick() {
      return beginAttack();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: function onClick() {
      return spawnEnemyClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Goblin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Orc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }))));
};

_s(Arena, "ueB+R5SQddygXRI/nd8SbYZQlvU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Arena;
/* harmony default export */ __webpack_exports__["default"] = (Arena);

var _c;

$RefreshReg$(_c, "Arena");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlbmEvaW5kZXguanMiXSwibmFtZXMiOlsiQXJlbmEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcklkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJoZWFsdGgiLCJlbWFpbCIsInVzZXJFeHAiLCJleHBlcmllbmNlIiwiaXNTcGF3bmVkIiwiZW5lbXkiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJlbmVteURhbWFnZSIsImRhbWFnZSIsImVuZW15TmFtZSIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwic3Bhd25FbmVteUNsaWNrIiwicmFuZG9tRW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsInVwZGF0ZUVuZW15SGVhbHRoIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsImltYWdlVXJsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiaW1hZ2VBbHQiLCJ0aGVuIiwicmVzdWx0IiwiaXNDb25maXJtZWQiLCJyZWxvYWQiLCJjbGFzc2VzIiwiRW5lbXlCb3giLCJHb2JsaW5JbWciLCJPcmNJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsR0FHQztBQUFLLE9BQUcsRUFBRUMseUVBQVY7QUFBa0IsT0FBRyxFQUFDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQVBGLENBUkYsQ0FERjtBQTBCRCxDQXZHRDs7R0FBTXBELEs7VUFDYUUsdUQsRUFDRkUscUQsRUFDQUUsdUQsRUFDQUEsdUQsRUFDREEsdUQsRUFDRUEsdUQsRUFDRUEsdUQsRUFDSkEsdUQsRUFDSUEsdUQsRUFDRUEsdUQsRUFDRkEsdUQ7OztLQVhkTixLO0FBeUdTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcmVuYS4yY2VlZTNhY2U1ZGQ0ZDM3Mjc5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF0dGFjaywgc3Bhd25FbmVteSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2FyZW5hLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgU3RhdHNUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdGF0c1RhYmxlL1N0YXRzVGFibGVcIjtcclxuaW1wb3J0IHsgdXBkYXRlRW5lbXlIZWFsdGggfSBmcm9tIFwiLi4vLi4vc3RvcmUvQWN0aW9ucy9lbmVteUFjdGlvbnNcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBHb2JsaW5JbWcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXNzZXRzL2ltYWdlcy9nb2JsaW4ucG5nXCI7XHJcbmltcG9ydCBPcmNJbWcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXNzZXRzL2ltYWdlcy9vcmMucG5nXCI7XHJcbmNvbnN0IEFyZW5hID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1c2VySWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmlkKTtcclxuICBjb25zdCBoZWFsdGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmhlYWx0aCk7XHJcbiAgY29uc3QgZW1haWwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmVtYWlsKTtcclxuICBjb25zdCB1c2VyRXhwID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy51c2VyPy5leHBlcmllbmNlKTtcclxuICBjb25zdCBpc1NwYXduZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uaXNTcGF3bmVkKTtcclxuICBsZXQgZW5lbXlJRCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uaWQpO1xyXG4gIGxldCBlbmVteUhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uaGVhbHRoKTtcclxuICBjb25zdCBlbmVteURhbWFnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uZGFtYWdlKTtcclxuICBjb25zdCBlbmVteU5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uZW5lbXk/Lm5hbWUpO1xyXG5jb25zb2xlLmxvZyh1c2VyRXhwKVxyXG4gIGNvbnN0IGRhbWFnZSA9IDU7XHJcblxyXG4gIGNvbnN0IHNwYXduRW5lbXlDbGljayA9ICgpID0+IHtcclxuICAgIGxldCByYW5kb21FbmVteSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tRW5lbXksIFwicmFuZG9tXCIpO1xyXG4gICAgc3dpdGNoIChyYW5kb21FbmVteSkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY0ZmViMDRmZTZjOTUzMWZiNzM5ZjA5XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY4MzUwYjQ3ZGI1MzBiMjI1OTg3Y2E3XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkRlZmF1bHRhc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgYm9keSA9IHtcclxuICAgIHVzZXJJZCxcclxuICAgIGhlYWx0aCxcclxuICAgIGVuZW15RGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGxldCBhdHRhY2tEYXRhID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICAgIGVuZW15SGVhbHRoLFxyXG4gICAgZGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJlZ2luQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXR0YWNrKGJvZHkpKTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZUVuZW15SGVhbHRoKGF0dGFja0RhdGEpKTtcclxuICAgIGlmIChlbmVteUhlYWx0aCA9PT0gMCkge1xyXG5cclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJZb3Ugd29uIGhlcm8hXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZW5lbXlOYW1lfSB3YXMga2lsbGVkYCxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPiBHbyBiYWNrIHRvIHRvd24hJyxcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzQwMC8yMDBcIixcclxuICAgICAgICBpbWFnZVdpZHRoOiA0MDAsXHJcbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDIwMCxcclxuICAgICAgICBpbWFnZUFsdDogXCJDdXN0b20gaW1hZ2VcIixcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiWW91IGFyZSBkZWFkIGhlcm9lIVwiLFxyXG4gICAgICAgIHRleHQ6IGAke2VtYWlsfSwgd2FzIGJydXRhbHkgd291bmRlZCBhbmQgZ290IGludG8gaG9zcGl0YWxgLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+IEdvIGJhY2sgdG8gdG93biEnLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMFwiLFxyXG4gICAgICAgIGltYWdlV2lkdGg6IDQwMCxcclxuICAgICAgICBpbWFnZUhlaWdodDogMjAwLFxyXG4gICAgICAgIGltYWdlQWx0OiBcIkN1c3RvbSBpbWFnZVwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgPFN0YXRzVGFibGUgLz5cclxuICAgICAge2lzU3Bhd25lZCA/IChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGJlZ2luQXR0YWNrKCl9PkF0dGFjayE8L2J1dHRvbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc3Bhd25FbmVteUNsaWNrKCl9PkZpbmQgYW4gZW5lbXkhPC9idXR0b24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5FbmVteUJveH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMj5FbmVteSB0YWJsZSA8L2gyPlxyXG4gICAgICAgICAgPGg1Pm5hbWU6IHtlbmVteU5hbWV9PC9oNT5cclxuICAgICAgICAgIDxoNT5IZWFsdGg6e2VuZW15SGVhbHRoIDw9IDAgPyAwIDogZW5lbXlIZWFsdGh9IDwvaDU+XHJcbiAgICAgICAgICA8aDU+RGFtYWdlOiB7ZW5lbXlEYW1hZ2V9PC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2VuZW15TmFtZSA9PT0gXCJHb2JsaW5cIiA/IChcclxuICAgICAgICAgICAgPGltZyBzcmM9e0dvYmxpbkltZ30gYWx0PVwiR29ibGluXCIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtPcmNJbWd9IGFsdD1cIk9yY1wiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcmVuYTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==