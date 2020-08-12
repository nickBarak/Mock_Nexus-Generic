module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/twb":
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0cp2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return convertToPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return convertFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return testEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return copyToClipboard; });
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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("mRNo");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__("8xkj"); // Format function modified from nodejs
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

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/twb");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_3__);


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
    onLeave: toggleShowBottomAdListener
  }, __jsx("div", {
    className: "jsx-4130284784" + " " + "footer"
  }, __jsx("ul", {
    className: "jsx-4130284784"
  }, __jsx("li", {
    className: "jsx-4130284784"
  }, __jsx("ul", {
    className: "jsx-4130284784"
  }, page > 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route
  }, __jsx("a", {
    style: {
      fontSize: '1rem'
    },
    className: "jsx-4130284784"
  }, "\xAB First"))), __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: page === 2 ? route : route + `/page/${page - 1}`
  }, __jsx("a", {
    style: {
      fontSize: '1rem',
      margin: '0 .25rem 0 .5rem'
    },
    className: "jsx-4130284784"
  }, "\u2039 Prev")))))), __jsx("li", {
    className: "jsx-4130284784"
  }, __jsx("ul", {
    className: "jsx-4130284784"
  }, footerData && footerData.highestPage > 1 && pageNav.map((pageNum, i) => __jsx("li", {
    key: i,
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + (pageNum === 1 ? '' : `/page/${pageNum}`)
  }, __jsx("a", {
    style: {
      margin: '0 .15rem'
    },
    className: "jsx-4130284784"
  }, pageNum === page ? __jsx("strong", {
    style: {
      color: 'black',
      fontSize: '1.3rem'
    },
    className: "jsx-4130284784"
  }, pageNum) : pageNum)))))), __jsx("li", {
    className: "jsx-4130284784"
  }, __jsx("ul", {
    className: "jsx-4130284784"
  }, page < highestPage && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + `/page/${page + 1}`
  }, __jsx("a", {
    style: {
      fontSize: '1rem',
      margin: '0 .5rem 0 .25rem'
    },
    className: "jsx-4130284784"
  }, "Next \u203A"))), __jsx("li", {
    style: {
      alignSelf: 'center',
      paddingTop: '.1rem'
    },
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route + `/page/${highestPage}`
  }, __jsx("a", {
    style: {
      fontSize: '1rem'
    },
    className: "jsx-4130284784"
  }, "Last \xBB"))))))), __jsx("ul", {
    className: "jsx-4130284784"
  }, [['Home', '/'], ['About', '/about'], ['Join Us', '/about/join'], ['Staff/Contact', '/about/staff-contact'], ['Legal Notices', '/about/legal-notices'], ['FAQ', '/about/faq'], ['Advertising', '/about/advertising']].map(([title, route], i) => __jsx("li", {
    key: i,
    className: "jsx-4130284784"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: route
  }, __jsx("a", {
    className: "jsx-4130284784"
  }, title))))), __jsx("img", {
    src: "https://pixel.wp.com/g.gif?v=ext&j=1%3A8.1.1&blog=32043259&post=0&tz=-7&srv=dailynexus.com&host=dailynexus.com&ref=https%3A%2F%2Fdailynexus.com%2Faboutcontact%2F&fcp=0&rand=0.4052728025036777",
    alt: "smile!",
    className: "jsx-4130284784"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4130284784"
  }, [".footer.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1.5rem;}", "a.jsx-4130284784{color:black;}", "ul.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "ul.jsx-4130284784:nth-child(1) li.jsx-4130284784 ul.jsx-4130284784{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}", "ul.jsx-4130284784:nth-child(1){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "ul.jsx-4130284784:nth-child(1) a.jsx-4130284784{color:var(--link-hover);font-size:1.1rem;}", "ul.jsx-4130284784:nth-child(2){border:1px solid #ddd;padding:.5rem .075rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:.75rem 0 .85rem 0;}", "ul.jsx-4130284784:nth-child(2) li.jsx-4130284784{margin:0 1.25rem;font-size:1.2rem;}"])));
}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "DcUa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0cp2");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function ArticlePreview({
  article,
  imageLeft,
  labyrinth
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "article-preview"
  }, imageLeft && __jsx("picture", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }, __jsx("source", {
    srcSet: article.full_thumbnail,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }), __jsx("source", {
    srcSet: "/img/nexus-fallback.webp",
    style: {
      width: '20rem',
      height: '15rem'
    },
    type: "image/webp",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }), __jsx("img", {
    alt: "thumbnail",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "article-preview-words"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "article-preview-title"
  }, article.title))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "date-and-author"
  }, Object(_Functions__WEBPACK_IMPORTED_MODULE_3__[/* convertDate */ "a"])(article.publish_date), " by ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/authors/${article.author.id}`
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "article-preview-author"
  }, article.author.name))), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }, article.description), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `/articles/${article.id}`
  }, __jsx("a", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]]) + " " + "read-more"
  }, "read more"))), !imageLeft && __jsx("picture", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }, __jsx("source", {
    srcSet: article.full_thumbnail,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }), __jsx("source", {
    srcSet: "/img/nexus-fallback.webp",
    style: {
      width: '20rem',
      height: '15rem'
    },
    type: "image/webp",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }), __jsx("img", {
    alt: "thumbnail",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3332980722", [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']]])
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3332980722",
    dynamic: [imageLeft ? '' : 'align-items: flex-end', labyrinth ? '60%' : '80%', labyrinth ? 'font-size: 1.5rem;' : '']
  }, [".article-preview.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:2.5rem 0;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;}", ".article-preview.__jsx-style-dynamic-selector::after{content:'';position:absolute;background-color:#eaeaea;height:2px;width:97.5%;bottom:-1.25rem;left:2.5%;}", `.article-preview-words.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;${imageLeft ? '' : 'align-items: flex-end'};margin:0 .75rem;width:${labyrinth ? '60%' : '80%'};}`, `.article-preview-title.__jsx-style-dynamic-selector{color:black;font-size:1.75rem;font-weight:600;${labyrinth ? 'font-size: 1.5rem;' : ''};}`, ".article-preview-author.__jsx-style-dynamic-selector{color:gray;font-style:italic;}", "a.__jsx-style-dynamic-selector:hover{color:var(--link-hover);}"]));
}

