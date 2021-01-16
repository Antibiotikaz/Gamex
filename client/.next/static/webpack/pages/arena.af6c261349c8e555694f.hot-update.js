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
  var damage = 100;

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
    enemyDamage: enemyDamage,
    enemyID: enemyID,
    enemyHealth: enemyHealth,
    damage: damage
  };
  var attackData = {
    enemyID: enemyID,
    enemyHealth: enemyHealth,
    damage: damage
  };

  var beginAttack = function beginAttack() {
    dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["attack"])(body));
    dispatch(Object(_store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__["updateEnemyHealth"])(attackData));
  };

  if (enemyHealth <= 0) {
    var battleStatBody = {
      enemyID: enemyID,
      userId: userId
    };
    dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["wonBattle"])(battleStatBody));
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
        var resetEnemyBody = {
          enemyID: enemyID
        };
        dispatch(Object(_store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__["resetEnemyHealth"])(resetEnemyBody));
        router.reload();
      }
    });
  } else {
    console.log('belekas');
  } //IF hero died


  if (health <= 0) {
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
        var resetBody = {
          userId: userId
        };
        dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["statsReset"])(resetBody));
        router.reload();
      }
    });
  }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: function onClick() {
      return beginAttack();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: function onClick() {
      return spawnEnemyClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Goblin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Orc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlbmEvaW5kZXguanMiXSwibmFtZXMiOlsiQXJlbmEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcklkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJoZWFsdGgiLCJlbWFpbCIsInVzZXJFeHAiLCJleHBlcmllbmNlIiwiaXNTcGF3bmVkIiwiZW5lbXkiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJlbmVteURhbWFnZSIsImRhbWFnZSIsImVuZW15TmFtZSIsIm5hbWUiLCJzcGF3bkVuZW15Q2xpY2siLCJyYW5kb21FbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsInVwZGF0ZUVuZW15SGVhbHRoIiwiYmF0dGxlU3RhdEJvZHkiLCJ3b25CYXR0bGUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImNvbmZpcm1CdXR0b25UZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZUFsdCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInJlc2V0RW5lbXlCb2R5IiwicmVzZXRFbmVteUhlYWx0aCIsInJlbG9hZCIsInJlc2V0Qm9keSIsInN0YXRzUmVzZXQiLCJjbGFzc2VzIiwiRW5lbXlCb3giLCJHb2JsaW5JbWciLCJPcmNJbWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVC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c0JBTkYsRUFRRTtBQUFLLGFBQVMsRUFBRWdDLHlEQUFPLENBQUNDLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBV25DLFNBQVgsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVlILFdBQVcsSUFBSSxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQSxXQUFuQyxNQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYUMsV0FBYixDQUpGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFNBQVMsS0FBSyxRQUFkLEdBQ0M7QUFBSyxPQUFHLEVBQUVvQywyRUFBVjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0M7QUFBSyxPQUFHLEVBQUVDLHlFQUFWO0FBQWtCLE9BQUcsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FQRixDQVJGLENBREY7QUEwQkQsQ0E1SEQ7O0dBQU0xRCxLO1VBQ2FFLHVELEVBQ0ZFLHFELEVBQ0FFLHVELEVBQ0FBLHVELEVBQ0RBLHVELEVBQ0VBLHVELEVBQ0VBLHVELEVBQ0pBLHVELEVBQ0lBLHVELEVBQ0VBLHVELEVBQ0ZBLHVEOzs7S0FYZE4sSztBQThIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJlbmEuYWY2YzI2MTM0OWM4ZTU1NTY5NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBhdHRhY2ssIHNwYXduRW5lbXksIHdvbkJhdHRsZSxzdGF0c1Jlc2V0IH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXJlbmEubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTdGF0c1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzVGFibGUvU3RhdHNUYWJsZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVFbmVteUhlYWx0aCxyZXNldEVuZW15SGVhbHRoIH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FjdGlvbnMvZW5lbXlBY3Rpb25zXCI7XHJcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xyXG5pbXBvcnQgR29ibGluSW1nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvZ29ibGluLnBuZ1wiO1xyXG5pbXBvcnQgT3JjSW1nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvb3JjLnBuZ1wiO1xyXG5jb25zdCBBcmVuYSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdXNlcklkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy51c2VyPy5pZCk7XHJcbiAgY29uc3QgaGVhbHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy51c2VyPy5oZWFsdGgpO1xyXG4gIGNvbnN0IGVtYWlsID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy51c2VyPy5lbWFpbCk7XHJcbiAgY29uc3QgdXNlckV4cCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uZXhwZXJpZW5jZSk7XHJcbiAgY29uc3QgaXNTcGF3bmVkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmlzU3Bhd25lZCk7XHJcbiAgbGV0IGVuZW15SUQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uZW5lbXk/LmlkKTtcclxuICBsZXQgZW5lbXlIZWFsdGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uZW5lbXk/LmhlYWx0aCk7XHJcbiAgY29uc3QgZW5lbXlEYW1hZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uZW5lbXk/LmRhbWFnZSk7XHJcbiAgY29uc3QgZW5lbXlOYW1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5uYW1lKTtcclxuXHJcbiAgY29uc3QgZGFtYWdlID0gMTAwO1xyXG5cclxuICBjb25zdCBzcGF3bkVuZW15Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tRW5lbXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUVuZW15LCBcInJhbmRvbVwiKTtcclxuICAgIHN3aXRjaCAocmFuZG9tRW5lbXkpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmNGZlYjA0ZmU2Yzk1MzFmYjczOWYwOVwiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmODM1MGI0N2RiNTMwYjIyNTk4N2NhN1wiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJEZWZhdWx0YXNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICAgIGVuZW15SUQsXHJcbiAgICBlbmVteUhlYWx0aCxcclxuICAgIGRhbWFnZSxcclxuICB9O1xyXG5cclxuICBsZXQgYXR0YWNrRGF0YSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICBlbmVteUhlYWx0aCxcclxuICAgIGRhbWFnZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBiZWdpbkF0dGFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGF0dGFjayhib2R5KSk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVFbmVteUhlYWx0aChhdHRhY2tEYXRhKSk7XHJcbiAgfTtcclxuICBpZiAoZW5lbXlIZWFsdGggPD0gMCkge1xyXG4gICAgbGV0IGJhdHRsZVN0YXRCb2R5ID0ge1xyXG4gICAgICBlbmVteUlELFxyXG4gICAgICB1c2VySWQsXHJcbiAgICB9XHJcbiAgICBkaXNwYXRjaCh3b25CYXR0bGUoYmF0dGxlU3RhdEJvZHkpKTtcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIllvdSB3b24gaGVybyFcIixcclxuICAgICAgdGV4dDogYCR7ZW5lbXlOYW1lfSB3YXMga2lsbGVkYCxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiPjwvaT4gR28gYmFjayB0byB0b3duIScsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMFwiLFxyXG4gICAgICBpbWFnZVdpZHRoOiA0MDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiAyMDAsXHJcbiAgICAgIGltYWdlQWx0OiBcIkN1c3RvbSBpbWFnZVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICBsZXQgcmVzZXRFbmVteUJvZHkgPSB7XHJcbiAgICAgICAgICBlbmVteUlEXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHJlc2V0RW5lbXlIZWFsdGgocmVzZXRFbmVteUJvZHkpKVxyXG4gICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSAgZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnYmVsZWthcycpXHJcbiAgfVxyXG5cclxuICAvL0lGIGhlcm8gZGllZFxyXG4gIGlmIChoZWFsdGggPD0gMCkge1xyXG4gICBcclxuICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgIHRpdGxlOiBcIllvdSBhcmUgZGVhZCBoZXJvZSFcIixcclxuICAgICAgdGV4dDogYCR7ZW1haWx9LCB3YXMgYnJ1dGFseSB3b3VuZGVkIGFuZCBnb3QgaW50byBob3NwaXRhbGAsXHJcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+IEdvIGJhY2sgdG8gdG93biEnLFxyXG4gICAgICBpbWFnZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzQwMC8yMDBcIixcclxuICAgICAgaW1hZ2VXaWR0aDogNDAwLFxyXG4gICAgICBpbWFnZUhlaWdodDogMjAwLFxyXG4gICAgICBpbWFnZUFsdDogXCJDdXN0b20gaW1hZ2VcIixcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgbGV0IHJlc2V0Qm9keSA9IHtcclxuICAgICAgICAgIHVzZXJJZFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGlzcGF0Y2goc3RhdHNSZXNldChyZXNldEJvZHkpKTtcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxTdGF0c1RhYmxlIC8+XHJcbiAgICAgIHtpc1NwYXduZWQgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBiZWdpbkF0dGFjaygpfT5BdHRhY2shPC9idXR0b24+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNwYXduRW5lbXlDbGljaygpfT5GaW5kIGFuIGVuZW15ITwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRW5lbXlCb3h9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+RW5lbXkgdGFibGUgPC9oMj5cclxuICAgICAgICAgIDxoNT5uYW1lOiB7ZW5lbXlOYW1lfTwvaDU+XHJcbiAgICAgICAgICA8aDU+SGVhbHRoOntlbmVteUhlYWx0aCA8PSAwID8gMCA6IGVuZW15SGVhbHRofSA8L2g1PlxyXG4gICAgICAgICAgPGg1PkRhbWFnZToge2VuZW15RGFtYWdlfTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtlbmVteU5hbWUgPT09IFwiR29ibGluXCIgPyAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtHb2JsaW5JbWd9IGFsdD1cIkdvYmxpblwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17T3JjSW1nfSBhbHQ9XCJPcmNcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJlbmE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=