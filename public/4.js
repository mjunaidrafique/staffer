(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Navbar.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Navbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;



var NavMenuContent = function NavMenuContent(props) {
  var onMenuClickCallback = props.onMenuClickCallback;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navigation-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "has-submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    "aria-expanded": "true",
    onClick: onMenuClickCallback
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-airplay"
  }), "Dashboards", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-1 arrow-down"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/dashboard",
    className: "side-nav-link-ref"
  }, "Dashboard 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/dashboard2",
    className: "side-nav-link-ref"
  }, "Dashboard 2")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "has-submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    onClick: onMenuClickCallback
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-folder-plus"
  }), "Multi Level", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-1 arrow-down"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "side-nav-link-ref"
  }, "Level 1.1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "has-submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    onClick: onMenuClickCallback
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "arrow-down"
  }), "Level 1.2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "submenu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "side-nav-link-ref"
  }, "Level 2.1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "side-nav-link-ref"
  }, "Level 2.1")))))));
};

var Navbar = function Navbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "topbar-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Collapse, {
    isOpen: _this.props.isMenuOpened,
    id: "navigation"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavMenuContent, {
    onMenuClickCallback: _this.onMenuClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "clearfix"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (withRouter(connect()(Navbar)));

/***/ })

}]);