/* harmony default export */ __webpack_exports__["a"] = (ArticlePreview);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JvUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return queryDB; });
/* unused harmony export getCategories */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return insertUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qW5S");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fMim");
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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "X24+":
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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
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

/***/ "ZDfL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./Functions.js
var Functions = __webpack_require__("0cp2");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// CONCATENATED MODULE: ./components/Nav.js


var __jsx = external_react_default.a.createElement;




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
  } = Object(external_react_["useState"])([[], []]);
  const {
    0: searchError,
    1: setSearchError
  } = Object(external_react_["useState"])(null);
  const {
    0: queryTime,
    1: setQueryTime
  } = Object(external_react_["useState"])(0);
  const {
    0: sortBy,
    1: setSortBy
  } = Object(external_react_["useState"])(0);
  const {
    0: loadingSearchResults,
    1: setLoadingSearchResults
  } = Object(external_react_["useState"])(false);
  const {
    0: modalPage,
    1: setModalPage
  } = Object(external_react_["useState"])(1);
  const {
    0: modalPageSet,
    1: setModalPageSet
  } = Object(external_react_["useState"])(0);
  const timeouts = [];
  return __jsx("div", {
    className: "jsx-87696297"
  }, __jsx("ul", {
    className: "jsx-87696297" + " " + "nav"
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
    className: "jsx-87696297"
  }, category.subcategories ? __jsx(external_react_default.a.Fragment, null, __jsx(link_default.a, {
    href: `/categories/${category.title.toLowerCase().replace(/ /g, '-')}`
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
    className: "jsx-87696297"
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
    className: "jsx-87696297" + " " + "nav-subcategories"
  }, category.subcategories.map((subcategory, j) => __jsx("li", {
    key: j,
    className: "jsx-87696297"
  }, __jsx(link_default.a, {
    href: category.title !== 'About' ? `/categories/${Object(Functions["c" /* convertToPath */])(category.title)}/${Object(Functions["c" /* convertToPath */])(subcategory)}` : `/about/${Object.values(subcategory)[0]}`
  }, __jsx("a", {
    className: "jsx-87696297" + " " + "subcategory-link"
  }, category.title !== 'About' ? subcategory : Object.keys(subcategory)[0])))))) : __jsx(link_default.a, {
    href: category.link
  }, __jsx("a", {
    className: "jsx-87696297"
  }, category.title)))), __jsx("li", {
    key: "-2",
    style: {
      position: 'relative',
      textTransform: 'none'
    },
    className: "jsx-87696297"
  }, __jsx("i", {
    onClick: e => {
      let {
        style
      } = e.currentTarget.parentElement.children[1];
      style.display = style.display === 'none' ? 'block' : 'none';
    },
    className: "jsx-87696297" + " " + "search fas fa-search"
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
    className: "jsx-87696297"
  }))), __jsx("div", {
    className: "jsx-87696297" + " " + "search-results"
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
    className: "jsx-87696297" + " " + "search-results-button"
  }, "x"), __jsx("div", {
    style: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: '1.1rem'
    },
    className: "jsx-87696297"
  }, searchError), __jsx("div", {
    className: "jsx-87696297" + " " + "search-results-header"
  }, __jsx("span", {
    style: {
      fontFamily: 'Arial, sans-serif',
      fontSize: '.85rem'
    },
    className: "jsx-87696297"
  }, !loadingSearchResults ? `${searchResults[0].length} result${searchResults[0].length === 1 ? '' : 's'} (${queryTime} second${queryTime === 1 ? '' : 's'})` : 'Loading articles...'), __jsx("span", {
    className: "jsx-87696297"
  }, __jsx("span", {
    style: {
      fontSize: '.85rem',
      marginRight: '.25rem'
    },
    className: "jsx-87696297"
  }, "Sort by: "), __jsx("select", {
    onChange: e => console.log(e.target.selectedIndex) || setSortBy(e.target.selectedIndex),
    style: {
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297"
  }, __jsx("option", {
    key: "0",
    className: "jsx-87696297"
  }, "Relevance"), __jsx("option", {
    key: "1",
    className: "jsx-87696297"
  }, "Date")))), __jsx("ul", {
    style: {
      position: 'relative',
      maxHeight: 'calc(100% - 2.25rem - 1.13px - 1.5rem - 2.25rem)',
      overflowY: 'auto'
    },
    className: "jsx-87696297"
  }, searchResults[sortBy].slice((modalPage - 1) * 10, modalPage * 10).map((result, i) => __jsx("li", {
    key: i,
    style: {
      marginBottom: '.5rem'
    },
    className: "jsx-87696297"
  }, __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    },
    className: "jsx-87696297"
  }, __jsx(link_default.a, {
    href: '/articles/' + result.id
  }, __jsx("a", {
    style: {
      color: '#0000CC',
      fontSize: '1rem',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297"
  }, result.title))), __jsx("div", {
    style: {
      color: '#008000',
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif',
      margin: '.2rem 0'
    },
    className: "jsx-87696297"
  }, `http://localhost:3000/articles/${result.id}`), __jsx("div", {
    style: {
      display: 'flex'
    },
    className: "jsx-87696297"
  }, __jsx(link_default.a, {
    href: `http://localhost:3000/articles/${result.id}`
  }, __jsx("a", {
    className: "jsx-87696297"
  }, __jsx("picture", {
    className: "jsx-87696297"
  }, __jsx("source", {
    srcSet: result.mobile_thumbnail,
    className: "jsx-87696297"
  }), __jsx("source", {
    srcSet: '/img/nexus-fallback.webp',
    type: "image/webp",
    className: "jsx-87696297"
  }), __jsx("img", {
    alt: "thumbnail",
    className: "jsx-87696297"
  })))), __jsx("span", {
    style: {
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif',
      margin: '0 .5rem'
    },
    className: "jsx-87696297"
  }, __jsx("span", {
    style: {
      fontSize: '13px',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297"
  }, Object(Functions["a" /* convertDate */])(result.publish_date), " ... "), result.description && result.description.slice(0, 300) + (result.description.length > 300 ? '...' : '')))))), __jsx("ul", {
    style: {
      marginTop: '1.25rem',
      display: 'flex',
      width: '100%',
      overflowX: 'auto',
      fontFamily: 'Arial, sans-serif'
    },
    className: "jsx-87696297"
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
    className: "jsx-87696297"
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
      className: "jsx-87696297"
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
    className: "jsx-87696297"
  }, "..."))), __jsx("div", {
    className: "jsx-87696297" + " " + "modal-open"
  }), __jsx(style_default.a, {
    id: "87696297"
  }, [".nav.jsx-87696297{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;text-transform:uppercase;}", ".nav.jsx-87696297 li.jsx-87696297{position:relative;}", ".nav.jsx-87696297 li.jsx-87696297:hover ul.jsx-87696297{max-height:1000px;}", "a.jsx-87696297{color:black;font-family:Lato,sans-serif;}", "a.jsx-87696297:hover{color:var(--link-hover);}", ".nav-subcategories.jsx-87696297{padding:1.25rem .6rem .5rem .6rem;font-weight:300;background-color:#fff;opacity:0;pointer-events:none;position:absolute;top:85%;-webkit-transition:opacity 250ms ease-in;transition:opacity 250ms ease-in;font-size:15px;z-index:5;}", ".nav-subcategories.jsx-87696297 li.jsx-87696297{margin-top:7px;cursor:pointer;}", ".nav-subcategories.jsx-87696297 li.jsx-87696297:nth-child(1){margin-top:0;}", ".nav-subcategories.jsx-87696297 li.jsx-87696297:hover{color:var(--link-hover);}", ".subcategory-link.jsx-87696297{color:black;}", ".subcategory-link.jsx-87696297:hover{color:var(--link-hover);}", ".search.jsx-87696297{cursor:pointer;}", ".search-results.jsx-87696297{font-family:Arial,sans-serif;font-size:.8rem;width:75vw;height:calc(100vh - 3rem - 7rem - 1.75rem);position:fixed;top:3rem;left:12.5vw;background-color:#fff;padding:2.25rem 2.25rem .5rem 2.25rem;z-Index:10;opacity:0;pointer-events:none;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in;box-shadow:0 0 6px 3px #ccc;}", ".search-results.jsx-87696297 img.jsx-87696297{border:1px solid #e2e2e2;width:65px;height:65px;object-fit:fill;cursor:pointer;}", ".search-results-button.jsx-87696297{background-color:coral;cursor:pointer;border:1px solid #aaa;color:white;font-size:.75rem;padding:0 .25rem;position:absolute;top:5px;right:5px;}", ".search-results.jsx-87696297 select.jsx-87696297{background-color:whiteSmoke;background-image:linear-gradient(top,whiteSmoke,#f1f1f1);border:1px solid rgba(0,0,0,0.1);border-radius:2px;box-shadow:0 1px 1px rgba(0,0,0,0.1);color:#444;cursor:default;font-size:11px;font-weight:bold;height:27px;line-height:27px;max-width:90%;min-width:54px;outline:0;padding:0 28px 0 6px;position:relative;text-align:center;}", ".search-results.jsx-87696297 option.jsx-87696297{color:#777;font-family:Arial,sans-serif;}", ".modal-open.jsx-87696297{position:fixed;background-color:#fff;top:0;left:0;width:100vw;height:100vh;opacity:0;pointer-events:none;z-index:9;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in;}", ".search-results-header.jsx-87696297{position:relative;margin-bottom:1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:#676767;fontSize:13px;padding:4px;}", ".search-results-header.jsx-87696297::after{content:'';background-color:#e8e8e8;width:100%;height:1px;position:absolute;left:0;bottom:-.7rem;}"]));
}

