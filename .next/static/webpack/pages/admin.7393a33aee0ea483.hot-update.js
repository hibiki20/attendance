"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Admin.module.scss */ \"./styles/Admin.module.scss\");\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Admin() {\n    _s();\n    const [attendanceList, setAttendanceList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedName, setSelectedName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const localStorageData = {};\n        for(let i = 0; i < localStorage.length; i++){\n            const key = localStorage.key(i);\n            const value = localStorage.getItem(key);\n            const [name, status, time] = value.split(\",\");\n            if (!localStorageData[name]) {\n                localStorageData[name] = {\n                    attendances: [],\n                    departures: []\n                };\n            }\n            if (status === \"出勤\") {\n                localStorageData[name].attendances.push(time);\n            } else if (status === \"退勤\") {\n                localStorageData[name].departures.push(time);\n            }\n        }\n        setAttendanceList(localStorageData);\n    }, []);\n    const handleClick = (name)=>{\n        setSelectedName(name);\n    };\n    const renderAttendance = ()=>{\n        if (!selectedName || !attendanceList[selectedName]) {\n            return null;\n        }\n        const attendances = [];\n        for(let i = 0; i < attendanceList[selectedName].attendances.length; i++){\n            attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    \"出勤 (\",\n                    attendanceList[selectedName].attendances[i],\n                    \")\"\n                ]\n            }, \"attendance-\".concat(i), true, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this));\n            if (attendanceList[selectedName].departures[i]) {\n                attendances.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        \"退勤 (\",\n                        attendanceList[selectedName].departures[i],\n                        \")\"\n                    ]\n                }, \"departure-\".concat(i), true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 47,\n                    columnNumber: 15\n                }, this));\n            }\n        }\n        const latestAttendanceTime = attendanceList[selectedName].attendances[attendanceList[selectedName].attendances.length - 1];\n        const latestAttendanceStatus = \"出勤\";\n        let latestDepartureTime = \"\";\n        let timeDiff = \"\";\n        if (attendanceList[selectedName].departures.length > 0) {\n            latestDepartureTime = attendanceList[selectedName].departures[attendanceList[selectedName].departures.length - 1];\n            if (latestAttendanceTime) {\n                const diff = (new Date(latestDepartureTime) - new Date(latestAttendanceTime)) / (1000 * 60);\n                timeDiff = \"\".concat(Math.floor(diff / 60), \"時間 \").concat(Math.floor(diff % 60), \"分\");\n            }\n        }\n        const pastAttendances = attendances.slice(0, -2); // 最新の出退勤情報を除いた過去の出退勤情報\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: selectedName\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                latestAttendanceTime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"最新の出勤: \",\n                        latestAttendanceTime,\n                        \" (\",\n                        latestAttendanceStatus,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 69,\n                    columnNumber: 38\n                }, this),\n                latestDepartureTime && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"最新の退勤: \",\n                        latestDepartureTime\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 70,\n                    columnNumber: 37\n                }, this),\n                timeDiff && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"出勤から退勤までの時間: \",\n                        timeDiff\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 71,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: pastAttendances\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 72,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: attendances.slice(-1)\n                }, void 0, false, {\n                    fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n            lineNumber: 67,\n            columnNumber: 11\n        }, this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/thanks\",\n                children: \"ホームに戻る\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"出勤状況\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: Object.keys(attendanceList).map((name, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        onClick: ()=>handleClick(name),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            renderAttendance()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"s1eRfOQmnmlZOS/VzyIz/Sn524s=\");\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDSCxPQUFPLEtBQUk7WUFDakUsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNSSxrQkFBa0JkLFlBQVllLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSx1QkFBdUI7UUFDekUscUJBQ0UsOERBQUNDOzs4QkFDQyw4REFBQ0M7OEJBQUk5Qjs7Ozs7O2dCQUNKbUIsc0NBQXdCLDhEQUFDWTs7d0JBQUU7d0JBQVFaO3dCQUFxQjt3QkFBR0M7d0JBQXVCOzs7Ozs7O2dCQUNsRkMscUNBQXVCLDhEQUFDVTs7d0JBQUU7d0JBQVFWOzs7Ozs7O2dCQUNsQ0MsMEJBQVksOERBQUNTOzt3QkFBRTt3QkFBY1Q7Ozs7Ozs7OEJBQzlCLDhEQUFDVTs4QkFBSUw7Ozs7Ozs4QkFDTCw4REFBQ0s7OEJBQUluQixZQUFZZSxLQUFLLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0lBRzlCO0lBR0oscUJBQ0UsOERBQUNDO1FBQUlJLFdBQVdyQyw0RUFBZ0I7OzBCQUM5Qiw4REFBQ0Qsa0RBQUlBO2dCQUFDd0MsTUFBSzswQkFBVTs7Ozs7OzBCQUNyQiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0o7MEJBQ0VLLE9BQU9DLElBQUksQ0FBQ3hDLGdCQUFnQnlDLEdBQUcsQ0FBQyxDQUFDOUIsTUFBTStCLHNCQUN0Qyw4REFBQ3RCO3dCQUFldUIsU0FBUyxJQUFNekIsWUFBWVA7a0NBQ3pDLDRFQUFDaUM7NEJBQUVQLE1BQUs7c0NBQUsxQjs7Ozs7O3VCQUROK0I7Ozs7Ozs7Ozs7WUFLWnZCOzs7Ozs7O0FBR1AsQ0FBQztHQXhGdUJwQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi5qcz84NWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbigpIHtcbiAgICBjb25zdCBbYXR0ZW5kYW5jZUxpc3QsIHNldEF0dGVuZGFuY2VMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc2VsZWN0ZWROYW1lLCBzZXRTZWxlY3RlZE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgbG9jYWxTdG9yYWdlRGF0YSA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBjb25zdCBbbmFtZSwgc3RhdHVzLCB0aW1lXSA9IHZhbHVlLnNwbGl0KCcsJyk7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlRGF0YVtuYW1lXSkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZURhdGFbbmFtZV0gPSB7XG4gICAgICAgICAgICBhdHRlbmRhbmNlczogW10sXG4gICAgICAgICAgICBkZXBhcnR1cmVzOiBbXVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ+WHuuWLpCcpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VEYXRhW25hbWVdLmF0dGVuZGFuY2VzLnB1c2godGltZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAn6YCA5YukJykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZURhdGFbbmFtZV0uZGVwYXJ0dXJlcy5wdXNoKHRpbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRBdHRlbmRhbmNlTGlzdChsb2NhbFN0b3JhZ2VEYXRhKTtcbiAgICB9LCBbXSk7XG4gIFxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKG5hbWUpID0+IHtcbiAgICAgIHNldFNlbGVjdGVkTmFtZShuYW1lKTtcbiAgICB9O1xuICBcbiAgICBjb25zdCByZW5kZXJBdHRlbmRhbmNlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXNlbGVjdGVkTmFtZSB8fCAhYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF0dGVuZGFuY2VzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5hdHRlbmRhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICA8bGkga2V5PXtgYXR0ZW5kYW5jZS0ke2l9YH0+XG4gICAgICAgICAgICAgIOWHuuWLpCAoe2F0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uYXR0ZW5kYW5jZXNbaV19KVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChhdHRlbmRhbmNlTGlzdFtzZWxlY3RlZE5hbWVdLmRlcGFydHVyZXNbaV0pIHtcbiAgICAgICAgICAgIGF0dGVuZGFuY2VzLnB1c2goXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BkZXBhcnR1cmUtJHtpfWB9PlxuICAgICAgICAgICAgICAgIOmAgOWLpCAoe2F0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uZGVwYXJ0dXJlc1tpXX0pXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXRlc3RBdHRlbmRhbmNlVGltZSA9IGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uYXR0ZW5kYW5jZXNbYXR0ZW5kYW5jZUxpc3Rbc2VsZWN0ZWROYW1lXS5hdHRlbmRhbmNlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgbGF0ZXN0QXR0ZW5kYW5jZVN0YXR1cyA9ICflh7rli6QnO1xuICAgICAgICBsZXQgbGF0ZXN0RGVwYXJ0dXJlVGltZSA9ICcnO1xuICAgICAgICBsZXQgdGltZURpZmYgPSAnJztcbiAgICAgICAgaWYgKGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uZGVwYXJ0dXJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGF0ZXN0RGVwYXJ0dXJlVGltZSA9IGF0dGVuZGFuY2VMaXN0W3NlbGVjdGVkTmFtZV0uZGVwYXJ0dXJlc1thdHRlbmRhbmNlTGlzdFtzZWxlY3RlZE5hbWVdLmRlcGFydHVyZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGxhdGVzdEF0dGVuZGFuY2VUaW1lKSB7XG4gICAgICAgICAgICBjb25zdCBkaWZmID0gKG5ldyBEYXRlKGxhdGVzdERlcGFydHVyZVRpbWUpIC0gbmV3IERhdGUobGF0ZXN0QXR0ZW5kYW5jZVRpbWUpKSAvICgxMDAwICogNjApO1xuICAgICAgICAgICAgdGltZURpZmYgPSBgJHtNYXRoLmZsb29yKGRpZmYgLyA2MCl95pmC6ZaTICR7TWF0aC5mbG9vcihkaWZmICUgNjApfeWIhmA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwYXN0QXR0ZW5kYW5jZXMgPSBhdHRlbmRhbmNlcy5zbGljZSgwLCAtMik7IC8vIOacgOaWsOOBruWHuumAgOWLpOaDheWgseOCkumZpOOBhOOBn+mBjuWOu+OBruWHuumAgOWLpOaDheWgsVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e3NlbGVjdGVkTmFtZX08L2gzPlxuICAgICAgICAgICAge2xhdGVzdEF0dGVuZGFuY2VUaW1lICYmIDxwPuacgOaWsOOBruWHuuWLpDoge2xhdGVzdEF0dGVuZGFuY2VUaW1lfSAoe2xhdGVzdEF0dGVuZGFuY2VTdGF0dXN9KTwvcD59XG4gICAgICAgICAgICB7bGF0ZXN0RGVwYXJ0dXJlVGltZSAmJiA8cD7mnIDmlrDjga7pgIDli6Q6IHtsYXRlc3REZXBhcnR1cmVUaW1lfTwvcD59XG4gICAgICAgICAgICB7dGltZURpZmYgJiYgPHA+5Ye65Yuk44GL44KJ6YCA5Yuk44G+44Gn44Gu5pmC6ZaTOiB7dGltZURpZmZ9PC9wPn1cbiAgICAgICAgICAgIDx1bD57cGFzdEF0dGVuZGFuY2VzfTwvdWw+XG4gICAgICAgICAgICA8dWw+e2F0dGVuZGFuY2VzLnNsaWNlKC0xKX08L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfTtcbiAgXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvdGhhbmtzXCI+44Ob44O844Og44Gr5oi744KLPC9MaW5rPlxuICAgICAgPGgyPuWHuuWLpOeKtuazgTwvaDI+XG4gICAgICA8dWw+XG4gICAgICAgIHtPYmplY3Qua2V5cyhhdHRlbmRhbmNlTGlzdCkubWFwKChuYW1lLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhuYW1lKX0+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPntuYW1lfTwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICB7cmVuZGVyQXR0ZW5kYW5jZSgpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsInN0eWxlcyIsIkFkbWluIiwiYXR0ZW5kYW5jZUxpc3QiLCJzZXRBdHRlbmRhbmNlTGlzdCIsInNlbGVjdGVkTmFtZSIsInNldFNlbGVjdGVkTmFtZSIsImxvY2FsU3RvcmFnZURhdGEiLCJpIiwibG9jYWxTdG9yYWdlIiwibGVuZ3RoIiwia2V5IiwidmFsdWUiLCJnZXRJdGVtIiwibmFtZSIsInN0YXR1cyIsInRpbWUiLCJzcGxpdCIsImF0dGVuZGFuY2VzIiwiZGVwYXJ0dXJlcyIsInB1c2giLCJoYW5kbGVDbGljayIsInJlbmRlckF0dGVuZGFuY2UiLCJsaSIsImxhdGVzdEF0dGVuZGFuY2VUaW1lIiwibGF0ZXN0QXR0ZW5kYW5jZVN0YXR1cyIsImxhdGVzdERlcGFydHVyZVRpbWUiLCJ0aW1lRGlmZiIsImRpZmYiLCJEYXRlIiwiTWF0aCIsImZsb29yIiwicGFzdEF0dGVuZGFuY2VzIiwic2xpY2UiLCJkaXYiLCJoMyIsInAiLCJ1bCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhyZWYiLCJoMiIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsIm9uQ2xpY2siLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin.js\n"));

/***/ })

});