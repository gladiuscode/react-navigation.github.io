"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[88584],{99585:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var t=s(85893),o=s(11151);const i={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},c=void 0,r={id:"function-after-focusing-screen",title:"Call a function when focused screen changes",description:"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app.",source:"@site/versioned_docs/version-6.x/function-after-focusing-screen.md",sourceDirName:".",slug:"/function-after-focusing-screen",permalink:"/docs/6.x/function-after-focusing-screen",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/function-after-focusing-screen.md",tags:[],version:"6.x",frontMatter:{id:"function-after-focusing-screen",title:"Call a function when focused screen changes",sidebar_label:"Call a function when focused screen changes"},sidebar:"docs",previous:{title:"Preventing going back",permalink:"/docs/6.x/preventing-going-back"},next:{title:"Access the navigation prop from any component",permalink:"/docs/6.x/connecting-navigation-prop"}},a={},u=[{value:"Triggering an action with a <code>&#39;focus&#39;</code> event listener",id:"triggering-an-action-with-a-focus-event-listener",level:2},{value:"Triggering an action with the <code>useFocusEffect</code> hook",id:"triggering-an-action-with-the-usefocuseffect-hook",level:2},{value:"Re-rendering screen with the <code>useIsFocused</code> hook",id:"re-rendering-screen-with-the-useisfocused-hook",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this guide we will call a function or render something on screen focusing. This is useful for making additional API calls when a user revisits a particular screen in a Tab Navigator, or to track user events as they tap around our app."}),"\n",(0,t.jsx)(n.p,{children:"There are multiple approaches available to us:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Listening to the ",(0,t.jsx)(n.code,{children:"'focus'"})," event with an event listener."]}),"\n",(0,t.jsxs)(n.li,{children:["Using the ",(0,t.jsx)(n.code,{children:"useFocusEffect"})," hook provided by react-navigation."]}),"\n",(0,t.jsxs)(n.li,{children:["Using the ",(0,t.jsx)(n.code,{children:"useIsFocused"})," hook provided by react-navigation."]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"triggering-an-action-with-a-focus-event-listener",children:["Triggering an action with a ",(0,t.jsx)(n.code,{children:"'focus'"})," event listener"]}),"\n",(0,t.jsxs)(n.p,{children:["We can also listen to the ",(0,t.jsx)(n.code,{children:"'focus'"})," event with an event listener. After setting up an event listener, we must also stop listening to the event when the screen is unmounted."]}),"\n",(0,t.jsx)(n.p,{children:"With this approach, we will only be able to call an action when the screen focuses. This is useful for performing an action such as logging the screen view for analytics."}),"\n",(0,t.jsx)(n.p,{children:"Example:"}),"\n",(0,t.jsx)("samp",{id:"focus-event-listener"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { View } from 'react-native';\n\nfunction ProfileScreen({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // The screen is focused\n      // Call any action\n    });\n\n    // Return the function to unsubscribe from the event so it gets removed on unmount\n    return unsubscribe;\n  }, [navigation]);\n\n  return <View />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"/docs/6.x/navigation-events",children:"navigation events guide"})," for more details on the event listener API."]}),"\n",(0,t.jsxs)(n.p,{children:["In most cases, it's recommended to use the ",(0,t.jsx)(n.code,{children:"useFocusEffect"})," hook instead of adding the listener manually. See below for details."]}),"\n",(0,t.jsxs)(n.h2,{id:"triggering-an-action-with-the-usefocuseffect-hook",children:["Triggering an action with the ",(0,t.jsx)(n.code,{children:"useFocusEffect"})," hook"]}),"\n",(0,t.jsxs)(n.p,{children:["React Navigation provides a ",(0,t.jsx)(n.a,{href:"/docs/6.x/use-focus-effect",children:"hook"})," that runs an effect when the screen comes into focus and cleans it up when it goes out of focus. This is useful for cases such as adding event listeners, for fetching data with an API call when a screen becomes focused, or any other action that needs to happen once the screen comes into view."]}),"\n",(0,t.jsx)(n.p,{children:"This is particularly handy when we are trying to stop something when the page is unfocused, like stopping a video or audio file from playing, or stopping the tracking of a user's location."}),"\n",(0,t.jsx)("samp",{id:"simple-focus-effect"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { useFocusEffect } from '@react-navigation/native';\n\nfunction Profile({ userId }) {\n  const [user, setUser] = React.useState(null);\n\n  useFocusEffect(\n    React.useCallback(() => {\n      const unsubscribe = API.subscribe(userId, (user) => setUser(data));\n\n      return () => unsubscribe();\n    }, [userId])\n  );\n\n  return <ProfileContent user={user} />;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See the ",(0,t.jsx)(n.a,{href:"https://reactnavigation.org/docs/use-focus-effect/",children:(0,t.jsx)(n.code,{children:"useFocusEffect"})})," documentation for more details."]}),"\n",(0,t.jsxs)(n.h2,{id:"re-rendering-screen-with-the-useisfocused-hook",children:["Re-rendering screen with the ",(0,t.jsx)(n.code,{children:"useIsFocused"})," hook"]}),"\n",(0,t.jsxs)(n.p,{children:["React Navigation provides a ",(0,t.jsx)(n.a,{href:"/docs/6.x/use-is-focused",children:"hook"})," that returns a boolean indicating whether the screen is focused or not."]}),"\n",(0,t.jsxs)(n.p,{children:["The hook will return ",(0,t.jsx)(n.code,{children:"true"})," when the screen is focused and ",(0,t.jsx)(n.code,{children:"false"})," when our component is no longer focused. This enables us to render something conditionally based on whether the user is on the screen or not."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"useIsFocused"})," hook will cause our component to re-render when we focus and unfocus a screen. Using this hook component may introduce unnecessary component re-renders as a screen comes in and out of focus. This could cause issues depending on the type of action we're calling on focusing. Hence we recommend to use this hook only if you need to trigger a re-render. For side-effects such as subscribing to events or fetching data, use the methods described above."]}),"\n",(0,t.jsx)("samp",{id:"use-is-focused"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import * as React from 'react';\nimport { Text } from 'react-native';\nimport { useIsFocused } from '@react-navigation/native';\n\nfunction Profile() {\n  // This hook returns `true` if the screen is focused, `false` otherwise\n  const isFocused = useIsFocused();\n\n  return <Text>{isFocused ? 'focused' : 'unfocused'}</Text>;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This example is also documented in the ",(0,t.jsxs)(n.a,{href:"/docs/6.x/use-is-focused",children:[(0,t.jsx)(n.code,{children:"useIsFocused"})," API documentation"]}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>c});var t=s(67294);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);