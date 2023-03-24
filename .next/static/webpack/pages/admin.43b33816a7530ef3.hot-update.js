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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Admin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Admin.module.scss */ \"./styles/Admin.module.scss\");\n/* harmony import */ var _styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Admin(props) {\n    _s();\n    const [attendances, setAttendances] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedName, setSelectedName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [salaryInfo, setSalaryInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const keys = Object.keys(localStorage);\n        const allAttendances = [];\n        for(let i = 0; i < keys.length; i++){\n            const attendancesForPerson = JSON.parse(localStorage.getItem(keys[i]));\n            allAttendances.push({\n                name: keys[i],\n                attendances: Array.isArray(attendancesForPerson) ? attendancesForPerson : []\n            });\n        }\n        setAttendances(allAttendances);\n    }, []);\n    const handleNameChange = (event)=>{\n        setSelectedName(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const calculateSalaryInfo = ()=>{\n            const salaryMap = new Map();\n            attendances.forEach((person)=>{\n                const { name , attendances  } = person;\n                const totalTime = attendances.reduce((total, attendance)=>{\n                    const [_, status, time] = attendance.split(\",\");\n                    if (status === \"出勤\") {\n                        total.startTime = new Date(time);\n                    } else {\n                        const diff = new Date(time) - total.startTime;\n                        total.workTime += diff;\n                        total.startTime = null;\n                    }\n                    return total;\n                }, {\n                    startTime: null,\n                    workTime: 0\n                }).workTime;\n                const salary = totalTime / 3600000 * 1000;\n                salaryMap.set(name, {\n                    workTime: totalTime,\n                    salary\n                });\n            });\n            const salaryInfoList = Array.from(salaryMap.entries()).map((param)=>{\n                let [name, info] = param;\n                return {\n                    name,\n                    workTime: info.workTime,\n                    salary: info.salary.toLocaleString(\"ja-JP\", {\n                        style: \"currency\",\n                        currency: \"JPY\"\n                    })\n                };\n            });\n            setSalaryInfo(salaryInfoList);\n        };\n        calculateSalaryInfo();\n    }, [\n        attendances\n    ]);\n    const filteredAttendances = attendances.find((person)=>person.name === selectedName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().header),\n                children: \"出退勤情報一覧\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().attendances),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().filter),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"nameFilter\",\n                                children: \"名前で絞り込み:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"nameFilter\",\n                                value: selectedName,\n                                onChange: handleNameChange,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"すべて\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this),\n                                    attendances.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: person.name,\n                                            children: person.name\n                                        }, person.name, false, {\n                                            fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 15\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    filteredAttendances && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().attendance),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().personName),\n                                children: [\n                                    filteredAttendances.name,\n                                    \"さんの出退勤情報\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().attendanceList),\n                                children: filteredAttendances.attendances.map((attendance, index)=>{\n                                    const [name, status, time] = attendance.split(\",\");\n                                    const timeString = new Date(time).toLocaleString(\"ja-JP\");\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: status === \"出勤\" ? (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().start) : (_styles_Admin_module_scss__WEBPACK_IMPORTED_MODULE_2___default().end),\n                                                children: status\n                                            }, void 0, false, {\n                                                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 25\n                                            }, this),\n                                            timeString\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 23\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Desktop/thanks/pages/admin.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Admin, \"JhRqlKObPGjC6kRQSbbosnhXYg0=\");\n_c = Admin;\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzNCLDhEQUFDNkQ7Z0NBQU1DLFNBQVE7MENBQWE7Ozs7OzswQ0FDNUIsOERBQUNDO2dDQUFPQyxJQUFHO2dDQUFhdEMsT0FBT3JCO2dDQUFjNEQsVUFBVTFDOztrREFDckQsOERBQUMyQzt3Q0FBT3hDLE9BQU07a0RBQUc7Ozs7OztvQ0FDaEJ2QixZQUFZOEMsR0FBRyxDQUFDLENBQUNsQix1QkFDaEIsOERBQUNtQzs0Q0FBeUJ4QyxPQUFPSyxPQUFPWCxJQUFJO3NEQUN6Q1csT0FBT1gsSUFBSTsyQ0FERFcsT0FBT1gsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBTTdCa0MscUNBQ0csOERBQUNFO3dCQUFJQyxXQUFXekQsNkVBQWlCOzswQ0FDL0IsOERBQUN3RDtnQ0FBSUMsV0FBV3pELDZFQUFpQjs7b0NBQUdzRCxvQkFBb0JsQyxJQUFJO29DQUFDOzs7Ozs7OzBDQUMzRCw4REFBQ2dEO2dDQUFHWCxXQUFXekQsaUZBQXFCOzBDQUNqQ3NELG9CQUFvQm5ELFdBQVcsQ0FBQzhDLEdBQUcsQ0FBQyxDQUFDZCxZQUFZbUMsUUFBVTtvQ0FDMUQsTUFBTSxDQUFDbEQsTUFBTWlCLFFBQVFDLEtBQUssR0FBR0gsV0FBV0ksS0FBSyxDQUFDO29DQUM5QyxNQUFNZ0MsYUFBYSxJQUFJOUIsS0FBS0gsTUFBTWEsY0FBYyxDQUFDO29DQUNqRCxxQkFDRSw4REFBQ3FCOzswREFDQyw4REFBQ0M7Z0RBQUtoQixXQUFXcEIsV0FBVyxPQUFPckMsd0VBQVksR0FBR0Esc0VBQVU7MERBQUdxQzs7Ozs7OzRDQUM5RGtDOzt1Q0FGTUQ7Ozs7O2dDQUtiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPbEIsQ0FBQztHQTVGdUJyRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hZG1pbi5qcz84NWMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9BZG1pbi5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZG1pbihwcm9wcykge1xuICBjb25zdCBbYXR0ZW5kYW5jZXMsIHNldEF0dGVuZGFuY2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkTmFtZSwgc2V0U2VsZWN0ZWROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2FsYXJ5SW5mbywgc2V0U2FsYXJ5SW5mb10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKTtcbiAgICBjb25zdCBhbGxBdHRlbmRhbmNlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYXR0ZW5kYW5jZXNGb3JQZXJzb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleXNbaV0pKTtcbiAgICAgIGFsbEF0dGVuZGFuY2VzLnB1c2goeyBuYW1lOiBrZXlzW2ldLCBhdHRlbmRhbmNlczogQXJyYXkuaXNBcnJheShhdHRlbmRhbmNlc0ZvclBlcnNvbikgPyBhdHRlbmRhbmNlc0ZvclBlcnNvbiA6IFtdIH0pO1xuICAgIH1cbiAgICBzZXRBdHRlbmRhbmNlcyhhbGxBdHRlbmRhbmNlcyk7XG4gICAgXG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYWxjdWxhdGVTYWxhcnlJbmZvID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2FsYXJ5TWFwID0gbmV3IE1hcCgpO1xuICAgICAgYXR0ZW5kYW5jZXMuZm9yRWFjaCgocGVyc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgYXR0ZW5kYW5jZXMgfSA9IHBlcnNvbjtcbiAgICAgICAgY29uc3QgdG90YWxUaW1lID0gYXR0ZW5kYW5jZXMucmVkdWNlKCh0b3RhbCwgYXR0ZW5kYW5jZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IFtfLCBzdGF0dXMsIHRpbWVdID0gYXR0ZW5kYW5jZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gXCLlh7rli6RcIikge1xuICAgICAgICAgICAgdG90YWwuc3RhcnRUaW1lID0gbmV3IERhdGUodGltZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgRGF0ZSh0aW1lKSAtIHRvdGFsLnN0YXJ0VGltZTtcbiAgICAgICAgICAgIHRvdGFsLndvcmtUaW1lICs9IGRpZmY7XG4gICAgICAgICAgICB0b3RhbC5zdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgIH0sIHsgc3RhcnRUaW1lOiBudWxsLCB3b3JrVGltZTogMCB9KS53b3JrVGltZTtcblxuICAgICAgICBjb25zdCBzYWxhcnkgPSAodG90YWxUaW1lIC8gMzYwMDAwMCkgKiAxMDAwO1xuICAgICAgICBzYWxhcnlNYXAuc2V0KG5hbWUsIHsgd29ya1RpbWU6IHRvdGFsVGltZSwgc2FsYXJ5IH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNhbGFyeUluZm9MaXN0ID0gQXJyYXkuZnJvbShzYWxhcnlNYXAuZW50cmllcygpKS5tYXAoKFtuYW1lLCBpbmZvXSkgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgd29ya1RpbWU6IGluZm8ud29ya1RpbWUsXG4gICAgICAgIHNhbGFyeTogaW5mby5zYWxhcnkudG9Mb2NhbGVTdHJpbmcoXCJqYS1KUFwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIkpQWVwiIH0pLFxuICAgICAgfSkpO1xuXG4gICAgICBzZXRTYWxhcnlJbmZvKHNhbGFyeUluZm9MaXN0KTtcbiAgICB9O1xuXG4gICAgY2FsY3VsYXRlU2FsYXJ5SW5mbygpO1xuICB9LCBbYXR0ZW5kYW5jZXNdKTtcblxuICBjb25zdCBmaWx0ZXJlZEF0dGVuZGFuY2VzID0gYXR0ZW5kYW5jZXMuZmluZChcbiAgICAocGVyc29uKSA9PiBwZXJzb24ubmFtZSA9PT0gc2VsZWN0ZWROYW1lXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+5Ye66YCA5Yuk5oOF5aCx5LiA6KanPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dGVuZGFuY2VzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWx0ZXJ9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZUZpbHRlclwiPuWQjeWJjeOBp+e1nuOCiui+vOOBvzo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3QgaWQ9XCJuYW1lRmlsdGVyXCIgdmFsdWU9e3NlbGVjdGVkTmFtZX0gb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPuOBmeOBueOBpjwvb3B0aW9uPlxuICAgICAgICAgICAge2F0dGVuZGFuY2VzLm1hcCgocGVyc29uKSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtwZXJzb24ubmFtZX0gdmFsdWU9e3BlcnNvbi5uYW1lfT5cbiAgICAgICAgICAgICAgICB7cGVyc29uLm5hbWV9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZmlsdGVyZWRBdHRlbmRhbmNlcyAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF0dGVuZGFuY2V9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBlcnNvbk5hbWV9PntmaWx0ZXJlZEF0dGVuZGFuY2VzLm5hbWV944GV44KT44Gu5Ye66YCA5Yuk5oOF5aCxPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmF0dGVuZGFuY2VMaXN0fT5cbiAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZEF0dGVuZGFuY2VzLmF0dGVuZGFuY2VzLm1hcCgoYXR0ZW5kYW5jZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW25hbWUsIHN0YXR1cywgdGltZV0gPSBhdHRlbmRhbmNlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZVN0cmluZyA9IG5ldyBEYXRlKHRpbWUpLnRvTG9jYWxlU3RyaW5nKFwiamEtSlBcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdGF0dXMgPT09IFwi5Ye65YukXCIgPyBzdHlsZXMuc3RhcnQgOiBzdHlsZXMuZW5kfT57c3RhdHVzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lU3RyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBZG1pbiIsInByb3BzIiwiYXR0ZW5kYW5jZXMiLCJzZXRBdHRlbmRhbmNlcyIsInNlbGVjdGVkTmFtZSIsInNldFNlbGVjdGVkTmFtZSIsInNhbGFyeUluZm8iLCJzZXRTYWxhcnlJbmZvIiwia2V5cyIsIk9iamVjdCIsImxvY2FsU3RvcmFnZSIsImFsbEF0dGVuZGFuY2VzIiwiaSIsImxlbmd0aCIsImF0dGVuZGFuY2VzRm9yUGVyc29uIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInB1c2giLCJuYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJjYWxjdWxhdGVTYWxhcnlJbmZvIiwic2FsYXJ5TWFwIiwiTWFwIiwiZm9yRWFjaCIsInBlcnNvbiIsInRvdGFsVGltZSIsInJlZHVjZSIsInRvdGFsIiwiYXR0ZW5kYW5jZSIsIl8iLCJzdGF0dXMiLCJ0aW1lIiwic3BsaXQiLCJzdGFydFRpbWUiLCJEYXRlIiwiZGlmZiIsIndvcmtUaW1lIiwic2FsYXJ5Iiwic2V0Iiwic2FsYXJ5SW5mb0xpc3QiLCJmcm9tIiwiZW50cmllcyIsIm1hcCIsImluZm8iLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJmaWx0ZXJlZEF0dGVuZGFuY2VzIiwiZmluZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImhlYWRlciIsImZpbHRlciIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJwZXJzb25OYW1lIiwidWwiLCJhdHRlbmRhbmNlTGlzdCIsImluZGV4IiwidGltZVN0cmluZyIsImxpIiwic3BhbiIsInN0YXJ0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin.js\n"));

/***/ })

});