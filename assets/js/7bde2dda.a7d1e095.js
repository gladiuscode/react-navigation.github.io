"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([["76970"],{67119:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>h,assets:()=>u,toc:()=>d,frontMatter:()=>c});var o=JSON.parse('{"id":"customizing-tabbar","title":"Customizing bottom tab bar","description":"This guide covers customizing the tab bar in createBottomTabNavigator. Make sure to install and configure the library according to the installation instructions first.","source":"@site/versioned_docs/version-7.x/customizing-bottom-tabs.md","sourceDirName":".","slug":"/customizing-tabbar","permalink":"/docs/customizing-tabbar","draft":false,"unlisted":false,"editUrl":"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/customizing-bottom-tabs.md","tags":[],"version":"7.x","frontMatter":{"id":"customizing-tabbar","title":"Customizing bottom tab bar","sidebar_label":"Customizing tab bar"},"sidebar":"docs","previous":{"title":"Supporting safe areas","permalink":"/docs/handling-safe-area"},"next":{"title":"Hiding tab bar in screens","permalink":"/docs/hiding-tabbar-in-screens"}}'),a=t("85893"),i=t("50065"),r=t("47902"),s=t("5525");let c={id:"customizing-tabbar",title:"Customizing bottom tab bar",sidebar_label:"Customizing tab bar"},l=void 0,u={},d=[{value:"Add icons for each tab",id:"add-icons-for-each-tab",level:2},{value:"Add badges to icons",id:"add-badges-to-icons",level:2}];function m(e){let n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This guide covers customizing the tab bar in ",(0,a.jsx)(n.a,{href:"/docs/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})}),". Make sure to install and configure the library according to the ",(0,a.jsx)(n.a,{href:"/docs/bottom-tab-navigator#installation",children:"installation instructions"})," first."]}),"\n",(0,a.jsx)(n.h2,{id:"add-icons-for-each-tab",children:"Add icons for each tab"}),"\n",(0,a.jsxs)(n.p,{children:["This is similar to how you would customize a stack navigator \u2014 there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in ",(0,a.jsx)(n.code,{children:"options"}),"."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Tab bar icons","data-snack":"true","data-dependencies":"@expo/vector-icons,@expo/vector-icons/Ionicons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab bar icons" snack dependencies=@expo/vector-icons,@expo/vector-icons/Ionicons',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n// codeblock-focus-start\n// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootTabs = createBottomTabNavigator({\n  screenOptions: ({ route }) => ({\n    // highlight-start\n    tabBarIcon: ({ focused, color, size }) => {\n      let iconName;\n\n      if (route.name === 'Home') {\n        iconName = focused\n          ? 'ios-information-circle'\n          : 'ios-information-circle-outline';\n      } else if (route.name === 'Settings') {\n        iconName = focused ? 'ios-list' : 'ios-list-outline';\n      }\n\n      // You can return any component that you like here!\n      return <Ionicons name={iconName} size={size} color={color} />;\n    },\n    // highlight-end\n    tabBarActiveTintColor: 'tomato',\n    tabBarInactiveTintColor: 'gray',\n  }),\n  screens: {\n    Home: HomeScreen,\n    Settings: SettingsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true","data-dependencies":"@expo/vector-icons,@expo/vector-icons/Ionicons",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack dependencies=@expo/vector-icons,@expo/vector-icons/Ionicons',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n// codeblock-focus-start\n// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or\n// react-native-vector-icons/Ionicons otherwise.\nimport Ionicons from 'react-native-vector-icons/Ionicons';\n\n// codeblock-focus-end\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\n// codeblock-focus-start\nfunction RootTabs() {\n  return (\n    <Tab.Navigator\n      screenOptions={({ route }) => ({\n        // highlight-start\n        tabBarIcon: ({ focused, color, size }) => {\n          let iconName;\n\n          if (route.name === 'Home') {\n            iconName = focused\n              ? 'ios-information-circle'\n              : 'ios-information-circle-outline';\n          } else if (route.name === 'Settings') {\n            iconName = focused ? 'ios-list' : 'ios-list-outline';\n          }\n\n          // You can return any component that you like here!\n          return <Ionicons name={iconName} size={size} color={color} />;\n        },\n        // highlight-end\n        tabBarActiveTintColor: 'tomato',\n        tabBarInactiveTintColor: 'gray',\n      })}\n    >\n      <Tab.Screen name=\"Home\" component={HomeScreen} />\n      <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Let's dissect this:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a supported option in bottom tab navigator. So we know we can use it on our screen components in the ",(0,a.jsx)(n.code,{children:"options"})," prop, but in this case chose to put it in the ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop of ",(0,a.jsx)(n.code,{children:"Tab.Navigator"})," in order to centralize the icon configuration for convenience."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tabBarIcon"})," is a function that is given the ",(0,a.jsx)(n.code,{children:"focused"})," state, ",(0,a.jsx)(n.code,{children:"color"}),", and ",(0,a.jsx)(n.code,{children:"size"})," params. If you take a peek further down in the configuration you will see ",(0,a.jsx)(n.code,{children:"tabBarActiveTintColor"})," and ",(0,a.jsx)(n.code,{children:"tabBarInactiveTintColor"}),". These default to the iOS platform defaults, but you can change them here. The ",(0,a.jsx)(n.code,{children:"color"})," that is passed through to the ",(0,a.jsx)(n.code,{children:"tabBarIcon"})," is either the active or inactive one, depending on the ",(0,a.jsx)(n.code,{children:"focused"})," state (focused is active). The ",(0,a.jsx)(n.code,{children:"size"})," is the size of the icon expected by the tab bar."]}),"\n",(0,a.jsxs)(n.li,{children:["Read the ",(0,a.jsx)(n.a,{href:"/docs/bottom-tab-navigator",children:"full API reference"})," for further information on ",(0,a.jsx)(n.code,{children:"createBottomTabNavigator"})," configuration options."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"add-badges-to-icons",children:"Add badges to icons"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes we want to add badges to some icons. You can use the ",(0,a.jsxs)(n.a,{href:"/docs/bottom-tab-navigator#tabbarbadge",children:[(0,a.jsx)(n.code,{children:"tabBarBadge"})," option"]})," to do it:"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"config",queryString:"config",children:[(0,a.jsx)(s.Z,{value:"static",label:"Static",default:!0,children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack',children:"import * as React from 'react';\nimport { View, Text } from 'react-native';\nimport { createStaticNavigation } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\n// codeblock-focus-start\nconst RootTabs = createBottomTabNavigator({\n  screens: {\n    Home: {\n      screen: HomeScreen,\n      options: {\n        // highlight-start\n        tabBarBadge: 3,\n        // highlight-end\n      },\n    },\n    Settings: SettingsScreen,\n  },\n});\n// codeblock-focus-end\n\nconst Navigation = createStaticNavigation(RootTabs);\n\nexport default function App() {\n  return <Navigation />;\n}\n"})})}),(0,a.jsx)(s.Z,{value:"dynamic",label:"Dynamic",children:(0,a.jsx)(n.pre,{"data-name":"Tab based navigation","data-snack":"true",children:(0,a.jsx)(n.code,{className:"language-js",metastring:'name="Tab based navigation" snack',children:"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\n\nfunction HomeScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Home!</Text>\n    </View>\n  );\n}\n\nfunction SettingsScreen() {\n  return (\n    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>\n      <Text>Settings!</Text>\n    </View>\n  );\n}\n\nconst Tab = createBottomTabNavigator();\n\n// codeblock-focus-start\nfunction RootTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen\n        name=\"Home\"\n        component={HomeScreen}\n        options={{\n          // highlight-start\n          tabBarBadge: 3,\n          // highlight-end\n        }}\n      />\n      <Tab.Screen name=\"Settings\" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n// codeblock-focus-end\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <RootTabs />\n    </NavigationContainer>\n  );\n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["From UI perspective this component is ready to use, but you still need to find some way to pass down the badge count properly from somewhere else, like using ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/useContext",children:"React Context"}),", ",(0,a.jsx)(n.a,{href:"https://redux.js.org/",children:"Redux"}),", ",(0,a.jsx)(n.a,{href:"https://mobx.js.org/",children:"MobX"})," or ",(0,a.jsx)(n.a,{href:"https://github.com/facebook/react-native/blob/master/Libraries/vendor/emitter/EventEmitter.js",children:"event emitters"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can also update the badge from within the screen component by using the ",(0,a.jsx)(n.code,{children:"setOptions"})," method:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const navigation = useNavigation();\n\nReact.useEffect(() => {\n  navigation.setOptions({\n    tabBarBadge: unreadMessagesCount,\n  });\n}, [navigation, unreadMessagesCount]);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tabs with badges",src:t(7074).Z+"",width:"300",height:"649"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},7074:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/tabs-badges-af2f1f6228840836ac05e2a7636ffbd9.png"},5525:function(e,n,t){t.d(n,{Z:()=>r});var o=t("85893");t("67294");var a=t("67026");let i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:t,children:n})}},47902:function(e,n,t){t.d(n,{Z:()=>j});var o=t("85893"),a=t("67294"),i=t("67026"),r=t("69599"),s=t("16550"),c=t("32000"),l=t("4520"),u=t("38341"),d=t("76009");function m(e){var n,t;return null!==(t=null===(n=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error("Docusaurus error: Bad <Tabs> child <".concat("string"==typeof e.type?e.type:e.type.name,'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.'))}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function h(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}var b=t("7227");let f="tabList__CuJ",g="tabItem_LNqP";function p(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:c}=e,l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),d=e=>{let n=e.currentTarget,t=c[l.indexOf(n)].value;t!==a&&(u(n),s(t))},m=e=>{var n,t;let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;o=null!==(n=l[t])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;o=null!==(t=l[n])&&void 0!==t?t:l[l.length-1]}}null==o||o.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:c.map(e=>{let{value:n,label:t,attributes:r}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:m,onClick:d,...r,className:(0,i.Z)("tabs__item",g,null==r?void 0:r.className,{"tabs__item--active":a===n}),children:null!=t?t:n},n)})})}function v(e){let{lazy:n,children:t,selectedValue:r}=e,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){let e=s.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,i.Z)("margin-top--md",e.props.className)}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function x(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:o}=e,i=function(e){let{values:n,children:t}=e;return(0,a.useMemo)(()=>{let e=null!=n?n:m(t).map(e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error('Docusaurus error: Duplicate values "'.concat(n.map(e=>e.value).join(", "),'" found in <Tabs>. Every value needs to be unique.'))}(e),e},[n,t])}(e),[r,b]=(0,a.useState)(()=>(function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:o}))throw Error('Docusaurus error: The <Tabs> has a defaultValue "'.concat(t,'" but none of its children has the corresponding value. Available values are: ').concat(o.map(e=>e.value).join(", "),". If you intend to show no default tab, use defaultValue={null} instead."));return t}let a=null!==(n=o.find(e=>e.default))&&void 0!==n?n:o[0];if(!a)throw Error("Unexpected error: 0 tabValues");return a.value})({defaultValue:n,tabValues:i})),[f,g]=function(e){let{queryString:n=!1,groupId:t}=e,o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t}),r=(0,l._X)(i);return[r,(0,a.useCallback)(e=>{if(!i)return;let n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})},[i,o])]}({queryString:t,groupId:o}),[p,v]=function(e){var n;let{groupId:t}=e;let o=(n=t)?"docusaurus.tab.".concat(n):null,[i,r]=(0,d.Nk)(o);return[i,(0,a.useCallback)(e=>{if(!!o)r.set(e)},[o,r])]}({groupId:o}),x=(()=>{let e=null!=f?f:p;return h({value:e,tabValues:i})?e:null})();return(0,c.Z)(()=>{x&&b(x)},[x]),{selectedValue:r,selectValue:(0,a.useCallback)(e=>{if(!h({value:e,tabValues:i}))throw Error("Can't select invalid tab value=".concat(e));b(e),g(e),v(e)},[g,v,i]),tabValues:i}}(e);return(0,o.jsxs)("div",{className:(0,i.Z)("tabs-container",f),children:[(0,o.jsx)(p,{...n,...e}),(0,o.jsx)(v,{...n,...e})]})}function j(e){let n=(0,b.Z)();return(0,o.jsx)(x,{...e,children:m(e.children)},String(n))}},50065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return r}});var o=t(67294);let a={},i=o.createContext(a);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);