/* harmony default export */ var components_Nav = (Nav);
// CONCATENATED MODULE: ./components/Header.js


var Header_jsx = external_react_default.a.createElement;



function Header() {
  return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("div", {
    className: "jsx-1075104282" + " " + "header"
  }, Header_jsx("div", {
    className: "jsx-1075104282" + " " + "full-logo"
  }, Header_jsx(link_default.a, {
    href: "/"
  }, Header_jsx("a", {
    className: "jsx-1075104282"
  }, "MOCK ", Header_jsx("img", {
    src: "/img/nexus-logo.png",
    alt: "logo",
    className: "jsx-1075104282" + " " + "logo"
  }), " NEXUS "))), Header_jsx("div", {
    className: "jsx-1075104282" + " " + "under-logo"
  }, Header_jsx("span", {
    className: "jsx-1075104282"
  }, new Date().toLocaleDateString('default', {
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day: 'numeric'
  })), Header_jsx("div", {
    className: "jsx-1075104282"
  }, "UNIVERSITY OF CALIFORNIA, SANTA BARBARA"), Header_jsx("span", {
    className: "jsx-1075104282"
  }, Header_jsx(link_default.a, {
    href: "https://facebook.com/dailynexus"
  }, Header_jsx("a", {
    className: "jsx-1075104282"
  }, Header_jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-facebook-square"
  }))), Header_jsx(link_default.a, {
    href: "https://twitter.com/dailynexus"
  }, Header_jsx("a", {
    className: "jsx-1075104282"
  }, Header_jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-twitter"
  }))), Header_jsx(link_default.a, {
    href: "https://instagram.com/dailynexus"
  }, Header_jsx("a", {
    className: "jsx-1075104282"
  }, Header_jsx("i", {
    className: "jsx-1075104282" + " " + "fab fa-instagram"
  }))))), Header_jsx(components_Nav, null)), Header_jsx(style_default.a, {
    id: "1075104282"
  }, ["*.jsx-1075104282{font-family:Lato,sans-serif;}", ".logo.jsx-1075104282{width:5.5rem;height:6.5rem;-webkit-transform:translateY(1.55rem);-ms-transform:translateY(1.55rem);transform:translateY(1.55rem);}", ".full-logo.jsx-1075104282{text-align:center;}", ".full-logo.jsx-1075104282 a.jsx-1075104282{font-size:4.5rem;font-family:Times New Roman;color:black;}", ".under-logo.jsx-1075104282{position:relative;text-align:center;font-size:.825rem;padding:4px;}", ".under-logo.jsx-1075104282 span.jsx-1075104282{position:absolute;}", ".under-logo.jsx-1075104282 span.jsx-1075104282:nth-child(1){left:5px;}", ".under-logo.jsx-1075104282 span.jsx-1075104282:nth-child(3){right:8px;top:4px;}", ".under-logo.jsx-1075104282::before,.under-logo.jsx-1075104282::after{width:100%;content:'';position:absolute;left:0;}", ".under-logo.jsx-1075104282::before{background-color:var(--theme-blue);height:1px;top:0;}", ".under-logo.jsx-1075104282::after{height:3px;bottom:0;background-color:var(--theme-gold);}", "i.jsx-1075104282{font-size:1rem;margin-left:.5rem;color:gray;-webkit-transition:color 200ms ease-in;transition:color 200ms ease-in;cursor:pointer;}", "i.jsx-1075104282:hover{color:black;}"]));
}

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Sidebar.js


