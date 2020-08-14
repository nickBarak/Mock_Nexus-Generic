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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
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

/***/ "./Functions.js":
/*!**********************!*\
  !*** ./Functions.js ***!
  \**********************/
/*! exports provided: convertDate, convertToPath, convertFromPath, testEmail, copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDate", function() { return convertDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPath", function() { return convertToPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromPath", function() { return convertFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testEmail", function() { return testEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
function convertDate(date) {
  let now = new Date(),
      secondsPast = (now.getTime() - date) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + ` second${parseInt(secondsPast) > 1 ? 's' : ''} ago`;
  }

  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + ` minute${parseInt(secondsPast / 60) > 1 ? 's' : ''} ago`;
  }

  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + ` hour${parseInt(secondsPast / 3600) > 1 ? 's' : ''} ago`;
  }

  return new Date(date).toLocaleDateString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}
function convertToPath(string) {
  return string.toLowerCase().replace(/ /g, '-').replace(/[:'!@#$%^*\(\)";{}\[\]\|~`<>\/\\?\.,]/g, '');
}
function convertFromPath(path) {
  return path.split('-').map((word, i, ary) => word === 'previews' || word === 'columnsfeatures' ? word === 'previews' ? 'Previews:' : 'Columns/Features' : i === 0 || i === ary.length - 1 || !['the', 'on', 'to', 'in', 'and', 'whats'].includes(word) ? !['tv', 'aj', 'cola', 'ucsb', 'uc'].includes(word) ? word[0].toUpperCase() + word.slice(1) : word.toUpperCase() : word === 'whats' ? 'What\'s' : word).join(' ');
}
function testEmail(email) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
function copyToClipboard(text) {
  const el = document.createElement('input');
  el.value = text;
  el.style.visibility = 'none';
  el.style.height = 0;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
}

/***/ }),

