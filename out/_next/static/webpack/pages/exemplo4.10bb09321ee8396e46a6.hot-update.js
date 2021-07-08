webpackHotUpdate_N_E("pages/exemplo4",{

/***/ "./pages/exemplo4.js":
/*!***************************!*\
  !*** ./pages/exemplo4.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exemplo4; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Navbars/IndexNavbar.js */ "./components/Navbars/IndexNavbar.js");
/* harmony import */ var components_Inicio_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Inicio/Banner */ "./components/Inicio/Banner.js");
/* harmony import */ var components_Inicio_Outros__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Inicio/Outros */ "./components/Inicio/Outros.js");
/* harmony import */ var components_Inicio_Number4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Inicio/Number4 */ "./components/Inicio/Number4.js");
/* harmony import */ var components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footers/Footer.js */ "./components/Footers/Footer.js");
/* harmony import */ var components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/contexts/ContextGlobal */ "./components/contexts/ContextGlobal.js");



var _jsxFileName = "D:\\www\\nextjs-escola-de-ferias\\pages\\exemplo4.js",
    _s = $RefreshSig$();

/* eslint-disable react/jsx-no-target-blank */







function Exemplo4() {
  _s();

  console.log('Rodei Index');
  const {
    carregando,
    setCarregando
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(components_contexts_ContextGlobal__WEBPACK_IMPORTED_MODULE_7__["ContextGlobal"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.setTimeout(function () {
      setCarregando(false);
    }, 2500);
  }, []);

  if (carregando === true) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        textAlign: "center",
        fontSize: '48px'
      },
      children: " Caregando... "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Navbars_IndexNavbar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      fixed: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Banner__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Number4__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Inicio_Outros__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footers_Footer_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Exemplo4, "IbLaGUCK4CYQd579EcA7pDvRwn4=");

_c = Exemplo4;

var _c;

$RefreshReg$(_c, "Exemplo4");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlbXBsbzQuanMiXSwibmFtZXMiOlsiRXhlbXBsbzQiLCJjb25zb2xlIiwibG9nIiwiY2FycmVnYW5kbyIsInNldENhcnJlZ2FuZG8iLCJ1c2VDb250ZXh0IiwiQ29udGV4dEdsb2JhbCIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQ2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBRUEsUUFBTTtBQUNKQyxjQURJO0FBQ1FDO0FBRFIsTUFFRkMsd0RBQVUsQ0FBQ0MsK0VBQUQsQ0FGZDtBQUlBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQVU7QUFDMUJMLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0QsS0FGRCxFQUVFLElBRkY7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQVFBLE1BQUdELFVBQVUsS0FBSyxJQUFsQixFQUF1QjtBQUNyQix3QkFBUTtBQUFJLFdBQUssRUFBRTtBQUFDTyxpQkFBUyxFQUFDLFFBQVg7QUFBcUJDLGdCQUFRLEVBQUU7QUFBL0IsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFSO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDSSxxRUFBQyx5RUFBRDtBQUFhLFdBQUs7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0kscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBSUkscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBS0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUEsa0JBREY7QUFTRDs7R0E1QnVCWCxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2V4ZW1wbG80LjEwYmIwOTMyMWVlODM5NmU0NmE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtbm8tdGFyZ2V0LWJsYW5rICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSW5kZXhOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvTmF2YmFycy9JbmRleE5hdmJhci5qc1wiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJ2NvbXBvbmVudHMvSW5pY2lvL0Jhbm5lcidcclxuaW1wb3J0IE91dHJvcyBmcm9tICdjb21wb25lbnRzL0luaWNpby9PdXRyb3MnXHJcbmltcG9ydCBOdW1iZXI0IGZyb20gJ2NvbXBvbmVudHMvSW5pY2lvL051bWJlcjQnXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvRm9vdGVycy9Gb290ZXIuanNcIjtcclxuaW1wb3J0IHsgQ29udGV4dEdsb2JhbCB9IGZyb20gJ2NvbXBvbmVudHMvY29udGV4dHMvQ29udGV4dEdsb2JhbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZW1wbG80KCkge1xyXG4gIGNvbnNvbGUubG9nKCdSb2RlaSBJbmRleCcpXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGNhcnJlZ2FuZG8sIHNldENhcnJlZ2FuZG9cclxuICB9ID0gdXNlQ29udGV4dChDb250ZXh0R2xvYmFsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldENhcnJlZ2FuZG8oZmFsc2UpXHJcbiAgICB9LDI1MDApXHJcbiAgfSwgW10pO1xyXG5cclxuICBcclxuXHJcbiAgaWYoY2FycmVnYW5kbyA9PT0gdHJ1ZSl7XHJcbiAgICByZXR1cm4gKDxoMSBzdHlsZT17e3RleHRBbGlnbjpcImNlbnRlclwiLCBmb250U2l6ZTogJzQ4cHgnfX0+IENhcmVnYW5kby4uLiA8L2gxPilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxJbmRleE5hdmJhciBmaXhlZCAvPlxyXG4gICAgICAgIDxCYW5uZXIvPlxyXG4gICAgICAgIDxOdW1iZXI0Lz5cclxuICAgICAgICA8T3V0cm9zLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=