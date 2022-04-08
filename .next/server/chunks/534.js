"use strict";
exports.id = 534;
exports.ids = [534];
exports.modules = {

/***/ 8534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8403);
/* harmony import */ var react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apexcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




class DonutChart extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(props) {
    super(props);
    this.state = {
      series: [this.props.value],
      options: {
        chart: {
          height: 150,
          type: "radialBar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          radialBar: {
            hollow: {
              show: false,
              margin: 20,
              size: "90%",
              background: "#fff",
              dropShadow: {
                enabled: false
              }
            },
            track: {
              background: "#F8F8F8",
              strokeWidth: "100%",
              margin: 0 // margin is in pixels

            },
            dataLabels: {
              show: false,
              value: {
                offsetY: -7,
                color: "#111",
                fontSize: "20px",
                show: true
              }
            }
          }
        },
        fill: {
          colors: ["#be9a78", "#F1F1F1"]
        },
        stroke: {},
        labels: [""]
      }
    };
  }

  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      id: "chart",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_apexcharts__WEBPACK_IMPORTED_MODULE_1___default()), {
        options: this.state.options,
        series: this.state.series,
        type: "radialBar",
        height: 150
      })
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DonutChart);

/***/ })

};
;