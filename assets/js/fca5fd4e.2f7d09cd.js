"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[80387],{75684:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(85893),a=t(11151);const i={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},s=void 0,r={id:"glossary-of-terms",title:"Glossary of terms",description:"This is a new section of the documentation and it's missing a lot of terms! Please submit a pull request or an issue with a term that you think should be explained here.",source:"@site/versioned_docs/version-7.x/glossary-of-terms.md",sourceDirName:".",slug:"/glossary-of-terms",permalink:"/docs/glossary-of-terms",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/glossary-of-terms.md",tags:[],version:"7.x",frontMatter:{id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},sidebar:"docs",previous:{title:"More Resources",permalink:"/docs/more-resources"},next:{title:"Pitch & anti-pitch",permalink:"/docs/pitch"}},c={},d=[{value:"Navigator",id:"navigator",level:2},{value:"Router",id:"router",level:2},{value:"Screen component",id:"screen-component",level:2},{value:"Navigation object",id:"navigation-object",level:2},{value:"Route object",id:"route-object",level:2},{value:"Navigation State",id:"navigation-state",level:2},{value:"Header",id:"header",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This is a new section of the documentation and it's missing a lot of terms! Please ",(0,o.jsx)(n.a,{href:"https://github.com/react-navigation/react-navigation.github.io",children:"submit a pull request or an issue"})," with a term that you think should be explained here."]})}),"\n",(0,o.jsx)(n.h2,{id:"navigator",children:"Navigator"}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.code,{children:"Navigator"})," is React component that decides how to render the screens you have defined. It contains ",(0,o.jsx)(n.code,{children:"Screen"})," elements as its children to define the configuration for screens."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"NavigationContainer"})," is a component which manages our navigation tree and contains the ",(0,o.jsx)(n.a,{href:"/docs/navigation-state",children:"navigation state"}),". This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from ",(0,o.jsx)(n.code,{children:"App.js"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator> // <---- This is a Navigator\n        <Stack.Screen name="Home" component={HomeScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"router",children:"Router"}),"\n",(0,o.jsxs)(n.p,{children:["A router is a collection of functions that decide how to handle actions and state changes in the navigator (similar to reducers in Redux apps). Normally you'd never need to interact with a router directly, unless you're writing a ",(0,o.jsx)(n.a,{href:"/docs/custom-navigators",children:"custom navigator"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"screen-component",children:"Screen component"}),"\n",(0,o.jsx)(n.p,{children:"A screen component is a component that we use in our route configuration."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'const Stack = createNativeStackNavigator();\n\nconst StackNavigator = (\n  <Stack.Navigator>\n    <Stack.Screen\n      name="Home"\n      component={HomeScreen} // <----\n    />\n    <Stack.Screen\n      name="Details"\n      component={DetailsScreen} // <----\n    />\n  </Stack.Navigator>\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The suffix ",(0,o.jsx)(n.code,{children:"Screen"})," in the component name is entirely optional, but a frequently used convention; we could call it ",(0,o.jsx)(n.code,{children:"Michael"})," and this would work just the same."]}),"\n",(0,o.jsx)(n.h2,{id:"navigation-object",children:"Navigation object"}),"\n",(0,o.jsx)(n.p,{children:"The navigation object contains methods used for navigation. It contains methods such as:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"dispatch"})," will send an action up to the router"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"navigate"}),", ",(0,o.jsx)(n.code,{children:"goBack"}),", etc are available to dispatch actions in a convenient way"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This object can be accessed with the ",(0,o.jsx)(n.a,{href:"/docs/use-navigation",children:(0,o.jsx)(n.code,{children:"useNavigation"})})," hook. It's also passed as a prop to screens defined with the dynamic API."]}),"\n",(0,o.jsxs)(n.p,{children:["For more details, see the ",(0,o.jsx)(n.a,{href:"/docs/navigation-object",children:'"Navigation object docs"'}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/route-object",children:'"Route object reference"'})," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",(0,o.jsx)(n.code,{children:"route"})," object."]}),"\n",(0,o.jsx)(n.h2,{id:"route-object",children:"Route object"}),"\n",(0,o.jsxs)(n.p,{children:["This prop will be passed to all screens. Contains information about the current route i.e. ",(0,o.jsx)(n.code,{children:"params"}),", ",(0,o.jsx)(n.code,{children:"key"})," and ",(0,o.jsx)(n.code,{children:"name"}),". It can also contain arbitrary params:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  key: 'B',\n  name: 'Profile',\n  params: { id: '123' }\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more details, see the ",(0,o.jsx)(n.a,{href:"/docs/route-object",children:'"Route object reference"'}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"navigation-state",children:"Navigation State"}),"\n",(0,o.jsx)(n.p,{children:"The state of a navigator generally looks something like this:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  key: 'StackRouterRoot',\n  index: 1,\n  routes: [\n    { key: 'A', name: 'Home' },\n    { key: 'B', name: 'Profile' },\n  ]\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:'For this navigation state, there are two routes (which may be tabs, or cards in a stack). The index indicates the active route, which is "B".'}),"\n",(0,o.jsxs)(n.p,{children:["You can read more about the navigation state ",(0,o.jsx)(n.a,{href:"/docs/navigation-state",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"header",children:"Header"}),"\n",(0,o.jsx)(n.p,{children:"Also known as navigation header, navigation bar, app bar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);