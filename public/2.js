(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/assets/images/logo-dark.png":
/*!**************************************************!*\
  !*** ./resources/js/assets/images/logo-dark.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-dark.png?e58586aee4454e89ecf85b7a4bf27702";

/***/ }),

/***/ "./resources/js/assets/images/logo-sm.png":
/*!************************************************!*\
  !*** ./resources/js/assets/images/logo-sm.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo-sm.png?06c34a3a6f2aa24e83bd0f567f29788a";

/***/ }),

/***/ "./resources/js/components/NotificationDropdown.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/NotificationDropdown.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;


var notificationContainerStyle = {
  'maxHeight': '230px'
};

var NotificationDropdown = function NotificationDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
    isOpen: _this.state.dropdownOpen,
    toggle: _this.toggleDropdown,
    className: "notification-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownToggle, {
    "data-toggle": "dropdown",
    tag: "button",
    className: "nav-link dropdown-toggle  waves-effect waves-light btn btn-link",
    onClick: _this.toggleDropdown,
    "aria-expanded": _this.state.dropdownOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-bell noti-icon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-danger rounded-circle noti-icon-badge"
  }, "9")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
    right: true,
    className: "dropdown-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: _this.toggleDropdown
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-item noti-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/notifications",
    className: "text-dark"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Clear All"))), "Notification")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PerfectScrollbar, {
    style: notificationContainerStyle
  }, _this.props.notifications.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      to: _this.getRedirectUrl(item),
      className: "dropdown-item notify-item",
      key: i + "-noti"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "notify-icon bg-".concat(item.bgColor)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: item.icon
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "notify-details"
    }, item.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      className: "text-muted"
    }, item.subText)));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item text-center text-primary notify-item notify-all"
  }, "View All"))));
};

/* harmony default export */ __webpack_exports__["default"] = (NotificationDropdown);

/***/ }),

/***/ "./resources/js/components/ProfileDropdown.js":
/*!****************************************************!*\
  !*** ./resources/js/components/ProfileDropdown.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;



var ProfileDropdown = function ProfileDropdown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dropdown, {
    isOpen: _this.state.dropdownOpen,
    toggle: _this.toggleDropdown,
    className: "notification-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownToggle, {
    "data-toggle": "dropdown",
    tag: "button",
    className: "btn btn-link nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light",
    onClick: _this.toggleDropdown,
    "aria-expanded": _this.state.dropdownOpen
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: profilePic,
    className: "rounded-circle",
    alt: "user"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "pro-user-name ml-1"
  }, _this.props.username, "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-chevron-down"
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
    right: true,
    className: "topbar-dropdown-menu profile-dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: _this.toggleDropdown
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropdown-header noti-title"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "text-overflow m-0"
  }, "Welcome !")), _this.props.menuItems.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: i + "-profile-menu"
    }, item.hasDivider ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownItem, {
      divider: true
    }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      to: item.redirectTo,
      className: "dropdown-item notify-item"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "".concat(item.icon, " mr-1")
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item.label)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileDropdown);

/***/ }),

/***/ "./resources/js/components/Topbar.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Topbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NotificationDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationDropdown */ "./resources/js/components/NotificationDropdown.js");
/* harmony import */ var _ProfileDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileDropdown */ "./resources/js/components/ProfileDropdown.js");
/* harmony import */ var _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo-sm.png */ "./resources/js/assets/images/logo-sm.png");
/* harmony import */ var _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/logo-dark.png */ "./resources/js/assets/images/logo-dark.png");
/* harmony import */ var _assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/users/user-1.jpg */ "./resources/js/assets/images/users/user-1.jpg");
/* harmony import */ var _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined;







var Notifications = [{
  id: 1,
  text: 'Caleb Flakelar commented on Admin',
  subText: '1 min ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'primary'
}, {
  id: 2,
  text: 'New user registered.',
  subText: '5 min ago',
  icon: 'mdi mdi-account-plus',
  bgColor: 'info'
}, {
  id: 3,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'success'
}, {
  id: 4,
  text: 'Caleb Flakelar commented on Admin',
  subText: '2 days ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'danger'
}, {
  id: 5,
  text: 'Caleb Flakelar commented on Admin',
  subText: '1 min ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'primary'
}, {
  id: 6,
  text: 'New user registered.',
  subText: '5 min ago',
  icon: 'mdi mdi-account-plus',
  bgColor: 'info'
}, {
  id: 7,
  text: 'Cristina Pride',
  subText: 'Hi, How are you? What about our next meeting',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'success'
}, {
  id: 8,
  text: 'Caleb Flakelar commented on Admin',
  subText: '2 days ago',
  icon: 'mdi mdi-comment-account-outline',
  bgColor: 'danger'
}];
var ProfileMenus = [{
  label: 'My Account',
  icon: 'fe-user',
  redirectTo: "/"
}, {
  label: 'Settings',
  icon: 'fe-settings',
  redirectTo: "/"
}, {
  label: 'Lock Screen',
  icon: 'fe-lock',
  redirectTo: "/"
}, {
  label: 'Logout',
  icon: 'fe-log-out',
  redirectTo: "/logout",
  hasDivider: true
}];

var Topbar = function Topbar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-custom"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled topnav-menu float-right mb-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown notification-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    className: classNames('navbar-toggle', 'nav-link', {
      'open': _this.props.isMenuOpened
    }),
    to: "#",
    onClick: _this.props.menuToggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "lines"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "d-none d-sm-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "app-search"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-search-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Search..."
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "input-group-append"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn",
    type: "submit"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-search"
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotificationDropdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
    notifications: Notifications
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfileDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    profilePic: _assets_images_users_user_1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    menuItems: ProfileMenus,
    username: 'Nik Patel'
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown notification-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link nav-link right-bar-toggle waves-effect waves-light",
    onClick: _this.props.rightSidebarToggle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-settings noti-icon"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "logo text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "logo-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_dark_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    height: "18"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "logo-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_sm_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    height: "24"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled topnav-menu topnav-menu-left m-0"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "dropdown d-none d-lg-block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UncontrolledDropdown, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownToggle, {
    "data-toggle": "dropdown",
    tag: "button",
    className: "btn btn-link nav-link dropdown-toggle waves-effect waves-light"
  }, "Create New", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "mdi mdi-chevron-down"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownMenu, {
    right: true,
    className: "dropdown-menu-animated topbar-dropdown-menu profile-dropdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-briefcase mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "New Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-user mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Create Users")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-bar-chart-line- mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Revenue Report")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-settings mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropdownItem, {
    divider: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    to: "/",
    className: "dropdown-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fe-headphones mr-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Help & Support")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (connect()(Topbar));

/***/ })

}]);