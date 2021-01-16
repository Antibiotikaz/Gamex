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
  var damage = 20;

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
      lineNumber: 95,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: function onClick() {
      return beginAttack();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: function onClick() {
      return spawnEnemyClick();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Goblin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Orc",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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

/***/ }),

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather, wonBattle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wonBattle", function() { return wonBattle; });
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
};
var wonBattle = function wonBattle(enemyID, userId) {
  return /*#__PURE__*/function () {
    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = {
                enemyID: enemyID,
                userId: userId
              };
              _context4.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://localhost:9000/enemies/spawn/".concat(body.userId), body).then(function (res) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__["NEW_STATS_AFTER_BATTLE"],
                  payload: res.data
                });
              })["catch"](function (err) {
                console.log(err);
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJlbmEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0FjdGlvbnMvdXNlckFjdGlvbnMuanMiXSwibmFtZXMiOlsiQXJlbmEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlcklkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJ1c2VyIiwiaWQiLCJoZWFsdGgiLCJlbWFpbCIsInVzZXJFeHAiLCJleHBlcmllbmNlIiwiaXNTcGF3bmVkIiwiZW5lbXkiLCJlbmVteUlEIiwiZW5lbXlIZWFsdGgiLCJlbmVteURhbWFnZSIsImRhbWFnZSIsImVuZW15TmFtZSIsIm5hbWUiLCJzcGF3bkVuZW15Q2xpY2siLCJyYW5kb21FbmVteSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsInVwZGF0ZUVuZW15SGVhbHRoIiwiYmF0dGxlU3RhdEJvZHkiLCJ3b25CYXR0bGUiLCJTd2FsIiwiZmlyZSIsInRpdGxlIiwidGV4dCIsImNvbmZpcm1CdXR0b25UZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZUFsdCIsInRoZW4iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInJlbG9hZCIsImNsYXNzZXMiLCJFbmVteUJveCIsIkdvYmxpbkltZyIsIk9yY0ltZyIsImF4aW9zIiwicHV0IiwicmVzIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImRhdGEiLCJnZXQiLCJlcnIiLCJnZXRXZWF0aGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDBCQUFXQSxLQUFLLENBQUNDLElBQWpCLG9FQUFXLFlBQVlDLElBQXZCLHFEQUFXLGlCQUFrQkMsRUFBN0I7QUFBQSxHQUFELENBQTFCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSwyQkFBV0EsS0FBSyxDQUFDQyxJQUFqQixzRUFBVyxhQUFZQyxJQUF2QixzREFBVyxrQkFBa0JFLE1BQTdCO0FBQUEsR0FBRCxDQUExQjtBQUNBLE1BQU1DLEtBQUssR0FBR04sK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsMkJBQVdBLEtBQUssQ0FBQ0MsSUFBakIsc0VBQVcsYUFBWUMsSUFBdkIsc0RBQVcsa0JBQWtCRyxLQUE3QjtBQUFBLEdBQUQsQ0FBekI7QUFDQSxNQUFNQyxPQUFPLEdBQUdQLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDJCQUFXQSxLQUFLLENBQUNDLElBQWpCLHNFQUFXLGFBQVlDLElBQXZCLHNEQUFXLGtCQUFrQkssVUFBN0I7QUFBQSxHQUFELENBQTNCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHVCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFXQSxLQUFYLGFBQVdBLEtBQVgsdUNBQVdBLEtBQUssQ0FBRVMsS0FBbEIsaURBQVcsYUFBY0QsU0FBekI7QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBSUUsT0FBTyxHQUFHWCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFXQSxLQUFYLGFBQVdBLEtBQVgsd0NBQVdBLEtBQUssQ0FBRVMsS0FBbEIseUVBQVcsY0FBY0EsS0FBekIsd0RBQVcsb0JBQXFCTixFQUFoQztBQUFBLEdBQUQsQ0FBekI7QUFDQSxNQUFJUSxXQUFXLEdBQUdaLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFdBQVdBLEtBQVgsYUFBV0EsS0FBWCx3Q0FBV0EsS0FBSyxDQUFFUyxLQUFsQix5RUFBVyxjQUFjQSxLQUF6Qix3REFBVyxvQkFBcUJMLE1BQWhDO0FBQUEsR0FBRCxDQUE3QjtBQUNBLE1BQU1RLFdBQVcsR0FBR2IsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsV0FBV0EsS0FBWCxhQUFXQSxLQUFYLHdDQUFXQSxLQUFLLENBQUVTLEtBQWxCLHlFQUFXLGNBQWNBLEtBQXpCLHdEQUFXLG9CQUFxQkksTUFBaEM7QUFBQSxHQUFELENBQS9CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHZiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFXQSxLQUFYLGFBQVdBLEtBQVgsd0NBQVdBLEtBQUssQ0FBRVMsS0FBbEIseUVBQVcsY0FBY0EsS0FBekIsd0RBQVcsb0JBQXFCTSxJQUFoQztBQUFBLEdBQUQsQ0FBN0I7QUFFQSxNQUFNRixNQUFNLEdBQUcsRUFBZjs7QUFFQSxNQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSUMsV0FBVyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQWxCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxXQUFaLEVBQXlCLFFBQXpCOztBQUNBLFlBQVFBLFdBQVI7QUFDRSxXQUFLLENBQUw7QUFDRVAsZUFBTyxHQUFHLDBCQUFWO0FBQ0EsZUFBT2hCLFFBQVEsQ0FBQzZCLDZFQUFVLENBQUNiLE9BQUQsQ0FBWCxDQUFmOztBQUNGLFdBQUssQ0FBTDtBQUNFQSxlQUFPLEdBQUcsMEJBQVY7QUFDQSxlQUFPaEIsUUFBUSxDQUFDNkIsNkVBQVUsQ0FBQ2IsT0FBRCxDQUFYLENBQWY7O0FBQ0Y7QUFDRSxlQUFPVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLENBQVA7QUFSSjtBQVVELEdBYkQ7O0FBZUEsTUFBSUUsSUFBSSxHQUFHO0FBQ1QxQixVQUFNLEVBQU5BLE1BRFM7QUFFVE0sVUFBTSxFQUFOQSxNQUZTO0FBR1RRLGVBQVcsRUFBWEE7QUFIUyxHQUFYO0FBTUEsTUFBSWEsVUFBVSxHQUFHO0FBQ2ZmLFdBQU8sRUFBUEEsT0FEZTtBQUVmQyxlQUFXLEVBQVhBLFdBRmU7QUFHZkUsVUFBTSxFQUFOQTtBQUhlLEdBQWpCOztBQU1BLE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJoQyxZQUFRLENBQUNpQyx5RUFBTSxDQUFDSCxJQUFELENBQVAsQ0FBUjtBQUNBOUIsWUFBUSxDQUFDa0MscUZBQWlCLENBQUNILFVBQUQsQ0FBbEIsQ0FBUjs7QUFDQSxRQUFJZCxXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckIsVUFBSWtCLGNBQWMsR0FBRztBQUNuQm5CLGVBQU8sRUFBUEEsT0FEbUI7QUFFbkJaLGNBQU0sRUFBTkE7QUFGbUIsT0FBckI7QUFJQUosY0FBUSxDQUFDb0MsNEVBQVMsQ0FBQ0QsY0FBRCxDQUFWLENBQVI7QUFFQUUsd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGFBQUssRUFBRSxlQURDO0FBRVJDLFlBQUksWUFBS3BCLFNBQUwsZ0JBRkk7QUFHUnFCLHlCQUFpQixFQUFFLGtEQUhYO0FBSVJDLGdCQUFRLEVBQUUsNkJBSkY7QUFLUkMsa0JBQVUsRUFBRSxHQUxKO0FBTVJDLG1CQUFXLEVBQUUsR0FOTDtBQU9SQyxnQkFBUSxFQUFFO0FBUEYsT0FBVixFQVFHQyxJQVJILENBUVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2xCLFlBQUlBLE1BQU0sQ0FBQ0MsV0FBWCxFQUF3QjtBQUN0QjlDLGdCQUFNLENBQUMrQyxNQUFQO0FBQ0Q7QUFDRixPQVpEO0FBYUQsS0FwQkQsTUFvQk8sSUFBSXZDLE1BQU0sSUFBSSxDQUFkLEVBQWlCO0FBQ3RCMkIsd0RBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ1JDLGFBQUssRUFBRSxxQkFEQztBQUVSQyxZQUFJLFlBQUs3QixLQUFMLGdEQUZJO0FBR1I4Qix5QkFBaUIsRUFBRSxrREFIWDtBQUlSQyxnQkFBUSxFQUFFLDZCQUpGO0FBS1JDLGtCQUFVLEVBQUUsR0FMSjtBQU1SQyxtQkFBVyxFQUFFLEdBTkw7QUFPUkMsZ0JBQVEsRUFBRTtBQVBGLE9BQVYsRUFRR0MsSUFSSCxDQVFRLFVBQUNDLE1BQUQsRUFBWTtBQUNsQixZQUFJQSxNQUFNLENBQUNDLFdBQVgsRUFBd0I7QUFDdEI5QyxnQkFBTSxDQUFDK0MsTUFBUDtBQUNEO0FBQ0YsT0FaRDtBQWFEO0FBQ0YsR0F0Q0Q7O0FBd0NBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHR25DLFNBQVMsR0FDUjtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1rQixXQUFXLEVBQWpCO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBRU4sSUFMTixFQU1FO0FBQVEsV0FBTyxFQUFFO0FBQUEsYUFBTVYsZUFBZSxFQUFyQjtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkYsRUFRRTtBQUFLLGFBQVMsRUFBRTRCLHlEQUFPLENBQUNDLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVy9CLFNBQVgsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVlILFdBQVcsSUFBSSxDQUFmLEdBQW1CLENBQW5CLEdBQXVCQSxXQUFuQyxNQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBYUMsV0FBYixDQUpGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dFLFNBQVMsS0FBSyxRQUFkLEdBQ0M7QUFBSyxPQUFHLEVBQUVnQywyRUFBVjtBQUFxQixPQUFHLEVBQUMsUUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0M7QUFBSyxPQUFHLEVBQUVDLHlFQUFWO0FBQWtCLE9BQUcsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FQRixDQVJGLENBREY7QUEwQkQsQ0E1R0Q7O0dBQU10RCxLO1VBQ2FFLHVELEVBQ0ZFLHFELEVBQ0FFLHVELEVBQ0FBLHVELEVBQ0RBLHVELEVBQ0VBLHVELEVBQ0VBLHVELEVBQ0pBLHVELEVBQ0lBLHVELEVBQ0VBLHVELEVBQ0ZBLHVEOzs7S0FYZE4sSztBQThHU0Esb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFFTyxJQUFNa0MsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHN0IsTUFBSCxRQUFHQSxNQUFIO0FBQUEsTUFBV00sTUFBWCxRQUFXQSxNQUFYO0FBQUEsTUFBbUJRLFdBQW5CLFFBQW1CQSxXQUFuQjtBQUFBO0FBQUEsaU1BQXFDLGlCQUFPbEIsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbkQ4QixrQkFEbUQsR0FDNUM7QUFDWDFCLHNCQUFNLEVBQU5BLE1BRFc7QUFFWE0sc0JBQU0sRUFBTkEsTUFGVztBQUdYUSwyQkFBVyxFQUFYQTtBQUhXLGVBRDRDO0FBQUE7QUFBQSxxQkFPbkRvQyw0Q0FBSyxDQUNSQyxHQURHLDhDQUN1Q3pCLElBQUksQ0FBQzFCLE1BRDVDLEdBQ3NEMEIsSUFEdEQsRUFFSGdCLElBRkcsQ0FFRSxVQUFDVSxHQUFELEVBQVM7QUFDYnhELHdCQUFRLENBQUM7QUFDUHlELHNCQUFJLEVBQUVDLDBEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxFQVFIZCxJQVJHLENBUUUsWUFBTTtBQUNWUSw0REFBSyxDQUNGTyxHQURILDhDQUM2Qy9CLElBQUksQ0FBQzFCLE1BRGxELEdBRUcwQyxJQUZILENBRVEsVUFBQ1UsR0FBRCxFQUFTO0FBQ2J4RCwwQkFBUSxDQUFDO0FBQ1B5RCx3QkFBSSxFQUFFQyw2REFEQztBQUVQQywyQkFBTyxFQUFFSCxHQUFHLENBQUNJO0FBRk4sbUJBQUQsQ0FBUjtBQUlELGlCQVBIO0FBUUQsZUFqQkcsV0FrQkcsVUFBQ0UsR0FBRCxFQUFTO0FBQ2RuQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlrQyxHQUFaO0FBQ0QsZUFwQkcsQ0FQbUQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmO0FBOEJBLElBQU1qQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDYixPQUFEO0FBQUE7QUFBQSxpTUFBYSxrQkFBT2hCLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQy9COEIsa0JBRCtCLEdBQ3hCO0FBQ1hkLHVCQUFPLEVBQVBBO0FBRFcsZUFEd0I7QUFJckNXLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUUsSUFBWixFQUFrQixNQUFsQjtBQUpxQztBQUFBLHFCQUsvQndCLDRDQUFLLENBQ1JPLEdBREcsK0NBQ3dDL0IsSUFBSSxDQUFDZCxPQUQ3QyxHQUN3RGMsSUFEeEQsRUFFSGdCLElBRkcsQ0FFRSxVQUFDVSxHQUFELEVBQVM7QUFDYnhELHdCQUFRLENBQUM7QUFDUHlELHNCQUFJLEVBQUVDLG9EQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkbkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZa0MsR0FBWjtBQUNELGVBVkcsQ0FMK0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQW5CO0FBa0JBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7QUFBQSxpTUFBTSxrQkFBTy9ELFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ3hCc0QsNENBQUssQ0FDUk8sR0FERyxpSEFJSGYsSUFKRyxDQUlFLFVBQUNVLEdBQUQsRUFBUztBQUNieEQsd0JBQVEsQ0FBQztBQUNQeUQsc0JBQUksRUFBRUMsa0RBREM7QUFFUEMseUJBQU8sRUFBRUgsR0FBRyxDQUFDSTtBQUZOLGlCQUFELENBQVI7QUFJRCxlQVRHLFdBVUcsVUFBQ0UsR0FBRCxFQUFTO0FBQ2RuQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlrQyxHQUFaO0FBQ0QsZUFaRyxDQUR3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkI7QUFnQkEsSUFBTTFCLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNwQixPQUFELEVBQVVaLE1BQVY7QUFBQTtBQUFBLGlNQUFxQixrQkFBT0osUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdEM4QixrQkFEc0MsR0FDL0I7QUFDWGQsdUJBQU8sRUFBUEEsT0FEVztBQUVYWixzQkFBTSxFQUFOQTtBQUZXLGVBRCtCO0FBQUE7QUFBQSxxQkFLdENrRCw0Q0FBSyxDQUNSTyxHQURHLCtDQUN3Qy9CLElBQUksQ0FBQzFCLE1BRDdDLEdBQ3VEMEIsSUFEdkQsRUFFSGdCLElBRkcsQ0FFRSxVQUFDVSxHQUFELEVBQVM7QUFDYnhELHdCQUFRLENBQUM7QUFDUHlELHNCQUFJLEVBQUVDLDZEQURDO0FBRVBDLHlCQUFPLEVBQUVILEdBQUcsQ0FBQ0k7QUFGTixpQkFBRCxDQUFSO0FBSUQsZUFQRyxXQVFHLFVBQUNFLEdBQUQsRUFBUztBQUNkbkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZa0MsR0FBWjtBQUNELGVBVkcsQ0FMc0M7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFsQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hcmVuYS43MTkzZWU3NDNmYzE1ZGVkYjc1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGF0dGFjaywgc3Bhd25FbmVteSwgd29uQmF0dGxlIH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXJlbmEubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTdGF0c1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzVGFibGUvU3RhdHNUYWJsZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVFbmVteUhlYWx0aCB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL2VuZW15QWN0aW9uc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEdvYmxpbkltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL2dvYmxpbi5wbmdcIjtcclxuaW1wb3J0IE9yY0ltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL29yYy5wbmdcIjtcclxuY29uc3QgQXJlbmEgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaWQpO1xyXG4gIGNvbnN0IGhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaGVhbHRoKTtcclxuICBjb25zdCBlbWFpbCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uZW1haWwpO1xyXG4gIGNvbnN0IHVzZXJFeHAgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGg/LnVzZXI/LmV4cGVyaWVuY2UpO1xyXG4gIGNvbnN0IGlzU3Bhd25lZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5pc1NwYXduZWQpO1xyXG4gIGxldCBlbmVteUlEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5pZCk7XHJcbiAgbGV0IGVuZW15SGVhbHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5oZWFsdGgpO1xyXG4gIGNvbnN0IGVuZW15RGFtYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5kYW1hZ2UpO1xyXG4gIGNvbnN0IGVuZW15TmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8ubmFtZSk7XHJcblxyXG4gIGNvbnN0IGRhbWFnZSA9IDIwO1xyXG5cclxuICBjb25zdCBzcGF3bkVuZW15Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tRW5lbXkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUVuZW15LCBcInJhbmRvbVwiKTtcclxuICAgIHN3aXRjaCAocmFuZG9tRW5lbXkpIHtcclxuICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmNGZlYjA0ZmU2Yzk1MzFmYjczOWYwOVwiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGVuZW15SUQgPSBcIjVmODM1MGI0N2RiNTMwYjIyNTk4N2NhN1wiO1xyXG4gICAgICAgIHJldHVybiBkaXNwYXRjaChzcGF3bkVuZW15KGVuZW15SUQpKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJEZWZhdWx0YXNcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICB9O1xyXG5cclxuICBsZXQgYXR0YWNrRGF0YSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICBlbmVteUhlYWx0aCxcclxuICAgIGRhbWFnZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBiZWdpbkF0dGFjayA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGF0dGFjayhib2R5KSk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVFbmVteUhlYWx0aChhdHRhY2tEYXRhKSk7XHJcbiAgICBpZiAoZW5lbXlIZWFsdGggPT09IDApIHtcclxuICAgICAgbGV0IGJhdHRsZVN0YXRCb2R5ID0ge1xyXG4gICAgICAgIGVuZW15SUQsXHJcbiAgICAgICAgdXNlcklkLFxyXG4gICAgICB9XHJcbiAgICAgIGRpc3BhdGNoKHdvbkJhdHRsZShiYXR0bGVTdGF0Qm9keSkpXHJcbiAgXHJcbiAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgdGl0bGU6IFwiWW91IHdvbiBoZXJvIVwiLFxyXG4gICAgICAgIHRleHQ6IGAke2VuZW15TmFtZX0gd2FzIGtpbGxlZGAsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiPjwvaT4gR28gYmFjayB0byB0b3duIScsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMjAwXCIsXHJcbiAgICAgICAgaW1hZ2VXaWR0aDogNDAwLFxyXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgaW1hZ2VBbHQ6IFwiQ3VzdG9tIGltYWdlXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChoZWFsdGggPD0gMCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIllvdSBhcmUgZGVhZCBoZXJvZSFcIixcclxuICAgICAgICB0ZXh0OiBgJHtlbWFpbH0sIHdhcyBicnV0YWx5IHdvdW5kZWQgYW5kIGdvdCBpbnRvIGhvc3BpdGFsYCxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPiBHbyBiYWNrIHRvIHRvd24hJyxcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL3Vuc3BsYXNoLml0LzQwMC8yMDBcIixcclxuICAgICAgICBpbWFnZVdpZHRoOiA0MDAsXHJcbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDIwMCxcclxuICAgICAgICBpbWFnZUFsdDogXCJDdXN0b20gaW1hZ2VcIixcclxuICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xyXG4gICAgICAgICAgcm91dGVyLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uIC8+XHJcbiAgICAgIDxTdGF0c1RhYmxlIC8+XHJcbiAgICAgIHtpc1NwYXduZWQgPyAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBiZWdpbkF0dGFjaygpfT5BdHRhY2shPC9idXR0b24+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNwYXduRW5lbXlDbGljaygpfT5GaW5kIGFuIGVuZW15ITwvYnV0dG9uPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuRW5lbXlCb3h9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDI+RW5lbXkgdGFibGUgPC9oMj5cclxuICAgICAgICAgIDxoNT5uYW1lOiB7ZW5lbXlOYW1lfTwvaDU+XHJcbiAgICAgICAgICA8aDU+SGVhbHRoOntlbmVteUhlYWx0aCA8PSAwID8gMCA6IGVuZW15SGVhbHRofSA8L2g1PlxyXG4gICAgICAgICAgPGg1PkRhbWFnZToge2VuZW15RGFtYWdlfTwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtlbmVteU5hbWUgPT09IFwiR29ibGluXCIgPyAoXHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtHb2JsaW5JbWd9IGFsdD1cIkdvYmxpblwiIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17T3JjSW1nfSBhbHQ9XCJPcmNcIiAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJlbmE7XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYXR0YWNrID0gKHsgdXNlcklkLCBoZWFsdGgsIGVuZW15RGFtYWdlIH0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICB1c2VySWQsXHJcbiAgICBoZWFsdGgsXHJcbiAgICBlbmVteURhbWFnZSxcclxuICB9O1xyXG5cclxuICBhd2FpdCBheGlvc1xyXG4gICAgLnB1dChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX1VQREFURVNfSEVBTFRILFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL3VzZXJzL2F0dGFjay8ke2JvZHkudXNlcklkfWApXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlcy5VU0VSX0RBVEFfQUZURVJfQVRUQUNLLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzcGF3bkVuZW15ID0gKGVuZW15SUQpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGNvbnN0IGJvZHkgPSB7XHJcbiAgICBlbmVteUlELFxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coYm9keSwgXCJib2R5XCIpO1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy9zcGF3bi8ke2JvZHkuZW5lbXlJRH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuRU5FTVlfU1BBV05FRCxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChcclxuICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/aWQ9NTk4MDk4JmFwcGlkPWI1NTE2Mzc4YmYwMWExMDc3YzVmNzEzMjNiYTk1MGFjJnVuaXRzPW1ldHJpY2BcclxuICAgIClcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9XRUFUSEVSLFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd29uQmF0dGxlID0gKGVuZW15SUQsIHVzZXJJZCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgICB1c2VySWQsXHJcbiAgfTtcclxuICBhd2FpdCBheGlvc1xyXG4gICAgLmdldChgaHR0cDovL2xvY2FsaG9zdDo5MDAwL2VuZW1pZXMvc3Bhd24vJHtib2R5LnVzZXJJZH1gLCBib2R5KVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuTkVXX1NUQVRTX0FGVEVSX0JBVFRMRSxcclxuICAgICAgICBwYXlsb2FkOiByZXMuZGF0YSxcclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9