webpackHotUpdate_N_E("pages/categories/[category]/[subcategory]",{

/***/ "./Functions.js":
/*!**********************!*\
  !*** ./Functions.js ***!
  \**********************/
/*! exports provided: convertDate, convertToPath, convertFromPath, testEmail, copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDate", function() { return convertDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPath", function() { return convertToPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromPath", function() { return convertFromPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testEmail", function() { return testEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
function convertDate(date) {
  var now = new Date(),
      secondsPast = (now.getTime() - date) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + " second".concat(parseInt(secondsPast) > 1 ? 's' : '', " ago");
  }

  if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + " minute".concat(parseInt(secondsPast / 60) > 1 ? 's' : '', " ago");
  }

  if (secondsPast <= 86400) {
    return parseInt(secondsPast / 3600) + " hour".concat(parseInt(secondsPast / 3600) > 1 ? 's' : '', " ago");
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
  return path.split('-').map(function (word, i, ary) {
    return word === 'previews' || word === 'columnsfeatures' ? word === 'previews' ? 'Previews:' : 'Columns/Features' : i === 0 || i === ary.length - 1 || !['the', 'on', 'in', 'and', 'whats'].includes(word) ? !['tv', 'aj', 'cola', 'ucsb', 'uc'].includes(word) ? word[0].toUpperCase() + word.slice(1) : word.toUpperCase() : word === 'whats' ? 'What\'s' : word;
  }).join(' ');
}
function testEmail(email) {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}
function copyToClipboard(text) {
  var el = document.createElement('input');
  el.value = text;
  el.style.visibility = 'none';
  el.style.height = 0;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRnVuY3Rpb25zLmpzIl0sIm5hbWVzIjpbImNvbnZlcnREYXRlIiwiZGF0ZSIsIm5vdyIsIkRhdGUiLCJzZWNvbmRzUGFzdCIsImdldFRpbWUiLCJwYXJzZUludCIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsImNvbnZlcnRUb1BhdGgiLCJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJjb252ZXJ0RnJvbVBhdGgiLCJwYXRoIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiaSIsImFyeSIsImxlbmd0aCIsImluY2x1ZGVzIiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJ0ZXN0RW1haWwiLCJlbWFpbCIsInRlc3QiLCJjb3B5VG9DbGlwYm9hcmQiLCJ0ZXh0IiwiZWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsInN0eWxlIiwidmlzaWJpbGl0eSIsImhlaWdodCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsImV4ZWNDb21tYW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsV0FBVCxDQUFxQkMsSUFBckIsRUFBMkI7QUFDOUIsTUFBSUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBVjtBQUFBLE1BQ0lDLFdBQVcsR0FBRyxDQUFDRixHQUFHLENBQUNHLE9BQUosS0FBZ0JKLElBQWpCLElBQXlCLElBRDNDOztBQUVBLE1BQUlHLFdBQVcsR0FBRyxFQUFsQixFQUFzQjtBQUNsQixXQUFPRSxRQUFRLENBQUNGLFdBQUQsQ0FBUixvQkFBa0NFLFFBQVEsQ0FBQ0YsV0FBRCxDQUFSLEdBQXdCLENBQXhCLEdBQTRCLEdBQTVCLEdBQWtDLEVBQXBFLFNBQVA7QUFDSDs7QUFDRCxNQUFJQSxXQUFXLEdBQUcsSUFBbEIsRUFBd0I7QUFDcEIsV0FBT0UsUUFBUSxDQUFDRixXQUFXLEdBQUcsRUFBZixDQUFSLG9CQUF1Q0UsUUFBUSxDQUFDRixXQUFXLEdBQUcsRUFBZixDQUFSLEdBQTZCLENBQTdCLEdBQWlDLEdBQWpDLEdBQXVDLEVBQTlFLFNBQVA7QUFDSDs7QUFDRCxNQUFJQSxXQUFXLElBQUksS0FBbkIsRUFBMEI7QUFDdEIsV0FBT0UsUUFBUSxDQUFDRixXQUFXLEdBQUcsSUFBZixDQUFSLGtCQUF1Q0UsUUFBUSxDQUFDRixXQUFXLEdBQUcsSUFBZixDQUFSLEdBQStCLENBQS9CLEdBQW1DLEdBQW5DLEdBQXlDLEVBQWhGLFNBQVA7QUFDSDs7QUFDRCxTQUFPLElBQUlELElBQUosQ0FBU0YsSUFBVCxFQUFlTSxrQkFBZixDQUFrQyxTQUFsQyxFQUE2QztBQUFFQyxPQUFHLEVBQUUsU0FBUDtBQUFrQkMsU0FBSyxFQUFFLE1BQXpCO0FBQWlDQyxRQUFJLEVBQUU7QUFBdkMsR0FBN0MsQ0FBUDtBQUNIO0FBRU0sU0FBU0MsYUFBVCxDQUF1QkMsTUFBdkIsRUFBK0I7QUFDbEMsU0FBT0EsTUFBTSxDQUFDQyxXQUFQLEdBQXFCQyxPQUFyQixDQUE2QixJQUE3QixFQUFtQyxHQUFuQyxFQUF3Q0EsT0FBeEMsQ0FBZ0Qsd0NBQWhELEVBQTBGLEVBQTFGLENBQVA7QUFDSDtBQUVNLFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQ2xDLFNBQU9BLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFVQyxHQUFWO0FBQUEsV0FDdkJGLElBQUksS0FBSyxVQUFULElBQXVCQSxJQUFJLEtBQUssaUJBQWhDLEdBQ01BLElBQUksS0FBSyxVQUFULEdBQXNCLFdBQXRCLEdBQW9DLGtCQUQxQyxHQUVPQyxDQUFDLEtBQUssQ0FBTixJQUFXQSxDQUFDLEtBQUtDLEdBQUcsQ0FBQ0MsTUFBSixHQUFhLENBQTlCLElBQW1DLENBQUMsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFjLElBQWQsRUFBb0IsS0FBcEIsRUFBMkIsT0FBM0IsRUFBb0NDLFFBQXBDLENBQTZDSixJQUE3QyxDQUFyQyxHQUNJLENBQUMsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsSUFBN0IsRUFBbUNJLFFBQW5DLENBQTRDSixJQUE1QyxDQUFELEdBQ0lBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUssV0FBUixLQUF3QkwsSUFBSSxDQUFDTSxLQUFMLENBQVcsQ0FBWCxDQUQ1QixHQUVJTixJQUFJLENBQUNLLFdBQUwsRUFIUixHQUlJTCxJQUFJLEtBQUssT0FBVCxHQUFtQixTQUFuQixHQUErQkEsSUFQbEI7QUFBQSxHQUFwQixFQU80Q08sSUFQNUMsQ0FPaUQsR0FQakQsQ0FBUDtBQVFIO0FBRU0sU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDN0IsU0FBTyxpY0FBaWNDLElBQWpjLENBQXNjRCxLQUF0YyxDQUFQO0FBQ0g7QUFFTSxTQUFTRSxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFYO0FBQ0FGLElBQUUsQ0FBQ0csS0FBSCxHQUFXSixJQUFYO0FBQ0FDLElBQUUsQ0FBQ0ksS0FBSCxDQUFTQyxVQUFULEdBQXNCLE1BQXRCO0FBQ0FMLElBQUUsQ0FBQ0ksS0FBSCxDQUFTRSxNQUFULEdBQWtCLENBQWxCO0FBQ0FMLFVBQVEsQ0FBQ00sSUFBVCxDQUFjQyxXQUFkLENBQTBCUixFQUExQjtBQUNBQSxJQUFFLENBQUNTLE1BQUg7QUFDQVIsVUFBUSxDQUFDUyxXQUFULENBQXFCLE1BQXJCO0FBQ0giLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2F0ZWdvcmllcy9bY2F0ZWdvcnldL1tzdWJjYXRlZ29yeV0uN2EzMTJjODI4ODQ0OTE1MDY1MzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKSB7XHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKSxcclxuICAgICAgICBzZWNvbmRzUGFzdCA9IChub3cuZ2V0VGltZSgpIC0gZGF0ZSkgLyAxMDAwO1xyXG4gICAgaWYgKHNlY29uZHNQYXN0IDwgNjApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc2Vjb25kc1Bhc3QpICsgYCBzZWNvbmQke3BhcnNlSW50KHNlY29uZHNQYXN0KSA+IDEgPyAncycgOiAnJ30gYWdvYDtcclxuICAgIH1cclxuICAgIGlmIChzZWNvbmRzUGFzdCA8IDM2MDApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc2Vjb25kc1Bhc3QgLyA2MCkgKyBgIG1pbnV0ZSR7cGFyc2VJbnQoc2Vjb25kc1Bhc3QgLyA2MCkgPiAxID8gJ3MnIDogJyd9IGFnb2A7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Vjb25kc1Bhc3QgPD0gODY0MDApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQoc2Vjb25kc1Bhc3QgLyAzNjAwKSArIGAgaG91ciR7cGFyc2VJbnQoc2Vjb25kc1Bhc3QgLyAzNjAwKSA+IDEgPyAncycgOiAnJ30gYWdvYDtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2RlZmF1bHQnLCB7IGRheTogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCB5ZWFyOiAnbnVtZXJpYycgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1BhdGgoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnLScpLnJlcGxhY2UoL1s6JyFAIyQlXipcXChcXClcIjt7fVxcW1xcXVxcfH5gPD5cXC9cXFxcP1xcLixdL2csICcnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29udmVydEZyb21QYXRoKHBhdGgpIHtcclxuICAgIHJldHVybiBwYXRoLnNwbGl0KCctJykubWFwKCh3b3JkLCBpLCBhcnkpID0+XHJcbiAgICAgICAgd29yZCA9PT0gJ3ByZXZpZXdzJyB8fCB3b3JkID09PSAnY29sdW1uc2ZlYXR1cmVzJ1xyXG4gICAgICAgICAgICA/IHdvcmQgPT09ICdwcmV2aWV3cycgPyAnUHJldmlld3M6JyA6ICdDb2x1bW5zL0ZlYXR1cmVzJ1xyXG4gICAgICAgICAgICA6IChpID09PSAwIHx8IGkgPT09IGFyeS5sZW5ndGggLSAxIHx8ICFbJ3RoZScsICdvbicsICdpbicsICdhbmQnLCAnd2hhdHMnXS5pbmNsdWRlcyh3b3JkKSlcclxuICAgICAgICAgICAgICAgID8gIVsndHYnLCAnYWonLCAnY29sYScsICd1Y3NiJywgJ3VjJ10uaW5jbHVkZXMod29yZClcclxuICAgICAgICAgICAgICAgICAgICA/IHdvcmRbMF0udG9VcHBlckNhc2UoKSArIHdvcmQuc2xpY2UoMSlcclxuICAgICAgICAgICAgICAgICAgICA6IHdvcmQudG9VcHBlckNhc2UoKVxyXG4gICAgICAgICAgICAgICAgOiB3b3JkID09PSAnd2hhdHMnID8gJ1doYXRcXCdzJyA6IHdvcmQpLmpvaW4oJyAnKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGVzdEVtYWlsKGVtYWlsKSB7XHJcbiAgICByZXR1cm4gLyg/OlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSp8XCIoPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMVxceDIzLVxceDViXFx4NWQtXFx4N2ZdfFxcXFxbXFx4MDEtXFx4MDlcXHgwYlxceDBjXFx4MGUtXFx4N2ZdKSpcIilAKD86KD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP3xcXFsoPzooPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pKVxcLil7M30oPzooMig1WzAtNV18WzAtNF1bMC05XSl8MVswLTldWzAtOV18WzEtOV0/WzAtOV0pfFthLXowLTktXSpbYS16MC05XTooPzpbXFx4MDEtXFx4MDhcXHgwYlxceDBjXFx4MGUtXFx4MWZcXHgyMS1cXHg1YVxceDUzLVxceDdmXXxcXFxcW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBlLVxceDdmXSkrKVxcXSkvLnRlc3QoZW1haWwpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dCkge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZWwudmFsdWUgPSB0ZXh0O1xyXG4gICAgZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdub25lJztcclxuICAgIGVsLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=