(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/components/NonAuthLayout.js":
/*!**************************************************!*\
  !*** ./resources/js/components/NonAuthLayout.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

 // code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
// const Footer = React.lazy(() => import("./Footer"));
// loading

var loading = function loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, "Loading...");
};

var NonAuthLayout = function NonAuthLayout(props) {
  var children = _this.props.children || null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading()
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (connect()(NonAuthLayout));

/***/ })

}]);