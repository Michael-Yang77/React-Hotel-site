(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8e3:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},5646:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(7294))&&n.__esModule?n:{default:n},a=r(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},2717:function(e,t,r){"use strict";var n=r(930);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=f,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294)),c=(a=r(1585))&&a.__esModule?a:{default:a},s=r(8e3),u=r(5850),l=r(5646);function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var l=d[s];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],p=n[l]||new Set;"name"===l&&i||!p.has(f)?(p.add(f),n[l]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,r=i.useContext(s.AmpStateContext),n=i.useContext(u.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:h,headManager:n,inAmpMode:l.isInAmpMode(r)},t)};t.default=v},1585:function(e,t,r){"use strict";var n=r(7980),o=r(3227),a=r(8361),i=(r(2191),r(5971)),c=r(2715),s=r(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(7294));var f=function(e){i(r,e);var t=u(r);function r(e){var a;return o(this,r),(a=t.call(this,e)).emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);t.default=f},6715:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(9499),o=r(9008),a=r(7294),i=r(5893),c=function(){return(0,i.jsxs)("div",{id:"preloader",className:"preloader",children:[(0,i.jsx)("div",{className:"animation-preloader",children:(0,i.jsx)("div",{className:"spinner"})}),(0,i.jsx)("div",{className:"loader",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"col-3 loader-section section-left",children:(0,i.jsx)("div",{className:"bg"})}),(0,i.jsx)("div",{className:"col-3 loader-section section-left",children:(0,i.jsx)("div",{className:"bg"})}),(0,i.jsx)("div",{className:"col-3 loader-section section-right",children:(0,i.jsx)("div",{className:"bg"})}),(0,i.jsx)("div",{className:"col-3 loader-section section-right",children:(0,i.jsx)("div",{className:"bg"})})]})})]})};r(906);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.Component,r=e.pageProps,n=(0,a.useState)(!0),s=n[0],l=n[1];return(0,a.useEffect)((function(){setTimeout((function(){l(!1)}),2e3)}),[]),(0,i.jsxs)(a.Fragment,{children:[s&&(0,i.jsx)(c,{}),(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:"Kingho Hotel & Resort React NextJS Template"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,i.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,i.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap",rel:"stylesheet"}),(0,i.jsx)("link",{rel:"shortcut icon",href:"assets/images/favicon.png",type:"image/x-icon"}),(0,i.jsx)("link",{rel:"icon",href:"assets/images/favicon.png",type:"image/x-icon"})]}),(0,i.jsx)(t,u({},r))]})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6715)}])},906:function(){},9008:function(e,t,r){e.exports=r(2717)},9499:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(9898)}));var r=e.O();_N_E=r}]);