var Sidebar_jsx = external_react_default.a.createElement;

const newsletterURL = 'https://dailynexus.us19.list-manage.com/subscribe?u=c7afb6c46dbbdcd7bb0bd8919&id=7220084bdc';
const facebookURL = 'https://www.facebook.com/dailynexus/';
const archivesURL = 'https://dailynexus.com/archives/';
const twitterURLS = {
  main: 'https://twitter.com/dailynexus?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2Fcategory%2Fartsweek%2F',
  embed: 'https://publish.twitter.com/?url=https%3A%2F%2Ftwitter.com%2Fdailynexus&ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Eprofile%3Adailynexus&ref_url=https%3A%2F%2Fdailynexus.com%2Fcategory%2Fartsweek%2F#'
};

function Sidebar() {
  return Sidebar_jsx(external_react_default.a.Fragment, null, Sidebar_jsx("ul", {
    className: "jsx-2162402146" + " " + "sidebar"
  }, Sidebar_jsx("li", {
    key: "0",
    className: "jsx-2162402146"
  }, Sidebar_jsx("div", {
    style: {
      color: 'white',
      backgroundColor: '#444',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '14rem'
    },
    className: "jsx-2162402146"
  }, "Ad Space")), Sidebar_jsx("li", {
    key: "1",
    style: {
      border: '2px solid #555',
      margin: '.5rem 0 .75rem 0'
    },
    className: "jsx-2162402146"
  }, Sidebar_jsx("img", {
    src: "/img/covid-chart.png",
    alt: "covid chart",
    className: "jsx-2162402146"
  })), Sidebar_jsx("li", {
    key: "2",
    className: "jsx-2162402146"
  }, Sidebar_jsx("div", {
    className: "jsx-2162402146" + " " + "comic-of-the-week-title"
  }, "Comic of the Week"), Sidebar_jsx("hr", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("br", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("div", {
    className: "jsx-2162402146" + " " + "comic-of-the-week"
  }, Sidebar_jsx("img", {
    src: "/img/comic-of-the-week.webp",
    alt: "comic",
    className: "jsx-2162402146"
  }))), Sidebar_jsx("li", {
    key: "3",
    className: "jsx-2162402146"
  }, " ", Sidebar_jsx(link_default.a, {
    href: newsletterURL
  }, Sidebar_jsx("button", {
    className: "jsx-2162402146" + " " + "newsletter-button"
  }, "Subscribe to Our Newsletter")), " "), Sidebar_jsx("li", {
    key: "4",
    className: "jsx-2162402146"
  }, Sidebar_jsx("div", {
    style: {
      height: '34.5rem',
      overflowY: 'scroll'
    },
    className: "jsx-2162402146"
  }, Sidebar_jsx("a", {
    href: "https://twitter.com/dailynexus?ref_src=twsrc%5Etfw",
    className: "jsx-2162402146" + " " + "twitter-timeline"
  }, "Tweets by dailynexus"), Sidebar_jsx("script", {
    async: true,
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8",
    className: "jsx-2162402146"
  })), Sidebar_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '.8rem',
      margin: '1rem 0'
    },
    className: "jsx-2162402146"
  }, Sidebar_jsx(link_default.a, {
    href: twitterURLS.embed
  }, Sidebar_jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146"
  }, "Embed")), Sidebar_jsx(link_default.a, {
    href: twitterURLS.main
  }, Sidebar_jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146"
  }, "View on Twitter")))), Sidebar_jsx("li", {
    key: "5",
    className: "jsx-2162402146"
  }, " ", Sidebar_jsx(link_default.a, {
    href: facebookURL
  }, Sidebar_jsx("button", {
    className: "jsx-2162402146" + " " + "facebook-button"
  }, Sidebar_jsx("i", {
    className: "jsx-2162402146" + " " + "fab fa-facebook-f"
  }), " Like us on Facebook")), " "), Sidebar_jsx("li", {
    key: "6",
    className: "jsx-2162402146"
  }, " ", Sidebar_jsx(link_default.a, {
    href: archivesURL
  }, Sidebar_jsx("a", {
    className: "jsx-2162402146"
  }, Sidebar_jsx("img", {
    src: "/img/print-edition.png",
    alt: "archives",
    className: "jsx-2162402146"
  })))), Sidebar_jsx("li", {
    key: "7",
    className: "jsx-2162402146"
  }, Sidebar_jsx("div", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.55rem',
      marginTop: '3rem',
      marginBottom: '.6rem'
    },
    className: "jsx-2162402146"
  }, "WEEKLY HOROSCOPES"), Sidebar_jsx("div", {
    style: {
      textAlign: 'center',
      color: '#333',
      fontSize: '1.35rem',
      fontWeight: 'bold'
    },
    className: "jsx-2162402146"
  }, "by ", Sidebar_jsx(link_default.a, {
    href: "https://twitter.com/dailynexopinion"
  }, Sidebar_jsx("a", {
    style: {
      color: 'var(--link-hover)'
    },
    className: "jsx-2162402146"
  }, "@dailynexopinion"))), Sidebar_jsx("br", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("hr", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("br", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("div", {
    style: {
      color: '#333',
      textAlign: 'center',
      fontSize: '1.35rem',
      fontWeight: 'bold'
    },
    className: "jsx-2162402146"
  }, "The Signs as Summer Desserts"), Sidebar_jsx("br", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("hr", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("br", {
    className: "jsx-2162402146"
  }), Sidebar_jsx("ul", {
    className: "jsx-2162402146"
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
    return Sidebar_jsx("li", {
      key: i,
      style: {
        display: 'flex',
        margin: '1rem 0'
      },
      className: "jsx-2162402146"
    }, Sidebar_jsx("div", {
      className: "jsx-2162402146"
    }, Sidebar_jsx("img", {
      style: {
        width: '4rem',
        height: '4rem',
        marginRight: '.5rem'
      },
      src: `/img/horoscopes/${name.toLowerCase()}.svg`,
      alt: "sign",
      className: "jsx-2162402146"
    })), Sidebar_jsx("div", {
      className: "jsx-2162402146"
    }, Sidebar_jsx("div", {
      style: {
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      className: "jsx-2162402146"
    }, name), Sidebar_jsx("div", {
      style: {
        fontSize: '.75rem',
        color: '#4b4b4b',
        fontWeight: '600',
        marginBottom: '.5rem',
        marginTop: '.2rem'
      },
      className: "jsx-2162402146"
    }, dates), Sidebar_jsx("div", {
      style: {
        color: 'var(--link-hover)'
      },
      className: "jsx-2162402146"
    }, horoscope)));
  })))), Sidebar_jsx(style_default.a, {
    id: "2162402146"
  }, [".comic-of-the-week-title.jsx-2162402146{font-weight:bold;font-size:1.5rem;text-align:center;margin-bottom:.5rem;}", ".comic-of-the-week.jsx-2162402146 img.jsx-2162402146{object-fit:cover;width:100%;height:14rem;position:relative;}", ".comic-of-the-week.jsx-2162402146{position:relative;height:14rem;cursor:pointer;}", ".comic-of-the-week.jsx-2162402146::before{position:absolute;top:0;right:0;bottom:0;left:0;content:'College Nostalgia';font-size:1.3rem;color:white;background-color:rgba(0,0,0,.5);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;}", ".newsletter-button.jsx-2162402146{background-color:var(--theme-gold);color:white;width:92.5%;font-size:1.3rem;border-radius:4px;border:none;padding:.75rem;margin:1rem .75rem;text-align:center;cursor:pointer;border:2px solid var(--theme-gold);}", ".newsletter-button.jsx-2162402146:hover{background-color:white;color:black;}", ".facebook-button.jsx-2162402146{background-color:#445aa4;width:95%;font-size:1.3rem;cursor:pointer;margin:1.5rem .5rem 3rem .5rem;box-shadow:none;padding:.6rem;color:white;text-align:center;border-radius:5px;border:2px solid #445aa4;}", ".facebook-button.jsx-2162402146:hover{background-color:white;color:#445aa4;}"]));
}

/* harmony default export */ var components_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__("8lYe");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./layouts/index.js


var layouts_jsx = external_react_default.a.createElement;






function Layout({
  footerData,
  children
}) {
  const {
    0: showBottomAd,
    1: setShowBottomAd
  } = Object(external_react_["useState"])(true);

  function updateBottomAd() {
    document.getElementById('__next').children[2].children[0].style.display = showBottomAd ? 'flex' : 'none';
  }

  function toggleShowBottomAdListener() {
    setShowBottomAd(!showBottomAd);
    window.removeEventListener('scroll', updateBottomAd, false);
    window.addEventListener('scroll', updateBottomAd, false);
  }

  Object(external_react_["useEffect"])(_ => toggleShowBottomAdListener(), []);
  return layouts_jsx(external_react_default.a.Fragment, null, layouts_jsx(head_default.a, null, layouts_jsx("script", {
    src: "https://kit.fontawesome.com/7cab195da1.js",
    crossOrigin: "anonymous",
    className: "jsx-732359191"
  }), layouts_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Lato&display=swap",
    rel: "stylesheet",
    className: "jsx-732359191"
  })), layouts_jsx("div", {
    style: {
      backgroundColor: '#444',
      color: '#fff',
      height: '6rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    className: "jsx-732359191"
  }, layouts_jsx("span", {
    style: {
      border: '2px dotted white',
      width: '45rem',
      height: '5.35rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: 'none'
    },
    className: "jsx-732359191"
  }, layouts_jsx("span", {
    className: "jsx-732359191"
  }, "Ad Space"))), layouts_jsx("div", {
    className: "jsx-732359191" + " " + "main"
  }, layouts_jsx(components_Header, null), layouts_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: "jsx-732359191"
  }, layouts_jsx("div", {
    style: {
      width: 'calc(100% - 18.75rem)'
    },
    className: "jsx-732359191"
  }, children), layouts_jsx("div", {
    style: {
      width: '18.25rem'
    },
    className: "jsx-732359191"
  }, layouts_jsx(components_Sidebar, null))), layouts_jsx(Footer["a" /* default */], {
    footerData: footerData,
    toggleShowBottomAdListener: toggleShowBottomAdListener
  })), layouts_jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    className: "jsx-732359191"
  }, layouts_jsx("div", {
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
    className: "jsx-732359191"
  }, layouts_jsx("span", {
    className: "jsx-732359191"
  }, "Ad Space"), layouts_jsx("button", {
    onClick: e => {
      e.target.parentElement.parentElement.style.display = 'none';
    },
    className: "jsx-732359191" + " " + "bottom-ad-button"
  }, "x"))), layouts_jsx(style_default.a, {
    id: "732359191"
  }, ["*.jsx-732359191{font-family:Lato,sans-serif;}", ".main.jsx-732359191{margin:0 1rem 1rem 1rem;}", ".bottom-ad-button.jsx-732359191{background-color:coral;cursor:pointer;border:1px solid white;color:white;font-size:.75rem;padding:0 .25rem;position:absolute;top:5px;right:5px;}"]));
}

