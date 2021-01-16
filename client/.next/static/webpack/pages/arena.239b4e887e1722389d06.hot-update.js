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
/* harmony import */ var _store_Actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Actions/authActions */ "./store/Actions/authActions.js");
/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/navigation/Navigation */ "./components/navigation/Navigation.js");
/* harmony import */ var _components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/statsTable/StatsTable */ "./components/statsTable/StatsTable.js");
/* harmony import */ var _store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/Actions/enemyActions */ "./store/Actions/enemyActions.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/assets/images/goblin.png */ "./components/assets/images/goblin.png");
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/assets/images/orc.png */ "./components/assets/images/orc.png");
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_11__);
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
  var damage = 1;

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
  console.log(health, 'userHealth 22');

  var beginAttack = function beginAttack() {
    dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["attack"])(body));
    dispatch(Object(_store_Actions_authActions__WEBPACK_IMPORTED_MODULE_5__["loadUser"])());
    dispatch(Object(_store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_8__["updateEnemyHealth"])(attackData));
    console.log(health, 'userHealth');

    if (enemyHealth <= 0) {
      var battleStatBody = {
        enemyID: enemyID,
        userId: userId
      };
      dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["wonBattle"])(battleStatBody));
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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
    } else {
      console.log('belekas');
    }
  };

  if (health <= 0) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
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

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: function onClick() {
      return beginAttack();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: function onClick() {
      return spawnEnemyClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Goblin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Orc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlbmEvaW5kZXguanMiXSwibmFtZXMiOlsiQXJlbmEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcklkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJoZWFsdGgiLCJlbWFpbCIsInVzZXJFeHAiLCJleHBlcmllbmNlIiwiaXNTcGF3bmVkIiwiZW5lbXkiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJlbmVteURhbWFnZSIsImRhbWFnZSIsImVuZW15TmFtZSIsIm5hbWUiLCJzcGF3bkVuZW15Q2xpY2siLCJyYW5kb21FbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsImxvYWRVc2VyIiwidXBkYXRlRW5lbXlIZWFsdGgiLCJiYXR0bGVTdGF0Qm9keSIsIndvbkJhdHRsZSIsIlN3YWwiLCJmaXJlIiwidGl0bGUiLCJ0ZXh0IiwiY29uZmlybUJ1dHRvblRleHQiLCJpbWFnZVVybCIsImltYWdlV2lkdGgiLCJpbWFnZUhlaWdodCIsImltYWdlQWx0IiwidGhlbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwicmVsb2FkIiwiY2xhc3NlcyIsIkVuZW15Qm94IiwiR29ibGluSW1nIiwiT3JjSW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFN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QTtBQUFBO0FBQUEsZUFBV2hDLFNBQVgsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVlILFdBQVcsSUFBSSxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQSxXQUFuQyxNQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYUMsV0FBYixDQUpGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFNBQVMsS0FBSyxRQUFkLEdBQ0M7QUFBSyxPQUFHLEVBQUVpQyw0RUFBVjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0M7QUFBSyxPQUFHLEVBQUVDLHlFQUFWO0FBQWtCLE9BQUcsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FQRixDQVJGLENBREY7QUEwQkQsQ0FuSEQ7O0dBQU12RCxLO1VBQ2FFLHVELEVBQ0ZFLHFELEVBQ0FFLHVELEVBQ0FBLHVELEVBQ0RBLHVELEVBQ0VBLHVELEVBQ0VBLHVELEVBQ0pBLHVELEVBQ0lBLHVELEVBQ0VBLHVELEVBQ0ZBLHVEOzs7S0FYZE4sSztBQXFIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJlbmEuMjM5YjRlODg3ZTE3MjIzODlkMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhdHRhY2ssIHNwYXduRW5lbXksIHdvbkJhdHRsZSB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2FyZW5hLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCB7IGxvYWRVc2VyIH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FjdGlvbnMvYXV0aEFjdGlvbnNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTdGF0c1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzVGFibGUvU3RhdHNUYWJsZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVFbmVteUhlYWx0aCB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL2VuZW15QWN0aW9uc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEdvYmxpbkltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL2dvYmxpbi5wbmdcIjtcclxuaW1wb3J0IE9yY0ltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL29yYy5wbmdcIjtcclxuY29uc3QgQXJlbmEgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaWQpO1xyXG4gIGNvbnN0IGhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaGVhbHRoKTtcclxuICBjb25zdCBlbWFpbCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uZW1haWwpO1xyXG4gIGNvbnN0IHVzZXJFeHAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmV4cGVyaWVuY2UpO1xyXG4gIGNvbnN0IGlzU3Bhd25lZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5pc1NwYXduZWQpO1xyXG4gIGxldCBlbmVteUlEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5pZCk7XHJcbiAgbGV0IGVuZW15SGVhbHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5oZWFsdGgpO1xyXG4gIGNvbnN0IGVuZW15RGFtYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5kYW1hZ2UpO1xyXG4gIGNvbnN0IGVuZW15TmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8ubmFtZSk7XHJcblxyXG4gIGNvbnN0IGRhbWFnZSA9IDE7XHJcblxyXG4gIGNvbnN0IHNwYXduRW5lbXlDbGljayA9ICgpID0+IHtcclxuICAgIGxldCByYW5kb21FbmVteSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tRW5lbXksIFwicmFuZG9tXCIpO1xyXG4gICAgc3dpdGNoIChyYW5kb21FbmVteSkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY0ZmViMDRmZTZjOTUzMWZiNzM5ZjA5XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY4MzUwYjQ3ZGI1MzBiMjI1OTg3Y2E3XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkRlZmF1bHRhc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgYm9keSA9IHtcclxuICAgIHVzZXJJZCxcclxuICAgIGhlYWx0aCxcclxuICAgIGVuZW15RGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGxldCBhdHRhY2tEYXRhID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICAgIGVuZW15SGVhbHRoLFxyXG4gICAgZGFtYWdlLFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coaGVhbHRoLCAndXNlckhlYWx0aCAyMicpXHJcbiAgY29uc3QgYmVnaW5BdHRhY2sgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhdHRhY2soYm9keSkpO1xyXG4gICAgZGlzcGF0Y2gobG9hZFVzZXIoKSk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVFbmVteUhlYWx0aChhdHRhY2tEYXRhKSk7XHJcbiAgICBjb25zb2xlLmxvZyhoZWFsdGgsICd1c2VySGVhbHRoJylcclxuICAgIGlmIChlbmVteUhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIGxldCBiYXR0bGVTdGF0Qm9keSA9IHtcclxuICAgICAgICBlbmVteUlELFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgICAgfVxyXG4gICAgICBkaXNwYXRjaCh3b25CYXR0bGUoYmF0dGxlU3RhdEJvZHkpKTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIllvdSB3b24gaGVybyFcIixcclxuICAgICAgICB0ZXh0OiBgJHtlbmVteU5hbWV9IHdhcyBraWxsZWRgLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+IEdvIGJhY2sgdG8gdG93biEnLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMFwiLFxyXG4gICAgICAgIGltYWdlV2lkdGg6IDQwMCxcclxuICAgICAgICBpbWFnZUhlaWdodDogMjAwLFxyXG4gICAgICAgIGltYWdlQWx0OiBcIkN1c3RvbSBpbWFnZVwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnYmVsZWthcycpXHJcbiAgICB9XHJcbiAgfTtcclxuICBpZiAoaGVhbHRoIDw9IDApIHtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIllvdSBhcmUgZGVhZCBoZXJvZSFcIixcclxuICAgICAgdGV4dDogYCR7ZW1haWx9LCB3YXMgYnJ1dGFseSB3b3VuZGVkIGFuZCBnb3QgaW50byBob3NwaXRhbGAsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+IEdvIGJhY2sgdG8gdG93biEnLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzQwMC8yMDBcIixcclxuICAgICAgaW1hZ2VXaWR0aDogNDAwLFxyXG4gICAgICBpbWFnZUhlaWdodDogMjAwLFxyXG4gICAgICBpbWFnZUFsdDogXCJDdXN0b20gaW1hZ2VcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8U3RhdHNUYWJsZSAvPlxyXG4gICAgICB7aXNTcGF3bmVkID8gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYmVnaW5BdHRhY2soKX0+QXR0YWNrITwvYnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzcGF3bkVuZW15Q2xpY2soKX0+RmluZCBhbiBlbmVteSE8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkVuZW15Qm94fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkVuZW15IHRhYmxlIDwvaDI+XHJcbiAgICAgICAgICA8aDU+bmFtZToge2VuZW15TmFtZX08L2g1PlxyXG4gICAgICAgICAgPGg1PkhlYWx0aDp7ZW5lbXlIZWFsdGggPD0gMCA/IDAgOiBlbmVteUhlYWx0aH0gPC9oNT5cclxuICAgICAgICAgIDxoNT5EYW1hZ2U6IHtlbmVteURhbWFnZX08L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZW5lbXlOYW1lID09PSBcIkdvYmxpblwiID8gKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17R29ibGluSW1nfSBhbHQ9XCJHb2JsaW5cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGltZyBzcmM9e09yY0ltZ30gYWx0PVwiT3JjXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZW5hO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9