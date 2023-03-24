"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/thanks",{

/***/ "./pages/thanks.js":
/*!*************************!*\
  !*** ./pages/thanks.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Thanks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Thanks.module.scss */ \"./styles/Thanks.module.scss\");\n/* harmony import */ var _styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction Thanks(props) {\n    const handleAttendances = ()=>{\n        const personName = prompt(\"人物名を入力してください\");\n        if (personName) {\n            const currentTime = new Date().toLocaleString();\n            const currentAttendance = \"\".concat(personName, \",出勤,\").concat(currentTime);\n            let attendances = JSON.parse(localStorage.getItem(personName)) || [];\n            if (!attendances.includes(currentAttendance)) {\n                attendances.push(currentAttendance);\n                localStorage.setItem(personName, JSON.stringify(attendances));\n                console.log(\"\".concat(personName, \"の出勤処理\"));\n            }\n        }\n    };\n    const handleLeaving = ()=>{\n        const personName = prompt(\"人物名を入力してください\");\n        if (personName) {\n            const currentTime = new Date().toLocaleString();\n            const currentLeaving = \"\".concat(personName, \",退勤,\").concat(currentTime);\n            let attendances = JSON.parse(localStorage.getItem(personName)) || [];\n            if (!attendances.includes(currentLeaving)) {\n                attendances.push(currentLeaving);\n                localStorage.setItem(personName, JSON.stringify(attendances));\n                console.log(\"\".concat(personName, \"の退勤処理\"));\n            }\n        }\n    };\n    localStorage;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().fullscreen),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"https://corp.freee.co.jp/img/common/img-site-logo_202107.gif\",\n                            className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().logo)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().login),\n                                children: \"ログイン\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().check),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            id: \"Leaving\",\n                            className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().leaving),\n                            onClick: handleLeaving,\n                            children: \"退勤\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            id: \"Attendances\",\n                            className: (_styles_Thanks_module_scss__WEBPACK_IMPORTED_MODULE_3___default().attendances),\n                            onClick: handleAttendances,\n                            children: \"出勤\"\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/user/Desktop/thanks/pages/thanks.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_c = Thanks;\nvar _c;\n$RefreshReg$(_c, \"Thanks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aGFua3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNUO0FBQ3JCO0FBRWQsU0FBU00sT0FBT0MsS0FBSyxFQUFFO0lBQ2xDLE1BQU1DLG9CQUFvQixJQUFNO1FBQzlCLE1BQU1DLGFBQWFDLE9BQU87UUFDMUIsSUFBSUQsWUFBWTtZQUNkLE1BQU1FLGNBQWMsSUFBSUMsT0FBT0MsY0FBYztZQUM3QyxNQUFNQyxvQkFBb0IsR0FBb0JILE9BQWpCRixZQUFXLFFBQWtCLE9BQVpFO1lBQzlDLElBQUlJLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDVixnQkFBZ0IsRUFBRTtZQUNwRSxJQUFJLENBQUNNLFlBQVlLLFFBQVEsQ0FBQ04sb0JBQW9CO2dCQUM1Q0MsWUFBWU0sSUFBSSxDQUFDUDtnQkFDakJJLGFBQWFJLE9BQU8sQ0FBQ2IsWUFBWU8sS0FBS08sU0FBUyxDQUFDUjtnQkFDaERTLFFBQVFDLEdBQUcsQ0FBQyxHQUFjLE9BQVhoQixZQUFXO1lBQzVCLENBQUM7UUFDSCxDQUFDO0lBQ0g7SUFFQSxNQUFNaUIsZ0JBQWdCLElBQU07UUFDMUIsTUFBTWpCLGFBQWFDLE9BQU87UUFFMUIsSUFBSUQsWUFBWTtZQUNkLE1BQU1FLGNBQWMsSUFBSUMsT0FBT0MsY0FBYztZQUM3QyxNQUFNYyxpQkFBaUIsR0FBb0JoQixPQUFqQkYsWUFBVyxRQUFrQixPQUFaRTtZQUMzQyxJQUFJSSxjQUFjQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQ1YsZ0JBQWdCLEVBQUU7WUFDcEUsSUFBSSxDQUFDTSxZQUFZSyxRQUFRLENBQUNPLGlCQUFpQjtnQkFDekNaLFlBQVlNLElBQUksQ0FBQ007Z0JBQ2pCVCxhQUFhSSxPQUFPLENBQUNiLFlBQVlPLEtBQUtPLFNBQVMsQ0FBQ1I7Z0JBQ2hEUyxRQUFRQyxHQUFHLENBQUMsR0FBYyxPQUFYaEIsWUFBVztZQUM1QixDQUFDO1FBQ0gsQ0FBQztJQUNIO0lBRUFTO0lBR0YscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVd6Qiw2RUFBZ0I7a0JBQzlCLDRFQUFDd0I7WUFBSUMsV0FBV3pCLDhFQUFpQjs7OEJBQy9CLDhEQUFDd0I7b0JBQUlDLFdBQVd6QiwwRUFBYTs7c0NBQzNCLDhEQUFDNkI7NEJBQ0NDLEtBQUk7NEJBQ0pMLFdBQVd6Qix3RUFBVzs7Ozs7O3NDQUV4Qiw4REFBQ0Msa0RBQUlBOzRCQUFDK0IsTUFBSztzQ0FDVCw0RUFBQ0M7Z0NBQU9SLFdBQVd6Qix5RUFBWTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3JDLDhEQUFDd0I7b0JBQUlDLFdBQVd6Qix5RUFBWTs7c0NBQzFCLDhEQUFDaUM7NEJBQ0NHLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0haLFdBQVd6QiwyRUFBYzs0QkFDekJ1QyxTQUFTakI7c0NBQ1Y7Ozs7OztzQ0FHRCw4REFBQ1c7NEJBQ0NHLE1BQUs7NEJBQ0xDLElBQUc7NEJBQ0haLFdBQVd6QiwrRUFBa0I7NEJBQzdCdUMsU0FBU25DO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7S0FsRXVCRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90aGFua3MuanM/ZGIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvVGhhbmtzLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoYW5rcyhwcm9wcykge1xuICAgIGNvbnN0IGhhbmRsZUF0dGVuZGFuY2VzID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGVyc29uTmFtZSA9IHByb21wdChcIuS6uueJqeWQjeOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwiKTtcbiAgICAgIGlmIChwZXJzb25OYW1lKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpO1xuICAgICAgICBjb25zdCBjdXJyZW50QXR0ZW5kYW5jZSA9IGAke3BlcnNvbk5hbWV9LOWHuuWLpCwke2N1cnJlbnRUaW1lfWA7XG4gICAgICAgIGxldCBhdHRlbmRhbmNlcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGVyc29uTmFtZSkpIHx8IFtdO1xuICAgICAgICBpZiAoIWF0dGVuZGFuY2VzLmluY2x1ZGVzKGN1cnJlbnRBdHRlbmRhbmNlKSkge1xuICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goY3VycmVudEF0dGVuZGFuY2UpO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBlcnNvbk5hbWUsIEpTT04uc3RyaW5naWZ5KGF0dGVuZGFuY2VzKSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYCR7cGVyc29uTmFtZX3jga7lh7rli6Tlh6bnkIZgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgICBcbiAgICBjb25zdCBoYW5kbGVMZWF2aW5nID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGVyc29uTmFtZSA9IHByb21wdChcIuS6uueJqeWQjeOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhFwiXG4gICAgICApO1xuICAgICAgaWYgKHBlcnNvbk5hbWUpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZWF2aW5nID0gYCR7cGVyc29uTmFtZX0s6YCA5YukLCR7Y3VycmVudFRpbWV9YDtcbiAgICAgICAgbGV0IGF0dGVuZGFuY2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwZXJzb25OYW1lKSkgfHwgW107XG4gICAgICAgIGlmICghYXR0ZW5kYW5jZXMuaW5jbHVkZXMoY3VycmVudExlYXZpbmcpKSB7XG4gICAgICAgICAgYXR0ZW5kYW5jZXMucHVzaChjdXJyZW50TGVhdmluZyk7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocGVyc29uTmFtZSwgSlNPTi5zdHJpbmdpZnkoYXR0ZW5kYW5jZXMpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwZXJzb25OYW1lfeOBrumAgOWLpOWHpueQhmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGxvY2FsU3RvcmFnZVxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZnVsbHNjcmVlbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NvcnAuZnJlZWUuY28uanAvaW1nL2NvbW1vbi9pbWctc2l0ZS1sb2dvXzIwMjEwNy5naWZcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9nb31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9naW59PuODreOCsOOCpOODszwvYnV0dG9uPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2t9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaWQ9XCJMZWF2aW5nXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxlYXZpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMZWF2aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOmAgOWLpFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaWQ9XCJBdHRlbmRhbmNlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdHRlbmRhbmNlc31cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUF0dGVuZGFuY2VzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIOWHuuWLpFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJMaW5rIiwiVGhhbmtzIiwicHJvcHMiLCJoYW5kbGVBdHRlbmRhbmNlcyIsInBlcnNvbk5hbWUiLCJwcm9tcHQiLCJjdXJyZW50VGltZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImN1cnJlbnRBdHRlbmRhbmNlIiwiYXR0ZW5kYW5jZXMiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaW5jbHVkZXMiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMZWF2aW5nIiwiY3VycmVudExlYXZpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmdWxsc2NyZWVuIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwibG9nbyIsImhyZWYiLCJidXR0b24iLCJsb2dpbiIsImNoZWNrIiwidHlwZSIsImlkIiwibGVhdmluZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/thanks.js\n"));

/***/ })

});