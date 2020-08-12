module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dB9g");


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

/***/ "7dLl":
/***/ (function(module, exports) {

module.exports = require("react-dom/test-utils");

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

/***/ "dB9g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/AboutTheAuthor.js


var __jsx = external_react_default.a.createElement;


function AboutTheAuthor({
  author
}) {
  return __jsx("div", {
    className: "jsx-2850996569" + " " + "about-the-author"
  }, __jsx("img", {
    src: author.portrait,
    alt: "author",
    className: "jsx-2850996569"
  }), __jsx("div", {
    className: "jsx-2850996569"
  }, __jsx("div", {
    className: "jsx-2850996569"
  }, __jsx(link_default.a, {
    href: `/authors/${author.id}`
  }, __jsx("a", {
    className: "jsx-2850996569"
  }, author.name))), __jsx("div", {
    className: "jsx-2850996569"
  }, author.biography)), __jsx(style_default.a, {
    id: "2850996569"
  }, [".about-the-author.jsx-2850996569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:2rem 0;}", "img.jsx-2850996569{width:6,5rem;height:6.5rem;margin:0 1.4rem 0 2.5rem;}", ".about-the-author.jsx-2850996569>div.jsx-2850996569{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".about-the-author.jsx-2850996569>div.jsx-2850996569>div.jsx-2850996569:nth-child(1){font-size:1.2rem;margin-bottom:.5rem;}", ".about-the-author.jsx-2850996569>div.jsx-2850996569>div.jsx-2850996569:nth-child(2){font-size:.95rem;}", "a.jsx-2850996569{color:var(--link-hover);}"]));
}

/* harmony default export */ var components_AboutTheAuthor = (AboutTheAuthor);
// EXTERNAL MODULE: ./Functions.js
var Functions = __webpack_require__("0cp2");

// CONCATENATED MODULE: ./components/Related.js


var Related_jsx = external_react_default.a.createElement;



function Related({
  articles
}) {
  return Related_jsx(external_react_default.a.Fragment, null, Related_jsx("div", {
    className: "jsx-2497232516" + " " + "related"
  }, Related_jsx("div", {
    className: "jsx-2497232516"
  }, Related_jsx("span", {
    className: "jsx-2497232516"
  }, "Related")), Related_jsx("ul", {
    className: "jsx-2497232516"
  }, articles.map((article, i) => Related_jsx("li", {
    key: i,
    className: "jsx-2497232516"
  }, Related_jsx(link_default.a, {
    href: `/articles/${article.id}`
  }, Related_jsx("a", {
    className: "jsx-2497232516"
  }, article.title)), Related_jsx("div", {
    className: "jsx-2497232516"
  }, Object(Functions["a" /* convertDate */])(article.publish_date)), Related_jsx("div", {
    className: "jsx-2497232516"
  }, "In \"", article.category, "\""))))), Related_jsx(style_default.a, {
    id: "2497232516"
  }, [".related.jsx-2497232516{margin:3rem 0;}", ".related.jsx-2497232516>div.jsx-2497232516:nth-child(1){margin-bottom:.8rem;}", ".related.jsx-2497232516>div.jsx-2497232516:nth-child(1)>span.jsx-2497232516{position:relative;font-size:.8rem;font-weight:600;}", ".related.jsx-2497232516>div.jsx-2497232516:nth-child(1)>span.jsx-2497232516::before{content:'';background-color:lightgray;height:1px;position:absolute;width:100%;top:-80%;}", "ul.jsx-2497232516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", "li.jsx-2497232516{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:25%;margin-right:1.75rem;}", "li.jsx-2497232516>div.jsx-2497232516{color:gray;font-family:Georgia,serif;margin-bottom:0 .15rem;font-size:.9rem;}", "a.jsx-2497232516{color:var(--link-hover);font-family:Georgia,serif;margin-bottom:.25rem;font-size:.965rem;}", "a.jsx-2497232516:hover{-webkit-text-decoration:underline;text-decoration:underline;}"]));
}

/* harmony default export */ var components_Related = (Related);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");

// EXTERNAL MODULE: external "react-dom/test-utils"
var test_utils_ = __webpack_require__("7dLl");

// CONCATENATED MODULE: ./components/CommentInputs.js


var CommentInputs_jsx = external_react_default.a.createElement;




function CommentInputs({
  following,
  articleID,
  setMessage,
  parent,
  embedded,
  firstComment,
  mainInput
}) {
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(_ => {
    sessionStorage.getItem('email') && setUser({
      name: sessionStorage.getItem('name'),
      email: sessionStorage.getItem('email')
    });
    console.log(user);
  }, []);

  async function postComment(e, setMessage, article_id, parent = null) {
    e.persist();
    e.preventDefault();
    const [content, name, email] = [0, 1, 2].map(i => e.target.children[i].children[1].value);

    if (!content || !name || !email) {
      return setMessage('There is an empty field');
    }

    let response = await fetch('http://localhost:3000/api/post-comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        article_id,
        name,
        email,
        content,
        parent,
        post_date: Date.now()
      })
    });
    let status = await response.json(),
        msg;

    switch (status) {
      case 0:
        setMessage('');
        break;

      case 1:
        msg = 'Invalid email address';
        break;

      case 2:
        msg = 'This email is registered with a different name';
        break;

      case 3:
        msg = 'New user created';
        break;

      default:
        console.log(status);
    }

    msg && setMessage(msg);

    if (!status || status === 3) {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('name', name);
    }

    e.target.reset();
    document.location.reload();
  }

  return CommentInputs_jsx(external_react_default.a.Fragment, null, CommentInputs_jsx("form", {
    style: {
      position: 'relative',
      marginBottom: '2.35rem',
      marginTop: '1rem',
      maxWidth: '55rem'
    },
    onSubmit: e => postComment(e, setMessage, articleID, parent),
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, CommentInputs_jsx("div", {
    style: {
      position: 'relative'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, CommentInputs_jsx("img", {
    src: "https://secure.gravatar.com/avatar/?s=40&d=mm&r=g",
    alt: "user",
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "input-large-img"
  }), CommentInputs_jsx("input", {
    type: "text",
    placeholder: `${firstComment ? 'Start' : 'Join'} the discussion...`,
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  })), CommentInputs_jsx("div", {
    style: {
      position: 'relative',
      display: user ? 'none' : 'block'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, CommentInputs_jsx("i", {
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "fas fa-user input-icon"
  }), CommentInputs_jsx("input", {
    type: "text",
    placeholder: "Name*",
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "input-small"
  })), CommentInputs_jsx("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, CommentInputs_jsx("i", {
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "fas fa-at input-icon"
  }), CommentInputs_jsx("input", {
    type: "text",
    placeholder: "Email*",
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "input-small"
  }), CommentInputs_jsx("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, mainInput && CommentInputs_jsx("span", {
    tabIndex: 0,
    onFocus: e => {
      e.target.style.border = '1px solid black';
    },
    onBlur: e => {
      e.target.style.border = 'none';
    },
    onKeyDown: e => e.keyCode === 13 && test_utils_["Simulate"].click(e.target),
    onClick: async e => {
      e.persist();
      e.preventDefault();
      const form = e.currentTarget.parentElement.parentElement.parentElement;
      let email = user ? user.email : e.currentTarget.parentElement.parentElement.children[1].value,
          name = user ? user.name : e.currentTarget.parentElement.parentElement.parentElement.children[1].children[1].value;

      if (email && name) {
        let response = await fetch('http://localhost:3000/api/follow-article', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            articleID,
            following
          })
        }),
            status = await response.json(),
            msg;
        console.log(status);

        switch (status) {
          default:
            console.log(status);
            msg = 'Error Following Article';
            break;

          case 0:
            setMessage('');
            break;

          case 1:
            msg = 'Invalid email address';
            break;

          case 2:
            msg = 'This email is registered with a different name';
            break;

          case 3:
            msg = 'New user created';
        }

        msg && setMessage(msg);

        if (!status || status === 3) {
          if (!sessionStorage.getItem('email')) {
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('name', name);
          }

          alert(`Imagine your email being ${following ? 'unsubscribed from' : 'subscribed to'} this article\'s comment activity`);
          form.reset();
          document.location.reload();
        }
      } else alert('Enter your name and email in the boxes to the left to follow this article');
    },
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]])
  }, CommentInputs_jsx("i", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      width: '2rem',
      height: '2rem',
      color: '#999',
      marginRight: '.85rem',
      border: '1px solid #ddd',
      cursor: 'pointer'
    },
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + `fas ${following ? "fa-bell-slash" : "fa-bell"}`
  })), CommentInputs_jsx("button", {
    className: style_default.a.dynamic([["2975795631", [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']]]) + " " + "post-comment-button"
  }, "Post Comment"))), CommentInputs_jsx(style_default.a, {
    id: "2975795631",
    dynamic: [embedded ? '1rem' : '1.15rem', user ? 'visibility: hidden;' : '']
  }, [".post-comment-button.__jsx-style-dynamic-selector{background-color:#555;color:white;font-size:.925rem;padding:.5rem 1.25rem;cursor:pointer;border:none;}", ".post-comment-button.__jsx-style-dynamic-selector:hover,.post-comment-button.__jsx-style-dynamic-selector:focus{background-color:#404040;}", `input.__jsx-style-dynamic-selector{padding:1.7rem;padding-left:5rem;border:1px solid #ddd;color:#888;font-family:monospace;width:100%;margin-bottom:.6rem;font-size:${embedded ? '1rem' : '1.15rem'};}`, ".input-large-img.__jsx-style-dynamic-selector{position:absolute;top:1rem;left:1rem;box-shadow:0 0 4px 2px #d8d8d8;}", ".input-small.__jsx-style-dynamic-selector{font-size:.9rem;padding:.5rem 1.9rem;width:50%;font-family:Lato;}", `.input-small.__jsx-style-dynamic-selector:nth-child(2),.input-icon.__jsx-style-dynamic-selector{${user ? 'visibility: hidden;' : ''};}`, ".input-icon.__jsx-style-dynamic-selector{color:#aaa;position:absolute;top:.65rem;left:.5rem;}"])));
}

