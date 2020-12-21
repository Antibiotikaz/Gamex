module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/arena/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/assets/images/archer.png":
/*!*********************************************!*\
  !*** ./components/assets/images/archer.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/assets/images/goblin.png":
/*!*********************************************!*\
  !*** ./components/assets/images/goblin.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABDSSURBVHiczZt5fFXVtce/e59zz03uvSQhAZKQCQghhClRGQLIpKiIyItSnKtWqxVrUXxVW6tVa+vQVrGDQy3PIlIfpQ4MAhIBmUUECmEIJIGEAIHMIeQmucM5u3/ExDDm3gx97/f55JNPzlnz2cNaa+8I/m8QCvQEegCVQDlQfy7Ry3um3K5QL7occvDslFWerjBE7wqhF9EzQ9PkTQg1xfSr8HMJNF24gWzTr5YA/wA8QqkchPqgq5wHEF0luBXG64ach6DvkKujRcroHlqvZBeuSBt2p47HbVJf46XsiJuCbRXm3jWllulXp0yv9SNg1bnC6rZNjxbCWqVh3RYyamVeR43r6gBMF1J8fEVWnJwyO0U6uxttMjSe8bPmLwVq68KjSil+ACxofnfmqxvSNCF+ruD7ID5B8opz5PJvOmKg7AhzG+grNbF48qxkbcZzgwNyHiCkm860nw4U058eJIUU7wHDmt8JKUYouL3pL5WlLGt8R40MNAAhul1bpdvFGiA5EAbNJl9OTI8Qkx5Ibtcoy7wlgbTxPZRu1+Y2P3ON+myBQl4BoCTXujJXvNaKJdlm17JtIdoOoHugegINQJrfY07p2cc1QWpiH/BAG/ROZaqbJ9zX1xAdmGTjf9BP93vNSUBM8zNX5rIcpBjpLApd34r0AamJfdEprkl+j3k5rUZNWwh0F9ir2WR5xtTYnroh9ZWv570thJrh96qHgKIL0F+mlNKTR0QGascFET84DCmFskw1EljW/LzVvO+jGeJtlLhm6uMDNM0mOXmwttb0q68D1RHoCPCbPuutrYuKvaNvS2T24jFabGrYJKmJPCQvA73OoR8UGm54bSFaoHZcEJpNEhkf6gGGnvOqF/Cy1MSh3qlhV81ePFobc0cSWz886jUtNQ9oDFhHEPYUeN3+/04YEi6SMiIYflO8FpXo0Epya0d4683HhSBBKfYAQrPJJZm3JrhSMqM6vMv4PUov3FE1SlnMB8KlxmtCivcjeodmTv9Zmn3ak2maK9KgaFc1G+cXSRT3AlWByg9mFziu2cSqrYuKTQB3lZftHx9n8qz+9ltfGmZExjvukZrIA36jGzJ88qzkTtlhrrw7STgjDRvwotREXvc4x723vDTUmDyrv33LwqOUHa4DYOuiYku3a5uA/GDkB5UJ+r3qtfwtFVMrj9XTvXcoSekRLH3pABExodz5WoY9d0O5yv5z/o+lLnw2e8eGfzOkFGg2KYH7J9zXV2VcHys+fHIP1ScaGHN7IlGJDs5UeNi/phTLVL8PWn6Q9F9qNm3Xl389YklNcN3sFJ5cOZ7YAS7euXc7GTfEisxbEmg47bN56/1nMdZVeSkvdF9SeMVRN2cqzs96a0oabEMmRzPm9iTxl/u20yPJyRMrx3PdowPQDcn6/zmiNE3kA58F6U/wiZDfaz67a3kJFcVNtYuzu0HWs4ORmqBgWyXpU2IBOJVf18KTs/oUr167kdezNrPw0RyUpc6T+8lzubw2fTOvXruRbYuPtTyvr/GiFKRN6MmxvTV43CY3PjUQV2RTYnW6tJGvFx+zfF7rWeB8wW2gPfN0labJLSt+l9vyiRfM3oXdqZE2sRc52adAQO/BYS0Ma98s4qGHH2P1ui3kbjxFcc7pswSWF7r5ZkkxS1Z8wU+feoa1bxa2vHNEGEhNqNwN5fTPjKJnXyfzfvhd9rtq7iFTSLEH+KgdvrQvFfb7zJ8c2lQhczeUA5A8MgrTp7A7NXavPGlFJ7uUrn8nOsSlU1xcxKGDB1AKQsPOXnqMUA0hBfv27qGk5DiOsLPT5qSMCHFwU7mlGxJfo0nquJ4AFO6oIufzU9LvtWbTjq8PwW2DrVGKxJ6/pWLUFdPjtP6jovD7LMKjQ9j0fpG4ZlZ/ET/4u4o3OsVB9sKvWbF0GVf9KJkBY3qw7JVc1r5zmKJ/1ZA2sReuSDsLXv+YoyV5ZD2fSvfeoS38rkiDXctLRPLIKMJ62Rl/Tx98jSbzHtzh9TWa7yjFX9rpR4eqQUO3yx1xaWGp97873LDZNbb8/Sif/fYgL2ybjBF68diueauAvV+Uctm0WPatKSV+UDhZzw66pLKnM1Yz7p4+XD8nFdNnMf/Hu3xHd1cX+TxWOtDQXic60hDx+j3WtccP1G6f//DO2NteTdfLC91ITSgjVLtgYMuO1GF36ky4vy8T7u+Lza4x9q4kLL+irtLLmQoPMQO6caH6QTc0VVlcL9zVXv7xi71m4a7qatNnXU0HnIfO6QckGqHaR8pSl9mdumyo9Ylf77xWAOxaVkJiejg9kpxsW3yMpb85gGaTPPjeCBKHRbQIKDvi5s07v8JbbzJ5Vn+ufiiZ2rJGDqwvJ/OWBACey1xjSV1gei1LSPZ7G6wZwOGOGt8Z2Vqxt8Ec7fNYd9dVebOlJs3mF7kbylj9p6bELHFYOA8vzCQlM4qdS0+cJWD3ihJi+ndj9uIx9BveVMmue/cIOatPtdDods3feMa/xuexvu9tsIbTCc5D5zVETOB/gTk+j6lXHW8alWPvSuLAujIKtlXSe2AYCUPDSR3fk/ytlWcx522tIHVcD2JTu9F3eCTH9p1m59ITXHlXEgANtT7qa7wG8AKwCDg7y+oAOrsjdEgz5PE9n58EoM9l3Rl7VxIfzNnNmrcLABgwpgc1pxo5caAWgKrjDZTk1jLw261t84Ii5s/aScbUWAZNaioyc1afQrPJ08COTra33dvgRaFMZT9VUDc+85ZETbNJ+mf2oORgLV8vPsbmBUepPFaPbkj2ryvDFWmw8vVD2OwaVcfr+fRXuRxYX0bCsAjueC0DIQSmz2LRz3K89TW+t4DPO9vermiKOjVD5o26JSHmxicGSgBfo8krV28ixO6itvY0ft/5I1jTNCK6d6e2toanssfR3EP8ct4R1r5z+LTps5JpOkPoVHTFuYDb9FoPffVh8ZIRWXHEpHTDFqIxfEZvjqz3kpNbSPGxoxTk5VFcXERCQiL9+vUnJXUgk8ZdTt8rQ1ucrznZwNp3Dpumz5pDFzgPXdgW121y5+VZcRk3PTNIAjTW+Xnz1u2k9stgwYefEBHxXd/S7a7jwfvu5Kuvv+SRxaNwRTUF4Is3C9gwv7DY9Fr9aFpoOx1deS5why1Em//M+km25qywsriehY/mcKbcT1bWTBKT+nCi5DjLl3yEDDW5642hxAzoBoBlKl66er3HXe19EvhjVxnZlQGwazZ5Yvy9fSKvfSSlRY/fY7FreQn5W6pwV/pxROr0GxnO8Jviz0qfN39QxKo38tyWX8UDNV1lZLsD8Fhu4+NvpIW83gZZlpDi45m/HiIvu6F3wLJz15ex8PHdpmWqB4H32mtjIAg6AM8rJasPeB4RQvwB+OWJNOOlfwpxqfn5EyHFGxlTY7jyrr6yd1q3ixKWF7rZ9H6h2rHkBErwKyyeD9a+YBF0AObs945UUv0ZxQhgnxDykblptg1tsE0SUnyiLBVhODQVm9JNdOsVgqu7gbvGy5lyD6fyz6jGOr8QUtQrS91KO9pb/zH8dI9yPra/cfOsHBXwERTwt5iUbioxPUKFuHRTs0lLSmFpNmmFuHQzblCYih8cpnS7lt1lhl8A7coDfp8u3I/urZvx9rCQ6kB5NJuIS0qPaK77z03BBTRte6UFdb2+/btdHZ5g0e5a4A9DXaVtkBQA1wETdLu2SVlcnTEt9pIMw66LQSmG6IbcAUwFRtJ0e6TLTrHbXAPqv77xdgUvOir9g8XUgG9q2IAlQjARCB0yOdo/+eEUW69+zjYZq080sPbdw9a/lpegFPXKUnuBqwjiuKty4g/jleF39cief7At2jYDcGb7jYOlUt9zjvrshTbkDAEmabqYDEwE4bBMS5v+9KCWpkYw2L+2lIWP70Y3pGlZyiMlm/xelQ1sAHZzkcywbOK9MTadZQgclhDXR2X/7diF6Fob3l70B6Y0O2z6VXh4tL2+/+geIf1HRsmBE3ryj5/n4Oxu8L1fDQla+Kq5eRTurOKBeSM4tKmCw99Ukb+twlt5tN7QdOkWmtjk95jZQDawvzVvzTX3zgQRHvHF3+a1pac9AYjW7drf/R7zqrDoEE/K6CgjeUSk7DcikvDokLMIdy0rYeXrh3h63USkDE7V76dtYvRtiYz9tinSjLpKL0d2VHF4e5Uq+KrCU3WiIUQ3tG1+r3kbcBRAgWDmTCn++c8264dgAxCqGXJ/bIor7ubnhhixqRdPaqCpk/PKdRuY9sRARtwcH7CS/K8qef+RnTyxYjzhMSGXpC0vcrP01wd8Rbura0yfSgUC3pkg+IbIo44IW9bsRWPsEbGXNgzAZtcwvRYb5xdy+Y1xl2yVN8Pj9vPBY7sZek006VMvvWsAOCMM0q+P1XavKNEb6vw6ijUBefItgtpedLs29Yob4+yGI/C4TfxhP6ISHLz30A6qS5p6hX6PxSfP72fuDVv48PE91Nf4gKbh/d6snUgNrp+TGrAOzSYZcXOC3WbIacH4A0GOAN0mnh96XWz31qc+bUFqgkFXRZO3pYLVf8ynvsbH/nVllH1Tx8tzprDpyyJyvymj9HAdi3+xF0e4jfveHk5ouC0oR86Ue9i3psyuLPVKUD4FQ2wpXPYgvn4zHOE2fvDWFez5/BRbPzzK8X2nmZiZzJMvr6S0og4OQW1FI1PmDGDEzfFBL5gAhkNHWSq0bcqzEVQAlKlCgxn+rSGkIGNqLBlTY/n0xQM4a2wsefdunnp1FXU9Pcz8zbnXgIKD3aFhmcqgyaeA2+ZBrQGWqUKN0I63EZNHRrJxeyHpg2I5WVFLwrDAp9TF0OrDtJ1utkIwAbArhdaeKXAuBo7riV9ZLPz0X1iqaRHrKAxHy4dxBcMXjGZXk6LzA1BX6eXkoTMBCzIcGmPv7sPsF5bh9ZjUVXkD5i09XMfpU+eXBa0+TNcGwO44fwrsWHqC5b9ts+44C8P/K47GRj/HTtRc8MrMxZD953y2Lio+73mrHKPLAtANwHCePwIsv4Uygyvfpd600k96oB9j70xqg/o7KFNdUJcRqiEEqtnOgO0IgrZpBHTCIgjgrm4a9n0yIrA7Oy5TSIFmSJOunAJCCqXbO6c3UV7kRgioucB8bi9sdq1rA2Czy4D214ZaX8sXvhBqTjay+o/5xKaGse6vR1qu3F1MVnOq3BYMh6YIMgDBjD2XLUSzAiFcNTePHZ8ep0cfJ736uYhKdKDpAstUVBytJ29zBfFDw7njd+l89Mt9vHHzFgaM7UGvfk6kFChLUXGsnvIjbsoK3QydHM3tv0tvU689tIsDYDgCC0DWM4MYNTOB4j01nMw/Q/mROuqqvDjCbYTHhHDbK8NIm9gTIQX3/OlyDm0u5+CGckrz63BXe3FGGrii7IyYEU/isAh6p4W1rRQwHJqgCwPQzR5AOQtNBVDcoDDiBl3a8PIiNz37OBk4rmfLBYmOIMSlS7pwDXDanbZOO0tsqPUxN2sz1Sc6dMnrLNi7OAAuu0vrtPa06VMoBT5PQLMqIIS4bDqyC/OAkG76f+ofLdsFu0ND00VQlVXAAZCScLtT77IDis6A4dCRQka0TfkdAg+AroV3RiXYlWi6dK26ZgoIiauj/wR1tsBvf3XiFQ3DoYEKrh8Q8Jw2fepg7obyzD6Xd7ed27KqOt5AwxkfBduCu8c07u4+VJ9s4HRp4Omwu9qHbjScp0sp2L+m1G9ZKjcoI4JAjG7XNgqBn6aT2/9XP0Jg2kK0b4C+wTj1b6zSWuPf+IOGAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./components/assets/images/orc.png":
/*!******************************************!*\
  !*** ./components/assets/images/orc.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABHHSURBVHicvZt5XJRl18e/9+wwzKCA4Ia+Ii5AirjlkivmQool+pRPm9KiUW+mWT369jxZmZZrVqZPmkvmQi6pKWaa4E7mvmuICi6giCwDDDPM3O8f9zBsM8DA2O/zuT8w97muc51z5lzLOecagUePdsBIYDDQ3PZonbQtBO4BfwH7gB3A+UcpnPAIeXcFPgciy7/U+2jx0KocdjAWmsjLLkAU7a9E4DfgE+DIoxDyURhACSwE4gCheetG9I3uSLfIdjQL8kOhlFfbWbSK3LicwelD19gTf4KMtGwAq43nh4DRncK62wANgM3AwAZ+XuILUwcJ/Z8ORyaX1YmZ1WLlwPazrPjsVwy5RQCJQDRgcJfA7jSAAvgViGzdoSnTlozFJ0DvFsYP7+cze+J6Us7eBjgADALM7uBdvT+6hi+B54LCmvLp2lj0DT3dxthDq6Z3VBjnk2/wIDOvJeAB7HEHb3d5QARwXO/rJftgzQQa+OvRKKCBJwhu9LGsu7m8G71EzM8pAngc+LO+PN3lAauANjFThtK2aysASqxgEUGjdNMIgKdOg7evVji297IANAPW1Zdn3VaniggChvi38KVndEQFQrFbZmlF9Hs6nMYtfACigDb15aeot0TwNEDXoR2qrPbl9nMA5r4Vz9HdF6tl1i2yHdOW/tMpXS6X0W9kR+K/TgIYASyog8x2uGqA321/nwPu2/6PBOjwRLsaO2v1GgICG1bbxrexd418uj8ZUmqAzuVeNwI2IB2eBtXIxAZXligNUGTrdQ2RYUhH1rNAh/kHpqPxVFdhXgt96oSDv5zLWjhlUz/gItJUSACCbWQ1YKoNH1fWAA2AIAgg0loQhGSgF9BE7amqovyjRp8RHfQzxBmXgZ6CwFEgWCjbcjS15eOKAYoAmgQ1IvL5Xoii6CMIwu+Aj9rD8dm+OsyftJFRbT5iVJuP+CJuvcv9AdUX3l/8A4F9oohvdGwvmgc3KqXV+rjsigGKAYuxoJhRk4cw5r0oBAENIKu82NUGXt4e9qdhI53L/XesOkpRXtFamSBoXv13FOOmDaEw3whgoZbuD64fhFIFmdBqXtI0NJ5qzu6/zMr/24TJaKb/cz2ImTIEmazMpo9iDRBFkR/n7uXnZYdQqhTi23OfEXpHPUahoZgXu8xGtIrXKFsLaoSr54DTolUk/dJdADr2a8+kpePQ+WhJ2pDM8g9+wvwoNn8bTEYzc96K5+dlh/D21fLpuvFC76jHAEg9fwfRKgKcdoWnqydBb2CEIBPo2K89AA389XQaEMLFIymknkkj/cpdug3rCEgesGzaJjYs2kdOlgF9Q08a+HlVO8DNK5ns+vEYyz/eycXjN+k1NMxOm/f2T/yx5zJNW/nyyZpxtGwXYKfFf53EjUsZIIXNJ2urkKsesFEQBOPxX8+Rez/f/tKvuQ9TV75Kx37taRhQ0ecVKjnpKffZuHg/k4d/y+wJzk+v89/ZyOTh37Jx8X7SU+5XyR14+3rRuX8bZv/0aulpEIDszDwO7jgH0kK9yRWFXPUAI6C0Wqz90y7focvgx5ArJBYqjZKuQzrQoU/ZgUgAIoeH0P+ZThzddQFjoZn2XVrQfVB7h8xPH0jh+qUMfPx1LPgljsjRnSvQuw5sR9/ojqjLBRjFRWbmvBlPZtpDgJnAblcUqkss8AWQ/NeJG6yYXjtjBwQ2pKjAhJe3B2/OHum0XdyskXh5e1BUYKrxxFiKBZM3cuHYDYCjwJxadSqHusQCRcBTwF8Xj6b4WC3WWmV8ekeF1ZgOA+g+qD2CrHabk8Vi5fTBFIBsYDh1SJfVJ1rfBMSM+zTGvuhVxrL3NmAtLuad+TE1Ln6VkXPfwJdTN6PVaXjvm2cdttm/7QyLpm4B2Aj8w6UBbKhPPiANgdiLR68JDRrp2PX9fs4fvEqnASH2BtsX7+X6xbsc2XWBDj1b1doI1y9lMOOlVVy/mEGJ2cJTL/ew0xZP28b+rWcwFpr470c7RUuJ1Qq8CtyuixL1CYeTEZlkNpq/XPPxVjmAzqeigoHtm5B1+yH37+Qy/dnvmTR3FI8PDnHIrBQnk/5iweRNFBokb279WNMK9BNJV8nJMpSG1RbgHeCPuipR34TIN6Io9gbWIKWuK6BFiCR8WFgYJmMJc/43ns1LDyI6ODuLosjmpQf5bMJajIUmwsKk/T8orImjca22MXsDi+ujgDsyQn8ALyHFChXQMrQZAJ06dWLHjh3ovHSsnb+XBZOl43MpzKYSvv5gK2vn70XrqWXz5s2Eh4cDVT3AhmLbmMfqK7w7MkKlMBYXFnuUf9EitClKlYL4+HgSEhIwGiW3PrzzPCcSr9p3hRKzBWOhFL+YTCZiY2PJz89HpVYQ3KGiAWwBT5G7hHaHB5Tinslopii/bCfy8NIwcWY0vk10mK1GVB5yewRYfktUKMveqzzkmK1GfJvoiJs1Ek9dWWhvyC3CVFwCkOkuod3pAaeBdn+duknHvmWnwZ7DwxnwTLhbBrhw7Gb5sdwCd3rALoCTeyoWc41uDA6PJNh573QXT3eWxrSCwE1BEHynb4ijSZC/ndBIB4pypv7q/Z85vu9Khc4RfYKZvHC0U+Y3r2TybvQSrFYxG2gBFLhDaHd6QIEo8oXVKrJmxtYKeYH8SgdUi9lSpbNS5Xw2moxmvpm2FasU73+Gm5QH91eHlUjFyx7hA0IYPzMGpVqK3PQa0NYhb2oymlk4ZRN/7LkMcBjoD5S4S2B3FkdBOqAkCIIwMuP6fZ9Lyddo1TEQnY+WYovkbtV80VVw83Imn7+xnnPJ1wGuIFWD8twpsCMP2I6kyItAvgN6bdAEKUDpLZPJiBgURudBYQRHtMDPX4teA84CyLzsAi4eT+NwwnmO7LpQmuY6BIwBMuoojw7p5CggXddxCm+kyooInAAa13FAgGfK8bI/CpVC9NR7iJ56D1Fre7y8pUepUlRpb3ueqYccjW26lPKqkIKu7AHNgfRyn1OBoUgVIFcg2AaNGDPjWQSZwOVDl3iQ/oC8e7mYTY6nsFKlQO/vjW+gL+2fCEG0imycEQ9wCuhiU8AVtEG6tBFU7l1T4G7ph8ozUgbQtXMY/o18Sdh9IEgQhCOiKI4BklwYOBqIaB7anPZ9pOivXW/HabCa0Dy0Obcu3oqw8dzmQtf+gsBGUcTvqaH9yLyXxfGTF6DSzld5JhYDlJRY2LB6PnGvPYcoin7AXqQLSrXZNmXARwDRE/vjpxPwUkuLn6wWvWUyqa2XGvx0AtET+5eSPnJh/H8De0URvzdfH8v6VfMwm+1eV2FTrjwFBEGgSK/Xqe+kJAEQv2kXb0+dZTUUFMqQ3Pp9IBnog3T3byCSi8baePwH+DioYyDvrni1FvLWjPmxy0k9mw7Sl/CZ7fVKoBPSfcLfgINAT6ScZRcvraf1q3nTZc+OHgZAk9b9yM8vKBRFscIdxcoWFUWRM7m5+aSkpgHw7OhhJO/fIOvcKVREmoe/AzlIc2uKTYgooBuwHvgYILx/9YkPV1CO10ykWyHdgGG2safYZMlB8tQuXSLCxOT9G+zKp6SmkZdnQBTFKjGEI5c6BJC4vyzUPnn6Infu3rN7S0NvL+XIyO4smD4epVIBEIAUmz+n9/VCkAn8uuIA2Rm59dMcyM7IZdf3+xFkAnpfL4CxtrEClEoFC6aPZ2Rkdxp6e9lz5bfvZAonT5ddxNiXZE8YHa7M39E5oBdwuFuXx9iXsJJJ781mxQ9bkMkERg/txQvRfenWMRi5bUIH9n0dk7mE1p1aEDEojJ4jIti98gC7Vx6kWdvGTFo6Dq3ew8EwNaMgt5BFb6zm9tUMhozvw5DxfTn6yylO7jlP6pl0VEoF6Qe+A8BitfLn2RTWbNvP5t1HsVpFXnk5hi/n/IuBUeP588R5gB5USp85MoDg4aG5UVRkbPHkwF7s2XeE5o19WT4rjs6hQVUaB/Z9HbVOzezd79nfWUosfPv2j1w+lkpguya8NvdZfJvWLs9figd3HvLd1A3cuppB+8dbE7foeXsRBmDakLkU5xfbDVAeJy+k8sr0xdzOzKZUB5tOQVTaSp3FAi8BqwGa+vuQsPxDmvpXVcBqFQns+xpevl7M3DmlAs1kNLN0yjquHEtFo1XzzKTB9BgRgVwu49TvF/hz11nuXLsHQNPW/nSLCiciMhRLiZXkX07x86LfMBYU0757EBMX/tMeU5Tiw6cWYHhgIP3AMmQO6gi3Mh4w/PVZ3LmXXV6nNZXbOTOAh0wm5APybUum8Xi448tYtzIe0PnpqQRHtGTystgqdKvFyi9L9rHnh0OIVpGGAd40DNCXruhVENQxkIeZeTzMzEWQCQwe14fhEwY4LLwsePV7rp1O4/T2BQ6/HIDk01d5Ou5zAIvVKupwkEpztq8OsVpF+YgB3ZwqD7Aj8QRQlv2twlwuY+Rbg/hgzQRCewXzMDOX1LPphIUEs2X9V2SlHyEr/Qib1y0iNKQ1qWfTeZiZS2ivYP7140Si4yKdVp1a2BKuv+xzfleyR6e2RPXrgtUqypG27KoyOuk7FuD56D5Omd/KeMCi1TsQBIEnYro6bQcQ2K4J3YdJabHHQtuQ+OsqhgzqjYdGjYdGzdAnnyBx1yrCQqR7Dd2jwmnetvowpM+orgiCwKLVO7mdme203Qsj+1bQqTKcGaC9TBB4PLytQ+K5qzeJeWsOD3LyiXyhFwEt/aoVFuDwz5K3GAyF/LBuW4XagCiK/LBuOwUFkoce3nKiRn4B/+PHwOd7kvUwj5i35nDu6k2H7XqEt0UmXZ5yeDBxlg+Y3bCBl2byuBFVCEdPXWHEhFlk5xroMrgDz/3rqRqLmYnrjnJoy3EAcnLz+e33I3h76+jetQMAXy9dywcfzicnV4q+s+/m4KnzoFWH5tXybdctiHtpD7h46jrrth8gIyuHTiGt0HqWZZKVSgXLN+2lyGhSI50SK8CZB+g81FVvfpUIIpleJTRu7c/Y6SOInTW6VpXhxA3JyGUyDq6bSeKaT5DJBFb9uNVOX712GzKZQNKPn3Bg7UzkMhlJG5Jr5CuTy4idNYax00eg1qpZ/XMSj4/+gLnLt1JQVFanseni8CZWtdKbSyys2pJIePQUxs9cSoLsDuYQHdPWvcETo6qf9+UhV8gRBNB6atB6qhEQuJtx307PyMxCQEDrYaMLuPQjiydGdWXG1kkMeqk3JouFucu30T3mfVZtSaTEUqViVwHOfLfEy1Mjb+zXgJS0DASZQHRcJIPHOV8Uq0PCd0ns/C4RlVKBCJjNJTRooOf2X4kANGszgJycPJRKBQJgMpcw4o2BDH2ln8tjZWfksmPJPo7tOoNoFQlu0ZiMrBwMhUYLDuogTg2AbX3w8NIw+bvxNKthVa4OVouVhGVJ/LHjNKIIuffz0eu9KhggL8+AdyMdgkyg54gIhr7St84/tQG4fTWDha+vpMhgj34dGsBZivIQ0q8yuqo9VbL6KA+SOw+fOJDhEwcCMLX/7Cpt1J6qKqfJ+qBZ28aoPVUUGYxWpDC+0FE7Zwbob/trpoZ1Yt1n21GqFIx5L6pWgomiWJrorPjeKiKKIkItf2KyZeFuCnILeXFGjelCK9DdGbHehZFjO89wcu+FWrdP2vAHxsIqlXSMhcXs/6n21e4/fz3Lid/q/5tKd1aGakTG9fts+2avU/q2r/eQeSPrb5TobzRAQW4h/313fbVXaU1GM9++sxbDQ7dVvmrE32IAKTRez720B0REhtIo0AeDoYD0Wxmkpd/FYCjAv4UvEZGhZN3KZtn78Y/0znF5PHIDmIxmlk5eS+qZNII7t+Rl27W6khILnXqOIqJXDCUlFrpHhfPypzEEd25JyqmbLJm87m8xwiM3wIrpG7ny53WatQlgwryxKFUKhsb2ZUhsXzR6NRq9Wvo8vg9KlYIJ88bSNDiAK8dSWf2fLY9avBpviBwuzCu6K6hUcc4aiCLxRoMxV1CpXndEv3Q0ZZtcIZe369X6Ja2fdzaAQgUj3xnGyHeGVWmv9VPRtkeQb+aNrB/OHbhaKKhUYxzxLTQYVyOiEVQqx7cogcK8om8BH2d0gP8HJok9vSvlcYQAAAAASUVORK5CYII="

/***/ }),

