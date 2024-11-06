"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[48263],{4782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(85893),s=t(11151);const r={id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},o=void 0,a={id:"use-link-builder",title:"useLinkBuilder",description:"The useLinkBuilder hook lets us build a path to use for links for a screen in the current navigator's state. It returns a function that takes name and params for the screen to focus and returns path based on the linking options.",source:"@site/versioned_docs/version-6.x/use-link-builder.md",sourceDirName:".",slug:"/use-link-builder",permalink:"/docs/6.x/use-link-builder",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-link-builder.md",tags:[],version:"6.x",frontMatter:{id:"use-link-builder",title:"useLinkBuilder",sidebar_label:"useLinkBuilder"},sidebar:"docs",previous:{title:"useLinkProps",permalink:"/docs/6.x/use-link-props"},next:{title:"useScrollToTop",permalink:"/docs/6.x/use-scroll-to-top"}},u={},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"useLinkBuilder"})," hook lets us build a path to use for links for a screen in the current navigator's state. It returns a function that takes ",(0,i.jsx)(n.code,{children:"name"})," and ",(0,i.jsx)(n.code,{children:"params"})," for the screen to focus and returns path based on the ",(0,i.jsxs)(n.a,{href:"/docs/6.x/navigation-container#linking",children:[(0,i.jsx)(n.code,{children:"linking"})," options"]}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { Link, CommonActions, useLinkBuilder } from '@react-navigation/native';\n\n// ...\n\nfunction DrawerContent({ state, descriptors }) {\n  const buildLink = useLinkBuilder();\n\n  return state.routes((route) => (\n    <Link\n      to={buildLink(route.name, route.params)}\n      action={CommonActions.navigate(route.name)}\n    >\n      {descriptors[route.key].options.title}\n    </Link>\n  ));\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This hook is intended to be used in navigators to show links to various pages in it, such as drawer and tab navigators. If you're building a custom navigator, custom drawer content, custom tab bar etc. then you might want to use this hook."}),"\n",(0,i.jsx)(n.p,{children:"There are couple of important things to note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The destination screen must be present in the current navigator. It cannot be in a parent navigator or a navigator nested in a child."}),"\n",(0,i.jsxs)(n.li,{children:["It's intended to be only used in custom navigators to keep them reusable in multiple apps. For your regular app code, use paths directly instead of building paths for screens, or use ",(0,i.jsx)(n.a,{href:"/docs/6.x/link",children:(0,i.jsx)(n.code,{children:"Link"})})," and ",(0,i.jsx)(n.a,{href:"/docs/6.x/use-link-props",children:(0,i.jsx)(n.code,{children:"useLinkProps"})})," which transparently handle paths."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);