/***/ "./components/CategoryPreview.js":
/*!***************************************!*\
  !*** ./components/CategoryPreview.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Functions */ "./Functions.js");
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\CategoryPreview.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CategoryPreview({
  category: {
    title,
    articles
  }
}) {
  return __jsx("div", {
    className: "jsx-2248715913" + " " + "category-preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/categories/${Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertToPath"])(title)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("label", {
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 64
    }
  }, title)), __jsx("ul", {
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, articles.map((article, i) => __jsx("li", {
    key: i,
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      fontWeight: 600,
      fontSize: '1.2rem'
    },
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 78
    }
  }, __jsx("a", {
    className: "jsx-2248715913" + " " + "article-preview-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 117
    }
  }, article.title))), __jsx("div", {
    className: "jsx-2248715913" + " " + "date-and-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertDate"])(article.publish_date), " by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/authors/${article.author.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 97
    }
  }, __jsx("a", {
    className: "jsx-2248715913" + " " + "article-preview-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 142
    }
  }, article.author.name))), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, __jsx("picture", {
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, __jsx("source", {
    srcSet: article.full_thumbnail,
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 33
    }
  }), __jsx("source", {
    srcSet: "/img/nexus-fallback.webp",
    type: "image/webp",
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }), __jsx("img", {
    alt: "thumbnail",
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '.4rem',
      fontSize: '.9rem'
    },
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "jsx-2248715913",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, article.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-2248715913" + " " + "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 72
    }
  }, "read more"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2248715913",
    __self: this
  }, "ul.jsx-2248715913{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;position:relative;}li.jsx-2248715913:nth-child(1)::before{content:'';position:absolute;height:515px;width:1px;background-color:#ddd;right:-.4rem;top:.5rem;}li.jsx-2248715913{margin:1rem;position:relative;}li.jsx-2248715913:nth-child(1)::after,li.jsx-2248715913:nth-child(2)::after{position:absolute;content:'';height:1px;width:99%;left:0;bottom:-1.2rem;background-color:#ddd;}label.jsx-2248715913{margin-left:1rem;position:relative;font-size:1.75rem;padding:4px 0;display:block;font-weight:600;}label.jsx-2248715913::before,label.jsx-2248715913::after{position:absolute;content:'';height:2px;width:100%;background-color:var(--theme-gold);left:-.65rem;}label.jsx-2248715913::before{top:0;}label.jsx-2248715913::after{bottom:0;}.article-preview-title.jsx-2248715913{color:black;}.article-preview-author.jsx-2248715913{color:gray;font-style:italic;}img.jsx-2248715913{height:6.25rem;width:7.75rem;object-fit:cover;}a.jsx-2248715913:hover{color:var(--link-hover);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcQ2F0ZWdvcnlQcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHa0MsQUFNRixBQVVDLEFBTU0sQUFVRCxBQVVDLEFBU1osQUFJRyxBQUlHLEFBSUQsQUFLSSxBQU1TLE1BdEI1QixHQUlBLEVBakRzQixBQXlEQSxDQS9DQSxBQTJDdEIsR0FTa0IsRUFwQ0ksQ0FWUCxBQW9CQSxNQWdDZixLQW5FaUIsQUFnQkYsQUFvQkEsQUFxQmYsQUFLcUIsQ0FwRHJCLEtBZ0JzQixLQVRSLEFBb0JDLEVBcENELElBOERkLElBN0NXLENBb0I0QixDQXBDYixDQXlCUixJQVJDLFVBU0QsS0FSUSxFQTNCQSxBQVVULE9BMEJHLEtBVUgsQ0FuQ0gsT0FpQmQsR0FoQkEsQUF5QkEsRUFVQSxxREE5Q3NCLGtCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXG5pY2hvXFxDb2RlXFxQb3J0Zm9saW9cXG1vY2tfbmV4dXNcXGNvbXBvbmVudHNcXENhdGVnb3J5UHJldmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGNvbnZlcnREYXRlLCBjb252ZXJ0VG9QYXRoIH0gZnJvbSAnLi4vRnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIENhdGVnb3J5UHJldmlldyh7IGNhdGVnb3J5OiB7IHRpdGxlLCBhcnRpY2xlcyB9IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1wcmV2aWV3XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2F0ZWdvcmllcy8ke2NvbnZlcnRUb1BhdGgodGl0bGUpfWB9PjxsYWJlbD57dGl0bGV9PC9sYWJlbD48L0xpbms+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBmb250U2l6ZTogJzEuMnJlbScgfX0+PExpbmsgaHJlZj17YC9hcnRpY2xlcy8ke2FydGljbGUuaWR9YH0+PGEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWFuZC1hdXRob3JcIj57Y29udmVydERhdGUoYXJ0aWNsZS5wdWJsaXNoX2RhdGUpfSBieSA8TGluayBocmVmPXtgL2F1dGhvcnMvJHthcnRpY2xlLmF1dGhvci5pZH1gfT48YSBjbGFzc05hbWU9XCJhcnRpY2xlLXByZXZpZXctYXV0aG9yXCI+e2FydGljbGUuYXV0aG9yLm5hbWV9PC9hPjwvTGluaz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyY1NldD17YXJ0aWNsZS5mdWxsX3RodW1ibmFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyY1NldD1cIi9pbWcvbmV4dXMtZmFsbGJhY2sud2VicFwiIHR5cGU9XCJpbWFnZS93ZWJwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkxlZnQ6ICcuNHJlbScsIGZvbnRTaXplOiAnLjlyZW0nIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGVzLyR7YXJ0aWNsZS5pZH1gfT48YSBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5yZWFkIG1vcmU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaTpudGgtY2hpbGQoMSk6OmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgbGk6bnRoLWNoaWxkKDIpOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IC0xLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS1nb2xkKTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtLjY1cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxhYmVsOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYXJ0aWNsZS1wcmV2aWV3LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFydGljbGUtcHJldmlldy1hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNi4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluay1ob3Zlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlQcmV2aWV3Il19 */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\CategoryPreview.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (CategoryPreview);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Footer({
  footerData,
  toggleShowBottomAdListener
}) {
  if (footerData) {
    var {
      page,
      highestPage,
      route
    } = footerData,
        pageNav = [];

    for (let i = page > 5 ? page - 4 : 1; i <= page + 4 && i <= highestPage; i++) {
      pageNav.push(i);
    }
  }

  return __jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_3__["Waypoint"], {
    onEnter: toggleShowBottomAdListener,
    onLeave: toggleShowBottomAdListener,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4130284784" + " " + "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, page > 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 86
    }
  }, __jsx("a", {
    style: {
      fontSize: '1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 105
    }
  }, "\xAB First"))), __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: page === 2 ? route : route + `/page/${page - 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 86
    }
  }, __jsx("a", {
    style: {
      fontSize: '1rem',
      margin: '0 .25rem 0 .5rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 146
    }
  }, "\u2039 Prev")))))), __jsx("li", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }, footerData && footerData.highestPage > 1 && pageNav.map((pageNum, i) => __jsx("li", {
    key: i,
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 57
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + (pageNum === 1 ? '' : `/page/${pageNum}`),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 69
    }
  }, __jsx("a", {
    style: {
      margin: '0 .15rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 134
    }
  }, pageNum === page ? __jsx("strong", {
    style: {
      color: 'black',
      fontSize: '1.3rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 188
    }
  }, pageNum) : pageNum)))))), __jsx("li", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, page < highestPage && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + `/page/${page + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 90
    }
  }, __jsx("a", {
    style: {
      fontSize: '1rem',
      margin: '0 .5rem 0 .25rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 129
    }
  }, "Next \u203A"))), __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + `/page/${highestPage}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 90
    }
  }, __jsx("a", {
    style: {
      fontSize: '1rem'
    },
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 134
    }
  }, "Last \xBB"))))))), __jsx("ul", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, [['Home', '/'], ['About', '/about'], ['Join Us', '/about/join'], ['Staff/Contact', '/about/staff-contact'], ['Legal Notices', '/about/legal-notices'], ['FAQ', '/about/faq'], ['Advertising', '/about/advertising']].map(([title, route], i) => __jsx("li", {
    key: i,
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 50
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 62
    }
  }, __jsx("a", {
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 81
    }
  }, title))))), __jsx("img", {
    src: "https://pixel.wp.com/g.gif?v=ext&j=1%3A8.1.1&blog=32043259&post=0&tz=-7&srv=dailynexus.com&host=dailynexus.com&ref=https%3A%2F%2Fdailynexus.com%2Faboutcontact%2F&fcp=0&rand=0.4052728025036777",
    alt: "smile!",
    className: "jsx-4130284784",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4130284784",
    __self: this
  }, ".footer.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1.5rem;}a.jsx-4130284784{color:black;}ul.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-4130284784:nth-child(1) li.jsx-4130284784 ul.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}ul.jsx-4130284784:nth-child(1){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul.jsx-4130284784:nth-child(1) a.jsx-4130284784{color:var(--link-hover);font-size:1.1rem;}ul.jsx-4130284784:nth-child(2){border:1px solid #ddd;padding:.5rem .075rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:.75rem 0 .85rem 0;}ul.jsx-4130284784:nth-child(2) li.jsx-4130284784{margin:0 1.25rem;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdENEIsQUFHc0MsQUFRRCxBQUlDLEFBSUEsQUFLQSxBQUlXLEFBS0YsQUFRTCxZQTdCckIsS0E4QnFCLEtBUkssRUFMTCxVQWNyQixPQWJBLEdBS2lCLDhCQS9CUyxBQVkxQixBQUl5QixBQUt6Qiw0Q0FXaUMsa0NBL0JOLHVCQWdCM0Isa0VBZ0I2QixVQS9CTixlQWdDdkIsOEVBL0JzQixrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcQ29kZVxcUG9ydGZvbGlvXFxtb2NrX25leHVzXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBXYXlwb2ludCB9IGZyb20gJ3JlYWN0LXdheXBvaW50JztcclxuXHJcbmZ1bmN0aW9uIEZvb3Rlcih7IGZvb3RlckRhdGEsIHRvZ2dsZVNob3dCb3R0b21BZExpc3RlbmVyIH0pIHtcclxuICAgIGlmIChmb290ZXJEYXRhKSB7XHJcbiAgICAgICAgdmFyIHsgcGFnZSwgaGlnaGVzdFBhZ2UsIHJvdXRlIH0gPSBmb290ZXJEYXRhLFxyXG4gICAgICAgICAgICBwYWdlTmF2ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhZ2UgPiA1ID8gcGFnZSAtIDQgOiAxOyAoKGkgPD0gcGFnZSArIDQpICYmIGkgPD0gaGlnaGVzdFBhZ2UpOyBpKyspIHtcclxuICAgICAgICAgICAgcGFnZU5hdi5wdXNoKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFdheXBvaW50IG9uRW50ZXI9e3RvZ2dsZVNob3dCb3R0b21BZExpc3RlbmVyfSBvbkxlYXZlPXt0b2dnbGVTaG93Qm90dG9tQWRMaXN0ZW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlID4gMSAmJiA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGFsaWduU2VsZjogJ2NlbnRlcicsIHBhZGRpbmdUb3A6ICcuMXJlbScgfX0+PExpbmsgaHJlZj17cm91dGV9PjxhIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0+wqsgRmlyc3Q8L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJy4xcmVtJyB9fT48TGluayBocmVmPXtwYWdlID09PSAyID8gcm91dGUgOiByb3V0ZSArIGAvcGFnZS8ke3BhZ2UtMX1gfT48YSBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBtYXJnaW46ICcwIC4yNXJlbSAwIC41cmVtJyB9fT7igLkgUHJldjwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyRGF0YSAmJiBmb290ZXJEYXRhLmhpZ2hlc3RQYWdlID4gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hdi5tYXAoKHBhZ2VOdW0sIGkpID0+IDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e3JvdXRlICsgKChwYWdlTnVtID09PSAxKSA/ICcnIDogYC9wYWdlLyR7cGFnZU51bX1gKX0+PGEgc3R5bGU9e3sgbWFyZ2luOiAnMCAuMTVyZW0nIH19PntwYWdlTnVtID09PSBwYWdlID8gPHN0cm9uZyBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgZm9udFNpemU6ICcxLjNyZW0nIH19PntwYWdlTnVtfTwvc3Ryb25nPiA6IHBhZ2VOdW19PC9hPjwvTGluaz48L2xpPil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwYWdlIDwgaGlnaGVzdFBhZ2UgJiYgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJy4xcmVtJyB9fT48TGluayBocmVmPXtyb3V0ZSArIGAvcGFnZS8ke3BhZ2UrMX1gfT48YSBzdHlsZT17eyBmb250U2l6ZTogJzFyZW0nLCBtYXJnaW46ICcwIC41cmVtIDAgLjI1cmVtJyB9fT5OZXh0IOKAujwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywgcGFkZGluZ1RvcDogJy4xcmVtJyB9fT48TGluayBocmVmPXtyb3V0ZSArIGAvcGFnZS8ke2hpZ2hlc3RQYWdlfWB9PjxhIHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScgfX0+TGFzdCDCuzwvYT48L0xpbms+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ0hvbWUnLCAnLyddLCBbJ0Fib3V0JywgJy9hYm91dCddLCBbJ0pvaW4gVXMnLCAnL2Fib3V0L2pvaW4nXSwgWydTdGFmZi9Db250YWN0JywgJy9hYm91dC9zdGFmZi1jb250YWN0J10sIFsnTGVnYWwgTm90aWNlcycsICcvYWJvdXQvbGVnYWwtbm90aWNlcyddLCBbJ0ZBUScsICcvYWJvdXQvZmFxJ10sIFsnQWR2ZXJ0aXNpbmcnLCAnL2Fib3V0L2FkdmVydGlzaW5nJ11cclxuICAgICAgICAgICAgICAgICAgICBdLm1hcCgoW3RpdGxlLCByb3V0ZV0sIGkpID0+IDxsaSBrZXk9e2l9PjxMaW5rIGhyZWY9e3JvdXRlfT48YT57dGl0bGV9PC9hPjwvTGluaz48L2xpPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3BpeGVsLndwLmNvbS9nLmdpZj92PWV4dCZqPTElM0E4LjEuMSZibG9nPTMyMDQzMjU5JnBvc3Q9MCZ0ej0tNyZzcnY9ZGFpbHluZXh1cy5jb20maG9zdD1kYWlseW5leHVzLmNvbSZyZWY9aHR0cHMlM0ElMkYlMkZkYWlseW5leHVzLmNvbSUyRmFib3V0Y29udGFjdCUyRiZmY3A9MCZyYW5kPTAuNDA1MjcyODAyNTAzNjc3N1wiIGFsdD1cInNtaWxlIVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWw6bnRoLWNoaWxkKDEpIGxpIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWw6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVsOm50aC1jaGlsZCgxKSBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmstaG92ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHVsOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtIC4wNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC43NXJlbSAwIC44NXJlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWw6bnRoLWNoaWxkKDIpIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9XYXlwb2ludD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\Footer.js */")));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Header() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1075104282" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1075104282" + " " + "full-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 40
    }
  }, __jsx("a", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 55
    }
  }, "MOCK ", __jsx("img", {
    src: "/img/nexus-logo.png",
    alt: "logo",
    className: "jsx-1075104282" + " " + "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 63
    }
  }), " NEXUS "))), __jsx("div", {
    className: "jsx-1075104282" + " " + "under-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, new Date().toLocaleDateString('default', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })), __jsx("div", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "UNIVERSITY OF CALIFORNIA, SANTA BARBARA"), __jsx("span", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://facebook.com/dailynexus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 66
    }
  }, __jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-facebook-square",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 69
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://twitter.com/dailynexus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 65
    }
  }, __jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 68
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://instagram.com/dailynexus",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-1075104282",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 67
    }
  }, __jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 70
    }
  }))))), __jsx(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1075104282",
    __self: this
  }, "*.jsx-1075104282{font-family:Lato,sans-serif;}.logo.jsx-1075104282{width:5.5rem;height:6.5rem;-webkit-transform:translateY(1.55rem);-ms-transform:translateY(1.55rem);transform:translateY(1.55rem);}.full-logo.jsx-1075104282{text-align:center;}.full-logo.jsx-1075104282 a.jsx-1075104282{font-size:4.5rem;font-family:Times New Roman;color:black;}.under-logo.jsx-1075104282{position:relative;text-align:center;font-size:.825rem;padding:4px;}.under-logo.jsx-1075104282 span.jsx-1075104282{position:absolute;}.under-logo.jsx-1075104282 span.jsx-1075104282:nth-child(1){left:5px;}.under-logo.jsx-1075104282 span.jsx-1075104282:nth-child(3){right:8px;top:4px;}.under-logo.jsx-1075104282::before,.under-logo.jsx-1075104282::after{width:100%;content:'';position:absolute;left:0;}.under-logo.jsx-1075104282::before{background-color:var(--theme-blue);height:1px;top:0;}.under-logo.jsx-1075104282::after{height:3px;bottom:0;background-color:var(--theme-gold);}i.jsx-1075104282{font-size:1rem;margin-left:.5rem;color:gray;-webkit-transition:color 200ms ease-in;transition:color 200ms ease-in;cursor:pointer;}i.jsx-1075104282:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHOEMsQUFJaEIsQUFNSyxBQUlELEFBTUMsQUFPQSxBQUlULEFBSUMsQUFNQyxBQU93QixBQU14QixBQU1JLEFBUUgsU0FwQ2hCLENBSVksQ0FNRyxBQWFGLENBY2IsQ0FoRWtCLEVBd0RJLEVBOUNVLENBSmhDLEFBVXNCLEFBT3RCLEFBU0EsRUFtQnVDLEVBYmpCLEtBckNZLENBTGxDLEtBNkRlLEVBYkEsQ0EzQk8sSUFzQlgsSUFtQndCLENBL0NuQixDQWtDTixDQUxWLEtBTUEsRUE1QmdCLENBa0NoQixFQXhDQSxTQU9BLGdEQXdDbUIsZUF6RG5CLEFBMERBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdWxsLWxvZ29cIj48TGluayBocmVmPVwiL1wiPjxhPk1PQ0sgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2ltZy9uZXh1cy1sb2dvLnBuZ1wiIGFsdD1cImxvZ29cIiAvPiBORVhVUyA8L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuZGVyLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygnZGVmYXVsdCcsIHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+VU5JVkVSU0lUWSBPRiBDQUxJRk9STklBLCBTQU5UQSBCQVJCQVJBPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5jb20vZGFpbHluZXh1c1wiPjxhPjxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1zcXVhcmVcIj48L2k+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9kYWlseW5leHVzXCI+PGE+PGkgY2xhc3NOYW1lPVwiZmFiIGZhLXR3aXR0ZXJcIj48L2k+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9pbnN0YWdyYW0uY29tL2RhaWx5bmV4dXNcIj48YT48aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNS41cmVtO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2LjVyZW07XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS41NXJlbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5mdWxsLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZnVsbC1sb2dvIGEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVGltZXMgTmV3IFJvbWFuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXItbG9nbyB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44MjVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlci1sb2dvIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXItbG9nbyBzcGFuOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlci1sb2dvIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVuZGVyLWxvZ286OmJlZm9yZSxcclxuICAgICAgICAgICAgLnVuZGVyLWxvZ286OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudW5kZXItbG9nbzo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWJsdWUpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC51bmRlci1sb2dvOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLWdvbGQpOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjVyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\Header.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Headlines.js":
/*!*********************************!*\
  !*** ./components/Headlines.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Functions */ "./Functions.js");
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\Headlines.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Headlines({
  articles
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1153983744" + " " + "headlines",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("ul", {
    className: "jsx-1153983744" + " " + "main-headline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${articles[0].id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: articles[0].full_thumbnail,
    alt: "headline",
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-1153983744" + " " + "category-and-date",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx("span", {
    className: "jsx-1153983744" + " " + "article-preview-category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 56
    }
  }, articles[0].category, " |"), " ", Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertDate"])(articles[0].publish_date)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${articles[0].id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "article-preview-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 64
    }
  }, articles[0].title)), __jsx("div", {
    className: "jsx-1153983744" + " " + "date-and-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/authors/${articles[0].author.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 57
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "article-preview-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 106
    }
  }, articles[0].author.name))), __jsx("div", {
    className: "jsx-1153983744" + " " + "article-preview-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, articles[0].description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${articles[0].id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 64
    }
  }, "read more"))), __jsx("li", {
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, articles.slice(1, 4).map((article, i) => __jsx("li", {
    key: i + 1,
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "jsx-1153983744",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, __jsx("span", {
    className: "jsx-1153983744" + " " + "article-preview-category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 38
    }
  }, article.category, " |"), " ", Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertDate"])(article.publish_date)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "article-preview-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 72
    }
  }, article.title)), __jsx("div", {
    className: "jsx-1153983744" + " " + "date-and-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/authors/${article.author.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 69
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "article-preview-author",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 114
    }
  }, article.author.name))), __jsx("div", {
    className: "jsx-1153983744" + " " + "article-preview-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, article.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1153983744" + " " + "read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 72
    }
  }, "read more")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1153983744",
    __self: this
  }, ".headlines.jsx-1153983744{margin-bottom:3.5rem;}ul.jsx-1153983744{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}li.jsx-1153983744 ul.jsx-1153983744{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}li.jsx-1153983744{margin:.5rem;position:relative;font-size:.9rem;}li.jsx-1153983744 div.jsx-1153983744:nth-child(1){margin-bottom:3px;}li.jsx-1153983744 ul.jsx-1153983744 li.jsx-1153983744:nth-child(1)::before,li.jsx-1153983744 ul.jsx-1153983744 li.jsx-1153983744:nth-child(2)::before{content:'';height:1px;width:99%;left:0;bottom:-.5rem;background-color:#ddd;position:absolute;}.category-and-date.jsx-1153983744{margin-top:5px;margin-bottom:3px;}.article-preview-title.jsx-1153983744{color:black;font-weight:bold;font-size:1.275rem;}.article-preview-title.jsx-1153983744:hover,.article-preview-author.jsx-1153983744:hover{color:var(--link-hover);}.article-preview-author.jsx-1153983744{color:gray;font-style:italic;}.article-preview-category.jsx-1153983744{font-weight:bold;font-size:14px;text-transform:uppercase;}.date-and-author.jsx-1153983744{margin-top:2px;margin-bottom:7px;}.article-preview-description.jsx-1153983744{margin-bottom:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcSGVhZGxpbmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDb0IsQUFHc0MsQUFHUixBQUlTLEFBSVQsQUFNSyxBQUtQLEFBVUksQUFLSCxBQU9ZLEFBSWIsQUFLTSxBQU1GLEFBS0csV0F6Q1AsQUEwQk8sQ0FYRCxDQTFCQyxFQXFCQSxBQTJCQSxFQU5ILENBcENuQixBQStDQSxHQWhFQSxDQXVCYyxFQXFCZCxLQU51QixBQVd2QixFQXJDb0IsQ0FZVCxBQThCa0IsQ0FyQjdCLEFBMkJBLE1BbkNrQixRQVpsQixDQTBCQSxLQWIwQixJQTZCMUIsaUJBcERBLENBd0JzQixHQXBCdEIsZUFxQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcQ29kZVxcUG9ydGZvbGlvXFxtb2NrX25leHVzXFxjb21wb25lbnRzXFxIZWFkbGluZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBjb252ZXJ0RGF0ZSB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBIZWFkbGluZXMoeyBhcnRpY2xlcyB9KSB7XHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkbGluZXNcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1haW4taGVhZGxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGVzLyR7YXJ0aWNsZXNbMF0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlc1swXS5mdWxsX3RodW1ibmFpbH0gYWx0PVwiaGVhZGxpbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWFuZC1kYXRlXCI+PHNwYW4gY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LWNhdGVnb3J5XCI+e2FydGljbGVzWzBdLmNhdGVnb3J5fSB8PC9zcGFuPiB7Y29udmVydERhdGUoYXJ0aWNsZXNbMF0ucHVibGlzaF9kYXRlKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGVzLyR7YXJ0aWNsZXNbMF0uaWR9YH0+PGEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LXRpdGxlXCI+e2FydGljbGVzWzBdLnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlLWFuZC1hdXRob3JcIj5ieSA8TGluayBocmVmPXtgL2F1dGhvcnMvJHthcnRpY2xlc1swXS5hdXRob3IuaWR9YH0+PGEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LWF1dGhvclwiPnthcnRpY2xlc1swXS5hdXRob3IubmFtZX08L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LWRlc2NyaXB0aW9uXCI+e2FydGljbGVzWzBdLmRlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZXMvJHthcnRpY2xlc1swXS5pZH1gfT48YSBjbGFzc05hbWU9XCJyZWFkLW1vcmVcIj5yZWFkIG1vcmU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5zbGljZSgxLCA0KS5tYXAoKGFydGljbGUsIGkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpKzF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LWNhdGVnb3J5XCI+e2FydGljbGUuY2F0ZWdvcnl9IHw8L3NwYW4+IHtjb252ZXJ0RGF0ZShhcnRpY2xlLnB1Ymxpc2hfZGF0ZSl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcnRpY2xlcy8ke2FydGljbGUuaWR9YH0+PGEgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LXRpdGxlXCI+e2FydGljbGUudGl0bGV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGUtYW5kLWF1dGhvclwiPmJ5IDxMaW5rIGhyZWY9e2AvYXV0aG9ycy8ke2FydGljbGUuYXV0aG9yLmlkfWB9PjxhIGNsYXNzTmFtZT1cImFydGljbGUtcHJldmlldy1hdXRob3JcIj57YXJ0aWNsZS5hdXRob3IubmFtZX08L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3LWRlc2NyaXB0aW9uXCI+e2FydGljbGUuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcnRpY2xlcy8ke2FydGljbGUuaWR9YH0+PGEgY2xhc3NOYW1lPVwicmVhZC1tb3JlXCI+cmVhZCBtb3JlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmhlYWRsaW5lcyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkgdWwge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaSB1bCBsaTpudGgtY2hpbGQoMSk6OmJlZm9yZSxcclxuICAgICAgICAgICAgbGkgdWwgbGk6bnRoLWNoaWxkKDIpOjpiZWZvcmUgeyBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTklO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogLS41cmVtO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNhdGVnb3J5LWFuZC1kYXRlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFydGljbGUtcHJldmlldy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hcnRpY2xlLXByZXZpZXctdGl0bGU6aG92ZXIsXHJcbiAgICAgICAgICAgIC5hcnRpY2xlLXByZXZpZXctYXV0aG9yOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saW5rLWhvdmVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFydGljbGUtcHJldmlldy1hdXRob3Ige1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hcnRpY2xlLXByZXZpZXctY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGF0ZS1hbmQtYXV0aG9yIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFydGljbGUtcHJldmlldy1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRsaW5lcyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\Headlines.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Headlines);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Functions */ "./Functions.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const categories = [{
  "title": "Artsweek",
  "subcategories": ["Feature", "Film and TV", "Literature", "Music", "Performing Art", "Previews: What's Going On", "Visual Art"]
}, {
  "title": "Labyrinth",
  "link": "/categories/labyrinth"
}, {
  "title": "Multimedia",
  "subcategories": ["Comics", "Photo", "Video"]
}, {
  "title": "News",
  "subcategories": ["Campus", "County", "Crime", "Feature", "Isla Vista", "Student Gov", "UC News", "UCSB COLA Movement"]
}, {
  "title": "Nexustentialism",
  "link": "/categories/nexustentialism"
}, {
  "title": "On the Menu",
  "subcategories": ["Coffee Column", "First Bites", "Meal Prep Mondays", "On the Road", "Recipes", "The Beet"]
}, {
  "title": "Opinion",
  "subcategories": ["Argument in the Office", "Ask AJ", "Flesh Prison", "Global Gauchos", "Hyphenated American", "Letters to the Editor", "Living", "Politics", "Therapeutic Thoughts", "Virtual Reality", "Wednesday Hump"]
}, {
  "title": "Science & Tech",
  "subcategories": ["Health & Wellness"]
}, {
  "title": "Sports",
  "subcategories": ["Baseball", "Basketball", "Columns/Features", "Cross Country", "Golf", "Soccer", "Softball",
  /*"Sports Blogs",*/
  "Swim and Dive", "Tennis", "Track and Field", "Volleyball", "Water Polo"]
}];

function Nav() {
  const {
    0: searchResults,
    1: setSearchResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([[], []]);
  const {
    0: searchError,
    1: setSearchError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: queryTime,
    1: setQueryTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: sortBy,
    1: setSortBy
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: loadingSearchResults,
    1: setLoadingSearchResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: modalPage,
    1: setModalPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);
  const {
    0: modalPageSet,
    1: setModalPageSet
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const timeouts = [];
  return __jsx("div", {
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-87696297" + " " + "nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, [...categories, {
    title: 'About',
    subcategories: [{
      Advertising: 'advertising'
    }, {
      Classifieds: 'classified-ads'
    }, {
      Donate: 'donate'
    }, {
      FAQ: 'faq'
    }, {
      "Staff/Contact": 'staff-contact'
    }]
  }].map((category, i) => __jsx("li", {
    key: i,
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, category.subcategories ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/categories/${category.title.toLowerCase().replace(/ /g, '-')}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, __jsx("a", {
    onMouseOver: e => {
      timeouts[i] && clearTimeout(timeouts[i]);
      let {
        style
      } = e.currentTarget.parentElement.children[1];
      style.opacity = 1;
      style.pointerEvents = 'auto';
    },
    onMouseOut: e => {
      let {
        style
      } = e.currentTarget.parentElement.children[1];
      timeouts[i] = setTimeout(_ => {
        style.opacity = 0;
        style.pointerEvents = 'none';
      }, 0);
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 103
    }
  }, category.title)), __jsx("ul", {
    onMouseMove: _ => timeouts[i] && clearTimeout(timeouts[i]),
    onMouseOut: e => {
      let {
        style
      } = e.currentTarget;
      timeouts[i] = setTimeout(_ => {
        style.opacity = 0;
        style.pointerEvents = 'none';
      }, 0);
    },
    className: "jsx-87696297" + " " + "nav-subcategories",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, category.subcategories.map((subcategory, j) => __jsx("li", {
    key: j,
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: category.title !== 'About' ? `/categories/${Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertToPath"])(category.title)}/${Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertToPath"])(subcategory)}` : `/about/${Object.values(subcategory)[0]}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 45
    }
  }, __jsx("a", {
    className: "jsx-87696297" + " " + "subcategory-link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 208
    }
  }, category.title !== 'About' ? subcategory : Object.keys(subcategory)[0])))))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: category.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 27
    }
  }, __jsx("a", {
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 54
    }
  }, category.title)))), __jsx("li", {
    key: "-2",
    style: {
      position: 'relative',
      textTransform: 'none'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("i", {
    onClick: e => {
      let {
        style
      } = e.currentTarget.parentElement.children[1];
      style.display = style.display === 'none' ? 'block' : 'none';
    },
    className: "jsx-87696297" + " " + "search fas fa-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Looking for something?",
    style: {
      display: 'none',
      position: 'absolute',
      right: '150%',
      top: '-15%',
      padding: '.2rem .4rem'
    },
    onKeyDown: e => {
      e.persist();
      e.keyCode === 13 && (_ => {
        let now = Date.now();
        setLoadingSearchResults(true);
        fetch('http://localhost:3000/api/search?value=' + e.target.value).then(res => res.json()).then(rows => setSearchResults([rows, [...rows].sort(({
          publish_date: a
        }, {
          publish_date: b
        }) => new Date(b) - new Date(a))]) || setLoadingSearchResults(false) || setQueryTime(((Date.now() - now) / 1000).toFixed(2))).catch(e => console.log(e) || setSearchError('Error fetching results'));
        let {
          style
        } = document.getElementsByClassName('search-results')[0];
        document.getElementsByClassName('modal-open')[0].style.opacity = '.75';
        document.getElementsByClassName('modal-open')[0].style.pointerEvents = 'auto';
        document.body.style.overflow = 'hidden';
        style.pointerEvents = 'auto';
        style.opacity = 1;
        e.target.value = '';
      })();
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "jsx-87696297" + " " + "search-results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: e => {
      let {
        style
      } = document.getElementsByClassName('search-results')[0];
      style.opacity = 0;
      style.pointerEvents = 'none';
      document.getElementsByClassName('modal-open')[0].style.opacity = 0;
      document.getElementsByClassName('modal-open')[0].style.pointerEvents = 'none';
      document.body.style.overflow = 'visible';
      setSearchResults([[], []]);
      setSearchError(null);
      setModalPage(1);
      setModalPageSet(0);
      setSortBy(0);
      setQueryTime(0);
      e.target.parentElement.children[2].children[1].children[1].selectedIndex = 0;
    },
    className: "jsx-87696297" + " " + "search-results-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "x"), __jsx("div", {
    style: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }, searchError), __jsx("div", {
    className: "jsx-87696297" + " " + "search-results-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("span", {
    style: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '.85rem'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, !loadingSearchResults ? `${searchResults[0].length} result${searchResults[0].length === 1 ? '' : 's'} (${queryTime} second${queryTime === 1 ? '' : 's'})` : 'Loading articles...'), __jsx("span", {
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("span", {
    style: {
      fontSize: '.85rem',
      marginRight: '.25rem'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, "Sort by: "), __jsx("select", {
    onChange: e => console.log(e.target.selectedIndex) || setSortBy(e.target.selectedIndex),
    style: {
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, __jsx("option", {
    key: "0",
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  }, "Relevance"), __jsx("option", {
    key: "1",
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 25
    }
  }, "Date")))), __jsx("ul", {
    style: {
      position: 'relative',
      maxHeight: 'calc(100% - 2.25rem - 1.13px - 1.5rem - 2.25rem)',
      overflowY: 'auto'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, searchResults[sortBy].slice((modalPage - 1) * 10, modalPage * 10).map((result, i) => __jsx("li", {
    key: i,
    style: {
      marginBottom: '.5rem'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    }
  }, __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: '/articles/' + result.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 77
    }
  }, __jsx("a", {
    style: {
      color: '#0000CC',
      fontSize: '1rem',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 113
    }
  }, result.title))), __jsx("div", {
    style: {
      color: '#008000',
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif',
      margin: '.2rem 0'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    }
  }, `http://localhost:3000/articles/${result.id}`), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `http://localhost:3000/articles/${result.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 88
    }
  }, __jsx("picture", {
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 91
    }
  }, __jsx("source", {
    srcSet: result.mobile_thumbnail,
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 33
    }
  }), __jsx("source", {
    srcSet: '/img/nexus-fallback.webp',
    type: "image/webp",
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }), __jsx("img", {
    alt: "thumbnail",
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 33
    }
  })))), __jsx("span", {
    style: {
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif',
      margin: '0 .5rem'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    }
  }, __jsx("span", {
    style: {
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 33
    }
  }, Object(_Functions__WEBPACK_IMPORTED_MODULE_3__["convertDate"])(result.publish_date), " ... "), result.description && result.description.slice(0, 300) + (result.description.length > 300 ? '...' : '')))))), __jsx("ul", {
    style: {
      marginTop: '1.25rem',
      display: 'flex',
      width: '100%',
      overflowX: 'auto',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, modalPageSet > 0 && __jsx("li", {
    key: "-1",
    onClick: _ => setModalPageSet(modalPageSet - 1),
    onMouseOver: e => {
      e.target.style.textDecoration = 'underline';
    },
    onMouseOut: e => {
      e.target.style.textDecoration = 'none';
    },
    style: {
      color: '#c0c0c0',
      margin: '0 .25rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, "..."), new Array(Math.min(25, Math.ceil(searchResults[0].length / 10) - 25 * modalPageSet)).fill(true).map((_, i) => {
    let page = modalPageSet * 25 + i + 1;
    return __jsx("li", {
      key: i,
      onClick: _ => setModalPage(page),
      onMouseOver: e => {
        e.target.style.textDecoration = 'underline';
      },
      onMouseOut: e => {
        e.target.style.textDecoration = 'none';
      },
      style: {
        color: modalPage === page ? '#666' : '#c0c0c0',
        margin: '0 .25rem',
        cursor: 'pointer',
        fontSize: modalPage === page ? '.95rem' : '.8rem',
        display: 'flex',
        alignItems: 'flex-end',
        fontFamily: 'Arial, sans-serif'
      },
      className: "jsx-87696297",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 25
      }
    }, page);
  }), Math.ceil(searchResults[0].length / 10) - 25 * modalPageSet > 25 && __jsx("li", {
    key: "25",
    onClick: _ => setModalPageSet(modalPageSet + 1),
    onMouseOver: e => {
      e.target.style.textDecoration = 'underline';
    },
    onMouseOut: e => {
      e.target.style.textDecoration = 'none';
    },
    style: {
      color: '#c0c0c0',
      margin: '0 .25rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'flex-end',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }, "..."))), __jsx("div", {
    className: "jsx-87696297" + " " + "modal-open",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "87696297",
    __self: this
  }, ".nav.jsx-87696297{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;text-transform:uppercase;}.nav.jsx-87696297 li.jsx-87696297{position:relative;}.nav.jsx-87696297 li.jsx-87696297:hover ul.jsx-87696297{max-height:1000px;}a.jsx-87696297{color:black;font-family:Lato,sans-serif;}a.jsx-87696297:hover{color:var(--link-hover);}.nav-subcategories.jsx-87696297{padding:1.25rem .6rem .5rem .6rem;font-weight:300;background-color:#fff;opacity:0;pointer-events:none;position:absolute;top:85%;-webkit-transition:opacity 250ms ease-in;transition:opacity 250ms ease-in;font-size:15px;z-index:5;}.nav-subcategories.jsx-87696297 li.jsx-87696297{margin-top:7px;cursor:pointer;}.nav-subcategories.jsx-87696297 li.jsx-87696297:nth-child(1){margin-top:0;}.nav-subcategories.jsx-87696297 li.jsx-87696297:hover{color:var(--link-hover);}.subcategory-link.jsx-87696297{color:black;}.subcategory-link.jsx-87696297:hover{color:var(--link-hover);}.search.jsx-87696297{cursor:pointer;}.search-results.jsx-87696297{font-family:Arial,sans-serif;font-size:.8rem;width:75vw;height:calc(100vh - 3rem - 7rem - 1.75rem);position:fixed;top:3rem;left:12.5vw;background-color:#fff;padding:2.25rem 2.25rem .5rem 2.25rem;z-Index:10;opacity:0;pointer-events:none;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in;box-shadow:0 0 6px 3px #ccc;}.search-results.jsx-87696297 img.jsx-87696297{border:1px solid #e2e2e2;width:65px;height:65px;object-fit:fill;cursor:pointer;}.search-results-button.jsx-87696297{background-color:coral;cursor:pointer;border:1px solid #aaa;color:white;font-size:.75rem;padding:0 .25rem;position:absolute;top:5px;right:5px;}.search-results.jsx-87696297 select.jsx-87696297{background-color:whiteSmoke;background-image:linear-gradient(top,whiteSmoke,#f1f1f1);border:1px solid rgba(0,0,0,0.1);border-radius:2px;box-shadow:0 1px 1px rgba(0,0,0,0.1);color:#444;cursor:default;font-size:11px;font-weight:bold;height:27px;line-height:27px;max-width:90%;min-width:54px;outline:0;padding:0 28px 0 6px;position:relative;text-align:center;}.search-results.jsx-87696297 option.jsx-87696297{color:#777;font-family:Arial,sans-serif;}.modal-open.jsx-87696297{position:fixed;background-color:#fff;top:0;left:0;width:100vw;height:100vh;opacity:0;pointer-events:none;z-index:9;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in;}.search-results-header.jsx-87696297{position:relative;margin-bottom:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#676767;fontSize:13px;padding:4px;}.search-results-header.jsx-87696297::after{content:'';background-color:#e8e8e8;width:100%;height:1px;position:absolute;left:0;bottom:-.7rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJKb0IsQUFHOEIsQUFRSyxBQUlBLEFBSU4sQUFLWSxBQUlVLEFBYW5CLEFBS0YsQUFJVyxBQUlaLEFBSVksQUFJVCxBQUllLEFBaUJMLEFBUUYsQUFZSyxBQW9CakIsQUFLSSxBQWFHLEFBVVAsV0EzQm1CLEFBNEJMLENBcElJLEFBbUNqQyxDQVJBLEVBTG1CLEFBcUJuQixBQWtFMEIsR0FySDFCLEFBSUEsQUE4SHlCLEtBbEROLENBbkVuQixBQTBCQSxBQVFBLENBeUJlLEdBb0JnRCxDQXJDM0MsQ0F4QnBCLElBZG9CLEVBd0RKLEFBb0VELENBdkJMLENBckNnQixDQWtEVCxDQTFIakIsQUF3R0EsR0FNVyxFQS9ESSxFQXNGQSxDQXBFSyxFQXhETSxBQXNHVixNQS9EK0IsRUFzRnpCLEVBN0ROLEVBdUNDLEVBOUNFLFFBeERMLEFBZ0VPLEVBM0ZZLENBa0luQixDQXNCSCxHQXBFWCxHQXhEd0IsQ0E2SE4sRUFwRHNCLEFBOEJoQixJQXZDSCxRQThEckIsRUF4Rm1CLEdBckNHLEdBdUdSLENBdkNRLE9BK0NZLENBekVyQixDQWtFd0IsR0EvQmYsRUF4RVYsR0FzQ0ksQ0EwQkosSUEvRHlCLElBZ0V2QixHQTFCWSxDQWtDa0IsTUFQNUMsZUExQjBDLGdCQWtDM0IsV0FDSSxLQTZCbkIsTUEvRGUsRUF0RVEsRUF5R0osR0ExRUEsSUF3Q0wsUUFtQ08sRUFsQ0csQ0F4Q1YsVUFDZCxDQTJHa0IsR0FqQ0YsS0FsQ3FCLE1Bb0VuQixDQWpDRyxhQWtDTCxJQWpDRSxRQWtDbEIsTUFqQ21CLGVBQ0wsQ0E5R0UsU0ErR1MsR0E5R0ksUUF3RUcsVUF1Q1YsT0E5R3RCLFdBd0VBLEFBdUNzQixrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcQ29kZVxcUG9ydGZvbGlvXFxtb2NrX25leHVzXFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9QYXRoLCBjb252ZXJ0RGF0ZSB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBjYXRlZ29yaWVzID0gW3tcInRpdGxlXCI6XCJBcnRzd2Vla1wiLFwic3ViY2F0ZWdvcmllc1wiOltcIkZlYXR1cmVcIixcIkZpbG0gYW5kIFRWXCIsXCJMaXRlcmF0dXJlXCIsXCJNdXNpY1wiLFwiUGVyZm9ybWluZyBBcnRcIixcIlByZXZpZXdzOiBXaGF0J3MgR29pbmcgT25cIixcIlZpc3VhbCBBcnRcIl19LHtcInRpdGxlXCI6XCJMYWJ5cmludGhcIixcImxpbmtcIjpcIi9jYXRlZ29yaWVzL2xhYnlyaW50aFwifSx7XCJ0aXRsZVwiOlwiTXVsdGltZWRpYVwiLFwic3ViY2F0ZWdvcmllc1wiOltcIkNvbWljc1wiLFwiUGhvdG9cIixcIlZpZGVvXCJdfSx7XCJ0aXRsZVwiOlwiTmV3c1wiLFwic3ViY2F0ZWdvcmllc1wiOltcIkNhbXB1c1wiLFwiQ291bnR5XCIsXCJDcmltZVwiLFwiRmVhdHVyZVwiLFwiSXNsYSBWaXN0YVwiLFwiU3R1ZGVudCBHb3ZcIixcIlVDIE5ld3NcIixcIlVDU0IgQ09MQSBNb3ZlbWVudFwiXX0se1widGl0bGVcIjpcIk5leHVzdGVudGlhbGlzbVwiLFwibGlua1wiOlwiL2NhdGVnb3JpZXMvbmV4dXN0ZW50aWFsaXNtXCJ9LHtcInRpdGxlXCI6XCJPbiB0aGUgTWVudVwiLFwic3ViY2F0ZWdvcmllc1wiOltcIkNvZmZlZSBDb2x1bW5cIixcIkZpcnN0IEJpdGVzXCIsXCJNZWFsIFByZXAgTW9uZGF5c1wiLFwiT24gdGhlIFJvYWRcIixcIlJlY2lwZXNcIixcIlRoZSBCZWV0XCJdfSx7XCJ0aXRsZVwiOlwiT3BpbmlvblwiLFwic3ViY2F0ZWdvcmllc1wiOltcIkFyZ3VtZW50IGluIHRoZSBPZmZpY2VcIixcIkFzayBBSlwiLFwiRmxlc2ggUHJpc29uXCIsXCJHbG9iYWwgR2F1Y2hvc1wiLFwiSHlwaGVuYXRlZCBBbWVyaWNhblwiLFwiTGV0dGVycyB0byB0aGUgRWRpdG9yXCIsXCJMaXZpbmdcIixcIlBvbGl0aWNzXCIsXCJUaGVyYXBldXRpYyBUaG91Z2h0c1wiLFwiVmlydHVhbCBSZWFsaXR5XCIsXCJXZWRuZXNkYXkgSHVtcFwiXX0se1widGl0bGVcIjpcIlNjaWVuY2UgJiBUZWNoXCIsXCJzdWJjYXRlZ29yaWVzXCI6W1wiSGVhbHRoICYgV2VsbG5lc3NcIl19LHtcInRpdGxlXCI6XCJTcG9ydHNcIixcInN1YmNhdGVnb3JpZXNcIjpbXCJCYXNlYmFsbFwiLFwiQmFza2V0YmFsbFwiLFwiQ29sdW1ucy9GZWF0dXJlc1wiLFwiQ3Jvc3MgQ291bnRyeVwiLFwiR29sZlwiLFwiU29jY2VyXCIsXCJTb2Z0YmFsbFwiLC8qXCJTcG9ydHMgQmxvZ3NcIiwqL1wiU3dpbSBhbmQgRGl2ZVwiLFwiVGVubmlzXCIsXCJUcmFjayBhbmQgRmllbGRcIixcIlZvbGxleWJhbGxcIixcIldhdGVyIFBvbG9cIl19XTtcclxuXHJcbmZ1bmN0aW9uIE5hdigpIHtcclxuICAgIGNvbnN0IFtzZWFyY2hSZXN1bHRzLCBzZXRTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKFtbXSwgW11dKTtcclxuICAgIGNvbnN0IFtzZWFyY2hFcnJvciwgc2V0U2VhcmNoRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcXVlcnlUaW1lLCBzZXRRdWVyeVRpbWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZ1NlYXJjaFJlc3VsdHMsIHNldExvYWRpbmdTZWFyY2hSZXN1bHRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttb2RhbFBhZ2UsIHNldE1vZGFsUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFttb2RhbFBhZ2VTZXQsIHNldE1vZGFsUGFnZVNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHRpbWVvdXRzID0gW107XHJcbiAgICBcclxuICAgIHJldHVybiAoPGRpdj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAuLi5jYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnQWJvdXQnLCBzdWJjYXRlZ29yaWVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge0FkdmVydGlzaW5nOiAnYWR2ZXJ0aXNpbmcnfSxcclxuICAgICAgICAgICAgICAgICAgICB7Q2xhc3NpZmllZHM6ICdjbGFzc2lmaWVkLWFkcyd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtEb25hdGU6ICdkb25hdGUnfSxcclxuICAgICAgICAgICAgICAgICAgICB7RkFROiAnZmFxJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge1wiU3RhZmYvQ29udGFjdFwiOiAnc3RhZmYtY29udGFjdCd9XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICBdLm1hcCgoY2F0ZWdvcnksIGkpID0+XHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkuc3ViY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICg8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3JpZXMvJHtjYXRlZ29yeS50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyAvZywgJy0nKX1gfT48YSBvbk1vdXNlT3Zlcj17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0c1tpXSAmJiBjbGVhclRpbWVvdXQodGltZW91dHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHsgc3R5bGUgfSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBvbk1vdXNlT3V0PXtlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHN0eWxlIH0gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXRzW2ldID0gc2V0VGltZW91dChfPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+e2NhdGVnb3J5LnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtc3ViY2F0ZWdvcmllc1wiIG9uTW91c2VNb3ZlPXtfPT4gdGltZW91dHNbaV0gJiYgY2xlYXJUaW1lb3V0KHRpbWVvdXRzW2ldKX0gb25Nb3VzZU91dD17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyBzdHlsZSB9ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dHNbaV0gPSBzZXRUaW1lb3V0KF89PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5zdWJjYXRlZ29yaWVzLm1hcCgoc3ViY2F0ZWdvcnksIGopID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17an0+PExpbmsgaHJlZj17Y2F0ZWdvcnkudGl0bGUgIT09ICdBYm91dCcgPyBgL2NhdGVnb3JpZXMvJHtjb252ZXJ0VG9QYXRoKGNhdGVnb3J5LnRpdGxlKX0vJHtjb252ZXJ0VG9QYXRoKHN1YmNhdGVnb3J5KX1gIDogYC9hYm91dC8ke09iamVjdC52YWx1ZXMoc3ViY2F0ZWdvcnkpWzBdfWB9PjxhIGNsYXNzTmFtZT1cInN1YmNhdGVnb3J5LWxpbmtcIj57Y2F0ZWdvcnkudGl0bGUgIT09ICdBYm91dCcgPyBzdWJjYXRlZ29yeSA6IE9iamVjdC5rZXlzKHN1YmNhdGVnb3J5KVswXX08L2E+PC9MaW5rPjwvbGk+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IDxMaW5rIGhyZWY9e2NhdGVnb3J5Lmxpbmt9PjxhPntjYXRlZ29yeS50aXRsZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvbGk+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxsaSBrZXk9XCItMlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0ZXh0VHJhbnNmb3JtOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzZWFyY2ggZmFzIGZhLXNlYXJjaFwiIG9uQ2xpY2s9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHN0eWxlIH0gPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gKHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgPyAnYmxvY2snIDogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9fT48L2k+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxvb2tpbmcgZm9yIHNvbWV0aGluZz9cIiBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScsIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCByaWdodDogJzE1MCUnLCB0b3A6ICctMTUlJywgcGFkZGluZzogJy4ycmVtIC40cmVtJyB9fSBvbktleURvd249e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucGVyc2lzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgKF89PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nU2VhcmNoUmVzdWx0cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvc2VhcmNoP3ZhbHVlPScgKyBlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocm93cyA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaFJlc3VsdHMoW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4ucm93c10uc29ydCgoe3B1Ymxpc2hfZGF0ZTogYX0sIHtwdWJsaXNoX2RhdGU6IGJ9KSA9PiBuZXcgRGF0ZShiKSAtIG5ldyBEYXRlKGEpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc2V0TG9hZGluZ1NlYXJjaFJlc3VsdHMoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgc2V0UXVlcnlUaW1lKCgoRGF0ZS5ub3coKSAtIG5vdykgLyAxMDAwKS50b0ZpeGVkKDIpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkgfHwgc2V0U2VhcmNoRXJyb3IoJ0Vycm9yIGZldGNoaW5nIHJlc3VsdHMnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB7IHN0eWxlIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcmVzdWx0cycpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1vcGVuJylbMF0uc3R5bGUub3BhY2l0eSA9ICcuNzUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbC1vcGVuJylbMF0uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9KSgpO1xyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cy1idXR0b25cIiBvbkNsaWNrPXtlID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB7IHN0eWxlIH0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWFyY2gtcmVzdWx0cycpWzBdO1xyXG4gICAgICAgICAgICAgICAgc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtb3BlbicpWzBdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbW9kYWwtb3BlbicpWzBdLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhbW10sIFtdXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWFyY2hFcnJvcihudWxsKTtcclxuICAgICAgICAgICAgICAgIHNldE1vZGFsUGFnZSgxKTtcclxuICAgICAgICAgICAgICAgIHNldE1vZGFsUGFnZVNldCgwKTtcclxuICAgICAgICAgICAgICAgIHNldFNvcnRCeSgwKTtcclxuICAgICAgICAgICAgICAgIHNldFF1ZXJ5VGltZSgwKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH19Png8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxLjFyZW0nIH19PntzZWFyY2hFcnJvcn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0cy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsIGZvbnRTaXplOiAnLjg1cmVtJyB9fT57IWxvYWRpbmdTZWFyY2hSZXN1bHRzID8gYCR7c2VhcmNoUmVzdWx0c1swXS5sZW5ndGh9IHJlc3VsdCR7c2VhcmNoUmVzdWx0c1swXS5sZW5ndGggPT09IDEgPyAnJyA6ICdzJ30gKCR7cXVlcnlUaW1lfSBzZWNvbmQke3F1ZXJ5VGltZSA9PT0gMSA/ICcnIDogJ3MnfSlgIDogJ0xvYWRpbmcgYXJ0aWNsZXMuLi4nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnLjg1cmVtJywgbWFyZ2luUmlnaHQ6ICcuMjVyZW0nIH19PlNvcnQgYnk6IDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtlID0+IGNvbnNvbGUubG9nKGUudGFyZ2V0LnNlbGVjdGVkSW5kZXgpIHx8IHNldFNvcnRCeShlLnRhcmdldC5zZWxlY3RlZEluZGV4KX0gc3R5bGU9e3sgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9XCIwXCI+UmVsZXZhbmNlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PVwiMVwiPkRhdGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWF4SGVpZ2h0OiAnY2FsYygxMDAlIC0gMi4yNXJlbSAtIDEuMTNweCAtIDEuNXJlbSAtIDIuMjVyZW0pJywgb3ZlcmZsb3dZOiAnYXV0bycgfX0+XHJcbiAgICAgICAgICAgICAgICB7c2VhcmNoUmVzdWx0c1tzb3J0QnldLnNsaWNlKChtb2RhbFBhZ2UtMSkqMTAsIG1vZGFsUGFnZSoxMCkubWFwKChyZXN1bHQsIGkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJy41cmVtJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxMaW5rIGhyZWY9eycvYXJ0aWNsZXMvJytyZXN1bHQuaWR9PjxhIHN0eWxlPXt7IGNvbG9yOiAnIzAwMDBDQycsIGZvbnRTaXplOiAnMXJlbScsIGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicgfX0+e3Jlc3VsdC50aXRsZX08L2E+PC9MaW5rPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzAwODAwMCcsIGZvbnRTaXplOiAnMTNweCcsIGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsIG1hcmdpbjogJy4ycmVtIDAnfX0+e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvYXJ0aWNsZXMvJHtyZXN1bHQuaWR9YH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FydGljbGVzLyR7cmVzdWx0LmlkfWB9PjxhPjxwaWN0dXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjU2V0PXtyZXN1bHQubW9iaWxlX3RodW1ibmFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyY1NldD17Jy9pbWcvbmV4dXMtZmFsbGJhY2sud2VicCd9IHR5cGU9XCJpbWFnZS93ZWJwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cInRodW1ibmFpbFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGljdHVyZT48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JywgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJywgbWFyZ2luOiAnMCAuNXJlbScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxM3B4JywgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyB9fT57Y29udmVydERhdGUocmVzdWx0LnB1Ymxpc2hfZGF0ZSl9IC4uLiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhyZXN1bHQuZGVzY3JpcHRpb24pICYmIChyZXN1bHQuZGVzY3JpcHRpb24uc2xpY2UoMCwgMzAwKSArICgocmVzdWx0LmRlc2NyaXB0aW9uLmxlbmd0aCA+IDMwMCkgPyAnLi4uJyA6ICcnKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIHN0eWxlPXt7IG1hcmdpblRvcDogJzEuMjVyZW0nLCBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIG92ZXJmbG93WDogJ2F1dG8nLCBmb250RmFtaWx5OiAnQXJpYWwsIHNhbnMtc2VyaWYnIH19PlxyXG4gICAgICAgICAgICAgICAgeyhtb2RhbFBhZ2VTZXQgPiAwKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9XCItMVwiIG9uQ2xpY2s9e189PiBzZXRNb2RhbFBhZ2VTZXQobW9kYWxQYWdlU2V0LTEpfSBvbk1vdXNlT3Zlcj17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZScgfX0gb25Nb3VzZU91dD17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnIH19IHN0eWxlPXt7IGNvbG9yOiAnI2MwYzBjMCcsIG1hcmdpbjogJzAgLjI1cmVtJywgY3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyB9fT4uLi48L2xpPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge25ldyBBcnJheShNYXRoLm1pbigyNSwgTWF0aC5jZWlsKHNlYXJjaFJlc3VsdHNbMF0ubGVuZ3RoLzEwKS0yNSptb2RhbFBhZ2VTZXQpKS5maWxsKHRydWUpLm1hcCgoXywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYWdlID0gbW9kYWxQYWdlU2V0KjI1K2krMTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBvbkNsaWNrPXtfPT4gc2V0TW9kYWxQYWdlKHBhZ2UpfSBvbk1vdXNlT3Zlcj17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZScgfX0gb25Nb3VzZU91dD17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnIH19IHN0eWxlPXt7IGNvbG9yOiBtb2RhbFBhZ2UgPT09IHBhZ2UgPyAnIzY2NicgOiAnI2MwYzBjMCcsIG1hcmdpbjogJzAgLjI1cmVtJywgY3Vyc29yOiAncG9pbnRlcicsIGZvbnRTaXplOiBtb2RhbFBhZ2UgPT09IHBhZ2UgPyAnLjk1cmVtJyA6ICcuOHJlbScsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyB9fT57cGFnZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgeyhNYXRoLmNlaWwoc2VhcmNoUmVzdWx0c1swXS5sZW5ndGgvMTApLTI1Km1vZGFsUGFnZVNldCA+IDI1KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9XCIyNVwiIG9uQ2xpY2s9e189PiBzZXRNb2RhbFBhZ2VTZXQobW9kYWxQYWdlU2V0KzEpfSBvbk1vdXNlT3Zlcj17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZScgfX0gb25Nb3VzZU91dD17ZSA9PiB7IGUudGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnIH19IHN0eWxlPXt7IGNvbG9yOiAnI2MwYzBjMCcsIG1hcmdpbjogJzAgLjI1cmVtJywgY3Vyc29yOiAncG9pbnRlcicsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJywgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyB9fT4uLi48L2xpPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLW9wZW5cIj48L2Rpdj5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2IGxpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5hdiBsaTpob3ZlciB1bCB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmstaG92ZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LXN1YmNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAuNnJlbSAuNXJlbSAuNnJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LXN1YmNhdGVnb3JpZXMgbGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LXN1YmNhdGVnb3JpZXMgbGk6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5uYXYtc3ViY2F0ZWdvcmllcyBsaTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGluay1ob3Zlcik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWJjYXRlZ29yeS1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnN1YmNhdGVnb3J5LWxpbms6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpbmstaG92ZXIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlYXJjaC1yZXN1bHRzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzV2dztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0gLSA3cmVtIC0gMS43NXJlbSk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMi41dnc7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMi4yNXJlbSAyLjI1cmVtIC41cmVtIDIuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB6LUluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA2cHggM3B4ICNjY2M7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWFyY2gtcmVzdWx0cyBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlYXJjaC1yZXN1bHRzLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JhbDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VhcmNoLXJlc3VsdHMgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlU21va2U7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCB3aGl0ZVNtb2tlLCAjZjFmMWYxKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTRweDtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDI4cHggMCA2cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWFyY2gtcmVzdWx0cyBvcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tb2RhbC1vcGVuIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWFyY2gtcmVzdWx0cy1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjc2NzY3O1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWFyY2gtcmVzdWx0cy1oZWFkZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtLjdyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdlxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\Nav.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\components\\Sidebar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const newsletterURL = 'https://dailynexus.us19.list-manage.com/subscribe?u=c7afb6c46dbbdcd7bb0bd8919&id=7220084bdc';
const facebookURL = 'https://www.facebook.com/dailynexus/';
const archivesURL = 'https://dailynexus.com/archives/';
const twitterURLS = {
  main: 'https://twitter.com/dailynexus?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2Fcategory%2Fartsweek%2F',
  embed: 'https://publish.twitter.com/?url=https%3A%2F%2Ftwitter.com%2Fdailynexus&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2Fcategory%2Fartsweek%2F#'
};

function Sidebar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-2162402146" + " " + "sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("li", {
    key: "0",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      color: 'white',
      backgroundColor: '#444',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '14rem'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Ad Space")), __jsx("li", {
    key: "1",
    style: {
      border: '2px solid #555',
      margin: '.5rem 0 .75rem 0'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: "/img/covid-chart.png",
    alt: "covid chart",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx("li", {
    key: "2",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2162402146" + " " + "comic-of-the-week-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Comic of the Week"), __jsx("hr", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2162402146" + " " + "comic-of-the-week",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/comic-of-the-week.webp",
    alt: "comic",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 52
    }
  }))), __jsx("li", {
    key: "3",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: newsletterURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 26
    }
  }, __jsx("button", {
    className: "jsx-2162402146" + " " + "newsletter-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 53
    }
  }, "Subscribe to Our Newsletter")), " "), __jsx("li", {
    key: "4",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      height: '34.5rem',
      overflowY: 'scroll'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://twitter.com/dailynexus?ref_src=twsrc%5Etfw",
    className: "jsx-2162402146" + " " + "twitter-timeline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Tweets by dailynexus"), __jsx("script", {
    async: true,
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.8rem',
      margin: '1rem 0'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: twitterURLS.embed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 52
    }
  }, "Embed")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: twitterURLS.main,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, __jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 51
    }
  }, "View on Twitter")))), __jsx("li", {
    key: "5",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: facebookURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 26
    }
  }, __jsx("button", {
    className: "jsx-2162402146" + " " + "facebook-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 51
    }
  }, __jsx("i", {
    className: "jsx-2162402146" + " " + "fab fa-facebook-f",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 87
    }
  }), " Like us on Facebook")), " "), __jsx("li", {
    key: "6",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: archivesURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 26
    }
  }, __jsx("a", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 51
    }
  }, __jsx("img", {
    src: "/img/print-edition.png",
    alt: "archives",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 54
    }
  })))), __jsx("li", {
    key: "7",
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.55rem',
      marginTop: '3rem',
      marginBottom: '.6rem'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "WEEKLY HOROSCOPES"), __jsx("div", {
    style: {
      textAlign: 'center',
      color: '#333',
      fontSize: '1.35rem',
      fontWeight: 'bold'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://twitter.com/dailynexopinion",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 113
    }
  }, __jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 162
    }
  }, "@dailynexopinion"))), __jsx("br", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      color: '#333',
      textAlign: 'center',
      fontSize: '1.35rem',
      fontWeight: 'bold'
    },
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, "The Signs as Summer Desserts"), __jsx("br", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("br", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "jsx-2162402146",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, [{
    'Aries': ['March 21 - April 19', 'Yerba mate chocolate truffles']
  }, {
    'Taurus': ['April 20 - May 20', 'triple chocolate cake']
  }, {
    'Gemini': ['May 21 - June 20', 'Fireball pumpkin pie']
  }, {
    'Cancer': ['June 21 - July 22', 'Bucket of ice water']
  }, {
    'Leo': ['July 23 - August 22', 'S\'mores']
  }, {
    'Virgo': ['August 23 - September 22', 'Vodka mocha bundt cake']
  }, {
    'Libra': ['September 23 - October 22', 'Chocolate-covered almonds']
  }, {
    'Scorpio': ['October 23 - November 21', 'Frozen yogurt with Hot Cheeto topping']
  }, {
    'Sagittarius': ['November 22 - December 21', 'Jar of mayonnaise']
  }, {
    'Capricorn': ['December 22 - January 19', 'Rum cake']
  }, {
    'Aquarius': ['January 20 - February 18', 'Oatmeal raisin cookies']
  }, {
    'Pisces': ['February 19 - March 20', 'Raspberry cheesecake']
  }].map((sign, i) => {
    let [[name, [dates, horoscope]]] = Object.entries(sign);
    return __jsx("li", {
      key: i,
      style: {
        display: 'flex',
        margin: '1rem 0'
      },
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 33
      }
    }, __jsx("img", {
      style: {
        width: '4rem',
        height: '4rem',
        marginRight: '.5rem'
      },
      src: `/img/horoscopes/${name.toLowerCase()}.svg`,
      alt: "sign",
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 38
      }
    })), __jsx("div", {
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 37
      }
    }, name), __jsx("div", {
      style: {
        fontSize: '.75rem',
        color: '#4b4b4b',
        fontWeight: '600',
        marginBottom: '.5rem',
        marginTop: '.2rem'
      },
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 37
      }
    }, dates), __jsx("div", {
      style: {
        color: 'var(--link-hover)'
      },
      className: "jsx-2162402146",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 37
      }
    }, horoscope)));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2162402146",
    __self: this
  }, ".comic-of-the-week-title.jsx-2162402146{font-weight:bold;font-size:1.5rem;text-align:center;margin-bottom:.5rem;}.comic-of-the-week.jsx-2162402146 img.jsx-2162402146{object-fit:cover;width:100%;height:14rem;position:relative;}.comic-of-the-week.jsx-2162402146{position:relative;height:14rem;cursor:pointer;}.comic-of-the-week.jsx-2162402146::before{position:absolute;top:0;right:0;bottom:0;left:0;content:'College Nostalgia';font-size:1.3rem;color:white;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;}.newsletter-button.jsx-2162402146{background-color:var(--theme-gold);color:white;width:92.5%;font-size:1.3rem;border-radius:4px;border:none;padding:.75rem;margin:1rem .75rem;text-align:center;cursor:pointer;border:2px solid var(--theme-gold);}.newsletter-button.jsx-2162402146:hover{background-color:white;color:black;}.facebook-button.jsx-2162402146{background-color:#445aa4;width:95%;font-size:1.3rem;cursor:pointer;margin:1.5rem .5rem 3rem .5rem;box-shadow:none;padding:.6rem;color:white;text-align:center;border-radius:5px;border:2px solid #445aa4;}.facebook-button.jsx-2162402146:hover{background-color:white;color:#445aa4;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcY29tcG9uZW50c1xcU2lkZWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRm9CLEFBR2tDLEFBT0EsQUFPQyxBQU1BLEFBZ0JpQixBQWNaLEFBS0UsQUFjRixpQkFwRU4sQUFPTixDQU9FLEFBTVAsS0E4Qk0sQUFtQkUsQ0FoRE4sQ0FrQ0UsR0EvQ0csR0FPRSxDQU9OLEVBckJTLENBbUNOLEFBZWhCLEFBS3FCLEVBY3JCLElBN0RzQixBQWNYLEtBUFgsQ0FxQmdCLENBYmdCLElBdEJSLEFBdURMLE9BL0NuQixBQTRCcUIsUUFvQmMsS0F2RG5DLElBc0JxQixBQWNDLGlCQWJOLENBY0EsSUFtQkksT0FoQ21CLENBY3BCLFFBbUJELE9BbEJLLE9BbUJQLFNBakNDLEdBZUssQUFtQkEsa0JBbEJILEFBbUJHLGVBbEJpQixHQW1CVix5QkFDN0IsT0FuQkEsR0FqQjJCLG1HQUNKLDZGQUNULFVBQ2QiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcQ29kZVxcUG9ydGZvbGlvXFxtb2NrX25leHVzXFxjb21wb25lbnRzXFxTaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IG5ld3NsZXR0ZXJVUkwgPSAnaHR0cHM6Ly9kYWlseW5leHVzLnVzMTkubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZT91PWM3YWZiNmM0NmRiYmRjZDdiYjBiZDg5MTkmaWQ9NzIyMDA4NGJkYyc7XHJcbmNvbnN0IGZhY2Vib29rVVJMID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kYWlseW5leHVzLyc7XHJcbmNvbnN0IGFyY2hpdmVzVVJMID0gJ2h0dHBzOi8vZGFpbHluZXh1cy5jb20vYXJjaGl2ZXMvJztcclxuXHJcbmNvbnN0IHR3aXR0ZXJVUkxTID0ge1xyXG4gICAgbWFpbjogJ2h0dHBzOi8vdHdpdHRlci5jb20vZGFpbHluZXh1cz9yZWZfc3JjPXR3c3JjJTVFdGZ3JTdDdHdjYW1wJTVFZW1iZWRkZWR0aW1lbGluZSU3Q3R3dGVybSU1RXByb2ZpbGUlM0FkYWlseW5leHVzJnJlZl91cmw9aHR0cHMlM0ElMkYlMkZkYWlseW5leHVzLmNvbSUyRmNhdGVnb3J5JTJGYXJ0c3dlZWslMkYnLFxyXG4gICAgZW1iZWQ6ICdodHRwczovL3B1Ymxpc2gudHdpdHRlci5jb20vP3VybD1odHRwcyUzQSUyRiUyRnR3aXR0ZXIuY29tJTJGZGFpbHluZXh1cyZyZWZfc3JjPXR3c3JjJTVFdGZ3JTdDdHdjYW1wJTVFZW1iZWRkZWR0aW1lbGluZSU3Q3R3dGVybSU1RXByb2ZpbGUlM0FkYWlseW5leHVzJnJlZl91cmw9aHR0cHMlM0ElMkYlMkZkYWlseW5leHVzLmNvbSUyRmNhdGVnb3J5JTJGYXJ0c3dlZWslMkYjJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaWRlYmFyKCkge1xyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIDxsaSBrZXk9XCIwXCI+PGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDQ0JyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRyZW0nIH19PkFkIFNwYWNlPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpIGtleT1cIjFcIiBzdHlsZT17eyBib3JkZXI6ICcycHggc29saWQgIzU1NScsIG1hcmdpbjogJy41cmVtIDAgLjc1cmVtIDAnIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2NvdmlkLWNoYXJ0LnBuZ1wiIGFsdD1cImNvdmlkIGNoYXJ0XCIgLz48L2xpPlxyXG4gICAgICAgICAgICA8bGkga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pYy1vZi10aGUtd2Vlay10aXRsZVwiPkNvbWljIG9mIHRoZSBXZWVrPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21pYy1vZi10aGUtd2Vla1wiPjxpbWcgc3JjPVwiL2ltZy9jb21pYy1vZi10aGUtd2Vlay53ZWJwXCIgYWx0PVwiY29taWNcIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkga2V5PVwiM1wiPiA8TGluayBocmVmPXtuZXdzbGV0dGVyVVJMfT48YnV0dG9uIGNsYXNzTmFtZT1cIm5ld3NsZXR0ZXItYnV0dG9uXCI+U3Vic2NyaWJlIHRvIE91ciBOZXdzbGV0dGVyPC9idXR0b24+PC9MaW5rPiA8L2xpPlxyXG4gICAgICAgICAgICA8bGkga2V5PVwiNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICczNC41cmVtJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0d2l0dGVyLXRpbWVsaW5lXCIgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGFpbHluZXh1cz9yZWZfc3JjPXR3c3JjJTVFdGZ3XCI+VHdlZXRzIGJ5IGRhaWx5bmV4dXM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCJodHRwczovL3BsYXRmb3JtLnR3aXR0ZXIuY29tL3dpZGdldHMuanNcIiBjaGFyU2V0PVwidXRmLThcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGZvbnRTaXplOiAnLjhyZW0nLCBtYXJnaW46ICcxcmVtIDAnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3R3aXR0ZXJVUkxTLmVtYmVkfT48YSBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWxpbmstaG92ZXIpJyB9fT5FbWJlZDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17dHdpdHRlclVSTFMubWFpbn0+PGEgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1saW5rLWhvdmVyKScgfX0+VmlldyBvbiBUd2l0dGVyPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkga2V5PVwiNVwiPiA8TGluayBocmVmPXtmYWNlYm9va1VSTH0+PGJ1dHRvbiBjbGFzc05hbWU9XCJmYWNlYm9vay1idXR0b25cIj48aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiPjwvaT4gTGlrZSB1cyBvbiBGYWNlYm9vazwvYnV0dG9uPjwvTGluaz4gPC9saT5cclxuICAgICAgICAgICAgPGxpIGtleT1cIjZcIj4gPExpbmsgaHJlZj17YXJjaGl2ZXNVUkx9PjxhPjxpbWcgc3JjPVwiL2ltZy9wcmludC1lZGl0aW9uLnBuZ1wiIGFsdD1cImFyY2hpdmVzXCIgLz48L2E+PC9MaW5rPjwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBrZXk9XCI3XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxLjU1cmVtJywgbWFyZ2luVG9wOiAnM3JlbScsIG1hcmdpbkJvdHRvbTogJy42cmVtJyB9fT5XRUVLTFkgSE9ST1NDT1BFUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBjb2xvcjogJyMzMzMnLCBmb250U2l6ZTogJzEuMzVyZW0nLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+YnkgPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vZGFpbHluZXhvcGluaW9uXCI+PGEgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1saW5rLWhvdmVyKScgfX0+QGRhaWx5bmV4b3BpbmlvbjwvYT48L0xpbms+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiAnIzMzMycsIHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMS4zNXJlbScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5UaGUgU2lnbnMgYXMgU3VtbWVyIERlc3NlcnRzPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeydBcmllcyc6IFsnTWFyY2ggMjEgLSBBcHJpbCAxOScsICdZZXJiYSBtYXRlIGNob2NvbGF0ZSB0cnVmZmxlcyddfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeydUYXVydXMnOiBbJ0FwcmlsIDIwIC0gTWF5IDIwJywgJ3RyaXBsZSBjaG9jb2xhdGUgY2FrZSddfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeydHZW1pbmknOiBbJ01heSAyMSAtIEp1bmUgMjAnLCAnRmlyZWJhbGwgcHVtcGtpbiBwaWUnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnQ2FuY2VyJzogWydKdW5lIDIxIC0gSnVseSAyMicsICdCdWNrZXQgb2YgaWNlIHdhdGVyJ119LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7J0xlbyc6IFsnSnVseSAyMyAtIEF1Z3VzdCAyMicsICdTXFwnbW9yZXMnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnVmlyZ28nOiBbJ0F1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMicsICdWb2RrYSBtb2NoYSBidW5kdCBjYWtlJ119LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7J0xpYnJhJzogWydTZXB0ZW1iZXIgMjMgLSBPY3RvYmVyIDIyJywgJ0Nob2NvbGF0ZS1jb3ZlcmVkIGFsbW9uZHMnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnU2NvcnBpbyc6IFsnT2N0b2JlciAyMyAtIE5vdmVtYmVyIDIxJywgJ0Zyb3plbiB5b2d1cnQgd2l0aCBIb3QgQ2hlZXRvIHRvcHBpbmcnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnU2FnaXR0YXJpdXMnOiBbJ05vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjEnLCAnSmFyIG9mIG1heW9ubmFpc2UnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnQ2Fwcmljb3JuJzogWydEZWNlbWJlciAyMiAtIEphbnVhcnkgMTknLCAnUnVtIGNha2UnXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnQXF1YXJpdXMnOiBbJ0phbnVhcnkgMjAgLSBGZWJydWFyeSAxOCcsICdPYXRtZWFsIHJhaXNpbiBjb29raWVzJ119LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7J1Bpc2Nlcyc6IFsnRmVicnVhcnkgMTkgLSBNYXJjaCAyMCcsICdSYXNwYmVycnkgY2hlZXNlY2FrZSddfVxyXG4gICAgICAgICAgICAgICAgICAgIF0ubWFwKChzaWduLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBbW25hbWUsIFtkYXRlcywgaG9yb3Njb3BlXV1dID0gT2JqZWN0LmVudHJpZXMoc2lnbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbjogJzFyZW0gMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aW1nIHN0eWxlPXt7IHdpZHRoOiAnNHJlbScsIGhlaWdodDogJzRyZW0nLCBtYXJnaW5SaWdodDogJy41cmVtJyB9fSBzcmM9e2AvaW1nL2hvcm9zY29wZXMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnN2Z2B9IGFsdD1cInNpZ25cIiAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyB9fT57bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJy43NXJlbScsIGNvbG9yOiAnIzRiNGI0YicsIGZvbnRXZWlnaHQ6ICc2MDAnLCBtYXJnaW5Cb3R0b206ICcuNXJlbScsIG1hcmdpblRvcDogJy4ycmVtJyB9fT57ZGF0ZXN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1saW5rLWhvdmVyKScgfX0+e2hvcm9zY29wZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuY29taWMtb2YtdGhlLXdlZWstdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29taWMtb2YtdGhlLXdlZWsgaW1ne1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTRyZW07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb21pYy1vZi10aGUtd2VlayB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29taWMtb2YtdGhlLXdlZWs6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnQ29sbGVnZSBOb3N0YWxnaWEnO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmV3c2xldHRlci1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtZ29sZCk7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTIuNSU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC43NXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10aGVtZS1nb2xkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm5ld3NsZXR0ZXItYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZmFjZWJvb2stYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDVhYTQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEuNXJlbSAuNXJlbSAzcmVtIC41cmVtO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IC42cmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQ0NWFhNDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmZhY2Vib29rLWJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDQ1YWE0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\components\\\\Sidebar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  "title": "Artsweek",
  "articles": [{
    "title": "In Review: “Women in Music Pt. III” by HAIM",
    "category": "Artsweek",
    "subcategory": "Music",
    "publish_date": "2020-06-30T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/HAIM.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/HAIM.jpg?resize=980%2C647&ssl=1",
    "description": "The Haim sisters had to travel through darkness to create this record, but on the other side was a tunnel of light you can hear through the quality production.",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_95014\" style=\"width: 610px\" class=\"wp-caption aligncenter\"><a href=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg\" data-slb-active=\"1\" data-slb-asset=\"1117270782\" data-slb-internal=\"0\" data-slb-group=\"95013\"><img aria-describedby=\"caption-attachment-95014\" data-attachment-id=\"95014\" data-permalink=\"https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/women-in-music-pt-iii_haim/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?fit=600%2C600&amp;ssl=1\" data-orig-size=\"600,600\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"Women in Music Pt. III_Haim\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?fit=250%2C250&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?fit=600%2C600&amp;ssl=1\" class=\"size-full wp-image-95014\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=600%2C600\" alt=\"\" width=\"600\" height=\"600\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?w=600&amp;ssl=1 600w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=250%2C250&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=260%2C260&amp;ssl=1 260w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=100%2C100&amp;ssl=1 100w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=32%2C32&amp;ssl=1 32w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=50%2C50&amp;ssl=1 50w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=64%2C64&amp;ssl=1 64w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=96%2C96&amp;ssl=1 96w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=128%2C128&amp;ssl=1 128w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=550%2C550&amp;ssl=1 550w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/Women-in-Music-Pt.-III_Haim.jpg?resize=470%2C470&amp;ssl=1 470w\" sizes=\"(max-width: 600px) 100vw, 600px\" data-recalc-dims=\"1\"></a><p id=\"caption-attachment-95014\" class=\"wp-caption-text\">Courtesy of Pitchfork</p></div>\n<p><span style=\"font-weight: 400;\">The Haim sisters have become skilled masters of meshing colorful production with dark lyrics, and nowhere is this more clear than on the opening track to their third studio album, “Women in Music Pt. III.” “These days, these days, I can’t win/These days, I can’t see no visions/I’m breaking, losing faith,” Danielle sings on the chorus of “Los Angeles” while surrounded by bright and sunshiny production.</span></p>\n<p><span style=\"font-weight: 400;\">The themes on this album are darker than normal, owing to a string of recent trauma in the sisters’ lives. Danielle’s boyfriend and album producer Ariel Rechtshaid had a bout of cancer, Este has dealt with diabetes and Alana has been grieving for a best friend’s death. All of these struggles are felt in “Hallelujah,” the most poignant and straightforward song of the bunch, which is about gratitude toward sisterhood. “</span><span style=\"font-weight: 400;\">My verse is about our relationship as sisters </span><span style=\"font-weight: 400;\">… </span><span style=\"font-weight: 400;\">This song is a big thank you to the people in your life that love and support you every day,” </span><a href=\"https://www.facebook.com/haimtheband/posts/10156270402481841?comment_id=10156270578396841\"><span style=\"font-weight: 400;\">Danielle wrote</span></a><span style=\"font-weight: 400;\"> in a Facebook post upon the song’s release last November. The stripped-back production and gorgeous harmonies make it sound like a 2020 version of </span><a href=\"https://www.youtube.com/watch?v=WM7-PYtXtJM\"><span style=\"font-weight: 400;\">Fleetwood Mac’s “Landslide,”</span></a><span style=\"font-weight: 400;\"> and when Alana sings, “I had a best friend but she has come to pass/One I wish I could see now,” the emotions running through the song feel similar as well. </span></p>\n<p><span style=\"font-weight: 400;\">Not written for quarantine but perfect for it, “I Know Alone” perfectly encapsulates the feeling of being stuck in a rut with no one to come help. “Nights turn into days/That turn to grey/Keep turning over/Some things never grow/I know alone/Like no one else does,” Danielle murmurs on the chorus across a bouncy, dark instrumental, one of Haim’s pop-friendly beats. “I’ve Been Down” also perfectly matches quarantine life: “</span><span style=\"font-weight: 400;\">Trying to get myself through this/And I’ve been watching too much TV/Looking up at the ceiling/It’s been making me feel creepy.” Despite a clunky chorus with the “Come on, come on, come on, baby” repetition, this song overall features some of the most down-to-earth lyrics on the record.</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">“Now I’m In It,” which is about catching yourself the moment you start to enter into a depressive episode, sounds brighter on the surface but is equally as dark lyrically. The opening lines, “Looking in the mirror again and again/Wishing the reflection would tell me something/I, I can’t get a hold of myself/I can’t get outta this situation,” spoken fast over a pulsating instrumental gives an example of the kind of racing thoughts in the narrator’s head. While “Cause now I’m in it/But I’ve been trying to find my way back for a minute/Damn, I’m in it” shows the moment of recognition and acceptance, “Something in the way that I felt when I woke up/Told me that I shouldn’t give in, give up hope” demonstrates resilience and the hopeful attitude necessary for those kinds of days. The vocal layering, production and lyrics all combine to produce a fantastic song, one which we could all relate to.</span></p>\n<p><span style=\"font-weight: 400;\">The sisters also write about relationship problems, but they do it in a way that always feels lighthearted, like they know they’ll be okay. “Don’t Wanna” describes being in a loose, early relationship but one that feels like it’ll be the right path. “Well, we both have nights/Waking up in strangers’ beds/But I don’t wanna, don’t wanna/I don’t wanna give up yet,” they sing on the chorus that explodes when it gets to the outro, combining layers of instrumentation and background vocals that work so well together. Although it’s basically the same song, “Another Try” also mentions relationship problems, this time over a tropical, breezy beat that’s close to, but not crossing, the line of cliché.</span></p>\n<p><span style=\"font-weight: 400;\">Guitar-driven and featuring shining vocals, “The Steps” deals with a partner not realizing one’s self-worth and individuality. “And every day I wake up and I make money for myself/And though we share a bed, you know that I don’t need your help/Do you understand?/You don’t understand me, baby,” they assert on the chorus. Though it’s a less engaging track, “Man from the Magazine” deals with feminism as well, recounting an invasive experience with journalists. “‘Do you make the same faces in bed?’/Hey, man, what kind of question is that?” alone shows how much the Haim sisters have had to deal with being three women in music.</span></p>\n<p><span style=\"font-weight: 400;\">Some of HAIM’s best work shows up in this tracklist, though differing in style. “Up From A Dream” has a foggy atmosphere and heavy baseline that makes way for an amazing guitar solo. It features dazed lyrics, as if the narrator has literally just woken up (“Something you see wakes you up from the dream/Wanna go back to sleep but now you’re up from the dream.”) “3AM” is an irresistibly catchy throwback to ’90s R&amp;B, complete with a voicemail intro </span><a href=\"https://genius.com/Haim-3-am-lyrics\"><span style=\"font-weight: 400;\">that had to be auditioned for by the sisters’ friends</span></a><span style=\"font-weight: 400;\">. “</span><span style=\"font-weight: 400;\">I think you can hear the amount of joy and laughs we had making this song,” </span><a href=\"https://music.apple.com/gb/album/women-in-music-pt-iii/1500020581\"><span style=\"font-weight: 400;\">Alana told Apple Music</span></a><span style=\"font-weight: 400;\">. On the album closer, “Summer Girl,” Danielle writes about Rechtshaid’s diagnosis but with a reaffirming and positive tone: “I see it in your face, I’m relief/I’m your summer girl.”</span></p>\n<p><span style=\"font-weight: 400;\">The Haim sisters had to travel through darkness to create this record, but on the other side was a tunnel of light you can hear through the quality production. Their writing is real, unforced and instantly relatable.</span></p>\n<p><span style=\"font-weight: 400;\">Rating: 8/10</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><img alt=\"\" src=\"https://secure.gravatar.com/avatar/72a4b221809bf145adbdde6c035079b7?s=100&amp;d=mm&amp;r=g\" srcset=\"https://secure.gravatar.com/avatar/72a4b221809bf145adbdde6c035079b7?s=200&amp;d=mm&amp;r=g 2x\" class=\"avatar avatar-100 photo\" height=\"100\" width=\"100\" itemprop=\"image\"></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/sfranzini/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Sam Franzini</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Sam Franzini is a second year student and a fan of dogs, music, tennis, stationery, and <em>Survivor</em>. He grew up in Florida and all of the stories about it are true.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_blank\" href=\"https://www.instagram.com/sam.franzini/\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-instagram\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg></a><a target=\"_self\" href=\"mailto:sfranzini@ucsb.edu\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95013\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95013\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-30/in-review-women-in-music-pt-iii-by-haim/",
    "id": 6474,
    "author": {
      "id": 659,
      "name": "Sam Franzini"
    },
    "related": [6473, 6472, 6471],
    "comments": [],
    "followers": []
  }, {
    "title": "In Review: Spike Lee’s “Da 5 Bloods”",
    "category": "Artsweek",
    "subcategory": "Film and TV",
    "publish_date": "2020-06-23T07:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/da-5-bloods-1200.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/da-5-bloods-1200.jpg?resize=980%2C647&ssl=1",
    "description": "“Da 5 Bloods” deals with emotional trauma caused because of the war, trust issues, complex relationships with fathers and the never-ending injustices experienced by Black people in America.",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_94951\" style=\"width: 739px\" class=\"wp-caption aligncenter\"><a href=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg\" data-slb-active=\"1\" data-slb-asset=\"460502183\" data-slb-internal=\"0\" data-slb-group=\"94950\"><img aria-describedby=\"caption-attachment-94951\" data-attachment-id=\"94951\" data-permalink=\"https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/da5bloods/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?fit=729%2C1080&amp;ssl=1\" data-orig-size=\"729,1080\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"Da5Bloods\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?fit=169%2C250&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?fit=691%2C1024&amp;ssl=1\" class=\"size-full wp-image-94951\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?resize=729%2C1080\" alt=\"\" width=\"729\" height=\"1080\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?w=729&amp;ssl=1 729w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?resize=169%2C250&amp;ssl=1 169w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Da5Bloods.jpg?resize=691%2C1024&amp;ssl=1 691w\" sizes=\"(max-width: 729px) 100vw, 729px\" data-recalc-dims=\"1\"></a><p id=\"caption-attachment-94951\" class=\"wp-caption-text\">Courtesy of IMDb</p></div>\n<p><span style=\"font-weight: 400;\">Following the footsteps of other prominent directors, Spike Lee has now released his first film on a streaming platform: Netflix. His newest film “Da 5 Bloods” is extremely political, and like his other films, focuses on Black struggles and oppression. Any history buff would enjoy it, but I recommend the film to everyone because the issues examined in it are unfortunately still prevalent today; especially right now with the new wave of the Black Lives Matter movement. </span></p>\n<p><span style=\"font-weight: 400;\">The 5 Bloods are a group of five black men who were sent to fight for America during the Vietnam War. The film focuses on Paul (Delroy Lindo), Paul’s son David (Jonathan Majors), Otis (Clarke Peters), Eddie (Norm Lewis), Melvin (Isiah Witlock Jr.), and Norman (Chadwick Boseman). The film opens with a clip of Muhammad Ali, who famously condemned the killings of people abroad because unlike the United States, those countries “never lynched me, they didn’t put no dogs on me, they didn’t rob me of my nationality.” This starts a montage overlapped with Marvin Gaye’s voice, which is the first time of many he is heard in the film. There are clips of Black soldiers, war scenes and historical moments that happened around the time of the war, which was fought from 1955 to 1975. Then, there are photo inserts of Martin Luther King Jr., Angela Davis and Malcolm X, whose speeches are sprinkled throughout the movie, along with references to Black riots in response to injustices. </span></p>\n<p><span style=\"font-weight: 400;\">From the Netflix preview I got the impression that the film was going to be primarily set during the Vietnam War, but instead it focused on the Bloods during modern-day America, and their time in the war was only briefly shown through flashbacks. Norman was killed during the war, so the other four Bloods return to Vietnam to find his body and the gold they buried about 40 years prior. One of Spike Lee’s most interesting cinematographic choices was to film the flashbacks with the same older actors that portray the four Bloods as in the present-day plot, instead of using younger ones in their place. In my opinion, this was a better choice because the four men were recalling their time in Vietnam and all were able to see themselves as the age they are, but they only remember Norman as young. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">The entire journey in Vietnam brings back memories of the torture that the Bloods went through when they were young soldiers. They show symptoms of the PTSD they still experience, and though they seem proud to call themselves Americans, they also express the disgusting oppression they’ve been subjected to their entire lives. The war is also constantly referred to as the “American War” by the Vietnamese people, who still hold resentment towards the U.S. Yet, both sides show bitterness to each other still to this day; and as the Bloods’ tour guide discloses, “After you’ve been in a war, you understand it never really ends,” which the audience sees through the Blood’s own nervous breakdowns and in tense moments between them and Vietnamese locals who claim the men killed their families. Paul specifically becomes livid at the locals’ statements, and it is only at the end through his visions of Norman that he is able to own up to the truth of his corrupt time in the military. </span></p>\n<p><span style=\"font-weight: 400;\">Norman wasn’t only one of the 5 Bloods but also their leader, teacher and preacher. Otis explained he gave the bloods “Something to believe in. A direction, a purpose. He taught us about Black history when it wasn’t really popular back then… Yeah, he was our Malcolm and our Martin.” Norman emphasized peace and justice but wasn’t afraid to show his frustration with the treatment of Black people in America, and who better to have as the heroic idol of the group than the Black Panther himself. </span></p>\n<p><span style=\"font-weight: 400;\">During one of his many teachings, Norman stressed that “War is about money. Money is about war. Every time I walk out my front door, I see cops patrolling my neighborhood like it’s some police state. I can feel just how much I ain’t worth.” Black men were sent to Vietnam to fight for a country that was not fighting for them. They were fighting for the rights that they weren’t yet granted, and they were sent to die. Black and brown men disproportionately died during the war, because they were disproportionately sent. As Otis explains to Paul’s young son David, “White boys who stayed in college, they’d dodge that shit. They put our poor Black asses on the front lines, killing us off like flies.”</span></p>\n<p><span style=\"font-weight: 400;\">“Da 5 Bloods” deals with emotional trauma caused because of the war, trust issues, complex relationships with fathers and the many and seemingly never-ending injustices experienced by Black people in America. While not my favorite Spike Lee movie, it was still an enjoyable and beneficial watch. The film takes a different approach to Vietnam War films, most of which focus on the hardships of white soldiers and may portray one token Black actor. They too often ignore and erase the Black men who were thrown into an unjust war and died for a country that didn’t care about them. </span></p>\n<p><span style=\"font-weight: 400;\">This film reflects on how little change has happened since the Vietnam War, and how Black people in America still have to worry about losing their lives and lack of full rights every single day. Justice is slow, and because of that many of us get burnt out and discouraged, but we must continue to fight for our rights. Part of Netflix’s new Black Lives Matter category, the release date of “Da 5 Bloods” couldn’t have been at a more fitting time, and watching films that address systemic racism still prevalent in American society is a great way of educating yourself about Black issues. </span></p>\n<p><span style=\"font-weight: 400;\">Rating: 3.5/5 </span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><img alt=\"\" src=\"https://secure.gravatar.com/avatar/eff9771f991113650d9761d1e81fce88?s=100&amp;d=mm&amp;r=g\" srcset=\"https://secure.gravatar.com/avatar/eff9771f991113650d9761d1e81fce88?s=200&amp;d=mm&amp;r=g 2x\" class=\"avatar avatar-100 photo\" height=\"100\" width=\"100\" itemprop=\"image\"></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/lilianalinan/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Liliana Linan</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p><span style=\"font-weight: 400\">Liliana loves watching films, listening to music, and obsessing over Timoth</span><span style=\"font-weight: 400\">é</span><span style=\"font-weight: 400\">e Chalamet. She also adores learning the French language and looks forward to her daily coffee or boba drinks. </span></p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:llinan@ucsb.edu\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94950\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94950\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-23/in-review-spike-lees-da-5-bloods/",
    "id": 6263,
    "author": {
      "id": 656,
      "name": "Liliana Linan"
    },
    "related": [6262, 6261, 6260],
    "comments": [],
    "followers": []
  }, {
    "title": "In Review: “8:46” by Dave Chappelle",
    "category": "Artsweek",
    "subcategory": "Film and TV",
    "publish_date": "2020-06-20T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/davechappelle-1-1592000080399.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/davechappelle-1-1592000080399.jpg?resize=980%2C647&ssl=1",
    "description": "The special comes in the wake of nationwide and worldwide protests denouncing the murder of George Floyd and police brutality and systemic racism against Black Americans as a whole. ",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_94942\" style=\"width: 2080px\" class=\"wp-caption aligncenter\"><a href=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg\" data-slb-active=\"1\" data-slb-asset=\"2049324805\" data-slb-internal=\"0\" data-slb-group=\"94941\"><img aria-describedby=\"caption-attachment-94942\" data-attachment-id=\"94942\" data-permalink=\"https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/chappelle-reg/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?fit=2070%2C1380&amp;ssl=1\" data-orig-size=\"2070,1380\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"chappelle-reg\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?fit=250%2C167&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?fit=888%2C592&amp;ssl=1\" class=\"size-full wp-image-94942\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=888%2C592\" alt=\"\" width=\"888\" height=\"592\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?w=2070&amp;ssl=1 2070w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=250%2C167&amp;ssl=1 250w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=1024%2C683&amp;ssl=1 1024w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=1536%2C1024&amp;ssl=1 1536w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?resize=2048%2C1365&amp;ssl=1 2048w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/chappelle-reg.jpg?w=1776 1776w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"></a><p id=\"caption-attachment-94942\" class=\"wp-caption-text\">Courtesy of TV Guide</p></div>\n<p><span style=\"font-weight: 400;\">In an intimate and raw set recorded in his home state of Ohio, Dave Chappelle returns to the spotlight with his new Netflix-produced special, “8:46.” The title refers to the amount of time, eight minutes and forty-six seconds, that Minneapolis police officer Derek Chauvin pressed his knee into the neck of George Floyd, a Black American, during his detention, killing him in the process. (The special can be accessed on Netflix’s YouTube channel, </span><a href=\"https://www.youtube.com/watch?v=3tR6mKcBbT4&amp;t=6s\"><span style=\"font-weight: 400;\">here</span></a><span style=\"font-weight: 400;\">.) </span></p>\n<p><span style=\"font-weight: 400;\">The special comes in the wake of nationwide and worldwide protests denouncing the murder of George Floyd and police brutality and systemic racism against Black Americans as a whole, with renewed calls for justice for Black Americans who have lost their lives to police officers that engaged in excessive behavior. It also comes in the middle of the ongoing COVID-19 pandemic, with the first few shots showing temperature checks being conducted at the door and socially distanced seating at the event.</span></p>\n<p><span style=\"font-weight: 400;\">The special begins with Chappelle recounting his experience with the Northridge Earthquake, a 6.7 magnitude earthquake that struck the San Fernando Valley region back in 1994. He recalls the tremors lasting about 35 seconds, and even for such a seemingly short time, he thought he might die, and it was one of the most terrifying experiences of his life. It becomes harrowing, then, to try to imagine what George Floyd went through in the eight minutes and forty-six seconds that preceded his death. More so, Chappelle uses the moment to raise questions about what an incident like this — an almost nine-minute long murder in broad daylight with multiple bystanders — says about a society in which a man could do that do another man and “not feel like he was going to get the wrath of God.”</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">To Chappelle, the riots and protests engulfing the nation and world right now have been a long time coming. He responds to criticism from Don Lemon, a commentator for CNN, who asked why more celebrities haven’t been speaking out, to which Chappelle questions the very need to look to (often </span><a href=\"https://www.vulture.com/2020/06/celebrities-racism-i-take-responsibility-video.html\"><span style=\"font-weight: 400;\">clueless</span></a><span style=\"font-weight: 400;\">) celebrities for leadership, observing that “the streets are speaking for themselves right now.” He also responds to Black conservative firebrand Candace Owens, who released a video refusing to embrace George Floyd, a convicted criminal, as a martyr or hero for Black America. Chappelle angrily counters, stating that he does not care what George Floyd did. George Floyd was simply the man that this grave injustice was committed against, and that is why his name is in the papers. He remarks, in one of the more poignant moments of the show, “we aren’t desperate for heroes in the Black community. Any n***a that makes it through this nightmare is my goddamned hero.”</span></p>\n<p><span style=\"font-weight: 400;\">Worth noting here is that this is far from the typical material in Chappelle’s standup, yet does perhaps the best job of all his material at communicating how Dave Chappelle, a Black American, feels about the world he has to face every day. With over 24 million views at the time of writing, it’s also a clear symbol of how much people trust and respect his voice. As someone used to seeing aggressive polarization at every turn of the world, it was genuinely astonishing for me to see neither Don Lemon nor Candace Owens get very defensive over the jokes, and actually independently express their honor and joy at being memorialized in a Dave Chappelle special and to reiterate their belief that he is one of the greatest comedians of all time.</span></p>\n<p><span style=\"font-weight: 400;\">This type of trust is rare, to say the least, and doesn’t seem to be something Chappelle takes for granted. He explores this in the special, recognizing that people seem to trust him because the realness of his jokes make people feel like he’s not lying to them. Yet, he points out, every institution that the people are supposed to trust, from the police to the government, lies to them on almost every level. He ponders the idea that maybe it’s time we figured out better voices to listen to and found better ways to get people to listen. </span></p>\n<p><span style=\"font-weight: 400;\">It’s pretty incredible to see Chappelle pack in this many emotions, jokes and meaningful moments of social commentary into a comedy special that clocks in at a little under 30 minutes. If you’ve seen Chappelle’s old specials tackling the material of police brutality (his 2000 special “Killin’ Them Softly” is hilarious and outstanding), it’s really interesting to view “8:46” as a mature conclusion to those same ideas. Rather than adding to his arsenal of jokes on the topic, this special more somberly lays out his grief at the repeated injustices that Black Americans have to live their entire lives in fear of being victims of. Approaching the topic with a unique combination of sensitivity, moments of light-heartedness and hurt resignation, “8:46” makes for some of Chappelle’s most profound social commentary yet. In today’s cascade of conflicting and angry voices, I think his views are, at the very least, a perspective to deeply consider, regardless of your political views.</span></p>\n<p><span style=\"font-weight: 400;\">Rating: 9.5/10</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94941\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94941\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-20/in-review-846-by-dave-chappelle/",
    "id": 6262,
    "author": {
      "id": 278,
      "name": "Aayush Dixit"
    },
    "related": [6261, 6260, 6259],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "Multimedia",
  "articles": [{
    "title": "Animal Testing",
    "category": "Multimedia",
    "subcategory": "Comics",
    "publish_date": "2020-07-09T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=980%2C647&ssl=1",
    "description": null,
    "content": "<div class=\"single-post-content\">\n            <p><img data-attachment-id=\"95083\" data-permalink=\"https://dailynexus.com/2020-07-09/animal-testing/animaltesting/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?fit=2160%2C1080&amp;ssl=1\" data-orig-size=\"2160,1080\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"animaltesting\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?fit=250%2C125&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?fit=888%2C444&amp;ssl=1\" class=\"alignnone wp-image-95083 size-full\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=888%2C444\" alt=\"\" width=\"888\" height=\"444\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?w=2160&amp;ssl=1 2160w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=250%2C125&amp;ssl=1 250w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=1024%2C512&amp;ssl=1 1024w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=768%2C384&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=1536%2C768&amp;ssl=1 1536w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?resize=2048%2C1024&amp;ssl=1 2048w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/animaltesting.png?w=1776 1776w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95082\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/animal-testing/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95082\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/animal-testing/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/animal-testing/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/animal-testing/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-09/animal-testing/",
    "id": 6991,
    "author": {
      "id": 899,
      "name": "Emily Liu"
    },
    "related": [6990, 6989, 6988],
    "comments": [],
    "followers": []
  }, {
    "title": "Batcave (Home) Session with Extremophiles",
    "category": "Multimedia",
    "subcategory": "Video",
    "publish_date": "2020-07-04T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-04-at-5.28.42-PM.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-04-at-5.28.42-PM.png?resize=980%2C647&ssl=1",
    "description": "Introducing Batcave (Home) sessions. Watch Extremophiles perform their latest music and answer questions about their creative process.",
    "content": "<div class=\"single-post-content\">\n            <p>Introducing Batcave (Home) sessions. Watch Extremophiles perform their latest music and answer questions about their creative process.</p>\n<p><span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class=\"youtube-player\" type=\"text/html\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5MgZ3GpT4vs?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent\" allowfullscreen=\"true\" style=\"border:0;\"></iframe></span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95055\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95055\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/",
    "id": 6517,
    "author": {
      "id": 843,
      "name": "Harvest Keeney"
    },
    "related": [6516, 6515, 6514],
    "comments": [],
    "followers": []
  }, {
    "title": "Batcave (Home) Session with Extremophiles",
    "category": "Multimedia",
    "subcategory": "Video",
    "publish_date": "2020-07-04T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-04-at-5.28.42-PM.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-04-at-5.28.42-PM.png?resize=980%2C647&ssl=1",
    "description": "Introducing Batcave (Home) sessions. Watch Extremophiles perform their latest music and answer questions about their creative process.",
    "content": "<div class=\"single-post-content\">\n            <p>Introducing Batcave (Home) sessions. Watch Extremophiles perform their latest music and answer questions about their creative process.</p>\n<p><span class=\"embed-youtube\" style=\"text-align:center; display: block;\"><iframe class=\"youtube-player\" type=\"text/html\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/5MgZ3GpT4vs?version=3&amp;rel=1&amp;fs=1&amp;autohide=2&amp;showsearch=0&amp;showinfo=1&amp;iv_load_policy=1&amp;wmode=transparent\" allowfullscreen=\"true\" style=\"border:0;\"></iframe></span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95055\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95055\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-04/batcave-home-session-with-extremophiles/",
    "id": 6517,
    "author": {
      "id": 843,
      "name": "Harvest Keeney"
    },
    "related": [6516, 6515, 6514],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "News",
  "articles": [{
    "title": "UCSB Asst. Professor Sues Journalist for Defamation Over Reportings About Title IX Violations",
    "category": "News",
    "subcategory": "Campus",
    "publish_date": "2020-07-11T07:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=980%2C647&ssl=1",
    "description": "In the lawsuit filed last month, Professor Danielle Kurin alleges that journalist Michael Balter knowingly made defamatory, libelous and slanderous statements against her. ",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">UC Santa Barbara assistant professor Danielle Kurin is suing an investigative journalist in an $18 million defamation case, after the journalist published a series of blog posts that detail allegations of sexual misconduct and Title IX violations against Kurin and her then-husband.</span></p>\n<div id=\"attachment_93578\" style=\"width: 2058px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-93578\" data-attachment-id=\"93578\" data-permalink=\"https://dailynexus.com/2020-03-16/ucsb-faculty-association-issues-letter-advising-against-the-use-of-proctoru-testing-services/dsc_0347/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?fit=2048%2C1363&amp;ssl=1\" data-orig-size=\"2048,1363\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"DSC_0347\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?fit=250%2C166&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?fit=888%2C591&amp;ssl=1\" class=\"wp-image-93578 size-full\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=888%2C591\" alt=\"\" width=\"888\" height=\"591\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?w=2048&amp;ssl=1 2048w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=250%2C166&amp;ssl=1 250w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=768%2C511&amp;ssl=1 768w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?resize=1536%2C1022&amp;ssl=1 1536w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0347.jpg?w=1776 1776w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-93578\" class=\"wp-caption-text\"><span style=\"font-weight: 400;\">Kurin, an assistant professor in the Department of Anthropology, is scheduled to apply for tenure at UCSB in September. </span><em>Max Abrams / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">In the lawsuit filed last month, Kurin alleges that journalist Michael Balter knowingly made defamatory, libelous and slanderous statements in two </span><a href=\"http://michael-balter.blogspot.com/2020/02/at-uc-santa-barbara-and-in-peru.html\"><span style=\"font-weight: 400;\">blog</span></a> <a href=\"http://michael-balter.blogspot.com/2020/03/uc-santa-barbara-kept-misconduct.html\"><span style=\"font-weight: 400;\">posts</span></a><span style=\"font-weight: 400;\"> in which he reported that Kurin’s former husband and archeological partner, Enmanuel Gomez Choque, allegedly sexually harassed and sexually assaulted multiple students during several summer field expeditions in Peru. </span></p>\n<p><span style=\"font-weight: 400;\">Balter has written for numerous publications, such as Science Magazine, The Verge and the Columbia Journalism Review, and has taught journalism at New York University, Boston University and The City College of New York. </span></p>\n<p><span style=\"font-weight: 400;\">Kurin, an assistant professor in the Department of Anthropology, is scheduled to apply for tenure at UCSB in September, according to the lawsuit. The lawsuit states that Balter, through his blog posts and </span><a href=\"https://twitter.com/mbalter/status/1208445918393065477\"><span style=\"font-weight: 400;\">several</span></a> <a href=\"https://twitter.com/mbalter/status/1268963951481675782\"><span style=\"font-weight: 400;\">posts</span></a><span style=\"font-weight: 400;\"> from his Twitter account, has interfered with Kurin’s career prospects and tenure application.   </span></p>\n<p><span style=\"font-weight: 400;\">In his first blog post about Kurin and Gomez Choque in February, Balter reported that Gomez Choque sexually harassed students from UCSB and other universities during a summer field school in Peru 2015, according to Title IX documents; he added that Kurin then retaliated against students involved in a subsequent 2016 Title IX case filed against Gomez Choque and Kurin. </span></p>\n<p><span style=\"font-weight: 400;\">To report this, Balter obtained a copy of a 2016 Title IX case filed against both Gomez Choque and Kurin under the California Public Records Act and interviewed numerous witnesses of Gomez Choque and Kurin’s alleged actions at the field school.</span></p>\n<p><span style=\"font-weight: 400;\">Kurin reached a settlement with UCSB over the Title IX investigation in 2016, according to David Scher, Kurin’s lawyer in the lawsuit. University spokesperson Andrea Estrada declined to comment because the university “is not a party to that lawsuit.” Casey Walsh, an anthropology professor and chair of the department, did not respond to multiple requests for comment about both Kurin’s Title IX investigation and the lawsuit.  </span></p>\n<p><span style=\"font-weight: 400;\">“Dr. Kurin is not a perfect individual. She made some mistakes a few years ago and has apologized for them, acknowledged them, took responsibility for her actions and completed a settlement with the university that everybody was happy with,” Scher said. </span></p>\n<p><span style=\"font-weight: 400;\">Scher confirmed that Kurin was charged with “sustained charges” by the Title IX office in 2016, meaning that the claims of misconduct by both Kurin and Gomez Choque were found to be substantiated.</span></p>\n<p><span style=\"font-weight: 400;\">According to Balter’s blog posts, UCSB placed Kurin on a three-year suspension from Spring 2016 to Fall 2019. While on suspension, Kurin ran a summer field school in Peru with Gomez Choque and during the 2018 program, Gomez Choque allegedly sexually assaulted a student, Balter reported.</span></p>\n<p><span style=\"font-weight: 400;\">Estrada declined to confirm whether Kurin had been placed on suspension. The lawsuit states that b</span><span style=\"font-weight: 400;\">etween 2016 and 2018, Kurin “engaged in the UCSB disciplinary process and utilizing the proper forums available to her as a professor, she amicably settled the matter with </span><span style=\"font-weight: 400;\">UCSB in March 2018.” </span></p>\n<p><span style=\"font-weight: 400;\">Scher said that Kurin was on leave, which he says she took “of her own account partly,” between 2016 and 2019, “as a way to resolve the case so that the university could be satisfied that she was going to do what she needed to do to come back to the university in good standing.” </span></p>\n<p><span style=\"font-weight: 400;\">Kurin’s lawsuit alleges that in reporting about the Title IX investigation and Kurin’s suspension, “Balter acted with overt malice, hatred, and ill will towards Kurin.”</span></p>\n<p><span style=\"font-weight: 400;\">“He’s trying to destroy her. He’s trying to prevent her from getting tenure. That’s what he’s doing. That is why we filed this lawsuit,” Scher told the Nexus over Zoom.</span></p>\n<p><span style=\"font-weight: 400;\">“It’s not all false,” he said, referring to Balter’s reporting, “but a lot of it is dramatically exaggerated and we cannot take it anymore. We’re tired of it. He just needs to stop and go away so that Dr. Kurin can go before the tenure board truthfully, honestly, with actual facts.”</span></p>\n<p><span style=\"font-weight: 400;\">The lawsuit states that Balter’s blogs “repeatedly demand that Kurin not be granted tenure and that she otherwise be banned from any kind of gainful employment.” The lawsuit points to instances from Balter’s past as evidence of a pattern of misconduct, including negative Amazon reviews of </span><a href=\"https://www.amazon.com/Goddess-Bull-Catalhoyuk-Archaeological-Civilization/dp/1598740695/ref=sr_1_1?dchild=1&amp;qid=1594356393&amp;refinements=p_27%3AMichael+Balter&amp;s=books&amp;sr=1-1\"><span style=\"font-weight: 400;\">a book</span></a><span style=\"font-weight: 400;\"> Balter wrote in 2009 called “</span><span style=\"font-weight: 400;\">The Goddess and the Bull: Catalhoyuk–An Archaeological Journey to the Dawn of Civilization,”</span><span style=\"font-weight: 400;\"> which centered around an archaeological dig. The lawsuit says the book focuses more on “who [the archeologists] hooked up with and when.”</span></p>\n<p><span style=\"font-weight: 400;\">The lawsuit describes Balter’s dismissal from his former job at Science Magazine, alleging it was for “misconduct” and a “serious breach of trust,” both of which Balter denied on his blog, on social media and when speaking to the Nexus. </span></p>\n<p><span style=\"font-weight: 400;\">Balter said his dismissal from Science Magazine was due to a “longstanding mutual breakdown of trust” and that Kurin “cherry-picked negative things about my book.”</span></p>\n<p><span style=\"font-weight: 400;\">“She was basically trying to paint me out as being somebody who maybe knew nothing about archaeology and who was constantly getting fired from jobs that I actually really was not fired from,” Balter said. </span></p>\n<p><span style=\"font-weight: 400;\">One part of this case centers around Balter’s wording in his reporting, in which he frequently describes Kurin being found “guilty” of retaliation by a Title IX investigation. </span></p>\n<p><span style=\"font-weight: 400;\">Balter said that he used the word “guilty” in the colloquial sense, not a legal sense, while Scher said that Balter’s use of the word implies that Kurin was convicted of a crime.</span></p>\n<p><span style=\"font-weight: 400;\">“Title IX charged her [with] sustained charges. Sustaining charges does not mean guilty,” but instead means that the claims in the Title IX case against both Gomez Choque and Kurin were found to be substantiated, Scher said. </span></p>\n<p><span style=\"font-weight: 400;\">Balter said he stands by his use of the word “guilty” and won’t retract his blog posts. </span></p>\n<p><span style=\"font-weight: 400;\">“I’m not apologizing for the word guilty …  And I think that they can’t win the case on that; in the colloquial sense of the word, she was found guilty of misconduct by Title IX,” Balter said. </span></p>\n<p><span style=\"font-weight: 400;\">Estrada said that “the University investigates all reports of alleged misconduct by faculty” but could not comment on specific cases. </span></p>\n<p><span style=\"font-weight: 400;\">The lawsuit cites Balter’s social media posts as evidence that he acted with overt malice against Kurin and knowingly published false statements against her, such as reporting that Kurin attempted to cover up Gomez Choque’s alleged misconduct and refused to cooperate with the Title IX investigation. In those posts, Balter called on UCSB and the anthropology department to not give Kurin tenure, according to the lawsuit.</span></p>\n<p><span style=\"font-weight: 400;\">Balter argues he has a First Amendment right to post his opinions on his blog and social media, including those encouraging UCSB to not give Kurin tenure. </span></p>\n<p><span style=\"font-weight: 400;\">“I have said openly and publicly that I do not believe Danielle Kurin should be given tenure, because I think that her misconduct shows that she cannot be trusted around students,” Balter said. “I’m entitled to have an opinion under the First Amendment about what the result of all this should be.”</span></p>\n<p><span style=\"font-weight: 400;\">Balter said he carries no malice toward Kurin because he had never heard of her before he began reporting on her. </span></p>\n<p><span style=\"font-weight: 400;\">“I haven’t made up any stories about Danielle Kurin. I haven’t said anything about her that I don’t firmly believe to be true based on my own reporting,” Balter said.</span></p>\n<p><span style=\"font-weight: 400;\">Balter has until Aug. 15 to respond to the lawsuit, less than a month before Kurin’s tenure review is scheduled to begin. Scher said he plans to update the lawsuit with more examples of Balter’s alleged overt malice toward Kurin in an amended filing. </span></p>\n<p><span style=\"font-weight: 400;\">Balter said he is looking for a First Amendment lawyer to take on his case, but said he is confident that his reporting and social media posts are protected under the law. He has also created a </span><a href=\"https://www.gofundme.com/f/freedom-of-the-press-defense-fund-kurin-v-balter\"><span style=\"font-weight: 400;\">GoFundMe</span></a><span style=\"font-weight: 400;\"> to cover upcoming legal expenses and has since raised over $3,700 as of July 11. </span></p>\n<p><span style=\"font-weight: 400;\">“I reported the truth. I reported it faithfully. I reported it in good faith. I am not guilty of defamation by a long shot,” he said.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/katherine-swartz/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/05/IMG_2105.jpg?w=888&amp;ssl=1\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/katherine-swartz/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Katherine Swartz</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Katherine Swartz is the University News Editor for the 2020-2021 school year. She reports on campus news, Associated Students and UC-wide news. She can be reached at kswartz@dailynexus.com or news@dailynexus.com, and on twitter @kv_swartz.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:kswartz@dailynexus.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95089\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-11/ucsb-asst-professor-sues-journalist-for-defamation-over-reportings-about-title-ix-violations/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95089\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-11/ucsb-asst-professor-sues-journalist-for-defamation-over-reportings-about-title-ix-violations/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-11/ucsb-asst-professor-sues-journalist-for-defamation-over-reportings-about-title-ix-violations/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-11/ucsb-asst-professor-sues-journalist-for-defamation-over-reportings-about-title-ix-violations/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-11/ucsb-asst-professor-sues-journalist-for-defamation-over-reportings-about-title-ix-violations/",
    "id": 4300,
    "author": {
      "id": 24,
      "name": "Katherine Swartz"
    },
    "related": [4299, 4298, 4297],
    "comments": [],
    "followers": []
  }, {
    "title": "UC To Sue Federal Government, Seeking To Prevent Deportation of International Students",
    "category": "News",
    "subcategory": "UC News",
    "publish_date": "2020-07-08T07:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=980%2C647&ssl=1",
    "description": "Currently, there are over 41,000 graduate and undergraduate international students within the UC system. ",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">The University of California announced Wednesday that it plans to sue the United States federal government, following a policy change from Immigration and Customs Enforcement that bars international students from residing in the U.S. if they are enrolled in a university that only offers online courses during the coronavirus pandemic for the Fall 2020 academic term. </span></p>\n<div id=\"attachment_93586\" style=\"width: 2058px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-93586\" data-attachment-id=\"93586\" data-permalink=\"https://dailynexus.com/2020-03-16/ucsb-faculty-association-issues-letter-advising-against-the-use-of-proctoru-testing-services/dsc_0471/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?fit=2048%2C1363&amp;ssl=1\" data-orig-size=\"2048,1363\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"DSC_0471\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?fit=250%2C166&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?fit=888%2C591&amp;ssl=1\" class=\"size-full wp-image-93586\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=888%2C591\" alt=\"\" width=\"888\" height=\"591\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?w=2048&amp;ssl=1 2048w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=250%2C166&amp;ssl=1 250w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=768%2C511&amp;ssl=1 768w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?resize=1536%2C1022&amp;ssl=1 1536w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/03/DSC_0471.jpg?w=1776 1776w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-93586\" class=\"wp-caption-text\"><span style=\"font-weight: 400;\">UC Santa Barbara, specifically, is home to over 4,000 international students. </span><em>Max Abrams / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">The UC said in </span><a href=\"https://www.universityofcalifornia.edu/press-room/uc-poised-sue-federal-government-over-new-visa-policy-international-students\"><span style=\"font-weight: 400;\">a press release</span></a><span style=\"font-weight: 400;\"> that it is filing suit to seek a temporary restraining order and “preliminary and permanent injunctive relief” to block the U.S. Department of Homeland Security (DHS) and Immigration and Customs Enforcement (I.C.E.) from forcing international students to leave the country. </span></p>\n<p><span style=\"font-weight: 400;\">I.C.E. first </span><a href=\"https://www.ice.gov/news/releases/sevp-modifies-temporary-exemptions-nonimmigrant-students-taking-online-courses-during\"><span style=\"font-weight: 400;\">announced</span></a><span style=\"font-weight: 400;\"> on July 6 that it was changing its policy for non-resident international student visas through the Student and Exchange Visitor Program (SEVP). The new I.C.E. policy affects students with F-1 or M-1 visas, which are issued to students who are either attending an academic or vocational program respectively, according to the UC press release.</span></p>\n<p><span style=\"font-weight: 400;\">Under the new policy, international students attending colleges that are offering only online courses in the fall must either transfer to a new college or leave the country, and will face deportation if they do not comply. For schools under a hybrid model, such as the UC system, international students must be enrolled in at least one in-person class in order to stay in the U.S., according to the I.C.E. announcement.  </span></p>\n<p><span style=\"font-weight: 400;\">The UC said in the press release that the lawsuit will argue that “ICE failed to follow the Administrative Procedure Act” and “failed to consider both the University’s and students’ reliance interests when it barred international students from attending universities that only offer online courses during the ongoing health crisis.” </span></p>\n<p><span style=\"font-weight: 400;\">“As part of our effort to respond to COVID-19 and to protect the health of all our students, UC has increased online instruction and decreased in-person classes … so it is imperative for UC to file this lawsuit in order to protect our students,” UC Board of Regents Chair John A. Pérez said in the press release. </span></p>\n<p><span style=\"font-weight: 400;\">The UC’s impending lawsuit follows the trail of Harvard University and Massachusetts Institute of Technology, who jointly filed a lawsuit against the federal government on July 8 for the same reasons, </span><a href=\"https://www.npr.org/sections/coronavirus-live-updates/2020/07/08/888871130/harvard-mit-sue-immigration-officials-over-rule-blocking-some-international-stud\"><span style=\"font-weight: 400;\">NPR reported.</span></a></p>\n<p><span style=\"font-weight: 400;\">This is the second time ever that the UC has sued DHS. Previously, </span><a href=\"https://www.universityofcalifornia.edu/press-room/university-california-sues-trump-administration-unlawful-repeal-daca-program\"><span style=\"font-weight: 400;\">the UC sued DHS in 2017</span></a><span style=\"font-weight: 400;\"> over its rescission of the Deferred Action for Childhood Arrivals (DACA) program, and earlier this month the Supreme Court </span><a href=\"https://www.supremecourt.gov/opinions/19pdf/18-587_5ifl.pdf\"><span style=\"font-weight: 400;\">ruled against</span></a><span style=\"font-weight: 400;\"> DHS and in the UC’s favor. </span></p>\n<p><span style=\"font-weight: 400;\">Daily life for many international students is already a challenge, but the added burden of taking online classes in a different country — and time zone — </span><a href=\"https://dailynexus.com/2020-06-27/hours-ahead-but-left-behind-international-students-face-uncertainty-with-remote-instruction/\"><span style=\"font-weight: 400;\">adds more obstacles to the mix.</span></a><span style=\"font-weight: 400;\">  </span></p>\n<p><span style=\"font-weight: 400;\">Currently, there are over 41,000 graduate and undergraduate international students within the UC system, according to the UC’s </span><a href=\"https://www.universityofcalifornia.edu/infocenter/fall-enrollment-glance\"><span style=\"font-weight: 400;\">Fall 2019 enrollment data.</span></a><span style=\"font-weight: 400;\"> UC Santa Barbara, specifically, is home to over 4,000 of those international students, according to the data.</span></p>\n<p><span style=\"font-weight: 400;\">UC President Janet Napolitano described I.C.E.’s policy change as “perplexing” in a </span><a href=\"https://www.universityofcalifornia.edu/content/statement-uc-president-janet-napolitano-ice-announcement\"><span style=\"font-weight: 400;\">statement</span></a><span style=\"font-weight: 400;\"> earlier this week, adding that “Challenges and uncertainty related to COVID-19 are already weighing heavily on students; now is the worst time to burden them further with anxiety.”</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/max-abrams/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/04/max.jpg?w=888&amp;ssl=1\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/max-abrams/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Max Abrams</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Max Abrams serves as the lead news editor for the 2020-2021 school year. He is from Buffalo. That’s all you need to know.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_blank\" href=\"https://twitter.com/MaxAbrams5\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-twitter\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path></svg></a><a target=\"_blank\" href=\"http://photog_max\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-instagram\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 448 512\"><path fill=\"currentColor\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path></svg></a><a target=\"_self\" href=\"mailto:maxabrams@dailynexus.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95075\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-08/uc-to-sue-federal-government-seeking-to-prevent-deportation-of-international-students/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95075\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-08/uc-to-sue-federal-government-seeking-to-prevent-deportation-of-international-students/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-08/uc-to-sue-federal-government-seeking-to-prevent-deportation-of-international-students/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-08/uc-to-sue-federal-government-seeking-to-prevent-deportation-of-international-students/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-08/uc-to-sue-federal-government-seeking-to-prevent-deportation-of-international-students/",
    "id": 3672,
    "author": {
      "id": 31,
      "name": "Max Abrams"
    },
    "related": [3671, 3670, 3669],
    "comments": [],
    "followers": []
  }, {
    "title": "Michael V. Drake Appointed as First Black UC President, Succeeding Janet Napolitano",
    "category": "News",
    "subcategory": "UC News",
    "publish_date": "2020-07-07T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=980%2C624&ssl=1",
    "description": "Drake is the 21st UC President and the first Black president in UC history. \r\n",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">Michael V. Drake, president of The Ohio State University and former chancellor of UC Irvine, will serve as the next UC President beginning August 1, 2020. Drake is the 21st UC President and the first Black president in UC history. </span></p>\n<div id=\"attachment_95073\" style=\"width: 1104px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-95073\" data-attachment-id=\"95073\" data-permalink=\"https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/screen-shot-2020-07-07-at-5-24-08-pm/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?fit=1094%2C624&amp;ssl=1\" data-orig-size=\"1094,624\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"Screen Shot 2020-07-07 at 5.24.08 PM\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?fit=250%2C143&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?fit=888%2C506&amp;ssl=1\" class=\"wp-image-95073 size-full\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=888%2C507\" alt=\"\" width=\"888\" height=\"507\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?w=1094&amp;ssl=1 1094w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=250%2C143&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=1024%2C584&amp;ssl=1 1024w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-07-at-5.24.08-PM.png?resize=768%2C438&amp;ssl=1 768w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-95073\" class=\"wp-caption-text\"><em>In his remarks to the Regents, Drake touched upon the challenges for the university, including financial impacts from the coronavirus pandemic.</em></p></div>\n<p><span style=\"font-weight: 400;\">The UC Regents unanimously appointed Drake in a special meeting on Tuesday afternoon, following a nearly year-long search to replace outgoing President Janet Napolitano. During the meeting, several Regents highlighted Drake’s extensive history in education, both within and outside the UC system — a sharp contrast to Napolitano, who came to the helm with no academic leadership experience. </span></p>\n<p><span style=\"font-weight: 400;\">Napolitano has served as UC president for the past seven years after previously serving as Secretary of Homeland Security in the Obama administration and governor of Arizona.  </span></p>\n<p><span style=\"font-weight: 400;\">The Regents approved Drake’s salary at $890,000, according to a UC press release sent after the meeting. </span></p>\n<p><span style=\"font-weight: 400;\">The Regents’ search committee held </span><a href=\"https://dailynexus.com/2020-01-16/the-uc-should-strive-for-better-students-faculty-and-stakeholders-share-suggestions-for-the-next-uc-president-at-ucla-public-forum/\"><span style=\"font-weight: 400;\">multiple</span></a> <a href=\"https://dailynexus.com/2020-01-30/uc-regents-hold-town-hall-at-uc-berkeley-to-discuss-selection-of-new-uc-president/\"><span style=\"font-weight: 400;\">town</span></a> <a href=\"https://dailynexus.com/2020-02-05/uc-merced-urges-uc-regents-special-committee-at-town-hall-meeting-to-consider-their-needs-in-selecting-next-uc-president/\"><span style=\"font-weight: 400;\">halls</span></a><span style=\"font-weight: 400;\"> at various UC campuses over the 2019-20 academic year during which students called on the Regents to choose a leader who would prioritize climate change and workers’ rights and provide a more equitable environment for all students, faculty and staff. </span></p>\n<p><span style=\"font-weight: 400;\">In his remarks to the Regents, Drake touched upon the challenges for the university, including financial impacts from the coronavirus pandemic, demand for greater diversity and </span><a href=\"https://dailynexus.com/2020-07-07/academic-council-recommends-uc-to-defund-police-ban-police-firearms/\"><span style=\"font-weight: 400;\">calls to defund UC police departments</span></a><span style=\"font-weight: 400;\">. </span></p>\n<p><span style=\"font-weight: 400;\">“The UC is among the few institutions worldwide best equipped to meet these challenges. Perhaps not to solve them and not to solve them single handedly, but to be fully engaged in finding solutions,” Drake said. </span></p>\n<p><span style=\"font-weight: 400;\">Academic Senate Chair Kum-Kum Bhavnani said that Drake will “steer the UC into a bold new era,” and lauded his experience in handling “budgetary challenges, issues of health and healthcare, racism and inclusion [and] policing and security.” </span></p>\n<p><span style=\"font-weight: 400;\">“Michael Drake’s commitment to graduate and undergraduate students, to the work of faculty, to understanding the centrality of all UC employees along with his very deep commitment to social mobility, is a joy to encounter.” </span></p>\n<p><span style=\"font-weight: 400;\">Drake attended Stanford University as an undergraduate, then received a medical degree from UC San Francisco. He served as the fifth chancellor of UC Irvine from 2005 to 2014 and the president of The Ohio State University from 2014 to the present. Drake is also board of governors chairman of the NCAA and a board member for the Rock and Roll Hall of Fame, according to the UC press release. </span></p>\n<p><span style=\"font-weight: 400;\">Regent Sherry Lansing — vice chair of the presidential search committee — said the competition for the position was steep, but Drake stood above his contenders for his history of innovation and commitment to diversity. </span></p>\n<p><span style=\"font-weight: 400;\">“One of the things that was very important to us is somebody who’s ready on day one and Michael brings that quality because of his familiarity with UC,” she said. “When you look at what he did as chancellor [of UC Irvine] and at all the other jobs he had at Ohio State, you see that Michael is bold and he is capable of thinking outside of the box.”</span></p>\n<p><span style=\"font-weight: 400;\">After Drake’s “illustrious” career in education and a public announcement of retirement, Lansing said she was surprised that he took the position, but amounts it to Drake’s history with the UC system. </span></p>\n<p><span style=\"font-weight: 400;\">“I think he’s doing this job simply because he loves UC.”</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/katherine-swartz/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/05/IMG_2105.jpg?w=888&amp;ssl=1\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/katherine-swartz/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Katherine Swartz</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Katherine Swartz is the University News Editor for the 2020-2021 school year. She reports on campus news, Associated Students and UC-wide news. She can be reached at kswartz@dailynexus.com or news@dailynexus.com, and on twitter @kv_swartz.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:kswartz@dailynexus.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95072\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95072\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-07/michael-v-drake-appointed-as-first-black-uc-president-succeeding-janet-napolitano/",
    "id": 3643,
    "author": {
      "id": 24,
      "name": "Katherine Swartz"
    },
    "related": [3642, 3641, 3640],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "Nexustentialism",
  "articles": [{
    "title": "Dowries, Barn Raises, Making Comeback",
    "category": "Nexustentialism",
    "subcategory": "Nexustentialism",
    "publish_date": "2020-07-02T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?resize=980%2C647&ssl=1",
    "description": "Since such things like global pandemics, once thought to be outdated, have come back around, why not revive some highlights of yesteryear while we’re at it!",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_95024\" style=\"width: 687px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-95024\" data-attachment-id=\"95024\" data-permalink=\"https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/barn-raising/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?fit=1000%2C667&amp;ssl=1\" data-orig-size=\"1000,667\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"barn raising\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?fit=250%2C167&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?fit=888%2C592&amp;ssl=1\" class=\" wp-image-95024\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?resize=677%2C452\" alt=\"\" width=\"677\" height=\"452\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?resize=250%2C167&amp;ssl=1 250w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/07/barn-raising.jpg?w=1000&amp;ssl=1 1000w\" sizes=\"(max-width: 677px) 100vw, 677px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-95024\" class=\"wp-caption-text\">Emma Demorest / Daily Nexus</p></div>\n<p> </p>\n<p><span style=\"font-weight: 400;\">Since such things like global pandemics, once thought to be outdated, have come back around, why not revive some trends of the past while we’re at it! Below are some highlights of yesteryear that Nexustentialism predicts we can look forward to making a comeback. </span></p>\n<p> </p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><strong>Dowries </strong></p>\n<p><span style=\"font-weight: 400;\">That’s right, dowries are back, and better than ever. For those born past 1925, think of a dowry as a marital goodie bag, but only for the men. The women, obviously, don’t get one but instead can only </span><i><span style=\"font-weight: 400;\">hope</span></i><span style=\"font-weight: 400;\"> that herself and her family have prepared one good enough to entice the man she hopes to take her hand. What can </span><i><span style=\"font-weight: 400;\">you</span></i><span style=\"font-weight: 400;\"> start putting together for your personal dowry, you ask? Nexustentialism recommends a small herd of livestock, a bag or two of grains or some kind of silver houseware (think candlesticks). </span></p>\n<p> </p>\n<p><strong>Making Your Own Butter </strong></p>\n<p><span style=\"font-weight: 400;\">Normalize butter making! Like most things before the year 1990, this activity takes tons of time and energy and is super easy to fuck up, but who can deny the endless fun one feels while mushing and mushing that buttermilk from your very own cow (also you will need a cow for this) with a wooden spoon for upwards of five hours?! </span></p>\n<p> </p>\n<p><strong>Those Bikes With the Huge Ass Wheels </strong></p>\n<p><span style=\"font-weight: 400;\">Students of UCSB can rejoice and do away with their dull, rusting fixies or their freshman-year cruisers with the cupholders still attached. These 19th century bikes have everything; a wheel so big you’ll crush anyone that crosses your path in the bike loop, and a wheel so small you might just forget it’s there. Most importantly, bike thieves won’t be able to steal this baby, because </span><span style=\"font-weight: 400;\">—</span><span style=\"font-weight: 400;\"> a true marvel of physics </span><span style=\"font-weight: 400;\">—</span><span style=\"font-weight: 400;\"> no one on God’s green earth understands how to ride it. </span></p>\n<p> </p>\n<p><strong>Barn Raises </strong></p>\n<p><span style=\"font-weight: 400;\">We know what you’re thinking. “Why would we, college students of Isla Vista, need a barn to even raise?!” Well, we’ll tell you. First of all, you’re going to need somewhere to put your cow, with all that butter you’re going to make. With it’s mix of physically demanding work and amazing (barn) outcome, D.P. parties and weekly T.G.s have nothing on this social event. Make sure to BYO tools and a good snack (may we suggest a pie, or some kind of jam?). Who knows, while raising those planks and hammering down that siding, you </span><i><span style=\"font-weight: 400;\">could</span></i><span style=\"font-weight: 400;\"> meet the partner of your dreams.</span></p>\n<p> </p>\n<p><strong>Cocaine in Everything </strong></p>\n<p><span style=\"font-weight: 400;\">Because we think everyone can agree, we need a little something to take the edge off. </span></p>\n<p> </p>\n<p><i><span style=\"font-weight: 400;\">Emma Demorest wonders if she’ll ever wed since her dowry consists of only a DVD box set of 30 Rock and a pack of frozen Trader Joe’s latkes. </span></i></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/emma-demorest/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/05/IMG_2040.jpeg?w=888&amp;ssl=1\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/emma-demorest/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Emma Demorest</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Emma Demorest is the editor of Nexustentialism. She once licked the largest wooden yoyo in the world.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:demorest.emma@gmail.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95023\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95023\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-02/dowries-barn-raises-making-comeback/",
    "id": 6990,
    "author": {
      "id": 844,
      "name": "Emma Demorest"
    },
    "related": [6989, 6988, 6987],
    "comments": [],
    "followers": []
  }, {
    "title": "UCSB To Have In-Person Zoom Classes",
    "category": "Nexustentialism",
    "subcategory": "Nexustentialism",
    "publish_date": "2020-06-19T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?resize=807%2C641&ssl=1",
    "description": "When asked how this differed from normal in-person classes, Talerning burst into tears, screaming at our Nexustentialism field reporter, “Why would you fucking say that?” — before running out th...",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_94913\" style=\"width: 677px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-94913\" data-attachment-id=\"94913\" data-permalink=\"https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/zoomguy/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?fit=807%2C641&amp;ssl=1\" data-orig-size=\"807,641\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"zoomguy\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?fit=250%2C199&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?fit=807%2C641&amp;ssl=1\" class=\"wp-image-94913 \" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy-250x199.jpg?resize=667%2C531\" alt=\"\" width=\"667\" height=\"531\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?resize=250%2C199&amp;ssl=1 250w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?resize=768%2C610&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/zoomguy.jpg?w=807&amp;ssl=1 807w\" sizes=\"(max-width: 667px) 100vw, 667px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-94913\" class=\"wp-caption-text\">Emma Demorest / Daily Nexus</p></div>\n<p> </p>\n<p><span style=\"font-weight: 400;\">The University of California has recently made the landmark decision to embark into a new frontier of educational possibilities: The Zoom classes utilized for remote instruction during the Spring Quarter 2020 will soon take place in person.</span></p>\n<p><span style=\"font-weight: 400;\">“If we’ve learned anything from the Spring Quarter 2020,” UCSB official DJ Talerning said, “it’s that everybody loves Zoom. We know this because of all the people who said they loved it. A survey conducted by UCSB researchers even showed that 100% of UCSB students </span><i><span style=\"font-weight: 400;\">loved</span></i><span style=\"font-weight: 400;\"> their Zoom classes.” </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">When asked about the sample size of this survey, Talerning quickly changed the subject.</span></p>\n<p><span style=\"font-weight: 400;\">“I like that I don’t have to wear pants!” said the only kid who took the survey, holding up the Amazon gift card he won for participating.</span></p>\n<p><span style=\"font-weight: 400;\">“We just really wanted students to be able to relive this period of </span><i><span style=\"font-weight: 400;\">togetherness,</span></i><span style=\"font-weight: 400;\"> you know? The idea that we were all </span><i><span style=\"font-weight: 400;\">together</span></i><span style=\"font-weight: 400;\"> even though we were </span><i><span style=\"font-weight: 400;\">physically</span></i><span style=\"font-weight: 400;\"> apart,” Talerning declared, denying any claims that his golden idiom was “bullshit” and “literally just wrong.” </span></p>\n<p><span style=\"font-weight: 400;\">Talerning showed off his pearly whites as he exclaimed, “So </span><i><span style=\"font-weight: 400;\">that’s</span></i><span style=\"font-weight: 400;\"> why we’re so excited to bring Zoom classes to the UCSB campus! Just like in a Zoom call, students will be able to interact with their professor and other students, but now, it’s in person!” </span></p>\n<p><span style=\"font-weight: 400;\">When asked how this differed from normal in-person classes, Talerning burst into tears, screaming at our Nexustentialism field reporter, “Why would you fucking say that?” — before running out the door and scootering away, only to be stopped by a CSO (because those guys are still around for some reason) and being told that scooters aren’t allowed on the bike paths and getting fined for one billion dollars.</span></p>\n<p><span style=\"font-weight: 400;\">Students were naturally curious as to when these new classes would arrive at UCSB. “Where’s the drama in that? You’ll know when you know. Have a little patience. Be a little grateful. The suspense is part of the process,” Chancellor Yang answered.</span></p>\n<p> </p>\n<p><i>Natalie Kothergirls wrote this article one White Claw deep — Gaucho style.</i></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94916\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94916\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-19/ucsb-to-have-in-person-zoom-classes/",
    "id": 6989,
    "author": {
      "id": 879,
      "name": "Natalie Kothergirls"
    },
    "related": [6988, 6987, 6986],
    "comments": [],
    "followers": []
  }, {
    "title": "Not to Worry! Times May be Changing, But This Professor’s Grading Scale Absolutely Will Not",
    "category": "Nexustentialism",
    "subcategory": "Nexustentialism",
    "publish_date": "2020-06-17T07:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=980%2C647&ssl=1",
    "description": "“I mean, are we facing major, necessary systemic changes as a country? Sure. Do we live our lives differently because of a deadly untreatable virus? Of course. That’s why I think it’s so importa...",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_94915\" style=\"width: 678px\" class=\"wp-caption alignnone\"><img aria-describedby=\"caption-attachment-94915\" data-attachment-id=\"94915\" data-permalink=\"https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/happyprofessor-3/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?fit=1024%2C768&amp;ssl=1\" data-orig-size=\"1024,768\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?fit=250%2C188&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?fit=888%2C666&amp;ssl=1\" class=\" wp-image-94915\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2-250x188.jpg?resize=668%2C502\" alt=\"\" width=\"668\" height=\"502\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=250%2C188&amp;ssl=1 250w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=632%2C474&amp;ssl=1 632w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?resize=536%2C402&amp;ssl=1 536w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/happyprofessor-2.jpg?w=1024&amp;ssl=1 1024w\" sizes=\"(max-width: 668px) 100vw, 668px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-94915\" class=\"wp-caption-text\">Emma Demorest / Daily Nexus</p></div>\n<p> </p>\n<p><span style=\"font-weight: 400;\">Physics professor Rick Beeker readily told Nexustentialism sources this week that he would not be easing up on his grading come finals. </span></p>\n<p><span style=\"font-weight: 400;\">“I mean, are we facing major, necessary systemic changes as a country? Sure. Do we live our lives differently because of a deadly untreatable virus? Of course. That’s why I think it’s so important that amidst all this change, at least my students can rely on my age-old, hard-assed grading scale.” </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">Beeker, an infamously tough professor with TAs spawning from the depths of Davey Jones’ watery grave, said that providing students with some much needed “normalcy” during this time was the least he could do. </span></p>\n<p><span style=\"font-weight: 400;\">“When students are taking my tests, I want them to feel that cold sweat and the dizziness that comes with absolute fear, just like old times.” </span></p>\n<p><span style=\"font-weight: 400;\">Beeker does not seem to have considered the fact that this might in fact be the </span><i><span style=\"font-weight: 400;\">opposite</span></i><span style=\"font-weight: 400;\"> of what his students were hoping for, but this misreading seems to be a constant in his teaching practices. </span></p>\n<p><span style=\"font-weight: 400;\">“When students ask me if something from a lab will come up on the final, I like to shrug and say nothing. I think they like it too, a little riddle, just for them. It’s also helpful, as a teacher, if you can start a sentence and then just keep it going until no one knows what you’re saying anymore, and you forget the question you were originally asked. I think that’s what keeps my students coming back for more.” </span></p>\n<p><span style=\"font-weight: 400;\">We at Nexustentialism did not have the heart to tell Beeker that his pupils keep coming back because he keeps failing them. </span></p>\n<p> </p>\n<p><i><span style=\"font-weight: 400;\">Emma Demorest has proudly never taken physics, or even a single math. </span></i></p>\n<div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/emma-demorest/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/05/IMG_2040.jpeg?w=888&amp;ssl=1\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/emma-demorest/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Emma Demorest</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Emma Demorest is the editor of Nexustentialism. She once licked the largest wooden yoyo in the world.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:demorest.emma@gmail.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94914\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94914\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-17/not-to-worry-times-may-be-changing-but-this-professors-grading-scale-absolutely-will-not/",
    "id": 7000,
    "author": {
      "id": 844,
      "name": "Emma Demorest"
    },
    "related": [6999, 6998, 6997],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "On the Menu",
  "articles": [{
    "title": "Quarantine Food Trend Alert: Dalgona Coffee",
    "category": "On the Menu",
    "subcategory": "Coffee Column",
    "publish_date": "2020-04-15T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=980%2C647&ssl=1",
    "description": "With everyone stuck inside and coffee shops shutting down, what better way to spend your time than to whip up your own coffee?",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">Hot new trend alert! With everyone stuck inside and coffee shops shutting down, what better way to spend your time than to </span><i><span style=\"font-weight: 400;\">whip</span></i><span style=\"font-weight: 400;\"> up your own coffee? Dalgona coffee has risen to fame within the past few weeks for its crazy texture and aesthetic looks. This drink was termed “dalgona” due to its resemblance to South Korea’s old-school honeycomb toffee candy. Even though it may look intimidating to make, this drink only requires four simple ingredients that are probably already in your kitchen!</span></p>\n<div id=\"attachment_93990\" style=\"width: 582px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-93990\" data-attachment-id=\"93990\" data-permalink=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/img_9611/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?fit=1849%2C2048&amp;ssl=1\" data-orig-size=\"1849,2048\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_9611\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?fit=226%2C250&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?fit=888%2C983&amp;ssl=1\" class=\" wp-image-93990\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611-925x1024.jpg?resize=572%2C633\" alt=\"\" width=\"572\" height=\"633\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?resize=925%2C1024&amp;ssl=1 925w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?resize=226%2C250&amp;ssl=1 226w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?resize=768%2C851&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?resize=1387%2C1536&amp;ssl=1 1387w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?w=1849&amp;ssl=1 1849w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9611.jpg?w=1776 1776w\" sizes=\"(max-width: 572px) 100vw, 572px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-93990\" class=\"wp-caption-text\">Michelle Wan / Daily Nexus</p></div>\n<p><span style=\"font-weight: 400;\">Makes 1 serving</span></p>\n<p><span style=\"font-weight: 400;\">Ingredients:</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<ul>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">2 tbsp instant coffee powder</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">2 tbsp sugar </span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">2 tbsp hot water</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Milk (hot or cold)</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Ice (optional)</span></li>\n</ul>\n<div id=\"attachment_93991\" style=\"width: 442px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-93991\" data-attachment-id=\"93991\" data-permalink=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/img_9613/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?fit=1536%2C2048&amp;ssl=1\" data-orig-size=\"1536,2048\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_9613\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?fit=188%2C250&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?fit=768%2C1024&amp;ssl=1\" class=\" wp-image-93991\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613-768x1024.jpg?resize=432%2C576\" alt=\"\" width=\"432\" height=\"576\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=768%2C1024&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=188%2C250&amp;ssl=1 188w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=1152%2C1536&amp;ssl=1 1152w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=1122%2C1496&amp;ssl=1 1122w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=840%2C1120&amp;ssl=1 840w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=687%2C916&amp;ssl=1 687w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=414%2C552&amp;ssl=1 414w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?resize=354%2C472&amp;ssl=1 354w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9613.jpg?w=1536&amp;ssl=1 1536w\" sizes=\"(max-width: 432px) 100vw, 432px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-93991\" class=\"wp-caption-text\"><em>Michelle Wan / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">Directions:</span></p>\n<ol>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Add the instant coffee powder, sugar and hot water into a mixing bowl. </span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Whip using a stand mixer, hand mixer or a whisk until frothy and has soft peaks. </span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Pour milk into a cup with ice and spoon some foam on top. Take an aesthetically pleasing pic before mixing the layers to enjoy!</span></li>\n</ol>\n<div id=\"attachment_93989\" style=\"width: 609px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-93989\" data-attachment-id=\"93989\" data-permalink=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/img_9620-2/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?fit=2048%2C2048&amp;ssl=1\" data-orig-size=\"2048,2048\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_9620\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?fit=250%2C250&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?fit=888%2C888&amp;ssl=1\" class=\" wp-image-93989\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620-1024x1024.jpg?resize=599%2C599\" alt=\"\" width=\"599\" height=\"599\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=1024%2C1024&amp;ssl=1 1024w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=250%2C250&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=260%2C260&amp;ssl=1 260w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=768%2C768&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=1536%2C1536&amp;ssl=1 1536w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?w=2048&amp;ssl=1 2048w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=100%2C100&amp;ssl=1 100w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=32%2C32&amp;ssl=1 32w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=50%2C50&amp;ssl=1 50w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=64%2C64&amp;ssl=1 64w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=96%2C96&amp;ssl=1 96w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=128%2C128&amp;ssl=1 128w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=1472%2C1472&amp;ssl=1 1472w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=1104%2C1104&amp;ssl=1 1104w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=912%2C912&amp;ssl=1 912w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=550%2C550&amp;ssl=1 550w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?resize=470%2C470&amp;ssl=1 470w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/04/IMG_9620.jpg?w=1776 1776w\" sizes=\"(max-width: 599px) 100vw, 599px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-93989\" class=\"wp-caption-text\"><em>Michelle Wan / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">Notes:</span></p>\n<ul>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">Using a whisk will take a long time and a lot of energy, but if you’re looking to work out your arm(s), go for it!</span></li>\n<li style=\"font-weight: 400;\"><span style=\"font-weight: 400;\">To add a stronger coffee flavor to the drink, I recommend making a little coffee with a spoonful of the coffee powder and adding it to the iced milk. This also adds another layer to the drink, giving it an even more aesthetic look. </span></li>\n</ul>\n<p><span style=\"font-weight: 400;\">This is perfect for those who like their coffee sweet, and even if you aren’t a fan of sweet coffee, I think you should give it a try for the experience. Either way, this is a drink that incorporates two favorite breakfast beverages and it’s a great way to start your day.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-93985\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-93985\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-04-15/quarantine-food-trend-alert-dalgona-coffee/",
    "id": 6495,
    "author": {
      "id": 846,
      "name": "Michelle Wan"
    },
    "related": [6494, 6493, 6492],
    "comments": [],
    "followers": []
  }, {
    "title": "Spice Up Your Autumn With Starbucks’ Newest Drink",
    "category": "On the Menu",
    "subcategory": "Coffee Column",
    "publish_date": "2019-10-24T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=980%2C647&ssl=1",
    "description": "Starbucks has come out with a new fall drink which might give the PSL a run for its money.",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">It’s arguably the most “basic” time of year — the season in which Starbucks comes out with its newest fall drinks and many, including myself, flock to the nearest store to get a pumpkin spice latte. Personally, I love the pumpkin spice latte. It reminds me of everything great about fall all wrapped up in warm flavor and spices, milk and the slightest hint of coffee. This year, however, Starbucks has come out with a new fall drink which might have the makings to become a new cult classic.</span></p>\n<div id=\"attachment_90566\" style=\"width: 598px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-90566\" data-attachment-id=\"90566\" data-permalink=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/img_0650/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?fit=1536%2C2048&amp;ssl=1\" data-orig-size=\"1536,2048\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_0650\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?fit=188%2C250&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?fit=768%2C1024&amp;ssl=1\" class=\" wp-image-90566\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650-768x1024.jpeg?resize=588%2C784\" alt=\"\" width=\"588\" height=\"784\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=768%2C1024&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=188%2C250&amp;ssl=1 188w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=1122%2C1496&amp;ssl=1 1122w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=840%2C1120&amp;ssl=1 840w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=687%2C916&amp;ssl=1 687w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=414%2C552&amp;ssl=1 414w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?resize=354%2C472&amp;ssl=1 354w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0650.jpeg?w=1536&amp;ssl=1 1536w\" sizes=\"(max-width: 588px) 100vw, 588px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-90566\" class=\"wp-caption-text\"><em>Brea Spencer / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">The pumpkin cream cold brew is the newest addition to the Starbucks menu, and it’s making a wonderful first impression. The drink itself is topped with a layer of cream that is thicker than its typical whipped cream. It comes with a comforting welcome to it, almost like a pumpkin hug. The drink as a whole definitely holds the same flavor as the famous pumpkin spice latte; it’s marked by layers of pumpkin, fall spices and the perfect amount of sweetness. Each of these flavors pairs perfectly with the cold brew. The rich cream cuts through the bitter taste of the cold brew, and the two balance each other well. I highly recommend trying it.</span></p>\n<p><span style=\"font-weight: 400;\">For the sake of comparison, I tried it alongside the classic pumpkin spice latte. The pumpkin spice latte definitely had a more mellow pumpkin taste to it, and because it is a latte, there is almost no coffee flavor. It, of course, incorporates flavors of fall in its spices, but surprisingly, not very much pumpkin. As for the individual, it depends if he or she has a preference for tasting the coffee in their drink.</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">After trying both, I must say that the cold brew definitely adds a necessary flavor level to the otherwise almost overwhelming sweetness of pumpkin that the pumpkin spice latte just does not accomplish. I still will always be a fan of the pumpkin spice latte because a warm pumpkin drink is just the key to my soul. However, the pumpkin cream cold brew has its own charm and will definitely be making itself a part of my fall drink rotation.</span></p>\n<div id=\"attachment_90565\" style=\"width: 532px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-90565\" data-attachment-id=\"90565\" data-permalink=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/img_0648-2/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?fit=1536%2C2048&amp;ssl=1\" data-orig-size=\"1536,2048\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_0648\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?fit=188%2C250&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?fit=768%2C1024&amp;ssl=1\" class=\" wp-image-90565\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648-768x1024.jpeg?resize=522%2C696\" alt=\"\" width=\"522\" height=\"696\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=768%2C1024&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=188%2C250&amp;ssl=1 188w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=1122%2C1496&amp;ssl=1 1122w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=840%2C1120&amp;ssl=1 840w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=687%2C916&amp;ssl=1 687w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=414%2C552&amp;ssl=1 414w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?resize=354%2C472&amp;ssl=1 354w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/IMG_0648.jpeg?w=1536&amp;ssl=1 1536w\" sizes=\"(max-width: 522px) 100vw, 522px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-90565\" class=\"wp-caption-text\"><em>Brea Spencer / Daily Nexus</em></p></div>\n<p><span style=\"font-weight: 400;\">If neither of these drink options provides enough pumpkin flavor, I recommend trying the pumpkin cream cheese muffin this fall season. This muffin has all of the pumpkin flavor that I think the drinks lack. While it is rich, the cream cheese center adds a perfect addition to the pumpkin flavor. The nuts on the outside also complement the muffin really well. By itself, it may be a little too much, so I suggest pairing it with one of the fall drinks to offset the richness. </span></p>\n<p><span style=\"font-weight: 400;\">While the pumpkin flavors of fall may be nothing new, the pumpkin cream cold brew is a new take on a beloved classic, and I think it’s worth a try. And who knows? T</span><span style=\"font-weight: 400;\">his drink could only be here for this season, so get it while you can. </span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-90564\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-90564\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2019-10-24/spice-up-your-autumn-with-starbucks-newest-drink/",
    "id": 6505,
    "author": {
      "id": 841,
      "name": "Brea Spencer"
    },
    "related": [6504, 6503, 6502],
    "comments": [],
    "followers": []
  }, {
    "title": "Fall in Love with Autumn with These 3 Coffee Recipes",
    "category": "On the Menu",
    "subcategory": "Coffee Column",
    "publish_date": "2019-10-17T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?resize=960%2C643&ssl=1",
    "description": "Tired of pumpkin spice lattes?",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">When the weather becomes chilly in the fall, getting out of bed becomes one of the most difficult things in the morning. Luckily, coffee has come to save the day. Pumpkin spice can become repetitive when everything in the cafes, grocery stores and bakeries all smell and taste a blend of sweet pumpkin and earthy cinnamon. So if you want to take a break from the infamous Pumpkin Spice Latte, check out these recipes and tips to discover the other delicious spices that you can incorporate your coffee!</span></p>\n<div id=\"attachment_90533\" style=\"width: 970px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-90533\" data-attachment-id=\"90533\" data-permalink=\"https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/autumn-3614827_960_720/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?fit=960%2C643&amp;ssl=1\" data-orig-size=\"960,643\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"autumn-3614827_960_720\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?fit=250%2C167&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?fit=888%2C595&amp;ssl=1\" class=\"size-full wp-image-90533\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?resize=888%2C595\" alt=\"\" width=\"888\" height=\"595\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?w=960&amp;ssl=1 960w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?resize=250%2C167&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2019/10/autumn-3614827_960_720.jpg?resize=768%2C514&amp;ssl=1 768w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-90533\" class=\"wp-caption-text\"><em>Photo Courtesy of pixabay.com</em></p></div>\n<p><b>Cinnamon Maple Latte (adapted from </b><a href=\"http://portandfin.com/maple-cinnamon-latte/\"><b>portandfin.com</b></a><b>)</b></p>\n<p><span style=\"font-weight: 400;\">Ingredients:</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">1 cup coffee</span></p>\n<p><span style=\"font-weight: 400;\">¾ cup milk</span></p>\n<p><span style=\"font-weight: 400;\">1 tbsp maple syrup</span></p>\n<p><span style=\"font-weight: 400;\">¼ tsp cinnamon, plus more for garnish</span></p>\n<p> </p>\n<p><span style=\"font-weight: 400;\">Directions:</span></p>\n<ol>\n<li><span style=\"font-weight: 400;\"> Pour the milk into a mason jar, tighten the lid and shake for 10 seconds until the milk starts to foam at the top.</span></li>\n<li><span style=\"font-weight: 400;\"> Microwave the mason jar without the lid for about 45 seconds until the milk is hot to the touch and foamy. </span></li>\n<li><span style=\"font-weight: 400;\"> Pour hot coffee into a mug and stir in maple syrup and cinnamon. Top with milk, spooning the foam onto the top. Sprinkle with cinnamon and serve.</span></li>\n</ol>\n<p> </p>\n<p><b>Caramel Chocolate Hazelnut Latte</b></p>\n<p><span style=\"font-weight: 400;\">Ingredients:</span></p>\n<p><span style=\"font-weight: 400;\">1 cup coffee</span></p>\n<p><span style=\"font-weight: 400;\">1 tbsp hazelnut syrup</span></p>\n<p><span style=\"font-weight: 400;\">½ tbsp chocolate syrup</span></p>\n<p><span style=\"font-weight: 400;\">½ tbsp caramel, plus more for garnish</span></p>\n<p><span style=\"font-weight: 400;\">¾ cup half-and-half</span></p>\n<p> </p>\n<p><span style=\"font-weight: 400;\">Directions: </span></p>\n<ol>\n<li><span style=\"font-weight: 400;\"> Pour the half-and-half into a mason jar, tighten the lid and shake for 10 seconds until the milk starts to foam at the top.</span></li>\n<li><span style=\"font-weight: 400;\"> Microwave the mason jar without the lid for about 45 seconds until the milk is hot to the touch and foamy. </span></li>\n<li><span style=\"font-weight: 400;\"> Drizzle caramel across the inside of the mug. Pour hot coffee into a mug and stir in the chocolate syrup and hazelnut syrup. Stir in the half-and-half and serve.</span></li>\n</ol>\n<p> </p>\n<p><b>Vanilla Spice Latte</b></p>\n<p><span style=\"font-weight: 400;\">Ingredients:</span></p>\n<p><span style=\"font-weight: 400;\">1 cup hot coffee</span></p>\n<p><span style=\"font-weight: 400;\">1 cup milk</span></p>\n<p><span style=\"font-weight: 400;\">Vanilla syrup, to taste</span></p>\n<p><span style=\"font-weight: 400;\">Nutmeg, to taste</span></p>\n<p><span style=\"font-weight: 400;\">Cinnamon, to taste</span></p>\n<p> </p>\n<p><span style=\"font-weight: 400;\">Directions:</span></p>\n<ol>\n<li><span style=\"font-weight: 400;\"> Pour the milk into a mason jar, tighten the lid and shake for 10 seconds until the milk starts to foam at the top.</span></li>\n<li><span style=\"font-weight: 400;\"> Microwave the mason jar without the lid for about 45 seconds until the milk is hot to the touch and foamy. </span></li>\n<li><span style=\"font-weight: 400;\"> Mix the vanilla syrup with warm milk and pour the mixture into a French press to froth it.</span></li>\n<li><span style=\"font-weight: 400;\"> Pour or spoon milk and foam into your coffee.</span></li>\n<li><span style=\"font-weight: 400;\"> Garnish with ground nutmeg and cinnamon and serve.</span></li>\n</ol>\n<p> </p>\n<p><span style=\"font-weight: 400;\">If these recipes or ingredients are not easily accessible to you, worry not. Some simpler ways you can give your coffee an autumnal twist is by swapping out sugar and syrups with maple syrup or mixing in Nutella that has been thinned out with warm milk. These tips will definitely warm you up and give you that much-needed caffeine kick, so try them out if you want to sip on something other than a Pumpkin Spice Latte this fall.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/wlam/\"><img src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-05-at-6.20.35-PM-1.png?w=888\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/wlam/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Winnie Lam</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Winnie Lam serves as the 2019-2020 On The Menu Editor. She has an unhealthy obsession with Trader Joe’s and she loves all things matcha.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:wl@otm.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-90532\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-90532\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2019-10-17/fall-in-love-with-autumn-with-these-3-coffee-recipes/",
    "id": 6532,
    "author": {
      "id": 842,
      "name": "Winnie Lam"
    },
    "related": [6531, 6530, 6529],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "Opinion",
  "articles": [{
    "title": "An Open Letter to the UCSB Department of Geography",
    "category": "Opinion",
    "subcategory": "Letters to the Editor",
    "publish_date": "2020-07-09T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=980%2C647&ssl=1",
    "description": "Graduates of the UCSB geography community respond to a recent tweet put out by the geography department.",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">A recent </span><a href=\"https://twitter.com/UCSBgeog/status/1268645285170823168\"><span style=\"font-weight: 400;\">tweet sent out by the UC Santa Barbara </span></a><span style=\"font-weight: 400;\">Department of Geography that was co-authored by department Chair Stuart Sweeney stated, “If there is anything we can do, please let us know.”</span></p>\n<p><span style=\"font-weight: 400;\">Yes, Sweeney, there is plenty you can do. First of all, we need you to shut up and listen. </span></p>\n<p><span style=\"font-weight: 400;\">You are the </span><a href=\"https://geog.ucsb.edu/timeline-of-milestones/\"><span style=\"font-weight: 400;\">12th white male to serve as chair of the UCSB geography department</span></a><span style=\"font-weight: 400;\"> in a long history of white males. There has never been a person of color leading this department, and there has never been a woman in the space of that chair. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<div id=\"attachment_95079\" style=\"width: 358px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-95079\" data-attachment-id=\"95079\" data-permalink=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/geography/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=1800%2C1669&amp;ssl=1\" data-orig-size=\"1800,1669\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"geography\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=250%2C232&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=888%2C823&amp;ssl=1\" class=\" wp-image-95079\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=348%2C323\" alt=\"\" width=\"348\" height=\"323\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?w=1800&amp;ssl=1 1800w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=250%2C232&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=1024%2C949&amp;ssl=1 1024w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=768%2C712&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=1536%2C1424&amp;ssl=1 1536w\" sizes=\"(max-width: 348px) 100vw, 348px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-95079\" class=\"wp-caption-text\">Emily Liu / Daily Nexus</p></div>\n<p><span style=\"font-weight: 400;\">And it shows. It shows in the patriarchal culture the department embodies and perpetuates. It shows in the bankrupt values and ideologies the department institutionalizes and advocates. It shows in the department’s silencing and absencing of anything and anyone who questions or challenges its faulty and racist foundations and structure. It shows in the department’s legacy and habit of narrow white ways of knowing, thinking, acting and being. This is so apparent to us, because we have lived it. We have been laughed at for raising questions of difference. We have been told by you we do not belong.</span></p>\n<p><span style=\"font-weight: 400;\">It thus is not so surprising to us that your hollow letter of concern to the geography community glosses over the death of George Floyd in such passing as to be completely tone deaf, at best, and purposely dog-whistling at worst. Floyd’s murder is not even the intention or attention of your sentence or concern. You say, “We realize these are indeed troubling times on many fronts,” and you associate what is troubling with the </span><i><span style=\"font-weight: 400;\">events that</span></i> <i><span style=\"font-weight: 400;\">followed </span></i><span style=\"font-weight: 400;\">his killing. </span></p>\n<p><span style=\"font-weight: 400;\">It would be amusing to note, if not for the direness of this reality you contribute to, that your reference to the vile and unjust public execution of Floyd is myopically entangled within your seemingly indelible white privilege: how faculty must “grapple” with having to work from home. Is that really the reach of your concern? Is that really the best that you can do?</span></p>\n<p><span style=\"font-weight: 400;\">Apparently, it is.</span></p>\n<p><span style=\"font-weight: 400;\">The </span><i><span style=\"font-weight: 400;\">event of Floyd’s murder</span></i><span style=\"font-weight: 400;\"> deserves explicit recognition, direct condemnation and corrective actions. As do the murders of Breonna Taylor, Alton Sterling, Philando Castile, Ahmaud Arbery, Stephon Clark and so many other Black people at the hands of those who are supposedly there to serve and protect. Does this trouble you? Or, do the “many fronts” of concern you mention express the vocal and visible challenges now being presented to the white hegemony the department has for so long promulgated and promoted? </span></p>\n<p><span style=\"font-weight: 400;\">You and every UCSB chair of geography before you have led a department that has policed the gates of opportunity and kept them away from Black, Brown and Indigenous scholars. You and every chair of the department before you have, on several occasions, presided over a faculty that has turned down exceptional Black and Brown hires, including an African-American woman, a woman of African origin and a Nepalese woman, only to hire more white faculty. You and every chair before you have embodied a department that has done nothing to level the playing field with your privilege. The word “diversity” is spoken at faculty meetings as a token nod to progressive values, but you do nothing to make the department more welcoming to and inclusive of non-white students and potential Black, Brown and Indigenous faculty. </span></p>\n<p><span style=\"font-weight: 400;\">You know what we DON’T need: more diversity seminars, webinars, colloquiums and forums that you can check off your to-do list. We DON’T need Black and Brown students and faculty to shoulder the burden of changing a system that claims “freedom of thought” but ends up keeping that platform for white voices, values and modes of geographical thought, methodologies, scholarship and activism.</span></p>\n<blockquote><p><span style=\"font-weight: 400;\">You and every UCSB chair of geography before you have led a department that has policed the gates of opportunity and kept them away from Black, Brown and Indigenous scholars. </span></p></blockquote>\n<p><span style=\"font-weight: 400;\">For a discipline that literally has the world as its focus, your myopic views and behaviors are an embarrassment and a failure. You uphold the racist and colonial legacy of geography by not confronting this very real history of the discipline, and you advocate and perpetuate these racist and colonial tendencies today.</span></p>\n<p><span style=\"font-weight: 400;\">If this truly brings you discomfort, if there is a modicum of sincerity in your message, you may then be asking: what CAN I do? The answer is: begin to change the entire structure of your department from within to work for corrective justice inside and outside your halls of privilege. </span></p>\n<p><span style=\"font-weight: 400;\">Start teaching about the racist and colonial history of the very discipline you purport to represent. Step outside your comfort zones of white privilege and incorporate into all classes geographical issues of race and racism, privilege and marginalization, gender and identity, and resource destruction and exploitation. Actively recruit Black scholars and other scholars of color. Actively work with, take direction from, and cite and publish with Black, Brown and Indigenous scholars. Actively examine the biases in your own work, in your own choices, and in your own institutions and power structures. And explicitly recognize and vocalize that electing a faculty of color as chair is far overdue. Actively work to change and correct this. And for the sake of all and any gods, </span><i><span style=\"font-weight: 400;\">educate yourself</span></i><span style=\"font-weight: 400;\">.</span></p>\n<p><span style=\"font-weight: 400;\">All of this is what you </span><i><span style=\"font-weight: 400;\">can do</span></i><span style=\"font-weight: 400;\">. And if there is any grain of sincerity in the department’s message, all of these steps must begin to be taken </span><i><span style=\"font-weight: 400;\">NOW</span></i><span style=\"font-weight: 400;\">. Recalling the words of Dr. King:</span></p>\n<p style=\"text-align: left;\">“I must make two honest confessions to you, my Christian and Jewish brothers. First, I must confess that       over the past few years I have been gravely disappointed with the white moderate. I have almost reached the regrettable conclusion that the Negro’s great stumbling block in his stride toward freedom is not the White Citizen’s Counciler or the Ku Klux Klanner, but the white moderate, who is more devoted to “order” than to justice; who prefers a negative peace which is the absence of tension to a positive peace which is the presence of justice; who constantly says: “I agree with you in the goal you seek, but I cannot agree with your methods of direct action”; who paternalistically believes he can set the timetable for another man’s freedom; who lives by a mythical concept of time and who constantly advises the Negro to wait for a “more convenient season.” Shallow understanding from people of good will is more frustrating than absolute misunderstanding from people of ill will. Lukewarm acceptance is much more bewildering than outright rejection.</p>\n<p style=\"text-align: left;\">I had hoped that the white moderate would understand that law and order exist for the purpose of establishing justice and that when they fail in this purpose they become the dangerously structured dams that block the flow of social progress.”</p>\n<p><span style=\"font-weight: 400;\">So, yes, these are indeed troubling times. Especially when your thoughts, given in abstract sympathy and for dubious ends, only serve to re-traumatize and build dams against a student body that has faced discrimination from your department since day one. </span></p>\n<p><span style=\"font-weight: 400;\">When your brief, ambiguous message presents and represents the full extent that this department is willing to go to in order to acknowledge what is happening outside the ivory tower, and we mean </span><i><span style=\"font-weight: 400;\">ivory</span></i><span style=\"font-weight: 400;\">, the only purpose it serves is to give comfort and satisfaction to those already enjoying the white privilege and power that tower provides. </span></p>\n<p><span style=\"font-weight: 400;\">Whatever your next actions are as a chair and as a department — and make no mistake, silence and upholding the white status quo </span><i><span style=\"font-weight: 400;\">is action </span></i><span style=\"font-weight: 400;\">— will be revealing of the sincerity or insincerity of your message to us, marginalized members of the UCSB geography community. </span></p>\n<p><em><span style=\"font-weight: 400;\">G</span><span style=\"font-weight: 400;\">raduates of the UCSB geography community</span></em></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95078\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95078\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/",
    "id": 5708,
    "author": {
      "id": 811,
      "name": "Graduates of the UCSB geography community"
    },
    "related": [5707, 5706, 5705],
    "comments": [],
    "followers": []
  }, {
    "title": "An Open Letter to the UCSB Department of Geography",
    "category": "Opinion",
    "subcategory": "Letters to the Editor",
    "publish_date": "2020-07-09T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=980%2C647&ssl=1",
    "description": "Graduates of the UCSB geography community respond to a recent tweet put out by the geography department.",
    "content": "<div class=\"single-post-content\">\n            <p><span style=\"font-weight: 400;\">A recent </span><a href=\"https://twitter.com/UCSBgeog/status/1268645285170823168\"><span style=\"font-weight: 400;\">tweet sent out by the UC Santa Barbara </span></a><span style=\"font-weight: 400;\">Department of Geography that was co-authored by department Chair Stuart Sweeney stated, “If there is anything we can do, please let us know.”</span></p>\n<p><span style=\"font-weight: 400;\">Yes, Sweeney, there is plenty you can do. First of all, we need you to shut up and listen. </span></p>\n<p><span style=\"font-weight: 400;\">You are the </span><a href=\"https://geog.ucsb.edu/timeline-of-milestones/\"><span style=\"font-weight: 400;\">12th white male to serve as chair of the UCSB geography department</span></a><span style=\"font-weight: 400;\"> in a long history of white males. There has never been a person of color leading this department, and there has never been a woman in the space of that chair. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<div id=\"attachment_95079\" style=\"width: 358px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-95079\" data-attachment-id=\"95079\" data-permalink=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/geography/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=1800%2C1669&amp;ssl=1\" data-orig-size=\"1800,1669\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"geography\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=250%2C232&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?fit=888%2C823&amp;ssl=1\" class=\" wp-image-95079\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=348%2C323\" alt=\"\" width=\"348\" height=\"323\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?w=1800&amp;ssl=1 1800w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=250%2C232&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=1024%2C949&amp;ssl=1 1024w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=768%2C712&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/07/geography.png?resize=1536%2C1424&amp;ssl=1 1536w\" sizes=\"(max-width: 348px) 100vw, 348px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-95079\" class=\"wp-caption-text\">Emily Liu / Daily Nexus</p></div>\n<p><span style=\"font-weight: 400;\">And it shows. It shows in the patriarchal culture the department embodies and perpetuates. It shows in the bankrupt values and ideologies the department institutionalizes and advocates. It shows in the department’s silencing and absencing of anything and anyone who questions or challenges its faulty and racist foundations and structure. It shows in the department’s legacy and habit of narrow white ways of knowing, thinking, acting and being. This is so apparent to us, because we have lived it. We have been laughed at for raising questions of difference. We have been told by you we do not belong.</span></p>\n<p><span style=\"font-weight: 400;\">It thus is not so surprising to us that your hollow letter of concern to the geography community glosses over the death of George Floyd in such passing as to be completely tone deaf, at best, and purposely dog-whistling at worst. Floyd’s murder is not even the intention or attention of your sentence or concern. You say, “We realize these are indeed troubling times on many fronts,” and you associate what is troubling with the </span><i><span style=\"font-weight: 400;\">events that</span></i> <i><span style=\"font-weight: 400;\">followed </span></i><span style=\"font-weight: 400;\">his killing. </span></p>\n<p><span style=\"font-weight: 400;\">It would be amusing to note, if not for the direness of this reality you contribute to, that your reference to the vile and unjust public execution of Floyd is myopically entangled within your seemingly indelible white privilege: how faculty must “grapple” with having to work from home. Is that really the reach of your concern? Is that really the best that you can do?</span></p>\n<p><span style=\"font-weight: 400;\">Apparently, it is.</span></p>\n<p><span style=\"font-weight: 400;\">The </span><i><span style=\"font-weight: 400;\">event of Floyd’s murder</span></i><span style=\"font-weight: 400;\"> deserves explicit recognition, direct condemnation and corrective actions. As do the murders of Breonna Taylor, Alton Sterling, Philando Castile, Ahmaud Arbery, Stephon Clark and so many other Black people at the hands of those who are supposedly there to serve and protect. Does this trouble you? Or, do the “many fronts” of concern you mention express the vocal and visible challenges now being presented to the white hegemony the department has for so long promulgated and promoted? </span></p>\n<p><span style=\"font-weight: 400;\">You and every UCSB chair of geography before you have led a department that has policed the gates of opportunity and kept them away from Black, Brown and Indigenous scholars. You and every chair of the department before you have, on several occasions, presided over a faculty that has turned down exceptional Black and Brown hires, including an African-American woman, a woman of African origin and a Nepalese woman, only to hire more white faculty. You and every chair before you have embodied a department that has done nothing to level the playing field with your privilege. The word “diversity” is spoken at faculty meetings as a token nod to progressive values, but you do nothing to make the department more welcoming to and inclusive of non-white students and potential Black, Brown and Indigenous faculty. </span></p>\n<p><span style=\"font-weight: 400;\">You know what we DON’T need: more diversity seminars, webinars, colloquiums and forums that you can check off your to-do list. We DON’T need Black and Brown students and faculty to shoulder the burden of changing a system that claims “freedom of thought” but ends up keeping that platform for white voices, values and modes of geographical thought, methodologies, scholarship and activism.</span></p>\n<blockquote><p><span style=\"font-weight: 400;\">You and every UCSB chair of geography before you have led a department that has policed the gates of opportunity and kept them away from Black, Brown and Indigenous scholars. </span></p></blockquote>\n<p><span style=\"font-weight: 400;\">For a discipline that literally has the world as its focus, your myopic views and behaviors are an embarrassment and a failure. You uphold the racist and colonial legacy of geography by not confronting this very real history of the discipline, and you advocate and perpetuate these racist and colonial tendencies today.</span></p>\n<p><span style=\"font-weight: 400;\">If this truly brings you discomfort, if there is a modicum of sincerity in your message, you may then be asking: what CAN I do? The answer is: begin to change the entire structure of your department from within to work for corrective justice inside and outside your halls of privilege. </span></p>\n<p><span style=\"font-weight: 400;\">Start teaching about the racist and colonial history of the very discipline you purport to represent. Step outside your comfort zones of white privilege and incorporate into all classes geographical issues of race and racism, privilege and marginalization, gender and identity, and resource destruction and exploitation. Actively recruit Black scholars and other scholars of color. Actively work with, take direction from, and cite and publish with Black, Brown and Indigenous scholars. Actively examine the biases in your own work, in your own choices, and in your own institutions and power structures. And explicitly recognize and vocalize that electing a faculty of color as chair is far overdue. Actively work to change and correct this. And for the sake of all and any gods, </span><i><span style=\"font-weight: 400;\">educate yourself</span></i><span style=\"font-weight: 400;\">.</span></p>\n<p><span style=\"font-weight: 400;\">All of this is what you </span><i><span style=\"font-weight: 400;\">can do</span></i><span style=\"font-weight: 400;\">. And if there is any grain of sincerity in the department’s message, all of these steps must begin to be taken </span><i><span style=\"font-weight: 400;\">NOW</span></i><span style=\"font-weight: 400;\">. Recalling the words of Dr. King:</span></p>\n<p style=\"text-align: left;\">“I must make two honest confessions to you, my Christian and Jewish brothers. First, I must confess that       over the past few years I have been gravely disappointed with the white moderate. I have almost reached the regrettable conclusion that the Negro’s great stumbling block in his stride toward freedom is not the White Citizen’s Counciler or the Ku Klux Klanner, but the white moderate, who is more devoted to “order” than to justice; who prefers a negative peace which is the absence of tension to a positive peace which is the presence of justice; who constantly says: “I agree with you in the goal you seek, but I cannot agree with your methods of direct action”; who paternalistically believes he can set the timetable for another man’s freedom; who lives by a mythical concept of time and who constantly advises the Negro to wait for a “more convenient season.” Shallow understanding from people of good will is more frustrating than absolute misunderstanding from people of ill will. Lukewarm acceptance is much more bewildering than outright rejection.</p>\n<p style=\"text-align: left;\">I had hoped that the white moderate would understand that law and order exist for the purpose of establishing justice and that when they fail in this purpose they become the dangerously structured dams that block the flow of social progress.”</p>\n<p><span style=\"font-weight: 400;\">So, yes, these are indeed troubling times. Especially when your thoughts, given in abstract sympathy and for dubious ends, only serve to re-traumatize and build dams against a student body that has faced discrimination from your department since day one. </span></p>\n<p><span style=\"font-weight: 400;\">When your brief, ambiguous message presents and represents the full extent that this department is willing to go to in order to acknowledge what is happening outside the ivory tower, and we mean </span><i><span style=\"font-weight: 400;\">ivory</span></i><span style=\"font-weight: 400;\">, the only purpose it serves is to give comfort and satisfaction to those already enjoying the white privilege and power that tower provides. </span></p>\n<p><span style=\"font-weight: 400;\">Whatever your next actions are as a chair and as a department — and make no mistake, silence and upholding the white status quo </span><i><span style=\"font-weight: 400;\">is action </span></i><span style=\"font-weight: 400;\">— will be revealing of the sincerity or insincerity of your message to us, marginalized members of the UCSB geography community. </span></p>\n<p><em><span style=\"font-weight: 400;\">G</span><span style=\"font-weight: 400;\">raduates of the UCSB geography community</span></em></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95078\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95078\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-07-09/an-open-letter-to-the-ucsb-department-of-geography/",
    "id": 5708,
    "author": {
      "id": 811,
      "name": "Graduates of the UCSB geography community"
    },
    "related": [5707, 5706, 5705],
    "comments": [],
    "followers": []
  }, {
    "title": "International Students on the Transition to Remote Learning",
    "category": "Opinion",
    "subcategory": "Letters to the Editor",
    "publish_date": "2020-06-30T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=980%2C647&ssl=1",
    "description": "International students share their experiences with remote learning during spring quarter 2020.",
    "content": "<div class=\"single-post-content\">\n            <p><i>The following submissions document the experiences of some international students with the transition to remote education for spring quarter 2020 due to coronavirus.</i></p>\n<div id=\"attachment_95011\" style=\"width: 448px\" class=\"wp-caption aligncenter\"><img aria-describedby=\"caption-attachment-95011\" data-attachment-id=\"95011\" data-permalink=\"https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/remote_learning/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?fit=2048%2C1536&amp;ssl=1\" data-orig-size=\"2048,1536\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"Remote_Learning\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?fit=250%2C188&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?fit=888%2C666&amp;ssl=1\" class=\" wp-image-95011\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=438%2C328\" alt=\"\" width=\"438\" height=\"328\" srcset=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?w=2048&amp;ssl=1 2048w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=250%2C188&amp;ssl=1 250w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=1024%2C768&amp;ssl=1 1024w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=768%2C576&amp;ssl=1 768w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=1536%2C1152&amp;ssl=1 1536w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=1832%2C1374&amp;ssl=1 1832w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=1376%2C1032&amp;ssl=1 1376w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=1044%2C783&amp;ssl=1 1044w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=632%2C474&amp;ssl=1 632w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?resize=536%2C402&amp;ssl=1 536w, https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Remote_Learning.png?w=1776 1776w\" sizes=\"(max-width: 438px) 100vw, 438px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-95011\" class=\"wp-caption-text\">Melody Wang / Daily Nexus</p></div>\n<p><span style=\"font-weight: 400;\">Technology has drastically changed most people’s lives over the past 15 years. We can hardly remember what it was like before the debut of the iPhone in 2007 — just 13 years ago. Twitter was founded 14 years ago, and now one of the most influential people on the planet, the President of the United States, sometimes sends out “information” over 100 times a day through the app. </span></p>\n<p><span style=\"font-weight: 400;\">Despite all of these technological advances, university life hasn’t changed much in the past 50 years — we still go to a lecture hall with over 200 people, professors still use chalkboards with chalk dust everywhere, and while we may have GauchoSpace and Umail, most students still prefer hand-written homework. There’s something irreplaceable about this aspect of learning. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">In 2020, everything changed due to COVID-19. I have spent 95% of my time during the past two and a half months indoors in my apartment in Isla Vista. COVID-19 has forced an evolution to remote learning.</span></p>\n<p><span style=\"font-weight: 400;\">Remote learning is efficient, or at least it was intended to be. The idea is simple: By cutting out some of the unnecessary parts of daily life at a university, such as commuting and coming and going from class to class, we save time. It is meant to be a direct connection to knowledge and professors. Yet my experience is that there are a lot more factors to take into account. </span></p>\n<p><span style=\"font-weight: 400;\">First, not going to school breaks the psychological state of studying. Rolling out of bed and opening my 32-inch display screen, which I also use to watch YouTube and play games, doesn’t make me feel like studying. I try my best to avoid using my laptop for leisure during the day, but it’s unavoidable. It requires much persistence to stay focused. </span></p>\n<blockquote><p><span style=\"font-weight: 400;\">The idea is simple: By cutting out some of the unnecessary parts of daily life at a university, such as commuting and coming and going from class to class, we save time.</span></p></blockquote>\n<p><span style=\"font-weight: 400;\">Compare this to sitting in a classroom, which is quiet and has hundreds of people around you studying. Even if you drift away for a bit, you usually come right back to focus because it “feels” like the right thing to do. As far as efficiency is concerned, while cutting back some inefficient activities, remote learning also introduces new ones. </span></p>\n<p><span style=\"font-weight: 400;\">Second, because it is more or less a forced change, a lot of details have not been figured out. For example, many lecturers are not used to writing on a tablet and screen recording, so now, they make videos talking over prepared slides. As a result, students can no longer see the steps of derivation, and they lose their natural signs and annotation in graphics. </span></p>\n<p><span style=\"font-weight: 400;\">Another issue is with homework grading. The process usually involves students handing homework into a collection box before a deadline; then, the TA would collect them and distribute them to graders. Now, many classes use the GauchoSpace built-in function, which is, to put it mildly, bad for anything that requires stepped grading and commentary. Luckily, some commercial solutions exist, and many classes in S.T.E.M. subjects are utilizing them. It is impressive to see classes quickly learning to use these new tools. </span></p>\n<p><span style=\"font-weight: 400;\">Overall, I think COVID-19 has forced innovation and exploration on the individual level, and remote learning will be a good thing in the long run. We are prepared to find a new way of living and learning with more resilience.</span></p>\n<p><em>– Jerry Ling</em></p>\n<hr>\n<p><span style=\"font-weight: 400;\">Hitherto, the number of confirmed cases of COVID-19 has already</span><a href=\"https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html?action=click&amp;module=Top%20Stories&amp;pgtype=Homepage\"><span style=\"font-weight: 400;\"> surpassed 2 million in America</span></a><span style=\"font-weight: 400;\">, which represents </span><a href=\"https://www.nytimes.com/interactive/2020/world/coronavirus-maps.html\"><span style=\"font-weight: 400;\">over a quarter of the known cases</span></a><span style=\"font-weight: 400;\"> in the world. As the most powerful country with access to some of the best medical care and most advanced technologies, it is worth considering why there are a rising number of cases in the U.S. because this pandemic affects not only the overall economy of the nation, but also every one of us.</span></p>\n<p><span style=\"font-weight: 400;\">I appreciate that UCSB had changed its teaching mode to online before the coronavirus was widely spread. With this opportunity, I have returned to my home country, where the situation is mostly under control. Thanks to my professors, I do not have to stay up late to participate in live meetings because of my current time zone. In hindsight, I believe that although remote learning does have its deficiencies, it is undoubtedly an effective measure under these unusual circumstances.</span></p>\n<blockquote><p><span style=\"font-weight: 400;\">In hindsight, I believe that although remote learning does have its deficiencies, it is undoubtedly an effective measure under these unusual circumstances.</span></p></blockquote>\n<p><span style=\"font-weight: 400;\">We have been successful in keeping our classes up and running by leveraging our technology. Besides some of the negative experiences that remote learning may bring us, I think that it can also benefit us in many ways. For example, students save time they would normally spend commuting, therefore freeing up more time for focusing on their studies. They are also able to watch the recorded lectures repeatedly to strengthen any points in their classes they do not understand. </span><span style=\"font-weight: 400;\">Although we have had to abandon face-to-face conversations, I think this is an acceptable change. Nothing is more important than our collective safety. Turning to the discussion on online examinations, I do want to stress that teachers should be more flexible and considerate with students. We are all uneasy because of the current circumstances.</span></p>\n<p><span style=\"font-weight: 400;\">From my point of view, remote lecturing has been quite successful at UCSB. However, I am suspicious about the assertion that students can return to the campus in September. Although I have complete faith in UCSB’s resilience, I believe it is too early to make decisions. The situation seems to be persistent and since this type of lecturing is working, I think we should continue to learn online in the fall.</span></p>\n<p><em>– Robert Chen</em></p>\n<hr>\n<p><span style=\"font-weight: 400;\">To avoid problems like Internet connectivity and time zone differences, I chose to remain in Santa Barbara during this period of remote learning. I was pretty optimistic about the epidemic at the time, and I thought that the situation would surely improve before summer vacation. So, I rented a house with my friend in Goleta and was ready to get used to this new learning method. </span></p>\n<p><span style=\"font-weight: 400;\">However, spring quarter did not proceed as successfully as I anticipated. As a pre-chem student, I had to take two labs this quarter. It was very inconvenient to conduct both of the lab courses in an online format. Students had no access to manipulate data and make measurements by ourselves. Although TAs would record experiment videos for us, the experiments were not conducted by our own hands, and there were always some problems that we could not understand. We had to repeatedly stop and ask questions when finishing our lab reports, which was time-consuming. In addition, the lab manuals were partly revised because of the online learning. In one class, we needed to spend an extra two to three hours to complete each lab report. It seemed we did not truly grasp the knowledge we needed to learn in labs, and we wasted a lot of time.</span></p>\n<blockquote><p><span style=\"font-weight: 400;\">I hope that my flight in June will not be cancelled and that I will be able to get back to my family.</span></p></blockquote>\n<p><span style=\"font-weight: 400;\">I did see some positive results from online learning. Many of my courses were recorded. This meant that I could choose when to study according to my habits. I did not have to get up early to catch the bus to campus and have to feel tired. I obtained a lot more sleep than I usually have and was more energetic when studying. In this way, online learning was helpful; however, I found I was not disciplined at home without a structured campus schedule. It was hard to be persistent with online learning.</span></p>\n<p><span style=\"font-weight: 400;\">The COVID-19 virus outbreak turned out to be much worse than I expected. I hope that our in-person interactions will return as soon as possible. My roommate got a flight to return home two weeks ago, so I am the only one left in the house. The air tickets are very expensive and difficult to purchase now. I hope that my flight in June will not be cancelled and that I will be able to get back to my family.</span></p>\n<p>– <em>Candace Chen</em></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-95010\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-95010\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-30/international-students-on-the-transition-to-remote-learning/",
    "id": 5709,
    "author": {
      "id": 384,
      "name": "Opinion Editor"
    },
    "related": [5708, 5707, 5706],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "Science & Tech",
  "articles": [{
    "title": "Emotional Theory: Getting Physical",
    "category": "Science & Tech",
    "subcategory": "Health & Wellness",
    "publish_date": "2016-01-14T08:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "description": "When I arrived at his office half an hour early, the door was open. Sitting comfortably at his neatly paper-laden desk was UCSB Researcher and Sociology professor, Dr. Thomas Scheff (or “Doc”, as ...",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_68100\" style=\"width: 197px\" class=\"wp-caption alignleft\"><img aria-describedby=\"caption-attachment-68100\" data-attachment-id=\"68100\" data-permalink=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/img_1832-e1452783083985/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=1936%2C2592&amp;ssl=1\" data-orig-size=\"1936,2592\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_1832-e1452783083985\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=187%2C250&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=765%2C1024&amp;ssl=1\" class=\"wp-image-68100 size-medium\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1-187x250.jpg?resize=187%2C250\" alt=\"Sheff explained the physical aspect of emotions.\" width=\"187\" height=\"250\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=187%2C250&amp;ssl=1 187w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=768%2C1028&amp;ssl=1 768w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=765%2C1024&amp;ssl=1 765w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?w=1936&amp;ssl=1 1936w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?w=1776 1776w\" sizes=\"(max-width: 187px) 100vw, 187px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-68100\" class=\"wp-caption-text\">Sheff explained the physical aspect of emotions.</p></div>\n<p>When I arrived at his office half an hour early, the door was open. Sitting comfortably at his neatly paper-laden desk was UCSB Researcher and Sociology professor, Dr. Thomas Scheff (or “Doc”, as his students call him). After a brief introduction, I could see that he was used to talking about his work, yet showed no signs of stilted professionalism.</p>\n<p>I had come to talk about our feelings, more specifically, our emotions. Contrary to common synonymous usage, ‘feelings’ are different from ‘emotions’. In his recent paper, “What are Emotions? A Physical Theory”, Dr. Scheff explains that emotions are actually physical reactions to an event – the ‘feeling’ part occurs when these physical reactions are delayed.</p>\n<p>“Suppose for a moment that some emotions are felt and others are not. If it’s not felt, where is it? And this article says, well, it’s in your body,” Sheff said.</p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p>Scheff gave the example of watching someone who seems very angry, but doesn’t register his or her own anger. They aren’t <em>feeling</em> the anger, because it’s being automatically expressed through their bodies.</p>\n<p>This isn’t a commonly accepted theory. In fact, very little is known scientifically about emotions. Why?</p>\n<p>“For some reasons they haven’t been really studied adequately compared to perception or cognition behavior. “Modern psychology thinks of itself as behaviorist, which kind of leaves out emotions entirely,” Sheff said.</p>\n<p>He based a significant portion of his ideas on John Dewey’s “attitude theory of emotion”. Dewey, a big-time philosopher around 100 years ago, introduced this theory claiming that an emotion is a physical, internal predisposition to act that has been delayed.</p>\n<p>According to the Stanford Encyclopedia of Philosophy, Dewey emphasized the fact that not just any action is expression of emotion. Some actions merely “discharge” the emotion on impulse. An example of this would be acting angrily, like yelling or defenestrating heavy objects. While they may get rid of the feeling in the short term, they are not <em>resolving</em> the emotion, and thus they are not <em>expressing </em>the emotion. The feeling will come creeping back.</p>\n<blockquote><p><em>What may seem expressive to an outside observer because it tells us something about the state of the person observed may not be expressive from the standpoint of the subject. Mere “giving way” to impulsion does not constitute expression. Expression requires clarification, which for Dewey means an ordering of impulsion by way of incorporating values of prior experiences. </em></p></blockquote>\n<p>How can we express our emotions…correctly? Apparently, it can only happen at a specific distance. Catharsis, the release of extreme emotions, can help us complete the emotional cycle, but it takes practice. Catharsis only occurs when the subject is just close enough to be in touch with their emotions, but far enough to avoid losing control. Scheff, like others in the field, refers to this goldilocks zone as ‘aesthetic distance’, when “you’re partly in, partly watching yourself happen, then that does the trick; that’s cathartic.”</p>\n<p>This happy medium is hard to find. And doing so can be really scary. During an overly-involved emotional episode, Scheff recounted, “…For whatever reason, you feel like you’ve lost control. It’s not true; you always have control. But you need to practice these things.”</p>\n<p>Societal codes dictate that everyone, especially men, must store these emotions somewhere else to deal with them later. Oddly, the more oppressed men might have it slightly better than the women.</p>\n<p>“There’s a bad cry, and a good cry. Men don’t know about bad cries; they’re so repressed that they can only have a good cry,” Sheff said.</p>\n<p>It’s rarely appropriate to express ones emotions immediately, and this leads to unnaturally negative feelings and misplaced anger or aggression. The moral? Express yourself. At least, try. As Doc reminds us, “grief is inevitable with human beings because we are dependent on other people, not just ourselves. That’s mammalian. It’s quite physical, grief, and attachment.”</p>\n<p><em>A version of this story appeared on p. 14 of the Thursday, Jan. 14 </em><em>print edition of the</em> Daily Nexus.</p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-67396\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-67396\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/",
    "id": 7862,
    "author": {
      "id": 112,
      "name": "Natalie Overton"
    },
    "related": [7861, 7860, 7859],
    "comments": [],
    "followers": []
  }, {
    "title": "Emotional Theory: Getting Physical",
    "category": "Science & Tech",
    "subcategory": "Health & Wellness",
    "publish_date": "2016-01-14T08:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "description": "When I arrived at his office half an hour early, the door was open. Sitting comfortably at his neatly paper-laden desk was UCSB Researcher and Sociology professor, Dr. Thomas Scheff (or “Doc”, as ...",
    "content": "<div class=\"single-post-content\">\n            <div id=\"attachment_68100\" style=\"width: 197px\" class=\"wp-caption alignleft\"><img aria-describedby=\"caption-attachment-68100\" data-attachment-id=\"68100\" data-permalink=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/img_1832-e1452783083985/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=1936%2C2592&amp;ssl=1\" data-orig-size=\"1936,2592\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"IMG_1832-e1452783083985\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=187%2C250&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?fit=765%2C1024&amp;ssl=1\" class=\"wp-image-68100 size-medium\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1-187x250.jpg?resize=187%2C250\" alt=\"Sheff explained the physical aspect of emotions.\" width=\"187\" height=\"250\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=187%2C250&amp;ssl=1 187w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=768%2C1028&amp;ssl=1 768w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?resize=765%2C1024&amp;ssl=1 765w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?w=1936&amp;ssl=1 1936w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2016/01/IMG_1832-e1452783083985-1.jpg?w=1776 1776w\" sizes=\"(max-width: 187px) 100vw, 187px\" data-recalc-dims=\"1\"><p id=\"caption-attachment-68100\" class=\"wp-caption-text\">Sheff explained the physical aspect of emotions.</p></div>\n<p>When I arrived at his office half an hour early, the door was open. Sitting comfortably at his neatly paper-laden desk was UCSB Researcher and Sociology professor, Dr. Thomas Scheff (or “Doc”, as his students call him). After a brief introduction, I could see that he was used to talking about his work, yet showed no signs of stilted professionalism.</p>\n<p>I had come to talk about our feelings, more specifically, our emotions. Contrary to common synonymous usage, ‘feelings’ are different from ‘emotions’. In his recent paper, “What are Emotions? A Physical Theory”, Dr. Scheff explains that emotions are actually physical reactions to an event – the ‘feeling’ part occurs when these physical reactions are delayed.</p>\n<p>“Suppose for a moment that some emotions are felt and others are not. If it’s not felt, where is it? And this article says, well, it’s in your body,” Sheff said.</p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p>Scheff gave the example of watching someone who seems very angry, but doesn’t register his or her own anger. They aren’t <em>feeling</em> the anger, because it’s being automatically expressed through their bodies.</p>\n<p>This isn’t a commonly accepted theory. In fact, very little is known scientifically about emotions. Why?</p>\n<p>“For some reasons they haven’t been really studied adequately compared to perception or cognition behavior. “Modern psychology thinks of itself as behaviorist, which kind of leaves out emotions entirely,” Sheff said.</p>\n<p>He based a significant portion of his ideas on John Dewey’s “attitude theory of emotion”. Dewey, a big-time philosopher around 100 years ago, introduced this theory claiming that an emotion is a physical, internal predisposition to act that has been delayed.</p>\n<p>According to the Stanford Encyclopedia of Philosophy, Dewey emphasized the fact that not just any action is expression of emotion. Some actions merely “discharge” the emotion on impulse. An example of this would be acting angrily, like yelling or defenestrating heavy objects. While they may get rid of the feeling in the short term, they are not <em>resolving</em> the emotion, and thus they are not <em>expressing </em>the emotion. The feeling will come creeping back.</p>\n<blockquote><p><em>What may seem expressive to an outside observer because it tells us something about the state of the person observed may not be expressive from the standpoint of the subject. Mere “giving way” to impulsion does not constitute expression. Expression requires clarification, which for Dewey means an ordering of impulsion by way of incorporating values of prior experiences. </em></p></blockquote>\n<p>How can we express our emotions…correctly? Apparently, it can only happen at a specific distance. Catharsis, the release of extreme emotions, can help us complete the emotional cycle, but it takes practice. Catharsis only occurs when the subject is just close enough to be in touch with their emotions, but far enough to avoid losing control. Scheff, like others in the field, refers to this goldilocks zone as ‘aesthetic distance’, when “you’re partly in, partly watching yourself happen, then that does the trick; that’s cathartic.”</p>\n<p>This happy medium is hard to find. And doing so can be really scary. During an overly-involved emotional episode, Scheff recounted, “…For whatever reason, you feel like you’ve lost control. It’s not true; you always have control. But you need to practice these things.”</p>\n<p>Societal codes dictate that everyone, especially men, must store these emotions somewhere else to deal with them later. Oddly, the more oppressed men might have it slightly better than the women.</p>\n<p>“There’s a bad cry, and a good cry. Men don’t know about bad cries; they’re so repressed that they can only have a good cry,” Sheff said.</p>\n<p>It’s rarely appropriate to express ones emotions immediately, and this leads to unnaturally negative feelings and misplaced anger or aggression. The moral? Express yourself. At least, try. As Doc reminds us, “grief is inevitable with human beings because we are dependent on other people, not just ourselves. That’s mammalian. It’s quite physical, grief, and attachment.”</p>\n<p><em>A version of this story appeared on p. 14 of the Thursday, Jan. 14 </em><em>print edition of the</em> Daily Nexus.</p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-67396\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-67396\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2016-01-14/emotional-theory-getting-physical-2/",
    "id": 7862,
    "author": {
      "id": 112,
      "name": "Natalie Overton"
    },
    "related": [7861, 7860, 7859],
    "comments": [],
    "followers": []
  }, {
    "title": "Santa Barbara Allergist Suggests A Nutty Solution for Peanut Allergies",
    "category": "Science & Tech",
    "subcategory": "Health & Wellness",
    "publish_date": "2015-12-31T08:00:00.000Z",
    "full_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=355%2C230&ssl=1",
    "description": "One in 50 children between the ages of five and 11 have a peanut allergy. The CDC reports that peanut allergies have risen by 50 percent between 1997 and 2011, accounting for over three million cases ...",
    "content": "<div class=\"single-post-content\">\n            <p><img data-attachment-id=\"66644\" data-permalink=\"https://dailynexus.com/2015-11-19/first-summit-addressing-uc-carbon-neutrality/new-logo-featured-3/\" data-orig-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?fit=355%2C230&amp;ssl=1\" data-orig-size=\"355,230\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"New-Logo-Featured\" data-image-description=\"\" data-medium-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?fit=250%2C162&amp;ssl=1\" data-large-file=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?fit=355%2C230&amp;ssl=1\" class=\"aligncenter size-medium wp-image-66644\" src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1-250x162.jpg?resize=250%2C162\" alt=\"New-Logo-Featured\" width=\"250\" height=\"162\" srcset=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?resize=250%2C162&amp;ssl=1 250w, https://i0.wp.com/dailynexus.com/wp-content/uploads/2015/11/New-Logo-Featured1.jpg?w=355&amp;ssl=1 355w\" sizes=\"(max-width: 250px) 100vw, 250px\" data-recalc-dims=\"1\">One in 50 children between the ages of five and 11 have a peanut allergy. The CDC reports that peanut allergies have risen by 50 percent between 1997 and 2011, accounting for over three million cases in the United States. Dr. Vincent Tubiolo, an allergist at the Allergy, Asthma and Immunology Care Center of Santa Barbara, points out that early exposure to peanuts can actually prevent peanut allergies from developing.</p>\n<p>The rise in peanut allergies has greatly affected the Santa Barbara Unified School District, which has eliminated peanut products from the menu all together since cross-contamination yields enough peanut protein to cause a potentially deadly case of anaphylaxis if not treated immediately with a shot of epinephrine.</p>\n<p>What is the key to prevention? According to the UCSF news center, the same memory cells that allow the body to recognize its own material are involved with resolving allergies. A major component of prevention involves convincing the body that the peanut protein is not a foreign threat to its health.</p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p>When an allergen is introduced to the body it enters the antigen-presenting cell (APC), which activates Th0 cells. Some of these Th0 cells turn into Th2 cells, which have the capability to stimulate B-cells to produce a large amount of immunoglobulin E (IgE) antibodies.</p>\n<p>According to the Penn State Hershey Medical Center, IgE is an antibody that is involved with this system, but it’s a specific class of antibody that usually doesn’t react to the foods we eat. However, it is possible to produce a specialized form of IgE susceptible to food; this is what happens in people with peanut allergies.</p>\n<p>These antibodies attach themselves to mast cells. The next time this allergen is introduced, it will come into contact with the antibody-mast cell combination, causing the mast cell to release histamines that lead to symptoms of allergy, like redness, itching, swelling, etc.</p>\n<p>These reactions are abnormal, and desensitization therapy is designed to treat these reactions by injecting a ‘vaccine’ of sorts into the patient; the vaccine is based on the allergen that yields the reaction.</p>\n<p>When the vaccine-allergen enters the APC, the APC activates T-cells, and produces regulatory T-cells (T-reg cells). These T-reg cells can suppress Th2 cells while simultaneously stimulating the production of Th1 cells. T-reg cells also stimulate B-cells to produce IgG4 antibodies, which prevent allergies by blocking the allergens from making contact with the IgE antibodies on the mast cells. With time, the number of Th2 cells decreases while the number of Th1 cells increases. This causes the allergy to slowly fade away.</p>\n<p>This research is all very new; desensitization was not previously accepted as a treatment for food allergies. Tubiolo warns that while desensitization is not a cure for a peanut allergy, consuming small amounts of peanuts (under medical supervision, of course) before the allergy forms is a good preventative method.</p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-67067\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2015-12-31/santa-barbara-allergist-suggests-a-nutty-solution-for-peanut-allergies/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-67067\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2015-12-31/santa-barbara-allergist-suggests-a-nutty-solution-for-peanut-allergies/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2015-12-31/santa-barbara-allergist-suggests-a-nutty-solution-for-peanut-allergies/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2015-12-31/santa-barbara-allergist-suggests-a-nutty-solution-for-peanut-allergies/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2015-12-31/santa-barbara-allergist-suggests-a-nutty-solution-for-peanut-allergies/",
    "id": 7875,
    "author": {
      "id": 112,
      "name": "Natalie Overton"
    },
    "related": [7874, 7873, 7872],
    "comments": [],
    "followers": []
  }]
}, {
  "title": "Sports",
  "articles": [{
    "title": "After Years of Disaster, Rejuvenated Manchester United Shows Signs of Life",
    "category": "Sports",
    "subcategory": "Soccer",
    "publish_date": "2020-06-28T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=910%2C647&ssl=1",
    "description": "Wednesday’s performance was a blueprint to future success for Manchester United.",
    "content": "<div class=\"single-post-content\">\n            <p><a href=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg\" data-slb-active=\"1\" data-slb-asset=\"912891294\" data-slb-internal=\"0\" data-slb-group=\"94999\"><img data-attachment-id=\"95000\" data-permalink=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/manchester-united/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=910%2C683&amp;ssl=1\" data-orig-size=\"910,683\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"manchester united\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=250%2C188&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=888%2C666&amp;ssl=1\" class=\"aligncenter size-full wp-image-95000\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=888%2C666\" alt=\"\" width=\"888\" height=\"666\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?w=910&amp;ssl=1 910w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=250%2C188&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=768%2C576&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=632%2C474&amp;ssl=1 632w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=536%2C402&amp;ssl=1 536w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"></a></p>\n<p><span style=\"font-weight: 400;\">It’s weird to feel hope as a Manchester United fan.</span></p>\n<p><span style=\"font-weight: 400;\">It’s a feeling I haven’t felt in years — something I haven’t experienced since Robin van Persie was still banging in goals in 2013. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">Sure, there have been occasional highlights: the second-place finish under José Mourinho in 2018, and the three-goal comeback against Paris Saint-Germain (PSG) in the Champions League last year. Those were certainly nice moments. But they never felt indicative of broader success; rather, they felt lucky. United fans were happy we finished second because, frankly, we didn’t deserve to (thank you, David de Gea). United fans were happy we came back against PSG because we knew we lacked the quality to compete with a team of that caliber — something United proved when they flamed out in the next round against Barcelona.</span></p>\n<p><span style=\"font-weight: 400;\">But on Wednesday, when Manchester United dismantled Sheffield United 3-0, I felt hope.</span></p>\n<p><span style=\"font-weight: 400;\">I say dismantled because, well, the 3-0 scoreline doesn’t do justice to the performance. After two early goals, Manchester United was content to maintain possession, forcing the Blades to chase the ball around for most of the second half. The Red Devils kept 68% possession on Wednesday, while outshooting Sheffield United 13-4.</span></p>\n<p><span style=\"font-weight: 400;\">To be transparent, it was a lackluster performance from Sheffield United, who have looked less-than-stellar since the restart. While the Blades still sit in an impressive eighth place, they’ve looked much more like the newly promoted side they are in recent times, rather than the team that was pushing to qualify for the Champions League back in March.</span></p>\n<p><span style=\"font-weight: 400;\">But Wednesday’s performance was bigger than gaudy stats, bigger than an underwhelming opponent. No, Wednesday’s performance was a blueprint to future success for Manchester United.</span></p>\n<p><span style=\"font-weight: 400;\">Since Manchester United acquired creative maestor Bruno Fernandes in January, pundits and fans alike have wondered how Fernandes could coexist with star French international Paul Pogba, who had spent most of the season on the sidelines with an ankle injury. In February and March — without Pogba — Fernandes displayed his quality, racking up 4 goals and 3 assists as an attacking midfielder. Fernandes’ ability to play a killer pass, as well as his lethal long-range shot, allowed Manchester United to better break down opponents playing a low defensive block.</span></p>\n<p><span style=\"font-weight: 400;\">With a healthy Pogba, however, manager Ole Gunnar Solskjaer had to devise a plan in which the two could play together. While both offer creativity and quality going forward, both also oftentimes struggle on the defensive end. Many pundits speculated that playing both together would cause problems for United’s back four.</span></p>\n<p><span style=\"font-weight: 400;\">While it remains to be seen how the two perform together against a top opponent, Wednesday’s performance should help disprove that theory. Solskjaer employed Pogba as a deep-lying playmaker, which enabled him to control the pace of the game while still providing cover for the back line. Although not quite as dangerous going forward as he usually is, Pogba still had the ability to play dangerous through balls — which he successfully did throughout the game. Meanwhile, Fernandes operated in his favored attacking midfielder role, linking up with Pogba and the front three on multiple occasions.</span></p>\n<p><span style=\"font-weight: 400;\">Most importantly, Solskjaer utilized veteran midfielder Nemanja Matic as a holding midfielder who acted as the glue that kept the entire formation functional. There’s no doubt that the 31-year-old has lost a step in recent years; with Pogba and Fernandes ahead of him on the pitch, however, they don’t need his pace. Instead, Matic operated just in front of the full-backs, sniffing out any counterattacking chances that Sheffield United had when Pogba opted to move up the pitch into the attacking third.</span></p>\n<p><span style=\"font-weight: 400;\">To be clear, Manchester United wasn’t flawless on Wednesday. Marcus Rashford — Manchester United’s top goal scorer this season — missed a few easy chances, although his passing was pristine. The Red Devils still desperately need a right winger: Mason Greenwood is great, but he’s a far better second-striker than winger. The backline of Harry Maguire and Victor Lindelof — as solid as it’s been this season — still struggled against pacy counterattacks. And striker Anthony Martial won’t be able to score a hat trick every game.</span></p>\n<p><span style=\"font-weight: 400;\">If Manchester United wants to challenge for the title next season instead of fighting for a Champions League berth, it will need to improve on all of these fronts while renewing the contract of Pogba.</span></p>\n<p><span style=\"font-weight: 400;\"> For the first time in recent memory, however, there’s a clear path ahead for Manchester United. It may not be much, but after everything that has gone wrong in the past seven years for the Red Devils, it’s a welcome start.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/brandon-victor/\"><img src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/IMG_2669.jpg?w=888\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/brandon-victor/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Brandon Victor</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Brandon Victor serves as a 2020-2021 sports editor. He has covered men’s tennis, men’s soccer and women’s basketball in his three years at the Daily Nexus.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:victor.k.brandon@gmail.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94999\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94999\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/",
    "id": 1795,
    "author": {
      "id": 21,
      "name": "Brandon Victor"
    },
    "related": [1794, 1793, 1792],
    "comments": [],
    "followers": []
  }, {
    "title": "After Years of Disaster, Rejuvenated Manchester United Shows Signs of Life",
    "category": "Sports",
    "subcategory": "Soccer",
    "publish_date": "2020-06-28T07:00:00.000Z",
    "full_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=355%2C230&ssl=1",
    "mobile_thumbnail": "https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=910%2C647&ssl=1",
    "description": "Wednesday’s performance was a blueprint to future success for Manchester United.",
    "content": "<div class=\"single-post-content\">\n            <p><a href=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg\" data-slb-active=\"1\" data-slb-asset=\"912891294\" data-slb-internal=\"0\" data-slb-group=\"94999\"><img data-attachment-id=\"95000\" data-permalink=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/manchester-united/\" data-orig-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=910%2C683&amp;ssl=1\" data-orig-size=\"910,683\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"manchester united\" data-image-description=\"\" data-medium-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=250%2C188&amp;ssl=1\" data-large-file=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?fit=888%2C666&amp;ssl=1\" class=\"aligncenter size-full wp-image-95000\" src=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=888%2C666\" alt=\"\" width=\"888\" height=\"666\" srcset=\"https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?w=910&amp;ssl=1 910w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=250%2C188&amp;ssl=1 250w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=768%2C576&amp;ssl=1 768w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=632%2C474&amp;ssl=1 632w, https://i1.wp.com/dailynexus.com/wp-content/uploads/2020/06/manchester-united.jpg?resize=536%2C402&amp;ssl=1 536w\" sizes=\"(max-width: 888px) 100vw, 888px\" data-recalc-dims=\"1\"></a></p>\n<p><span style=\"font-weight: 400;\">It’s weird to feel hope as a Manchester United fan.</span></p>\n<p><span style=\"font-weight: 400;\">It’s a feeling I haven’t felt in years — something I haven’t experienced since Robin van Persie was still banging in goals in 2013. </span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">Sure, there have been occasional highlights: the second-place finish under José Mourinho in 2018, and the three-goal comeback against Paris Saint-Germain (PSG) in the Champions League last year. Those were certainly nice moments. But they never felt indicative of broader success; rather, they felt lucky. United fans were happy we finished second because, frankly, we didn’t deserve to (thank you, David de Gea). United fans were happy we came back against PSG because we knew we lacked the quality to compete with a team of that caliber — something United proved when they flamed out in the next round against Barcelona.</span></p>\n<p><span style=\"font-weight: 400;\">But on Wednesday, when Manchester United dismantled Sheffield United 3-0, I felt hope.</span></p>\n<p><span style=\"font-weight: 400;\">I say dismantled because, well, the 3-0 scoreline doesn’t do justice to the performance. After two early goals, Manchester United was content to maintain possession, forcing the Blades to chase the ball around for most of the second half. The Red Devils kept 68% possession on Wednesday, while outshooting Sheffield United 13-4.</span></p>\n<p><span style=\"font-weight: 400;\">To be transparent, it was a lackluster performance from Sheffield United, who have looked less-than-stellar since the restart. While the Blades still sit in an impressive eighth place, they’ve looked much more like the newly promoted side they are in recent times, rather than the team that was pushing to qualify for the Champions League back in March.</span></p>\n<p><span style=\"font-weight: 400;\">But Wednesday’s performance was bigger than gaudy stats, bigger than an underwhelming opponent. No, Wednesday’s performance was a blueprint to future success for Manchester United.</span></p>\n<p><span style=\"font-weight: 400;\">Since Manchester United acquired creative maestor Bruno Fernandes in January, pundits and fans alike have wondered how Fernandes could coexist with star French international Paul Pogba, who had spent most of the season on the sidelines with an ankle injury. In February and March — without Pogba — Fernandes displayed his quality, racking up 4 goals and 3 assists as an attacking midfielder. Fernandes’ ability to play a killer pass, as well as his lethal long-range shot, allowed Manchester United to better break down opponents playing a low defensive block.</span></p>\n<p><span style=\"font-weight: 400;\">With a healthy Pogba, however, manager Ole Gunnar Solskjaer had to devise a plan in which the two could play together. While both offer creativity and quality going forward, both also oftentimes struggle on the defensive end. Many pundits speculated that playing both together would cause problems for United’s back four.</span></p>\n<p><span style=\"font-weight: 400;\">While it remains to be seen how the two perform together against a top opponent, Wednesday’s performance should help disprove that theory. Solskjaer employed Pogba as a deep-lying playmaker, which enabled him to control the pace of the game while still providing cover for the back line. Although not quite as dangerous going forward as he usually is, Pogba still had the ability to play dangerous through balls — which he successfully did throughout the game. Meanwhile, Fernandes operated in his favored attacking midfielder role, linking up with Pogba and the front three on multiple occasions.</span></p>\n<p><span style=\"font-weight: 400;\">Most importantly, Solskjaer utilized veteran midfielder Nemanja Matic as a holding midfielder who acted as the glue that kept the entire formation functional. There’s no doubt that the 31-year-old has lost a step in recent years; with Pogba and Fernandes ahead of him on the pitch, however, they don’t need his pace. Instead, Matic operated just in front of the full-backs, sniffing out any counterattacking chances that Sheffield United had when Pogba opted to move up the pitch into the attacking third.</span></p>\n<p><span style=\"font-weight: 400;\">To be clear, Manchester United wasn’t flawless on Wednesday. Marcus Rashford — Manchester United’s top goal scorer this season — missed a few easy chances, although his passing was pristine. The Red Devils still desperately need a right winger: Mason Greenwood is great, but he’s a far better second-striker than winger. The backline of Harry Maguire and Victor Lindelof — as solid as it’s been this season — still struggled against pacy counterattacks. And striker Anthony Martial won’t be able to score a hat trick every game.</span></p>\n<p><span style=\"font-weight: 400;\">If Manchester United wants to challenge for the title next season instead of fighting for a Champions League berth, it will need to improve on all of these fronts while renewing the contract of Pogba.</span></p>\n<p><span style=\"font-weight: 400;\"> For the first time in recent memory, however, there’s a clear path ahead for Manchester United. It may not be much, but after everything that has gone wrong in the past seven years for the Red Devils, it’s a welcome start.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/brandon-victor/\"><img src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/IMG_2669.jpg?w=888\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/brandon-victor/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Brandon Victor</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Brandon Victor serves as a 2020-2021 sports editor. He has covered men’s tennis, men’s soccer and women’s basketball in his three years at the Daily Nexus.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:victor.k.brandon@gmail.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94999\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94999\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-28/after-years-of-disaster-rejuvenated-manchester-united-shows-signs-of-life/",
    "id": 1795,
    "author": {
      "id": 21,
      "name": "Brandon Victor"
    },
    "related": [1794, 1793, 1792],
    "comments": [],
    "followers": []
  }, {
    "title": "UCSB Intramural Faces No Lag in Building Out Successful ESports Program",
    "category": "Sports",
    "subcategory": "Columns/Features",
    "publish_date": "2020-06-16T07:00:00.000Z",
    "full_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?resize=355%2C167&ssl=1",
    "mobile_thumbnail": "https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?resize=500%2C167&ssl=1",
    "description": "Despite a pre-COVID reluctance, the Intramural team seems to have embraced ESports",
    "content": "<div class=\"single-post-content\">\n            <p><a href=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png\" data-slb-active=\"1\" data-slb-asset=\"1071013477\" data-slb-internal=\"0\" data-slb-group=\"94906\"><img data-attachment-id=\"94907\" data-permalink=\"https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/esports/\" data-orig-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?fit=500%2C167&amp;ssl=1\" data-orig-size=\"500,167\" data-comments-opened=\"1\" data-image-meta='{\"aperture\":\"0\",\"credit\":\"\",\"camera\":\"\",\"caption\":\"\",\"created_timestamp\":\"0\",\"copyright\":\"\",\"focal_length\":\"0\",\"iso\":\"0\",\"shutter_speed\":\"0\",\"title\":\"\",\"orientation\":\"0\"}' data-image-title=\"Esports\" data-image-description=\"\" data-medium-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?fit=250%2C83&amp;ssl=1\" data-large-file=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?fit=500%2C167&amp;ssl=1\" class=\"aligncenter size-full wp-image-94907\" src=\"https://i2.wp.com/dailynexus.com/wp-content/uploads/2020/06/Esports-e1592352166609.png?resize=500%2C167\" alt=\"\" width=\"500\" height=\"167\" data-recalc-dims=\"1\"></a></p>\n<p><span style=\"font-weight: 400;\">What do intramural sports look like in the wake of a devastating virus that feeds off of close bodily contact?</span></p>\n<p><span style=\"font-weight: 400;\">When UC Santa Barbara transitioned to remote learning in the spring, Department of Recreation Intramural Coordinator Gabe Escobedo and his team faced the unenviable task of answering this question — of finding a way to keep students involved without in-person intramural athletics.</span></p><!--Ad Injection:random--><script type=\"text/javascript\"> \r\n\r\nfunction myAdDoneFunction(spotx_ad_found) { if(spotx_ad_found) {} else {}}; \r\n\r\n\r\n\r\nfunction mobileAndTabletcheck() { \r\n\r\nvar check = false; \r\n\r\n (function(a){if(/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera); \r\n\r\nreturn check; \r\n\r\n} \r\n\r\nvar bMobile = mobileAndTabletcheck(), \r\n\r\naScriptAttributes = [\r\n\r\n'type=\"text/javascript\" src=\"http://search.spotxchange.com/js/spotx.js\" data-spotx_ad_done_function=\"myAdDoneFunction\" data-spotx_ad_unit=\"incontent\" data-spotx_autoplay=\"1\" data-spotx_ad_volume=\"0\" data-spotx_loop=\"0\" data-spotx_collapse=\"1\" data-spotx_unmute_on_mouse=\"1\"'\r\n\r\n];\r\n\r\nif (bMobile) \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"304\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"171\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"128967\"');\r\n\r\n} \r\n\r\nelse \r\n\r\n{ \r\n\r\naScriptAttributes.push('data-spotx_content_width=\"608\"'); \r\n\r\naScriptAttributes.push('data-spotx_content_height=\"342\"'); \r\n\r\naScriptAttributes.push('data-spotx_unmute_on_mouse=\"1\"');\r\n\r\naScriptAttributes.push('data-spotx_channel_id=\"108869\"');\r\n\r\n} \r\n\r\ndocument.write('<scr' + 'ipt ' + aScriptAttributes.join(\" \") + '></scr' + 'ipt>'); \r\n</script> \n<p><span style=\"font-weight: 400;\">“</span><span style=\"font-weight: 400;\">Canceling IMs all together never crossed our minds,” Escobedo said. “We wanted to provide our students with safe, healthy alternatives to in-person sports.”</span></p>\n<p><span style=\"font-weight: 400;\">Enter Intramural ESports — a brand-new approach to traditional intramural sports that Escobedo and his team pioneered this spring. Born out of necessity, the Intramural team had only a few weeks to plan, organize and execute the concept.</span></p>\n<p><span style=\"font-weight: 400;\">Given the time constraints, Intramural ESports only featured three different games: Rocket League, FIFA 20 and NBA 2K20. With Rocket League, each participant had the option to play in a 1v1, 2v2 or 3v3 league. In each sport, players were grouped into different divisions based on their skill level.</span></p>\n<p><span style=\"font-weight: 400;\">Mikal de Wit — a Spring 2020 graduate and Recreation Center employee who helped Escobedo plan Intramural ESports — participated in all three variations of Rocket League and noted the enthusiasm from other participants.</span></p>\n<p><span style=\"font-weight: 400;\">“I was surprised at how many people had signed up; we had close to 100 people in just Rocket League,” de Wit said. “As a [Rocket League] player, I thought it was really cool to add something to the game and have something to play towards.”</span></p>\n<p><span style=\"font-weight: 400;\">In each division, de Wit played two series for a three-week period, with each series consisting of a best-two-out-of-three format. Between setting up the game with his opponent and breaks within the game, de Wit estimated that each Rocket League series took about half an hour.</span></p>\n<p><span style=\"font-weight: 400;\">After the regular season, players who qualified for the playoffs faced off in a best-of-five series, with a final best-of-seven series to determine the champion.</span></p>\n<p><span style=\"font-weight: 400;\">“In my experience, the games were competitive but very friendly,” de Wit said. “ The format was cool because</span><span style=\"font-weight: 400;\"> you got to play against [playoff] opponents during the regular season, so in the finals, you already played them and you’re hoping to get the win this time around in the postseason.”</span></p>\n<p><span style=\"font-weight: 400;\">While it started as an emergency backup plan, the inaugural Intramural ESports featured hundreds of participants and allowed the Intramural program to engage with students who wouldn’t normally participate in intramural sports, according to Escobedo.</span></p>\n<p><span style=\"font-weight: 400;\">“</span><span style=\"font-weight: 400;\">A large part of the Department of Recreation’s mission and values is being student-focused,” Escobedo said. “As long as our students continue to show that they’re substantially interested in ESports, Intramural will enjoy growing our ESports offerings.”</span></p>\n<p><span style=\"font-weight: 400;\">Indeed, Escobedo and the team are committed to expanding and improving upon their current ESports program. This summer, they are working with Francisco Rodriguez — the ESports and Outreach Officer for Gaucho Gaming — to create a much broader program for the fall.</span></p>\n<p><span style=\"font-weight: 400;\">“UCSB is one of the few UCs that’s lacked any school-backing Esports program,” Rodriguez said. “ Since I transferred [in 2018], I’ve been working on creating a program, and now that they see that ESports is extremely viable, we are having a series of meetings to create an ESports Program at UCSB.”</span></p>\n<p><span style=\"font-weight: 400;\">While the logistics of that program are yet to be determined, it seems clear that Intramural ESports will return in the fall with more game offerings for students to choose from. Despite a pre-COVID reluctance, the Intramural team seems to have embraced ESports— and, in some ways, embraced the future of sports and gaming.</span></p><div class=\"h5ab-print-button-container\"><div class=\"h5ab-print-button h5ab-print-button-left\" style=\"cursor: pointer; color: #555\"><i class=\"fa fa-print fa-lg\"></i>\n\t\t\t\t\t\t\t<span>Print</span></div></div>\n<div class=\"saboxplugin-wrap\" itemtype=\"http://schema.org/Person\" itemscope itemprop=\"author\"><div class=\"saboxplugin-gravatar\"><a href=\"https://dailynexus.com/author/brandon-victor/\"><img src=\"https://i0.wp.com/dailynexus.com/wp-content/uploads/2020/06/IMG_2669.jpg?w=888\" alt=\"\" itemprop=\"image\" data-recalc-dims=\"1\"></a></div><div class=\"saboxplugin-authorname\"><a href=\"https://dailynexus.com/author/brandon-victor/\" class=\"vcard author\" rel=\"author\" itemprop=\"url\"><span class=\"fn\" itemprop=\"name\">Brandon Victor</span></a></div><div class=\"saboxplugin-desc\"><div itemprop=\"description\"><p>Brandon Victor serves as a 2020-2021 sports editor. He has covered men’s tennis, men’s soccer and women’s basketball in his three years at the Daily Nexus.</p>\n</div></div><div class=\"clearfix\"></div><div class=\"saboxplugin-socials \"><a target=\"_self\" href=\"mailto:victor.k.brandon@gmail.com\" rel=\"nofollow\" class=\"saboxplugin-icon-grey\"><svg aria-hidden=\"true\" class=\"sab-user_email\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z\"></path></svg></a></div></div><div class=\"sharedaddy sd-sharing-enabled\"><div class=\"robots-nocontent sd-block sd-social sd-social-icon sd-sharing\"><h3 class=\"sd-title\">Share this:</h3><div class=\"sd-content\"><ul><li class=\"share-facebook\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-facebook-94906\" class=\"share-facebook sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/?share=facebook\" target=\"_blank\" title=\"Click to share on Facebook\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Facebook (Opens in new window)</span></a></li><li class=\"share-twitter\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"sharing-twitter-94906\" class=\"share-twitter sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/?share=twitter\" target=\"_blank\" title=\"Click to share on Twitter\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Twitter (Opens in new window)</span></a></li><li class=\"share-tumblr\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-tumblr sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/?share=tumblr\" target=\"_blank\" title=\"Click to share on Tumblr\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Tumblr (Opens in new window)</span></a></li><li class=\"share-reddit\"><a rel=\"nofollow noopener noreferrer\" data-shared=\"\" class=\"share-reddit sd-button share-icon no-text\" href=\"https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/?share=reddit\" target=\"_blank\" title=\"Click to share on Reddit\"><span></span><span class=\"sharing-screen-reader-text\">Click to share on Reddit (Opens in new window)</span></a></li><li class=\"share-end\"></ul></div></div></div>\n<div id=\"jp-relatedposts\" class=\"jp-relatedposts\">\n\t<h3 class=\"jp-relatedposts-headline\"><em>Related</em></h3>\n</div>          </div>",
    "src_url": "https://dailynexus.com/2020-06-16/ucsb-intramural-faces-no-lag-in-building-out-successful-esports-program/",
    "id": 12,
    "author": {
      "id": 21,
      "name": "Brandon Victor"
    },
    "related": [11, 10, 9],
    "comments": [],
    "followers": []
  }]
}]);

/***/ }),

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: queryDB, getCategories, insertUser, getUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDB", function() { return queryDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertUser", function() { return insertUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pg */ "pg");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



Object(dotenv__WEBPACK_IMPORTED_MODULE_0__["config"])();

if (!pool) {
  var pool = new pg__WEBPACK_IMPORTED_MODULE_1__["Pool"]({
    max: 200,
    connectionString: "postgresql://postgres:Malone21@localhost:5432/Mock_Nexus",
    idleTimeoutMillis: 0
  });
  pool ? console.log('Connected to PostgreSQL') : console.log('Failed to connect to database');
} // export async function queryDB(query, params=[]) {
//     try {
//         var client = new Client({ connectionString: process.env.DATABASE_URL }),
//             { rows } = await client.query(query, params);
//     } catch (e) { console.log(e) }
//     finally { client && client.end() }
//     return rows;
// }


async function queryDB(query, params = []) {
  try {
    var client = await pool.connect(),
        {
      rows
    } = await client.query(query, params);
  } catch (e) {
    console.log(e);
  } finally {
    client && client.release();
  }

  return rows;
}
async function getCategories() {
  let categories = await queryDB("SELECT * FROM categories WHERE title <> 'Headlines' AND title <> 'Labyrinth' ORDER BY title");

  for (let category of categories) {
    for (let id of category.articles) {
      let hydratedArticle = await queryDB("SELECT * FROM articles WHERE id = $1", [id]);
      category.articles.splice(category.articles.indexOf(id), 1, hydratedArticle[0]);
    }
  }

  return categories.map(category => _objectSpread(_objectSpread({}, category), {}, {
    articles: category.articles.sort(({
      publish_date: a
    }, {
      publish_date: b
    }) => b - a)
  }));
}
async function insertUser(name, email) {
  await queryDB('INSERT INTO users (name, email, comments, following) VALUES ($1, $2, $3, $4)', [name, email, [], []]);
}
async function getUser(email) {
  let [user] = await queryDB('SELECT * FROM users WHERE email = $1', [email]);
  return user;
} // function spawnPool() {
//     if (!pool) {
//         var pool = new Pool({
//             max: 200,
//             connectionString: process.env.DATABASE_URL,
//             idleTimeoutMillis: 0
//         });
//         pool
//             ? console.log('Connected to PostgreSQL')
//             : console.log('Failed to connect to database');
//     }
//     return pool;
// }

/***/ }),

/***/ "./layouts/index.js":
/*!**************************!*\
  !*** ./layouts/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./components/Sidebar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\layouts\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Layout({
  footerData,
  children
}) {
  const {
    0: showBottomAd,
    1: setShowBottomAd
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);

  function updateBottomAd() {
    document.getElementById('__next').children[2].children[0].style.display = showBottomAd ? 'flex' : 'none';
  }

  function toggleShowBottomAdListener() {
    setShowBottomAd(!showBottomAd);
    window.removeEventListener('scroll', updateBottomAd, false);
    window.addEventListener('scroll', updateBottomAd, false);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(_ => toggleShowBottomAdListener(), []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("script", {
    src: "https://kit.fontawesome.com/7cab195da1.js",
    crossOrigin: "anonymous",
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
    rel: "stylesheet",
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      backgroundColor: '#444',
      color: '#fff',
      height: '6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("span", {
    style: {
      border: '2px dotted white',
      width: '45rem',
      height: '5.35rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: 'none'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Ad Space"))), __jsx("div", {
    className: "jsx-732359191" + " " + "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      width: 'calc(100% - 18.75rem)'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, children), __jsx("div", {
    style: {
      width: '18.25rem'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 53
    }
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    footerData: footerData,
    toggleShowBottomAdListener: toggleShowBottomAdListener,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      backgroundColor: '#444',
      color: '#fff',
      height: '7rem',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: 0,
      width: '45rem',
      zIndex: 10,
      display: 'none'
    },
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-732359191",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Ad Space"), __jsx("button", {
    onClick: e => {
      e.target.parentElement.parentElement.style.display = 'none';
    },
    className: "jsx-732359191" + " " + "bottom-ad-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "x"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "732359191",
    __self: this
  }, "*.jsx-732359191{font-family:Lato,sans-serif;}.main.jsx-732359191{margin:0 1rem 1rem 1rem;}.bottom-ad-button.jsx-732359191{background-color:coral;cursor:pointer;border:1px solid white;color:white;font-size:.75rem;padding:0 .25rem;position:absolute;top:5px;right:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xcbGF5b3V0c1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENvQixBQUc4QyxBQUlOLEFBSUQsdUJBQ1IsQ0FKbkIsSUFKQyxVQVMwQix1QkFDWCxZQUNLLGlCQUNBLGlCQUNDLGtCQUNWLFFBQ0UsVUFDZCIsImZpbGUiOiJDOlxcVXNlcnNcXG5pY2hvXFxDb2RlXFxQb3J0Zm9saW9cXG1vY2tfbmV4dXNcXGxheW91dHNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZWJhcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXQoeyBmb290ZXJEYXRhLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbc2hvd0JvdHRvbUFkLCBzZXRTaG93Qm90dG9tQWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQm90dG9tQWQoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmNoaWxkcmVuWzJdLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSBzaG93Qm90dG9tQWQgPydmbGV4JyA6ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaG93Qm90dG9tQWRMaXN0ZW5lcigpIHtcclxuICAgICAgICBzZXRTaG93Qm90dG9tQWQoIXNob3dCb3R0b21BZCk7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUJvdHRvbUFkLCBmYWxzZSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHVwZGF0ZUJvdHRvbUFkLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdChfPT4gdG9nZ2xlU2hvd0JvdHRvbUFkTGlzdGVuZXIoKSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoPD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vN2NhYjE5NWRhMS5qc1wiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDQ0JywgY29sb3I6ICcjZmZmJywgaGVpZ2h0OiAnNnJlbScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnIH19PlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBib3JkZXI6ICcycHggZG90dGVkIHdoaXRlJywgd2lkdGg6ICc0NXJlbScsIGhlaWdodDogJzUuMzVyZW0nLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJvcmRlckJvdHRvbTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+QWQgU3BhY2U8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICdjYWxjKDEwMCUgLSAxOC43NXJlbSknIH19PntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgIHdpZHRoOiAnMTguMjVyZW0nIH19PjxTaWRlYmFyIC8+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9vdGVyIGZvb3RlckRhdGE9e2Zvb3RlckRhdGF9IHRvZ2dsZVNob3dCb3R0b21BZExpc3RlbmVyPXt0b2dnbGVTaG93Qm90dG9tQWRMaXN0ZW5lcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM0NDQnLCBjb2xvcjogJyNmZmYnLCBoZWlnaHQ6ICc3cmVtJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcG9zaXRpb246ICdmaXhlZCcsIGJvdHRvbTogMCwgd2lkdGg6ICc0NXJlbScsIHpJbmRleDogMTAsIGRpc3BsYXk6ICdub25lJyB9fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkFkIFNwYWNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3R0b20tYWQtYnV0dG9uXCIgb25DbGljaz17ZSA9PiB7IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIH19Png8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2AgICAgICAgICAgICBcclxuICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtIDFyZW0gMXJlbTtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIC5ib3R0b20tYWQtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY29yYWw7XHJcbiAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgLjI1cmVtO1xyXG4gICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgIHRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\layouts\\\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

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
  if (true) return; // Prefetch the JSON page if asked (only in the client)
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

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
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

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
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
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

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

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
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
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
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
      ;
      err.code = 'PAGE_LOAD_ERROR';
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
      if (!e.state) {
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

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
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
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
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
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
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
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
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

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
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

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
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
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
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
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Headlines__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Headlines */ "./components/Headlines.js");
/* harmony import */ var _components_CategoryPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CategoryPreview */ "./components/CategoryPreview.js");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db */ "./db.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./data/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\nicho\\Code\\Portfolio\\mock_nexus\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function App({
  categories,
  headlines
}) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(_ => {
    if (!sessionStorage.getItem('noticeSeen')) {
      alert('NOTICE:\n\nThis site is an imitation of that of the university newspaper at the University of California, Santa Barbara - the Daily Nexus - and exists solely to demonstrate the abilities of the creator with regard to software development. Express written permission is being sought to host this mock site during the interview process and the site will be removed thereafter. Please support the Daily Nexus and the creators of the original site by visiting www.dailynexus.com.');
      sessionStorage.setItem('noticeSeen', true);
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-451200777" + " " + "home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/articles/1843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "jsx-451200777" + " " + "banner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 45
    }
  }, __jsx("span", {
    className: "jsx-451200777",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "LIVE: Updates on Coronavirus in Santa Barbara County, on UCSB Operations"), __jsx("span", {
    className: "jsx-451200777" + " " + "banner-read-more",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "click to read more"))), __jsx(_components_Headlines__WEBPACK_IMPORTED_MODULE_2__["default"], {
    articles: headlines,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx("div", {
    style: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginLeft: '1rem'
    },
    className: "jsx-451200777",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "By Category"), __jsx("ul", {
    className: "jsx-451200777" + " " + "home-category-previews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, categories.map((category, i) => __jsx("li", {
    key: i,
    className: "jsx-451200777",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx(_components_CategoryPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    category: category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  })))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "451200777",
    __self: this
  }, ".home-category-previews{display:grid;grid-template-columns:1fr 1fr;row-gap:4rem;-webkit-column-gap:.5rem;column-gap:.5rem;margin:2rem 3rem;}.banner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.75rem;font-size:2rem;color:white;background-color:var(--theme-blue);text-align:center;margin-bottom:.5rem;margin-right:.5rem;}.banner-read-more{font-size:1.5rem;margin-top:2px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbmljaG9cXENvZGVcXFBvcnRmb2xpb1xcbW9ja19uZXh1c1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DMkIsQUFHOEIsQUFRQSxBQVlJLGFBbkJhLElBb0JmLGVBQ25CLFdBcEJpQixhQUNJLGtCQU1LLHdCQUxMLGlCQUNyQixxQ0FLbUIsZUFDQSxlQUNILFlBQ3VCLG1DQUNqQixrQkFDRSxvQkFDRCxtQkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxuaWNob1xcQ29kZVxcUG9ydGZvbGlvXFxtb2NrX25leHVzXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGxpbmVzIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGxpbmVzJztcclxuaW1wb3J0IENhdGVnb3J5UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3J5UHJldmlldyc7XHJcbmltcG9ydCB7IHF1ZXJ5REIgfSBmcm9tICcuLi9kYic7XHJcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4uL2RhdGEnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2xheW91dHMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBBcHAoeyBjYXRlZ29yaWVzLCBoZWFkbGluZXMgfSkge1xyXG5cclxuICAgIHVzZUVmZmVjdChfPT4ge1xyXG4gICAgICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbm90aWNlU2VlbicpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdOT1RJQ0U6XFxuXFxuVGhpcyBzaXRlIGlzIGFuIGltaXRhdGlvbiBvZiB0aGF0IG9mIHRoZSB1bml2ZXJzaXR5IG5ld3NwYXBlciBhdCB0aGUgVW5pdmVyc2l0eSBvZiBDYWxpZm9ybmlhLCBTYW50YSBCYXJiYXJhIC0gdGhlIERhaWx5IE5leHVzIC0gYW5kIGV4aXN0cyBzb2xlbHkgdG8gZGVtb25zdHJhdGUgdGhlIGFiaWxpdGllcyBvZiB0aGUgY3JlYXRvciB3aXRoIHJlZ2FyZCB0byBzb2Z0d2FyZSBkZXZlbG9wbWVudC4gRXhwcmVzcyB3cml0dGVuIHBlcm1pc3Npb24gaXMgYmVpbmcgc291Z2h0IHRvIGhvc3QgdGhpcyBtb2NrIHNpdGUgZHVyaW5nIHRoZSBpbnRlcnZpZXcgcHJvY2VzcyBhbmQgdGhlIHNpdGUgd2lsbCBiZSByZW1vdmVkIHRoZXJlYWZ0ZXIuIFBsZWFzZSBzdXBwb3J0IHRoZSBEYWlseSBOZXh1cyBhbmQgdGhlIGNyZWF0b3JzIG9mIHRoZSBvcmlnaW5hbCBzaXRlIGJ5IHZpc2l0aW5nIHd3dy5kYWlseW5leHVzLmNvbS4nKTtcclxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbm90aWNlU2VlbicsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKDw+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGljbGVzLzE4NDNcIj48YSBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5MSVZFOiBVcGRhdGVzIG9uIENvcm9uYXZpcnVzIGluIFNhbnRhIEJhcmJhcmEgQ291bnR5LCBvbiBVQ1NCIE9wZXJhdGlvbnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFubmVyLXJlYWQtbW9yZVwiPmNsaWNrIHRvIHJlYWQgbW9yZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGxpbmVzIGFydGljbGVzPXtoZWFkbGluZXN9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMS41cmVtJywgZm9udFdlaWdodDogJ2JvbGQnLCBtYXJnaW5MZWZ0OiAnMXJlbScgfX0+QnkgQ2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJob21lLWNhdGVnb3J5LXByZXZpZXdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlQcmV2aWV3IGNhdGVnb3J5PXtjYXRlZ29yeX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgLmhvbWUtY2F0ZWdvcnktcHJldmlld3Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICAgICAgICAgIHJvdy1nYXA6IDRyZW07XHJcbiAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAzcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtYmx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYW5uZXItcmVhZC1tb3JlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBsZXQgW2hlYWRsaW5lSURzXSA9IGF3YWl0IHF1ZXJ5REIoXCJTRUxFQ1QgYXJ0aWNsZXMgRlJPTSBjYXRlZ29yaWVzIFdIRVJFIHRpdGxlID0gJ0hlYWRsaW5lcydcIiksXHJcbiAgICAgICAgaGVhZGxpbmVzID0gYXdhaXQgcXVlcnlEQihcIlNFTEVDVCAqIEZST00gYXJ0aWNsZXMgV0hFUkUgaWQgPSBBTlkoJDEpXCIsIFtoZWFkbGluZUlEcy5hcnRpY2xlc10pO1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoeyBjYXRlZ29yaWVzLCBoZWFkbGluZXMgfSkpIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwIl19 */\n/*@ sourceURL=C:\\\\Users\\\\nicho\\\\Code\\\\Portfolio\\\\mock_nexus\\\\pages\\\\index.js */"));
}

async function getStaticProps() {
  let [headlineIDs] = await Object(_db__WEBPACK_IMPORTED_MODULE_4__["queryDB"])("SELECT articles FROM categories WHERE title = 'Headlines'"),
      headlines = await Object(_db__WEBPACK_IMPORTED_MODULE_4__["queryDB"])("SELECT * FROM articles WHERE id = ANY($1)", [headlineIDs.articles]);
  return {
    props: JSON.parse(JSON.stringify({
      categories: _data__WEBPACK_IMPORTED_MODULE_5__["default"],
      headlines
    }))
  };
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

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

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

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

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });