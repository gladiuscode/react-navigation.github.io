"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[63057],{59265:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const s={id:"use-scroll-to-top",title:"useScrollToTop",sidebar_label:"useScrollToTop"},l=void 0,c={id:"use-scroll-to-top",title:"useScrollToTop",description:"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars.",source:"@site/versioned_docs/version-6.x/use-scroll-to-top.md",sourceDirName:".",slug:"/use-scroll-to-top",permalink:"/docs/6.x/use-scroll-to-top",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-scroll-to-top.md",tags:[],version:"6.x",frontMatter:{id:"use-scroll-to-top",title:"useScrollToTop",sidebar_label:"useScrollToTop"},sidebar:"docs",previous:{title:"useLinkBuilder",permalink:"/docs/6.x/use-link-builder"},next:{title:"useTheme",permalink:"/docs/6.x/use-theme"}},i={},a=[{value:"Using with class component",id:"using-with-class-component",level:2},{value:"Providing scroll offset",id:"providing-scroll-offset",level:2}];function p(e){const o={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"The expected native behavior of scrollable components is to respond to events from navigation that will scroll to top when tapping on the active tab as you would expect from native tab bars."}),"\n",(0,t.jsxs)(o.p,{children:["In order to achieve it we export ",(0,t.jsx)(o.code,{children:"useScrollToTop"})," which accept ref to scrollable component (e,g. ",(0,t.jsx)(o.code,{children:"ScrollView"})," or ",(0,t.jsx)(o.code,{children:"FlatList"}),")."]}),"\n",(0,t.jsx)(o.p,{children:"Example:"}),"\n",(0,t.jsx)("samp",{id:"use-scroll-to-top"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useScrollToTop } from '@react-navigation/native';\n\nfunction Albums() {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <ScrollView ref={ref}>{/* content */}</ScrollView>;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"using-with-class-component",children:"Using with class component"}),"\n",(0,t.jsx)(o.p,{children:"You can wrap your class component in a function component to use the hook:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"class Albums extends React.Component {\n  render() {\n    return <ScrollView ref={this.props.scrollRef}>{/* content */}</ScrollView>;\n  }\n}\n\n// Wrap and export\nexport default function (props) {\n  const ref = React.useRef(null);\n\n  useScrollToTop(ref);\n\n  return <Albums {...props} scrollRef={ref} />;\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"providing-scroll-offset",children:"Providing scroll offset"}),"\n",(0,t.jsx)(o.p,{children:"If you require offset to scroll position you can wrap and decorate passed reference:"}),"\n",(0,t.jsx)("samp",{id:"use-scroll-to-top-offset"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"import * as React from 'react';\nimport { ScrollView } from 'react-native';\nimport { useScrollToTop } from '@react-navigation/native';\n\nfunction Albums() {\n  const ref = React.useRef(null);\n\n  useScrollToTop(\n    React.useRef({\n      scrollToTop: () => ref.current?.scrollTo({ y: 100 }),\n    })\n  );\n\n  return <ScrollView ref={ref}>{/* content */}</ScrollView>;\n}\n"})})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>l});var t=n(67294);const r={},s=t.createContext(r);function l(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);