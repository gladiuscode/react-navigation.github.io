"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[73063],{34147:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=t(85893),r=t(11151),o=t(74866),s=t(85162);const i={id:"use-prevent-remove",title:"usePreventRemove",sidebar_label:"usePreventRemove"},c=void 0,l={id:"use-prevent-remove",title:"usePreventRemove",description:"The usePreventRemove hook allows you to prevent the user from leaving a screen. For example, if there are unsaved changes, you might want to show a confirmation dialog before the user can navigate away.",source:"@site/versioned_docs/version-7.x/use-prevent-remove.md",sourceDirName:".",slug:"/use-prevent-remove",permalink:"/docs/7.x/use-prevent-remove",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/use-prevent-remove.md",tags:[],version:"7.x",frontMatter:{id:"use-prevent-remove",title:"usePreventRemove",sidebar_label:"usePreventRemove"},sidebar:"docs",previous:{title:"useIsFocused",permalink:"/docs/7.x/use-is-focused"},next:{title:"useLinkTo",permalink:"/docs/7.x/use-link-to"}},u={},d=[{value:"Limitations",id:"limitations",level:2},{value:"UX considerations",id:"ux-considerations",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"usePreventRemove"})," hook allows you to prevent the user from leaving a screen. For example, if there are unsaved changes, you might want to show a confirmation dialog before the user can navigate away."]}),"\n",(0,a.jsx)(n.p,{children:"The hook takes 2 parameters:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preventRemove"}),": A boolean value indicating whether to prevent the screen from being removed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"callback"}),": A function that will be called when the removal is prevented. This can be used to show a confirmation dialog."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The callback receives a ",(0,a.jsx)(n.code,{children:"data"})," object with the ",(0,a.jsx)(n.code,{children:"action"})," that triggered the removal of the screen. You can dispatch this action again after confirmation, or check the action object to determine what to do."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(o.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"usePreventRemove hook","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="usePreventRemove hook" snack version=7',children:"import * as React from 'react';\nimport {\n  Button,\n  Alert,\n  View,\n  TextInput,\n  Platform,\n  StyleSheet,\n} from 'react-native';\nimport {\n  useNavigation,\n  usePreventRemove,\n  createStaticNavigation,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\n// codeblock-focus-start\nconst EditTextScreen = () => {\n  const [text, setText] = React.useState('');\n  const navigation = useNavigation();\n\n  const hasUnsavedChanges = Boolean(text);\n\n  usePreventRemove(hasUnsavedChanges, ({ data }) => {\n    if (Platform.OS === 'web') {\n      const discard = confirm(\n        'You have unsaved changes. Discard them and leave the screen?'\n      );\n\n      if (discard) {\n        navigation.dispatch(data.action);\n      }\n    } else {\n      Alert.alert(\n        'Discard changes?',\n        'You have unsaved changes. Discard them and leave the screen?',\n        [\n          { text: \"Don't leave\", style: 'cancel', onPress: () => {} },\n          {\n            text: 'Discard',\n            style: 'destructive',\n            onPress: () => navigation.dispatch(data.action),\n          },\n        ]\n      );\n    }\n  });\n\n  return (\n    <View style={styles.content}>\n      <TextInput\n        autoFocus\n        style={styles.input}\n        value={text}\n        placeholder=\"Type something\u2026\"\n        onChangeText={setText}\n      />\n    </View>\n  );\n};\n// codeblock-focus-end\n\nconst HomeScreen = () => {\n  const navigation = useNavigation();\n\n  return (\n    <View style={styles.buttons}>\n      <Button\n        title={'Push EditText'}\n        onPress={() => navigation.push('EditText')}\n        style={styles.button}\n      />\n    </View>\n  );\n};\n\nconst RootStack = createStackNavigator({\n  screens: {\n    Home: HomeScreen,\n    EditText: EditTextScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(RootStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n\nconst styles = StyleSheet.create({\n  content: {\n    flex: 1,\n    padding: 16,\n  },\n  input: {\n    margin: 8,\n    padding: 10,\n    borderRadius: 3,\n    borderWidth: StyleSheet.hairlineWidth,\n    borderColor: 'rgba(0, 0, 0, 0.08)',\n    backgroundColor: 'white',\n  },\n  buttons: {\n    flex: 1,\n    justifyContent: 'center',\n    padding: 8,\n  },\n  button: {\n    margin: 8,\n  },\n});\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"usePreventRemove hook","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="usePreventRemove hook" snack version=7',children:"import * as React from 'react';\nimport {\n  Button,\n  Alert,\n  View,\n  TextInput,\n  Platform,\n  StyleSheet,\n} from 'react-native';\nimport {\n  NavigationContainer,\n  useNavigation,\n  usePreventRemove,\n} from '@react-navigation/native';\nimport { createStackNavigator } from '@react-navigation/stack';\n\n// codeblock-focus-start\nconst EditTextScreen = () => {\n  const navigation = useNavigation();\n  const [text, setText] = React.useState('');\n\n  const hasUnsavedChanges = Boolean(text);\n\n  usePreventRemove(hasUnsavedChanges, ({ data }) => {\n    if (Platform.OS === 'web') {\n      // Alert is not supported on web, so we can use confirm\n      const discard = confirm(\n        'You have unsaved changes. Discard them and leave the screen?'\n      );\n\n      if (discard) {\n        navigation.dispatch(data.action);\n      }\n    } else {\n      // Prompt the user before leaving the screen\n      Alert.alert(\n        'Discard changes?',\n        'You have unsaved changes. Discard them and leave the screen?',\n        [\n          {\n            text: \"Don't leave\",\n            style: 'cancel',\n            onPress: () => {\n              // Do nothingP\n            },\n          },\n          {\n            text: 'Discard',\n            style: 'destructive',\n            onPress: () => navigation.dispatch(data.action),\n          },\n        ]\n      );\n    }\n  });\n\n  return (\n    <View style={styles.content}>\n      <TextInput\n        autoFocus\n        style={styles.input}\n        value={text}\n        placeholder=\"Type something\u2026\"\n        onChangeText={setText}\n      />\n    </View>\n  );\n};\n// codeblock-focus-end\n\nconst HomeScreen = () => {\n  const navigation = useNavigation();\n\n  return (\n    <View style={styles.buttons}>\n      <Button\n        title={'Push EditText'}\n        onPress={() => navigation.push('EditText')}\n        style={styles.button}\n      />\n    </View>\n  );\n};\n\nconst Stack = createStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator>\n        <Stack.Screen name=\"Home\" component={HomeScreen} />\n        <Stack.Screen name=\"EditText\" component={EditTextScreen} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n\nconst styles = StyleSheet.create({\n  content: {\n    flex: 1,\n    padding: 16,\n  },\n  input: {\n    margin: 8,\n    padding: 10,\n    borderRadius: 3,\n    borderWidth: StyleSheet.hairlineWidth,\n    borderColor: 'rgba(0, 0, 0, 0.08)',\n    backgroundColor: 'white',\n  },\n  buttons: {\n    flex: 1,\n    justifyContent: 'center',\n    padding: 8,\n  },\n  button: {\n    margin: 8,\n  },\n});\n"})})})]}),"\n",(0,a.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,children:(0,a.jsx)("source",{src:"/assets/behavior/prevent-closing.mp4"})}),"\n",(0,a.jsxs)(n.p,{children:["Internally, the hook uses the ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-events#beforeremove",children:(0,a.jsx)(n.code,{children:"beforeRemove"})})," event to prevent the screen from being removed. This event is triggered whenever a screen is being removed due to a navigation action."]}),"\n",(0,a.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(n.p,{children:["There are a couple of limitations to be aware of when using the ",(0,a.jsx)(n.code,{children:"usePreventRemove"})," hook. It is ",(0,a.jsx)(n.strong,{children:"only"})," triggered whenever a screen is being removed due to a navigation state change. For example:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The user pressed the back button on a screen in a stack."}),"\n",(0,a.jsx)(n.li,{children:"The user performed a swipe-back gesture."}),"\n",(0,a.jsxs)(n.li,{children:["Some action such as ",(0,a.jsx)(n.code,{children:"pop"})," or ",(0,a.jsx)(n.code,{children:"reset"})," was dispatched which removes the screen from the state."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It ",(0,a.jsx)(n.strong,{children:"does not prevent"})," a screen from being unfocused if it's not being removed. For example:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The user pushed a new screen on top of the screen with the listener in a stack."}),"\n",(0,a.jsx)(n.li,{children:"The user navigated from one tab/drawer screen to another tab/drawer screen."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["It also ",(0,a.jsx)(n.strong,{children:"does not prevent"})," a screen from being removed when the user is exiting the screen due to actions not controlled by the navigation state:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The user closes the app (e.g. by pressing the back button on the home screen, closing the tab in the browser, closing it from the app switcher etc.). You can additionally use ",(0,a.jsx)(n.a,{href:"https://reactnative.dev/docs/backhandler",children:(0,a.jsx)(n.code,{children:"hardwareBackPress"})})," event on Android, ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/web/api/window/beforeunload_event",children:(0,a.jsx)(n.code,{children:"beforeunload"})})," event on the Web etc. to handle some of these cases. See ",(0,a.jsx)(n.a,{href:"/docs/7.x/preventing-going-back#prevent-the-user-from-leaving-the-app",children:"Prevent the user from leaving the app"})," for more details."]}),"\n",(0,a.jsx)(n.li,{children:"A screen gets unmounted due to conditional rendering, or due to a parent component being unmounted."}),"\n",(0,a.jsxs)(n.li,{children:["A screen gets unmounted due to the usage of ",(0,a.jsx)(n.code,{children:"unmountOnBlur"})," options with ",(0,a.jsx)(n.a,{href:"/docs/7.x/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})}),", ",(0,a.jsx)(n.a,{href:"/docs/7.x/drawer-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/drawer"})})," etc."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ux-considerations",children:"UX considerations"}),"\n",(0,a.jsxs)(n.p,{children:["Generally, we recommend using this hook sparingly. A better approach is to persist the unsaved data into ",(0,a.jsx)(n.a,{href:"https://github.com/react-native-async-storage/async-storage",children:(0,a.jsx)(n.code,{children:"AsyncStorage"})})," or similar persistent storage and prompt to restore it when the user returns to the screen."]}),"\n",(0,a.jsx)(n.p,{children:"Doing so has several benefits:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"This approach still works if the app is closed or crashes unexpectedly."}),"\n",(0,a.jsx)(n.li,{children:"It's less intrusive to the user as they can still navigate away from the screen to check something and return without losing the data."}),"\n"]})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(86010),o=t(12466),s=t(16550),i=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function v(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[s,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=a.find((e=>e.default)))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=m({queryString:t,groupId:r}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),f=(()=>{const e=null!=l?l:p;return v({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(l(n),s(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",f.tabItem,null==o?void 0:o.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var a=t(67294);const r={},o=a.createContext(r);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);