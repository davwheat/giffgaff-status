(self.webpackChunkgiffgaff_status=self.webpackChunkgiffgaff_status||[]).push([[226],{7757:function(e,t,n){e.exports=n(5666)},5505:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},435:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9756),a=n(5007),o=n(5444);function i(e){var t=e.href,n=e.children;(0,r.Z)(e,["href","children"]);return a.default.createElement(o.Link,{to:t,className:"link-module--link--1LlE2"},n)}},4711:function(e,t,n){"use strict";n.d(t,{Z:function(){return F}});var r=n(18),a=n(5007),o=n(7757),i=n.n(o);n(5666);function l(e,t,n,r,a,o,i){try{var l=e[o](i),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,u,"next",e)}function u(e){l(o,r,a,i,u,"throw",e)}i(void 0)}))}}function c(){return(c=u(i().mark((function e(){var t,n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["17357121"],n=null,e.prev=2,e.next=5,fetch("https://cors-anywhere.davwheat.workers.dev/?https://community.giffgaff.com/api/discussions?include=firstPost&filter%5Bq%5D=%20tag%3Aservice-updates&sort=-createdAt");case 5:return e.next=7,e.sent.json();case 7:n=e.sent,e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",null);case 13:return r=n.data,a=r.filter((function(e){return!e.attributes.isLocked&&!t.includes(e.id)})),e.abrupt("return",a);case 16:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}var s=n(5505);const f="MinorAlert-module--bland--3dwDg";function d(e){var t=e.type,n=e.title,r=e.children,o=e.noIcon,i=e.customIcon;return a.default.createElement("div",{role:"alert",className:(0,s.Z)("MinorAlert-module--alert--2MPZ5",["info"===t&&"MinorAlert-module--info--1KqV8"],["warning"===t&&"MinorAlert-module--warning--71xFk"],["success"===t&&"MinorAlert-module--success--13Zgu"],["unknown"===t&&f],["plain"===t&&f])},!o&&(i||a.default.createElement("div",{className:"MinorAlert-module--icon--2iTGN"})),a.default.createElement("div",null,a.default.createElement("p",{className:"MinorAlert-module--title--32X3N"},n),r))}var h=n(9756);function m(e){var t=e.className,n=(0,h.Z)(e,["className"]);return a.default.createElement("span",Object.assign({className:(0,s.Z)("LoadingIcon-module--spinner--1WzTm",t)},n))}function p(e){var t=e.issueList;return t.sort((function(e,t){return t.severity-e.severity})),a.default.createElement(a.default.Fragment,null,a.default.createElement("section",{className:"StatusTable-module--container--1y993"},a.default.createElement("ul",null,t.map((function(e){return a.default.createElement("li",{"data-severity":e.severity,className:"StatusTable-module--listItem--35iya",key:e.id},a.default.createElement("a",{className:"StatusTable-module--item--3ezNW",target:"_blank",rel:"noopener noreferrer",href:"https://community.giffgaff.com/d/"+e.id+"?utm_source=giffgaffstatus_com_mrjeeves"},a.default.createElement("h1",{className:"gg-t-speak-up"},e.title),a.default.createElement("p",null,function(e){switch(e){case-1:return"Not a problem";case 0:return"For your information";case 1:return"Keep an eye on this";case 2:return"This isn't very good";case 3:return"Alarm bells should be ringing";default:return"I'm not sure how to categorise this ("+e+")"}}(e.severity))))})))))}const v="StatusChecker-module--statusSection--TdkDu";function g(e){return(new Date-e)/864e5}var y=n(5697),w=n.n(y),E=!("undefined"==typeof window||!window.document||!window.document.createElement),b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var N=function(e){function t(){return k(this,t),_(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),b(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return E?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),a.default.createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(a.default.Component);N.propTypes={children:w().node.isRequired,node:w().any};var O=N,L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var M=function(e){function t(){return P(this,t),C(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),L(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){a.default.unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=a.default.cloneElement(this.props.children)),this.portal=a.default.unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(a.default.Component),x=M;M.propTypes={children:w().node.isRequired,node:w().any};var j=a.default.createPortal?O:x,T=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var S=27,A=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.portalNode=null,n.state={active:!!e.defaultOpen},n.openPortal=n.openPortal.bind(n),n.closePortal=n.closePortal.bind(n),n.wrapWithPortal=n.wrapWithPortal.bind(n),n.handleOutsideMouseClick=n.handleOutsideMouseClick.bind(n),n.handleKeydown=n.handleKeydown.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),T(t,[{key:"componentDidMount",value:function(){this.props.closeOnEsc&&document.addEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.addEventListener("click",this.handleOutsideMouseClick)}},{key:"componentWillUnmount",value:function(){this.props.closeOnEsc&&document.removeEventListener("keydown",this.handleKeydown),this.props.closeOnOutsideClick&&document.removeEventListener("click",this.handleOutsideMouseClick)}},{key:"openPortal",value:function(e){this.state.active||(e&&e.nativeEvent&&e.nativeEvent.stopImmediatePropagation(),this.setState({active:!0},this.props.onOpen))}},{key:"closePortal",value:function(){this.state.active&&this.setState({active:!1},this.props.onClose)}},{key:"wrapWithPortal",value:function(e){var t=this;return this.state.active?a.default.createElement(j,{node:this.props.node,key:"react-portal",ref:function(e){return t.portalNode=e}},e):null}},{key:"handleOutsideMouseClick",value:function(e){if(this.state.active){var t=this.portalNode&&(this.portalNode.props.node||this.portalNode.defaultNode);!t||t.contains(e.target)||e.button&&0!==e.button||this.closePortal()}}},{key:"handleKeydown",value:function(e){e.keyCode===S&&this.state.active&&this.closePortal()}},{key:"render",value:function(){return this.props.children({openPortal:this.openPortal,closePortal:this.closePortal,portal:this.wrapWithPortal,isOpen:this.state.active})}}]),t}(a.default.Component);A.defaultProps={onOpen:function(){},onClose:function(){}};var W=A;function I(e){var t=e.children,n=e.title,r=e.onClose;return a.default.createElement(W,{onClose:r,closeOnEsc:!0,closeOnOutsideClick:!0,defaultOpen:!0},(function(e){e.openPortal;var r=e.closePortal,o=e.isOpen,i=e.portal;return a.default.createElement(a.default.Fragment,null,o&&a.default.createElement("div",{className:"Modal-module--backdrop--1fTSY"}),i(a.default.createElement(a.default.Fragment,null,a.default.createElement("dialog",{role:"alert",className:"Modal-module--dialog--3lbbb"},a.default.createElement("header",{className:(0,s.Z)("Modal-module--dialogHeader--2eFcx","gg-t-louder")},a.default.createElement("h1",{className:"Modal-module--dialogTitle--2uCkL"},n),a.default.createElement("button",{onClick:r,"aria-label":"Close modal",className:(0,s.Z)("Modal-module--dialogCloseButton--2Vf8b","no-button-styles")},a.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},a.default.createElement("path",{d:"M20 16.18l.36.41 1 1.1-.05.47-.39.38-1.55 1.69-.8.76h-.52l-5.71-5.38-.26.08-.3.34-1.36 1.28-3.07 3.22-.56.47h-.68l-2.76-2.64v-.83l5.41-5.43.08-.32-.36-.38-3.94-3.53L4 7.31l-.56-.7v-.83l2.61-2.41h.75l5.61 5.36L18.1 3h.9l2.35 1.85.14.28v.74l-5 5.29-.77.9.31.24.27.23.16.14z"})))),a.default.createElement("main",null,t)))))}))}function Z(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return a.default.createElement("section",{className:"NotSolved-module--infrastructureStatusBtnContainer--TI9gm"},a.default.createElement("button",{className:"gg-t-speak-up gg-link-button gg-link--arrow",onClick:function(){n(!0)}},"Still having problems?"),t&&a.default.createElement(I,{title:"Need more help?",onClose:function(){n(!1)}},a.default.createElement("p",null,"Sorry to hear you're still having issues. Here's some great tips to try."),a.default.createElement("ol",{className:"gg-c-list-ordered"},a.default.createElement("li",null,a.default.createElement("a",{href:"https://status.o2.co.uk",className:"gg-link gg-link--arrow",target:"_blank",rel:"noopener noreferrer"},"Check your local masts")),a.default.createElement("li",null,"Restart your phone"),a.default.createElement("li",null,a.default.createElement("a",{href:"https://www.giffgaff.com/help/articles/how-to-perform-a-manual-roam?utm_source=giffgaffstatus_com_mrjeeves",className:"gg-link gg-link--arrow",target:"_blank",rel:"noopener noreferrer"},"Try a manual roam"))),a.default.createElement("p",null,"If none of this works, please"," ",a.default.createElement("a",{href:"https://community.giffgaff.com/t/help-and-support?utm_source=giffgaffstatus_com_mrjeeves",className:"gg-link gg-link--arrow",target:"_blank",rel:"noopener noreferrer"},"ask the community for help"))))}function F(){var e=(0,a.useState)(null),t=e[0],n=e[1],o=(0,a.useState)({serviceUpdates:!1}),i=o[0],l=o[1],u=(0,a.useState)(!0),s=u[0],f=u[1];if((0,a.useEffect)((function(){function e(){f(!1)}function r(){f(!0)}return s&&!navigator.onLine&&f(!1),window.addEventListener("online",r),window.addEventListener("offline",e),t||function(){return c.apply(this,arguments)}().then((function(e){n(e),l({serviceUpdates:!0})})),function(){window.removeEventListener("online",r),window.removeEventListener("offline",e)}}),[s,t,n]),!s)return a.default.createElement("section",{className:v},a.default.createElement(d,{type:"error",title:"You're offline"},a.default.createElement("p",null,"To use this website, you need a connection to the internet.")));var h=t&&t.reduce((function(e,t){return[].concat((0,r.Z)(e),[{id:t.id,title:t.attributes.title,severity:(n=t,a=n.attributes.title,o=new Date(n.attributes.createdAt),i=0,a.match(/(resolved)/gi)&&(i-=12),a.match(/(planned)/gi)&&(i-=2),g(o)>=7&&(i-=2),g(o)<=2&&(i+=1),a.match(/(4G|3G|2G|data)/gi)&&(i+=2),a.match(/\w(calls|texts|voice)\w/gi)&&(i+=1),a.match(/(nationwide)/gi)?i+=3:a.match(/\w(region|area|in)\w/gi)&&(i-=2),i<-4?-1:i<0?0:i<2?1:i<4?2:3)}]);var n,a,o,i}),[]),y=h&&Math.max.apply(Math,(0,r.Z)(h.map((function(e){return e.severity})))),w="",E="success";return-1===y?w="Everything's running smoothly.":0===y?w="There's one or more small, localised issues. Most people aren't affected.":1===y?(E="info",w="There's one or more minor issues or outages."):2===y?(E="warning",w="There's one or more widespread issues at giffgaff."):3===y?(E="error",w="There's one or more critical issues at giffgaff."):(E="unknown",w="Couldn't check status. Please contact @davwheat_ on Twitter."),a.default.createElement("section",{className:v},Object.values(i).every((function(e){return e}))?a.default.createElement(d,{type:E,title:"Checks complete"},w):a.default.createElement(d,{type:"plain",customIcon:a.default.createElement(m,{style:{margin:6,width:36,height:36,borderWidth:4,marginRight:18}}),title:"Checking for issues at giffgaff."},"Sit tight. This can take up to a minute."),t&&a.default.createElement(Z,null),t&&a.default.createElement(p,{issueList:h}))}},506:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5007),a=n(5444),o=n(5505),i=n(4490);function l(e){var t=e.description,n=(e.lang,e.meta,e.title),o=(0,a.useStaticQuery)("63159454").site,l=t||o.siteMetadata.description;return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.Title,null,n),r.default.createElement(i.Meta,{name:"og:title",content:n}),r.default.createElement(i.Meta,{name:"twitter:title",content:n}),r.default.createElement(i.Meta,{name:"description",content:l}),r.default.createElement(i.Meta,{name:"og:description",content:l}),r.default.createElement(i.Meta,{name:"twitter:description",content:l}),r.default.createElement(i.Meta,{name:"og:type",content:"website"}),r.default.createElement(i.Meta,{name:"twitter:card",content:"summary"}),r.default.createElement(i.Meta,{name:"twitter:creator",content:"@davwheat_"}))}l.defaultProps={lang:"en",meta:[],description:""};var u=l,c=n(1788);var s=9e5,f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={showButton:!1,updateHandler:null},t.registerServiceWorker=function(){"undefined"!=typeof window&&"undefined"!=typeof navigator&&navigator.serviceWorker&&(navigator.serviceWorker.register("/sw.js").then((function(e){navigator.serviceWorker.controller&&(setInterval((function(){e.update()}),s),e.waiting?t.updateReady(e.waiting):e.installing?t.trackInstalling(e.installing):e.addEventListener("updatefound",(function(){t.trackInstalling(e.installing)})))})),navigator.serviceWorker.addEventListener("controllerchange",(function(){t.refreshing||(t.refreshing=!0,window.location.reload())})))},t.trackInstalling=function(e){e.addEventListener("statechange",(function(){"installed"===e.state&&t.updateReady(e)}))},t.updateReady=function(e){t.setState({showButton:!0,updateHandler:function(){t.setState({showButton:!1}),e.postMessage({action:"skipWaiting"})}})},t.handleUpdate=function(){"function"==typeof t.state.updateHandler&&t.state.updateHandler()},t}(0,c.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.registerServiceWorker()},n.render=function(){return this.state.showButton||this.props.force?r.default.createElement("section",{className:"UpdateMessage-module--alert--2mgpJ",role:"alert"},r.default.createElement("h1",{className:"gg-t-speak"},"An updated version of this site is available"),r.default.createElement("button",{onClick:this.handleUpdate,className:"UpdateMessage-module--button--VGYjA"},"Reload this page")):null},t}(r.Component);function d(){return r.default.createElement("footer",{className:"footer-module--container--2g3c7"},r.default.createElement("main",{className:"footer-module--content--1tHcU"},r.default.createElement("section",{className:"footer-module--about--5C_Jg"},r.default.createElement("p",{className:"gg-t-speak-up"},"© ",(new Date).getFullYear()," David Wheatley"),r.default.createElement("p",{className:"gg-t-whisper"},r.default.createElement("a",{href:"https://github.com/davwheat/giffgaff-status",rel:"noopener noreferrer"},"View this site on GitHub")),r.default.createElement("p",{className:"gg-t-whisper"},"This page is run by a member of the giffgaff community and does not represent the views or opinions of giffgaff Limited, nor its staff. giffgaff is the registered trademark of giffgaff Limited.")),r.default.createElement("nav",{className:"footer-module--nav--1yY7R"},r.default.createElement("a",{href:"https://giffgaff.com?utm_source=giffgaffstatus_com_mrjeeves",rel:"noopener noreferrer"},"giffgaff home"),r.default.createElement("a",{href:"https://giffgaff.com/dashboard?utm_source=giffgaffstatus_com_mrjeeves",rel:"noopener noreferrer"},"My giffgaff"),r.default.createElement("a",{href:"https://community.giffgaff.com/?utm_source=giffgaffstatus_com_mrjeeves",rel:"noopener noreferrer"},"giffgaff community"),r.default.createElement("a",{href:"https://giffgaff.davwheat.dev/?utm_source=giffgaffstatus_com_mrjeeves",rel:"noopener noreferrer"},"giffgaff unofficial help"))))}var h=n(435);var m=function(e){e.siteTitle;return r.default.createElement("header",{className:"header-module--header--2E8LR"},r.default.createElement("div",{className:"header-module--headerInnerContainer--2ekvt"},r.default.createElement(h.Z,{href:"/"},r.default.createElement("svg",{className:"header-module--headerLogo--3qLUq",viewBox:"0 0 180 56",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("title",null,"giffgaff status"),r.default.createElement("path",{d:"M0 0h256v56H0z"}),r.default.createElement("path",{fill:"none",stroke:"#fff",strokeMiterlimit:"10",d:"M98 0v56"}),r.default.createElement("path",{fill:"#fff",d:"M83.8 17a9.2 9.2 0 00-1.1 0 6.7 6.7 0 00-3.6.8 4.6 4.6 0 00-2 4.2v.4h-4.4V22c0-1.5.8-2.2 2.6-2.2h.7v-2.8a8.6 8.6 0 00-1.2-.1 6.4 6.4 0 00-3.4.8 4.4 4.4 0 00-2 4.2v11H67c-.4 0-.6-.2-.6-.6v-5c0-3.6-2-5.4-5.8-5.4a7.8 7.8 0 00-3 .5 2.4 2.4 0 00-2 2.3v1.4h3v-.7c0-.3.3-.6.8-.7a2.5 2.5 0 011-.2 2.6 2.6 0 012 .6 3 3 0 01.6 2v.2h-.4a14.5 14.5 0 00-4.9.7c-2 .7-3 2-3 3.8A3.7 3.7 0 0056 35a4.8 4.8 0 003.2 1 4.5 4.5 0 003.2-1 4.1 4.1 0 00.9-1.2v.6a1.4 1.4 0 00.4 1 1.7 1.7 0 001.3.5h7.6V25h4.5v10.7h3.3V25.1h3v-2.8h-3v-.2c0-1.5.8-2.3 2.6-2.3l.7.1zM62.6 29.8h.6v.3a3.4 3.4 0 01-.9 2.3 2.7 2.7 0 01-2.1 1.2 2.2 2.2 0 01-1.6-.5 1.8 1.8 0 01-.5-1.2q0-2.2 4.5-2.2M49.7 23.6v.4a3 3 0 00-.9-1 5 5 0 00-3.2-1 5.5 5.5 0 00-4.5 2 7.2 7.2 0 00-1.5 4.8 7.2 7.2 0 001.6 4.8 5.5 5.5 0 004.4 2 4.5 4.5 0 003.8-1.8v1.4a3 3 0 01-1.1 2.6 4.3 4.3 0 01-2.7.7A8.4 8.4 0 0143 38l-1-.5-1 2.7a10.6 10.6 0 004.7 1.2 8 8 0 005-1.5 5.7 5.7 0 002.1-4.9v-9.2c0-.4.2-.6.6-.6h1v-2.8h-3.1a1.5 1.5 0 00-1.1.4 1.1 1.1 0 00-.4.8m-6 2.3a2.9 2.9 0 012.3-1c2.3 0 3.4 1.3 3.4 3.9a4.5 4.5 0 01-1 3.1 3.2 3.2 0 01-4.7-.4 4.6 4.6 0 01-.9-2.9 4.2 4.2 0 01.9-2.7M39.1 25v-2.6h-3V22c0-1.5 1-2.3 2.7-2.3h.7V17a9.2 9.2 0 00-1.2 0 7 7 0 00-3.5.8 4.6 4.6 0 00-2 4.2v.4h-4.4V22c0-1.5.8-2.2 2.6-2.2h.7V17a10 10 0 00-1.2 0 6.8 6.8 0 00-3.4.8A4.5 4.5 0 0025 22v11h-2.5c-.4 0-.5-.2-.5-.6v-8.3a1.8 1.8 0 00-.5-1.4 1.8 1.8 0 00-1.3-.3H14a1.6 1.6 0 00-1.1.4 1.1 1.1 0 00-.3.8.4.4 0 000 .3h-.1a3.7 3.7 0 00-1-1 5.5 5.5 0 00-3.1-.9 5.5 5.5 0 00-4.5 2 7.4 7.4 0 00-1.5 4.7A7.8 7.8 0 004 33.5a5.5 5.5 0 004.5 2 4.3 4.3 0 003.7-1.7v1.3a3 3 0 01-1.1 2.6 4.5 4.5 0 01-2.7.8 8.3 8.3 0 01-2.6-.5l-1.1-.5-1 2.7a10.7 10.7 0 004.8 1.2 8 8 0 004.8-1.5 5.8 5.8 0  002.3-4.9v-9.3c0-.3.2-.5.5-.5h2c.4 0 .5.2.5.6V34a1.8 1.8 0 00.5 1.4 1.6 1.6 0 001.3.4h8V25h4.4v10.8h3.4V25zm-32.5.9a3 3 0 012.4-1c2.2 0 3.3 1.3 3.3 3.9a4.4 4.4 0 01-1 3.2 3 3 0 01-2.2.8 3 3 0 01-2.4-1.2 4.6 4.6 0 01-1-3 4.1 4.1 0 01.9-2.7"}),r.default.createElement("path",{fill:"#fff",d:"M18.6 17H22v3.4h-3.4z"}),r.default.createElement("text",{x:"110",y:"34",fill:"#fff",fontSize:"20px",fontWeight:"400"},"status"))),r.default.createElement("nav",{className:"header-module--nav--hrUpL"},r.default.createElement("a",{href:"https://giffgaff.com/?utm_source=giffgaffstatus_com_mrjeeves"},"giffgaff home"))))};m.defaultProps={siteTitle:""};var p=m;var v=function(e){var t,i=e.children,l=e.pageTitle,c=e.embedded,s=(0,a.useStaticQuery)("3649515864");return c||(t=n(2597)),r.default.createElement(r.default.Fragment,null,r.default.createElement(u,{title:l}),r.default.createElement(f,null),!c&&r.default.createElement(p,{siteTitle:s.site.siteMetadata.title}),r.default.createElement("main",{className:(0,o.Z)("layout-module--mainContent--3zC8q",[!c&&t.mainContent])},i),!c&&r.default.createElement(d,null))};v.defaultProps={embedded:!1};var g=v},2597:function(e,t,n){"use strict";n.r(t),n.d(t,{___gatsby:function(){return r},gatsbyFocusWrapper:function(){return a},mainContent:function(){return o}});const r="non-embed-module--___gatsby--7S0WP",a="non-embed-module--gatsby-focus-wrapper--f9rd7",o="non-embed-module--mainContent--2BG9U"},5666:function(e){var t=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof v?t:v,o=Object.create(a.prototype),i=new C(r||[]);return o._invoke=function(e,t,n){var r=f;return function(a,o){if(r===h)throw new Error("Generator is already running");if(r===m){if("throw"===a)throw o;return x()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=O(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(e,t,n);if("normal"===u.type){if(r=n.done?m:d,u.arg===p)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=m,n.method="throw",n.arg=u.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(j){return{type:"throw",arg:j}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",h="executing",m="completed",p={};function v(){}function g(){}function y(){}var w={};w[o]=function(){return this};var E=Object.getPrototypeOf,b=E&&E(E(M([])));b&&b!==n&&r.call(b,o)&&(w=b);var k=y.prototype=v.prototype=Object.create(w);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(a,o,i,l){var u=s(e[a],e,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}var a;this._invoke=function(e,r){function o(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(o,o):o()}}function O(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,O(e,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var a=s(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function M(e){if(e){var n=e[o];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function n(){for(;++a<e.length;)if(r.call(e,a))return n.value=e[a],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:x}}function x(){return{value:t,done:!0}}return g.prototype=k.constructor=y,y.constructor=g,g.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(N.prototype),N.prototype[i]=function(){return this},e.AsyncIterator=N,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new N(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},_(k),u(k,l,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function a(r,a){return l.type="throw",l.arg=e,n.next=r,a&&(n.method="next",n.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;P(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=09e6374bb41dcf757039ddf5d306a02a79b15d80-81019c06898cad179730.js.map