/* harmony default export */ var layouts = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
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

/***/ "cE6r":
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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

var _router = __webpack_require__("nOHt");

var _router2 = __webpack_require__("elyg");
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
    if (false) {}
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
  if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
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

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _searchParamsToUrlQuery = __webpack_require__("cE6r");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

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
    if (false) {}

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

      if (false) {}

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
          if (false) {}

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

      if (false) {}

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
    if (false) {}

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

      if (false) {}

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

    if (false) {}

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

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

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

/***/ "fMim":
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "g/15":
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

var _formatUrl = __webpack_require__("6D7l");
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
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
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

/***/ "hS4m":
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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mRNo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JvUo");
/* harmony import */ var _components_ArticleDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("n1dG");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZDfL");
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0cp2");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




async function getStaticPaths() {
  let categories = await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])("SELECT title, subcategories FROM categories WHERE title <> 'Labyrinth' AND title <> 'Headlines'"),
      paths = categories.reduce((acc, category) => [...acc, ...Object.entries(category.subcategories).map(([key, val]) => new Array(Math.ceil(val.length / 15)).fill(true).map((_, i) => ({
    params: {
      category: Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertToPath */ "c"])(category.title),
      subcategory: Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertToPath */ "c"])(key),
      page: String(i + 1)
    }
  })))], []).reduce((acc, cur) => [...acc, ...cur], []);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params: {
    category,
    subcategory,
    page
  }
}) {
  let [subcategories] = await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])('SELECT subcategories FROM categories WHERE title = $1', [Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertFromPath */ "b"])(category)]),
      articles = await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])(`SELECT * FROM articles WHERE id = ANY($1) ORDER BY publish_date DESC OFFSET ${(Number(page) - 1) * 15} ROWS FETCH NEXT 15 ROWS ONLY`, [subcategories.subcategories[Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertFromPath */ "b"])(subcategory)]]);
  return {
    props: JSON.parse(JSON.stringify({
      heading: Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertFromPath */ "b"])(subcategory),
      articles,
      footerData: {
        page: Number(page),
        route: '/categories/' + category + '/' + subcategory,
        highestPage: Math.ceil(subcategories.subcategories[Object(_Functions__WEBPACK_IMPORTED_MODULE_4__[/* convertFromPath */ "b"])(subcategory)].length / 15)
      }
    }))
  };
}

