"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6398],{83939:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=o(85893),t=o(11151);const i={id:"use-link-props",title:"useLinkProps",sidebar_label:"useLinkProps"},r=void 0,a={id:"use-link-props",title:"useLinkProps",description:"The useLinkProps hook let's build our custom link components which let us navigate to a screen using a path instead of a screen name based on the linking options. It takes a path and returns an object with some props that you can pass to a component.",source:"@site/versioned_docs/version-6.x/use-link-props.md",sourceDirName:".",slug:"/use-link-props",permalink:"/docs/6.x/use-link-props",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/use-link-props.md",tags:[],version:"6.x",frontMatter:{id:"use-link-props",title:"useLinkProps",sidebar_label:"useLinkProps"},sidebar:"docs",previous:{title:"useLinkTo",permalink:"/docs/6.x/use-link-to"},next:{title:"useLinkBuilder",permalink:"/docs/6.x/use-link-builder"}},c={},l=[{value:"Options",id:"options",level:2},{value:"<code>to</code>",id:"to",level:3},{value:"<code>action</code>",id:"action",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"useLinkProps"})," hook let's build our custom link components which let us navigate to a screen using a path instead of a screen name based on the ",(0,s.jsxs)(n.a,{href:"/docs/6.x/navigation-container#linking",children:[(0,s.jsx)(n.code,{children:"linking"})," options"]}),". It takes a path and returns an object with some props that you can pass to a component."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { useLinkProps } from '@react-navigation/native';\n\n// ...\n\nconst LinkButton = ({ to, action, children, ...rest }) => {\n  const { onPress, ...props } = useLinkProps({ to, action });\n\n  const [isHovered, setIsHovered] = React.useState(false);\n\n  if (Platform.OS === 'web') {\n    // It's important to use a `View` or `Text` on web instead of `TouchableX`\n    // Otherwise React Native for Web omits the `onClick` prop that's passed\n    // You'll also need to pass `onPress` as `onClick` to the `View`\n    // You can add hover effects using `onMouseEnter` and `onMouseLeave`\n    return (\n      <View\n        onClick={onPress}\n        onMouseEnter={() => setIsHovered(true)}\n        onMouseLeave={() => setIsHovered(false)}\n        style={{ transitionDuration: '150ms', opacity: isHovered ? 0.5 : 1 }}\n        {...props}\n        {...rest}\n      >\n        <Text>{children}</Text>\n      </View>\n    );\n  }\n\n  return (\n    <TouchableOpacity onPress={onPress} {...props} {...rest}>\n      <Text>{children}</Text>\n    </TouchableOpacity>\n  );\n};\n\nfunction Home() {\n  return (\n    <LinkButton to={{ screen: 'Profile', params: { id: 'jane' } }}>\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can use the ",(0,s.jsx)(n.code,{children:"LinkButton"})," component elsewhere in your app:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function Home() {\n  return (\n    <LinkButton to={{ screen: 'Profile', params: { id: 'jane' } }}>\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"props"})," object returned by ",(0,s.jsx)(n.code,{children:"useLinkProps"})," contains the required props for accessible link components. When we use these props on ",(0,s.jsx)(n.code,{children:"View"}),", ",(0,s.jsx)(n.code,{children:"Text"})," etc., the link component responds to user actions such as ",(0,s.jsx)(n.code,{children:"Ctrl+Click"}),"/",(0,s.jsx)(n.code,{children:"\u2318+Click"})," to open links in new tab while keeping regular clicks within the same web page."]}),"\n",(0,s.jsxs)(n.p,{children:["There are couple of important things to note when using ",(0,s.jsx)(n.code,{children:"useLinkProps"})," with current version of React Native for Web:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["You must explicitly pass ",(0,s.jsx)(n.code,{children:"onPress"})," as the ",(0,s.jsx)(n.code,{children:"onClick"})," prop, otherwise in-page navigation won't work"]}),"\n",(0,s.jsxs)(n.li,{children:["You can only use ",(0,s.jsx)(n.code,{children:"View"})," or ",(0,s.jsx)(n.code,{children:"Text"})," with ",(0,s.jsx)(n.code,{children:"useLinkProps"}),". The ",(0,s.jsx)(n.code,{children:"TouchableX"})," components don't support a correct ",(0,s.jsx)(n.code,{children:"onClick"})," event which we need"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In a future version of React Native for Web, these won't be an issue and you'll be able to have the same code for links on Web, iOS and Android. But until then, you need to write platform specific code for Web and native."}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"to",children:(0,s.jsx)(n.code,{children:"to"})}),"\n",(0,s.jsxs)(n.p,{children:["You can pass an object with a ",(0,s.jsx)(n.code,{children:"screen"})," property:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function Home() {\n  return (\n    <LinkButton to={{ screen: 'Profile', params: { id: 'jane' } }}>\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The syntax of this object is the same as ",(0,s.jsx)(n.a,{href:"/docs/6.x/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator",children:"navigating to a screen in a nested navigators"}),". This uses a ",(0,s.jsx)(n.code,{children:"navigate"})," action for navigation by default, unless you specify a different action."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can also pass an absolute path to the screen, e.g. - ",(0,s.jsx)(n.code,{children:"/profile/jane"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This will be used for the ",(0,s.jsx)(n.code,{children:"href"})," prop as well as for in-page navigation."]}),"\n",(0,s.jsx)(n.h3,{id:"action",children:(0,s.jsx)(n.code,{children:"action"})}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes we want a different behavior for in-page navigation, such as ",(0,s.jsx)(n.code,{children:"replace"})," instead of ",(0,s.jsx)(n.code,{children:"navigate"}),". We can use the ",(0,s.jsx)(n.code,{children:"action"})," prop to customize it:"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { StackActions } from '@react-navigation/native';\n\n// ...\n\nfunction Home() {\n  return (\n    <LinkButton\n      to={{ screen: 'Profile', params: { id: 'jane' } }}\n      action={StackActions.replace('Profile', { id: 'jane' })}\n    >\n      Go to Jane's profile\n    </LinkButton>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"action"})," prop is not specified, the path provided to the ",(0,s.jsx)(n.code,{children:"to"})," prop will be used and dispatched as a ",(0,s.jsx)(n.code,{children:"navigate"})," action."]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var s=o(67294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);