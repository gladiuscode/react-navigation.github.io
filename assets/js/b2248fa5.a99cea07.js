"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[78622],{3905:function(t,e,o){o.d(e,{Zo:function(){return u},kt:function(){return d}});var i=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=i.createContext({}),c=function(t){var e=i.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},u=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=c(o),d=n,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||r;return o?i.createElement(h,a(a({ref:e},u),{},{components:o})):i.createElement(h,a({ref:e},u))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,a=new Array(r);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1304:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var i=o(87462),n=o(63366),r=(o(67294),o(3905)),a=["components"],s={id:"limitations",title:"Limitations",sidebar_label:"Limitations"},l=void 0,c={unversionedId:"limitations",id:"version-7.x/limitations",isDocsHomePage:!1,title:"Limitations",description:"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt a different library instead. We discuss the high level design decisions in the pitch & anti-pitch section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you.",source:"@site/versioned_docs/version-7.x/limitations.md",sourceDirName:".",slug:"/limitations",permalink:"/docs/7.x/limitations",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/limitations.md",tags:[],version:"7.x",frontMatter:{id:"limitations",title:"Limitations",sidebar_label:"Limitations"},sidebar:"version-7.x/docs",previous:{title:"Troubleshooting",permalink:"/docs/7.x/troubleshooting"},next:{title:"Tab navigation",permalink:"/docs/7.x/tab-based-navigation"}},u=[{value:"Limited right-to-left (RTL) layout support",id:"limited-right-to-left-rtl-layout-support",children:[],level:2},{value:"Some platform-specific behavior",id:"some-platform-specific-behavior",children:[],level:2}],p={toc:u};function f(t){var e=t.components,o=(0,n.Z)(t,a);return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As a potential user of the library, it's important to know what you can and cannot do with it. Armed with this knowledge, you may choose to adopt ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/alternatives"},"a different library instead"),". We discuss the high level design decisions in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/7.x/pitch"},"pitch & anti-pitch")," section, and here we will cover some of the use cases that are either not supported or are so difficult to do that they may as well be impossible. If any of the following limitations are dealbreakers for your app, React Navigation might not be for you."),(0,r.kt)("h2",{id:"limited-right-to-left-rtl-layout-support"},"Limited right-to-left (RTL) layout support"),(0,r.kt)("p",null,"We try to handle RTL layouts properly in React Navigation, however the team working on React Navigation is fairly small and we do not have the bandwidth or processes at the moment to test all changes against RTL layouts. So you might encounter issues with RTL layouts."),(0,r.kt)("p",null,"If you like what React Navigation has to offer but are turned off by this constraint, we encourage you to get involved and take ownership of RTL layout support. Please reach out to us on Twitter: ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/reactnavigation"},"@reactnavigation"),"."),(0,r.kt)("h2",{id:"some-platform-specific-behavior"},"Some platform-specific behavior"),(0,r.kt)("p",null,"React Navigation does not include support for the peek & pop feature available on devices with 3D touch."))}f.isMDXComponent=!0}}]);