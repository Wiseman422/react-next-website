webpackHotUpdate("static/development/pages/home/login.js",{

/***/ "./pages/home/login.js":
/*!*****************************!*\
  !*** ./pages/home/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/services */ "./services/services.js");










var _jsxFileName = "/Volumes/work/so-website/pages/home/login.js";





 // import '../../static/style.scss'

var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_14__["Cookies"]();

var Login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Login, _Component);

  function Login(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Login);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Login).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onLoginClick",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$state, email, password, router, params, response, token;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, email = _this$state.email, password = _this$state.password;
              router = _this.props.router;
              params = {
                username: email,
                password: password
              };
              _context.next = 5;
              return Object(_services_services__WEBPACK_IMPORTED_MODULE_15__["login"])(params);

            case 5:
              response = _context.sent;
              console.log(response);
              console.log(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(response));

              if (response !== undefined && response.status === 201) {
                token = response.data.accessToken;
                cookies.set('token', token);
                console.log(token);
                router.push("/");
              } else {
                console.log("login failed");
              }

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      email: "",
      password: "",
      token: cookies.get('token') || null
    }; // console.log(cookies.get('token'));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      loadCarousel();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "stylesheet",
        href: "../static/css/theme.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("header", {
        id: "header",
        className: "u-header u-header--bg-transparent u-header--abs-top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "u-header__section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "logoAndNav",
        className: "container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("nav", {
        className: "navbar navbar-expand u-header__navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "d-none d-lg-flex navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-text-white",
        "aria-label": "Front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "u-header__navbar-brand-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "SolveOnline"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "d-flex d-lg-none navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed",
        "aria-label": "Front",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "d-inline-block u-header__navbar-brand-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "SolveOnline"))))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("main", {
        id: "content",
        role: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "d-flex align-items-center position-relative height-lg-100vh",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "col-lg-5 col-xl-4 d-none d-lg-flex align-items-center gradient-half-primary-v1 height-lg-100vh px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "w-100 p-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("figure", {
        className: "text-center mb-5 mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "testimonialsNavMain",
        className: "js-slick-carousel u-slick mb-4",
        "data-infinite": "true",
        "data-autoplay": "true",
        "data-speed": "5000",
        "data-fade": "true",
        "data-nav-for": "#testimonialsNavPagination",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "w-md-80 w-lg-60 text-center mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "h5 text-white font-weight-normal mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "The template is really nice and offers quite a large set of options. Thank you!"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        className: "h6 text-white-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Maria Muszynska, Google"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "w-md-80 w-lg-60 text-center mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "h5 text-white font-weight-normal mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "It's beautiful and the coding is done quickly and seamlessly. Keep it up!"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "h6 text-white-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "James Austin, Slack"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "w-md-80 w-lg-60 text-center mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "h5 text-white font-weight-normal mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "I love SolveOnline! I love the ease of use, I love the fact that I have total creative freedom..."), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h3", {
        className: "h6 text-white-70",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Charlotte Moore, Amazon")))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "testimonialsNavPagination",
        className: "js-slick-carousel u-slick u-slick--transform-off u-slick--pagination-modern u-slick--transform-off mx-auto",
        "data-infinite": "true",
        "data-autoplay": "true",
        "data-speed": "5000",
        "data-center-mode": "true",
        "data-slides-show": "3",
        "data-is-thumbs": "true",
        "data-focus-on-select": "true",
        "data-nav-for": "#testimonialsNavMain",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "u-avatar mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "img-fluid rounded-circle",
        src: "../../static/img/100x100/img1.jpg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "u-avatar mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "img-fluid rounded-circle",
        src: "../../static/img/100x100/img3.jpg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-slide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "u-avatar mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "img-fluid rounded-circle",
        src: "../../static/img/100x100/img2.jpg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "position-absolute right-0 bottom-0 left-0 text-center p-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h4", {
        className: "h6 text-white-70 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "SolveOnline partners"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mx-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "u-clients",
        src: "../../static/img/slack-white.svg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mx-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "u-clients",
        src: "../../static/img/google-white.svg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mx-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("img", {
        className: "u-clients",
        src: "../../static/img/spotify-white.svg",
        alt: "Image Description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "row no-gutters",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3 space-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("form", {
        className: "js-validate mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "mb-7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
        className: "h3 text-primary font-weight-normal mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Welcome ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "font-weight-semi-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "back")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "Login to manage your account.")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-form-message form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        className: "form-label",
        htmlFor: "signinSrEmail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Email address"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        className: "form-control",
        name: "email",
        id: "signinSrEmail",
        placeholder: "Email address",
        "aria-label": "Email address",
        required: true,
        "data-msg": "Please enter a valid email address.",
        "data-error-class": "u-has-error",
        "data-success-class": "u-has-success",
        value: this.state.email,
        onChange: function onChange(e) {
          return _this2.setState({
            email: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "js-form-message form-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("label", {
        className: "form-label",
        htmlFor: "signinSrPassword",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "d-flex justify-content-between align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Password", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "link-muted text-capitalize font-weight-normal",
        href: "recover-account.html",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, "Forgot Password?"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        id: "signinSrPassword",
        placeholder: "********",
        "aria-label": "********",
        required: true,
        "data-msg": "Your password is invalid. Please try again.",
        "data-error-class": "u-has-error",
        "data-success-class": "u-has-success",
        value: this.state.password,
        onChange: function onChange(e) {
          return _this2.setState({
            password: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "row align-items-center mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "col-5 col-sm-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "small text-muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Don't have an account? "), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
        href: "/home/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
        className: "small",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, " Signup"))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "col-7 col-sm-6 text-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("button", {
        type: "button",
        onClick: this.onLoginClick,
        className: "btn btn-primary transition-3d-hover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Get Started"))))))))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Login));

/***/ })

})
//# sourceMappingURL=login.js.b60f45a63478a736fa76.hot-update.js.map