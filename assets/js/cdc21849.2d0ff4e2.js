"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[6715],{59617:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>v,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=t(85893),i=t(11151),s=t(74866),o=t(85162);const r={id:"navigation-events",title:"Navigation events",sidebar_label:"Navigation events"},c=void 0,l={id:"navigation-events",title:"Navigation events",description:"You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as focus, blur etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators.",source:"@site/versioned_docs/version-7.x/navigation-events.md",sourceDirName:".",slug:"/navigation-events",permalink:"/docs/7.x/navigation-events",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/navigation-events.md",tags:[],version:"7.x",frontMatter:{id:"navigation-events",title:"Navigation events",sidebar_label:"Navigation events"},sidebar:"docs",previous:{title:"NavigationContext",permalink:"/docs/7.x/navigation-context"},next:{title:"Navigation state",permalink:"/docs/7.x/navigation-state"}},d={},u=[{value:"Core events",id:"core-events",level:2},{value:"<code>focus</code>",id:"focus",level:3},{value:"<code>blur</code>",id:"blur",level:3},{value:"<code>state</code>",id:"state",level:3},{value:"<code>beforeRemove</code>",id:"beforeremove",level:3},{value:"Listening to events",id:"listening-to-events",level:2},{value:"<code>navigation.addListener</code>",id:"navigationaddlistener",level:3},{value:"<code>listeners</code> prop on <code>Screen</code>",id:"listeners-prop-on-screen",level:3},{value:"<code>screenListeners</code> prop on the navigator",id:"screenlisteners-prop-on-the-navigator",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You can listen to various events emitted by React Navigation to get notified of certain events, and in some cases, override the default action. There are few core events such as ",(0,a.jsx)(n.code,{children:"focus"}),", ",(0,a.jsx)(n.code,{children:"blur"})," etc. (documented below) that work for every navigator, as well as navigator specific events that work only for certain navigators."]}),"\n",(0,a.jsxs)(n.p,{children:["Apart from the core events, each navigator can emit their own custom events. For example, stack navigator emits ",(0,a.jsx)(n.code,{children:"transitionStart"})," and ",(0,a.jsx)(n.code,{children:"transitionEnd"})," events, tab navigator emits ",(0,a.jsx)(n.code,{children:"tabPress"})," event etc. You can find details about the events emitted on the individual navigator's documentation."]}),"\n",(0,a.jsx)(n.h2,{id:"core-events",children:"Core events"}),"\n",(0,a.jsx)(n.p,{children:"Following are the events available in every navigator:"}),"\n",(0,a.jsx)(n.h3,{id:"focus",children:(0,a.jsx)(n.code,{children:"focus"})}),"\n",(0,a.jsx)(n.p,{children:"This event is emitted when the screen comes into focus."}),"\n",(0,a.jsxs)(n.p,{children:["For most cases, the ",(0,a.jsx)(n.a,{href:"/docs/7.x/use-focus-effect",children:(0,a.jsx)(n.code,{children:"useFocusEffect"})})," hook might be appropriate than adding the listener manually. See ",(0,a.jsx)(n.a,{href:"/docs/7.x/function-after-focusing-screen",children:"this guide"})," for more details to decide which API you should use."]}),"\n",(0,a.jsx)(n.h3,{id:"blur",children:(0,a.jsx)(n.code,{children:"blur"})}),"\n",(0,a.jsx)(n.p,{children:"This event is emitted when the screen goes out of focus."}),"\n",(0,a.jsx)(n.h3,{id:"state",children:(0,a.jsx)(n.code,{children:"state"})}),"\n",(0,a.jsxs)(n.p,{children:["This event is emitted when the navigator's state changes. This event receives the navigator's state in the event data (",(0,a.jsx)(n.code,{children:"event.data.state"}),")."]}),"\n",(0,a.jsx)(n.h3,{id:"beforeremove",children:(0,a.jsx)(n.code,{children:"beforeRemove"})}),"\n",(0,a.jsxs)(n.p,{children:["This event is emitted when the user is leaving the screen due to a navigation action. It is possible to prevent the user from leaving the screen by calling ",(0,a.jsx)(n.code,{children:"e.preventDefault()"})," in the event listener."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"React.useEffect(\n  () =>\n    navigation.addListener('beforeRemove', (e) => {\n      if (!hasUnsavedChanges) {\n        return;\n      }\n\n      // Prevent default behavior of leaving the screen\n      e.preventDefault();\n\n      // Prompt the user before leaving the screen\n      Alert.alert(\n        'Discard changes?',\n        'You have unsaved changes. Are you sure to discard them and leave the screen?',\n        [\n          {\n            text: \"Don't leave\",\n            style: 'cancel',\n            onPress: () => {\n              // Do nothing\n            },\n          },\n          {\n            text: 'Discard',\n            style: 'destructive',\n            // If the user confirmed, then we dispatch the action we blocked earlier\n            // This will continue the action that had triggered the removal of the screen\n            onPress: () => navigation.dispatch(e.data.action),\n          },\n        ]\n      );\n    }),\n  [navigation, hasUnsavedChanges]\n);\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Preventing the action in this event doesn't work properly with ",(0,a.jsx)(n.a,{href:"/docs/7.x/native-stack-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/native-stack"})}),". We recommend using the ",(0,a.jsxs)(n.a,{href:"/docs/7.x/preventing-going-back",children:[(0,a.jsx)(n.code,{children:"usePreventRemove"})," hook"]})," instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"listening-to-events",children:"Listening to events"}),"\n",(0,a.jsx)(n.p,{children:"There are multiple ways to listen to events from the navigators. Each callback registered as an event listener receives an event object as its argument. The event object contains few properties:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"})," - Additional data regarding the event passed by the navigator. This can be ",(0,a.jsx)(n.code,{children:"undefined"})," if no data was passed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"target"})," - The route key for the screen that should receive the event. For some events, this maybe ",(0,a.jsx)(n.code,{children:"undefined"})," if the event wasn't related to a specific screen."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"preventDefault"})," - For some events, there may be a ",(0,a.jsx)(n.code,{children:"preventDefault"})," method on the event object. Calling this method will prevent the default action performed by the event (such as switching tabs on ",(0,a.jsx)(n.code,{children:"tabPress"}),"). Support for preventing actions are only available for certain events like ",(0,a.jsx)(n.code,{children:"tabPress"})," and won't work for all events."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You can listen to events with the following APIs:"}),"\n",(0,a.jsx)(n.h3,{id:"navigationaddlistener",children:(0,a.jsx)(n.code,{children:"navigation.addListener"})}),"\n",(0,a.jsxs)(n.p,{children:["Inside a screen, you can add listeners on the ",(0,a.jsx)(n.code,{children:"navigation"})," object with the ",(0,a.jsx)(n.code,{children:"addListener"})," method. The ",(0,a.jsx)(n.code,{children:"addListener"})," method takes 2 arguments: type of the event, and a callback to be called on the event. It returns a function that can be called to unsubscribe from the event."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigation.addListener('tabPress', (e) => {\n  // Prevent default action\n  e.preventDefault();\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Normally, you'd add an event listener in ",(0,a.jsx)(n.code,{children:"React.useEffect"})," for function components. For example:"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"navigation.addListener with focus","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="navigation.addListener with focus" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport {\n  createStaticNavigation,\n  useNavigation,\n} from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction SettingsScreen() {\n  const navigation = useNavigation();\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nfunction ProfileScreen() {\n  const navigation = useNavigation();\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n    });\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('blur', () => {\n      // Screen was unfocused\n    });\n    return unsubscribe;\n  }, [navigation]);\n\n  // Rest of the component\n  // codeblock-focus-end\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n  // codeblock-focus-start\n}\n// codeblock-focus-end\n\nconst SettingsStack = createNativeStackNavigator({\n  screens: {\n    Settings: SettingsScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst Navigation = createStaticNavigation(SettingsStack);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"navigation.addListener with focus","data-snack":"true","data-version":"7",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="navigation.addListener with focus" snack version=7',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { Button } from '@react-navigation/elements';\nimport { NavigationContainer, useNavigation } from '@react-navigation/native';\nimport { createNativeStackNavigator } from '@react-navigation/native-stack';\n\nfunction SettingsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Settings Screen</Text>\n      <Button onPress={() => navigation.navigate('Profile')}>\n        Go to Profile\n      </Button>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nfunction ProfileScreen({ navigation }) {\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('focus', () => {\n      // Screen was focused\n    });\n    return unsubscribe;\n  }, [navigation]);\n\n  React.useEffect(() => {\n    const unsubscribe = navigation.addListener('blur', () => {\n      // Screen was unfocused\n    });\n    return unsubscribe;\n  }, [navigation]);\n\n  // Rest of the component\n  // codeblock-focus-end\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Text>Profile Screen</Text>\n      <Button onPress={() => navigation.navigate('Settings')}>\n        Go to Settings\n      </Button>\n    </View>\n  );\n  // codeblock-focus-start\n}\n// codeblock-focus-end\n\nconst SettingsStack = createNativeStackNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <SettingsStack.Navigator>\n        <SettingsStack.Screen name=\"Settings\" component={SettingsScreen} />\n        <SettingsStack.Screen name=\"Profile\" component={ProfileScreen} />\n      </SettingsStack.Navigator>\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"unsubscribe"})," function can be returned as the cleanup function in the effect."]}),"\n",(0,a.jsxs)(n.p,{children:["For class components, you can add the event in the ",(0,a.jsx)(n.code,{children:"componentDidMount"})," lifecycle method and unsubscribe in ",(0,a.jsx)(n.code,{children:"componentWillUnmount"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"class Profile extends React.Component {\n  componentDidMount() {\n    this._unsubscribe = navigation.addListener('focus', () => {\n      // do something\n    });\n  }\n\n  componentWillUnmount() {\n    this._unsubscribe();\n  }\n\n  render() {\n    // Content of the component\n  }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["One thing to keep in mind is that you can only listen to events from the immediate navigator with ",(0,a.jsx)(n.code,{children:"addListener"}),". For example, if you try to add a listener in a screen that's inside a stack that's nested in a tab, it won't get the ",(0,a.jsx)(n.code,{children:"tabPress"})," event. If you need to listen to an event from a parent navigator, you may use ",(0,a.jsx)(n.a,{href:"/docs/7.x/navigation-object#getparent",children:(0,a.jsx)(n.code,{children:"navigation.getParent"})})," to get a reference to the parent screen's navigation object and add a listener."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const unsubscribe = navigation\n  .getParent('MyTabs')\n  .addListener('tabPress', (e) => {\n    // Do something\n  });\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here ",(0,a.jsx)(n.code,{children:"'MyTabs'"})," refers to the value you pass in the ",(0,a.jsx)(n.code,{children:"id"})," prop of the parent ",(0,a.jsx)(n.code,{children:"Tab.Navigator"})," whose event you want to listen to."]}),"\n",(0,a.jsxs)(n.h3,{id:"listeners-prop-on-screen",children:[(0,a.jsx)(n.code,{children:"listeners"})," prop on ",(0,a.jsx)(n.code,{children:"Screen"})]}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you might want to add a listener from the component where you defined the navigator rather than inside the screen. You can use the ",(0,a.jsx)(n.code,{children:"listeners"})," prop on the ",(0,a.jsx)(n.code,{children:"Screen"})," component to add listeners. The ",(0,a.jsx)(n.code,{children:"listeners"})," prop takes an object with the event names as keys and the listener callbacks as values."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Tab = createBottomTabNavigatior({\n  screens: {\n    Chat: {\n      screen: Chat,\n      listeners: {\n        tabPress: (e) => {\n          // Prevent default action\n          e.preventDefault;\n        },\n      },\n    },\n  },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Tab.Screen\n  name="Chat"\n  component={Chat}\n  listeners={{\n    tabPress: (e) => {\n      // Prevent default action\n      e.preventDefault();\n    },\n  }}\n/>\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["You can also pass a callback which returns the object with listeners. It'll receive ",(0,a.jsx)(n.code,{children:"navigation"})," and ",(0,a.jsx)(n.code,{children:"route"})," as the arguments."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Tab = createBottomTabNavigatior({\n  screens: {\n    Chat: {\n      screen: Chat,\n      listeners: ({ navigation, route }) => ({\n        tabPress: (e) => {\n          // Prevent default action\n          e.preventDefault;\n\n          // Do something with the `navigation` object\n          navigation.navigate('AnotherPlace');\n        },\n      }),\n    },\n  },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<Tab.Screen\n  name=\"Chat\"\n  component={Chat}\n  listeners={({ navigation, route }) => ({\n    tabPress: (e) => {\n      // Prevent default action\n      e.preventDefault();\n\n      // Do something with the `navigation` object\n      navigation.navigate('AnotherPlace');\n    },\n  })}\n/>\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"screenlisteners-prop-on-the-navigator",children:[(0,a.jsx)(n.code,{children:"screenListeners"})," prop on the navigator"]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass a prop named ",(0,a.jsx)(n.code,{children:"screenListeners"})," to the navigator component, where you can specify listeners for events from all screens for this navigator. This can be useful if you want to listen to specific events regardless of the screen, or want to listen to common events such as ",(0,a.jsx)(n.code,{children:"state"})," which is emitted to all screens."]}),"\n",(0,a.jsx)(n.p,{children:"Example:"}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Stack = createNativeStackNavigator({\n  screenListeners: {\n    state: (e) => {\n      // Do something with the state\n      console.log('state changed', e.data);\n    },\n  },\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Stack.Navigator\n  screenListeners={{\n    state: (e) => {\n      // Do something with the state\n      console.log(\'state changed\', e.data);\n    },\n  }}\n>\n  <Stack.Screen name="Home" component={HomeScreen} />\n  <Stack.Screen name="Profile" component={ProfileScreen} />\n</Stack.Navigator>\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Similar to ",(0,a.jsx)(n.code,{children:"listeners"}),", you can also pass a function to ",(0,a.jsx)(n.code,{children:"screenListeners"}),". The function will receive the ",(0,a.jsxs)(n.a,{href:"/docs/7.x/navigation-object",children:[(0,a.jsx)(n.code,{children:"navigation"})," object"]})," and the ",(0,a.jsxs)(n.a,{href:"/docs/7.x/route-object",children:[(0,a.jsx)(n.code,{children:"route"})," object"]})," for each screen. This can be useful if you need access to the ",(0,a.jsx)(n.code,{children:"navigation"})," object."]}),"\n",(0,a.jsxs)(s.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(o.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const Tab = createBottomTabNavigatior({\n  screenListeners: ({ navigation }) => ({\n    state: (e) => {\n      // Do something with the state\n      console.log('state changed', e.data);\n\n      // Do something with the `navigation` object\n      if (!navigation.canGoBack()) {\n        console.log(\"we're on the initial screen\");\n      }\n    },\n  }),\n  screens: {\n    Home: HomeScreen,\n    Profile: ProfileScreen,\n  },\n});\n"})})}),(0,a.jsx)(o.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'<Tab.Navigator\n  screenListeners={({ navigation }) => ({\n    state: (e) => {\n      // Do something with the state\n      console.log(\'state changed\', e.data);\n\n      // Do something with the `navigation` object\n      if (!navigation.canGoBack()) {\n        console.log("we\'re on the initial screen");\n      }\n    },\n  })}\n>\n  <Tab.Screen name="Home" component={HomeScreen} />\n  <Tab.Screen name="Profile" component={ProfileScreen} />\n</Tab.Navigator>\n'})})})]})]})}function v(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(86010);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var a=t(67294),i=t(86010),s=t(12466),o=t(16550),r=t(20469),c=t(91980),l=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function v(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[o,c]=(0,a.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=a.find((e=>e.default)))?n:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[l,u]=g({queryString:t,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,s]=(0,d.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),p=(()=>{const e=null!=l?l:f;return v({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{p&&c(p)}),[p]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!v({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=t(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=r[t].value;i!==a&&(l(n),o(i))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const n=c.indexOf(e.currentTarget)+1;t=null!=(a=c[n])?a:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",p.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",p.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(j,{...e,...n})]})}function S(e){const n=(0,m.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);