/***/ "./components/assets/images/warrior.png":
/*!**********************************************!*\
  !*** ./components/assets/images/warrior.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/warrior-1e29d5cff6b92948aa08e16254dfb4e5.png";

/***/ }),

/***/ "./components/assets/images/wizard.png":
/*!*********************************************!*\
  !*** ./components/assets/images/wizard.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./components/navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/navigation/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.module.scss */ "./components/navigation/navigation.module.scss");
/* harmony import */ var _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ernes\\Desktop\\HomProject\\gamex\\client\\components\\navigation\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const navigation = () => {
  return __jsx("div", {
    className: _navigation_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Nav,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/dashboard",
    as: "/dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, "Dashboard")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/marketplace",
    as: "/marketplace",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Marketplace")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/arena",
    as: "/arena",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "Battle Arena")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forum",
    as: "/forum",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Forum"))));
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./components/navigation/navigation.module.scss":
/*!******************************************************!*\
  !*** ./components/navigation/navigation.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Nav": "navigation_Nav__9E9sp"
};


/***/ }),

/***/ "./components/statsTable/StatsTable.js":
/*!*********************************************!*\
  !*** ./components/statsTable/StatsTable.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _statsTable_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statsTable.module.scss */ "./components/statsTable/statsTable.module.scss");
/* harmony import */ var _statsTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_statsTable_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_assets_images_archer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/assets/images/archer.png */ "./components/assets/images/archer.png");
/* harmony import */ var _components_assets_images_archer_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_archer_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_assets_images_warrior_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/assets/images/warrior.png */ "./components/assets/images/warrior.png");
/* harmony import */ var _components_assets_images_warrior_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_warrior_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_assets_images_wizard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/assets/images/wizard.png */ "./components/assets/images/wizard.png");
/* harmony import */ var _components_assets_images_wizard_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_wizard_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\ernes\\Desktop\\HomProject\\gamex\\client\\components\\statsTable\\StatsTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const statsTable = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const isLoaded = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.isLoaded);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.user);

  if (user === undefined) {
    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }
    }, "Loading...");
  }

  let sourceIMG;

  if ((user === null || user === void 0 ? void 0 : user.role) === "warrior") {
    sourceIMG = _components_assets_images_warrior_png__WEBPACK_IMPORTED_MODULE_5___default.a;
  } else if ((user === null || user === void 0 ? void 0 : user.role) === "rogue") {
    sourceIMG = _components_assets_images_archer_png__WEBPACK_IMPORTED_MODULE_4___default.a;
  } else {
    sourceIMG = _components_assets_images_wizard_png__WEBPACK_IMPORTED_MODULE_6___default.a;
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: sourceIMG,
    alt: "Class",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: _statsTable_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Dashboard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Stats table "), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Class: ", user === null || user === void 0 ? void 0 : user.role), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Health: ", (user === null || user === void 0 ? void 0 : user.health) <= 0 ? 0 : user.health), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "Level: ", user === null || user === void 0 ? void 0 : user.level), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Experience: ", user === null || user === void 0 ? void 0 : user.experience), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "Gold: ", user === null || user === void 0 ? void 0 : user.gold), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "Stamina: ", user === null || user === void 0 ? void 0 : user.stamina)));
};

/* harmony default export */ __webpack_exports__["default"] = (statsTable);

/***/ }),

/***/ "./components/statsTable/statsTable.module.scss":
/*!******************************************************!*\
  !*** ./components/statsTable/statsTable.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Dashboard": "statsTable_Dashboard__v2rFK"
};


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      setTimeout(() => {
        throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
      }, 0);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/arena/arena.module.scss":
/*!***************************************!*\
  !*** ./pages/arena/arena.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"EnemyBox": "arena_EnemyBox__11H2M"
};


/***/ }),

/***/ "./pages/arena/index.js":
/*!******************************!*\
  !*** ./pages/arena/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/Actions/userActions */ "./store/Actions/userActions.js");
/* harmony import */ var _arena_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arena.module.scss */ "./pages/arena/arena.module.scss");
/* harmony import */ var _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_arena_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/navigation/Navigation */ "./components/navigation/Navigation.js");
/* harmony import */ var _components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/statsTable/StatsTable */ "./components/statsTable/StatsTable.js");
/* harmony import */ var _store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/Actions/enemyActions */ "./store/Actions/enemyActions.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/assets/images/goblin.png */ "./components/assets/images/goblin.png");
/* harmony import */ var _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/assets/images/orc.png */ "./components/assets/images/orc.png");
/* harmony import */ var _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\ernes\\Desktop\\HomProject\\gamex\\client\\pages\\arena\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const Arena = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const userId = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$auth, _state$auth$user;

    return (_state$auth = state.auth) === null || _state$auth === void 0 ? void 0 : (_state$auth$user = _state$auth.user) === null || _state$auth$user === void 0 ? void 0 : _state$auth$user.id;
  });
  const health = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$auth2, _state$auth2$user;

    return (_state$auth2 = state.auth) === null || _state$auth2 === void 0 ? void 0 : (_state$auth2$user = _state$auth2.user) === null || _state$auth2$user === void 0 ? void 0 : _state$auth2$user.health;
  });
  const email = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$auth3, _state$auth3$user;

    return (_state$auth3 = state.auth) === null || _state$auth3 === void 0 ? void 0 : (_state$auth3$user = _state$auth3.user) === null || _state$auth3$user === void 0 ? void 0 : _state$auth3$user.email;
  });
  const isSpawned = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy = state.enemy) === null || _state$enemy === void 0 ? void 0 : _state$enemy.isSpawned;
  });
  let enemyID = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$enemy2, _state$enemy2$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy2 = state.enemy) === null || _state$enemy2 === void 0 ? void 0 : (_state$enemy2$enemy = _state$enemy2.enemy) === null || _state$enemy2$enemy === void 0 ? void 0 : _state$enemy2$enemy.id;
  });
  let enemyHealth = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$enemy3, _state$enemy3$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy3 = state.enemy) === null || _state$enemy3 === void 0 ? void 0 : (_state$enemy3$enemy = _state$enemy3.enemy) === null || _state$enemy3$enemy === void 0 ? void 0 : _state$enemy3$enemy.health;
  });
  const enemyDamage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$enemy4, _state$enemy4$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy4 = state.enemy) === null || _state$enemy4 === void 0 ? void 0 : (_state$enemy4$enemy = _state$enemy4.enemy) === null || _state$enemy4$enemy === void 0 ? void 0 : _state$enemy4$enemy.damage;
  });
  const enemyName = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    var _state$enemy5, _state$enemy5$enemy;

    return state === null || state === void 0 ? void 0 : (_state$enemy5 = state.enemy) === null || _state$enemy5 === void 0 ? void 0 : (_state$enemy5$enemy = _state$enemy5.enemy) === null || _state$enemy5$enemy === void 0 ? void 0 : _state$enemy5$enemy.name;
  });
  const damage = 5;

  const spawnEnemyClick = () => {
    let randomEnemy = Math.floor(Math.random() * 2);
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

  let body = {
    userId,
    health,
    enemyDamage
  };
  let attackData = {
    enemyID,
    enemyHealth,
    damage
  };

  const beginAttack = () => {
    dispatch(Object(_store_Actions_userActions__WEBPACK_IMPORTED_MODULE_3__["attack"])(body));
    dispatch(Object(_store_Actions_enemyActions__WEBPACK_IMPORTED_MODULE_7__["updateEnemyHealth"])(attackData));

    if (enemyHealth === 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        title: "You won hero!",
        text: `${enemyName} was killed`,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then(result => {
        if (result.isConfirmed) {
          router.reload();
        }
      });
    } else if (health <= 0) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        title: "You are dead heroe!",
        text: `${email}, was brutaly wounded and got into hospital`,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Go back to town!',
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      }).then(result => {
        if (result.isConfirmed) {
          router.reload();
        }
      });
    }
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(_components_navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx(_components_statsTable_StatsTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }), isSpawned ? __jsx("button", {
    onClick: () => beginAttack(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "Attack!") : null, __jsx("button", {
    onClick: () => spawnEnemyClick(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Find an enemy!"), __jsx("div", {
    className: _arena_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.EnemyBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }, "Enemy table "), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, "name: ", enemyName), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, "Health:", enemyHealth <= 0 ? 0 : enemyHealth, " "), __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, "Damage: ", enemyDamage)), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, enemyName === "Goblin" ? __jsx("img", {
    src: _components_assets_images_goblin_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Goblin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }) : __jsx("img", {
    src: _components_assets_images_orc_png__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "Orc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Arena);

/***/ }),

/***/ "./store/Actions/enemyActions.js":
/*!***************************************!*\
  !*** ./store/Actions/enemyActions.js ***!
  \***************************************/
/*! exports provided: updateEnemyHealth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEnemyHealth", function() { return updateEnemyHealth; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const updateEnemyHealth = ({
  enemyID,
  enemyHealth,
  damage
}) => async dispatch => {
  const body = {
    enemyID,
    enemyHealth,
    damage
  };
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`http://localhost:9000/enemies/update/health/${body.enemyID}`, body).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_ENEMY_HEALTH"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};

/***/ }),

/***/ "./store/Actions/userActions.js":
/*!**************************************!*\
  !*** ./store/Actions/userActions.js ***!
  \**************************************/
