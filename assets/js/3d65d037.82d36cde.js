"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["8627"],{44139:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>u,frontMatter:()=>l});var t=JSON.parse('{"id":"web-support","title":"React Navigation on Web","description":"React Navigation has built-in support for the Web platform. This allows you to use the same navigation logic in your React Native app as well as on the web. The navigators require using React Native for Web to work on the web.","source":"@site/versioned_docs/version-7.x/web-support.md","sourceDirName":".","slug":"/web-support","permalink":"/docs/web-support","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/web-support.md","tags":[],"version":"7.x","frontMatter":{"id":"web-support","title":"React Navigation on Web","sidebar_label":"Web support"},"sidebar":"docs","previous":{"title":"Configuring links","permalink":"/docs/configuring-links"},"next":{"title":"Server rendering","permalink":"/docs/server-rendering"}}'),i=r("85893"),a=r("50065"),o=r("47902"),s=r("5525");let l={id:"web-support",title:"React Navigation on Web",sidebar_label:"Web support"},c=void 0,d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Lazy loading screens",id:"lazy-loading-screens",level:2},{value:"Web-specific behavior",id:"web-specific-behavior",level:2},{value:"Configuring hosting providers",id:"configuring-hosting-providers",level:2},{value:"Netlify",id:"netlify",level:3},{value:"Vercel",id:"vercel",level:3},{value:"GitHub Pages",id:"github-pages",level:3}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["React Navigation has built-in support for the Web platform. This allows you to use the same navigation logic in your React Native app as well as on the web. The navigators require using ",(0,i.jsx)(n.a,{href:"https://github.com/necolas/react-native-web",children:"React Native for Web"})," to work on the web."]}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,i.jsx)(n.p,{children:"While Web support works out of the box, there are some things to configure to ensure a good experience on the web:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/configuring-links",children:(0,i.jsx)(n.strong,{children:"Configure linking"})})}),"\n",(0,i.jsx)(n.p,{children:"Configuring linking allows React Navigation to integrate with the browser's URL bar. This is crucial for web apps to have proper URLs for each screen."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/link",children:(0,i.jsx)(n.strong,{children:"Use Button or Link components"})})}),"\n",(0,i.jsxs)(n.p,{children:["You may be familiar with using ",(0,i.jsx)(n.code,{children:"navigation.navigate"})," to navigate between screens. But it's important to avoid using it when supporting the web. Instead, use the ",(0,i.jsx)(n.code,{children:"Link"})," or ",(0,i.jsx)(n.a,{href:"/docs/elements#button",children:(0,i.jsx)(n.code,{children:"Button"})})," components to navigate between screens. This ensures that an anchor tag is rendered which provides the expected behavior on the web."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/server-rendering",children:(0,i.jsx)(n.strong,{children:"Server rendering"})})}),"\n",(0,i.jsx)(n.p,{children:"Currently, React Navigation works best with fully client-side rendered apps. However, minimal server-side rendering support is available. So you can optionally choose to server render your app."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["In React Navigation 4, it was necessary to install a separate package called ",(0,i.jsx)(n.code,{children:"@react-navigation/web"})," to use web integration. This package is no longer needed in recent versions of React Navigation. If you have it installed, make sure to uninstall it to avoid conflicts."]})}),"\n",(0,i.jsx)(n.h2,{id:"lazy-loading-screens",children:"Lazy loading screens"}),"\n",(0,i.jsx)(n.p,{children:"By default, screen components are bundled in the main bundle. This can lead to a large bundle size if you have many screens. It's important to keep the bundle size small on the web for faster loading times."}),"\n",(0,i.jsxs)(n.p,{children:["To reduce the bundle size, you can use ",(0,i.jsxs)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import",children:["dynamic ",(0,i.jsx)(n.code,{children:"import()"})]})," with ",(0,i.jsx)(n.a,{href:"https://react.dev/reference/react/lazy",children:(0,i.jsx)(n.code,{children:"React.lazy"})})," to lazy load screens:"]}),"\n",(0,i.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,i.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,i.jsx)(n.pre,{"data-name":"Lazy loading screens","data-snack":"true",children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Lazy loading screens" snack',children:"import { Suspense, lazy } from 'react';\n\nconst MyStack = createNativeStackNavigator({\n  screenLayout: ({ children }) => (\n    <Suspense fallback={<Loading />}>{children}</Suspense>\n  ),\n  screens: {\n    Home: {\n      component: lazy(() => import('./HomeScreen')),\n    },\n    Profile: {\n      component: lazy(() => import('./ProfileScreen')),\n    },\n  },\n});\n"})})}),(0,i.jsxs)(s.Z,{value:"dynamic",label:"Dynamic",children:[(0,i.jsx)(n.pre,{"data-name":"Lazy loading screens","data-snack":"true",children:(0,i.jsx)(n.code,{className:"language-js",metastring:'name="Lazy loading screens" snack',children:"import { Suspense, lazy } from 'react';\n\nconst HomeScreen = lazy(() => import('./HomeScreen'));\nconst ProfileScreen = lazy(() => import('./ProfileScreen'));\n\nfunction MyStack() {\n  return (\n    <Stack.Navigator\n      screenLayout={({ children }) => (\n        <Suspense fallback={<Loading />}>{children}</Suspense>\n      )}\n    >\n      <Stack.Screen name=\"Home\" component={HomeScreen} />\n      <Stack.Screen name=\"Profile\" component={ProfileScreen} />\n    </Stack.Navigator>\n  );\n}\n"})}),(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Make sure to use ",(0,i.jsx)(n.code,{children:"React.lazy"})," ",(0,i.jsx)(n.strong,{children:"outside"})," the component containing the navigator configuration. Otherwise, it will return a new component on each render, causing the ",(0,i.jsx)(n.a,{href:"/docs/troubleshooting#screens-are-unmountingremounting-during-navigation",children:"screen to be unmounted and remounted"})," every time the component rerenders."]})})]})]}),"\n",(0,i.jsx)(n.p,{children:"This will split the screen components into separate chunks (depending on your bundler) which are loaded on-demand when the screen is rendered. This can significantly reduce the initial bundle size."}),"\n",(0,i.jsxs)(n.p,{children:["In addition, you can use the ",(0,i.jsx)(n.a,{href:"/docs/navigator#screen-layout",children:(0,i.jsx)(n.code,{children:"screenLayout"})})," to wrap your screens in a ",(0,i.jsx)(n.a,{href:"https://react.dev/reference/react/Suspense",children:(0,i.jsx)(n.code,{children:"<Suspense>"})})," boundary. The suspense fallback can be used to show a loading indicator and will be shown while the screen component is being loaded."]}),"\n",(0,i.jsx)(n.h2,{id:"web-specific-behavior",children:"Web-specific behavior"}),"\n",(0,i.jsx)(n.p,{children:"Some of the navigators have different behavior on the web compared to native platforms:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/stack-navigator",children:(0,i.jsx)(n.strong,{children:"Native Stack Navigator"})})}),"\n",(0,i.jsx)(n.p,{children:"Native Stack Navigator uses the platform's primitives to handle animations and gestures on native platforms. However, animations and gestures are not supported on the web."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/stack-navigator",children:(0,i.jsx)(n.strong,{children:"Stack Navigator"})})}),"\n",(0,i.jsxs)(n.p,{children:["Stack Navigator uses ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/",children:(0,i.jsx)(n.code,{children:"react-native-gesture-handler"})})," to handle swipe gestures on native platforms. However, gestures are not supported on the web."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, screen transitions are disabled by default on the web. You can enable them by setting ",(0,i.jsx)(n.code,{children:"animationEnabled: true"})," in the navigator's options."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/drawer-navigator",children:(0,i.jsx)(n.strong,{children:"Drawer Navigator"})})}),"\n",(0,i.jsxs)(n.p,{children:["Drawer Navigator uses ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/",children:(0,i.jsx)(n.code,{children:"react-native-gesture-handler"})})," to handle swipe gestures and ",(0,i.jsx)(n.a,{href:"https://docs.swmansion.com/react-native-reanimated/",children:(0,i.jsx)(n.code,{children:"react-native-reanimated"})})," for animations on native platforms. However, gestures are not supported on the web, and animations are handled using CSS transitions."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In addition, navigators render hyperlinks on the web when possible, such as in the drawer sidebar, tab bar, stack navigator's back button, etc."}),"\n",(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"react-native-gesture-handler"})," and ",(0,i.jsx)(n.code,{children:"react-native-reanimated"})," are not used on the web, avoid importing them in your own code to reduce the bundle size unless you need them for your components. You can use ",(0,i.jsx)(n.code,{children:".native.js"})," or ",(0,i.jsx)(n.code,{children:".native.ts"})," extensions for code specific to native platforms."]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-hosting-providers",children:"Configuring hosting providers"}),"\n",(0,i.jsxs)(n.p,{children:["React Navigation is designed for Single Page Applications (SPAs). This usually means that the ",(0,i.jsx)(n.code,{children:"index.html"})," file needs to be served for all routes."]}),"\n",(0,i.jsxs)(n.p,{children:["During development, the bundler such as Webpack or Metro automatically handles this. However, when deploying the site, you may need to configure redirects to ensure that the ",(0,i.jsx)(n.code,{children:"index.html"})," file is served for all routes to avoid 404 errors."]}),"\n",(0,i.jsx)(n.p,{children:"Here are instructions for some of the popular hosting providers:"}),"\n",(0,i.jsx)(n.h3,{id:"netlify",children:"Netlify"}),"\n",(0,i.jsxs)(n.p,{children:["To handle redirects on Netlify, add the following in the ",(0,i.jsx)(n.code,{children:"netlify.toml"})," file at the root of your project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[[redirects]]\n  from = "/*"\n  to = "/index.html"\n  status = 200\n'})}),"\n",(0,i.jsx)(n.h3,{id:"vercel",children:"Vercel"}),"\n",(0,i.jsxs)(n.p,{children:["To handle redirects on Vercel, add the following in the ",(0,i.jsx)(n.code,{children:"vercel.json"})," file at the root of your project:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"github-pages",children:"GitHub Pages"}),"\n",(0,i.jsx)(n.p,{children:"GitHub Pages doesn't support such redirection configuration for SPAs. There are a couple of ways to work around this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Rename your ",(0,i.jsx)(n.code,{children:"index.html"})," to ",(0,i.jsx)(n.code,{children:"404.html"}),". This will serve the ",(0,i.jsx)(n.code,{children:"404.html"})," file for all routes. However, this will cause a 404 status code to be returned for all routes. So it's not ideal for SEO."]}),"\n",(0,i.jsxs)(n.li,{children:["Write a script that copies the ",(0,i.jsx)(n.code,{children:"index.html"})," file to all routes in the build output. For example, if your app has routes ",(0,i.jsx)(n.code,{children:"/"}),", ",(0,i.jsx)(n.code,{children:"/about"}),", and ",(0,i.jsx)(n.code,{children:"/contact"}),", you can copy the ",(0,i.jsx)(n.code,{children:"index.html"})," file to ",(0,i.jsx)(n.code,{children:"about.html"})," and ",(0,i.jsx)(n.code,{children:"contact.html"}),"."]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},5525:function(e,n,r){r.d(n,{Z:()=>o});var t=r("85893");r("67294");var i=r("67026");let a="tabItem_Ymn6";function o(e){let{children:n,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.Z)(a,o),hidden:r,children:n})}},47902:function(e,n,r){r.d(n,{Z:()=>j});var t=r("85893"),i=r("67294"),a=r("67026"),o=r("69599"),s=r("16550"),l=r("32000"),c=r("4520"),d=r("38341"),u=r("76009");function h(e){var n,r;return null!==(r=null===(n=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function p(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var f=r("7227");let g="tabList__CuJ",v="tabItem_LNqP";function m(e){let{className:n,block:r,selectedValue:i,selectValue:s,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{let n=e.currentTarget,r=l[c.indexOf(n)].value;r!==i&&(d(n),s(r))},h=e=>{var n,r;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=c.indexOf(e.currentTarget)+1;t=null!==(n=c[r])&&void 0!==n?n:c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;t=null!==(r=c[n])&&void 0!==r?r:c[c.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:l.map(e=>{let{value:n,label:r,attributes:o}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...o,className:(0,a.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":i===n}),children:null!=r?r:n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:o}=e,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===o);return e?(0,i.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==o}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,i.useMemo)(()=>{let e=null!=n?n:h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,r])}(e),[o,f]=(0,i.useState)(()=>(function(e){var n;let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(r,'" but none of its children has the corresponding value. Available values are: ').concat(t.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return r}let i=null!==(n=t.find(e=>e.default))&&void 0!==n?n:t[0];if(!i)throw Error("Unexpected error: 0 tabValues");return i.value})({defaultValue:n,tabValues:a})),[g,v]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r}),o=(0,c._X)(a);return[o,(0,i.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[m,x]=function(e){var n;let{groupId:r}=e;let t=(n=r)?"docusaurus.tab.".concat(n):null,[a,o]=(0,u.Nk)(t);return[a,(0,i.useCallback)(e=>{if(!!t)o.set(e)},[t,o])]}({groupId:t}),b=(()=>{let e=null!=g?g:m;return p({value:e,tabValues:a})?e:null})();return(0,l.Z)(()=>{b&&f(b)},[b]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:a}))throw Error("Can't select invalid tab value=".concat(e));f(e),v(e),x(e)},[v,x,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",g),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function j(e){let n=(0,f.Z)();return(0,t.jsx)(b,{...e,children:h(e.children)},String(n))}},50065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return o}});var t=r(67294);let i={},a=t.createContext(i);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);