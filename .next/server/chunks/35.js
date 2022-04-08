"use strict";
exports.id = 35;
exports.ids = [35];
exports.modules = {

/***/ 2961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




let useClickOutside = handler => {
  let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const ImgViews = ({
  close,
  src
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
              className: "mfp-img",
              src: src
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const ImageView = () => {
  const {
    0: img,
    1: setImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: imgValue,
    1: setImgValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const a = document.querySelectorAll("a");
    a.forEach(a => {
      if (a.href.includes("assets/")) {
        a.addEventListener("click", e => {
          e.preventDefault();
          setImgValue(a.href);
          setImg(true);
        });
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: img && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ImgViews, {
      close: () => setImg(false),
      src: imgValue
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageView);

/***/ }),

/***/ 9796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ScrollTop = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let scrollUp = document.getElementById("scroll-top");
    window.addEventListener("scroll", () => {
      let st = window.scrollY;

      if (st > 110) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "scroll-to-top scroll-to-target",
    id: "scroll-top",
    "data-target": "html",
    onClick: () => onClick(),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      className: "fas fa-arrow-up"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);

/***/ }),

/***/ 5436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




let useClickOutside = handler => {
  let domNode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const VideoPopup_ = ({
  close,
  videoID
}) => {
  let domNode = useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("iframe", {
              src: "https://www.youtube.com/embed/nfP5N9Yc72A?autoplay=1",
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const VideoPopup = () => {
  const {
    0: video,
    1: setVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: videoValue,
    1: setVideoValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const a = document.querySelectorAll("a");
    a.forEach(a => {
      if (a.href.includes("https://www.youtube.com")) {
        a.addEventListener("click", e => {
          e.preventDefault();
          setVideoValue(a.href);
          setVideo(true);
        });
      }
    });
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: video && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(VideoPopup_, {
      close: () => setVideo(false),
      videoID: videoValue
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPopup);

/***/ }),

/***/ 3035:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(421);
/* harmony import */ var niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ImageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2961);
/* harmony import */ var _components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9796);
/* harmony import */ var _components_VideoPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5436);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1939);
/* harmony import */ var _footers_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6766);
/* harmony import */ var _headers_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2333);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_footers_Footer__WEBPACK_IMPORTED_MODULE_5__]);
_footers_Footer__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// import { niceSelect } from "niceselectwithsabuj";
// import niceSelect from "niceselectwithsabuj";











const Layouts = ({
  children,
  noBg,
  extraCls,
  noHeader,
  noFooter,
  headernumber
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .animation */ .oQ)();
    niceselectwithsabuj__WEBPACK_IMPORTED_MODULE_0___default()({
      withoutwide: true
    });
    window.addEventListener("scroll", _utils__WEBPACK_IMPORTED_MODULE_8__/* .stickyNav */ .h4);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "page-wrapper",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ImageView__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_VideoPopup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), !noHeader && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_headers_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      headernumber: headernumber
    }), children, !noFooter && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_footers_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      noBg: noBg,
      extraCls: extraCls
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ScrollTop__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layouts);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6766:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _sliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4084);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _sliderProps__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _sliderProps__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Footer = ({
  noBg,
  extraCls
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("footer", {
    className: `main-footer ${extraCls ? extraCls : "style-two"}`,
    style: {
      background: noBg ? null : `url(assets/images/background/bg-1.jpg)`
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "auto-container",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "widget-wrapper",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "footer-logo",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: "assets/images/footer-logo.png",
                alt: ""
              })
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "column col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "widget links-widget",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                children: "Pages"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "About"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Approach"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "People"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Reviews"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Insights"
                      })
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "col-sm-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Services"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Our Menus"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Shop"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                        href: "#",
                        children: "Contacts"
                      })
                    })]
                  })
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "widget text-widget",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                children: "Our Awards"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "text",
                children: ["When your people get up every day ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), " wanting to come to work."]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                      src: "assets/images/resource/image-15.png",
                      alt: ""
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                      src: "assets/images/resource/image-16.png",
                      alt: ""
                    })
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: "col-sm-4",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    className: "logo",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                      src: "assets/images/resource/image-17.png",
                      alt: ""
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "col-lg-3 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "widget contact-widget",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
                children: "Get In Touch"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: "text",
                children: "Welcome to Alloggio, where comfort is everything."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "fal fa-phone"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    href: "tel:90809875769",
                    children: "908-098-757-69"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "fal fa-envelope"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                    href: "mailto:info@webmail.com",
                    children: "info@webmail.com"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
                    className: "fal fa-map-marker-alt"
                  }), " 13/A, Miranda City Hall, NYC"]
                })]
              })]
            })
          })]
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "footer-bottom",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "auto-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "wrapper-box",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "copyright",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "text",
              children: "Copyright Kingho. All right reserved."
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "brand-logo",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, _objectSpread(_objectSpread({}, _sliderProps__WEBPACK_IMPORTED_MODULE_2__/* .footerSlider */ .YE), {}, {
              className: "theme_carousel swiper-container",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "logo",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  src: "assets/images/resource/image-18.png",
                  alt: ""
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "logo",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  src: "assets/images/resource/image-19.png",
                  alt: ""
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                className: "logo",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                  src: "assets/images/resource/image-20.png",
                  alt: ""
                })
              })]
            }))
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ headers_Header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/layouts/Search.js




