webpackHotUpdate_N_E("pages/exemplo3",{

/***/ "./components/Inicio/Number3.js":
/*!**************************************!*\
  !*** ./components/Inicio/Number3.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Number3; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_contexts_ContextPagina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/contexts/ContextPagina */ "./components/contexts/ContextPagina.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "D:\\www\\nextjs-escola-de-ferias\\components\\Inicio\\Number3.js",
    _s = $RefreshSig$();




function Number3() {
  _s();

  const {
    valor,
    setValor
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(components_contexts_ContextPagina__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "div",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: valor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: () => setValor(valor + 1),
        children: ["ADD ", valor, " + 1"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/exemplo4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          style: {
            marginTop: '1em',
            backgroundColor: "green",
            borderRadius: '10px',
            padding: '5px 10px'
          },
          children: "DIRECIONAR PARA PAGINA EXEMPLO 4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)
  }, void 0, false);
}

_s(Number3, "WCKRijRFtYd2CMSioNSvGkWmTbs=");

_c = Number3;

var _c;

$RefreshReg$(_c, "Number3");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbmljaW8vTnVtYmVyMy5qcyJdLCJuYW1lcyI6WyJOdW1iZXIzIiwidmFsb3IiLCJzZXRWYWxvciIsInVzZUNvbnRleHQiLCJDb250ZXh0UGFnaW5hIiwibWFyZ2luVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFOUIsUUFBTTtBQUNGQyxTQURFO0FBRUZDO0FBRkUsTUFHRkMsd0RBQVUsQ0FBQ0MseUVBQUQsQ0FIZDtBQUtBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxRQUFFLEVBQUUsS0FBVDtBQUFBLDhCQUNJO0FBQUEsa0JBQ0tIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBUSxlQUFPLEVBQUUsTUFBTUMsUUFBUSxDQUFDRCxLQUFLLEdBQUMsQ0FBUCxDQUEvQjtBQUFBLDJCQUNTQSxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBT0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUNJO0FBQUcsZUFBSyxFQUFFO0FBQUNJLHFCQUFTLEVBQUUsS0FBWjtBQUFtQkMsMkJBQWUsRUFBRSxPQUFwQztBQUE2Q0Msd0JBQVksRUFBRSxNQUEzRDtBQUFtRUMsbUJBQU8sRUFBRTtBQUE1RSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBaUJIOztHQXhCdUJSLE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZXhlbXBsbzMuZDU1OGUwYTY1YTkxMjNlZTAxZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDb250ZXh0UGFnaW5hIGZyb20gJ2NvbXBvbmVudHMvY29udGV4dHMvQ29udGV4dFBhZ2luYSdcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTnVtYmVyMygpIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgdmFsb3IsXHJcbiAgICAgICAgc2V0VmFsb3IsXHJcbiAgICB9ID0gdXNlQ29udGV4dChDb250ZXh0UGFnaW5hKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e1wiZGl2XCJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWxvcn1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZhbG9yKHZhbG9yKzEpfT5cclxuICAgICAgICAgICAgICAgICAgICBBREQge3ZhbG9yfSArIDFcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leGVtcGxvNFwiID5cclxuICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e21hcmdpblRvcDogJzFlbScsIGJhY2tncm91bmRDb2xvcjogXCJncmVlblwiLCBib3JkZXJSYWRpdXM6ICcxMHB4JywgcGFkZGluZzogJzVweCAxMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBESVJFQ0lPTkFSIFBBUkEgUEFHSU5BIEVYRU1QTE8gNFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==