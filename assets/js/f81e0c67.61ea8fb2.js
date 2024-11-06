"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[93671],{14113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const o={id:"navigation-events",title:"Navigation events",sidebar_label:"Navigation events"},a=void 0,r={id:"navigation-events",title:"Navigation events",description:"You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as focus, blur etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators.",source:"@site/versioned_docs/version-6.x/navigation-events.md",sourceDirName:".",slug:"/navigation-events",permalink:"/docs/6.x/navigation-events",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-events.md",tags:[],version:"6.x",frontMatter:{id:"navigation-events",title:"Navigation events",sidebar_label:"Navigation events"},sidebar:"docs",previous:{title:"NavigationContext",permalink:"/docs/6.x/navigation-context"},next:{title:"Navigation state",permalink:"/docs/6.x/navigation-state"}},c={},d=[{value:"Core events",id:"core-events",level:2},{value:"<code>focus</code>",id:"focus",level:3},{value:"<code>blur</code>",id:"blur",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>beforeRemove</code>",id:"beforeremove",level:3},{value:"Listening to events",id:"listening-to-events",level:2},{value:"<code>navigation.addListener</code>",id:"navigationaddlistener",level:3},{value:"<code>listeners</code> prop on <code>Screen</code>",id:"listeners-prop-on-screen",level:3},{value:"<code>screenListeners</code> prop on the navigator",id:"screenlisteners-prop-on-the-navigator",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as ",(0,s.jsx)(n.code,{children:"focus"}),", ",(0,s.jsx)(n.code,{children:"blur"})," etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators."]}),"\n",(0,s.jsxs)(n.p,{children:["Apart from the core events, each navigator can emit their own custom events. For example, stack navigator emits ",(0,s.jsx)(n.code,{children:"transitionStart"})," and ",(0,s.jsx)(n.code,{children:"transitionEnd"})," events, tab navigator emits ",(0,s.jsx)(n.code,{children:"tabPress"})," event etc. You can find details about the events emitted on the individual navigator's documentation."]}),"\n",(0,s.jsx)(n.h2,{id:"core-events",children:"Core events"}),"\n",(0,s.jsx)(n.p,{children:"Following are the events available in every navigator:"}),"\n",(0,s.jsx)(n.h3,{id:"focus",children:(0,s.jsx)(n.code,{children:"focus"})}),"\n",(0,s.jsx)(n.p,{children:"This event is emitted when the screen comes into focus."}),"\n",(0,s.jsxs)(n.p,{children:["For most cases, the ",(0,s.jsx)(n.a,{href:"/docs/6.x/use-focus-effect",children:(0,s.jsx)(n.code,{children:"useFocusEffect"})})," hook might be appropriate than adding the listener manually. See ",(0,s.jsx)(n.a,{href:"/docs/6.x/function-after-focusing-screen",children:"this guide"})," for more details to decide which API you should use."]}),"\n",(0,s.jsx)(n.h3,{id:"blur",children:(0,s.jsx)(n.code,{children:"blur"})}),"\n",(0,s.jsx)(n.p,{children:"This event is emitted when the screen goes out of focus."}),"\n",(0,s.jsx)(n.h3,{id:"state",children:(0,s.jsx)(n.code,{children:"state"})}),"\n",(0,s.jsxs)(n.p,{children:["This event is emitted when the navigator's state changes. This event receives the navigator's state in the event data (",(0,s.jsx)(n.code,{children:"event.data.state"}),")."]}),"\n",(0,s.jsx)(n.h3,{id:"beforeremove",children:(0,s.jsx)(n.code,{children:"beforeRemove"})}),"\n",(0,s.jsxs)(n.p,{children:["This event is emitted when the user is leaving the screen, there's a chance to ",(0,s.jsx)(n.a,{href:"/docs/6.x/preventing-going-back",children:"prevent the user from leaving"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"listening-to-events",children:"Listening to events"}),"\n",(0,s.jsx)(n.p,{children:"There are multiple ways to listen to events from the navigators. Each callback registered as an event listener receives an event object as its argument. The event object contains few properties:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"})," - Additional data regarding the event passed by the navigator. This can be ",(0,s.jsx)(n.code,{children:"undefined"})," if no data was passed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"target"})," - The route key for the screen that should receive the event. For some events, this maybe ",(0,s.jsx)(n.code,{children:"undefined"})," if the event wasn't related to a specific screen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"preventDefault"})," - For some events, there may be a ",(0,s.jsx)(n.code,{children:"preventDefault"})," method on the event object. Calling this method will prevent the default action performed by the event (such as switching tabs on ",(0,s.jsx)(n.code,{children:"tabPress"}),"). Support for preventing actions are only available for certain events like ",(0,s.jsx)(n.code,{children:"tabPress"})," and won't work for all events."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You can listen to events with the following APIs:"}),"\n",(0,s.jsx)(n.h3,{id:"navigationaddlistener",children:(0,s.jsx)(n.code,{children:"navigation.addListener"})}),"\n",(0,s.jsxs)(n.p,{children:["Inside a screen, you can add listeners on the ",(0,s.jsx)(n.code,{children:"navigation"})," prop with the ",(0,s.jsx)(n.code,{children:"addListener"})," method. The ",(0,s.jsx)(n.code,{children:"addListener"})," method takes 2 arguments: type of the event, and a callback to be called on the event. It returns a function that can be called to unsubscribe from the event."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigation.addListener('tabPress', (e) => {\n  // Prevent default action\n  e.preventDefault();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Normally, you'd add an event listener in ",(0,s.jsx)(n.code,{children:"React.useEffect"})," for function components. For example:"]}),"\n",(0,s.jsx)("samp",{id:"simple-focus-and-blur"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"unsubscribe"})," function can be returned as the cleanup function in the effect."]}),"\n",(0,s.jsxs)(n.p,{children:["For class components, you can add the event in the ",(0,s.jsx)(n.code,{children:"componentDidMount"})," lifecycle method and unsubscribe in ",(0,s.jsx)(n.code,{children:"componentWillUnmount"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Profile extends React.Component {\n  componentDidMount() {\n    this._unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n  }\n\n  componentWillUnmount() {\n    this._unsubscribe();\n  }\n\n  render() {\n    // Content of the component\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["One thing to keep in mind is that you can only listen to events from the immediate navigator with ",(0,s.jsx)(n.code,{children:"addListener"}),". For example, if you try to add a listener in a screen that's inside a stack that's nested in a tab, it won't get the ",(0,s.jsx)(n.code,{children:"tabPress"})," event. If you need to listen to an event from a parent navigator, you may use ",(0,s.jsx)(n.a,{href:"/docs/6.x/navigation-prop#getparent",children:(0,s.jsx)(n.code,{children:"navigation.getParent"})})," to get a reference to parent navigator's navigation prop and add a listener."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigation\n  .getParent('MyTabs')\n  .addListener('tabPress', (e) => {\n    // Do something\n  });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Here ",(0,s.jsx)(n.code,{children:"'MyTabs'"})," refers to the value you pass in the ",(0,s.jsx)(n.code,{children:"id"})," prop of the parent ",(0,s.jsx)(n.code,{children:"Tab.Navigator"})," whose event you want to listen to."]}),"\n",(0,s.jsxs)(n.h3,{id:"listeners-prop-on-screen",children:[(0,s.jsx)(n.code,{children:"listeners"})," prop on ",(0,s.jsx)(n.code,{children:"Screen"})]}),"\n",(0,s.jsxs)(n.p,{children:["Sometimes you might want to add a listener from the component where you defined the navigator rather than inside the screen. You can use the ",(0,s.jsx)(n.code,{children:"listeners"})," prop on the ",(0,s.jsx)(n.code,{children:"Screen"})," component to add listeners. The ",(0,s.jsx)(n.code,{children:"listeners"})," prop takes an object with the event names as keys and the listener callbacks as values."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Tab.Screen\n  name="Chat"\n  component={Chat}\n  listeners={{\n    tabPress: (e) => {\n      // Prevent default action\n      e.preventDefault();\n    },\n  }}\n/>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also pass a callback which returns the object with listeners. It'll receive ",(0,s.jsx)(n.code,{children:"navigation"})," and ",(0,s.jsx)(n.code,{children:"route"})," as the arguments."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"<Tab.Screen\n  name=\"Chat\"\n  component={Chat}\n  listeners={({ navigation, route }) => ({\n    tabPress: (e) => {\n      // Prevent default action\n      e.preventDefault();\n\n      // Do something with the `navigation` object\n      navigation.navigate('AnotherPlace');\n    },\n  })}\n/>\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"screenlisteners-prop-on-the-navigator",children:[(0,s.jsx)(n.code,{children:"screenListeners"})," prop on the navigator"]}),"\n",(0,s.jsxs)(n.p,{children:["You can pass a prop named ",(0,s.jsx)(n.code,{children:"screenListeners"})," to the navigator component, where you can specify listeners for events from all screens for this navigator. This can be useful if you want to listen to specific events regardless of the screen, or want to listen to common events such as ",(0,s.jsx)(n.code,{children:"state"})," which is emitted to all screens."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator\n  screenListeners={{\n    state: (e) => {\n      // Do something with the state\n      console.log(\'state changed\', e.data);\n    },\n  }}\n>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Similar to ",(0,s.jsx)(n.code,{children:"listeners"}),", you can also pass a function to ",(0,s.jsx)(n.code,{children:"screenListeners"}),". The function will receive the ",(0,s.jsxs)(n.a,{href:"/docs/6.x/navigation-prop",children:[(0,s.jsx)(n.code,{children:"navigation"})," prop"]})," and the ",(0,s.jsxs)(n.a,{href:"/docs/6.x/route-prop",children:[(0,s.jsx)(n.code,{children:"route"})," prop"]})," for each screen. This can be useful if you need access to the ",(0,s.jsx)(n.code,{children:"navigation"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<Tab.Navigator\n  screenListeners={({ navigation }) => ({\n    state: (e) => {\n      // Do something with the state\n      console.log(\'state changed\', e.data);\n\n      // Do something with the `navigation` object\n      if (!navigation.canGoBack()) {\n        console.log("we\'re on the initial screen");\n      }\n    },\n  })}\n>\n  <Tab.Screen name="Home" component={HomeScreen} />\n  <Tab.Screen name="Profile" component={ProfileScreen} />\n</Tab.Navigator>\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);