const Search = ({
  open,
  closeSidebar
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    id: "search-popup",
    className: `search-popup ${open ? "popup-visible" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "close-search theme-btn",
      onClick: () => closeSidebar(),
      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
        className: "far fa-times"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "popup-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "overlay-layer",
        onClick: () => closeSidebar()
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "search-form",
        children: /*#__PURE__*/jsx_runtime_.jsx("form", {
          method: "post",
          onSubmit: e => e.preventDefault(),
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/jsx_runtime_.jsx("fieldset", {
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "search",
                className: "form-control",
                name: "search-input",
                defaultValue: "",
                placeholder: "Type & Enter",
                required: ""
              })
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const layouts_Search = (Search);
;// CONCATENATED MODULE: ./src/layouts/Sidebar.js




const Sidebar = ({
  open,
  closeSidebar
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: `hidden-sidebar  ${open ? "active-sidebar" : "close-sidebar"}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "wrapper-box",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "content-wrapper",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden-sidebar-close",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "flaticon-remove",
            onClick: () => closeSidebar()
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "about-widget widget",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "assets/images/logo-light.png",
              alt: ""
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: "We Have Over 40 Payment Ways for Locking the Lowest Room Rates. No Credit Card Needed! Read Reviews from Verified Guests."
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "instagram-widget widget",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Instagram Feeds"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "inner-box",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "wrapper-box",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-2.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-1.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-3.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-2.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-4.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-3.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-5.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-4.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-6.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-5.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-7.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-6.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-8.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-7.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins-9.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-8.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "image",
                children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/news/news-ins.jpg",
                  alt: ""
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "overlay-link",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "assets/images/gallery/instagram-1.jpg",
                    className: "lightbox-image",
                    "data-fancybox": "gallery",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "fa fa-plus"
                    })
                  })
                })]
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "widget contact-widget",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
            children: "Get In Touch"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text",
            children: "Welcome to Alloggio, where comfort is everything."
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-phone"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "tel:90809875769",
                children: "908-098-757-69"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-envelope"
              }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "mailto:info@webmail.com",
                children: "info@webmail.com"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "fal fa-map-marker-alt"
              }), " 13/A, Miranda City Hall, NYC"]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const layouts_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./src/layouts/headers/Menu.js
var Menu = __webpack_require__(1386);
// EXTERNAL MODULE: ./src/layouts/headers/MobileHeader.js
var MobileHeader = __webpack_require__(6650);
;// CONCATENATED MODULE: ./src/layouts/headers/Header.js









