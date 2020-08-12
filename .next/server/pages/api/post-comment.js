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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PksU");


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

/***/ "PksU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0cp2");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JvUo");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import uuid from 'uuidv4';


/* harmony default export */ __webpack_exports__["default"] = (async function (req, res) {
  let newUser,
      {
    name,
    email,
    content,
    article_id,
    parent,
    post_date
  } = req.body;

  if (!Object(_Functions__WEBPACK_IMPORTED_MODULE_0__[/* testEmail */ "e"])(email)) {
    res.json(1);
    res.end();
    return;
  }

  let hydratedComment = {
    article_id,
    content,
    post_date,
    parent,
    replies: [],
    id: Math.random()
  };

  try {
    let user = await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* getUser */ "a"])(email);

    if (user) {
      if (user.name !== name) {
        res.json(2);
        res.end();
        return;
      }

      await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])('UPDATE users SET comments = array_append(comments, $1) WHERE email = $2', [hydratedComment, email]);
    } else {
      newUser = true;
      await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* insertUser */ "b"])(name, email);
    }

    if (parent) {
      let [comments] = await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])('SELECT comments FROM articles WHERE id = $1', [article_id]);

      function addReply(level) {
        return level.map(comment => {
          let {
            replies
          } = comment;
          return comment.id === parent ? replies.push(_objectSpread({
            name,
            email
          }, hydratedComment)) : replies.find(({
            id
          }) => id === parent) ? replies.find(({
            id
          }) => id === parent).replies.push(_objectSpread({
            name,
            email
          }, hydratedComment)) : replies.length ? addReply(replies) : 0;
        });
      }

      addReply(comments.comments);
      await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])('UPDATE articles SET comments = $1 WHERE id = $2', [comments.comments, article_id]);
    } else await Object(_db__WEBPACK_IMPORTED_MODULE_1__[/* queryDB */ "c"])('UPDATE articles SET comments = array_append(comments, $1) WHERE id = $2', [_objectSpread({
      name,
      email
    }, hydratedComment), article_id]);

    if (newUser) {
      res.json(3);
      res.end();
      return;
    }

    res.json(0);
    res.end();
  } catch (e) {
    console.log(e);
  }
});

/***/ }),

/***/ "fMim":
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "qW5S":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ })

/******/ });