(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+o59":function(e,t,n){e.exports={navItem:"navItem_navItem__3NZ9w",navLink:"navItem_navLink__32LAR",linkText:"navItem_linkText__1etKU",selectedLinkText:"navItem_selectedLinkText__18-VE",mark:"navItem_mark__3uugE"}},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var a=c(n("q1tI")),r=c(n("Xuae")),o=n("lwAK"),i=n("FYa8"),u=n("/0+H");function c(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var s=f[u];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var l=r.props[s],p=a[s]||new Set;p.has(l)?o=!1:(p.add(l),a[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}var d=(0,r.default)();function h(e){var t=e.children;return(a.default.createElement(o.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return a.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,u.isInAmpMode)(e)},t)}))})))}h.rewind=d.rewind;var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CafY:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return y}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),i=n.n(o),u=n("YFqc"),c=n.n(u),s=n("+o59"),l=n.n(s),f=r.a.createElement;function p(e){var t=e.text,n=e.link,a=e.selected;return f("li",{className:l.a.navItem},f(c.a,{href:n,as:"".concat("").concat(n)},f("a",{className:l.a.navLink},a?f(r.a.Fragment,null,f("span",{className:l.a.mark}),f("span",{className:l.a.linkText+" "+l.a.selectedLinkText},t)):f("span",{className:l.a.linkText},t))))}var d=n("Tred"),h=n.n(d),v=r.a.createElement,m="james168ma";function y(e){var t=e.pageName,n=e.ids,a=e.children,o=e.home;return v(r.a.Fragment,null,v(i.a,null,v("link",{rel:"icon",href:"/favicon.ico"})),v("header",{className:h.a.header},v("a",{href:"https://github.com/james168ma",className:h.a.logoLink},v("img",{src:"/images/GitHub_Logo.png",className:h.a.logo})),v("a",{href:"https://www.linkedin.com/in/james168ma",className:h.a.logoLink+" "+h.a.lastLogoLink},v("img",{src:"/images/LinkedIn_logo.png",className:h.a.logo})),v("a",{href:"mailto:james168ma@gmail.com"},v("button",{className:h.a.button},"Email Me"))),v("div",{className:h.a.container},v("nav",{className:h.a.navbar},v("ul",{className:h.a.navbarNav},v(p,{link:"/",text:"Home",selected:o}),n.map((function(e){return v(p,{link:"/subpages/"+e,text:e,selected:t===e,key:e})})))),v("main",null,a),!o&&v("div",{className:h.a.backToHome},v(c.a,{href:"/",as:"".concat("","/")},v("a",null,"\u2190 Back to home")))))}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Tred:function(e,t,n){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",headerImage:"layout_headerImage__2h5On",headHomeImage:"layout_headHomeImage__1VhPQ",backToHome:"layout_backToHome__1vZsp",navbar:"layout_navbar__3CjNi",navbarNav:"layout_navbarNav__3Wc1M",logoLink:"layout_logoLink__2OhSG",lastLogoLink:"layout_lastLogoLink__3H2h_",logo:"layout_logo__EKJ3d",topNav:"layout_topNav__2Jyp_",topNavLinks:"layout_topNavLinks__1A9gp",button:"layout_button__1OEYn"}},Xuae:function(e,t,n){"use strict";var a=n("lwsE"),r=n("PJYZ"),o=n("W8MJ"),i=n("7W2i"),u=n("a1gu"),c=n("Nsbk"),s=n("RIqP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(s(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(u){i(s,u);var c=l(s);function s(e){var o;return a(this,s),o=c.call(this,e),p&&(t.add(r(o)),n(r(o))),o}return o(s,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),o(s,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),s}(f.Component))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),o=n("7W2i"),i=n("a1gu"),u=n("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var s=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),v=s(n("nOHt")),m=n("elyg");function y(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var _=new Map,g=window.IntersectionObserver,k={};function b(){return f||(g?f=new g((function(e){e.forEach((function(e){if(_.has(e.target)){var t=_.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),_.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){o(n,e);var t=c(n);function n(e){var r;return a(this,n),(r=t.call(this,e)).p=void 0,r.cleanUpListeners=function(){},r.formatUrls=function(e){var t=null,n=null,a=null;return function(r,o){if(a&&r===t&&o===n)return a;var i=e(r,o);return t=r,n=o,a=i,i}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),r.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),i=o.href,u=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),u=u?(0,d.resolve)(c,u):i,e.preventDefault();var s=r.props.scroll;null==s&&(s=u.indexOf("#")<0),v.default[r.props.replace?"replace":"push"](i,u,{shallow:r.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},r.p=!1!==e.prefetch,r}return r(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,a=t.as,r=(0,d.resolve)(e,n);return[r,a?(0,d.resolve)(e,a):r]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),_.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}_.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=r||a),p.default.cloneElement(o,i)}}]),n}(p.Component);t.default=w},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}}]);