/* harmony default export */ var components_CommentInputs = (CommentInputs);
// CONCATENATED MODULE: ./components/Comment.js


var Comment_jsx = external_react_default.a.createElement;





function Comment({
  comment: {
    picture,
    name,
    email,
    content,
    post_date,
    id,
    parent,
    replies
  },
  articleID,
  followers,
  depth = 0
}) {
  const {
    0: replyMessage,
    1: setReplyMessage
  } = Object(external_react_["useState"])(null);
  const {
    0: following,
    1: setFollowing
  } = Object(external_react_["useState"])(false);
  const {
    0: currentUserEmail,
    1: setCurrentUserEmail
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(_ => {
    setCurrentUserEmail(sessionStorage.getItem('email'));
    setFollowing(followers.includes(currentUserEmail));
  }, []);
  return Comment_jsx(external_react_default.a.Fragment, null, Comment_jsx("div", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "comment"
  }, Comment_jsx("span", {
    style: {
      width: '6rem',
      maxWidth: '6rem',
      fontSize: '.775rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginRight: '1rem'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx("img", {
    src: picture || 'https://secure.gravatar.com/avatar/004ce453a2b46792c3e04146555a35b3?s=64&d=mm&r=g',
    alt: "user",
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }), Comment_jsx("div", {
    style: {
      color: '#00B38F',
      fontSize: '13px',
      maxWidth: '5rem',
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, name)), Comment_jsx("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx("div", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "row"
  }, Comment_jsx("span", {
    style: {
      fontSize: parent ? '14px' : '19px'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, name), Comment_jsx("span", {
    onClick: _ => Object(Functions["d" /* copyToClipboard */])(content) || alert('Comment copied to clipboard'),
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx("i", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "fas fa-link"
  }))), Comment_jsx("div", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, content), Comment_jsx("div", {
    style: {
      justifySelf: 'flex-end'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "row"
  }, Comment_jsx("button", {
    onClick: e => {
      let {
        style
      } = e.currentTarget.parentElement.parentElement.children[4];
      style.maxHeight = style.maxHeight === '100%' ? 0 : '100%';
      style.transform = style.transform === 'scaleY(1)' ? 'scaleY(0)' : 'scaleY(1)';
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, !parent ? Comment_jsx("i", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "far fa-comments"
  }) : '', " Reply"), Comment_jsx("span", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx("span", {
    style: {
      color: '#999',
      fontSize: '.75rem'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, email === currentUserEmail && Comment_jsx("button", {
    onClick: e => {
      fetch('http://localhost:3000/api/delete-comment', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          article_id: articleID,
          email: currentUserEmail
        })
      });
      document.location.reload();
    },
    style: {
      color: 'white',
      backgroundColor: '#ff4848',
      border: 'none',
      marginRight: '.4rem'
    },
    onMouseOver: e => {
      e.target.style.backgroundColor = '#ff2d2d';
    },
    onMouseOut: e => {
      e.target.style.backgroundColor = '#ff4848';
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, "Delete"), Comment_jsx("i", {
    style: {
      marginRight: '.325rem'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "far fa-clock"
  }), Object(Functions["a" /* convertDate */])(post_date), replies.length ? Comment_jsx("i", {
    style: {
      color: '#00B37F',
      marginLeft: '.325rem',
      cursor: 'pointer',
      transition: 'transform 300ms ease-out'
    },
    onClick: e => {
      let {
        style
      } = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1];
      style.maxHeight = style.maxHeight && style.maxHeight === '0px' ? '100%' : 0;
      style.transform = style.transform === 'scaleY(0)' ? 'scaleY(1)' : 'scaleY(0)';
      e.currentTarget.style.transform = e.currentTarget.style.transform === 'rotateX(180deg)' ? 'rotateX(0)' : 'rotateX(180deg)';
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "fas fa-chevron-up"
  }) : ''))), Comment_jsx("strong", {
    style: {
      color: replyMessage === 'New user created' ? 'green' : 'red'
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, replyMessage), Comment_jsx("div", {
    style: {
      transform: 'scaleY(0)',
      transformOrigin: 'top',
      transition: 'transform 150ms ease-out, max-height 150ms ease-out',
      maxHeight: 0
    },
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx(components_CommentInputs, {
    following: following,
    setMessage: setReplyMessage,
    articleID: articleID,
    parent: id,
    embedded: true
  })))), Comment_jsx("ul", {
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]]) + " " + "replies"
  }, replies.map((reply, i) => Comment_jsx("li", {
    key: reply.id,
    className: style_default.a.dynamic([["878703655", [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']]])
  }, Comment_jsx(Comment, {
    comment: reply,
    followers: followers,
    articleID: articleID,
    depth: depth + 1
  })))), Comment_jsx(style_default.a, {
    id: "878703655",
    dynamic: [!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : '', parent ? '3rem' : '5rem', parent ? '3rem' : '5rem', parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : '']
  }, [`.comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;${!depth ? 'margin-bottom: .85rem' : depth === 1 ? 'width: 95%; margin-left: 5%' : depth === 2 ? 'width: 90%; margin-left: 10%' : depth === 3 ? 'width: 85%; margin-left: 15%' : depth === 4 ? 'width: 80%; margin-left: 20%' : depth === 5 ? 'width: 75%; margin-left: 15%' : depth === 6 ? 'width: 70%; margin-left: 30%' : ''};}`, `img.__jsx-style-dynamic-selector{object-fit:fill;height:${parent ? '3rem' : '5rem'};width:${parent ? '3rem' : '5rem'};box-shadow:0 0 2px 2px #d8d8d8;margin-bottom:.5rem;}`, "i.__jsx-style-dynamic-selector{color:#999;}", ".row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", `.comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{${parent ? 'background-color: #f3f3f3; margin-bottom: .75rem;' : ''} padding:.75rem;font-size:.85rem;width:100%;}`, ".comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(1) span.__jsx-style-dynamic-selector{color:#00B38F;font-size:1.1rem;}", ".comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(2){margin-top:2rem;margin-bottom:1rem;}", "button.__jsx-style-dynamic-selector{margin-left:.75rem;color:#00B38F;border:1px solid #00B38F;padding:.3rem .55rem;font-size:.75rem;cursor:pointer;}", "button.__jsx-style-dynamic-selector i.__jsx-style-dynamic-selector{color:#00B38F;margin-right:.175rem;}", "button.__jsx-style-dynamic-selector:hover,button.__jsx-style-dynamic-selector:hover i.__jsx-style-dynamic-selector{color:white;background-color:#00B38F;}", ".comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(1)>span.__jsx-style-dynamic-selector:nth-child(2){display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:1.5rem;height:1.5rem;cursor:pointer;font-size:.9rem;}", ".comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(1)>span.__jsx-style-dynamic-selector:nth-child(2):hover,.comment.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector:nth-child(1)>span.__jsx-style-dynamic-selector:nth-child(2):hover i.__jsx-style-dynamic-selector{background-color:#00B38F;color:white;}", ".post-comment-button.__jsx-style-dynamic-selector{background-color:#555;color:white;font-size:.925rem;padding:.5rem 1.25rem;cursor:pointer;border:none;}", ".post-comment-button.__jsx-style-dynamic-selector:hover,.post-comment-button.__jsx-style-dynamic-selector:focus{background-color:#404040;}", ".replies.__jsx-style-dynamic-selector{display:block;-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top;-webkit-transition:max-height 400ms ease-in-out,-webkit-transform 400ms ease-in-out;-webkit-transition:max-height 400ms ease-in-out,transform 400ms ease-in-out;transition:max-height 400ms ease-in-out,transform 400ms ease-in-out;}", ".replies.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{margin-bottom:.4rem;}"]));
}

/* harmony default export */ var components_Comment = (Comment);
// CONCATENATED MODULE: ./components/CommentSection.js


var CommentSection_jsx = external_react_default.a.createElement;





function CommentSection({
  comments,
  articleID,
  followers
}) {
  const {
    0: commentMessage,
    1: setCommentMessage
  } = Object(external_react_["useState"])(null);
  const {
    0: following,
    1: setFollowing
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(_ => {
    console.log(sessionStorage.getItem('email'));
    setFollowing(followers.includes(sessionStorage.getItem('email')));
    console.log(following);
  }, []);
  return CommentSection_jsx(external_react_default.a.Fragment, null, CommentSection_jsx("div", {
    className: "jsx-1870775238" + " " + "comment-section"
  }, CommentSection_jsx("div", {
    className: "jsx-1870775238"
  }, CommentSection_jsx("span", {
    style: {
      position: 'relative'
    },
    className: "jsx-1870775238"
  }, comments.length, CommentSection_jsx("span", {
    style: {
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '8px 0 1px 12px',
      borderColor: '#666666 transparent transparent transparent',
      position: 'absolute',
      right: 0,
      bottom: '-8px'
    },
    className: "jsx-1870775238"
  })), CommentSection_jsx("span", {
    className: "jsx-1870775238"
  }, "Leave a Reply")), CommentSection_jsx("strong", {
    style: {
      color: commentMessage === 'New user created' ? 'green' : 'red',
      fontSize: '1.15rem'
    },
    className: "jsx-1870775238"
  }, commentMessage), CommentSection_jsx(components_CommentInputs, {
    setMessage: setCommentMessage,
    articleID: articleID,
    following: following,
    firstComment: comments.length === 0,
    mainInput: true
  }), CommentSection_jsx("div", {
    style: {
      display: 'flex',
      marginTop: '3rem',
      justifyContent: 'space-between',
      maxWidth: '55rem'
    },
    className: "jsx-1870775238"
  }, CommentSection_jsx("ul", {
    className: "jsx-1870775238" + " " + "icons"
  }, CommentSection_jsx("li", {
    key: "0",
    style: {
      marginBottom: '.15rem',
      marginRight: 0
    },
    className: "jsx-1870775238"
  }, CommentSection_jsx("i", {
    className: "jsx-1870775238" + " " + "fas fa-align-left"
  }), CommentSection_jsx("span", {
    style: {
      marginLeft: '.5rem',
      marginRight: '.2rem',
      fontSize: '1rem'
    },
    className: "jsx-1870775238"
  }, comments.length)), CommentSection_jsx("li", {
    key: "1",
    className: "jsx-1870775238"
  }, CommentSection_jsx("i", {
    className: "jsx-1870775238" + " " + "far fa-comments"
  }), CommentSection_jsx("span", {
    style: {
      marginBottom: '.15rem',
      marginLeft: '.5rem',
      fontSize: '1rem'
    },
    className: "jsx-1870775238"
  }, (_ => {
    let commentCount = 0;

    let count = level => {
      level.forEach(({
        replies
      }) => commentCount++ < 0 || replies.length && count(replies));
    };

    comments.forEach(({
      replies
    }) => count(replies));
    return commentCount;
  })())), CommentSection_jsx("li", {
    style: {
      marginLeft: '.2rem',
      marginBottom: '.15rem'
    },
    key: "2",
    className: "jsx-1870775238"
  }, CommentSection_jsx("i", {
    className: "jsx-1870775238" + " " + "fas fa-rss"
  }), CommentSection_jsx("span", {
    style: {
      marginLeft: '.5rem',
      fontSize: '1rem'
    },
    className: "jsx-1870775238"
  }, followers.length)), CommentSection_jsx("li", {
    key: "3",
    style: {
      marginLeft: '.65rem'
    },
    className: "jsx-1870775238"
  }, CommentSection_jsx("i", {
    style: {
      cursor: 'pointer'
    },
    onClick: _ => {
      window.scrollTo(window.scrollX, window.scrollY * 1.2);
    },
    className: "jsx-1870775238" + " " + "fas fa-bolt"
  })), CommentSection_jsx("li", {
    key: "4",
    style: {
      marginLeft: '.65rem'
    },
    className: "jsx-1870775238"
  }, CommentSection_jsx("i", {
    style: {
      cursor: 'pointer'
    },
    onClick: _ => {
      window.scrollTo(window.scrollX, window.scrollY * 1.2);
    },
    className: "jsx-1870775238" + " " + "fab fa-hotjar"
  }))), CommentSection_jsx("span", {
    className: "jsx-1870775238" + " " + "comment-authors"
  }, CommentSection_jsx("i", {
    className: "jsx-1870775238" + " " + "fas fa-user-circle"
  }), CommentSection_jsx("span", {
    style: {
      color: '#666'
    },
    className: "jsx-1870775238"
  }, (_ => {
    let checked = [];

    let count = level => {
      level.forEach(({
        email,
        replies
      }) => checked.push(email) && count(replies));
    };

    count(comments);
    return new Set(checked).size;
  })()))), CommentSection_jsx("ul", {
    className: "jsx-1870775238" + " " + "comments"
  }, comments.map(comment => CommentSection_jsx("li", {
    key: comment.id,
    className: "jsx-1870775238"
  }, CommentSection_jsx(components_Comment, {
    comment: comment,
    followers: followers,
    articleID: articleID
  }))))), CommentSection_jsx(style_default.a, {
    id: "1870775238"
  }, [".comment-section.jsx-1870775238>div.jsx-1870775238:nth-child(1){position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:4rem;}", ".comment-section.jsx-1870775238>div.jsx-1870775238:nth-child(1)::after{position:absolute;content:'';background-color:lightgray;width:100%;bottom:-1.25rem;height:1px;left:0;}", ".comment-section.jsx-1870775238>div.jsx-1870775238:nth-child(1)>span.jsx-1870775238{margin-right:.9rem;font-size:1.3rem;}", ".comment-section.jsx-1870775238>div.jsx-1870775238:nth-child(1)>span.jsx-1870775238:nth-child(1){background-color:#666;padding:.325rem 1rem;font-size:1rem;color:white;}", "li.jsx-1870775238{margin:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".comment-section.jsx-1870775238>div.jsx-1870775238:nth-child(2)::after{content:'';background-color:lightgray;width:100%;height:1px;position:absolute;bottom:-.95rem;}", ".icons.jsx-1870775238{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;width:9.5rem;}", ".icons.jsx-1870775238 li.jsx-1870775238{margin:0 .75rem;color:#666;font-size:1.05rem;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(1) i.jsx-1870775238{-webkit-transform:rotateZ(3.15rad);-ms-transform:rotateZ(3.15rad);transform:rotateZ(3.15rad);}", ".icons.jsx-1870775238 li.jsx-1870775238::before{border-radius:8px;background-color:#555;text-align:center;font-size:.75rem;padding:.65rem 0;width:14rem;left:2%;top:-160%;color:white;position:absolute;display:none;}", ".icons.jsx-1870775238 li.jsx-1870775238:hover.jsx-1870775238::before{display:block;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(4) i.jsx-1870775238{color:#ffba20;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(4) i.jsx-1870775238:hover{color:#ffa600;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(5) i.jsx-1870775238{color:#ff785b;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(5) i.jsx-1870775238:hover{color:#fc5844;}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(1)::before{content:'Comment threads';}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(2)::before{content:'Thread replies';}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(3)::before{content:'Followers';}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(4)::before{content:'Most reacted comment';}", ".icons.jsx-1870775238 li.jsx-1870775238:nth-child(5)::before{content:'Hottest comment thread';}", ".fa-user-circle.jsx-1870775238{color:#999;font-size:1.75rem;margin-right:.6rem;}", ".comment-authors.jsx-1870775238{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;}", ".comment-authors.jsx-1870775238::before{border-radius:8px;background-color:#555;text-align:center;font-size:.75rem;padding:.65rem 0;width:14rem;left:-10.8rem;top:-160%;color:white;position:absolute;display:none;content:'Comment authors';}", ".comment-authors.jsx-1870775238:hover.jsx-1870775238::before{display:block;}", ".comments.jsx-1870775238{position:relative;margin-top:3rem;}", ".comments.jsx-1870775238::before{background-color:#f7f7f7;height:1.25rem;width:100%;content:'';position:absolute;top:-2rem;}", ".comments.jsx-1870775238 li.jsx-1870775238{display:block;margin-bottom:1.25rem;}"]));
}

/* harmony default export */ var components_CommentSection = (CommentSection);
// EXTERNAL MODULE: ./db.js
var db = __webpack_require__("JvUo");

// EXTERNAL MODULE: ./layouts/index.js + 3 modules
var layouts = __webpack_require__("ZDfL");

// CONCATENATED MODULE: ./pages/articles/[id].js


var _id_jsx = external_react_default.a.createElement;









function Article({
  article,
  author,
  related
}) {
  Object(external_react_["useEffect"])(_ => {
    let contentDiv = document.getElementsByClassName('single-post-content')[0];
    [...contentDiv.getElementsByTagName('p'), ...contentDiv.getElementsByTagName('span')].forEach(p => {
      p.style.margin = '1rem 0';
      p.style.fontFamily = 'Times New Roman, Georgia';
      p.style.fontSize = '1.225rem';
      p.style.lineHeight = '150%';
    });
    [document.getElementById('jp-relatedposts'), document.getElementsByClassName('saboxplugin-wrap')[0], document.getElementsByClassName('h5ab-print-button-container')[0]].forEach(el => {
      if (el) el.style.display = 'none';
    });
    document.getElementsByClassName('single-post-content')[0].style.fontFamily = 'Times New Roman, Georgia';
    [...document.getElementsByClassName('gallery-row')].forEach(gallery => {
      gallery.style.display = 'grid';
      gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';
    });
    [...document.getElementsByClassName('tiled-gallery-caption')].forEach(caption => {
      caption.style.backgroundColor = 'rgb(230, 230, 230, .95)';
      caption.style.fontSize = '.75rem';
      caption.style.width = '100%';
      caption.style.padding = '.5rem';
      caption.style.position = 'absolute';
      caption.style.bottom = `3px`;
    });
    [...document.getElementsByClassName('tiled-gallery-item')].forEach(item => {
      item.style.position = 'relative';
      item.children[1].style.transform = 'scaleY(0)';
      item.children[1].style.transition = 'transform 190ms ease-in-out';
      item.children[1].style.transformOrigin = 'bottom';
      item.addEventListener('mouseover', e => {
        e.currentTarget.children[1].style.transform = 'scaleY(1)';
      });
      item.addEventListener('mouseout', e => {
        e.currentTarget.children[1].style.transform = 'scaleY(0)';
      });
    });
    [...document.getElementsByClassName('sd-content')[0].children].forEach(ul => {
      ul.style.display = 'flex';
      ul.style.justifyContent = 'space-between';
      ul.style.width = '10rem';
      ul.style.marginTop = '.5rem';
    });
    [...document.getElementsByClassName('share-icon')].forEach(icon => {
      let [site] = [...icon.classList].filter(className => className.startsWith('share-') && className.slice(className.length - 5, className.length) !== '-icon'),
          el = document.createElement('i'),
          bgColor;
      site = site.split('-')[1];
      el.classList.add('fa');
      el.classList.add(`fa-${site}`);
      el.style.color = 'white';
      el.style.borderRadius = '50%';
      el.style.width = el.style.height = '2rem';
      el.style.display = 'flex';
      el.style.justifyContent = el.style.alignItems = 'center';
      el.style.cursor = 'pointer';

      switch (site) {
        default:
          break;

        case 'facebook':
          bgColor = 'rgba(24, 119, 242, 1)';
          break;

        case 'twitter':
          bgColor = 'rgba(0, 172, 238, 1)';
          break;

        case 'tumblr':
          bgColor = 'rgba(44, 71, 98, 1)';
          break;

        case 'reddit':
          bgColor = 'rgba(255, 0, 0, 1)';
          break;
      }

      el.style.backgroundColor = bgColor;
      el.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = bgColor.slice(0, bgColor.length - 2) + '.75)';
      });
      el.addEventListener('mouseout', e => {
        e.target.style.backgroundColor = bgColor;
      });
      el.addEventListener('click', _ => alert(`Imagine ${site[0].toUpperCase() + site.slice(1)} popping up`));
      icon.replaceWith(el);
    });
  }, []);
  return _id_jsx(external_react_default.a.Fragment, null, _id_jsx(layouts["a" /* default */], null, _id_jsx("div", {
    className: "jsx-4054325370" + " " + "article"
  }, _id_jsx("div", {
    className: "jsx-4054325370" + " " + "article-page-subcategory"
  }, article.subcategory), _id_jsx("div", {
    className: "jsx-4054325370" + " " + "article-page-details"
  }, _id_jsx("div", {
    className: "jsx-4054325370" + " " + "article-page-title"
  }, article.title), _id_jsx("div", {
    className: "jsx-4054325370"
  }, (_ => {
    let date = new Date(article.publish_date);
    let at = date.getHours() === 0 ? '' : ` at ${date.getHours()}:${String(date.getMinutes()).length === 1 ? '0' : '' + date.getMinutes()}${date.getHours() < 12 ? date.getHours() + ' am' : 24 - date.getHours() + ' pm'}`;
    return Object(Functions["a" /* convertDate */])(article.publish_date) + at;
  })(), " by ", _id_jsx(link_default.a, {
    href: `/authors/${author.id}`
  }, _id_jsx("a", {
    className: "jsx-4054325370" + " " + "article-page-author-name"
  }, author.name)))), _id_jsx("div", {
    dangerouslySetInnerHTML: {
      __html: article.content
    },
    className: "jsx-4054325370" + " " + "article-page-content"
  }), author.name && (author.biography !== 'Not available' || author.portrait !== 'Not available') && _id_jsx(components_AboutTheAuthor, {
    author: author
  }), _id_jsx(components_Related, {
    articles: related
  }), _id_jsx(components_CommentSection, {
    comments: article.comments.sort(({
      post_date: a
    }, {
      post_date: b
    }) => a - b),
    articleID: article.id,
    followers: article.followers
  }))), _id_jsx(style_default.a, {
    id: "4054325370"
  }, [".article.jsx-4054325370{margin:.15rem 1rem;}", ".article-page-subcategory.jsx-4054325370{position:relative;font-weight:bold;font-size:1.2rem;text-transform:uppercase;}", ".article-page-subcategory.jsx-4054325370::before,.article-page-subcategory.jsx-4054325370::after{content:'';height:2px;width:100%;position:absolute;background-color:#ddd;left:0;}", ".article-page-subcategory.jsx-4054325370::before{top:-5px;}", ".article-page-subcategory.jsx-4054325370::after{bottom:-5px;}", ".article-page-title.jsx-4054325370{font-size:2.5rem;font-weight:600;font-family:Times New Roman;margin-bottom:.65rem;}", ".article-page-author-name.jsx-4054325370{color:black;}", ".article-page-author-name.jsx-4054325370:hover{color:var(--link-hover);}", ".article-page-details.jsx-4054325370{margin:2.5rem 0 3.5rem 0;}", ".article-page-details.jsx-4054325370>div.jsx-4054325370:nth-child(2),.article-page-author-name.jsx-4054325370{font-family:Times New Roman;font-size:1.1rem;}", ".article-page-content.jsx-4054325370{margin:0 .5rem;}"]));
}

async function getStaticPaths() {
  let ids = await Object(db["c" /* queryDB */])('SELECT id FROM articles'),
      paths = ids.map(id => ({
    params: {
      id: String(id.id)
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params: {
    id
  }
}) {
  let [article] = await Object(db["c" /* queryDB */])('SELECT * FROM articles WHERE id = $1', [id]),
      related = await Object(db["c" /* queryDB */])('SELECT * FROM articles WHERE id = ANY($1)', [article.related]),
      [author] = await Object(db["c" /* queryDB */])('SELECT * FROM authors WHERE name = $1', [article.author.name]);
  return {
    props: JSON.parse(JSON.stringify({
      article,
      author,
      related
    }))
  };
}
/* harmony default export */ var _id_ = __webpack_exports__["default"] = (Article);

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