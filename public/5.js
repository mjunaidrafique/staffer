(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./resources/js/components/RightSidebar.js":
/*!*************************************************!*\
  !*** ./resources/js/components/RightSidebar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;



var RightSideBar = function RightSideBar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-bar",
    ref: function ref(node) {
      return _this.rightBarNodeRef = node;
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rightbar-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "#",
    className: "right-bar-toggle float-right",
    onClick: _this.handleClose
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "dripicons-cross noti-icon"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "m-0 text-white"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PerfectScrollbar, null, component)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rightbar-overlay"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (connect()(RightSideBar));

/***/ })

}]);