"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[31047],{17046:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(85893),s=t(11151);const a={id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},o=void 0,r={id:"navigation-prop",title:"Navigation prop reference",description:"Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:",source:"@site/versioned_docs/version-6.x/navigation-prop.md",sourceDirName:".",slug:"/navigation-prop",permalink:"/docs/6.x/navigation-prop",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/navigation-prop.md",tags:[],version:"6.x",frontMatter:{id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},sidebar:"docs",previous:{title:"Route prop",permalink:"/docs/6.x/route-prop"},next:{title:"NavigationContext",permalink:"/docs/6.x/navigation-context"}},c={},d=[{value:"Navigator-dependent functions",id:"navigator-dependent-functions",level:3},{value:"Common API reference",id:"common-api-reference",level:2},{value:"<code>navigate</code>",id:"navigate",level:3},{value:"<code>goBack</code>",id:"goback",level:3},{value:"Going back from a specific screen",id:"going-back-from-a-specific-screen",level:4},{value:"<code>reset</code>",id:"reset",level:3},{value:"<code>setParams</code>",id:"setparams",level:3},{value:"<code>setOptions</code>",id:"setoptions",level:3},{value:"Navigation events",id:"navigation-events",level:2},{value:"<code>isFocused</code>",id:"isfocused",level:3},{value:"Advanced API Reference",id:"advanced-api-reference",level:2},{value:"<code>dispatch</code>",id:"dispatch",level:3},{value:"Custom action creators",id:"custom-action-creators",level:4},{value:"<code>canGoBack</code>",id:"cangoback",level:3},{value:"<code>getParent</code>",id:"getparent",level:3},{value:"<code>getState</code>",id:"getstate",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Each ",(0,i.jsx)(n.code,{children:"screen"})," component in your app is provided with the ",(0,i.jsx)(n.code,{children:"navigation"})," prop automatically. The prop contains various convenience functions that dispatch navigation actions. It looks like this:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigate"})," - go to the given screen, this will behave differently based on the navigator"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"goBack"})," - go back to the previous screen, this will pop the current screen when used in a stack"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"reset"})," - replace the navigation state of the navigator with the given state"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setParams"})," - merge new params onto the route's params"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dispatch"})," - send an action object to update the ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setOptions"})," - update the screen's options"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"isFocused"})," - check whether the screen is focused"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"canGoBack"})," - check whether it's possible to go back from the current screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getState"})," - get the navigation state of the navigator"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getParent"})," - get the navigation object of the parent screen, if any"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"addListener"})," - subscribe to events for the screen"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"removeListener"})," - unsubscribe from events for the screen"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["It's important to highlight the ",(0,i.jsx)(n.code,{children:"navigation"})," prop is ",(0,i.jsx)(n.em,{children:"not"})," passed in to ",(0,i.jsx)(n.em,{children:"all"})," components; only ",(0,i.jsx)(n.code,{children:"screen"})," components receive this prop automatically! React Navigation doesn't do any magic here. For example, if you were to define a ",(0,i.jsx)(n.code,{children:"MyBackButton"})," component and render it as a child of a screen component, you would not be able to access the ",(0,i.jsx)(n.code,{children:"navigation"})," prop on it. If, however, you wish to access the ",(0,i.jsx)(n.code,{children:"navigation"})," prop in any of your components, you may use the ",(0,i.jsx)(n.a,{href:"/docs/6.x/use-navigation",children:(0,i.jsx)(n.code,{children:"useNavigation"})})," hook."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"setParams"}),"/",(0,i.jsx)(n.code,{children:"setOptions"})," etc. should only be called in ",(0,i.jsx)(n.code,{children:"useEffect"}),"/",(0,i.jsx)(n.code,{children:"useLayoutEffect"}),"/",(0,i.jsx)(n.code,{children:"componentDidMount"}),"/",(0,i.jsx)(n.code,{children:"componentDidUpdate"})," etc. Not during render or in constructor."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"navigator-dependent-functions",children:"Navigator-dependent functions"}),"\n",(0,i.jsxs)(n.p,{children:["There are several additional functions present on ",(0,i.jsx)(n.code,{children:"navigation"})," prop based on the kind of the current navigator."]}),"\n",(0,i.jsxs)(n.p,{children:["If the navigator is a stack navigator, several alternatives to ",(0,i.jsx)(n.code,{children:"navigate"})," and ",(0,i.jsx)(n.code,{children:"goBack"})," are provided and you can use whichever you prefer. The functions are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"replace"})," - replace the current screen with a new one"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"push"})," - push a new screen onto the stack"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pop"})," - go back in the stack"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"popToTop"})," - go to the top of the stack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/stack-navigator#helpers",children:"Stack navigator helpers"})," and ",(0,i.jsx)(n.a,{href:"/docs/6.x/native-stack-navigator#helpers",children:"Native Stack navigator helpers"})," for more details on these methods."]}),"\n",(0,i.jsx)(n.p,{children:"If the navigator is a tab navigator, the following are also available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jumpTo"})," - go to a specific screen in the tab navigator"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/bottom-tab-navigator#helpers",children:"Bottom Tab navigator helpers"}),", ",(0,i.jsx)(n.a,{href:"/docs/6.x/material-top-tab-navigator#helpers",children:"Material Top Tab navigator helpers"})," and ",(0,i.jsx)(n.a,{href:"/docs/6.x/material-bottom-tab-navigator#helpers",children:"Material Bottom Tab navigator helpers"})," for more details on these methods."]}),"\n",(0,i.jsx)(n.p,{children:"If the navigator is a drawer navigator, the following are also available:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"navigation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"jumpTo"})," - go to a specific screen in the drawer navigator"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"openDrawer"})," - open the drawer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"closeDrawer"})," - close the drawer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"toggleDrawer"})," - toggle the state, ie. switch from closed to open and vice versa"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/drawer-navigator#helpers",children:"Drawer navigator helpers"})," for more details on these methods."]}),"\n",(0,i.jsx)(n.h2,{id:"common-api-reference",children:"Common API reference"}),"\n",(0,i.jsxs)(n.p,{children:["The vast majority of your interactions with the ",(0,i.jsx)(n.code,{children:"navigation"})," prop will involve ",(0,i.jsx)(n.code,{children:"navigate"}),", ",(0,i.jsx)(n.code,{children:"goBack"}),", and ",(0,i.jsx)(n.code,{children:"setParams"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"navigate",children:(0,i.jsx)(n.code,{children:"navigate"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"navigate"})," method lets us navigate to another screen in your app. It takes the following arguments:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"navigation.navigate(name, params)"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - A destination name of the route that has been defined somewhere"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"params"})," - Params to pass to the destination route."]}),"\n"]}),"\n",(0,i.jsx)("samp",{id:"navigate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function HomeScreen({ navigation: { navigate } }) {\n  return (\n    <View>\n      <Text>This is the home screen of the app</Text>\n      <Button\n        onPress={() =>\n          navigate('Profile', { names: ['Brent', 'Satya', 'Micha\u015b'] })\n        }\n        title=\"Go to Brent's profile\"\n      />\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In a ",(0,i.jsx)(n.a,{href:"/docs/6.x/native-stack-navigator",children:"native stack navigator"}),", calling ",(0,i.jsx)(n.code,{children:"navigate"})," with a screen name will result in different behavior based on if the screen is already present or not. If the screen is already present in the stack's history, it'll go back to that screen and remove any screens after that. If the screen is not present, it'll push a new screen."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you have a stack with the history ",(0,i.jsx)(n.code,{children:"Home > Profile > Settings"})," and you call ",(0,i.jsx)(n.code,{children:"navigate(Profile)"}),", the resulting screens will be ",(0,i.jsx)(n.code,{children:"Home > Profile"})," as it goes back to ",(0,i.jsx)(n.code,{children:"Profile"})," and removes the ",(0,i.jsx)(n.code,{children:"Settings"})," screen."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the screen is identified by its name. But you can also customize it to take the params into account by using the ",(0,i.jsx)(n.a,{href:"/docs/6.x/screen#getid",children:(0,i.jsx)(n.code,{children:"getId"})})," prop."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, say you have specified a ",(0,i.jsx)(n.code,{children:"getId"})," prop for ",(0,i.jsx)(n.code,{children:"Profile"})," screen:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"<Tab.Screen\n  name={Profile}\n  component={ProfileScreen}\n  getId={({ params }) => params.userId}\n/>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, if you have a stack with the history ",(0,i.jsx)(n.code,{children:"Home > Profile (userId: bob) > Settings"})," and you call ",(0,i.jsx)(n.code,{children:"navigate(Profile, { userId: 'alice' })"}),", the resulting screens will be ",(0,i.jsx)(n.code,{children:"Home > Profile (userId: bob) > Settings > Profile (userId: alice)"})," since it'll add a new ",(0,i.jsx)(n.code,{children:"Profile"})," screen as no matching screen was found."]}),"\n",(0,i.jsx)(n.h3,{id:"goback",children:(0,i.jsx)(n.code,{children:"goBack"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"goBack"})," method lets us go back to the previous screen in the navigator."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"goBack"})," will go back from the screen that it is called from:"]}),"\n",(0,i.jsx)("samp",{id:"navigate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'function ProfileScreen({ navigation: { goBack } }) {\n  return (\n    <View>\n      <Button onPress={() => goBack()} title="Go back from ProfileScreen" />\n    </View>\n  );\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"going-back-from-a-specific-screen",children:"Going back from a specific screen"}),"\n",(0,i.jsx)(n.p,{children:"Consider the following navigation stack history:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"navigation.navigate({ name: SCREEN, key: SCREEN_KEY_A });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_B });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_C });\nnavigation.navigate({ name: SCREEN, key: SCREEN_KEY_D });\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now you are on ",(0,i.jsx)(n.em,{children:"screen D"})," and want to go back to ",(0,i.jsx)(n.em,{children:"screen A"})," (popping D, C, and B).\nThen you can use ",(0,i.jsx)(n.code,{children:"navigate"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"navigation.navigate({ key: SCREEN_KEY_A }); // will go to screen A FROM screen D\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Alternatively, as ",(0,i.jsx)(n.em,{children:"screen A"})," is the top of the stack, you can use ",(0,i.jsx)(n.code,{children:"navigation.popToTop()"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"reset",children:(0,i.jsx)(n.code,{children:"reset"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"reset"})," method lets us replace the navigator state with a new state:"]}),"\n",(0,i.jsx)("samp",{id:"navigate-replace-reset"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"navigation.reset({\n  index: 0,\n  routes: [{ name: 'Profile' }],\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The state object specified in ",(0,i.jsx)(n.code,{children:"reset"})," replaces the existing ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," with the new one, i.e. removes existing screens and add new ones. If you want to preserve the existing screens when changing the state, you can use ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-actions#reset",children:(0,i.jsx)(n.code,{children:"CommonActions.reset"})})," with ",(0,i.jsx)(n.a,{href:"#dispatch",children:(0,i.jsx)(n.code,{children:"dispatch"})})," instead."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," state object except ",(0,i.jsx)(n.code,{children:"index"})," and ",(0,i.jsx)(n.code,{children:"routes"}),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue."]})}),"\n",(0,i.jsx)(n.h3,{id:"setparams",children:(0,i.jsx)(n.code,{children:"setParams"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"setParams"})," method lets us update the params (",(0,i.jsx)(n.code,{children:"route.params"}),") of the current screen. ",(0,i.jsx)(n.code,{children:"setParams"})," works like React's ",(0,i.jsx)(n.code,{children:"setState"})," - it shallow merges the provided params object with the current params."]}),"\n",(0,i.jsx)("samp",{id:"navigate-set-params"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function ProfileScreen({ navigation: { setParams } }) {\n  return (\n    <Button\n      onPress={() =>\n        setParams({\n          friends:\n            route.params.friends[0] === 'Brent'\n              ? ['Wojciech', 'Szymon', 'Jakub']\n              : ['Brent', 'Satya', 'Micha\u015b'],\n          title:\n            route.params.title === \"Brent's Profile\"\n              ? \"Lucy's Profile\"\n              : \"Brent's Profile\",\n        })\n      }\n      title=\"Swap title and friends\"\n    />\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"setoptions",children:(0,i.jsx)(n.code,{children:"setOptions"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"setOptions"})," method lets us set screen options from within the component. This is useful if we need to use the component's props, state or context to configure our screen."]}),"\n",(0,i.jsx)("samp",{id:"navigate-set-options"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function ProfileScreen({ navigation, route }) {\n  const [value, onChangeText] = React.useState(route.params.title);\n\n  React.useEffect(() => {\n    navigation.setOptions({\n      title: value === '' ? 'No title' : value,\n    });\n  }, [navigation, value]);\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <TextInput\n        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}\n        onChangeText={onChangeText}\n        value={value}\n      />\n      <Button title=\"Go back\" onPress={() => navigation.goBack()} />\n    </View>\n  );\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Any options specified here are shallow merged with the options specified when defining the screen."}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"navigation.setOptions"}),", we recommend specifying a placeholder in the screen's ",(0,i.jsx)(n.code,{children:"options"})," prop and update it using ",(0,i.jsx)(n.code,{children:"navigation.setOptions"}),". This makes sure that the delay for updating the options isn't noticeable to the user. It also makes it work with lazy-loaded screens."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(n.code,{children:"React.useLayoutEffect"})," to reduce the delay in updating the options. But we recommend against doing it if you support web and do server side rendering."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"navigation.setOptions"})," is intended to provide the ability to update existing options when necessary. It's not a replacement for the ",(0,i.jsx)(n.code,{children:"options"})," prop on the screen. Make sure to use ",(0,i.jsx)(n.code,{children:"navigation.setOptions"})," sparingly only when absolutely necessary."]})}),"\n",(0,i.jsx)(n.h2,{id:"navigation-events",children:"Navigation events"}),"\n",(0,i.jsxs)(n.p,{children:["Screens can add listeners on the ",(0,i.jsx)(n.code,{children:"navigation"})," prop with the ",(0,i.jsx)(n.code,{children:"addListener"})," method. For example, to listen to the ",(0,i.jsx)(n.code,{children:"focus"})," event:"]}),"\n",(0,i.jsx)("samp",{id:"simple-focus-and-blur"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function Profile({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n\n    return unsubscribe;\n  }, [navigation]);\n\n  return <ProfileContent />;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-events",children:"Navigation events"})," for more details on the available events and the API usage."]}),"\n",(0,i.jsx)(n.h3,{id:"isfocused",children:(0,i.jsx)(n.code,{children:"isFocused"})}),"\n",(0,i.jsxs)(n.p,{children:["This method lets us check whether the screen is currently focused. Returns ",(0,i.jsx)(n.code,{children:"true"})," if the screen is focused and ",(0,i.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const isFocused = navigation.isFocused();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This method doesn't re-render the screen when the value changes and mainly useful in callbacks. You probably want to use ",(0,i.jsx)(n.a,{href:"/docs/6.x/use-is-focused",children:"useIsFocused"})," instead of using this directly, it will return a boolean a prop to indicating if the screen is focused."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-api-reference",children:"Advanced API Reference"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"dispatch"})," function is much less commonly used, but a good escape hatch if you can't do what you need with the available methods such as ",(0,i.jsx)(n.code,{children:"navigate"}),", ",(0,i.jsx)(n.code,{children:"goBack"})," etc. We recommend to avoid using the ",(0,i.jsx)(n.code,{children:"dispatch"})," method often unless absolutely necessary."]}),"\n",(0,i.jsx)(n.h3,{id:"dispatch",children:(0,i.jsx)(n.code,{children:"dispatch"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"dispatch"})," method lets us send a navigation action object which determines how the ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," will be updated. All of the navigation functions like ",(0,i.jsx)(n.code,{children:"navigate"})," use ",(0,i.jsx)(n.code,{children:"dispatch"})," behind the scenes."]}),"\n",(0,i.jsx)(n.p,{children:"Note that if you want to dispatch actions you should use the action creators provided in this library instead of writing the action object directly."}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-actions",children:"Navigation Actions Docs"})," for a full list of available actions."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch(\n  CommonActions.navigate({\n    name: 'Profile',\n    params: {},\n  })\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"When dispatching action objects, you can also specify few additional properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"source"})," - The key of the route which should be considered as the source of the action. For example, the ",(0,i.jsx)(n.code,{children:"replace"})," action will replace the route with the given key. By default, it'll use the key of the route that dispatched the action. You can explicitly pass ",(0,i.jsx)(n.code,{children:"undefined"})," to override this behavior."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"})," - The key of the ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," the action should be applied on. By default, actions bubble to other navigators if not handled by a navigator. If ",(0,i.jsx)(n.code,{children:"target"})," is specified, the action won't bubble if the navigator with the same key didn't handle it."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch({\n  ...CommonActions.navigate('Profile'),\n  source: 'someRoutekey',\n  target: 'someStatekey',\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"custom-action-creators",children:"Custom action creators"}),"\n",(0,i.jsxs)(n.p,{children:["It's also possible to pass a action creator function to ",(0,i.jsx)(n.code,{children:"dispatch"}),". The function will receive the current state and needs to return a navigation action object to use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nnavigation.dispatch((state) => {\n  // Add the home route to the start of the stack\n  const routes = [{ name: 'Home' }, ...state.routes];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can use this functionality to build your own helpers that you can utilize in your app. Here is an example which implements inserting a screen just before the last one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import { CommonActions } from '@react-navigation/native';\n\nconst insertBeforeLast = (routeName, params) => (state) => {\n  const routes = [\n    ...state.routes.slice(0, -1),\n    { name: routeName, params },\n    state.routes[state.routes.length - 1],\n  ];\n\n  return CommonActions.reset({\n    ...state,\n    routes,\n    index: routes.length - 1,\n  });\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then use it like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"navigation.dispatch(insertBeforeLast('Home'));\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cangoback",children:(0,i.jsx)(n.code,{children:"canGoBack"})}),"\n",(0,i.jsxs)(n.p,{children:["This method returns a boolean indicating whether there's any navigation history available in the current navigator, or in any parent navigators. You can use this to check if you can call ",(0,i.jsx)(n.code,{children:"navigation.goBack()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"if (navigation.canGoBack()) {\n  navigation.goBack();\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Don't use this method for rendering content as this will not trigger a re-render. This is only intended for use inside callbacks, event listeners etc."}),"\n",(0,i.jsx)(n.h3,{id:"getparent",children:(0,i.jsx)(n.code,{children:"getParent"})}),"\n",(0,i.jsxs)(n.p,{children:["This method returns the navigation prop from the parent navigator that the current navigator is nested in. For example, if you have a stack navigator and a tab navigator nested inside the stack, then you can use ",(0,i.jsx)(n.code,{children:"getParent"})," inside a screen of the tab navigator to get the navigation prop passed from the stack navigator."]}),"\n",(0,i.jsxs)(n.p,{children:["It accepts an optional ID parameter to refer to a specific parent navigator. For example, if your screen is nested with multiple levels of nesting somewhere under a drawer navigator with the ",(0,i.jsx)(n.code,{children:"id"})," prop as ",(0,i.jsx)(n.code,{children:'"LeftDrawer"'}),", you can directly refer to it without calling ",(0,i.jsx)(n.code,{children:"getParent"})," multiple times."]}),"\n",(0,i.jsxs)(n.p,{children:["To use an ID for a navigator, first pass a unique ",(0,i.jsx)(n.code,{children:"id"})," prop:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'<Drawer.Navigator id="LeftDrawer">{/* .. */}</Drawer.Navigator>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Then when using ",(0,i.jsx)(n.code,{children:"getParent"}),", instead of:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Avoid this\nconst drawerNavigation = navigation.getParent().getParent();\n\n// ...\n\ndrawerNavigation?.openDrawer();\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// Do this\nconst drawerNavigation = navigation.getParent('LeftDrawer');\n\n// ...\n\ndrawerNavigation?.openDrawer();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This approach allows components to not have to know the nesting structure of the navigators. So it's highly recommended that use an ",(0,i.jsx)(n.code,{children:"id"})," when using ",(0,i.jsx)(n.code,{children:"getParent"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This method will return ",(0,i.jsx)(n.code,{children:"undefined"})," if there is no matching parent navigator. Be sure to always check for ",(0,i.jsx)(n.code,{children:"undefined"})," when using this method."]}),"\n",(0,i.jsx)(n.h3,{id:"getstate",children:(0,i.jsx)(n.code,{children:"getState"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["Consider the navigator's state object to be internal and subject to change in a minor release. Avoid using properties from the ",(0,i.jsx)(n.a,{href:"/docs/6.x/navigation-state",children:"navigation state"})," state object except ",(0,i.jsx)(n.code,{children:"index"})," and ",(0,i.jsx)(n.code,{children:"routes"}),", unless you really need it. If there is some functionality you cannot achieve without relying on the structure of the state object, please open an issue."]})}),"\n",(0,i.jsx)(n.p,{children:"This method returns the state object of the navigator which contains the screen. Getting the navigator state could be useful in very rare situations. You most likely don't need to use this method. If you do, make sure you have a good reason."}),"\n",(0,i.jsxs)(n.p,{children:["If you need the state for rendering content, you should use ",(0,i.jsx)(n.a,{href:"/docs/6.x/use-navigation-state",children:(0,i.jsx)(n.code,{children:"useNavigationState"})})," instead of this method."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);