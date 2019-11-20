(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/assets/images/users/user-1.jpg":
/*!*****************************************************!*\
  !*** ./resources/js/assets/images/users/user-1.jpg ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/user-1.jpg?d07d42a7f517328005890d7931a10332";

/***/ }),

/***/ "./resources/js/components/AuthLayout.js":
/*!***********************************************!*\
  !*** ./resources/js/components/AuthLayout.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/users/user-1.jpg */ "./resources/js/assets/images/users/user-1.jpg");
/* harmony import */ var _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined;


 // code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52

var Topbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./Topbar */ "./resources/js/components/Topbar.js"));
});
var Navbar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ./Navbar */ "./resources/js/components/Navbar.js", 7));
});
var RightSidebar = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! ./RightSidebar */ "./resources/js/components/RightSidebar.js", 7));
});
var Footer = react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Footer */ "./resources/js/components/Footer.js"));
});

var loading = function loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  });
};

var RightSidebarContent = function RightSidebarContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "user-img",
    title: "Nik Patel",
    className: "rounded-circle img-fluid"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "user-edit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-pencil"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, props.user && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, props.user.username)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Founder")));
};

var AuthLayout = function AuthLayout(props) {
  // get the child view which we would like to render
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    id: "topnav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading()
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Topbar, {
    rightSidebarToggle: _this.toggleRightSidebar,
    menuToggle: _this.toggleMenu,
    isMenuOpened: _this.state.isMenuOpened
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navbar, {
    isMenuOpened: _this.state.isMenuOpened
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: loading()
  }, children))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightSidebar, {
    title: "Settings"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RightSidebarContent, {
    user: _this.props.user
  })));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.Auth.user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (connect(mapStateToProps, null)(AuthLayout));

/***/ })

}]);