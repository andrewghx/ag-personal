(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/0+H":function(t,n,e){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var r=o(e("q1tI")),i=e("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.ampFirst,e=void 0!==n&&n,o=t.hybrid,r=void 0!==o&&o,i=t.hasQuery;return e||r&&(void 0!==i&&i)}n.isInAmpMode=a,n.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))}},0:function(t,n,e){e("74v/"),t.exports=e("nOHt")},"74v/":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("cha2")}])},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},"8Kt/":function(t,n,e){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var r=o(e("q1tI")),i=o(e("Xuae")),a=e("lwAK"),c=e("FYa8"),l=e("/0+H");function s(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[r.default.createElement("meta",{charSet:"utf-8"})];return t||n.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function u(t,n){return"string"===typeof n||"number"===typeof n?t:n.type===r.default.Fragment?t.concat(r.default.Children.toArray(n.props.children).reduce((function(t,n){return"string"===typeof n||"number"===typeof n?t:t.concat(n)}),[])):t.concat(n)}n.defaultHead=s;var f=["name","httpEquiv","charSet","itemProp"];function p(t,n){return t.reduce((function(t,n){var e=r.default.Children.toArray(n.props.children);return t.concat(e)}),[]).reduce(u,[]).reverse().concat(s(n.inAmpMode)).filter(function(){var t=new Set,n=new Set,e=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(r.type){case"title":case"base":n.has(r.type)?i=!1:n.add(r.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var s=f[c];if(r.props.hasOwnProperty(s))if("charSet"===s)e.has(s)?i=!1:e.add(s);else{var u=r.props[s],p=o[s]||new Set;p.has(u)?i=!1:(p.add(u),o[s]=p)}}}return i}}()).reverse().map((function(t,n){var e=t.key||n;return r.default.cloneElement(t,{key:e})}))}var h=i.default();function d(t){var n=t.children;return r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(e){return r.default.createElement(h,{reduceComponentsToState:p,handleStateChange:e,inAmpMode:l.isInAmpMode(t)},n)}))}))}d.rewind=h.rewind,n.default=d},B5Ud:function(t,n,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("7W2i"),a=e("a1gu"),c=e("Nsbk"),l=e("o0o1");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var u=e("TqRt");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=m,n.default=void 0;var f=u(e("q1tI")),p=e("g/15");function h(t){var n,e,o;return l.async((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.Component,e=t.ctx,r.next=3,l.awrap((0,p.loadGetInitialProps)(n,e));case 3:return o=r.sent,r.abrupt("return",{pageProps:o});case 5:case"end":return r.stop()}}),null,null,null,Promise)}n.AppInitialProps=p.AppInitialProps;var d=function(t){i(l,t);var n,e=(n=l,function(){var t,e=c(n);if(s()){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return a(this,t)});function l(){return o(this,l),e.apply(this,arguments)}return r(l,[{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,o=t.pageProps,r=t.__N_SSG,i=t.__N_SSP;return f.default.createElement(e,Object.assign({},o,r||i?{}:{url:m(n)}))}}]),l}(f.default.Component);function m(t){var n=t.pathname,e=t.asPath,o=t.query;return{get query(){return o},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var o=e?n:"",r=e||n;return t.push(o,r)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var o=e?n:"",r=e||n;return t.replace(o,r)}}}n.default=d,d.origGetInitialProps=h,d.getInitialProps=h},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},FYa8:function(t,n,e){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};Object.defineProperty(n,"__esModule",{value:!0});var r=o(e("q1tI"));n.HeadManagerContext=r.createContext(null)},Ijbi:function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},KQjJ:function(t,n,e){"use strict";var o=e("wx14");function r(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)e=i[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var i=e("q1tI"),a=e.n(i),c=e("YFqc"),l=e.n(c),s=a.a.createElement;n.a=function(t){var n=t.href,e=r(t,["href"]);return s(l.a,Object(o.a)({href:n,as:"".concat("https://www.griffithsa.co.uk").concat(n)},e))}},RIqP:function(t,n,e){var o=e("Ijbi"),r=e("EbDI"),i=e("Bnag");t.exports=function(t){return o(t)||r(t)||i()}},Xuae:function(t,n,e){"use strict";var o=e("lwsE"),r=e("PJYZ"),i=e("W8MJ"),a=e("7W2i"),c=e("a1gu"),l=e("Nsbk"),s=e("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}Object.defineProperty(n,"__esModule",{value:!0});var f=e("q1tI"),p=!1;n.default=function(){var t,n=new Set;function e(e){t=e.props.reduceComponentsToState(s(n),e.props),e.props.handleStateChange&&e.props.handleStateChange(t)}return function(s){a(d,s);var f,h=(f=d,function(){var t,n=l(f);if(u()){var e=l(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return c(this,t)});function d(t){var i;return o(this,d),i=h.call(this,t),p&&(n.add(r(i)),e(r(i))),i}return i(d,null,[{key:"rewind",value:function(){var e=t;return t=void 0,n.clear(),e}}]),i(d,[{key:"componentDidMount",value:function(){n.add(this),e(this)}},{key:"componentDidUpdate",value:function(){e(this)}},{key:"componentWillUnmount",value:function(){n.delete(this),e(this)}},{key:"render",value:function(){return null}}]),d}(f.Component)}},YFqc:function(t,n,e){t.exports=e("cTJO")},cTJO:function(t,n,e){"use strict";var o=e("lwsE"),r=e("W8MJ"),i=e("7W2i"),a=e("a1gu"),c=e("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var s=e("TqRt"),u=e("284h");n.__esModule=!0,n.default=void 0;var f,p=u(e("q1tI")),h=e("QmWs"),d=e("g/15"),m=s(e("nOHt")),y=e("elyg");function g(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var v=new Map,w=window.IntersectionObserver,k={};function b(){return f||(w?f=new w((function(t){t.forEach((function(t){if(v.has(t.target)){var n=v.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),v.delete(t.target),n())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){i(s,t);var n,e=(n=s,function(){var t,e=c(n);if(l()){var o=c(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return a(this,t)});function s(t){var n;return o(this,s),(n=e.call(this,t)).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var n=null,e=null,o=null;return function(r,i){if(o&&r===n&&i===e)return o;var a=t(r,i);return n=r,e=i,o=a,a}}((function(t,n){return{href:(0,y.addBasePath)(g(t)),as:n?(0,y.addBasePath)(g(n)):n}})),n.linkClicked=function(t){var e=t.currentTarget,o=e.nodeName,r=e.target;if("A"!==o||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),a=i.href,c=i.as;if(function(t){var n=(0,h.parse)(t,!1,!0),e=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===e.protocol&&n.host===e.host}(a)){var l=window.location.pathname;a=(0,h.resolve)(l,a),c=c?(0,h.resolve)(l,c):a,t.preventDefault();var s=n.props.scroll;null==s&&(s=c.indexOf("#")<0),m.default[n.props.replace?"replace":"push"](a,c,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return r(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),e=n.href,o=n.as,r=(0,h.resolve)(t,e);return[r,o?(0,h.resolve)(t,o):r]}},{key:"handleRef",value:function(t){var n=this;this.p&&w&&t&&t.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,n){var e=b();return e?(e.observe(t),v.set(t,n),function(){try{e.unobserve(t)}catch(n){console.error(n)}v.delete(t)}):function(){}}(t,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],t).catch((function(t){0})),k[n.join("%")]=!0}}},{key:"render",value:function(){var t=this,n=this.props.children,e=this.formatUrls(this.props.href,this.props.as),o=e.href,r=e.as;"string"===typeof n&&(n=p.default.createElement("a",null,n));var i=p.Children.only(n),a={ref:function(n){t.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),t.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||t.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=r||o),p.default.cloneElement(i,a)}}]),s}(p.Component);n.default=x},cha2:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function c(t,n){return!n||"object"!==a(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.r(n),e.d(n,"default",(function(){return at}));var s=e("q1tI"),u=e.n(s),f=e("8Bbg"),p=e.n(f),h=e("vOnD");function d(){var t,n,e=(t=["\n  @font-face {\n    font-family: 'Rockwell, Arial';\n      src: url(",");\n      src: url(",");\n      src: url(",");\n  }\n  html {\n    font-family: ",";\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    color: ",";\n    height: 100%;\n  }\n  body {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n  }\n"],n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}})));return d=function(){return e},e}var m="https://www.griffithsa.co.uk",y=Object(h.b)(d(),"".concat(m,"/fonts/Rockwell.woff"),"".concat(m,"/fonts/Rockwell.woff2"),"".concat(m,"/fonts/Rockwell.ttf"),(function(t){return t.theme.fontFamily}),(function(t){return t.theme.colors.text})),g=e("8Kt/"),v=e.n(g),w=u.a.createElement,k=function(){return w(v.a,null,w("link",{rel:"apple-touch-icon",sizes:"57x57",href:"img/icons/apple-icon-57x57.png"}),w("link",{rel:"apple-touch-icon",sizes:"60x60",href:"img/icons/apple-icon-60x60.png"}),w("link",{rel:"apple-touch-icon",sizes:"72x72",href:"img/icons/apple-icon-72x72.png"}),w("link",{rel:"apple-touch-icon",sizes:"76x76",href:"img/icons/apple-icon-76x76.png"}),w("link",{rel:"apple-touch-icon",sizes:"114x114",href:"img/icons/apple-icon-114x114.png"}),w("link",{rel:"apple-touch-icon",sizes:"120x120",href:"img/icons/apple-icon-120x120.png"}),w("link",{rel:"apple-touch-icon",sizes:"144x144",href:"img/icons/apple-icon-144x144.png"}),w("link",{rel:"apple-touch-icon",sizes:"152x152",href:"img/icons/apple-icon-152x152.png"}),w("link",{rel:"apple-touch-icon",sizes:"180x180",href:"img/icons/apple-icon-180x180.png"}),w("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"img/icons/android-icon-192x192.png"}),w("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"img/icons/favicon-32x32.png"}),w("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"img/icons/favicon-96x96.png"}),w("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"img/icons/favicon-16x16.png"}),w("link",{rel:"manifest",href:"manifest.json"}),w("meta",{key:"msapplication-TileColor",name:"msapplication-TileColor",content:"#ffffff"}),w("meta",{key:"msapplication-TileImage",name:"msapplication-TileImage",content:"img/icons/ms-icon-144x144.png"}),w("meta",{key:"theme-color",name:"theme-color",content:"#ffffff"}))},b=e("7O5W"),x=(e("VAPu"),e("wHSu")),O=e("8tEE");b.a.autoAddCss=!1,b.c.add(x.b,x.g,x.e,x.a,x.c,O.b,O.a,O.d,O.c,x.d,x.f);var _=function(){return null},C=e("wx14"),R=e("gQLT"),j=e("BZ/I"),P=u.a.createElement,S=h.c.div.withConfig({displayName:"logo__LogoDiv",componentId:"yrfqi7-0"})(["display:",";width:100%;"],(function(t){return t.inline?"inline":"block"})),M=function(t){if(t.staticImg&&!t.color)return P(S,t,P(R.a,{alt:"Andrew Griffiths Logo",fillContainer:!0,src:"".concat("https://www.griffithsa.co.uk","/img/svg/aglogo.svg")}));var n='\n<svg\nviewBox="0 0 70.77067 70.770674"\nid="svg8">\n<g\n  id="layer1"\n  transform="translate(-11.744599,-4.2162763)">\n  <g\n    id="g872"\n    transform="matrix(2.4886531,0,0,2.4886531,-48.149589,-99.226163)">\n    <g>\n      <path\n        d="M 44.866247,52.766965 V 51.34895 h 3.684975 v 1.725874 h -1.772519 v 7.351292 q 0,2.565489 -1.296739,3.955517 -1.287409,1.399358 -3.768936,1.399358 -2.350921,0 -4.011492,-1.324725 L 38.9423,63.066237 q 0.671692,0.49444 1.343383,0.736995 0.681021,0.251885 1.483319,0.251885 1.455332,0 2.276289,-0.904918 0.820956,-0.904918 0.820956,-2.397566 v -0.914247 q -0.634375,0.746324 -1.613926,1.17546 -0.970221,0.429136 -1.940442,0.429136 -1.362042,0 -2.453541,-0.690349 -1.082169,-0.69035 -1.697887,-1.828494 -0.606388,-1.147473 -0.606388,-2.509515 0,-1.390028 0.634375,-2.584147 0.643705,-1.194118 1.753862,-1.903126 1.110157,-0.709008 2.462869,-0.709008 0.970222,0 1.809836,0.382491 0.848944,0.382491 1.651242,1.166131 z m -3.190535,6.950143 q 0.914247,0 1.651242,-0.457123 0.736995,-0.457124 1.147473,-1.231435 0.410478,-0.774311 0.410478,-1.6699 0,-0.839615 -0.410478,-1.613926 -0.410478,-0.774311 -1.138144,-1.250093 -0.727666,-0.475781 -1.623255,-0.475781 -0.876931,0 -1.595268,0.457123 -0.718337,0.457124 -1.119486,1.231435 -0.401149,0.774311 -0.401149,1.6699 0,0.914247 0.382491,1.679229 0.382491,0.764982 1.08217,1.212777 0.709008,0.447794 1.613926,0.447794 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.47764736"\n        id="path827" />\n    </g>\n    <g>\n      <path\n        d="m 36.398295,53.746867 v 4.62721 h 1.641913 v 1.716545 h -3.3398 v -1.203448 q -1.399358,1.371371 -3.115903,1.371371 -0.904918,0 -1.660571,-0.419807 -0.746324,-0.419808 -1.203448,-1.119487 -0.447794,-0.709007 -0.447794,-1.56728 0,-0.923576 0.49444,-1.641913 0.503768,-0.727666 1.352712,-1.119486 0.848944,-0.39182 1.707216,-0.39182 1.436674,0 2.677438,0.839614 v -1.054182 q 0,-1.147474 -0.485111,-1.641913 -0.48511,-0.49444 -1.595267,-0.49444 -0.783641,0 -1.315397,0.289201 -0.522426,0.279871 -0.867601,0.858272 L 28.39397,52.338181 q 0.625046,-1.166132 1.688558,-1.735204 1.063512,-0.578401 2.528173,-0.578401 1.968429,0 2.873347,0.895589 0.914247,0.895589 0.914247,2.826702 z m -4.552577,5.028359 q 1.418016,0 2.65878,-1.18479 v -1.147473 q -1.259422,-0.97955 -2.518844,-0.97955 -0.764982,0 -1.324725,0.48511 -0.550414,0.475782 -0.550414,1.203448 0,0.699679 0.485111,1.166131 0.48511,0.457124 1.250092,0.457124 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.47764736"\n        id="path824" />\n    </g>\n    <g\n      aria-label="&lt;/&gt;"\n      transform="scale(0.94720615,1.0557364)"\n      style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:4.37428904px;line-height:1.25;font-family:Rockwell;-inkscape-font-specification:Rockwell;letter-spacing:0px;word-spacing:0px;fill:{COLOR};fill-opacity:1;stroke:none;stroke-width:0.10935722"\n      id="text903">\n      <path\n        d="m 30.692284,43.718243 v 0.395139 l -2.533157,-1.06367 v -0.322518 l 2.533157,-1.067942 v 0.393002 l -2.041904,0.839403 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path830" />\n      <path\n        d="m 31.027618,44.551238 1.648902,-3.338386 h 0.382323 l -1.646766,3.338386 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path832" />\n      <path\n        d="m 35.92947,43.049712 -2.533157,1.06367 v -0.395139 l 2.04404,-0.826586 -2.04404,-0.839403 v -0.393002 l 2.533157,1.067942 z"\n        style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:Rockwell;-inkscape-font-specification:Rockwell;fill:{COLOR};fill-opacity:1;stroke-width:0.10935722"\n        id="path834" />\n    </g>\n  </g>\n  <rect\n    style="opacity:1;fill:none;fill-opacity:1;stroke:{COLOR};stroke-width:1.97536814;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect860"\n    width="68.795303"\n    height="68.795303"\n    x="12.732283"\n    y="5.2039604"\n    rx="11.785713" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:{COLOR};stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect872"\n    width="7.4726267"\n    height="3.1470189"\n    x="39.787449"\n    y="12.362849"\n    rx="0" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:{COLOR};stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect963"\n    width="15.135825"\n    height="3.1475725"\n    x="48.847576"\n    y="12.362296" />\n  <rect\n    style="opacity:1;fill:{COLOR};fill-opacity:1;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:markers stroke fill"\n    id="rect1007"\n    width="5.0773482"\n    height="3.147583"\n    x="65.320534"\n    y="12.339291" />\n</g>\n</svg>\n'.replace(/{COLOR}/g,t.color||j.a.colors.primary);return P(S,Object(C.a)({},t,{dangerouslySetInnerHTML:{__html:n}}))},I=e("gEIo"),z={hamburgerSize:20,hamburgerReductionFactor:1.75,hamburgerPositionFromBottom:2.6,desktopMenuHeight:3,mobileMenuWidth:80,navMobileTransition:400,logo:{color:"",mobileColor:"#ffffff"}},E=z.hamburgerSize,q=z.hamburgerReductionFactor,L=z.hamburgerPositionFromBottom,A=z.mobileMenuWidth,N=z.navMobileTransition,T=z.desktopMenuHeight,D=h.c.nav.withConfig({displayName:"navigation-styled-components__NavOuter",componentId:"sc-3lnpz1-0"})(["@media (max-width:","){width:100%;z-index:1;position:absolute;border-bottom:none;background:none;}@media (min-width:","){position:fixed;z-index:1;margin-bottom:",";background:",";height:",";display:flex;align-items:center;width:100%;}"],(function(t){return t.theme.breakpoints.xsMax}),(function(t){return t.theme.breakpoints.smMin}),"".concat(T,"rem"),(function(t){return t.theme.colors.light}),"".concat(T,"rem")),U=Object(h.c)(M).withConfig({displayName:"navigation-styled-components__NavLogo",componentId:"sc-3lnpz1-1"})(["display:none;width:",";position:relative;padding-top:0.4rem;padding-left:0.25rem;img{margin-bottom:0.4rem;}@media (min-width:","){display:block;}"],"".concat(T-.5,"rem"),(function(t){return t.theme.breakpoints.smMin})),H=Object(h.c)(M).withConfig({displayName:"navigation-styled-components__MobileLogo",componentId:"sc-3lnpz1-2"})(["width:",";position:absolute;right:0px;padding-top:0.4rem;padding-right:0.4rem;@media (min-width:","){display:none;}"],"".concat(T-.5,"rem"),(function(t){return t.theme.breakpoints.smMin})),W=h.c.ul.withConfig({displayName:"navigation-styled-components__NavLinks",componentId:"sc-3lnpz1-3"})(["overflow:hidden;list-style:none;@media (max-width:","){z-index:1;position:fixed;min-width:",";transition-duration:",";top:",";background:",";padding:1rem;margin:0px;left:",";border-radius:",";box-shadow:1px 2px 4px ",";}@media (min-width:","){padding-top:0.25rem;margin-left:auto;}"],(function(t){return t.theme.breakpoints.xsMax}),"".concat(A,"%"),"".concat(N,"ms"),"calc(100% - ".concat(E*(L+.5),"vw)"),(function(t){return t.theme.colors.primary}),(function(t){return t.open?"".concat(100-A,"%"):"100%"}),(function(t){return t.theme.borderRadius}),(function(t){return t.theme.boxShadowColor}),(function(t){return t.theme.breakpoints.smMin})),B=h.c.li.withConfig({displayName:"navigation-styled-components__NavItem",componentId:"sc-3lnpz1-4"})(["overflow:hidden;@media (max-width:","){&:not(:first-child){padding-top:1rem;}}@media (min-width:","){display:inline;padding-right:1rem;}"],(function(t){return t.theme.breakpoints.xsMax}),(function(t){return t.theme.breakpoints.smMin})),F=Object(h.c)(I.a).withConfig({displayName:"navigation-styled-components__NavLink",componentId:"sc-3lnpz1-5"})(["@media (max-width:","){display:block;color:",";&:hover{color:",";}svg{padding-right:1rem;min-width:20px;}}@media (min-width:","){svg{display:none;}span{display:inline-block;&:hover{transform:scale(1.1);transition-duration:125ms;}}}"],(function(t){return t.theme.breakpoints.xsMax}),(function(t){return t.theme.colors.light}),(function(t){return t.theme.colors.light}),(function(t){return t.theme.breakpoints.smMin})),J=h.c.div.withConfig({displayName:"navigation-styled-components__Hamburger",componentId:"sc-3lnpz1-6"})(["z-index:2;width:",";height:",";transition-duration:",";position:fixed;display:block;top:",";left:",";background:",";border-radius:100%;box-shadow:1px 2px 4px ",";color:",";display:flex;align-items:center;justify-content:center;font-size:",";@media (min-width:","){display:none;}"],(function(t){return t.open?"".concat(E/q,"vw"):"".concat(E,"vw")}),(function(t){return t.open?"".concat(E/q,"vw"):"".concat(E,"vw")}),"".concat(N,"ms"),(function(t){return t.open?"calc(100% - ".concat(E*(L+.4),"vw)"):"calc(100% - ".concat(E*L,"vw)")}),(function(t){return t.open?"calc(95% - ".concat(E/q,"vw)"):"calc(95% - ".concat(E,"vw)")}),(function(t){return t.theme.colors.primary}),(function(t){return t.theme.boxShadowColor}),(function(t){return t.theme.colors.secondary}),(function(t){return t.open?"1rem":"2rem"}),(function(t){return t.theme.breakpoints.smMin})),K=h.c.div.withConfig({displayName:"navigation-styled-components__Offset",componentId:"sc-3lnpz1-7"})(["height:0px;@media (min-width:","){height:",";}"],(function(t){return t.theme.breakpoints.smMin}),"".concat(T,"rem")),Q=e("IP2g"),Y=u.a.createElement,G=function(t){var n=t.open,e=t.handleClick;return Y(J,{onClick:function(){return e(!n)},open:n},!n&&Y(Q.a,{icon:x.b}),n&&Y(Q.a,{icon:x.g}))},X=e("KQjJ"),V=[{href:"/about",text:"About me",icon:x.c},{href:"/contact",text:"Contact",icon:x.a}],Z=u.a.createElement,$=function(t){var n=t.open;return V.length?Z(W,{open:n},V.map((function(t,n){return Z(B,{key:n},Z(X.a,{href:t.href},Z(F,null,Z(Q.a,{icon:t.icon}),Z("span",null,t.text))))}))):null},tt=u.a.createElement,nt=function(){return tt(X.a,{href:"/"},tt("a",null,tt(U,{staticImg:!0,color:z.logo.color}),tt(H,{color:z.logo.mobileColor})))},et=u.a.createElement,ot=function(){var t=Object(s.useState)(!1),n=t[0],e=t[1];return et(u.a.Fragment,null,et(D,null,et(nt,null),et(G,{open:n,handleClick:e}),et($,{open:n})),et(K,null))},rt=u.a.createElement;function it(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var at=function(t){!function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}(u,t);var n,e,i,a,s=(n=u,function(){var t,e=l(n);if(it()){var o=l(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return c(this,t)});function u(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,u),s.apply(this,arguments)}return e=u,(i=[{key:"render",value:function(){var t=this.props,n=t.Component,e=t.pageProps;return rt(h.a,{theme:j.a},rt(k,null),rt(_,null),rt(y,null),rt(ot,null),rt(n,e))}}])&&o(e.prototype,i),a&&o(e,a),u}(p.a)},lwAK:function(t,n,e){"use strict";var o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)Object.hasOwnProperty.call(t,e)&&(n[e]=t[e]);return n.default=t,n};Object.defineProperty(n,"__esModule",{value:!0});var r=o(e("q1tI"));n.AmpStateContext=r.createContext({})}},[[0,0,1,2,8,3,4,17]]]);