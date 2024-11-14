"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["93711"],{56670:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>s,default:()=>d,assets:()=>c,toc:()=>p,frontMatter:()=>r});var o=JSON.parse('{"id":"common-mistakes","title":"Common mistakes","description":"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages.","source":"@site/versioned_docs/version-4.x/common-mistakes.md","sourceDirName":".","slug":"/common-mistakes","permalink":"/docs/4.x/common-mistakes","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/common-mistakes.md","tags":[],"version":"4.x","frontMatter":{"id":"common-mistakes","title":"Common mistakes","sidebar_label":"Common mistakes"},"sidebar":"version-4.x-docs","previous":{"title":"Glossary of terms","permalink":"/docs/4.x/glossary-of-terms"},"next":{"title":"Troubleshooting","permalink":"/docs/4.x/troubleshooting"}}'),i=t("85893"),a=t("50065");let r={id:"common-mistakes",title:"Common mistakes",sidebar_label:"Common mistakes"},s=void 0,c={},p=[{value:"Explicitly rendering more than one navigator",id:"explicitly-rendering-more-than-one-navigator",level:2},{value:"Assigning navigationOptions to the wrong component",id:"assigning-navigationoptions-to-the-wrong-component",level:2},{value:"Wrapping AppContainer in a View without flex: 1",id:"wrapping-appcontainer-in-a-view-without-flex-1",level:2}];function l(n){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"This section attempts to outline issues that users frequently encounter when first getting accustomed to using React Navigation and serves as a reference in some cases for error messages."}),"\n",(0,i.jsx)(e.h2,{id:"explicitly-rendering-more-than-one-navigator",children:"Explicitly rendering more than one navigator"}),"\n",(0,i.jsx)(e.p,{children:"Most apps should only ever render one navigator inside of a React component, and this is usually somewhere near the root component of your app. This is a little bit counter-intuitive at first but it's important for the architecture of React Navigation."}),"\n",(0,i.jsx)(e.p,{children:"Here's what you might write in your code -- note that this example would be incorrect:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'export default class App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AuthenticationContainer = createAppContainer(AuthenticationNavigator);\n\nclass AuthenticationScreen extends React.Component {\n  render() {\n    /*\n     * In a screen inside of the navigator we are rendering another navigator\n     * You should avoid this! It will have its own navigation state and be unable\n     * To interact with any parent navigator, eg: it would not know the route "Home" exists\n     */\n    return <AuthenticationContainer />;\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n'})}),"\n",(0,i.jsx)(e.p,{children:"The correct way to write this would be the following:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"export default class App extends React.Component {\n  render() {\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nconst AppNavigator = createSwitchNavigator({\n  /*\n   * Rather than being rendered by a screen component, the\n   * AuthenticationNavigator is a screen component\n   */\n  Auth: AuthenticationNavigator,\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Alternatively, the following would also work because it exposes the ",(0,i.jsx)(e.code,{children:"router"})," static on ",(0,i.jsx)(e.code,{children:"AuthenticationScreen"})," and threads through the ",(0,i.jsx)(e.code,{children:"navigation"})," prop:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"export default class App extends React.Component {\n  render() {\n    /* In the root component we are rendering the app navigator */\n    return <AppContainer />;\n  }\n}\n\nconst AuthenticationNavigator = createStackNavigator({\n  SignIn: SignInScreen,\n  ForgotPassword: ForgotPasswordScreen,\n});\n\nclass AuthenticationScreen extends React.Component {\n  static router = AuthenticationNavigator.router;\n\n  render() {\n    return <AuthenticationNavigator navigation={this.props.navigation} />;\n  }\n}\n\nconst AppNavigator = createSwitchNavigator({\n  Auth: AuthenticationScreen, // This screen renders a navigator!\n  Home: HomeScreen,\n});\n\nconst AppContainer = createAppContainer(AppNavigator);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"assigning-navigationoptions-to-the-wrong-component",children:"Assigning navigationOptions to the wrong component"}),"\n",(0,i.jsxs)(e.p,{children:["In previous version of React Navigation, the library used to dig through your component tree to find ",(0,i.jsx)(e.code,{children:"navigationOptions"}),". This is no longer the case, and only ",(0,i.jsx)(e.code,{children:"navigationOptions"})," on screen components of a particular navigator will apply to that navigator. You can read more about this in the ",(0,i.jsx)(e.a,{href:"/docs/4.x/navigation-options-resolution",children:"Navigation options resolution"})," guide."]}),"\n",(0,i.jsx)(e.h2,{id:"wrapping-appcontainer-in-a-view-without-flex-1",children:"Wrapping AppContainer in a View without flex: 1"}),"\n",(0,i.jsxs)(e.p,{children:["If you wrap the ",(0,i.jsx)(e.code,{children:"AppContainer"})," in a ",(0,i.jsx)(e.code,{children:"View"}),", make sure the ",(0,i.jsx)(e.code,{children:"View"})," is has ",(0,i.jsx)(e.code,{children:"flex: 1"})," in the styles."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"import React from 'react';\nimport { Text, View } from 'react-native';\nimport { createAppContainer } from 'react-navigation';\nimport { createBottomTabNavigator } from 'react-navigation-tabs';\n\nclass HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Home!</Text>\n      </View>\n    );\n  }\n}\n\nclass SettingsScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n        <Text>Settings!</Text>\n      </View>\n    );\n  }\n}\n\nconst TabNavigator = createBottomTabNavigator({\n  Home: HomeScreen,\n  Settings: SettingsScreen,\n});\n\nconst AppContainer = createAppContainer(TabNavigator);\n\n// without the style you will see a blank screen\nexport default () => (\n  <View style={{ flex: 1 }}>\n    <AppContainer />\n  </View>\n);\n"})})]})}function d(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},50065:function(n,e,t){t.d(e,{Z:function(){return s},a:function(){return r}});var o=t(67294);let i={},a=o.createContext(i);function r(n){let e=o.useContext(a);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);