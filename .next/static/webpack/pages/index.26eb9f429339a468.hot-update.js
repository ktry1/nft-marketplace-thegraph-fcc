"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _components_NFTBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NFTBox */ \"./components/NFTBox.js\");\n/* harmony import */ var _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/networkMapping.json */ \"./constants/networkMapping.json\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/subgraphQueries */ \"./constants/subgraphQueries.js\");\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)(), isWeb3Enabled = ref.isWeb3Enabled, chainId = ref.chainId;\n    var chainIdStr = chainId ? parseInt(chainId).toString() : \"31337\";\n    var marketplaceAddress = _constants_networkMapping_json__WEBPACK_IMPORTED_MODULE_5__[chainIdStr].NftMarketplace[0];\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_constants_subgraphQueries__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), loading = ref1.loading, error = ref1.error, listedNfts = ref1.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"py-4 px-4 font-bold text-2xl\",\n                children: \"Recently Listed\"\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: isWeb3Enabled ? loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                    lineNumber: 26,\n                    columnNumber: 21\n                }, this) : listedNfts.activeItems.map(function(nft) {\n                    var price = nft.price, nftAddress = nft.nftAddress, tokenId = nft.tokenId, seller = nft.seller;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NFTBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            price: price,\n                            nftAddress: nftAddress,\n                            tokenId: tokenId,\n                            marketplaceAddress: marketplaceAddress,\n                            seller: seller\n                        }, \"\".concat(nftAddress).concat(tokenId), false, {\n                            fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                            lineNumber: 34,\n                            columnNumber: 33\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 29\n                    }, _this);\n                }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Web3 Currently Not Enabled\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\VSCodeProjects\\\\nft-marketplace-thegraph-fcc\\\\pages\\\\index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"W1V3pKoWiPyefOugGMwP4jo0dqk=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUNFO0FBQ2dCO0FBQ2E7QUFDbEI7QUFDcUI7QUFDckI7QUFDa0I7O0FBRzVDLFNBQVNTLElBQUksR0FBRzs7O0lBQzdCLElBQWlDTCxHQUFZLEdBQVpBLHlEQUFVLEVBQUUsRUFBdENNLGFBQWEsR0FBYU4sR0FBWSxDQUF0Q00sYUFBYSxFQUFFQyxPQUFPLEdBQUlQLEdBQVksQ0FBdkJPLE9BQU87SUFDN0IsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLEdBQUdFLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDLENBQUNHLFFBQVEsRUFBRSxHQUFHLE9BQU87SUFDbkUsSUFBTUMsa0JBQWtCLEdBQUdULDJEQUFjLENBQUNNLFVBQVUsQ0FBQyxDQUFDSSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRXZFLElBQTBDVCxJQUEwQixHQUExQkEsd0RBQVEsQ0FBQ0Msa0VBQWdCLENBQUMsRUFBN0RTLE9BQU8sR0FBNEJWLElBQTBCLENBQTdEVSxPQUFPLEVBQUVDLEtBQUssR0FBcUJYLElBQTBCLENBQXBEVyxLQUFLLEVBQUVDLFVBQWUsR0FBSVosSUFBMEIsQ0FBN0NZLElBQUk7SUFHM0IscUJBRUUsOERBQUNFLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7MEJBQzlCLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsOEJBQThCOzBCQUFDLGlCQUFlOzs7OztvQkFBSzswQkFDakUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxnQkFBZ0I7MEJBQzFCWixhQUFhLEdBQ1ZPLE9BQU8saUJBQ0gsOERBQUNJLEtBQUc7OEJBQUMsWUFBVTs7Ozs7d0JBQU0sR0FFckJELFVBQVUsQ0FBQ0ksV0FBVyxDQUFDQyxHQUFHLENBQUMsU0FBQ0MsR0FBRyxFQUFLO29CQUVoQyxJQUFRQyxLQUFLLEdBQ1RELEdBQUcsQ0FEQ0MsS0FBSyxFQUFFQyxVQUFVLEdBQ3JCRixHQUFHLENBRFFFLFVBQVUsRUFBRUMsT0FBTyxHQUM5QkgsR0FBRyxDQURvQkcsT0FBTyxFQUFFQyxNQUFNLEdBQ3RDSixHQUFHLENBRDZCSSxNQUFNO29CQUUxQyxxQkFDSSw4REFBQ1QsS0FBRztrQ0FDQSw0RUFBQ2hCLDBEQUFNOzRCQUNIc0IsS0FBSyxFQUFFQSxLQUFLOzRCQUNaQyxVQUFVLEVBQUVBLFVBQVU7NEJBQ3RCQyxPQUFPLEVBQUVBLE9BQU87NEJBQ2hCZCxrQkFBa0IsRUFBRUEsa0JBQWtCOzRCQUN0Q2UsTUFBTSxFQUFFQSxNQUFNOzJCQUNULEVBQUMsQ0FBZUQsTUFBTyxDQUFwQkQsVUFBVSxDQUFXLFFBQVJDLE9BQU8sQ0FBRTs7OztpQ0FDaEM7Ozs7OzZCQUNBLENBQ1Q7aUJBQ0osQ0FBQyxpQkFHTiw4REFBQ1IsS0FBRzs4QkFBQyw0QkFBMEI7Ozs7O3dCQUFNOzs7OztvQkFFdkM7Ozs7OztZQUNKLENBQ1Q7Q0FFQTtHQTFDdUJaLElBQUk7O1FBQ09MLHFEQUFVO1FBSURHLG9EQUFROzs7QUFMNUJFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZU1vcmFsaXNRdWVyeSwgdXNlTW9yYWxpcyB9IGZyb20gJ3JlYWN0LW1vcmFsaXMnXG5pbXBvcnQgTkZUQm94IGZyb20gXCIuLi9jb21wb25lbnRzL05GVEJveFwiXG5pbXBvcnQgbmV0d29ya01hcHBpbmcgZnJvbSBcIi4uL2NvbnN0YW50cy9uZXR3b3JrTWFwcGluZy5qc29uXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQgR0VUX0FDVElWRV9JVEVNUyBmcm9tIFwiLi4vY29uc3RhbnRzL3N1YmdyYXBoUXVlcmllc1wiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qge2lzV2ViM0VuYWJsZWQsIGNoYWluSWR9ID0gdXNlTW9yYWxpcygpO1xuICBjb25zdCBjaGFpbklkU3RyID0gY2hhaW5JZCA/IHBhcnNlSW50KGNoYWluSWQpLnRvU3RyaW5nKCkgOiBcIjMxMzM3XCI7XG4gIGNvbnN0IG1hcmtldHBsYWNlQWRkcmVzcyA9IG5ldHdvcmtNYXBwaW5nW2NoYWluSWRTdHJdLk5mdE1hcmtldHBsYWNlWzBdO1xuXG4gIGNvbnN0IHtsb2FkaW5nLCBlcnJvciwgZGF0YTpsaXN0ZWROZnRzfSA9IHVzZVF1ZXJ5KEdFVF9BQ1RJVkVfSVRFTVMpXG5cblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB5LTQgcHgtNCBmb250LWJvbGQgdGV4dC0yeGxcIj5SZWNlbnRseSBMaXN0ZWQ8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICB7aXNXZWIzRW5hYmxlZCA/IChcbiAgICAgICAgICAgICAgICBsb2FkaW5nICA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVkTmZ0cy5hY3RpdmVJdGVtcy5tYXAoKG5mdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHByaWNlLCBuZnRBZGRyZXNzLCB0b2tlbklkLCBzZWxsZXIgfSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxORlRCb3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzPXttYXJrZXRwbGFjZUFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxsZXI9e3NlbGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7bmZ0QWRkcmVzc30ke3Rva2VuSWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxkaXY+V2ViMyBDdXJyZW50bHkgTm90IEVuYWJsZWQ8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwidXNlTW9yYWxpc1F1ZXJ5IiwidXNlTW9yYWxpcyIsIk5GVEJveCIsIm5ldHdvcmtNYXBwaW5nIiwidXNlUXVlcnkiLCJHRVRfQUNUSVZFX0lURU1TIiwiSG9tZSIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5JZFN0ciIsInBhcnNlSW50IiwidG9TdHJpbmciLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJOZnRNYXJrZXRwbGFjZSIsImxvYWRpbmciLCJlcnJvciIsImRhdGEiLCJsaXN0ZWROZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhY3RpdmVJdGVtcyIsIm1hcCIsIm5mdCIsInByaWNlIiwibmZ0QWRkcmVzcyIsInRva2VuSWQiLCJzZWxsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});