/*! exports provided: attack, spawnEnemy, getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spawnEnemy", function() { return spawnEnemy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const attack = ({
  userId,
  health,
  enemyDamage
}) => async dispatch => {
  const body = {
    userId,
    health,
    enemyDamage
  };
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.put(`http://localhost:9000/users/attack/${body.userId}`, body).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_UPDATES_HEALTH"],
      payload: res.data
    });
  }).then(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:9000/users/attack/${body.userId}`).then(res => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["USER_DATA_AFTER_ATTACK"],
        payload: res.data
      });
    });
  }).catch(err => {
    console.log(err);
  });
};
const spawnEnemy = enemyID => async dispatch => {
  const body = {
    enemyID
  };
  console.log(body, "body");
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:9000/enemies/spawn/${body.enemyID}`, body).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["ENEMY_SPAWNED"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};
const getWeather = () => async dispatch => {
  await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://api.openweathermap.org/data/2.5/weather?id=598098&appid=b5516378bf01a1077c5f71323ba950ac&units=metric`).then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_WEATHER"],
      payload: res.data
    });
  }).catch(err => {
    console.log(err);
  });
};

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_WEATHER, LOGIN_USER, USER_LOADED, LOGIN_FAIL, USER_UPDATES_HEALTH, USER_DATA_AFTER_ATTACK, ENEMY_SPAWNED, UPDATE_ENEMY_HEALTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_WEATHER", function() { return GET_WEATHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_USER", function() { return LOGIN_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_UPDATES_HEALTH", function() { return USER_UPDATES_HEALTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DATA_AFTER_ATTACK", function() { return USER_DATA_AFTER_ATTACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENEMY_SPAWNED", function() { return ENEMY_SPAWNED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_ENEMY_HEALTH", function() { return UPDATE_ENEMY_HEALTH; });
//GENERAL types
//Weather
const GET_WEATHER = "GET_WEATHER"; // Authentication types
//Login

const LOGIN_USER = "LOGIN_USER";
const USER_LOADED = "USER_LOADED";
const LOGIN_FAIL = "LOGIN_FAIL"; //USER ACTIONS
//Combat
//Attack

const USER_UPDATES_HEALTH = "USER_UPDATES_HEALTH";
const USER_DATA_AFTER_ATTACK = "USER_DATA_AFTER_ATTACK"; //SpawnEnemy

const ENEMY_SPAWNED = "ENEMY_SPAWNED"; //Update Enemy Health

const UPDATE_ENEMY_HEALTH = "UPDATE_ENEMY_HEALTH";

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert2");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvYXJjaGVyLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvZ29ibGluLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvb3JjLnBuZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvd2Fycmlvci5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL3dpemFyZC5wbmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0c1RhYmxlL1N0YXRzVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0c1RhYmxlL3N0YXRzVGFibGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FyZW5hL2FyZW5hLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2FyZW5hL2luZGV4LmpzIiwid2VicGFjazovLy8uL3N0b3JlL0FjdGlvbnMvZW5lbXlBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3dlZXRhbGVydDJcIiJdLCJuYW1lcyI6WyJuYXZpZ2F0aW9uIiwiY2xhc3NlcyIsIk5hdiIsInN0YXRzVGFibGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0xvYWRlZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJhdXRoIiwidXNlciIsInVuZGVmaW5lZCIsInNvdXJjZUlNRyIsInJvbGUiLCJXYXJyaW9yUGljIiwiUm9ndWVQaWMiLCJXaXphcmRQaWMiLCJEYXNoYm9hcmQiLCJoZWFsdGgiLCJsZXZlbCIsImV4cGVyaWVuY2UiLCJnb2xkIiwic3RhbWluYSIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInByb3BzIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInZhbHVlIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwic2V0VGltZW91dCIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImNsZWFuZWRBcyIsImRlbEJhc2VQYXRoIiwicGFyc2VkIiwidHJ5UGFyc2VSZWxhdGl2ZVVybCIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImFwcENvbXAiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZXJyb3IiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiUHJvbWlzZSIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJyZXN1bHQiLCJpdGVtIiwic2VhcmNoUGFyYW1zTGlzdCIsImtleSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFyZW5hIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZXJJZCIsImlkIiwiZW1haWwiLCJpc1NwYXduZWQiLCJlbmVteSIsImVuZW15SUQiLCJlbmVteUhlYWx0aCIsImVuZW15RGFtYWdlIiwiZGFtYWdlIiwiZW5lbXlOYW1lIiwic3Bhd25FbmVteUNsaWNrIiwicmFuZG9tRW5lbXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsb2ciLCJzcGF3bkVuZW15IiwiYm9keSIsImF0dGFja0RhdGEiLCJiZWdpbkF0dGFjayIsImF0dGFjayIsInVwZGF0ZUVuZW15SGVhbHRoIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJjb25maXJtQnV0dG9uVGV4dCIsImltYWdlVXJsIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiaW1hZ2VBbHQiLCJ0aGVuIiwiaXNDb25maXJtZWQiLCJFbmVteUJveCIsIkdvYmxpbkltZyIsIk9yY0ltZyIsImF4aW9zIiwicHV0IiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImNhdGNoIiwiZ2V0V2VhdGhlciIsIkdFVF9XRUFUSEVSIiwiTE9HSU5fVVNFUiIsIlVTRVJfTE9BREVEIiwiTE9HSU5fRkFJTCIsIlVTRVJfVVBEQVRFU19IRUFMVEgiLCJVU0VSX0RBVEFfQUZURVJfQVRUQUNLIiwiRU5FTVlfU1BBV05FRCIsIlVQREFURV9FTkVNWV9IRUFMVEgiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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bEQsUUFBTXNDLDRDQUFLLENBQ1J4TixHQURHLENBRUQsOEdBRkMsRUFJSG1OLElBSkcsQ0FJRzlLLEdBQUQsSUFBUztBQUNiNkksWUFBUSxDQUFDO0FBQ1B3QyxVQUFJLEVBQUVDLGtEQURDO0FBRVBDLGFBQU8sRUFBRXZMLEdBQUcsQ0FBQzJCO0FBRk4sS0FBRCxDQUFSO0FBSUQsR0FURyxFQVVINkosS0FWRyxDQVVJOVEsR0FBRCxJQUFTO0FBQ2RELFdBQU8sQ0FBQ3FQLEdBQVIsQ0FBWXBQLEdBQVo7QUFDRCxHQVpHLENBQU47QUFhRCxDQWRNLEM7Ozs7Ozs7Ozs7OztBQ25EUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ08sTUFBTWdSLFdBQVcsR0FBRyxhQUFwQixDLENBRVA7QUFFQTs7QUFDTyxNQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsWUFBbkIsQyxDQUVQO0FBQ0E7QUFFQTs7QUFDTyxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyx3QkFBL0IsQyxDQUNQOztBQUNPLE1BQU1DLGFBQWEsR0FBRyxlQUF0QixDLENBQ1A7O0FBQ08sTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCLEM7Ozs7Ozs7Ozs7O0FDckJQLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL2FyZW5hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcmVuYS9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFRQUFBQUVBQ0FZQUFBQmNjcWhtQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFIWWdBQUIySUJPSHFaMndBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFCOCtTVVJCVkhpYzdkMTVlQlIxdWkvdzcxdmRTV2NQK3lLSUNpcUxMTEw0dUl6akpDZ0J0enRuNXR5Z2lBNHpyQ016b3A1eFJzOTluTGs1NnBtQmNYUkVSYndCbDZzRTFIakhvK09HUUF6T0NNNG94Q0NRc0hwa1h3eGs2eVM5MVh2L1lMRVQwa202dTdwL3RieWY1OG5EMDFYZFZXOStkSDN6cTZwZlZRRkNDQ0dFRUVJSUlZUVFRZ2doaEJCQ0NDR0VzQXRTWFlBUVhjSE1GRmp6OUh3dzNRZndZQUJhSElzTEVYQlVKMVFRNk0yVUhwNFNtakF2WUZTdFZpSUJJQ3pCLytIaVowSDRSWUlXdnd1azNaRmFjTThYQ1ZxK2FVa0FDTlB6cjM3cVNvQTJJckhmMTJZaTNKcFNjTys2Qks3RGRPTHBSZ21SRkFTNkFZbi9ZNVhPakRlYTNuOTZZSUxYWXlvU0FFSjhwNGRiMHg5VlhVUXlTUUFJMDJPTmt0Y3RKNXJHYnkvS1R0cjZGSk1BRUthWE9tbkJaeUM4bEtUVmVVS2U5T3VTdEM3bEpBQ0VKYVJNV2pBTG9Qa0FkZ0VJSlhKZE9tRlFJcGR2Sm5JV1FGaE83Vk4zTEFUaHdWZy9uOUxuZktUME9DL2lmTDIrNW9PMHdrZHVpblg1VmlJOUFDRWNUQUpBQ0FlVEFCREN3U1FBaEhBd0NRQWhIRXdDUUFnSGt3QVF3c0hjcWdzUTBmSHVXSEVGUWpRRnhOY0FOSlNBWGd6RU1uUzFIb0FYd0VFQ2R1aEVsUnJ4K3ZSTFV6WVJUVTNvUUp2T0hIbjhyc3owMU5BcUJxWUFTRkZaaTkxSkFGZ0FiM3NqdFVuenp3RGpmdWcwL05Ud3JWTmp1RGoyeGVhYy91blB3QVJpbnM0TU5GVUhUbnFyVnJ4QmNMMlNNWHphQmdQS2oxcDZhbkFtZzI1VnNXNm5rVjBBazJ1b0xzbjNhb0d2QUNvRzBmQWtyTEk3UVBNWStxZmVxaFdmZWF0VzNzck15UjB4U3BTYjFQVTVtQVNBU1RFemVhdExIdEVZYXdtNFZFMFZkQ1hBN3pSWHIxelhzUE8xWklRUEFFQUh0aWRyWFU0bkFXQkN6Rys0bXFwWHZnekdiMkdDL3lNRzhyVlE2TXVtN1NYM0o2TTM0UE81VmdQNE50SHJFU2I0Y29sek5WWDdsd0Q0aWVvNjJraGx3cE5OTzFiK2hTdGZ5VXpraXZyOStsVXZnMytUeUhXSVV5UUFUTVpiVlRJWG9IbXE2NGlJOFM5TnFhNlBHM2E5MFR1UnErbCs3NnFYUUhnSWdKN0k5VGlkQklDSk5HOHZ1UURBbjFYWDBRVlhhTUhBNnBwZEszSVN1Wkp1QzFZdWdxNWR3VUFKd0FjaFlXQTRPUTFvSWpyaGNRQVpxdXZvb3JIcFFmb3YzdmJHRkxwc3FqOTh4bDBQck03MHBLZXVBamdmakw5cXgzSm1GQmRQT0h2Zi9aOC8vbWtmZDdlc0xaU2Uyb2ViZlB2OGg0SWppb3NtTkoyWi84QXJsWmwrVitvcUFQbi9tL0hYWnE5M1J2Rzg3ejVmOS9RZER6TWo5bnYzaFNSSHpwQWVnRW5VNzFnNURNQy9xcTRqR2d6a2U3WEF3cmJUMDlMY013RytGVUFXQ05OQ2Zlc0x3K2U3c3RLWGFCbXBmWWxBV3FibmdwUmU5TWZ3K1g1MzZrd0F0d0xJWXNLMDlNek1WcC9YZGV5THErNmdMNTZQMjRvRWdFbTRkY3lHQmY4L0NMalB1MzNWemVIVGRBMER3bDlyb0t2YmZHcEVxNWVlbExHdDV1cG85WDZkK1B6dzEwR1h2aFp4aklFS2VldmorYml0eUM2QVNURHhWSXQrSndta1A4ZVZyNHlnTVQveHR2Y0dCcytjODNEWm1oUTNsUVYwL0pBRG9XSGg4MTNwN2l2dWZiWDZmd1E4b1RKWHdQVkRCaGUydDV3emV0L3oycUc2eFhlOHk2ZDZDVkhqb0IraHhscTRzcnJIOG5GYnNkeGZIRHRxMmZicXhXQ2MzL2s3VFd0UVU0cjI3eDNNejJEQzIvNFFOekR6Q3JUOTNoR2xzTVp2dXdOYUE0RlhvQXQvbURROTlDQk9YY3NRRS8veC9XQmRqZ1ZJQUppQXJybkdxSzRoYmtUMzFlOVkyU3RacTh1Ky8vVXFCdDBGSUthSGVyS3ZHZjdEdXdHMlpyZkxLQklBSnFBVEJxdXV3UUNaTGgzems3bkM3dmVXdk1YRWt3QjhFOHZuUXcwbjRkdGY3ZWlEZ2hJQUprQmdtenlKaG1jeEZ5WDFPOVY5d2FyMXVYUnlLSUI1QUQ0aTRCQ2lHQzhRYXFwSDg1NHQ4Qi81R2lGdkhUam9CN056dWdWeUVOQUVDSnpHVE5BYW0rRnFhQWFDUnUrYkVqaEZnNTZkRGowcnplQmx0ektvc1hwSTBwK3FRd3MrOEFFb1B2MFQvWE1EV0VldzloaUN0Y2RPTHhDZkpLQk1VNUlBTUFIeWh3WnE5YzNRdklucWlqSW9FSUxyUkNNUTBxSG5KbTZza1F1dVd3QUVFN1lDWVNqWkJUQUI4Z1ZxRXJmeHQrYXFTMFFQNHpzTW5waXdoUXZEU1FDWWdLdStwVFo1YTJOb0xmN08zeGE3TVJrZWxwNmxSVWdBbUlBZUNpYjN2bmVKUGNhbFhkZ3JLQ05zTEVJQ1FCaHVZRTVBQXNBaUpBQ0U0ZEk5d1lTZWFoREdrUUFRaGt0UFFhcnFHa1RYeU1FYUI2SUVEM05KZFhHSHp4VmdqdTRzQkxGV2QrNHlRQ1dicjUxUG9Qc0FIb3l3UDJidnhYZTFNQUFzTE5sMGJmaGx6aUVBdTRqeHpMVHhmMTlLWk5ITHR0b2hQUUJodUw3WmdkMGR6UTlGZDhwVEQ3bTVyTzNFbFp1dmZZYUFad0crR0luL0hyc0FER1BDa3BLSzd4VWxlRjFKSlFFZ0REZXdaM0FmR0M5Rm1xODNCeENzYTRvMHV4VmlmbUxKN2NOM2hrOWI5Y1cxVndMSnZlN2d1M3JvZjczMjViV0tidE51UEFrQWtSRExIOHVmQmViNURONkZVMTNvY01IQWticnR3ZnFXbHdHME94L0FkZ2JkdWZqT0VlZmNIWmdKTitETW81R1N6eDNVN1RQWVNZNEJPQkM3a3JIdEVDOS9ERXNCTFBWOXVIZ1JFWDd6M1J4Nk9HWEtna1ZuWG5jMnZ5MW1aQ3ZiL0FFUTdQUGtJdWtCT0E1Qjk4aEJlbkdLQklERGhITFNBYmY4dDR0VFpCZkFJVGpGQlQwbkEzcW1SM1Vwd2tRa0FCd2cxQ01UZWxaNjVEZm9PdlNEQjZBZlBRejJOZ0IrWDZ1YjVyb3VIUWJ0d2lHSkwxUWtuUVNBRTNUd1BFOCtVWVBRMWtwd1MzTVNDeEptSVFIZ0NPMFBYTk9QSGtab1M0WGpiNHpwWkhJMHlBSGFIZnJyYllUKzFaZXk4VHVjQklBRHRIZVB5K0RPS3JrdnZwQUFjQUt0dWZVZGdMakZCejUrWEZFMXdrd2tBQnlBL0VGb2pTMW5YL09KYnlIUHhoT0FIQVIwRE5lSlJsQWdpRkIyT3REY3RRdHhoUDFKQURpSTF0QUNyYUVGL3VZbzcwRHNpdTZXaFdYLzJIMWpRVUhCMmV2cGIzM3l2Ylp2V2RqUmZDS0ZBLzBkUm5ZQlJLY29YVVlQMnBVRWdPaVk1Z0oxUzlvelAwV1NTUUNJRG1uOSt3TnVsK295UklKSUFJaklVbEtnRFJtbXVncVJRSElRVUxTTE5BMnVNZU5CYWJML2IyY1NBQVphdXZUeFBvZS9yTmh5L0p2ZGZmb1BHYmF2NytqdmpaZzNiNTcxenJsbFpzRTFhaXdvSjBkMUpTTEJKQUFNMUhMbzZKSkRPNy9xQ3dEN3RsZGNrTnRuNEI4Qi9GSnhXWjBqRGVSSkFXVjNBL1h0QjYzL2VRREozcUVUU0FBWXFMSHVSS3VMNWtuVEJxaXFwU1B1UVVOQUkwZXFMa09ZZ01TOGdab2FhclBEWDJmMTZGT3ZxaFlodWtJQ3dEaFVmL3h3My9BSnViMzdTUUFJVTVNQU1Nak12SkhqZmQ3R3N6MEFUMFltTHA1dzdXR1ZOUW5SR1RrR1lCQ042TmZocndkZmZnMVNQQmtkUGlQUHFtby9XNGY2aWcwUjUxOEMvR0J4Zk1NSEZtTG9zSVdSWnU0KzZGOWZQMUJ1Ylc0RTZRRVlZRzdlbUdzQkZJWlBHM3IxOVlxcUVhTHJKQURpTlBmN3cvdnJwTCtHc0VkVjlSOHlISVBIWHFPd0tpRzZSZ0lnRGpQelJ3L1YzZTV5QUdkUDl4RVJmakQ5bDNKSnE3QUVPUVlRZzduang2Zm8yZjY1QUQ4R29GdjR2S3QrL0RNTUdEbzZxdVZwckRXeVErL1FjeUlyRlVlN3ArTGJuRlEwcEx2aFM5RVFESHQyb1NkTlIwWTZJeTJOa1pyQ2NMa0JJdnhBWWNtMklnSFFCVVY1ZWU0ajJzbStRZUxCcE9OR0hmN2JBQXh1Kzc2K2c0ZnR1UHBIUHgwYTdmS1o5WDF3VUk5Qko4Si85MG5Icm9HWnFFOC85eXRJeE1qT1p1VG1ocEFxeC9vU1NnSWd6RS96TGt4elVkYjFBRTBrWUF5QW9RQnlENkFtR3d5QU83eVRYdkhVM3o1ZFQwUlJCMEJBYzYxTllaMmg3cEhYU1hNczE0UE5GK2Vnb1owTkh3RFMwM1gwNnFVak5kV1pQYUpra3dBQU1IZml5Q0U2NDFjQVRVT2JMbjFuQ0tobm9vZVdsMjFaK29BbmZXRXN0OW5QTExqblVHRDE0bmNadURYNlQxc0VBVnNIWmFQNi9FeHdoSnpyMFVOSDkyNTZoQWNaaUVSd2RBRE1tbnhaRC9KcmY5QVpzd0JFZTljTEg0RGlZTkQ5NkV0L3E0ajdIdHU2cGo5SXVqWVJRR2E4eXpJYkpzTG5sK1RpbXo2Um4wL1lwMDhJMmRueW5JSmtjMndBek1rYmRRUDdzUUpBMzA3ZkRBUUJIQVg0SUVIYm9SUC9sWDMrRDEvOGRFZURVZlY0SnQxZjVmdG84VjNFZUIxQWRIZmhOTG5OZzNNNjNQaDc5NWFOWHhWSEJzQ2NpU1B2WWNaVGFQODA2QWtDdmNlc3Y2ZHAyaTRFQW9mUHU3N3FhRkVSRXY0TjlSVGMrMWJnbzZjbk1lRWQ2R3lMaS9IMzlzdkEzdjRaRWVmbjVPakl5WkdOWHhYSEJjQ3MvRkcvWWNhaWRtYnRKOGJ2QnFEbmlxTHk4bUNyT1g5TFRtMEFrRkt3WUgxVFZVa3hOYlk4UUUwK2FJRVFvT3VXZkk1SFU1b0xYMTRVT2NmY2JrYXZYckx4cStTb0FKaVZOM29HZ2R1T01XZUEvNURka3YzWW56ZHVOTWN6c2draFBTc055RXJEbVlzSlFzMWVISHJsS1VPZTU5ZnRxdXVSazRTUmlsc3V6RWJJRmZuRVJzOWVPa2dPK0NubG1BQ1llOTJvVVRyeFVyUSsxZGJFaEorK1VMYTFWRlZkWGVYZHRjMVNEL09zejNEalFLKzBpUE5UVXhoWkdiTHhxK2FJb2NDRmhZVXUzWVdYQUlRZmlRcUE2TllYeXI0eS9jWVBBQzE3cTFTWEVKV3YrMlpFUE4wSEFEbTVjcnJQREJ3UkFOMXFxbWNDR0I4K2pZZ1hMQy9iVXFhb3BLam93U0I4eHc2cExpTXErM3RIUHVvUEFKbVoxdW5OMkpudEE2QW9MOC9OaklkYVQ2Vy9MQ3ZiK3J5YWlxSVhPSEVVSEFwMi9rYVRhRXh6b1RrMThsY3JKWVhoZHN6T3A3blpQZ0FPVU0zTmFEMXVQNGlRL3JDcWVtSVJySzFSWFVKVWFqTTdIc2Jna1VjTm1JYnRBd0NFTzF1L3hDdkxQOWxxcVIzcVVKTlhkUWxSOFVZWTUzK0cyeTM3L21aaDZ3QW9MQ3gwZ1hGRHE0bU1WWXJLaVJuN28zeWN0MktCRGs3OUFZQm02MitkdGRqNnZ5TDcyKzBqMGZyaW5scHFTRjJ2cXA1WWtjdGFEK2YwcDlqN29rYmE1dnVlNmhxTVl1c0FjTEZyZUp0Sm54VnYyaFJRVWt3Y1BBUFB1ZldBYVRFSXgzSTczc25YZFd2dkFtZyt0S2l1d1NpMkRnQW1uQi8rbWdCcm5Vczd6ZE4zQURLSFhhNjZqQzdaT1RBejRyWCtad1NEMXY3YTBZbWd0WTdLZHNEbUoyTzQxWk42R0Rpb3FwSjQ5Y3k3Qlo3ZS9kR3c1Ui93MTU4RXhYTGpnUVJoQWhyUzNhZ2VtTlhoVlg5bitLeDFTS00xQnZEZmdhT3F5ekNLclFPQUNhbmhnODJJWVluRDZReHFPT2ZxSHlKa2paeUFySkVUOE1tUnovSDU4Y3FZbDM5bEh3K3VqYU8rTHdaNVVKblpQK2JQQndLRVlKQXNlVGFBamdXaDFZV3M5OFRuQ0t6ZEY3TXAwdlYxaVZ6K3ZzYllPMExNd1A3RytCOTQ1UFZhODBDaHR0UEszWmR6U1FDWVVNYUlPejhEOEZLaWxuKzQ2UmkybnR3WjAyYzNmYnNGSjN4MWNkZFFYNmVkMm5ld2toQ0R0a2tBaUNUSUdIYkhMQkRtTTdBTGdPR1BHRnQ5NEc5WWUraFRuUFRYZ1RzNW5xQkRSNDJ2RnUvdkw4ZjZJLzgwWlAzK0FLSFJZcjBBcmJJRjVMWFhOUXkyUGdaZ1pYVHFRdm1scDM5YStZL1NpUXNKZURDK05UQXFhNnBRV2FOdVVHUk5qWWJNREIxa2hUOUR6VHBjRzIyejYzK1dGWnBlMkZRd1NEaDYzQUovZ3hod2Y5Z0l0Rmp2b0dWbkpBQ0VVdDVHUW0ydHVVYzZ1dFo3UVh2OXFzdElDQWtBb1Z6TkNVSjl2VG0vaXRvL202RnRNc2VkNGhMQkF2MHZZWHRNT0g3Y0JaK1AwTHRYeUJ6UFJ3b3lYR3U5MExiWlp0UnZ1eVFBaEduVTEydncrd205ZXVyd3BLazcyazVIZzNCOTFBZzZacDJic01SS0FrQ1lTa3NMNGNCQkY3S3lDTjI3Si9jWmdYUTBDTzJMWm1nN2ZKYThEWHNzSkFDRUtUVTJhbWhzMU9EeE1ESXlUajBlUENXVjRkSUFUVE5nNi9UcG9DWUduUWlCRGdaQlgvdEEzeG8rM01MMGJCa0FsUStNemt6MSsxY3gvRGRUMkE2bERucnMzOFlNRytOdHpwd3hvZGg2bHdVN2tjOUg4UGxhSHhUbzlvMTNmYitLK2g4b0tzbFd6SG5vTlU2cGZ2OU1BTGRTbXlFbUd0Z054clRNZEcraG90S0VNQlZiQmdBUkQraG9QdXQwZmtmemhYQUtXd2FBRUtKcmJIRU1nRDk4c2tlQVhIOEU4Q01BNmJxL3hlZHJxRUh6OGYxb1BQSTFBdDdhVnUvUHlPa3h1Vzd4SFF0MFVBV0kzK3pteVNxaGVjWFJIUk5nMEUxUDVzMG5wdnR3NnJiald0bTJ2eUIveEkvUHZ1WDl5bGNYM3Z5bi9MYlBJb3hiYlJPdjc5NzVmVGVFNkpUbGV3RDg5cUxzQUxuK0NXQVdnQjRBMHJYVXRHN3BQUWVneDdDck1DaHZHdnFObjRLVXpPL3VEY3BNR2dQbkVmaG1ZcnhVMTlLNHJmYVoyeWRFczk1Ym5zaC9ocGllQlhBeGJOQ093cGtzLzhYMXA2WDlEc0NRanQ2VDJlOGluSC9kYmNnWmRGbWt0MXdDWGZ1a2R2SDA2N3V5enBzZXo3K1NnZmxSbGlxRTZWZytBQWdvNk5MN05BMjlSMTJIbnNNalBoWTdIZUEzYXA2ZVByRHpaZkVOTU1lQVZTSGlZdmtBQUpEZCtWdSswMjN3R0dSZk1EelNXWUllYnAwZjdYd3BXbFRyRk1LczdCQUFVY3U1WU9RUUxTMmozWGxNbUZiejlQU2NKSmNraEJLT0RBQVFLS1hQaFpIbWV0d0lmVCtKMVFpaGpETURBSUFySXh0YWV2czllWVkyS01ubENLR0VMY1lCeE1xVjNRTjZjOE81MDNQNzNPWmZ2Zmk1U0o5YmQyTC8rbWNQYmtwb2JVSWtnMk43QUFEZ3pzeFZYWUlRU2prNkFDZzFEWEkyVHppWm93TUFSQ0MzdVc5SUtVUWlPVHNBQU1mYytVV0k5amc3QUZnSGg1eDNGeGdoem5CMEFMRGZCK2tDQ0NkemRBQUV2U2RWbHlDRVVvNE9nRkNEQklCd05zY0dRS2lwSG5wem8rb3loRkRLbVFIQTRNQ3hmYXFyRUVJNVJ3WkF3emZiZHVzdFh0VmxDS0djSFFMZzNNSDhIYWo5dWhMMTMydy9sS2hpaExBU093VEF1cTY4aVZuSDhTM2xxTm0rSWRIMUNHRVpscjhhTUNWRWZ3aTQrRWNBTG16M0RjendIdG1MbWgzL1FNQmJsOVRhaERBN3l3Y0EzYlRnT0wvNzNMaEFTbkFSd0Q4R2tLSDdXMXBhNm11Nk4zKzdIOTRqZTJYREZ5SUN5d2NBQU5BdDgwOENtSHY2QjlYM0RsM0lUQTlHZW45elE4MEhGLzMrNzNteHJ1L21KeVl1QkNEUHBoT1daNGRqQUVLSUdOa3lBQmgwb0tQNUJKWkJBRUxBcGdIZ2JjNThFWXgzR0t5SFQ5ZEJRUUFsUjNyMksxVlVtaENtWW90akFHMU5LTjdVQk9DSHN5YU9Xa2lNczhjQ2lQSHdzdkt2RmdIVmNhNUJiNUE3Q1FrN3NHVVBJTkgwTG80OUVNTHNKQUJpOE1HdnlqOWo0Q1hWZFFnUkx3bUFHTDMvcTQ5bmdXZytRTHNBeUcyRmhDWFo4aGhBVWhENFBaUXRCYkQwektRbkRyKzFrTU9PT2R3MDVxNkhIcmpwbmtWR3IvcmYvbVBNWitmVitJeGVyR1hzemZaY0tKZHlHVU42QU1KeWRKMVNWTmRnRnhJQXduSjBTQUFZUlFKQVdJN084cjAxaWpTa3NCNW1HWVJoRUFrQUlSeE1Ba0FJQjVNQUVNTEJiQjBBeFBDSHY5YUJMRlcxQ0dGR3RnNEFnRnJkTUZRam5LZXFFaUhNeU40QndIcXI2LzRaRWdCQ2hMTjNBTGhRMVdiS1ZYUEhqNWRCSkVLY1p1dHJBZXA2RE4rVysyMzFTUURkVDAvcXBuZno1UUZZbzY2cStEejY1bldYZktxN0JxcXVRNlhVNnBiYXdXanBvYm9PTzdCMUQ2QzB0RFJFd05yd2FhVFQ3YXJxaWRlamIxNTNDZXV1andFTVVGMkxzQWRiQjhBcHRDTDhGUU16Zm5iOVpTTlVWUk1yMmZoRkl0ZytBQVp3ai9jQjdBbWI1SEt6OXArcTZvbUZiUHdpVVd3ZkFFWGw1VUVHL3o1OEdqUCtaVTcrNlBtcWFvcUdiUHdpa1d3ZkFBQncvZysydmd6RzUrSFRHUHpVN0ltako2cXFxU3RrNHhlSjVvZ0FLQ3FDVHFUOURFQlQyT1FVTVA5MVR2N0lxYXJxNm9ocy9DSVpIQkVBQUxEczQ4cHR4SmdMZ01NbVp6RG90VG41bzM5Ly85VlhwNnVxclMzWitFV3lPQ1lBQUdCWitWY2xUUHliTnBPSndmL2VrTmE0YzFiK3lKbXFCd3JKeG0rNElCanZNUEhkR3ZPWUlMdjc5VDdVTHdVQlYzOU4xOFl4K0Y0QXF3SG9uUzNJam13OUVLZzlMNVJ0L2RQc2lhTzlZSDRHZ0N0czFrQUN2YURuK1A4ME8zL1UrOFQwTGhQdjBvTEJRK2RkWDNXMHFDanhYeERaK0EzRnhGak9idjdEMUZkM2ZOM08vQ09uZnlvQVBQM2FiWmNNZDdsZHYyWEd0T1NXcVpiakFnQUFscGR0V1RvN2IyUVZpRllDNk45bWRuY0EwNWw0T2dEb2JqY09yQjhWbXAyUG93QU9BZGhCNEhlYTBsbytMUGxnZDcxUk5jbkdiNmlqUlBoSjRjcnFqN3I2Z2R0ZjMxVUY0STdTTzRhK3hVQXhRTjBTV0o5cE9Hb1hJTnp5OHEzbFFYYU5ZUEJ6QUlLZHZOMkZVeGNTVFFBd25VR3ZwN2VrSDV1ZFArclpueGVNN2hOdkxiTHhHK3FveG5wZVlVblhOLzV3aFN0M2xPb2E1d0U0WVd4WjV1VFlBQUNBbDh1L3JIM2g0NjIvUUlndUJiQUV3TWtvUHU0QjhJdGdnSGZITTZaQU5uNURlZlZRS1A5L3J0b1oxOE1mYjEreHN4S01Xd0FFREtyTHRCd2RBR2NzLzJUTDE4cy8vdXFYNlduTi9abnBSb0FmQjJNTmdIMEVkTmJOejJid2tsbjVvNHA5dm1aWEorOXRSVForby9HdlQzZmw0eloxVmZWR0JuN2YrVHV0elpISEFDSjU1b1BkUGdBZm52NDVxN0N3MEpWZHU3c3ZCZjBYRWRHTllMb2R3SkR3OXhBdzU0MUhGK3ljL2tneGlEcS9hYTFzL0FaalZCYXUydkc4a1l1c3pjcjh6KzZOM3A4QkdHVGtjczFFZWdCZFVGcGFHbnB4VGNXaEZ6N2U5dW55c3EwUEQrU2V3NGo0YnJUWlpUaTZ0L3JTRGYvdnhVNlh0K2p0NzJXejdsb04yZmdOUTBSUFV1c3hIbkdiVjd3cHdNQXpSaTdUYkNRQVlsQlVYaDVjVnJiMWVkSzBxd0RzQ0ovM2ovLzZ2emhRWGRuaDUzMHRudWtBTGtwZ2lVN2o0MEJEYVNJV1RBSFhDaGdjTEdZaUFSQ0haZXNxZDJyQllENkFBMmVtTVRNK1dia0V6TzEvWndvTEMxMTdOcmZNVFZhTnprQ2ZUeTA5MEp5SUpVOHQzWFlFUkswT0tyS3UyeVlRSkFEaVZQeTNxc05FZkJ2Qy9rb2MzbE9GdlJVYnpubHZZV0doYTgrZVBTOS84MlZnckI2eXpYZElPWUsrT3FFcllIelUraVh0VGVqNmtrZ0N3QURMeXJadVlPTFh3NmRWYjJoMUk2S3pHeitBTyt1UGgvRFB0NXBRZnp3VXNhY2d1aVFBNEYwT3VKOUs1RXFDSEhvTXdNY0FHZ0Irb1dwbzlWdUpYRjh5eVZrQWc3Q09KNGh3OW5aalgxZHVSTURYNUFKT2JmeDc5KzU5RmZodW1PbVIzVUVjMmQyb29OS3VZK2FsRlJVVnYwQ2JmZUJKa3lZdEpLSUhGWlVGb3RUaWgxWnZYSlNzOWQyeGF1ZTNBRXg5Nlhpc3BBZGdrQmZMdDI1S3k4dytPMmJBMStURjdpLyszaDhBZHUvZS9Rd3pXMnFNZWFTTlg5aUxCSUJ4T0xkUC82UGhFMnFQSE13ZE4yN2NIQ0s2VzFWUk1Wb21HNzh6U0FBWUtDMHJ0MVdmdnZiNGtiNEEvcXlvbkpndzg5TE5temZQZzJ6OGppQUJZS0NNYmoxM2g3OCtjUHo0WUFDWmlzcUptblQ3blVjQ3dFQlpBL3JPSHpCMDlKRVVUem9QSERIdTROODNmVFZZZFUxZFphV05uNW5IQXVoOHZMWG9sRFJpZ293Yk4rNXhBQStvcnFPTGxtM2V2UG5uNk9KZGNWU2ZCUUFBSWxwKzlkVlh6eXNxS25Ma25YeU1JajJBeERIbHpVYmJDdHZudDlTR3hNeXpOMjdjK0grS2lvcmtPeHdIYWJ3RUdEOSsvQkJZNEFveUszWDcyeU1oRUQ5cHVBVFFkWDJzNmhxNllGbEZSY1V2WWRHTi93d0pnZmhJb3lXQXBta1hxcTZoSTFidDlrY2lJUkE3YWJERXlGVmRRQWRzOFplL0xRbUIyRWhqSlliU1p3dDBJS3FqL1pGb211WTNxQjVEU1FoRVR4cktPUXpaK0FHQW1RMjdIYnJSbUhuMmhnMGJub1djNHU0U0NRQm5NR3pqQndBaWF1OUJHMlp5OStUSms0dWxKOUE1YVNEN00zVGpCd0JOMDc0MGFsbUpJajJCcnBFQXNEZkROMzRBK09DREQvWXc4emRHTGpOQjdpNG9LRmdDQ1lHSUpBRHNLeUViL3hsRWxKQ2JjQ2FBN0E1MFFCckZubDVQOUhuK1VDaTBMSkhMTjVMc0RrUW1BV0JEekZ5QkJKL25YN2R1M1U0QWJ5UnlIUWFUM1lGMlNBQ0ltT202L2lBQXIrbzZvaUFoMElZRWdJaloyclZyOXdHNFYzVWRVYnE3b0tCQUJndWRKbzBnNHZMUlJ4KzlBT0E1MVhWRWFZNGNFemhGQWtERUxUYzNkd0VSclZKZFI1Umtkd0FTQU1JQXBhV2xvWnljbkxzQXJGQmRTNVFjdnp2ZzJGOWNHS3UwdERTVW01djdVMWd2Qk9aczJMRGhlYWVHZ0NOL2FaRVlFZ0xXNDdoZldDU1doSUMxT09xWEZja2hJV0FkanZsRlJYSkpDRmlESTM1Sm9ZYUVnUG5aL2hjVWFra0ltSnV0ZnpsaERtZEN3SUtEaGVaczJMRGhHZGg0c0pBRWdFaUtNNE9GTEJnQzh3c0tDaDVSWFVTaVNBQ0lwTEh3aU1HSEowMmE5Q1BWUlNTQ0JJQklLcXZ1RGhEUjhyeTh2RjZxNnpDYUJJQklPb3Z1RHZSSVRVMjEzYTZBQklCUXdxSzdBek1uVFpwMG51b2lqQ1FCSUpTeDRDbENEeEhOVUYyRWtTUUFoRkpXT3laQVJJV3FhekNTQklCUXprckhCSmg1ek9USmszdW9yc01vRWdEQ0ZDeDBURUJqNW1HcWl6Q0tCSUF3RGFzY0U5QTByWi9xR293aUFTQk14UW9oRUFxRitxdXV3U2h1MVFWWTNlV1hYMzZGeStXYXdzelhFTkZRWnU3RnpObXE2N0tLS1ZPbVhCRUtoYVlRMFRVQWhnTG9WVmRYWityMjB6UXRTM1VOUnBFQWlNRmxsMTJXNnZGNFpnQzRIOEJ3NWxNUDRUbnpyK2hZWVdGaGFuMTkvUXhtdmwvWDllRkV0cjNXeHZRa0FLSTBmdno0ZkFEUE0vT2xxbXV4b3NtVEorZlgxOWRMKzVtRUhBUG9PaG83ZHV3anpMeFd2cnd4b2NtVEowdjdtWXowQUxxZ3NMRFF0WGZ2M2hlWitTZXFhN0dpd3NKQ1YxMWRuYlNmQ1VrQWRNR2VQWHVXQUpBdmI0enE2dXFrL1V4S2RnRTZNVzdjdUxrQTVxbXV3Nm9LQ2dxay9VeE1BcUFEWThlT3ZRREFuMVhYWVZVMzNYU1R0Si9KU1FCMGdJZ2VCNUNodWc2ckNvVkMwbjRtSndFUXdmang0NGNCK0ZmVmRWaFZRVUhCTUdhVzlqTTVDWUFJZEYyZkRXbWZtREd6dEo4RnlIOVFCRVEwVlhVTlZpYnRadzBTQU8wWU4yN2N4UURPVjEySFZVMmVQRm5henlJa0FOckJ6R05VMTJCeDBuNFdJUUhRRGlJYXJMb0dLMk5tYVQrTGtBQm9oMXpPR3g4aWt2YXpDQW1BOXZsVkZ4Q25PcFVyWjJhcnQxOW5sTGF2a1NRQTJyZFBkUUh4MERSdHY4cjFFNUdsMjY4TGxMYXZrU1FBMnJjV2dGWHY3dUZMUzB2N1JHVUJ1cTVidWYwNjQvTjRQRXJiMTBnU0FPMm9xS2c0Qk9CZDFYWEVxT1RUVHo5dFVGbkFtalZyck54K25TbDU1NTEzbExhdmtTUUFJbnNRZ0ZkMUVWR3FDWVZDdjFOZEJBRG91bTdGOXV0TVRUQVlORVg3R2tVQ0lJTE5temRYQWJnTFFFQjFMVjNVUkVTRmxaV1ZCMVVYQWdCcjE2NnRZbVlydFY5bm1vaW9zS3lzekJUdGF4UUpnQTVzM3J6NUxXYWVCT0FiMWJWMG9wcUl2cjlwMDZhUFZSY1NiczJhTlc4eDh5Um1ObnY3ZGFhYWlMNi9ldlZxVTdXdkVlUjJyRjF3OGNVWGUzSnljbWJnMU5XQkl3SDBnOXJ3REFJNENtQXpNNytabTV1N3NyeThQS2l3bmc3ZGVPT05ubEFvWktiMjY4elo5aVdpTjMwK242bmJWd2doaEJCQ0NDR0VFRUlJSVlRUVFnZ2hoQkFDQVA0Lzd0TG1FQmVVUDJJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUIyQUFBQWRnQitseW1jZ0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUJEU1NVUkJWSGljelp0NWZGWFZ0Y2UvZTU5enowM3V2U1FoQVpLUUNRZ2hoQ2xSR1FMSXBLaUl5SXRTbkt0V3F4VnJVWHhWVzZ0VmErdlFWckdEUXkzUElsSWZwUTRNQWhJQm1VVUVDbUVJSklHRUFJSE1JZVFtdWNNNXUzL0V4RERtM2d4OTcvZjU1Sk5QemxuejJjTmFhKzhJL204UUN2UUVlZ0NWUURsUWZ5N1J5M3VtM0s1UUw3b2NjdkRzbEZXZXJqQkU3d3FoRjlFelE5UGtUUWcxeGZTcjhITUpORjI0Z1d6VHI1WUEvd0E4UXFrY2hQcWdxNXdIRUYwbHVCWEc2NGFjaDZEdmtLdWpSY3JvSGxxdlpCZXVTQnQycDQ3SGJWSmY0NlhzaUp1Q2JSWG0zaldsbHVsWHAweXY5U05nMWJuQzZyWk5qeGJDV3FWaDNSWXlhbVZlUjQzcjZnQk1GMUo4ZkVWV25Kd3lPMFU2dXh0dE1qU2U4YlBtTHdWcTY4S2pTaWwrQUN4b2ZuZm1xeHZTTkNGK3J1RDdJRDVCOG9wejVQSnZPbUtnN0FoekcrZ3JOYkY0OHF4a2JjWnpnd055SGlDa204NjBudzRVMDU4ZUpJVVU3d0hEbXQ4SktVWW91TDNwTDVXbExHdDhSNDBNTkFBaHVsMWJwZHZGR2lBNUVBYk5KbDlPVEk4UWt4NUlidGNveTd3bGdiVHhQWlJ1MStZMlAzT04rbXlCUWw0Qm9DVFh1akpYdk5hS0pkbG0xN0p0SWRvT29IdWdlZ0lOUUpyZlkwN3AyY2MxUVdwaUgvQkFHL1JPWmFxYko5elgxeEFkbUdUamY5QlA5M3ZOU1VCTTh6Tlg1ckljcEJqcExBcGQzNHIwQWFtSmZkRXBya2wrajNrNXJVWk5Xd2gwRjlpcjJXUjV4dFRZbnJvaDlaV3Y1NzB0aEpyaDk2cUhnS0lMMEYrbWxOS1RSMFFHYXNjRkVUODREQ21Gc2t3MUVsalcvTHpWdk8rakdlSnRsTGhtNnVNRE5NMG1PWG13dHRiMHE2OEQxUkhvQ1BDYlB1dXRyWXVLdmFOdlMyVDI0akZhYkdyWUpLbUpQQ1F2QTczT29SOFVHbTU0YlNGYW9IWmNFSnBORWhrZjZnR0dudk9xRi9DeTFNU2gzcWxoVjgxZVBGb2JjMGNTV3o4ODZqVXROUTlvREZoSEVQWVVlTjMrLzA0WUVpNlNNaUlZZmxPOEZwWG8wRXB5YTBkNDY4M0hoU0JCS2ZZQVFyUEpKWm0zSnJoU01xTTZ2TXY0UFVvdjNGRTFTbG5NQjhLbHhtdENpdmNqZW9kbVR2OVptbjNhazJtYUs5S2dhRmMxRytjWFNSVDNBbFdCeWc5bUZ6aXUyY1Nxcll1S1RRQjNsWmZ0SHg5bjhxeis5bHRmR21aRXhqdnVrWnJJQTM2akd6Sjg4cXprVHRsaHJydzdTVGdqRFJ2d290UkVYdmM0eDcyM3ZEVFVtRHlydjMzTHdxT1VIYTREWU91aVlrdTNhNXVBL0dEa0I1VUorcjNxdGZ3dEZWTXJqOVhUdlhjb1Nla1JMSDNwQUJFeG9kejVXb1k5ZDBPNXl2NXovbytsTG53MmU4ZUdmek9rRkdnMktZSDdKOXpYVjJWY0h5cytmSElQMVNjYUdITjdJbEdKRHM1VWVOaS9waFRMVkw4UFduNlE5RjlxTm0zWGwzODlZa2xOY04zc0ZKNWNPWjdZQVM3ZXVYYzdHVGZFaXN4YkVtZzQ3Yk41Ni8xbk1kWlZlU2t2ZEY5U2VNVlJOMmNxenM5NmEwb2FiRU1tUnpQbTlpVHhsL3UyMHlQSnlSTXJ4M1Bkb3dQUURjbjYvem1pTkUza0E1OEY2VS93aVpEZmF6NjdhM2tKRmNWTnRZdXp1MEhXczRPUm1xQmdXeVhwVTJJQk9KVmYxOEtUcy9vVXIxNjdrZGV6TnJQdzBSeVVwYzZUKzhsenVidzJmVE92WHJ1UmJZdVB0VHl2ci9HaUZLUk42TW14dlRWNDNDWTNQalVRVjJSVFluVzZ0Skd2RngremZGN3JXZUI4d1cyZ1BmTjBsYWJKTFN0K2w5dnlpUmZNM29YZHFaRTJzUmM1MmFkQVFPL0JZUzBNYTk4czRxR0hIMlAxdWkza2JqeEZjYzdwc3dTV0Y3cjVaa2t4UzFaOHdVK2Zlb2ExYnhhMnZITkVHRWhOcU53TjVmVFBqS0puWHlmemZ2aGQ5cnRxN2lGVFNMRUgrS2dkdnJRdkZmYjd6SjhjMmxRaGN6ZVVBNUE4TWdyVHA3QTdOWGF2UEdsRko3dVVybjhuT3NTbFUxeGN4S0dEQjFBS1FzUE9YbnFNVUEwaEJmdjI3cUdrNURpT3NMUFQ1cVNNQ0hGd1U3bWxHeEpmbzBucXVKNEFGTzZvSXVmelU5THZ0V2JUanE4UHdXMkRyVkdLeEo2L3BXTFVGZFBqdFA2am92RDdMTUtqUTlqMGZwRzRabFovRVQvNHU0bzNPc1ZCOXNLdldiRjBHVmY5S0prQlkzcXc3SlZjMXI1em1LSi8xWkEyc1JldVNEc0xYditZb3lWNVpEMmZTdmZlb1MzOHJraURYY3RMUlBMSUtNSjYyUmwvVHg5OGpTYnpIdHpoOVRXYTd5akZYOXJwUjRlcVFVTzN5eDF4YVdHcDk3ODczTERaTmJiOC9TaWYvZllnTDJ5YmpCRjY4ZGl1ZWF1QXZWK1VjdG0wV1BhdEtTVitVRGhaenc2NnBMS25NMVl6N3A0K1hEOG5GZE5uTWYvSHUzeEhkMWNYK1R4V090RFFYaWM2MGhEeCtqM1d0Y2NQMUc2Zi8vRE8yTnRlVGRmTEM5MUlUU2dqVkx0Z1lNdU8xR0YzNmt5NHZ5OFQ3dStMemE0eDlxNGtMTCtpcnRMTG1Rb1BNUU82Y2FINlFUYzBWVmxjTDl6Vlh2N3hpNzFtNGE3cWF0Tm5YVTBIbklmTzZRY2tHcUhhUjhwU2w5bWR1bXlvOVlsZjc3eFdBT3hhVmtKaWVqZzlrcHhzVzN5TXBiODVnR2FUUFBqZUNCS0hSYlFJS0R2aTVzMDd2OEpiYnpKNVZuK3VmaWlaMnJKR0Rxd3ZKL09XQkFDZXkxeGpTVjFnZWkxTFNQWjdHNndad09HT0d0OFoyVnF4dDhFYzdmTllkOWRWZWJPbEpzM21GN2tieWxqOXA2YkVMSEZZT0E4dnpDUWxNNHFkUzArY0pXRDNpaEppK25kajl1SXg5QnZlVk1tdWUvY0lPYXRQdGREb2RzM2ZlTWEveHVleHZ1OXRzSWJUQ2M1RDV6VkVUT0IvZ1RrK2o2bFhIVzhhbFdQdlN1TEF1aklLdGxYU2UyQVlDVVBEU1IzZmsveXRsV2N4NTIydElIVmNEMkpUdTlGM2VDVEg5cDFtNTlJVFhIbFhFZ0FOdFQ3cWE3d0c4QUt3Q0RnN3krb0FPcnNqZEVnejVQRTluNThFb005bDNSbDdWeElmek5uTm1yY0xBQmd3cGdjMXB4bzVjYUFXZ0tyakRaVGsxakx3MjYxdDg0SWk1cy9hU2NiVVdBWk5haW95YzFhZlFyUEowOENPVHJhMzNkdmdSYUZNWlQ5VlVEYys4NVpFVGJOSittZjJvT1JnTFY4dlBzYm1CVWVwUEZhUGJrajJyeXZERldtdzh2VkQyT3dhVmNmcitmUlh1UnhZWDBiQ3NBanVlQzBESVFTbXoyTFJ6M0s4OVRXK3Q0RFBPOXZlcm1pS09qVkQ1bzI2SlNIbXhpY0dTZ0JmbzhrclYyOGl4TzZpdHZZMGZ0LzVJMWpUTkNLNmQ2ZTJ0b2Fuc3NmUjNFUDhjdDRSMXI1eitMVHBzNUpwT2tQb1ZIVEZ1WURiOUZvUGZmVmg4WklSV1hIRXBIVERGcUl4ZkVadmpxejNrcE5iU1BHeG94VGs1VkZjWEVSQ1FpTDkrdlVuSlhVZ2s4WmRUdDhyUTF1Y3J6blp3TnAzRHB1bXo1cERGemdQWGRnVzEyMXk1K1ZaY1JrM1BUTklBalRXK1huejF1Mms5c3Rnd1llZkVCSHhYZC9TN2E3andmdnU1S3V2ditTUnhhTndSVFVGNElzM0M5Z3d2N0RZOUZyOWFGcG9PeDFkZVM1d2h5MUVtLy9NK2ttMjVxeXdzcmllaFkvbWNLYmNUMWJXVEJLVCtuQ2k1RGpMbDN5RUREVzU2NDJoeEF6b0JvQmxLbDY2ZXIzSFhlMTlFdmhqVnhuWmxRR3dhelo1WXZ5OWZTS3ZmU1NsUlkvZlk3RnJlUW41VzZwd1YvcHhST3IwR3huTzhKdml6MHFmTjM5UXhLbzM4dHlXWDhVRE5WMWxaTHNEOEZodTQrTnZwSVc4M2daWmxwRGk0NW0vSGlJdnU2RjN3TEp6MTVleDhQSGRwbVdxQjRIMzJtdGpJQWc2QU04ckphc1BlQjRSUXZ3QitPV0pOT09sZndweHFmbjVFeUhGR3hsVFk3anlycjZ5ZDFxM2l4S1dGN3JaOUg2aDJySGtCRXJ3S3l5ZUQ5YStZQkYwQU9iczk0NVVVdjBaeFFoZ254RHlrYmxwdGcxdHNFMFNVbnlpTEJWaE9EUVZtOUpOZE9zVmdxdTdnYnZHeTVseUQ2Znl6NmpHT3I4UVV0UXJTOTFLTzlwYi96SDhkSTl5UHJhL2NmT3NIQlh3RVJUd3Q1aVViaW94UFVLRnVIUlRzMGxMU21GcE5tbUZ1SFF6YmxDWWloOGNwblM3bHQxbGhsOEE3Y29EZnA4dTNJL3VyWnZ4OXJDUTZrQjVOSnVJUzBxUGFLNzd6MDNCQlRSdGU2VUZkYjIrL2J0ZEhaNWcwZTVhNEE5RFhhVnRrQlFBMXdFVGRMdTJTVmxjblRFdDlwSU13NjZMUVNtRzZJYmNBVXdGUnRKMGU2VExUckhiWEFQcXY3N3hkZ1V2T2lyOWc4WFVnRzlxMklBbFFqQVJDQjB5T2RvLytlRVVXNjkrempZWnEwODBzUGJkdzlhL2xwZWdGUFhLVW51QnF3aml1S3R5NGcvamxlRjM5Y2llZjdBdDJqWURjR2I3allPbFV0OXpqdnJzaFRia0RBRW1hYnFZREV3RTRiQk1TNXYrOUtDV3BrWXcyTCsybElXUDcwWTNwR2xaeWlNbG0veGVsUTFzQUhaemtjeXdiT0s5TVRhZFpRZ2NsaERYUjJYLzdkaUY2Rm9iM2w3MEI2WTBPMno2VlhoNHRMMisvK2dlSWYxSFJzbUJFM3J5ajUvbjRPeHU4TDFmRFFsYStLcTVlUlR1ck9LQmVTTTR0S21Ddzk5VWtiK3R3bHQ1dE43UWRPa1dtdGprOTVqWlFEYXd2elZ2elRYM3pnUVJIdkhGMythMXBhYzlBWWpXN2RyZi9SN3pxckRvRUUvSzZDZ2plVVNrN0RjaWt2RG9rTE1JZHkwclllWHJoM2g2M1VTa0RFN1Y3NmR0WXZSdGlZejl0aW5TakxwS0wwZDJWSEY0ZTVVcStLckNVM1dpSVVRM3RHMStyM2tiY0JSQWdXRG1UQ24rK2M4MjY0ZGdBeENxR1hKL2JJb3I3dWJuaGhpeHFSZFBhcUNway9QS2RSdVk5c1JBUnR3Y0g3Q1MvSzhxZWYrUm5UeXhZanpoTVNHWHBDMHZjclAwMXdkOFJidXJhMHlmU2dVQzNwa2crSWJJbzQ0SVc5YnNSV1BzRWJHWE5nekFadGN3dlJZYjV4ZHkrWTF4bDJ5Vk44UGo5dlBCWTdzWmVrMDA2Vk12dldzQU9DTU0wcStQMVhhdktORWI2dnc2aWpVQmVmSXRndHBlZExzMjlZb2I0K3lHSS9DNFRmeGhQNklTSEx6MzBBNnFTNXA2aFg2UHhTZlA3MmZ1RFZ2NDhQRTkxTmY0Z0tiaC9kNnNuVWdOcnArVEdyQU96U1laY1hPQzNXYklhY0g0QTBHT0FOMG1uaDk2WFd6MzFxYytiVUZxZ2tGWFJaTzNwWUxWZjh5bnZzYkgvblZsbEgxVHg4dHpwckRweXlKeXZ5bWo5SEFkaTMreEYwZTRqZnZlSGs1b3VDMG9SODZVZTlpM3BzeXVMUFZLVUQ0RlEyd3BYUFlndm40ekhPRTJmdkRXRmV6NS9CUmJQenpLOFgybm1aaVp6Sk12cjZTMG9nNE9RVzFGSTFQbURHREV6ZkZCTDVnQWhrTkhXU3EwYmNxekVWUUFsS2xDZ3huK3JTR2tJR05xTEJsVFkvbjB4UU00YTJ3c2VmZHVubnAxRlhVOVBjejh6Ym5YZ0lLRDNhRmhtY3FneWFlQTIrWkJyUUdXcVVLTjBJNjNFWk5IUnJKeGV5SHBnMkk1V1ZGTHdyREFwOVRGME9yRHRKMXV0a0l3QWJBcmhkYWVLWEF1Qm83cmlWOVpMUHowWDFpcWFSSHJLQXhIeTRkeEJjTVhqR1pYazZMekExQlg2ZVhrb1RNQkN6SWNHbVB2N3NQc0Y1Ymg5WmpVVlhrRDVpMDlYTWZwVStlWEJhMCtUTmNHd080NGZ3cnNXSHFDNWI5dHMrNDRDOFAvSzQ3R1JqL0hUdFJjOE1yTXhaRDk1M3kyTGlvKzczbXJIS1BMQXRBTndIQ2VQd0lzdjRVeWd5dmZwZDYwMGs5Nm9COWo3MHhxZy9vN0tGTmRVSmNScWlFRXF0bk9nTzBJZ3JacEJIVENJZ2pncm00YTluMHlJckE3T3k1VFNJRm1TSk91bkFKQ0NxWGJPNmMzVVY3a1JnaW91Y0I4Ymk5c2RxMXJBMkN6eTREMjE0WmFYOHNYdmhCcVRqYXkrby81eEthR3NlNnZSMXF1M0YxTVZuT3EzQllNaDZZSU1nREJqRDJYTFVTekFpRmNOVGVQSFo4ZXAwY2ZKNzM2dVloS2RLRHBBc3RVVkJ5dEoyOXpCZkZEdzduamQrbDg5TXQ5dkhIekZnYU03VUd2Zms2a0ZDaExVWEdzbnZJamJzb0szUXlkSE0zdHYwdHZVNjg5dElzRFlEZ0NDMERXTTRNWU5UT0I0ajAxbk13L1EvbVJPdXFxdkRqQ2JZVEhoSERiSzhOSW05Z1RJUVgzL09seURtMHU1K0NHY2tyejYzQlhlM0ZHR3JpaTdJeVlFVS9pc0FoNnA0VzFyUlF3SEpxZ0N3UFF6UjVBT1F0TkJWRGNvRERpQmwzYThQSWlOejM3T0JrNHJtZkxCWW1PSU1TbFM3cHdEWERhbmJaT08wdHNxUFV4TjJzejFTYzZkTW5yTE5pN09BQXV1MHZydFBhMDZWTW9CVDVQUUxNcUlJUzRiRHF5Qy9PQWtHNzZmK29mTGRzRnUwTkQwMFZRbFZYQUFaQ1NjTHRUNzdJRGlzNkE0ZENSUWthMFRma2RBZytBcm9WM1JpWFlsV2k2ZEsyNlpnb0lpYXVqL3dSMXRzQnZmM1hpRlEzRG9ZRUtyaDhROEp3MmZlcGc3b2J5ekQ2WGQ3ZWQyN0txT3Q1QXd4a2ZCZHVDdThjMDd1NCtWSjlzNEhScDRPbXd1OXFIYmpTY3Awc3AyTCttMUc5WktqY29JNEpBakc3WE5ncUJuNmFUMi85WFAwSmcya0swYjRDK3dUajFiNnpTV3VQZitJT0dBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQUFsd1NGbHpBQUFCMkFBQUFkZ0IrbHltY2dBQUFCbDBSVmgwVTI5bWRIZGhjbVVBZDNkM0xtbHVhM05qWVhCbExtOXlaNXZ1UEJvQUFCSEhTVVJCVkhpY3ZadDVYSlJsMThlLzkrd3d6S0NBNElhK0lpNUFpcmpsa2l2bVFvb2wrcFJQbTlLaVVXK21XVDM2OWp4Wm1aWnJWcVpQbWt2bVFpNnBLV2FhNEU3bXZtdUlDaTZnaUN3REREUE0zTzhmOXpCc004REEyTy96dVQ4dzk3bXVjNTF6NWx6TE9lY2FnVWVQZHNCSVlERFEzUFpvbmJRdEJPNEJmd0g3Z0IzQStVY3BuUEFJZVhjRlBnY2l5Ny9VKzJqeDBLb2NkakFXbXNqTExrQVU3YTlFNERmZ0UrRElveER5VVJoQUNTd0U0Z0NoZWV0RzlJM3VTTGZJZGpRTDhrT2hsRmZiV2JTSzNMaWN3ZWxEMTlnVGY0S010R3dBcTQzbmg0RFJuY0s2MndBTmdNM0F3QVorWHVJTFV3Y0ovWjhPUnlhWDFZbVoxV0xsd1BhenJQanNWd3k1UlFDSlFEUmdjSmZBN2pTQUF2Z1ZpR3pkb1NuVGxvekZKMER2RnNZUDcrY3plK0o2VXM3ZUJqZ0FEQUxNN3VCZHZUKzZoaStCNTRMQ212THAybGowRFQzZHh0aERxNlozVkJqbmsyL3dJRE92SmVBQjdIRUhiM2Q1UUFSd1hPL3JKZnRnelFRYStPdlJLS0NCSndodTlMR3N1N204RzcxRXpNOHBBbmdjK0xPK1BOM2xBYXVBTmpGVGh0SzJheXNBU3F4Z0VVR2pkTk1JZ0tkT2c3ZXZWamkyOTdJQU5BUFcxWmRuM1ZhbmlnZ0NodmkzOEtWbmRFUUZRckZiWm1sRjlIczZuTVl0ZkFDaWdEYjE1YWVvdDBUd05FRFhvUjJxclBibDluTUE1cjRWejlIZEY2dGwxaTJ5SGRPVy90TXBYUzZYMFc5a1IrSy9UZ0lZQVN5b2c4eDJ1R3FBMzIxL253UHUyLzZQQk9qd1JMc2FPMnYxR2dJQ0cxYmJ4cmV4ZDQxOHVqOFpVbXFBenVWZU53STJJQjJlQnRYSXhBWlhsaWdOVUdUcmRRMlJZVWhIMXJOQWgva0hwcVB4VkZkaFhndDk2b1NEdjV6TFdqaGxVei9nSXRKVVNBQ0NiV1ExWUtvTkgxZldBQTJBSUFnZzBsb1FoR1NnRjlCRTdhbXFvdnlqUnA4UkhmUXp4Qm1YZ1o2Q3dGRWdXQ2piY2pTMTVlT0tBWW9BbWdRMUl2TDVYb2lpNkNNSXd1K0FqOXJEOGRtK09zeWZ0SkZSYlQ1aVZKdVArQ0p1dmN2OUFkVVgzbC84QTRGOW9vaHZkR3d2bWdjM0txWFYrcmpzaWdHS0FZdXhvSmhSazRjdzVyMG9CQUVOSUt1ODJOVUdYdDRlOXFkaEk1M0wvWGVzT2twUlh0RmFtU0JvWHYxM0ZPT21EYUV3M3doZ29aYnVENjRmaEZJRm1kQnFYdEkwTko1cXp1Ni96TXIvMjRUSmFLYi9jejJJbVRJRW1hek1wbzlpRFJCRmtSL243dVhuWllkUXFoVGkyM09mRVhwSFBVYWhvWmdYdTh4R3RJclhLRnNMYW9TcjU0RFRvbFVrL2RKZEFEcjJhOCtrcGVQUStXaEoycERNOGc5K3d2d29ObjhiVEVZemM5Nks1K2RsaC9EMjFmTHB1dkZDNzZqSEFFZzlmd2ZSS2dLY2RvV25xeWRCYjJDRUlCUG8ySzg5QUEzODlYUWFFTUxGSXlta25ra2ovY3BkdWczckNFZ2VzR3phSmpZczJrZE9sZ0Y5UTA4YStIbFZPOEROSzVucyt2RVl5ei9leWNYak4razFOTXhPbS9mMlQveXg1ekpOVy9ueXlacHh0R3dYWUtmRmY1M0VqVXNaSUlYTkoydXJrS3Nlc0ZFUUJPUHhYOCtSZXovZi90S3Z1UTlUVjc1S3gzN3RhUmhRMGVjVktqbnBLZmZadUhnL2s0ZC95K3dKemsrdjg5L1p5T1RoMzdKeDhYN1NVKzVYeVIxNCszclJ1WDhiWnYvMGF1bHBFSURzekR3TzdqZ0gwa0s5eVJXRlhQVUFJNkMwV3F6OTB5N2ZvY3ZneDVBckpCWXFqWkt1UXpyUW9VL1pnVWdBSW9lSDBQK1pUaHpkZFFGam9abjJYVnJRZlZCN2g4eFBIMGpoK3FVTWZQeDFMUGdsanNqUm5TdlF1dzVzUjkvb2pxakxCUmpGUldibXZCbFBadHBEZ0puQWJsY1Vxa3NzOEFXUS9OZUpHNnlZWGp0akJ3UTJwS2pBaEplM0IyL09IdW0wWGR5c2tYaDVlMUJVWUtyeHhGaUtCWk0zY3VIWURZQ2p3SnhhZFNxSHVzUUNSY0JUd0Y4WGo2YjRXQzNXV21WOGVrZUYxWmdPQStnK3FEMkNySGFiazhWaTVmVEJGSUJzWURoMVNKZlZKMXJmQk1TTSt6VEd2dWhWeHJMM05tQXRMdWFkK1RFMUxuNlZrWFBmd0pkVE42UFZhWGp2bTJjZHR0bS83UXlMcG00QjJBajh3NlVCYktoUFBpQU5nZGlMUjY4SkRScnAyUFg5ZnM0ZnZFcW5BU0gyQnRzWDcrWDZ4YnNjMlhXQkRqMWIxZG9JMXk5bE1PT2xWVnkvbUVHSjJjSlRML2V3MHhaUDI4YityV2N3RnByNDcwYzdSVXVKMVFxOEN0eXVpeEwxQ1llVEVabGtOcHEvWFBQeFZqbUF6cWVpZ29IdG01QjEreUgzNytReS9kbnZtVFIzRkk4UERuSElyQlFuay81aXdlUk5GQm9rYjI3OVdOTUs5Qk5KVjhuSk1wU0cxUmJnSGVDUHVpcFIzNFRJTjZJbzlnYldJS1d1SzZCRmlDUjhXRmdZSm1NSmMvNDNuczFMRHlJNk9EdUxvc2ptcFFmNWJNSmFqSVVtd3NLay9UOG9ySW1qY2EyMk1Yc0RpK3VqZ0RzeVFuOEFMeUhGQ2hYUU1yUVpBSjA2ZFdMSGpoM292SFNzbmIrWEJaT2w0M01wektZU3Z2NWdLMnZuNzBYcnFXWHo1czJFaDRjRFZUM0FobUxibU1mcUs3dzdNa0tsTUJZWEZudVVmOUVpdENsS2xZTDQrSGdTRWhJd0dpVzNQcnp6UENjU3I5cDNoUkt6QldPaEZMK1lUQ1ppWTJQSno4OUhwVllRM0tHaUFXd0JUNUc3aEhhSEI1VGluc2xvcGlpL2JDZnk4Tkl3Y1dZMHZrMTBtSzFHVkI1eWV3Ullma3RVS012ZXF6emttSzFHZkp2b2lKczFFazlkV1dodnlDM0NWRndDa09rdW9kM3BBYWVCZG4rZHVrbkh2bVdud1o3RHd4bndUTGhiQnJodzdHYjVzZHdDZDNyQUxvQ1RleW9XYzQxdURBNlBKTmg1NzNRWFQzZVd4clNDd0UxQkVIeW5iNGlqU1pDL25kQklCNHB5cHY3cS9aODV2dTlLaGM0UmZZS1p2SEMwVStZM3IyVHlidlFTckZZeEcyZ0JGTGhEYUhkNlFJRW84b1hWS3JKbXh0WUtlWUg4U2dkVWk5bFNwYk5TNVh3Mm1veG12cG0yRmFzVTczK0dtNVFIOTFlSGxVakZ5eDdoQTBJWVB6TUdwVnFLM1BRYTBOWWhiMm95bWxrNFpSTi83TGtNY0Jqb0Q1UzRTMkIzRmtkQk9xQWtDSUl3TXVQNmZaOUx5ZGRvMVRFUW5ZK1dZb3ZrYnRWODBWVnc4M0ltbjcreG5uUEoxd0d1SUZXRDh0d3BzQ01QMkk2a3lJdEF2Z042YmRBRUtVRHBMWlBKaUJnVVJ1ZEJZUVJIdE1EUFg0dGVBODRDeUx6c0FpNGVUK053d25tTzdMcFFtdVk2Qkl3Qk11b29qdzdwNUNnZ1hkZHhDbStreW9vSW5BQWExM0ZBZ0dmSzhiSS9DcFZDOU5SN2lKNTZEMUZyZTd5OHBVZXBVbFJwYjN1ZXFZY2NqVzI2bFBLcWtJS3U3QUhOZ2ZSeW4xT0JvVWdWSUZjZzJBYU5HRFBqV1FTWndPVkRsM2lRL29DOGU3bVlUWTZuc0ZLbFFPL3ZqVytnTCsyZkNFRzBpbXljRVE5d0N1aGlVOEFWdEVHNnRCRlU3bDFUNEc3cGg4b3pVZ2JRdFhNWS9vMThTZGg5SUVnUWhDT2lLSTRCa2x3WU9CcUlhQjdhblBaOXBPaXZYVy9IYWJDYTBEeTBPYmN1M29xdzhkem1RdGYrZ3NCR1VjVHZxYUg5eUx5WHhmR1RGNkRTemxkNUpoWURsSlJZMkxCNlBuR3ZQWWNvaW43QVhxUUxTclhaTm1YQVJ3RFJFL3ZqcHhQd1VrdUxuNndXdldVeXFhMlhHdngwQXRFVCs1ZVNQbkpoL0g4RGUwVVJ2emRmSDh2NlZmTXdtKzFlVjJGVHJqd0ZCRUdnU0svWHFlK2tKQUVRdjJrWGIwK2RaVFVVRk1xUTNQcDlJQm5vZzNUM2J5Q1NpOGJhZVB3SCtEaW9ZeUR2cm5pMUZ2TFdqUG14eTBrOW13N1NsL0NaN2ZWS29CUFNmY0xmZ0lOQVQ2U2NaUmN2cmFmMXEzblRaYytPSGdaQWs5Yjl5TTh2S0JSRnNjSWR4Y29XRlVXUk03bTUrYVNrcGdIdzdPaGhKTy9mSU92Y0tWUkVtb2UvQXpsSWMydUtUWWdvb0J1d0h2Z1lJTHgvOVlrUFYxQ08xMHlrV3lIZGdHRzJzYWZZWk1sQjh0UXVYU0xDeE9UOUcrektwNlNta1pkblFCVEZLakdFSTVjNkJKQzR2eXpVUG5uNkluZnUzck43UzBOdkwrWEl5TzRzbUQ0ZXBWSUJFSUFVbXorbjkvVkNrQW44dXVJQTJSbTU5ZE1jeU03SVpkZjMreEZrQW5wZkw0Q3h0ckVDbEVvRkM2YVBaMlJrZHhwNmU5bHo1YmZ2WkFvblQ1ZGR4TmlYWkU4WUhhN00zOUU1b0Jkd3VGdVh4OWlYc0pKSjc4MW14UTlia01rRVJnL3R4UXZSZmVuV01SaTViVUlIOW4wZGs3bUUxcDFhRURFb2pKNGpJdGk5OGdDN1Z4NmtXZHZHVEZvNkRxM2V3OEV3TmFNZ3Q1QkZiNnptOXRVTWhvenZ3NUR4ZlRuNnl5bE83amxQNnBsMFZFb0Y2UWUrQThCaXRmTG4yUlRXYk52UDV0MUhzVnBGWG5rNWhpL24vSXVCVWVQNTg4UjVnQjVVU3A4NU1vRGc0YUc1VVZSa2JQSGt3RjdzMlhlRTVvMTlXVDRyanM2aFFWVWFCL1o5SGJWT3plemQ3OW5mV1Vvc2ZQdjJqMXcrbGtwZ3V5YThOdmRaZkp2V0xzOWZpZ2QzSHZMZDFBM2N1cHBCKzhkYkU3Zm9lWHNSQm1EYWtMa1U1eGZiRFZBZUp5K2s4c3IweGR6T3pLWlVCNXRPUVZUYVNwM0ZBaThCcXdHYSt2dVFzUHhEbXZwWFZjQnFGUW5zK3hwZXZsN00zRG1sQXMxa05MTjB5anF1SEV0Rm8xWHp6S1RCOUJnUmdWd3U0OVR2Ri9oejExbnVYTHNIUU5QVy9uU0xDaWNpTWhSTGlaWGtYMDd4ODZMZk1CWVUwNzU3RUJNWC90TWVVNVRpdzZjV1lIaGdJUDNBTW1RTzZnaTNNaDR3L1BWWjNMbVhYVjZuTlpYYk9UT0FoMHdtNUFQeWJVdW04WGk0NDh0WXR6SWUwUG5wcVFSSHRHVHlzdGdxZEt2RnlpOUw5ckhuaDBPSVZwR0dBZDQwRE5DWHJ1aFZFTlF4a0llWmVUek16RVdRQ1F3ZTE0ZmhFd1k0TEx3c2VQVjdycDFPNC9UMkJRNi9ISURrMDFkNU91NXpBSXZWS3Vwd2tFcHp0cThPc1ZwRitZZ0IzWndxRDdBajhRUlFsdjJ0d2x3dVkrUmJnL2hnelFSQ2V3WHpNRE9YMUxQcGhJVUVzMlg5VjJTbEh5RXIvUWliMXkwaU5LUTFxV2ZUZVppWlMyaXZZUDcxNDBTaTR5S2RWcDFhMkJLdXYreHpmbGV5UjZlMlJQWHJndFVxeXBHMjdLb3lPdWs3RnVENTZENU9tZC9LZU1DaTFUc1FCSUVuWXJvNmJRY1EySzRKM1lkSmFiSEhRdHVRK09zcWhnenFqWWRHallkR3pkQW5ueUJ4MXlyQ1FxUjdEZDJqd21uZXR2b3dwTStvcmdpQ3dLTFZPN21kbWUyMDNRc2orMWJRcVRLY0dhQzlUQkI0UEx5dFErSzVxemVKZVdzT0QzTHlpWHloRndFdC9hb1ZGdUR3ejVLM0dBeUYvTEJ1VzRYYWdDaUsvTEJ1T3dVRmtvY2UzbktpUm40Qi8rUEh3T2Q3a3ZVd2o1aTM1bkR1NmsySDdYcUV0MFVtWFo1eWVEQnhsZytZM2JDQmwyYnl1QkZWQ0VkUFhXSEVoRmxrNXhyb01yZ0R6LzNycVJxTG1ZbnJqbkpveTNFQWNuTHorZTMzSTNoNzYramV0UU1BWHk5ZHl3Y2Z6aWNuVjRxK3MrL200S256b0ZXSDV0WHliZGN0aUh0cEQ3aDQ2anJydGg4Z0l5dUhUaUd0MEhxV1paS1ZTZ1hMTisybHlHaFNJNTBTSzhDWkIrZzgxRlZ2ZnBVSUlwbGVKVFJ1N2MvWTZTT0luVFc2VnBYaHhBM0p5R1V5RHE2YlNlS2FUNURKQkZiOXVOVk9YNzEyR3pLWlFOS1BuM0JnN1V6a01obEpHNUpyNUN1VHk0aWROWWF4MDBlZzFxcFovWE1TajQvK2dMbkx0MUpRVkZhbnNlbmk4Q1pXdGRLYlN5eXMycEpJZVBRVXhzOWNTb0xzRHVZUUhkUFd2Y0VUbzZxZjkrVWhWOGdSQk5CNmF0QjZxaEVRdUp0eDMwN1B5TXhDUUVEcllhTUx1UFFqaXlkR2RXWEcxa2tNZXFrM0pvdUZ1Y3UzMFQzbWZWWnRTYVRFVXFWaVZ3SE9mTGZFeTFNamIrelhnSlMwREFTWlFIUmNKSVBIT1Y4VXEwUENkMG5zL0M0UmxWS0JDSmpOSlRSb29PZjJYNGtBTkdzemdKeWNQSlJLQlFKZ01wY3c0bzJCREgybG44dGpaV2Zrc21QSlBvN3RPb05vRlFsdTBaaU1yQndNaFVZTER1b2dUZzJBYlgzdzhOSXcrYnZ4Tkt0aFZhNE9Wb3VWaEdWSi9MSGpOS0lJdWZmejBldTlLaGdnTDgrQWR5TWRna3lnNTRnSWhyN1N0ODQvdFFHNGZUV0RoYSt2cE1oZ2ozNGRHc0JaaXZJUTBxOHl1cW85VmJMNktBK1NPdytmT0pEaEV3Y0NNTFgvN0NwdDFKNnFLcWZKK3FCWjI4YW9QVlVVR1l4V3BEQyswRkU3Wndib2IvdHJwb1oxWXQxbjIxR3FGSXg1TDZwV2dvbWlXSnJvclBqZUtpS0tJa0l0ZjJLeVplRnVDbklMZVhGR2plbENLOURkR2JIZWhaRmpPODl3Y3UrRldyZFAydkFIeHNJcWxYU01oY1hzLzZuMjFlNC9mejNMaWQvcS81dEtkMWFHYWtURzlmdHMrMmF2VS9xMnIvZVFlU1ByYjVUb2J6UkFRVzRoLzMxM2ZiVlhhVTFHTTkrK3N4YkRRN2RWdm1yRTMySUFLVFJlejcyMEIwUkVodElvMEFlRG9ZRDBXeG1rcGQvRllDakF2NFV2RVpHaFpOM0tadG43OFkvMHpuRjVQSElEbUl4bWxrNWVTK3FaTklJN3QrUmwyN1c2a2hJTG5YcU9JcUpYRENVbEZycEhoZlB5cHpFRWQyNUp5cW1iTEptODdtOHh3aU0zd0lycEc3bnk1M1dhdFFsZ3dyeXhLRlVLaHNiMlpVaHNYelI2TlJxOVd2bzh2ZzlLbFlJSjg4YlNORGlBSzhkU1dmMmZMWTlhdkJwdmlCd3V6Q3U2SzZoVWNjNGFpQ0x4Um9NeFYxQ3BYbmRFdjNRMFpadGNJWmUzNjlYNkphMmZkemFBUWdVajN4bkd5SGVHVldtdjlWUFJ0a2VRYithTnJCL09IYmhhS0toVVl4enhMVFFZVnlPaUVWUXF4N2NvZ2NLOG9tOEJIMmQwZ1A4SEpvazl2U3ZsY1lRQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93YXJyaW9yLTFlMjlkNWNmZjZiOTI5NDhhYTA4ZTE2MjU0ZGZiNGU1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVFBQUFBRUFDQVlBQUFCY2NxaG1BQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBQWx3U0ZsekFBQUhZZ0FBQjJJQk9IcVoyd0FBQUJsMFJWaDBVMjltZEhkaGNtVUFkM2QzTG1sdWEzTmpZWEJsTG05eVo1dnVQQm9BQUJ4RVNVUkJWSGljN2QxNWRGWFZ2UWZ3Nzk3bkRwbHVpQmlJREFJcWc0Q0tJVUcwRlEzTmM2RFdaeDBTRkh6aVZPMWtIZDVicTExMWRhMnM5OTVhYi9YOVlhSFl2dWRRa1RwaEF0WGFMaEVIUkdvcFBxQ1J0bGhBeXp5RUVESVBkenJuOS83QWFJeTV1VGYzbm5QMkdYNmZ0VnpMTnJsbi95U2NiL2JaWnc4QVk0d3h4aGhqakRIR0dHT01NY1lZWTR3eHhyeENxQzZBTVR2RTF5K2ZCeUVlZzBBbGdMd2NMOWNLMEQ0Qjhmc0FHVStLYXg4K2JrYU5LbkFBTU05THZMbWltZ2h2QUFoWWNQa2VDRHdhdXZyQkZSWmMyM0pTZFFHTVdZbnE2aVFSbm9JMU56OEFGSUt3UEw1aCtjOHN1cjZsT0FDWXA4WG1sMHdEY0k3MUxZbUg0aHRXTExPK0hYUHhJNEJGanErSnp5T0p4d0JVQXVnRTRSVWpHSHgwNGszaWxPcmEvQ1Q2OXVQVHBhN3ZzYW01RThGUVlLcFkrTDF1bTlyTEdmY0FMSENrSVZGTkVsc0FYSTdUQTA1aklYQy9UQ2JlK2ZoMUNpc3V6MWZDNzdkOEF1Q1FUYzJWeGVQNkRUYTFaUW9PQUpOUkhVbEpsT3FaYzA1QlQvSkJ1MnZ5TTFGWFp4aUNIZ0NRdEtVOTBGVjJ0R01XRGdDVEhac1ZHLzZaaytnYSs2cGhBSkIzOVVPdlFjakxBR3dHRUxXNHVVa1dYOTlVVm8yTStwYVFNZ0pqbUs4RHhmWlZ3L3FGcm41Z080QXIyMWZlV2dsRGJzdjJPakt2Q0hsVFpxZjhPc1g2THNuMjJpcHdENEF4SCtNQVlNekhPQUFZOHpFT0FNWjhqQU9BTVIvakFHRE14emdBR1BNeG5nZVFvVUZ6KzFPdkp6ZXdmWHh0S09VYWkyTnI0NVhINnVPVXBybG1NOVlPdkhUcmpQRUJJYTZIeEpWRW1BM2diQUNqTVBMZzd3UFFDeUdhUWRncllPeUdFTytId3ZUZURjL3M2Y3EyUHF1MExWLzZyMExRVDNENnYvV0xocG1qNFVlOEdDZ0RSeG9TMVpJbzAvWGsyOGZYaHVhbCt1S3h0ZkZLR01oMElzck9ucUxnL0dsZkY3RU12eDhBVUgvYjlNc2g1QThCTEFLZ2plU3pJNVNFd05zQW51c0pSbjl6MTdNSHJKNWxsOWJKbGJlT0R4cnlNQ3pxM1dZd0VhZ24vTTgvS3JLaWJTdHdEeUFOcWlONW5CSldyaWNmVHYvYWdmL081SnZYM1Q1em5HN1FTZ0EzVzF2V1p3SWdYQXZnMnNKNDNvbUdwVE1mbzdqOFpXM0RMbVdyNGNKNklHSUlneDl0TThSL1VHbWtuZHR2dFF6WERqUXNuVld0Ry9RaDdMdjVCeXNqb3A4aXFPK3BYenB6c2FJYUVCa1ZPQWlnUjFYN2JzTUJrQVlaU1BlOGJpbUo5TzAzTEpsUlEyUzhEbUNzRFNXbE14NUVhK3FYekhqbGhTVVhubUYzNCtLdVo2TkNZSjNkN2JvVkIwQWFFM2FIN1Z4UC9pV0dFRzhPOS9XR3BkTVhFY1FMQUVJMmxaUWg4YzBnRW8xcmJwOCt4KzZXZFFyOEJBQnZ2SklCRG9BMFJKMHdDSVp0NjhrSGFXeW53UEpVWDZ5L1kvWWtJdms4Z0tDTk5ZM0VaR25JOSt0dm0ybnJHdm5SRC83NmtDRGpPZ0FuN0d6WGpUZ0FNakNoTnU4MVNOaTFuaHdBTllHd1BJRGdGYk5yUlh6STd3QUVFdnBxQUtPdHJ5Y25SUkQwMjVlWHp2aXFuWTJPZW1qTkIwSlB6Q0xDZndxQlhiRGw1K1krL0JyUVpCbTg1aHYyTldHbVhyNXRScTBRNHVWY3IyT2pOa2x5d1MwdmZiUkxaUkdkeTIrZllRaGpkN2FmRjZFODVKK2IrcW5HYmE4QnVRZmdVZ0xpeDZwckdLRXpER0dzcmErWnJmVG1pQVpqUndIb1dWOGdtVUFHNDdLdXdRSGdRbXVXenJ3VUFyWVBycG5nZkFUMWxTb0xHUHU5aG00aWJNMzI4MlRvTVBwY3MrbHZXaHdBTGlTSmFsVFhrSU03WDE0eVk2SEtBcVRBRTdsOFB0SFdiRllweW5FQXVCSjlUWFVGdVJBUWo5ZlhXRHBGZVZqRmJkTmZnTUNmc3YyODN0bmltVjRBQjRETHZGdFZGUURFTE5WMTVHZ1dCYzZ2VmRXNHFLc3pncnE4R2NDK2JLOFJPN29YRkIvUkVnMUg0Z0J3bWFhem1pYkNjWk4rUms0QVNnY3hDeDkrL3JoTTBId0FyMmZ6ZVVvbUVEMzBOK2pkN1NaWFppOE9BSmNKQ3ZMR3R1SUNGNnk5ZGRaOGxTVVUvOXRMTFNVUHZuZ2RKRlVEV0lYVFBZS001d3RRTW9uWWtUMklIZHFOWk1kSlVEd0dNZ3hYdlNMZzFZQW1NNUpHcDVTcGMxVUFIVGsxUUFoQkFLUEhsT0dDZVY5RnlabGpNRng3MllqMjllTG9nVSt3dTNFYkVva2g1eUdaUXRmME93QjhZRmtER1NwNTRLV05BRFlDUURibkJ1aTlIZEI3UC8yeEVyS2VZNkFDOXdCTWxtN3RRTHE1L1prWWQvWTVzUVdMdm9uUlk4cE12L2tCSUMrL0FPZk52QWhmdmZZR2FBSHJma2NJRXQrdzdPSXNJeHdBSmt1emRtRFl1ZjJaaUpTVkZjeTU5UEt3RU5iLzZFcEdsMkxLTkV2SEd5ZXRXVHoxUENzYllNUGpBTERBbDljT3BKL2JuNmtMS3kvdnppdXdiekxkMkFrVExiMitrTnBsbGpiQWhzVmpBQllaZjB0b080QXJ6YjV1YWRrNENiSnZZN3RnS1BYMmg2WVFjb2ExRGJEaGNBK0FLVVpUVlZmZ1p4d0FUQ2toVUtLNkJqL2pBR0JxRVNLcVMvQXpIZ01ZNEZkM3Z6U2Vrb0hyU2VCS2dBYnVveC9ENmZmM2V3bGlCd2h2VVY3cjIvYy9lWDlDYWNIZUVGYlI2TFhYWGp1UGlCNGpvaStjODFEN3U5WmNMMTE1OWRWWGozUXlVRE9BVjNSZGYvU2RkOTZ4ZFNzekRnQUFUOXhSZjdrVStLR2hZeEVFRGJWSUpmL1RmODRTb0NzZzhMQ0luWEh5cVdYMVR4cng1UEw3WDFyU1luUEp0aEVlM0RQbXFxdXVxallNSTlOekh1d3dGc0Q5bXFaZHVtalJvdm5yMTYrM2JaR0JyeDhCbnJoOTNiaW5sOVd2bFFKL0FQQU5qT3dRalRFQUhwV2h3TWRQTGF2L2pqVVZNclBWMWRWSklZU3FjeDdTbVpOTUpoKzBzMEhmQnNEVHl4cXFwYVovU0xudm8xOEM0SmRQTFh2NStWVjNyckw0blprQ3dsVlQyOVBhdW5XcjJuTWUwaEJDWkhRT2hGbDhHUUJQMzlsUVF5Q1Q5OUVYUzVOVStONHpkOVdQTWUrYTZpWGkxcTBGVUVIWGRhY1BPdHE2Mk10M0FmRGtIUTJMaU1pcWZmUXYwUTJzcTYrcGQvMXkzWDdOeHc2ckxvRlp5SW5QUVpaNTRvNzZTVUpRMm4zMHc4VmhqSjQxRmdWakN4RXF6a052VXhjT3Zic1BwR2ZVSFY3UVdZQW5BTnhsUnMwcXRiZTJZUDhlcFp2NE1vdjVKZ0FJSko0V0RjUHVvNTlmV29qSjEweEY2ZXl5TDJ5WWZ1YnNzWWkyOWVIRWptTVp0b1U3bjc3ejVkL2MrK3ppMytWYXR3clIzaDRjUGZnUDdHN2NCajJwNGp3VVpoZmZCTUJUeStwckJFUlZxcStQdWVnc1RMM2xBbWhCYzU2S2lNUi8xZGZVdjE3YlVKdjlGdFFLbkd3NmlqOXVlTzFMLy8rb3drTE1tRHdCa2NJQ0dBYWhMeHJEeWZZT0hHbHVRU3pCMHlIY3lqY0JBQkkvVHZWS3U2eGlQS2JkZk1HWGprbUp0dlloMnRhSHpnTnRhUDd3K0VoYm5OMVpTTXNBUEpORnRjb0k4ZVUvcE5IRkVWU2NQdzM5WDlJa0VDd3FRSEZSQWFhTUw4UEhoNC9oVUpOM2RzcjFFMThFd0ZOM3Jya1VOUFErK2tVVGkzSGVqYk8rY1BPMy9PMEVEcjN6RC9RMjViYnpLNUg0TGx3V0FJTlRVRUJnOXJtVE1FUXVBQUEwS1hIKzVJa29DSWV3KytBUkcrcGpadkxGV3dBQm1YSWYvWE91T3g5UysveVBZZi82dmRqOXdzNmNiLzVQVlR5eGJJMnJOcndZZko4WDVJV1JIMDQvVzNmU1dXTXh2dlJNYTRwaWx2RkZBQkJoeUgzMGk2ZVVZTlNVenhlak5XMDdncU9iRDVqYXRoRENWWHY0RDM0RTBBS1oveFdaTm1rQ05NMFhmNlU4dy9NL3JicXFkd01BaHR6WHFuUjIyV2YvYmlSMUhOendpZmtGa0xqSS9JdGFLRlZmUHdQaFlBQmp6K0RWdlc3aStRQW9tNUo2SC8yaXN6K2ZkTld4cncySkh2Tm52UW5DdWFaZjFFSzVMdjQ1YzVUVEo5cXhnVHdmQUFFam1ISnFaYWo0ODZuN2ZjMDkxaFFnTU1xYUMxc2t4NzhSZVNIUFRJTDBCVis4QlVnbDBSMUgzaG41QUlDZXBpN0YxVGhEbUJLNHNQVHoveDBvSE9FTjdhMjFRNTduK1FCSXlrUm5ZTWdsL3NESGEzZGhZdFVVUkZ2N3NublBueG5LOFNBUW0wVmJVaDVwa05ublBiWjR5T3M4SHdBbkRweDFaTUxrazNFTU1RN1EyOXlOdmZWL3M3UjlFdGtmUUdtM1dFY0wydmY5SmFkcm5PcnNOS2thWmdmUGp3SFViVnFZQktCc1JZc2tzVk5WMjVsS3huclJ2djh2T0xiMVZWQU9XNDdINGtrMHQ3cXF3K043bnU4Qm5FWWJBVkd1b21VWmtCdk52RjdicmovT2JOMy9vWm1YTk0zSGg0OUFOK3c3czREbHp2TTlBQUF3REsxQlVkUGI3MzdtWnRjOEFneEppSXllNnc4Mm5jQ3hscHczMUdRMjgwVUEzUC9jTFI4UVFVVlgvQ2tGYlpydTcvdVBnRktNN3V1NmdkMEhEbVBQd2FQMkZzVk00Wk5IQUVBQS93bkF6cDdBb2I3aW90VTJ0bWVaayszdCtPQ2ozWmd4YVNLS0N3dGdHQVo2b3pHMGRIVGd5SWtXeEJLOFo0QmJPVFlBanErSnp5T0p4d0JVQXVnRTRSVWpHSHgwNGswaXEzM1Q3LzExemJxbjcyallDREgwdWdDekVlaVJINno4dWkzYk81ZWNNd2RuVEt1QURBNnphSWNJOGE1VGFHcDhHNG51dGhHMzBkbmRpMjBmN2MyaFN1WkVqbndFT05LUXFDYUpMUUF1eCtsREc4WkM0SDZaVEx6ejhldVUxVUVTQW9Ka1FQOFhBRGIwVlduVmZhc1hyN08rSFVETEs4U1pzeTRiL3VZSEFDRVFLaTdGbVRQbTIxRVdjd25IQlFEVmtaUkVxZlp0bjFQUWsvMis2ZmM4YzlzeEFEY0E2TXYyR3VrSTRQMVJ2ZUxiVmwyZk1UTTVMZ0NPellvTnYyODdVVTc3cG45cmRlME9JV2dKZ041Y3JqTVVJZkNCSGsvZVdOdFFhOXQwT0QzYWcxTWZiWUdlU05Na0VXS2RwM0JxendmMkZNWmN3WEZqQUVMS0NJWjVsU3hNMkRmOTNtY1h2L3FydTlkOHhVakszMEpnY3E3WE8xMFhyZW5zRVhjLzByREVzdDVGS3UzNy80TDIvYm5ONEdQKzVMZ2VnRjN1ZWViV25Va0tYRUlrbmdHUXk4YWRyU1Rvdm50WEw3N3RrWVphMjI5K3huTGgyd0FBZ084OGQxUHpmYit1dVljZzV4RHdLa1lXQk0wRS9Mc0lZTnA5enk3MnhQdCs1aitPZXdSUTRiN1Z0K3dDY09PcU8rdlBJanI0ZmMxb2YxUVhaVEF3Q2lUQ0VOQUJpa0pEQ3dTMW50Qmw1UjJIRDVadS9IU2RBV091eFFFd3dGM1AxamF0dlhYR3E0WVVqdzd6YlVkcW4vdnBtN1lWTllndXhVbFZiV2ZqZUZSaTlZRmh6MHl0bkR0M3JpVzdDRWdwRVFxRkVBd0dvV2thcFBSMWgzZElIQUF1b3hVVU5rSklJSWRWZTE0WENBUlFVRkNBRU85T2xCWkhvc3VVZmV2cEU2SGkwYnpvZmdoU1NrUWlFWlNVbFBETm55RU9BQmNLRjQ5OVNYVU5UaE1NQmxGU1VvSndCbWNZc00vWjlnZ3dhRzUvNm9kQ0E5dkgxNFpTYmsxN2JHMjg4bGg5UE4welkzT3Vhd2RVRzI0dHhJU2UxdS92aTV5NUpONTFpcmZnQlJBS2hSQ0pSSVk4MW93Tno1WWV3QkJ6KzYyVzg5b0JsZEt0aFJCMW01S1Iwc2xYQlBJaXZqK1ZNeFFLb2JpNG1HLytMRmtlQUdubTlsc3RwN1VES21TNkZtTHN3eTkrV0RMMTNBdkNvOGFPZkdtZlIvUS84N1BzV1I0QWFlZjJXeTNIdFFOMkc4bGFpREgzdmJ6M3phMzdyejRjTFFZVmxVSExLNExRaHQ0QjJZdTQyNTg3eTM4cmt3RVNDb2NhcGN0MnFzOW1MY1FuQjVyd3lZR1J0Yk12RnNiR3J2Uy9QY2ZsOVdIWmxKRmQydzdoY0JqQllGQjFHYTVuK2EwNVlYZjRFd0M1YlRhZkEwTUlaWk4ybkd4blg0SHFFbktTbjUrdnVnUlBzRHdBUkowd0NNWURBRlJNbTIxc3A4QnlCZTA2V25NeWdGTko5ejRxQkFJQkJBSThoODBNdG5UT0o5VG12UWFKeXdCc0JoQzF2a1ZxQW1GNUFNRXJadGNLUHFwbWtQMHgxNzBZK1FKKzEyOGUyMkowL0MyaDdRQ3VUUGQ5YWQvenA1a253Tkk3bG5EM0xEbCs5amNQendUMEdZSkF1KzdlN2o4QWFENTYwMkUxRGdDZjZkWUZkRmU5Ri9raVRkUDQxWitKT0FCOEprSHUvcEh6elc4dUhrcTFpVlZySWRwUC9oV2JmbnRqeG5Ya3N2Y1pzNFV0WjBuMDR3Q3d3WkdHUkRVUnZRSCs4ODRacFRxanpEdHNQVjdaM2YxQkYxQzhGc0p6ZEYzM2RBZ1FrYTJIeVhJQVdFejVXZ2dQTXJ4OUJMbXRoOWc2TGdDTXBESHNiamZDNWk1U3JzaXdkaTFDSUZSazVlVVJNM0liZEl0Wk1PZ1F6K0M0Y3JjaW9vMTJ0dWU0QUVpM2RzQnRjL3V0WGd0Uk9Hb3k4b3ZHV1hWNXRDVUVPaFBaaDhEQlh2UGYyY2RpdG82VDJXbjcyMisvN2U5SGdEUnJCMXczdDkvcXRSQUNFbk11cTRPVTFnd3hFQUZ2TlllR1c2Q1lVa3RNWWtlYitiUDJrc2tra2tsUDdzaHUrL2tTamdzQVlLaTFBKzZlMjIvMVdvaXpKbGZqaXVzYlVIcldKWkNhK2ZQa1ArN1M4TnlCUEJ6dWxkQXBmVytnUnhmWTFockE2b041aUZ2MHVON1g1N2xEbUE1cG1yYmE3a1lkT3pLZDZkb0J0M0RLV29qeTh2SktJYkJ0cEo4N0hwVjQ0WkFkdTdsbEpoYUxJUzh2enpQckFvUVFqNnhmdjk3Mlp4dEg5Z0FZeTBSWFY1Y24zZ2dRMGFvTkd6YXNVOUUyQndCekxjTXcwTm5wN2lNU2hCRHZsNVNVZkZ0Vit4d0F6TldTeVNRNk96dmRPam5vZzFnc2RtTkRRNE95Y1MwT0FPWjY4WGdjSFIwZDBIVlhyWFJZMDlYVnRYRFRwazB0S290dzdDQWdZeU9SVENiUjBkR0Jnb0lDNU9VNVo3QnlDSzFDaUI5dDJMREJFVWZLY3dBd3p6QU1BOTNkM1loR28wNDhITFNaaVA1WFNybGl3NFlOcmFxTDZjY0J3RHluZjF4ZzhQSGduKzRrUk1MNlRRVjZBYlFUMFY0aHhIWWllaXVSU0d6Y3RHbVQ0Mll2Y1FBNGpKRTBPb2M3eDk1dGF5RlVNZ3dEMFdnVTBlZ1g1bDd0K1BPZi96eFBWVTFPdzRPQUR1TzF0UkRNMlRnQUhNWnJheUdZczNFQU9KRFgxa0l3NS9MOUdBQVJpY1JiUC84dVNEd0UwR1FZUm50NzJ5bWNhajZPcHNNSDBkSjBERVNmVHpjdExpeW9hRit4NUJRSSs0VEE3d09HZkxMdzRlZVBtMTJYMTlaQ01HZnlmUThnc2VIbkswRjRIS0NwQUlLUWNrekptV053M3N5TDhOV3JyMGYxTnhkajNLUnpCMzlzTkFRcUNhaExTT1BqdGhWTFhIVUVPV1A5ZkIwQThRM0w1MFBndThOOVQxRnhDZVl2dkFiekYxNlQ2ank2UWdFczcxaCsyOCtzcVpJeDYvZzZBQVRFUHdISTZKM3d1RW5uWXNIWGIwUXdOUFI2ZXhMaW9iWVZTNWVaV1I5alZ2UDFHSUFoS0NJeTJPQ2kzNmd6U25IaFZ4WUNwdzZlM2lwbkVBSDZhZk12YXRhTi9WNURkN3ByWFh6eHhmT2tsT25QQ1REZjM2MjRhR0ZoSVNaTW1JREN3c0xQcHVVZVBYclViZlB6ZmNmWFBZQnNsSlNXSVZnNklkV1h5OEo2OElaMDF5Z3ZMNitXVW00QmNEbnN2Zmt0RVlsRU1IMzZkQlFWRlVFSWdXQXdpTkxTVWt5ZlBoM0RUV3BpNnZGUEp3dkIwZU1nZ2lubW1STmRsZWJqVWtycG1YTUNoQkNZTkduU2tFZDI1ZWZuWTh5WU1RcXFZcG5pQU1pR2tBaU1Ibm9uWG9LWU5OeEhLeXNycHhHUlo4NEpDSVZDQ0lkVDcwTllYRnhzWXpWc3BEenhXMGlGUU5Gb0pFNGNBcjY4N2YvQzloVkxVdTVPc2ZORTc5OGZmc095WGNKdHg0ZDF1aHYzQUxJa2dpSEljTDdxTXBTTHhXTERIdFRoOWkyN3ZJNERJQWNpeFN0QlB5RWlIRGx5Wk1ndHVmcjYrdERjM0t5Z0twWXBEb0FjaUlDak5weFFwcjI5SFh2MjdFRjNkemVJQ01sa0VzM056ZGk3ZDY5YjkrcnpEUjREeUFYLzNmNU1iMjh2OXU3ZHE3b01Oa0xjQThnQkpYbGhIbk0zRG9BY1VNTDBVNzRZc3hVSFFKWW9HWU1SNHdCZzdzWUJrS1ZrVnh0NEVJQzVIUWRBRnNnd2tHdzFmUThReG16SEFaQ0ZaT3R4VUlJSEFKbjdjUUNNVUh2TENTUk9IVlZkQm1PbThIVUFTQkpkSS9uK2p0WlQrT3VXZDRmY0M0QXhOL0oxQUpBVTcyVDZ2Y2NPL0FOL1dQOGJKT0l4SzB0aXpGYStEb0RRVlQvWUNvRlZ3MzFQVjNzYnRtNThBLy8zM3B0SUpoMTNzaE5qT2ZIOVZPRGdWVCs0Si9IbXltMEFQUXhnTWd5am82MnRaVXhyY3hPT0g5eVBVODFOWDlnV25ERXY4WDBBQ0NFSXdQOTgrZy9XM2pxajBwQmlXNnJ2Nyt6cDNWSHk0SXVWMmJaWFhsNWVLVVRxNjdzVjd3bm9UcjRQQUphN1NDU0NxVk9uZnJZNVNQK2VnSVdGaGRpelp3OE1nM3RRVHVYck1RQ1dPOTRUME4wNEFGaE9lRTlBZCtNQVlEbmhQUUhkalFPQTVZVDNCSFEzRGdDV0U5NFQwTjA0QUZqTzNMUW5vQkNDZDNJZGdGOERNbE80WlU5QUlRU1BTZzdBUFFEbUswSUlQc3hoQUE0QTVqZjhDREFBQndEekZTR0Vwcm9HSitFQThCa2hoSzlQTXlHaUF0VTFPQWtIZ004UUVhOXBacC9oQVBBZlhwbkRQc01Cd0ppUGNRRFl6REFNbmh2TEhJTUR3R1k3ZCs3OEJNQWgxWFV3Qm5BQXFHQVEwUU1BZURDT0tjY0JvRUJqWStOclJIUVpnTTBBK0lCQnBneXZCVkNrc2JGeE80QXI3VzVYOVo2RWdVQUFKU1VscXBxSHJ1dDl5aHAzSU80QitJd1FZcTdxR3BoemNBRDRTRVZGUlEyQVg2aXVnemtIQjRCUFZGUlUxQkRSaStESFBqWUFCNEFQOE0zUFV1RUE4RGkrK2Rsd09BQThqRzkrbGc0SGdFZnh6Yzh5d1FIZ1FYenpzMHh4QUhnTTMveHNKRGdBUElSdmZqWlNIQUFld1RjL3l3WUhnQWZ3emMreXhRSGdjbnp6czF4d0FMZ1kzL3dzVnh3QUxzVTNQek1EQjRBTDhjM1B6TUlCNERKODh6TXpjUUM0Q04vOHpHd2NBQzdCTnorekFnZUFDOHlkTzdlV2IzNW1CUTRBaDVzN2QrNDFBSjREMy96TUFod0FEalp2M3J5elAvM043K3NUZlpsMU9BQWNUTmYxMVVLSTBhcnJZTjdGQWVCUTVlWGx0d0JZcUxvTzVtMGNBQTRscFh4VWRRMWVKSVRJcjZxcXVrQjFIVTdCQWVCQUZSVVY4NG5vWXRWMWVKR1VVbXFhdHFPcXFvci9mTUVCNEVpR1lkU29yc0hMTkUwTGFacjJRWFYxOVVXcWExR05BOENCaEJCZlUxMkQxMm1hRmdLd3plOGh3QUhnTUZWVlZRRUFzMVhYNFFmOUllRG54d0VPQUlkcGIyK2ZDSDd2Ynh1L1B3NXdBRGlNbExKWWRRMSs0K2VlQUFlQXd4QVIvL1pYb0w4bjRMY1E0QUJndGlJaTFTV2sxQjhDQ3hZczhNM2pBQWNBczVXdTY0NFBnVkFvNUp2SEFRNEFaanRkMTFXWE1Ddy85UVE0QUpqdEVvbUU2aExTNnU4SmVEMEVPQUNZN1dLeG1Pb1NNdUtIeHdFT0FHYTdaRExwK01lQWZsNS9IT0FBWUVyMDl2YXFMaUZqWG40YzRBQmdTc1JpTVZlTUJmVHphZ2h3QURCbHVycTZIUDFLY0RBdmpnbHdBREJsRE1OQVoyZW42MExBUzJNQ0hBQk1xVVFpZ2U3dWJ0VmxqSWlYSGdjNEFKaHlzVmdNWFYxZHFzc1lFYTg4RG5BQU1FZHdhd2k0ZlFFUkJ3QnpEQTRCKzNFQU1FZmhFTEFYQndCekhBNEIrM0FBTUVmaUVMQUhCd0J6TEE0QjYzRUFNRWZqRUxBV0J3QnpQQmVId05hcXFxcnpWZGN5SEE0QTVnb3VEWUd3cG1uYjU4K2ZYNmE2bGxRNEFKaHJ4R0l4ZEhaMnFpNWpSRFJOSzh6UHo5K211bzVVT0FDWXE4VGpjZGYxQkVLaDBObFhYSEhGY3RWMURJVURnTG1PR3g4SFFxSFE5NnVxcWtwVTF6RVlCd0J6SmJjOURrZ3BOY013SGxkZHgyQWNBTXkxNHZHNHEwSWdHQXplcExxR3dUZ0FtS3U1YVV4QTA3VDhCUXNXVkt1dVl5QU9BT1o2YmhvVGtGSXVVMTNEUUJ3QXpCTmNOQ1l3VzNVQkEzRUFNTTl3dzVpQWxMSlVkUTBEY1FBd1QzRkJDQlNyTG1DZ2dPb0MvS3k4dkh5OEVPSjZJY1NWUkRRYndOa0FScW11eXkya2xBaUZRZ2dHZzlBMERWSktDQ0VnaEZCZFdrcFN5cURxR2diaUFGQ2dvcUxpY2lMNklZQkZBRFEzYll2dEJJRkFBQVVGQlFpRlFxcExjVDBPQUJ0VlZGU01JNktWUkhTejZscmNTRXFKd3NKQ2hNTmgxYVY0QmdlQVRjckx5NnVKNkVVQVkxWFg0a2JCWUJDUlNBUlM4ckNWbVRnQWJGQlJVVkZEUk04RDRENXJGa0toRUNLUmlLT2Y3ZDJLQThCaTVlWGxpNGpvQlFDT0d2eHhpMUFvaE9KaVJ3MmNld3IzcHl4VVVWRXhDY0R6NEpzL0sxSktSQ0lSMVdWNEdnZUFkWVJoR0t1RkVLTlZGK0pXM08yM0hqOENXR1R1M0xrMUFLcFUxK0ZXNFhBWXdTQjNuS3pHUFFEci9GaDFBVzZXbjUrdnVnUmY0QUN3d055NWN5OEZNRWQxSFc0VkNBUVFDSERuMUE0Y0FCWVFRdFNvcnNITmVLS1BmVGdBclBFMTFRVzRHVC83MjRjRHdHUlZWVlVCSXBxbHVnNDMwelJOZFFtK3dRRmdzdmIyOW9uZ0dYOVowelNOWC8zWmlBUEFaRkpLbnJhV0E3NzU3Y1VCWURJcFpVeDFEVzdtOWFYUlJCUlhYY05BSEFBbTYrdnJPd3BBVjEySFd4bUdvYm9FU3hIUktkVTFETVFCWUxKZHUzWjFFOUZXMVhXNEZSRWhtVXlxTHNNeXlXVHlEZFUxRE1RQllJMG5WQmZnWnRGb1ZIVUpsakFNdzlCMS9UOVUxekVRQjRBRkdoc2JYd0R3SjlWMXVGVXNGa01pa1ZCZGh1bmk4ZmhUVzdac2FWWmR4MEFjQU5Zd2hCQTNBOWludWhBM0lpSjBkWFY1YWp3Z0ZvdHQzN3g1ODdkVjF6RVlCNEJGZHV6WWNWd0lNWitJWGxkZGl4c1pob0cydGpiWDl3U0lpS0xSYVAxNzc3MDNUM1V0UStFQXNOQ09IVHRhR2hzYnJ3TlFEV0FWVHZjSXZQbUFhd0VpUWtkSEJ6bzZPaENOUmwzVEl6QU1nNUxKWkU4OEhuODNrVWhjdEhuejVzV3FhMktNTWNZWVk0d3h4aGhqakRIR0dHT01NY2FZOS8wL2cxWFBqRjlaRmZFQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbmF2aWdhdGlvbi5tb2R1bGUuc2Nzc1wiO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuTmF2fT5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCIgYXM9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXJrZXRwbGFjZVwiIGFzPVwiL21hcmtldHBsYWNlXCI+XHJcbiAgICAgICAgICAgIE1hcmtldHBsYWNlXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FyZW5hXCIgYXM9XCIvYXJlbmFcIj5cclxuICAgICAgICAgICAgQmF0dGxlIEFyZW5hXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2ZvcnVtXCIgYXM9XCIvZm9ydW1cIj5cclxuICAgICAgICAgICAgRm9ydW1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5hdmlnYXRpb247XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk5hdlwiOiBcIm5hdmlnYXRpb25fTmF2X185RTlzcFwiXG59O1xuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdGF0c1RhYmxlLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBSb2d1ZVBpYyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL2FyY2hlci5wbmdcIjtcclxuaW1wb3J0IFdhcnJpb3JQaWMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYXNzZXRzL2ltYWdlcy93YXJyaW9yLnBuZ1wiO1xyXG5pbXBvcnQgV2l6YXJkUGljIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2Fzc2V0cy9pbWFnZXMvd2l6YXJkLnBuZ1wiO1xyXG5jb25zdCBzdGF0c1RhYmxlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGlzTG9hZGVkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLmlzTG9hZGVkKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xyXG5cclxuICBpZiAodXNlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuICBsZXQgc291cmNlSU1HO1xyXG4gIGlmICh1c2VyPy5yb2xlID09PSBcIndhcnJpb3JcIikge1xyXG4gICAgc291cmNlSU1HID0gV2FycmlvclBpYztcclxuICB9IGVsc2UgaWYgKHVzZXI/LnJvbGUgPT09IFwicm9ndWVcIikge1xyXG4gICAgc291cmNlSU1HID0gUm9ndWVQaWM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNvdXJjZUlNRyA9IFdpemFyZFBpYztcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIHNyYz17c291cmNlSU1HfSBhbHQ9XCJDbGFzc1wiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkRhc2hib2FyZH0+XHJcbiAgICAgICAgPGgyPlN0YXRzIHRhYmxlIDwvaDI+XHJcbiAgICAgICAgPGg1PkNsYXNzOiB7dXNlcj8ucm9sZX08L2g1PlxyXG4gICAgICAgIDxoNT5IZWFsdGg6IHt1c2VyPy5oZWFsdGggPD0gMCA/IDAgOiB1c2VyLmhlYWx0aH08L2g1PlxyXG4gICAgICAgIDxoNT5MZXZlbDoge3VzZXI/LmxldmVsfTwvaDU+XHJcbiAgICAgICAgPGg1PkV4cGVyaWVuY2U6IHt1c2VyPy5leHBlcmllbmNlfTwvaDU+XHJcbiAgICAgICAgPGg1PkdvbGQ6IHt1c2VyPy5nb2xkfTwvaDU+XHJcbiAgICAgICAgPGg1PlN0YW1pbmE6IHt1c2VyPy5zdGFtaW5hfTwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0YXRzVGFibGU7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkRhc2hib2FyZFwiOiBcInN0YXRzVGFibGVfRGFzaGJvYXJkX192MnJGS1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBQcmVmZXRjaE9wdGlvbnMsXG4gIE5leHRSb3V0ZXIsXG4gIGlzTG9jYWxVUkwsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgZXhlY09uY2UgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3cgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXMgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpIDogcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKGFzKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHtcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGFyc2VSZWxhdGl2ZVVybChcbiAgdXJsOiBzdHJpbmdcbik6IG51bGwgfCBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICApXG4gICAgICB9LCAwKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkID0gdHJ5UGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBpZiAoIXBhcnNlZCkgcmV0dXJuIGZhbHNlXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybChjbGVhbmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbylcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIsIGVycm9yOiBlcnIgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgICAgICAocmVzKSA9PlxuICAgICAgICAgICAgICAoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgICAgfSBhcyBSb3V0ZUluZm8pXG4gICAgICAgICAgKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkVuZW15Qm94XCI6IFwiYXJlbmFfRW5lbXlCb3hfXzExSDJNXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYXR0YWNrLCBzcGF3bkVuZW15IH0gZnJvbSBcIi4uLy4uL3N0b3JlL0FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYXJlbmEubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9OYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTdGF0c1RhYmxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3N0YXRzVGFibGUvU3RhdHNUYWJsZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVFbmVteUhlYWx0aCB9IGZyb20gXCIuLi8uLi9zdG9yZS9BY3Rpb25zL2VuZW15QWN0aW9uc1wiO1xyXG5pbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcclxuaW1wb3J0IEdvYmxpbkltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL2dvYmxpbi5wbmdcIjtcclxuaW1wb3J0IE9yY0ltZyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hc3NldHMvaW1hZ2VzL29yYy5wbmdcIjtcclxuY29uc3QgQXJlbmEgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZXJJZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaWQpO1xyXG4gIGNvbnN0IGhlYWx0aCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uaGVhbHRoKTtcclxuICBjb25zdCBlbWFpbCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aD8udXNlcj8uZW1haWwpO1xyXG4gIGNvbnN0IGlzU3Bhd25lZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5pc1NwYXduZWQpO1xyXG4gIGxldCBlbmVteUlEID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5pZCk7XHJcbiAgbGV0IGVuZW15SGVhbHRoID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5oZWFsdGgpO1xyXG4gIGNvbnN0IGVuZW15RGFtYWdlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZT8uZW5lbXk/LmVuZW15Py5kYW1hZ2UpO1xyXG4gIGNvbnN0IGVuZW15TmFtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGU/LmVuZW15Py5lbmVteT8ubmFtZSk7XHJcblxyXG4gIGNvbnN0IGRhbWFnZSA9IDU7XHJcblxyXG4gIGNvbnN0IHNwYXduRW5lbXlDbGljayA9ICgpID0+IHtcclxuICAgIGxldCByYW5kb21FbmVteSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tRW5lbXksIFwicmFuZG9tXCIpO1xyXG4gICAgc3dpdGNoIChyYW5kb21FbmVteSkge1xyXG4gICAgICBjYXNlIDA6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY0ZmViMDRmZTZjOTUzMWZiNzM5ZjA5XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBjYXNlIDE6XHJcbiAgICAgICAgZW5lbXlJRCA9IFwiNWY4MzUwYjQ3ZGI1MzBiMjI1OTg3Y2E3XCI7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHNwYXduRW5lbXkoZW5lbXlJRCkpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkRlZmF1bHRhc1wiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgYm9keSA9IHtcclxuICAgIHVzZXJJZCxcclxuICAgIGhlYWx0aCxcclxuICAgIGVuZW15RGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGxldCBhdHRhY2tEYXRhID0ge1xyXG4gICAgZW5lbXlJRCxcclxuICAgIGVuZW15SGVhbHRoLFxyXG4gICAgZGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGJlZ2luQXR0YWNrID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goYXR0YWNrKGJvZHkpKTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZUVuZW15SGVhbHRoKGF0dGFja0RhdGEpKTtcclxuICAgIGlmIChlbmVteUhlYWx0aCA9PT0gMCkge1xyXG4gICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgIHRpdGxlOiBcIllvdSB3b24gaGVybyFcIixcclxuICAgICAgICB0ZXh0OiBgJHtlbmVteU5hbWV9IHdhcyBraWxsZWRgLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+IEdvIGJhY2sgdG8gdG93biEnLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vdW5zcGxhc2guaXQvNDAwLzIwMFwiLFxyXG4gICAgICAgIGltYWdlV2lkdGg6IDQwMCxcclxuICAgICAgICBpbWFnZUhlaWdodDogMjAwLFxyXG4gICAgICAgIGltYWdlQWx0OiBcIkN1c3RvbSBpbWFnZVwiLFxyXG4gICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0LmlzQ29uZmlybWVkKSB7XHJcbiAgICAgICAgICByb3V0ZXIucmVsb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoaGVhbHRoIDw9IDApIHtcclxuICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICB0aXRsZTogXCJZb3UgYXJlIGRlYWQgaGVyb2UhXCIsXHJcbiAgICAgICAgdGV4dDogYCR7ZW1haWx9LCB3YXMgYnJ1dGFseSB3b3VuZGVkIGFuZCBnb3QgaW50byBob3NwaXRhbGAsXHJcbiAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRodW1icy11cFwiPjwvaT4gR28gYmFjayB0byB0b3duIScsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly91bnNwbGFzaC5pdC80MDAvMjAwXCIsXHJcbiAgICAgICAgaW1hZ2VXaWR0aDogNDAwLFxyXG4gICAgICAgIGltYWdlSGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgaW1hZ2VBbHQ6IFwiQ3VzdG9tIGltYWdlXCIsXHJcbiAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcclxuICAgICAgICAgIHJvdXRlci5yZWxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICA8U3RhdHNUYWJsZSAvPlxyXG4gICAgICB7aXNTcGF3bmVkID8gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gYmVnaW5BdHRhY2soKX0+QXR0YWNrITwvYnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzcGF3bkVuZW15Q2xpY2soKX0+RmluZCBhbiBlbmVteSE8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLkVuZW15Qm94fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgyPkVuZW15IHRhYmxlIDwvaDI+XHJcbiAgICAgICAgICA8aDU+bmFtZToge2VuZW15TmFtZX08L2g1PlxyXG4gICAgICAgICAgPGg1PkhlYWx0aDp7ZW5lbXlIZWFsdGggPD0gMCA/IDAgOiBlbmVteUhlYWx0aH0gPC9oNT5cclxuICAgICAgICAgIDxoNT5EYW1hZ2U6IHtlbmVteURhbWFnZX08L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZW5lbXlOYW1lID09PSBcIkdvYmxpblwiID8gKFxyXG4gICAgICAgICAgICA8aW1nIHNyYz17R29ibGluSW1nfSBhbHQ9XCJHb2JsaW5cIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGltZyBzcmM9e09yY0ltZ30gYWx0PVwiT3JjXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZW5hO1xyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVFbmVteUhlYWx0aCA9ICh7ZW5lbXlJRCwgZW5lbXlIZWFsdGgsIGRhbWFnZSB9KSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZW5lbXlJRCxcclxuICAgICAgICBlbmVteUhlYWx0aCxcclxuICAgICAgICBkYW1hZ2UsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBhd2FpdCBheGlvc1xyXG4gICAgICAucHV0KFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjkwMDAvZW5lbWllcy91cGRhdGUvaGVhbHRoLyR7Ym9keS5lbmVteUlEfWAsXHJcbiAgICAgICAgYm9keVxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfRU5FTVlfSEVBTFRILFxyXG4gICAgICAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07IiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdHRhY2sgPSAoeyB1c2VySWQsIGhlYWx0aCwgZW5lbXlEYW1hZ2UgfSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIHVzZXJJZCxcclxuICAgIGhlYWx0aCxcclxuICAgIGVuZW15RGFtYWdlLFxyXG4gIH07XHJcblxyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAucHV0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvYXR0YWNrLyR7Ym9keS51c2VySWR9YCwgYm9keSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlVTRVJfVVBEQVRFU19IRUFMVEgsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjkwMDAvdXNlcnMvYXR0YWNrLyR7Ym9keS51c2VySWR9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGVzLlVTRVJfREFUQV9BRlRFUl9BVFRBQ0ssXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNwYXduRW5lbXkgPSAoZW5lbXlJRCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgY29uc3QgYm9keSA9IHtcclxuICAgIGVuZW15SUQsXHJcbiAgfTtcclxuICBjb25zb2xlLmxvZyhib2R5LCBcImJvZHlcIik7XHJcbiAgYXdhaXQgYXhpb3NcclxuICAgIC5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6OTAwMC9lbmVtaWVzL3NwYXduLyR7Ym9keS5lbmVteUlEfWAsIGJvZHkpXHJcbiAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5FTkVNWV9TUEFXTkVELFxyXG4gICAgICAgIHBheWxvYWQ6IHJlcy5kYXRhLFxyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V2VhdGhlciA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIGF3YWl0IGF4aW9zXHJcbiAgICAuZ2V0KFxyXG4gICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9pZD01OTgwOTgmYXBwaWQ9YjU1MTYzNzhiZjAxYTEwNzdjNWY3MTMyM2JhOTUwYWMmdW5pdHM9bWV0cmljYFxyXG4gICAgKVxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1dFQVRIRVIsXHJcbiAgICAgICAgcGF5bG9hZDogcmVzLmRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuIiwiLy9HRU5FUkFMIHR5cGVzXHJcblxyXG4vL1dlYXRoZXJcclxuZXhwb3J0IGNvbnN0IEdFVF9XRUFUSEVSID0gXCJHRVRfV0VBVEhFUlwiO1xyXG5cclxuLy8gQXV0aGVudGljYXRpb24gdHlwZXNcclxuXHJcbi8vTG9naW5cclxuZXhwb3J0IGNvbnN0IExPR0lOX1VTRVIgPSBcIkxPR0lOX1VTRVJcIjtcclxuZXhwb3J0IGNvbnN0IFVTRVJfTE9BREVEID0gXCJVU0VSX0xPQURFRFwiO1xyXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9IFwiTE9HSU5fRkFJTFwiO1xyXG5cclxuLy9VU0VSIEFDVElPTlNcclxuLy9Db21iYXRcclxuXHJcbi8vQXR0YWNrXHJcbmV4cG9ydCBjb25zdCBVU0VSX1VQREFURVNfSEVBTFRIID0gXCJVU0VSX1VQREFURVNfSEVBTFRIXCI7XHJcbmV4cG9ydCBjb25zdCBVU0VSX0RBVEFfQUZURVJfQVRUQUNLID0gXCJVU0VSX0RBVEFfQUZURVJfQVRUQUNLXCI7XHJcbi8vU3Bhd25FbmVteVxyXG5leHBvcnQgY29uc3QgRU5FTVlfU1BBV05FRCA9IFwiRU5FTVlfU1BBV05FRFwiO1xyXG4vL1VwZGF0ZSBFbmVteSBIZWFsdGhcclxuZXhwb3J0IGNvbnN0IFVQREFURV9FTkVNWV9IRUFMVEggPSBcIlVQREFURV9FTkVNWV9IRUFMVEhcIjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=