function Subcategory({
  heading,
  articles,
  footerData
}) {
  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    footerData: footerData
  }, __jsx(_components_ArticleDisplay__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    type: 'subcategory',
    heading: heading,
    articles: articles,
    page: footerData.page
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Subcategory);

/***/ }),

/***/ "n1dG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ArticlePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DcUa");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ArticleDisplay({
  type,
  heading,
  articles
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      marginRight: '2rem',
      marginLeft: '1rem'
    },
    className: "jsx-1335107859" + " " + (type || "")
  }, __jsx("div", {
    style: {
      fontSize: '2.5rem',
      textTransform: 'uppercase',
      marginTop: '.75rem'
    },
    className: "jsx-1335107859" + " " + "category-heading"
  }, heading), __jsx("ul", {
    className: "jsx-1335107859"
  }, articles.map((article, i) => __jsx("li", {
    key: i,
    className: "jsx-1335107859"
  }, " ", __jsx(_ArticlePreview__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    article: article,
    imageLeft: !(i % 2)
  }), " ")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1335107859"
  }, [".category-heading.jsx-1335107859{position:relative;}", ".category-heading.jsx-1335107859::before,.category-heading.jsx-1335107859::after{content:'';width:100%;height:2px;background-color:#ddd;position:absolute;left:0;}", ".category-heading.jsx-1335107859::before{top:-5px;}", ".category-heading.jsx-1335107859::after{bottom:-5px;}"]));
}

/* harmony default export */ __webpack_exports__["a"] = (ArticleDisplay);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "qW5S":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });