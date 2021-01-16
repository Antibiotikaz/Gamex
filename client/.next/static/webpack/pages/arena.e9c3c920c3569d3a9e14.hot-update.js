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
  }; //IF hero died


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
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: function onClick() {
      return beginAttack();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: function onClick() {
      return spawnEnemyClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Goblin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Orc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlbmEvaW5kZXguanMiXSwibmFtZXMiOlsiQXJlbmEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcklkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJoZWFsdGgiLCJlbWFpbCIsInVzZXJFeHAiLCJleHBlcmllbmNlIiwiaXNTcGF3bmVkIiwiZW5lbXkiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJlbmVteURhbWFnZSIsImRhbWFnZSIsImVuZW15TmFtZSIsIm5hbWUiLCJzcGF3bkVuZW15Q2xpY2siLCJyYW5kb21FbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsInVwZGF0ZUVuZW15SGVhbHRoIiwiYmF0dGxlU3RhdEJvZHkiLCJ3b25CYXR0bGUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImNvbmZpcm1CdXR0b25UZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZUFsdCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInJlbG9hZCIsImNsYXNzZXMiLCJFbmVteUJveCIsIkdvYmxpbkltZyIsIk9yY0ltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFH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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFZSCxXQUFXLElBQUksQ0FBZixHQUFtQixDQUFuQixHQUF1QkEsV0FBbkMsTUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWFDLFdBQWIsQ0FKRixDQURGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRSxTQUFTLEtBQUssUUFBZCxHQUNDO0FBQUssT0FBRyxFQUFFZ0MsNEVBQVY7QUFBcUIsT0FBRyxFQUFDLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxHQUdDO0FBQUssT0FBRyxFQUFFQyx5RUFBVjtBQUFrQixPQUFHLEVBQUMsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBUEYsQ0FSRixDQURGO0FBMEJELENBcEhEOztHQUFNdEQsSztVQUNhRSx1RCxFQUNGRSxxRCxFQUNBRSx1RCxFQUNBQSx1RCxFQUNEQSx1RCxFQUNFQSx1RCxFQUNFQSx1RCxFQUNKQSx1RCxFQUNJQSx1RCxFQUNFQSx1RCxFQUNGQSx1RDs7O0tBWGROLEs7QUFzSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FyZW5hLmU5YzNjOTIwYzM1NjlkM2E5ZTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXR0YWNrLCBzcGF3bkVuZW15LCB3b25CYXR0bGUgfSBmcm9tIFwiLi4vLi4vc3RvcmUvQWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hcmVuYS5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL2F1dGhBY3Rpb25zXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgU3RhdHNUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9zdGF0c1RhYmxlL1N0YXRzVGFibGVcIjtcclxuaW1wb3J0IHsgdXBkYXRlRW5lbXlIZWFsdGggfSBmcm9tIFwiLi4vLi4vc3RvcmUvQWN0aW9ucy9lbmVteUFjdGlvbnNcIjtcclxuaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XHJcbmltcG9ydCBHb2JsaW5JbWcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXNzZXRzL2ltYWdlcy9nb2JsaW4ucG5nXCI7XHJcbmltcG9ydCBPcmNJbWcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXNzZXRzL2ltYWdlcy9vcmMucG5nXCI7XHJcbmNvbnN0IEFyZW5hID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1c2VySWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmlkKTtcclxuICBjb25zdCBoZWFsdGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmhlYWx0aCk7XHJcbiAgY29uc3QgZW1haWwgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmVtYWlsKTtcclxuICBjb25zdCB1c2VyRXhwID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoPy51c2VyPy5leHBlcmllbmNlKTtcclxuICBjb25zdCBpc1NwYXduZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uaXNTcGF3bmVkKTtcclxuICBsZXQgZW5lbXlJRCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uaWQpO1xyXG4gIGxldCBlbmVteUhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uaGVhbHRoKTtcclxuICBjb25zdCBlbmVteURhbWFnZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8uZGFtYWdlKTtcclxuICBjb25zdCBlbmVteU5hbWUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlPy5lbmVteT8uZW5lbXk/Lm5hbWUpO1xyXG5cclxuICBjb25zdCBkYW1hZ2UgPSAxO1xyXG5cclxuICBjb25zdCBzcGF3bkVuZW15Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tRW5lbXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUVuZW15LCBcInJhbmRvbVwiKTtcclxuICAgIHN3aXRjaCAocmFuZG9tRW5lbXkpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmNGZlYjA0ZmU2Yzk1MzFmYjczOWYwOVwiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmODM1MGI0N2RiNTMwYjIyNTk4N2NhN1wiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJEZWZhdWx0YXNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICB9O1xyXG5cclxuICBsZXQgYXR0YWNrRGF0YSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICBlbmVteUhlYWx0aCxcclxuICAgIGRhbWFnZSxcclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGhlYWx0aCwgJ3VzZXJIZWFsdGggMjInKVxyXG4gIGNvbnN0IGJlZ2luQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXR0YWNrKGJvZHkpKTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZUVuZW15SGVhbHRoKGF0dGFja0RhdGEpKTtcclxuICAgIGNvbnNvbGUubG9nKGhlYWx0aCwgJ3VzZXJIZWFsdGgnKVxyXG4gICAgaWYgKGVuZW15SGVhbHRoIDw9IDApIHtcclxuICAgICAgbGV0IGJhdHRsZVN0YXRCb2R5ID0ge1xyXG4gICAgICAgIGVuZW15SUQsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICB9XHJcbiAgICAgIGRpc3BhdGNoKHdvbkJhdHRsZShiYXR0bGVTdGF0Qm9keSkpO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiWW91IHdvbiBoZXJvIVwiLFxyXG4gICAgICAgIHRleHQ6IGAke2VuZW15TmFtZX0gd2FzIGtpbGxlZGAsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiPjwvaT4gR28gYmFjayB0byB0b3duIScsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMjAwXCIsXHJcbiAgICAgICAgaW1hZ2VXaWR0aDogNDAwLFxyXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgaW1hZ2VBbHQ6IFwiQ3VzdG9tIGltYWdlXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICBcclxuICAgICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdiZWxla2FzJylcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvL0lGIGhlcm8gZGllZFxyXG4gIGlmIChoZWFsdGggPD0gMCkge1xyXG4gICAgU3dhbC5maXJlKHtcclxuICAgICAgdGl0bGU6IFwiWW91IGFyZSBkZWFkIGhlcm9lIVwiLFxyXG4gICAgICB0ZXh0OiBgJHtlbWFpbH0sIHdhcyBicnV0YWx5IHdvdW5kZWQgYW5kIGdvdCBpbnRvIGhvc3BpdGFsYCxcclxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiPjwvaT4gR28gYmFjayB0byB0b3duIScsXHJcbiAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMFwiLFxyXG4gICAgICBpbWFnZVdpZHRoOiA0MDAsXHJcbiAgICAgIGltYWdlSGVpZ2h0OiAyMDAsXHJcbiAgICAgIGltYWdlQWx0OiBcIkN1c3RvbSBpbWFnZVwiLFxyXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxTdGF0c1RhYmxlIC8+XHJcbiAgICAgIHtpc1NwYXduZWQgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBiZWdpbkF0dGFjaygpfT5BdHRhY2shPC9idXR0b24+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNwYXduRW5lbXlDbGljaygpfT5GaW5kIGFuIGVuZW15ITwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRW5lbXlCb3h9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+RW5lbXkgdGFibGUgPC9oMj5cclxuICAgICAgICAgIDxoNT5uYW1lOiB7ZW5lbXlOYW1lfTwvaDU+XHJcbiAgICAgICAgICA8aDU+SGVhbHRoOntlbmVteUhlYWx0aCA8PSAwID8gMCA6IGVuZW15SGVhbHRofSA8L2g1PlxyXG4gICAgICAgICAgPGg1PkRhbWFnZToge2VuZW15RGFtYWdlfTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtlbmVteU5hbWUgPT09IFwiR29ibGluXCIgPyAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtHb2JsaW5JbWd9IGFsdD1cIkdvYmxpblwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17T3JjSW1nfSBhbHQ9XCJPcmNcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJlbmE7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=