const Header = ({
  headernumber
}) => {
  const {
    0: sidebarTrigger,
    1: setSidebarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: searchBarTrigger,
    1: setSearchBarTrigger
  } = (0,external_react_.useState)(false);
  const {
    0: mobileHeader,
    1: setMobileHeader
  } = (0,external_react_.useState)(false);

  const mobileHeaderTrigger = () => {
    setMobileHeader(!mobileHeader);

    if (mobileHeader) {
      document.querySelector("body").classList.add("mobile-menu-visible");
    } else {
      document.querySelector("body").classList.remove("mobile-menu-visible");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: `main-header header-style-one ${headernumber ? "" : "style-two"}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-top",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "wrapper-box box-style-one",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "left-column",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "contact-info box-style-two",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "mailto:info@webmail.com",
                    children: "info@webmail.com"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: "|"
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "tel:09806764956",
                    children: "098-067-649-56"
                  })
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "right-column box-style-two",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "login",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "#",
                  children: "Login"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "social-icon box-style-two",
                children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: " fb."
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: " tw."
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: " be."
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: " yu."
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#",
                    children: " ln."
                  })
                })]
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "auto-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "logo-box main-logo",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "logo",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/logo.png",
                    alt: ""
                  })
                })
              })
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-upper",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "auto-container",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "inner-container",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "nav-outer",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mobile-nav-toggler",
                onClick: () => mobileHeaderTrigger(),
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/icons/icon-bar.png",
                  alt: ""
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                className: "main-menu navbar-expand-md navbar-light",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "collapse navbar-collapse show clearfix",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                    className: "navigation",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "dropdown",
                      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: "Home"
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Home */.SK, {})
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/about",
                        children: "About Us "
                      })
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "dropdown",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Rooms"
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Room */.du, {})
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "dropdown",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Pages"
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Pages */.iY, {})
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      className: "dropdown",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                        href: "#",
                        children: "Blog"
                      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Blog */.l3, {})
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                        href: "/contact",
                        children: "Contact"
                      })
                    })]
                  })
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "right-column",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "search-toggler",
                children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: "far fa-search",
                  onClick: () => setSearchBarTrigger(true)
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "menu-bar sidemenu-nav-toggler",
                children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                  src: "assets/images/icons/icon-bar3.png",
                  alt: "",
                  onClick: () => setSidebarTrigger(true)
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "sticky-header",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "header-upper",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "auto-container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "inner-container",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "nav-outer",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "mobile-nav-toggler",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/icons/icon-bar.png",
                    alt: ""
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
                  className: "main-menu navbar-expand-md navbar-light",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "collapse navbar-collapse show clearfix",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      className: "navigation",
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                          href: "/",
                          children: "Home"
                        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Home */.SK, {})
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "dropdown-btn",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "fa fa-angle-right"
                          })
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                          href: "/about",
                          children: "About Us "
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Rooms"
                        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Room */.du, {})
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "dropdown-btn",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "fa fa-angle-right"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Pages"
                        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Pages */.iY, {})
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "dropdown-btn",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "fa fa-angle-right"
                          })
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                        className: "dropdown",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                          href: "#",
                          children: "Blog"
                        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
                          children: /*#__PURE__*/jsx_runtime_.jsx(Menu/* Blog */.l3, {})
                        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "dropdown-btn",
                          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: "fa fa-angle-right"
                          })
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                          href: "/contact",
                          children: "Contact"
                        })
                      })]
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "right-column",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "search-toggler",
                  onClick: () => setSearchBarTrigger(true),
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "far fa-search"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "menu-bar sidemenu-nav-toggler",
                  onClick: () => setSidebarTrigger(true),
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/images/icons/icon-bar3.png",
                    alt: ""
                  })
                })]
              })]
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(MobileHeader/* default */.Z, {
        closeMobileHeader: () => mobileHeaderTrigger()
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "nav-overlay",
        style: {
          display: sidebarTrigger ? "block" : "none"
        },
        onClick: () => setSidebarTrigger(false),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "cursor-follower"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(layouts_Sidebar, {
      open: sidebarTrigger,
      closeSidebar: () => setSidebarTrigger(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(layouts_Search, {
      open: searchBarTrigger,
      closeSidebar: () => setSearchBarTrigger(false)
    })]
  });
};

/* harmony default export */ const headers_Header = (Header);

/***/ }),

/***/ 1386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SK": () => (/* binding */ Home),
/* harmony export */   "du": () => (/* binding */ Room),
/* harmony export */   "iY": () => (/* binding */ Pages),
/* harmony export */   "l3": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Home = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/",
      children: "Home One"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/index-2",
      children: "Home Two"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/index-3",
      children: "Home Three"
    })
  })]
});
const Room = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/room-grid",
      children: "Room Grid Style"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/room-list",
      children: "Room List Style"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/room-details",
      children: "Room Details"
    })
  })]
});
const Pages = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/services",
      children: "Services"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/restaurant",
      children: "Restaurant"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/gallery",
      children: "Gallery"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/offers",
      children: "Offers"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/menu",
      children: "Menu"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/places",
      children: "Places"
    })
  })]
});
const Blog = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/blog",
      children: "Blog"
    })
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("li", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
      href: "/blog-details",
      children: "Blog Details"
    })
  })]
});

/***/ }),

/***/ 6650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1386);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const MobileHeader = ({
  closeMobileHeader
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: activeMenu,
    1: setActiveMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const activeMenuSet = value => setActiveMenu(activeMenu === value ? "" : value),
        activeLi = value => value === activeMenu ? {
    display: "block"
  } : {
    display: "none"
  },
        activeIcon = value => value === activeMenu ? "open" : "";

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "mobile-menu",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "menu-backdrop"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "close-btn",
      onClick: () => closeMobileHeader(),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
        className: "icon far fa-times"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("nav", {
      className: "menu-box",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "nav-logo",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
          href: "/",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: "assets/images/logo-light.png",
              alt: "",
              title: ""
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "menu-outer",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "collapse navbar-collapse show clearfix",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
            className: "navigation",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              className: "dropdown current",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "/",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  children: "Home"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                style: activeLi("Home"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Home */ .SK, {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: `dropdown-btn ${activeIcon("Home")}`,
                onClick: () => activeMenuSet("Home"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "fa fa-angle-right"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "/about",
                children: "About Us "
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              className: "dropdown",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "#",
                children: "Rooms"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                style: activeLi("Rooms"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Room */ .du, {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: `dropdown-btn ${activeIcon("Rooms")}`,
                onClick: () => activeMenuSet("Rooms"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "fa fa-angle-right"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              className: "dropdown",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "#",
                children: "Pages"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                style: activeLi("Pages"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Pages */ .iY, {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: `dropdown-btn ${activeIcon("Pages")}`,
                onClick: () => activeMenuSet("Pages"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "fa fa-angle-right"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
              className: "dropdown",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                href: "#",
                children: "Blog"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
                style: activeLi("Blog"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Menu__WEBPACK_IMPORTED_MODULE_2__/* .Blog */ .l3, {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: `dropdown-btn ${activeIcon("Blog")}`,
                onClick: () => activeMenuSet("Blog"),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: "fa fa-angle-right"
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_0__["default"], {
                href: "/contact",
                children: "Contact"
              })
            })]
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHeader);

/***/ }),

/***/ 4084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "To": () => (/* binding */ bannerSlider),
/* harmony export */   "dt": () => (/* binding */ feedBackSlider),
/* harmony export */   "YE": () => (/* binding */ footerSlider),
/* harmony export */   "iV": () => (/* binding */ sponsorsSlider),
/* harmony export */   "yk": () => (/* binding */ roomsSlider),
/* harmony export */   "fd": () => (/* binding */ imageSlider),
/* harmony export */   "A4": () => (/* binding */ testimonialSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade, swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay]);
const bannerSlider = {
  preloadImages: false,
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  resistance: true,
  resistanceRatio: 0.6,
  speed: 1400,
  spaceBetween: 0,
  parallax: false,
  effect: "slide",
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".banner-slider-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".banner-slider-button-next",
    prevEl: ".banner-slider-button-prev"
  }
};
const feedBackSlider = {
  spaceBetween: 100,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  }
};
const footerSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 30
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 30
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 30
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
};
const sponsorsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1
    },
    600: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 3
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 4
    },
    1000: {
      spaceBetween: 30,
      slidesPerView: 5
    }
  }
};
const roomsSlider = {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 30,
      slidesPerView: 2
    },
    1000: {
      spaceBetween: 30,
      slidesPerView: 3
    }
  }
};
const imageSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    600: {
      spaceBetween: 0,
      slidesPerView: 2
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 3
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 4
    },
    1600: {
      spaceBetween: 0,
      slidesPerView: 5
    }
  }
};
const testimonialSlider = {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    768: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    992: {
      spaceBetween: 0,
      slidesPerView: 1
    },
    1200: {
      spaceBetween: 0,
      slidesPerView: 3
    }
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1939:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* binding */ animation),
/* harmony export */   "h4": () => (/* binding */ stickyNav),
/* harmony export */   "oA": () => (/* binding */ pagination),
/* harmony export */   "ot": () => (/* binding */ getPagination)
/* harmony export */ });
/* unused harmony exports niceSelect, activeNavMenu */
const animation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".sticky-header");
  const headers = document.querySelectorAll("header");

  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];

    if (sticky) {
      if (offset > 60) {
        sticky.className = "sticky-header animated slideInDown";
        headers[0].classList.add("fixed-header");
      } else {
        sticky.className = "sticky-header";
        headers[0].classList.remove("fixed-header");
      }
    }
  }
};
const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};
const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort)).fill().map((_, idx) => idx + 1);
  return arr;
};
const niceSelect = ({
  withoutwide = undefined
} = {}) => {
  const select = document.querySelectorAll("select");
  select.forEach(element => {
    let option = element.querySelectorAll("option");

    function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    element.style.display = "none";
    var el = document.createElement("div");
    insertAfter(element, el);
    el.className = withoutwide ? "nice-select" : "nice-select wide";
    let span = document.createElement("span"),
        ul = document.createElement("ul");
    ul.classList.add("list");
    span.classList.add("current");
    el.appendChild(ul);
    el.appendChild(span);
    el.addEventListener("click", () => {
      el.classList.toggle("open");
    });
    document.addEventListener("click", e => {
      if (!el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
    option.forEach(opt => {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = opt.innerText;
      li.className = "option";
      let defultValue = opt.getAttribute("data-dsplay");
      let selected = opt.getAttribute("selected");
      let disabled = opt.getAttribute("disabled");

      if (defultValue || selected !== null || disabled !== null) {
        li.className = "option focus";
        span.innerText = opt.innerText;
      } else {
        span.innerText = option[0].innerText;
      }

      li.addEventListener("click", () => {
        if (disabled == null) {
          span.innerHTML = opt.innerText;
        }
      });
    });
  });
};
const activeNavMenu = path => {
  const navItem = document.querySelectorAll(".main-menu li a");
  navItem.forEach(nav => {
    if (nav.pathname === window.location.pathname) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/contact" || nav.pathname === "/about") {
          nav.className = "active";
        } else {
          let navContainer = nav.parentElement.parentElement.parentElement;
          nav.parentElement.parentElement.parentElement.classList.add("active");
        }
      }
    }
  });
};

/***/ })

};
;