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

  const ssofk = () => {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZXhlbXBsbzQuanMiXSwibmFtZXMiOlsiRXhlbXBsbzQiLCJjb25zb2xlIiwibG9nIiwiY2FycmVnYW5kbyIsInNldENhcnJlZ2FuZG8iLCJ1c2VDb250ZXh0IiwiQ29udGV4dEdsb2JhbCIsInVzZUVmZmVjdCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzc29mayIsInRleHRBbGlnbiIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFDakNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFFQSxRQUFNO0FBQ0pDLGNBREk7QUFDUUM7QUFEUixNQUVGQyx3REFBVSxDQUFDQywrRUFBRCxDQUZkO0FBSUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxVQUFNLENBQUNDLFVBQVAsQ0FBa0IsWUFBVTtBQUMxQkwsbUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDRCxLQUZELEVBRUUsSUFGRjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsUUFBTU0sS0FBSyxHQUFHLE1BQU0sQ0FBRSxDQUF0Qjs7QUFFQSxNQUFHUCxVQUFVLEtBQUssSUFBbEIsRUFBdUI7QUFDckIsd0JBQVE7QUFBSSxXQUFLLEVBQUU7QUFBQ1EsaUJBQVMsRUFBQyxRQUFYO0FBQXFCQyxnQkFBUSxFQUFFO0FBQS9CLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUjtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0kscUVBQUMseUVBQUQ7QUFBYSxXQUFLO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISixlQUlJLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQUtJLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBLGtCQURGO0FBU0Q7O0dBNUJ1QlosUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9leGVtcGxvNC5jNGYzNmM1OWE2ODZjNWMzOGU0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LW5vLXRhcmdldC1ibGFuayAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEluZGV4TmF2YmFyIGZyb20gXCJjb21wb25lbnRzL05hdmJhcnMvSW5kZXhOYXZiYXIuanNcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tICdjb21wb25lbnRzL0luaWNpby9CYW5uZXInXHJcbmltcG9ydCBPdXRyb3MgZnJvbSAnY29tcG9uZW50cy9JbmljaW8vT3V0cm9zJ1xyXG5pbXBvcnQgTnVtYmVyNCBmcm9tICdjb21wb25lbnRzL0luaWNpby9OdW1iZXI0J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL0Zvb3RlcnMvRm9vdGVyLmpzXCI7XHJcbmltcG9ydCB7IENvbnRleHRHbG9iYWwgfSBmcm9tICdjb21wb25lbnRzL2NvbnRleHRzL0NvbnRleHRHbG9iYWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVtcGxvNCgpIHtcclxuICBjb25zb2xlLmxvZygnUm9kZWkgSW5kZXgnKVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBjYXJyZWdhbmRvLCBzZXRDYXJyZWdhbmRvXHJcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dEdsb2JhbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICBzZXRDYXJyZWdhbmRvKGZhbHNlKVxyXG4gICAgfSwyNTAwKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgc3NvZmsgPSAoKSA9PiB7fVxyXG5cclxuICBpZihjYXJyZWdhbmRvID09PSB0cnVlKXtcclxuICAgIHJldHVybiAoPGgxIHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIGZvbnRTaXplOiAnNDhweCd9fT4gQ2FyZWdhbmRvLi4uIDwvaDE+KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPEluZGV4TmF2YmFyIGZpeGVkIC8+XHJcbiAgICAgICAgPEJhbm5lci8+XHJcbiAgICAgICAgPE51bWJlcjQvPlxyXG4gICAgICAgIDxPdXRyb3MvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==