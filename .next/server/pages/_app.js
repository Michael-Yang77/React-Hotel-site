"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/PreLoader.js




const PreLoader = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "preloader",
    className: "preloader",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "animation-preloader",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "spinner"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "loader",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-3 loader-section section-left",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-3 loader-section section-left",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-3 loader-section section-right",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-3 loader-section section-right",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "bg"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const components_PreLoader = (PreLoader);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  const {
    0: loader,
    1: setLoader
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [loader && /*#__PURE__*/jsx_runtime_.jsx(components_PreLoader, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Kingho Hotel & Resort React NextJS Template"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: true
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        href: "assets/images/favicon.png",
        type: "image/x-icon"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "assets/images/favicon.png",
        type: "image/x-icon"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4898));
module.exports = __webpack_exports__;

})();