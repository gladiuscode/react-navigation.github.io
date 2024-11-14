"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["57562"],{88566:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"navigation-prop","title":"Navigation prop reference","description":"Each screen component in your app is provided with the navigation prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route\'s router. It looks like this:","source":"@site/versioned_docs/version-4.x/navigation-prop.md","sourceDirName":".","slug":"/navigation-prop","permalink":"/docs/4.x/navigation-prop","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-prop.md","tags":[],"version":"4.x","frontMatter":{"id":"navigation-prop","title":"Navigation prop reference","sidebar_label":"Navigation prop"},"sidebar":"version-4.x-docs","previous":{"title":"Upgrading from 3.x","permalink":"/docs/4.x/upgrading-from-3.x"},"next":{"title":"NavigationContext","permalink":"/docs/4.x/navigation-context"}}'),a=i("85893"),s=i("50065");let o={id:"navigation-prop",title:"Navigation prop reference",sidebar_label:"Navigation prop"},r=void 0,c={},d=[{value:"Navigator-dependent functions",id:"navigator-dependent-functions",level:3},{value:"Common API reference",id:"common-api-reference",level:2},{value:"<code>navigate</code> - Link to other screens",id:"navigate---link-to-other-screens",level:3},{value:"<code>goBack</code> - Close the active screen and move back",id:"goback---close-the-active-screen-and-move-back",level:3},{value:"Going back from a specific screen with <code>goBack</code>",id:"going-back-from-a-specific-screen-with-goback",level:3},{value:"<code>addListener</code> - Subscribe to updates to navigation lifecycle",id:"addlistener---subscribe-to-updates-to-navigation-lifecycle",level:3},{value:"<code>isFocused</code> - Query the focused state of the screen",id:"isfocused---query-the-focused-state-of-the-screen",level:3},{value:"<code>state</code> - The screen&#39;s current state/route",id:"state---the-screens-current-stateroute",level:3},{value:"<code>setParams</code> - Make changes to route params",id:"setparams---make-changes-to-route-params",level:3},{value:"<code>getParam</code> - Get a specific param value with a fallback",id:"getparam---get-a-specific-param-value-with-a-fallback",level:3},{value:"Stack Actions",id:"stack-actions",level:2},{value:"Push",id:"push",level:3},{value:"Pop",id:"pop",level:3},{value:"PopToTop",id:"poptotop",level:3},{value:"Replace",id:"replace",level:3},{value:"Reset",id:"reset",level:3},{value:"Dismiss",id:"dismiss",level:3},{value:"Advanced API Reference",id:"advanced-api-reference",level:2},{value:"<code>dispatch</code> - Send an action to the router",id:"dispatch---send-an-action-to-the-router",level:3},{value:"<code>dangerouslyGetParent</code> - get parent navigator",id:"dangerouslygetparent---get-parent-navigator",level:3}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Each ",(0,a.jsx)(n.code,{children:"screen"})," component in your app is provided with the ",(0,a.jsx)(n.code,{children:"navigation"})," prop automatically. The prop contains various convenience functions that dispatch navigation actions on the route's router. It looks like this:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"navigate"})," - go to another screen, figures out the action it needs to take to do it"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"goBack"})," - close active screen and move back in the stack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"addListener"})," - subscribe to updates to navigation lifecycle"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"isFocused"})," - function that returns ",(0,a.jsx)(n.code,{children:"true"})," if the screen is focused and ",(0,a.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"state"})," - current state/routes"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"setParams"})," - make changes to route's params"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"getParam"})," - get a specific param with fallback"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dispatch"})," - send an action to router"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dangerouslyGetParent"})," - function that returns the parent navigator, if any"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It's important to highlight the ",(0,a.jsx)(n.code,{children:"navigation"})," prop is ",(0,a.jsx)(n.em,{children:"not"})," passed in to ",(0,a.jsx)(n.em,{children:"all"})," components; only ",(0,a.jsx)(n.code,{children:"screen"})," components receive this prop automatically! React Navigation doesn't do anything magic here. For example, if you were to define a ",(0,a.jsx)(n.code,{children:"MyBackButton"})," component and render it as a child of a screen component, you would not be able to access the ",(0,a.jsx)(n.code,{children:"navigation"})," prop on it. If, however, you wish to access the ",(0,a.jsx)(n.code,{children:"navigation"})," prop in any of your components, you may use the ",(0,a.jsx)(n.a,{href:"/docs/4.x/with-navigation",children:(0,a.jsx)(n.code,{children:"withNavigation"})})," HOC."]}),"\n",(0,a.jsx)(n.h3,{id:"navigator-dependent-functions",children:"Navigator-dependent functions"}),"\n",(0,a.jsxs)(n.p,{children:["There are several additional functions present on ",(0,a.jsx)(n.code,{children:"this.props.navigation"})," based on the kind of the current navigator."]}),"\n",(0,a.jsxs)(n.p,{children:["If the navigator is a stack navigator, several alternatives to ",(0,a.jsx)(n.code,{children:"navigate"})," and ",(0,a.jsx)(n.code,{children:"goBack"})," are provided and you can use whichever you prefer. The functions are:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"push"})," - push a new route onto the stack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"pop"})," - go back in the stack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"popToTop"})," - go to the top of the stack"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"replace"})," - replace the current route with a new one"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"reset"})," - wipe the navigator state and replace it with the result of several actions"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"dismiss"})," - dismiss the current stack"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If the navigator is a drawer navigator, the following are also available:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"this.props.navigation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"openDrawer"})," - open the drawer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"closeDrawer"})," - close the drawer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"toggleDrawer"})," - toggle the state, ie. switch from closed to open and vice versa"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"common-api-reference",children:"Common API reference"}),"\n",(0,a.jsxs)(n.p,{children:["The vast majority of your interactions with the ",(0,a.jsx)(n.code,{children:"navigation"})," prop will involve ",(0,a.jsx)(n.code,{children:"navigate"}),", ",(0,a.jsx)(n.code,{children:"goBack"}),", ",(0,a.jsx)(n.code,{children:"state"}),", and ",(0,a.jsx)(n.code,{children:"setParams"})," / ",(0,a.jsx)(n.code,{children:"getParam"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"navigate---link-to-other-screens",children:[(0,a.jsx)(n.code,{children:"navigate"})," - Link to other screens"]}),"\n",(0,a.jsx)(n.p,{children:"Call this to link to another screen in your app. Takes the following arguments:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"navigation.navigate({ routeName, params, action, key })"})}),"\n",(0,a.jsx)(n.p,{children:"OR"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"navigation.navigate(routeName, params, action)"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"routeName"})," - A destination routeName that has been registered somewhere in the app's router"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - Params to merge into the destination route"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"action"})," - (advanced) The sub-action to run in the child router, if the screen is a navigator. See ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-actions",children:"Actions Doc"})," for a full list of supported actions."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"key"})," - Optional identifier of what route to navigate to. Navigate ",(0,a.jsx)(n.strong,{children:"back"})," to this route, if it already exists"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class HomeScreen extends React.Component {\n  render() {\n    const { navigate } = this.props.navigation;\n\n    return (\n      <View>\n        <Text>This is the home screen of the app</Text>\n        <Button\n          onPress={() => navigate('Profile', { name: 'Brent' })}\n          title=\"Go to Brent's profile\"\n        />\n      </View>\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"goback---close-the-active-screen-and-move-back",children:[(0,a.jsx)(n.code,{children:"goBack"})," - Close the active screen and move back"]}),"\n",(0,a.jsxs)(n.p,{children:["Optionally provide a key, which specifies the route to go back from. By default, ",(0,a.jsx)(n.code,{children:"goBack"})," will close the route that it is called from. If the goal is to go back ",(0,a.jsx)(n.em,{children:"anywhere"}),", without specifying what is getting closed, call ",(0,a.jsx)(n.code,{children:".goBack(null);"})," Note that the ",(0,a.jsx)(n.code,{children:"null"})," parameter is useful in the case of nested ",(0,a.jsx)(n.code,{children:"StackNavigators"})," to go back on a parent navigator when the child navigator already has only one item in the stack. Don't be concerned if this is confusing, this API needs some work."]}),"\n",(0,a.jsxs)(n.p,{children:["Note -- a key is not the name of the route but the unique identifier you provided when navigating to the route. See ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-key",children:"navigation key"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'class HomeScreen extends React.Component {\n  render() {\n    const { goBack } = this.props.navigation;\n    return (\n      <View>\n        <Button onPress={() => goBack()} title="Go back from this HomeScreen" />\n        <Button onPress={() => goBack(null)} title="Go back anywhere" />\n        <Button\n          onPress={() => goBack(\'key-123\')}\n          title="Go back from key-123"\n        />\n      </View>\n    );\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.h3,{id:"going-back-from-a-specific-screen-with-goback",children:["Going back from a specific screen with ",(0,a.jsx)(n.code,{children:"goBack"})]}),"\n",(0,a.jsx)(n.p,{children:"Consider the following navigation stack history:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"navigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_A });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_B });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_C });\nnavigation.navigate({ routeName: SCREEN, key: SCREEN_KEY_D });\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now you are on ",(0,a.jsx)(n.em,{children:"screen D"})," and want to go back to ",(0,a.jsx)(n.em,{children:"screen A"})," (popping D, C, and B).\nThen you need to supply a key to goBack ",(0,a.jsx)(n.em,{children:"FROM"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"navigation.goBack(SCREEN_KEY_B) // will go to screen A FROM screen B\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Alternatively, as ",(0,a.jsx)(n.em,{children:"screen A"})," is the top of the stack, you can use ",(0,a.jsx)(n.code,{children:"navigation.popToTop()"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"addlistener---subscribe-to-updates-to-navigation-lifecycle",children:[(0,a.jsx)(n.code,{children:"addListener"})," - Subscribe to updates to navigation lifecycle"]}),"\n",(0,a.jsx)(n.p,{children:"React Navigation emits events to screen components that subscribe to them:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"willFocus"})," - the screen will focus"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"didFocus"})," - the screen focused (if there was a transition, the transition completed)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"willBlur"})," - the screen will be unfocused"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"didBlur"})," - the screen unfocused (if there was a transition, the transition completed)"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const didBlurSubscription = this.props.navigation.addListener(\n  'didBlur',\n  (payload) => {\n    console.debug('didBlur', payload);\n  }\n);\n\n// Remove the listener when you are done\ndidBlurSubscription.remove();\n"})}),"\n",(0,a.jsx)(n.p,{children:"The JSON payload:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"{\n  action: { type: 'Navigation/COMPLETE_TRANSITION', key: 'StackRouterRoot' },\n  context: 'id-1518521010538-2:Navigation/COMPLETE_TRANSITION_Root',\n  lastState: undefined,\n  state: undefined,\n  type: 'didBlur',\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You can also subscribe to navigation events declaratively with the ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-events",children:(0,a.jsx)(n.code,{children:"<NavigationEvents/>"})})," component."]}),"\n",(0,a.jsxs)(n.h3,{id:"isfocused---query-the-focused-state-of-the-screen",children:[(0,a.jsx)(n.code,{children:"isFocused"})," - Query the focused state of the screen"]}),"\n",(0,a.jsxs)(n.p,{children:["Returns ",(0,a.jsx)(n.code,{children:"true"})," if the screen is focused and ",(0,a.jsx)(n.code,{children:"false"})," otherwise."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"let isFocused = this.props.navigation.isFocused();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You probably want to use ",(0,a.jsx)(n.a,{href:"/docs/4.x/with-navigation-focus",children:"withNavigationFocus"})," instead of using this directly, it will pass in an ",(0,a.jsx)(n.code,{children:"isFocused"})," boolean a prop to your component."]}),"\n",(0,a.jsxs)(n.h3,{id:"state---the-screens-current-stateroute",children:[(0,a.jsx)(n.code,{children:"state"})," - The screen's current state/route"]}),"\n",(0,a.jsxs)(n.p,{children:["A screen has access to its route via ",(0,a.jsx)(n.code,{children:"this.props.navigation.state"}),". Each will return an object with the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"{\n  // the name of the route config in the router\n  routeName: 'profile',\n  //a unique identifier used to sort routes\n  key: 'main0',\n  //an optional object of string options for this screen\n  params: { hello: 'world' }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is most commonly used to access the ",(0,a.jsx)(n.code,{children:"params"})," for the screen, passed in through ",(0,a.jsx)(n.code,{children:"navigate"})," or ",(0,a.jsx)(n.code,{children:"setParams"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class ProfileScreen extends React.Component {\n  render() {\n    return <Text>Name: {this.props.navigation.state.params.name}</Text>;\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"setparams---make-changes-to-route-params",children:[(0,a.jsx)(n.code,{children:"setParams"})," - Make changes to route params"]}),"\n",(0,a.jsxs)(n.p,{children:["Firing the ",(0,a.jsx)(n.code,{children:"setParams"})," action allows a screen to change the params in the route, which is useful for updating the header buttons and title. ",(0,a.jsx)(n.code,{children:"setParams"})," works like React's ",(0,a.jsx)(n.code,{children:"setState"})," - it merges the provided params object with the current params."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class ProfileScreen extends React.Component {\n  render() {\n    return (\n      <Button\n        onPress={() => this.props.navigation.setParams({ name: 'Lucy' })}\n        title=\"Set title name to 'Lucy'\"\n      />\n    );\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"getparam---get-a-specific-param-value-with-a-fallback",children:[(0,a.jsx)(n.code,{children:"getParam"})," - Get a specific param value with a fallback"]}),"\n",(0,a.jsxs)(n.p,{children:["In the past, you may have encountered the frightful scenario of accessing a ",(0,a.jsx)(n.code,{children:"param"})," when ",(0,a.jsx)(n.code,{children:"params"})," is undefined. Instead of accessing the param directly, you can call ",(0,a.jsx)(n.code,{children:"getParam"})," instead."]}),"\n",(0,a.jsx)(n.p,{children:"Before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const { name } = this.props.navigation.state.params;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["if ",(0,a.jsx)(n.code,{children:"params"})," is ",(0,a.jsx)(n.code,{children:"undefined"}),", this fails"]}),"\n",(0,a.jsx)(n.p,{children:"After:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const name = this.props.navigation.getParam('name', 'Peter');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["if ",(0,a.jsx)(n.code,{children:"name"})," or ",(0,a.jsx)(n.code,{children:"params"})," are undefined, set the fallback to ",(0,a.jsx)(n.code,{children:"Peter"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"stack-actions",children:"Stack Actions"}),"\n",(0,a.jsx)(n.p,{children:"The following actions will work within any stack navigator:"}),"\n",(0,a.jsx)(n.h3,{id:"push",children:"Push"}),"\n",(0,a.jsxs)(n.p,{children:["Similar to navigate, push will move you forward to a new route in the stack. This differs from ",(0,a.jsx)(n.code,{children:"navigate"})," in that ",(0,a.jsx)(n.code,{children:"navigate"})," will pop back to earlier in the stack if a route of the given name is already present there. ",(0,a.jsx)(n.code,{children:"push"})," will always add on top, so a route can be present multiple times."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.push(routeName, params, action);\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"routeName"})," - A destination routeName that has been registered somewhere in the app's router."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"params"})," - Params to merge into the destination route."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"action"})," - (advanced) The sub-action to run in the child router, if the screen is a navigator. See ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-actions",children:"Actions Doc"})," for a full list of supported actions."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"pop",children:"Pop"}),"\n",(0,a.jsxs)(n.p,{children:["Take you to the previous screen in the stack. If you provide a number, ",(0,a.jsx)(n.code,{children:"n"}),", it will specify how many screens to take you back within the stack."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.pop(n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"poptotop",children:"PopToTop"}),"\n",(0,a.jsx)(n.p,{children:"Call this to jump back to the top route in the stack, dismissing all other screens."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.popToTop();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"replace",children:"Replace"}),"\n",(0,a.jsx)(n.p,{children:"Call this to replace the current screen with the given route, with params and sub-action."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.replace(routeName, params, action);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"reset",children:"Reset"}),"\n",(0,a.jsx)(n.p,{children:"Wipe the navigator state and replace it with the result of several actions."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.reset([NavigationActions.navigate({ routeName: 'Profile' })], 0);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"dismiss",children:"Dismiss"}),"\n",(0,a.jsx)(n.p,{children:"Call this if you're in a nested (child) stack and want to dismiss the entire stack, returning to the parent stack."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"navigation.dismiss();\n"})}),"\n",(0,a.jsx)(n.h2,{id:"advanced-api-reference",children:"Advanced API Reference"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"dispatch"})," function is much less commonly used, but a good escape hatch if you can't do what you need with ",(0,a.jsx)(n.code,{children:"navigate"})," and ",(0,a.jsx)(n.code,{children:"goBack"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"dispatch---send-an-action-to-the-router",children:[(0,a.jsx)(n.code,{children:"dispatch"})," - Send an action to the router"]}),"\n",(0,a.jsx)(n.p,{children:"Use dispatch to send any navigation action to the router. The other navigation functions use dispatch behind the scenes."}),"\n",(0,a.jsx)(n.p,{children:"Note that if you want to dispatch react-navigation actions you should use the action creators provided in this library."}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/docs/4.x/navigation-actions",children:"Navigation Actions Docs"})," for a full list of available actions."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { NavigationActions } from 'react-navigation';\n\nconst navigateAction = NavigationActions.navigate({\n  routeName: 'Profile',\n  params: {},\n\n  // navigate can have a nested navigate action that will be run inside the child router\n  action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),\n});\nthis.props.navigation.dispatch(navigateAction);\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"dangerouslygetparent---get-parent-navigator",children:[(0,a.jsx)(n.code,{children:"dangerouslyGetParent"})," - get parent navigator"]}),"\n",(0,a.jsx)(n.p,{children:"If, for example, you have a screen component that can be presented within multiple navigators, you may use this to influence its behavior based on what navigator it is in."}),"\n",(0,a.jsx)(n.p,{children:"Another good use case for this is to find the index of the active route in the parent's route list. So in the case of a stack if you are at index 0 then you may not want to render a back button, but if you're somewhere else in the list then you would render a back button."}),"\n",(0,a.jsx)(n.p,{children:"Be sure to always check that the call returns a valid value."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class UserCreateScreen extends Component {\n  static navigationOptions = ({ navigation }) => {\n    const parent = navigation.dangerouslyGetParent();\n    const gesturesEnabled =\n      parent &&\n      parent.state &&\n      parent.state.routeName === 'StackWithEnabledGestures';\n\n    return {\n      title: 'New User',\n      gesturesEnabled,\n    };\n  };\n}\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},50065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var t=i(67294);let a={},s=t.createContext(a);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);