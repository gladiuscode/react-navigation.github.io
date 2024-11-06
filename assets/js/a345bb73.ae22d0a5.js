"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[76683],{68810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var a=t(85893),o=t(11151),i=t(74866),r=t(85162);const s={id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Configuring TypeScript"},c=void 0,d={id:"typescript",title:"Type checking with TypeScript",description:"React Navigation can be configured to type-check screens and their params, as well as various other APIs using TypeScript. This provides better intelliSense and type safety when working with React Navigation.",source:"@site/versioned_docs/version-7.x/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-7.x/typescript.md",tags:[],version:"7.x",frontMatter:{id:"typescript",title:"Type checking with TypeScript",sidebar_label:"Configuring TypeScript"},sidebar:"docs",previous:{title:"Testing with Jest",permalink:"/docs/testing"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},l={},h=[{value:"Navigator specific types",id:"navigator-specific-types",level:2},{value:"Nesting navigator using dynamic API",id:"nesting-navigator-using-dynamic-api",level:2},{value:"Typechecking the navigator",id:"typechecking-the-navigator",level:2},{value:"Type checking screens",id:"type-checking-screens",level:2},{value:"Nesting navigators",id:"nesting-navigators",level:2},{value:"Type checking screens and params in nested navigator",id:"type-checking-screens-and-params-in-nested-navigator",level:3},{value:"Combining navigation props",id:"combining-navigation-props",level:3},{value:"Annotating <code>useNavigation</code>",id:"annotating-usenavigation",level:2},{value:"Annotating <code>useRoute</code>",id:"annotating-useroute",level:2},{value:"Annotating <code>options</code> and <code>screenOptions</code>",id:"annotating-options-and-screenoptions",level:2},{value:"Annotating <code>ref</code> on <code>NavigationContainer</code>",id:"annotating-ref-on-navigationcontainer",level:2},{value:"Specifying default types for <code>useNavigation</code>, <code>Link</code>, <code>ref</code> etc",id:"specifying-default-types-for-usenavigation-link-ref-etc",level:2},{value:"Organizing types",id:"organizing-types",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"React Navigation can be configured to type-check screens and their params, as well as various other APIs using TypeScript. This provides better intelliSense and type safety when working with React Navigation."}),"\n",(0,a.jsxs)(i.Z,{groupId:"config",queryString:"config",children:[(0,a.jsxs)(r.Z,{value:"static",label:"Static",default:!0,children:[(0,a.jsx)(n.p,{children:"There are 2 steps to configure TypeScript with the static API:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Each screen component needs to specify the type of the ",(0,a.jsx)(n.a,{href:"/docs/params",children:(0,a.jsx)(n.code,{children:"route.params"})})," prop that it accepts. The ",(0,a.jsx)(n.code,{children:"StaticScreenProps"})," type makes it simpler:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { StaticScreenProps } from '@react-navigation/native';\n\n// highlight-start\ntype Props = StaticScreenProps<{\n  username: string;\n}>;\n// highlight-end\n\nfunction ProfileScreen({ route }: Props) {\n  // ...\n}\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Generate the ",(0,a.jsx)(n.code,{children:"ParamList"})," type for the root navigator and specify it as the default type for the ",(0,a.jsx)(n.code,{children:"RootParamList"})," type:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { StaticParamList } from '@react-navigation/native';\n\nconst HomeTabs = createBottomTabNavigator({\n  screens: {\n    Feed: FeedScreen,\n    Profile: ProfileScreen,\n  },\n});\n\nconst RootStack = createNativeStackNavigator({\n  screens: {\n    Home: HomeTabs,\n  },\n});\n\n// highlight-next-line\ntype RootStackParamList = StaticParamList<typeof RootStack>;\n\n// highlight-start\ndeclare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n// highlight-end\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is needed to type-check the ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})})," hook."]}),"\n"]}),"\n"]}),(0,a.jsx)(n.h2,{id:"navigator-specific-types",children:"Navigator specific types"}),(0,a.jsxs)(n.p,{children:["Generally, we recommend using the default types for the ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})})," prop to access the navigation object in a navigator-agnostic manner. However, if you need to use navigator-specific APIs, you need to manually annotate ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type BottomTabParamList = StaticParamList<typeof BottomTabNavigator>;\ntype ProfileScreenNavigationProp = BottomTabNavigationProp<\n  BottomTabParamList,\n  'Profile'\n>;\n\n// ...\n\nconst navigation = useNavigation<ProfileScreenNavigationProp>();\n"})}),(0,a.jsxs)(n.p,{children:["Note that annotating ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})})," this way is not type-safe since we can't guarantee that the type you provided matches the type of the navigator."]}),(0,a.jsx)(n.h2,{id:"nesting-navigator-using-dynamic-api",children:"Nesting navigator using dynamic API"}),(0,a.jsx)(n.p,{children:"Consider the following example:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const Tab = createBottomTabNavigator();\n\nfunction HomeTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n    </Tab.Navigator>\n  );\n}\n\nconst RootStack = createStackNavigator({\n  Home: HomeTabs,\n});\n'})}),(0,a.jsxs)(n.p,{children:["Here, the ",(0,a.jsx)(n.code,{children:"HomeTabs"})," component is defined using the dynamic API. This means that when we create the param list for the root navigator with ",(0,a.jsx)(n.code,{children:"StaticParamList<typeof RootStack>"}),", it won't know about the screens defined in the nested navigator. To fix this, we'd need to specify the param list for the nested navigator explicitly."]}),(0,a.jsxs)(n.p,{children:["This can be done by using the type of the ",(0,a.jsx)(n.a,{href:"/docs/route-object",children:(0,a.jsx)(n.code,{children:"route"})})," prop that the screen component receives:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'type HomeTabsParamList = {\n  Feed: undefined;\n  Profile: undefined;\n};\n\n// highlight-start\ntype HomeTabsProps = StaticScreenProps<\n  NavigatorScreenParams<HomeTabsParamList>\n>;\n// highlight-end\n\n// highlight-next-line\nfunction HomeTabs(_: HomeTabsProps) {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Feed" component={FeedScreen} />\n      <Tab.Screen name="Profile" component={ProfileScreen} />\n    </Tab.Navigator>\n  );\n}\n'})}),(0,a.jsxs)(n.p,{children:["Now, when using ",(0,a.jsx)(n.code,{children:"StaticParamList<typeof RootStack>"}),", it will include the screens defined in the nested navigator."]})]}),(0,a.jsxs)(r.Z,{value:"dynamic",label:"Dynamic",children:[(0,a.jsx)(n.p,{children:"When using the dynamic API, it is necessary to specify the types for each screen as well as the nesting structure as it cannot be inferred from the code."}),(0,a.jsx)(n.h2,{id:"typechecking-the-navigator",children:"Typechecking the navigator"}),(0,a.jsxs)(n.p,{children:["To typecheck our route name and params, the first thing we need to do is to create an object type with mappings for route names to the params of the route. For example, say we have a route called ",(0,a.jsx)(n.code,{children:"Profile"})," in our root navigator which should have a param ",(0,a.jsx)(n.code,{children:"userId"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type RootStackParamList = {\n  Profile: { userId: string };\n};\n"})}),(0,a.jsx)(n.p,{children:"Similarly, we need to do the same for each route:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n"})}),(0,a.jsxs)(n.p,{children:["Specifying ",(0,a.jsx)(n.code,{children:"undefined"})," means that the route doesn't have params. A union type with ",(0,a.jsx)(n.code,{children:"undefined"})," (e.g. ",(0,a.jsx)(n.code,{children:"SomeType | undefined"}),") means that params are optional."]}),(0,a.jsxs)(n.p,{children:["After we have defined the mapping, we need to tell our navigator to use it. To do that, we can pass it as a generic to the ",(0,a.jsx)(n.a,{href:"/docs/static-configuration",children:(0,a.jsx)(n.code,{children:"createXNavigator"})})," functions:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import { createStackNavigator } from '@react-navigation/stack';\n\nconst RootStack = createStackNavigator<RootStackParamList>();\n"})}),(0,a.jsx)(n.p,{children:"And then we can use it:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'<RootStack.Navigator initialRouteName="Home">\n  <RootStack.Screen name="Home" component={Home} />\n  <RootStack.Screen\n    name="Profile"\n    component={Profile}\n    initialParams={{ userId: user.id }}\n  />\n  <RootStack.Screen name="Feed" component={Feed} />\n</RootStack.Navigator>\n'})}),(0,a.jsxs)(n.p,{children:["This will provide type checking and intelliSense for props of the ",(0,a.jsx)(n.a,{href:"/docs/navigator",children:(0,a.jsx)(n.code,{children:"Navigator"})})," and ",(0,a.jsx)(n.a,{href:"/docs/screen",children:(0,a.jsx)(n.code,{children:"Screen"})})," components."]}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The type containing the mapping must be a type alias (e.g. ",(0,a.jsx)(n.code,{children:"type RootStackParamList = { ... }"}),"). It cannot be an interface (e.g. ",(0,a.jsx)(n.code,{children:"interface RootStackParamList { ... }"}),"). It also shouldn't extend ",(0,a.jsx)(n.code,{children:"ParamListBase"})," (e.g. ",(0,a.jsx)(n.code,{children:"interface RootStackParamList extends ParamListBase { ... }"}),"). Doing so will result in incorrect type checking which allows you to pass incorrect route names."]})}),(0,a.jsx)(n.h2,{id:"type-checking-screens",children:"Type checking screens"}),(0,a.jsxs)(n.p,{children:["To typecheck our screens, we need to annotate the ",(0,a.jsx)(n.code,{children:"navigation"})," and the ",(0,a.jsx)(n.code,{children:"route"})," props received by a screen. The navigator packages in React Navigation export generic types to define types for both the ",(0,a.jsx)(n.code,{children:"navigation"})," and ",(0,a.jsx)(n.code,{children:"route"})," props from the corresponding navigator."]}),(0,a.jsxs)(n.p,{children:["For example, you can use ",(0,a.jsx)(n.code,{children:"NativeStackScreenProps"})," for the Native Stack Navigator."]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { NativeStackScreenProps } from '@react-navigation/native-stack';\n\ntype RootStackParamList = {\n  Home: undefined;\n  Profile: { userId: string };\n  Feed: { sort: 'latest' | 'top' } | undefined;\n};\n\ntype Props = NativeStackScreenProps<RootStackParamList, 'Profile'>;\n"})}),(0,a.jsx)(n.p,{children:"The type takes 3 generics:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The param list object we defined earlier"}),"\n",(0,a.jsx)(n.li,{children:"The name of the route the screen belongs to"}),"\n",(0,a.jsx)(n.li,{children:"The ID of the navigator (optional)"}),"\n"]}),(0,a.jsxs)(n.p,{children:["If you have an ",(0,a.jsx)(n.code,{children:"id"})," prop for your navigator, you can do:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;\n"})}),(0,a.jsxs)(n.p,{children:["This allows us to type check route names and params which you're navigating using ",(0,a.jsx)(n.a,{href:"/docs/navigation-object#navigate",children:(0,a.jsx)(n.code,{children:"navigate"})}),", ",(0,a.jsx)(n.a,{href:"/docs/stack-actions#push",children:(0,a.jsx)(n.code,{children:"push"})})," etc. The name of the current route is necessary to type check the params in ",(0,a.jsx)(n.code,{children:"route.params"})," and when you call ",(0,a.jsx)(n.a,{href:"navigation-actions#setparams",children:(0,a.jsx)(n.code,{children:"setParams"})}),"."]}),(0,a.jsxs)(n.p,{children:["Similarly, you can import ",(0,a.jsx)(n.code,{children:"StackScreenProps"})," from ",(0,a.jsx)(n.a,{href:"/docs/stack-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/stack"})}),", ",(0,a.jsx)(n.code,{children:"DrawerScreenProps"})," from ",(0,a.jsx)(n.a,{href:"/docs/drawer-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/drawer"})}),", ",(0,a.jsx)(n.code,{children:"BottomTabScreenProps"})," from ",(0,a.jsx)(n.a,{href:"/docs/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})})," and so on."]}),(0,a.jsxs)(n.p,{children:["Then you can use the ",(0,a.jsx)(n.code,{children:"Props"})," type you defined above to annotate your component."]}),(0,a.jsx)(n.p,{children:"For function components:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function ProfileScreen({ route, navigation }: Props) {\n  // ...\n}\n"})}),(0,a.jsx)(n.p,{children:"For class components:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"class ProfileScreen extends React.Component<Props> {\n  render() {\n    // ...\n  }\n}\n"})}),(0,a.jsxs)(n.p,{children:["You can get the types for ",(0,a.jsx)(n.code,{children:"navigation"})," and ",(0,a.jsx)(n.code,{children:"route"})," from the ",(0,a.jsx)(n.code,{children:"Props"})," type as follows:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ProfileScreenNavigationProp = Props['navigation'];\n\ntype ProfileScreenRouteProp = Props['route'];\n"})}),(0,a.jsxs)(n.p,{children:["Alternatively, you can also annotate the ",(0,a.jsx)(n.code,{children:"navigation"})," and ",(0,a.jsx)(n.code,{children:"route"})," objects separately."]}),(0,a.jsxs)(n.p,{children:["To get the type for the ",(0,a.jsx)(n.code,{children:"navigation"})," prop, we need to import the corresponding type from the navigator. For example, ",(0,a.jsx)(n.code,{children:"NativeStackNavigationProp"})," for ",(0,a.jsx)(n.code,{children:"@react-navigation/native-stack"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { NativeStackNavigationProp } from '@react-navigation/native-stack';\n\ntype ProfileScreenNavigationProp = NativeStackNavigationProp<\n  RootStackParamList,\n  'Profile'\n>;\n"})}),(0,a.jsxs)(n.p,{children:["Similarly, you can import ",(0,a.jsx)(n.code,{children:"StackNavigationProp"})," from ",(0,a.jsx)(n.a,{href:"/docs/stack-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/stack"})}),", ",(0,a.jsx)(n.code,{children:"DrawerNavigationProp"})," from ",(0,a.jsx)(n.a,{href:"/docs/drawer-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/drawer"})}),", ",(0,a.jsx)(n.code,{children:"BottomTabNavigationProp"})," from ",(0,a.jsx)(n.a,{href:"/docs/bottom-tab-navigator",children:(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})})," etc."]}),(0,a.jsxs)(n.p,{children:["To get the type for the ",(0,a.jsx)(n.code,{children:"route"})," object, we need to use the ",(0,a.jsx)(n.code,{children:"RouteProp"})," type from ",(0,a.jsx)(n.code,{children:"@react-navigation/native"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import type { RouteProp } from '@react-navigation/native';\n\ntype ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;\n"})}),(0,a.jsxs)(n.p,{children:["We recommend creating a separate file: ",(0,a.jsx)(n.code,{children:"types.tsx"})," - where you keep the types and import from there in your component files instead of repeating them in each file."]}),(0,a.jsx)(n.h2,{id:"nesting-navigators",children:"Nesting navigators"}),(0,a.jsx)(n.h3,{id:"type-checking-screens-and-params-in-nested-navigator",children:"Type checking screens and params in nested navigator"}),(0,a.jsxs)(n.p,{children:["You can ",(0,a.jsx)(n.a,{href:"/docs/nesting-navigators#navigating-to-a-screen-in-a-nested-navigator",children:"navigate to a screen in a nested navigator"})," by passing ",(0,a.jsx)(n.code,{children:"screen"})," and ",(0,a.jsx)(n.code,{children:"params"})," properties for the nested screen:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"navigation.navigate('Home', {\n  screen: 'Feed',\n  params: { sort: 'latest' },\n});\n"})}),(0,a.jsxs)(n.p,{children:["To be able to type check this, we need to extract the params from the screen containing the nested navigator. This can be done using the ",(0,a.jsx)(n.code,{children:"NavigatorScreenParams"})," utility:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { NavigatorScreenParams } from '@react-navigation/native';\n\ntype TabParamList = {\n  Home: NavigatorScreenParams<StackParamList>;\n  Profile: { userId: string };\n};\n"})}),(0,a.jsx)(n.h3,{id:"combining-navigation-props",children:"Combining navigation props"}),(0,a.jsxs)(n.p,{children:["When you nest navigators, the navigation prop of the screen is a combination of multiple navigation props. For example, if we have a tab inside a stack, the ",(0,a.jsx)(n.code,{children:"navigation"})," prop will have both ",(0,a.jsx)(n.a,{href:"/docs/tab-actions#jumpto",children:(0,a.jsx)(n.code,{children:"jumpTo"})})," (from the tab navigator) and ",(0,a.jsx)(n.a,{href:"/docs/stack-actions#push",children:(0,a.jsx)(n.code,{children:"push"})})," (from the stack navigator). To make it easier to combine types from multiple navigators, you can use the ",(0,a.jsx)(n.code,{children:"CompositeScreenProps"})," type:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { CompositeScreenProps } from '@react-navigation/native';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\nimport type { StackScreenProps } from '@react-navigation/stack';\n\ntype ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  StackScreenProps<StackParamList>\n>;\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"CompositeScreenProps"})," type takes 2 parameters, the first parameter is the type of props for the primary navigation (type for the navigator that owns this screen, in our case the tab navigator which contains the ",(0,a.jsx)(n.code,{children:"Profile"})," screen) and the second parameter is the type of props for secondary navigation (type for a parent navigator). The primary type should always have the screen's route name as its second parameter."]}),(0,a.jsx)(n.p,{children:"For multiple parent navigators, this secondary type should be nested:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ProfileScreenProps = CompositeScreenProps<\n  BottomTabScreenProps<TabParamList, 'Profile'>,\n  CompositeScreenProps<\n    StackScreenProps<StackParamList>,\n    DrawerScreenProps<DrawerParamList>\n  >\n>;\n"})}),(0,a.jsxs)(n.p,{children:["If annotating the ",(0,a.jsx)(n.code,{children:"navigation"})," prop separately, you can use ",(0,a.jsx)(n.code,{children:"CompositeNavigationProp"})," instead. The usage is similar to ",(0,a.jsx)(n.code,{children:"CompositeScreenProps"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { CompositeNavigationProp } from '@react-navigation/native';\nimport type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';\nimport type { StackNavigationProp } from '@react-navigation/stack';\n\ntype ProfileScreenNavigationProp = CompositeNavigationProp<\n  BottomTabNavigationProp<TabParamList, 'Profile'>,\n  StackNavigationProp<StackParamList>\n>;\n"})}),(0,a.jsxs)(n.h2,{id:"annotating-usenavigation",children:["Annotating ",(0,a.jsx)(n.code,{children:"useNavigation"})]}),(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["Annotating ",(0,a.jsx)(n.code,{children:"useNavigation"})," isn't type-safe because the type parameter cannot be statically verified.\nPrefer ",(0,a.jsx)(n.a,{href:"#specifying-default-types-for-usenavigation-link-ref-etc",children:"specifying a default type"})," instead."]})}),(0,a.jsxs)(n.p,{children:["To annotate the ",(0,a.jsx)(n.code,{children:"navigation"})," object that we get from ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})}),", we can use a type parameter:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const navigation = useNavigation<ProfileScreenNavigationProp>();\n"})}),(0,a.jsxs)(n.h2,{id:"annotating-useroute",children:["Annotating ",(0,a.jsx)(n.code,{children:"useRoute"})]}),(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["Annotating ",(0,a.jsx)(n.code,{children:"useRoute"})," isn't type-safe because the type parameter cannot be statically verified.\nPrefer using the ",(0,a.jsxs)(n.a,{href:"/docs/route-object",children:[(0,a.jsx)(n.code,{children:"route"})," object"]})," from the screen component's props instead when possible. Use ",(0,a.jsx)(n.code,{children:"useRoute"})," for generic code that doesn't need specific route type."]})}),(0,a.jsxs)(n.p,{children:["To annotate the ",(0,a.jsx)(n.code,{children:"route"})," object that we get from ",(0,a.jsx)(n.a,{href:"/docs/use-route",children:(0,a.jsx)(n.code,{children:"useRoute"})}),", we can use a type parameter:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"const route = useRoute<ProfileScreenRouteProp>();\n"})}),(0,a.jsxs)(n.h2,{id:"annotating-options-and-screenoptions",children:["Annotating ",(0,a.jsx)(n.code,{children:"options"})," and ",(0,a.jsx)(n.code,{children:"screenOptions"})]}),(0,a.jsxs)(n.p,{children:["When you pass the ",(0,a.jsx)(n.code,{children:"options"})," to a ",(0,a.jsx)(n.code,{children:"Screen"})," or ",(0,a.jsx)(n.code,{children:"screenOptions"})," prop to a ",(0,a.jsx)(n.code,{children:"Navigator"})," component, they are already type-checked and you don't need to do anything special. However, sometimes you might want to extract the options to a separate object, and you might want to annotate it."]}),(0,a.jsxs)(n.p,{children:["To annotate the options, we need to import the corresponding type from the navigator. For example, ",(0,a.jsx)(n.code,{children:"StackNavigationOptions"})," for ",(0,a.jsx)(n.code,{children:"@react-navigation/stack"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { StackNavigationOptions } from '@react-navigation/stack';\n\nconst options: StackNavigationOptions = {\n  headerShown: false,\n};\n"})}),(0,a.jsxs)(n.p,{children:["Similarly, you can import ",(0,a.jsx)(n.code,{children:"DrawerNavigationOptions"})," from ",(0,a.jsx)(n.code,{children:"@react-navigation/drawer"}),", ",(0,a.jsx)(n.code,{children:"BottomTabNavigationOptions"})," from ",(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})," etc."]}),(0,a.jsxs)(n.p,{children:["When using the function form of ",(0,a.jsx)(n.code,{children:"options"})," and ",(0,a.jsx)(n.code,{children:"screenOptions"}),", you can annotate the arguments with a type exported from the navigator, e.g. ",(0,a.jsx)(n.code,{children:"StackOptionsArgs"})," for ",(0,a.jsx)(n.code,{children:"@react-navigation/stack"}),", ",(0,a.jsx)(n.code,{children:"DrawerOptionsArgs"})," for ",(0,a.jsx)(n.code,{children:"@react-navigation/drawer"}),", ",(0,a.jsx)(n.code,{children:"BottomTabOptionsArgs"})," for ",(0,a.jsx)(n.code,{children:"@react-navigation/bottom-tabs"})," etc.:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type {\n  StackNavigationOptions,\n  StackOptionsArgs,\n} from '@react-navigation/stack';\n\nconst options = ({ route }: StackOptionsArgs): StackNavigationOptions => {\n  return {\n    headerTitle: route.name,\n  };\n};\n"})}),(0,a.jsxs)(n.h2,{id:"annotating-ref-on-navigationcontainer",children:["Annotating ",(0,a.jsx)(n.code,{children:"ref"})," on ",(0,a.jsx)(n.code,{children:"NavigationContainer"})]}),(0,a.jsxs)(n.p,{children:["If you use the ",(0,a.jsx)(n.code,{children:"createNavigationContainerRef()"})," method to create the ref, you can annotate it to type-check navigation actions:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { createNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = createNavigationContainerRef<RootStackParamList>();\n"})}),(0,a.jsxs)(n.p,{children:["Similarly, for ",(0,a.jsx)(n.code,{children:"useNavigationContainerRef()"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { useNavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef = useNavigationContainerRef<RootStackParamList>();\n"})}),(0,a.jsxs)(n.p,{children:["If you're using a regular ",(0,a.jsx)(n.code,{children:"ref"})," object, you can pass a generic to the ",(0,a.jsx)(n.code,{children:"NavigationContainerRef"})," type.."]}),(0,a.jsxs)(n.p,{children:["Example when using ",(0,a.jsx)(n.code,{children:"React.useRef"})," hook:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.useRef<NavigationContainerRef<RootStackParamList>>(null);\n"})}),(0,a.jsxs)(n.p,{children:["Example when using ",(0,a.jsx)(n.code,{children:"React.createRef"}),":"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { NavigationContainerRef } from '@react-navigation/native';\n\n// ...\n\nconst navigationRef =\n  React.createRef<NavigationContainerRef<RootStackParamList>>();\n"})}),(0,a.jsxs)(n.h2,{id:"specifying-default-types-for-usenavigation-link-ref-etc",children:["Specifying default types for ",(0,a.jsx)(n.code,{children:"useNavigation"}),", ",(0,a.jsx)(n.code,{children:"Link"}),", ",(0,a.jsx)(n.code,{children:"ref"})," etc"]}),(0,a.jsx)(n.p,{children:"Instead of manually annotating these APIs, you can specify a global type for your root navigator which will be used as the default type."}),(0,a.jsx)(n.p,{children:"To do this, you can add this snippet somewhere in your codebase:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"declare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n"})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"RootParamList"})," interface lets React Navigation know about the params accepted by your root navigator. Here we extend the type ",(0,a.jsx)(n.code,{children:"RootStackParamList"})," because that's the type of params for our stack navigator at the root. The name of this type isn't important."]}),(0,a.jsxs)(n.p,{children:["Specifying this type is important if you heavily use ",(0,a.jsx)(n.a,{href:"/docs/use-navigation",children:(0,a.jsx)(n.code,{children:"useNavigation"})}),", ",(0,a.jsx)(n.a,{href:"/docs/link",children:(0,a.jsx)(n.code,{children:"Link"})})," etc. in your app since it'll ensure type-safety. It will also make sure that you have correct nesting on the ",(0,a.jsx)(n.a,{href:"/docs/navigation-container#linking",children:(0,a.jsx)(n.code,{children:"linking"})})," prop."]}),(0,a.jsx)(n.h2,{id:"organizing-types",children:"Organizing types"}),(0,a.jsx)(n.p,{children:"When writing types for React Navigation, there are a couple of things we recommend to keep things organized."}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["It's good to create a separate file (e.g. ",(0,a.jsx)(n.code,{children:"navigation/types.tsx"}),") that contains the types related to React Navigation."]}),"\n",(0,a.jsxs)(n.li,{children:["Instead of using ",(0,a.jsx)(n.code,{children:"CompositeNavigationProp"})," directly in your components, it's better to create a helper type that you can reuse."]}),"\n",(0,a.jsx)(n.li,{children:"Specifying a global type for your root navigator would avoid manual annotations in many places."}),"\n"]}),(0,a.jsx)(n.p,{children:"Considering these recommendations, the file containing the types may look something like this:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type {\n  CompositeScreenProps,\n  NavigatorScreenParams,\n} from '@react-navigation/native';\nimport type { StackScreenProps } from '@react-navigation/stack';\nimport type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';\n\nexport type RootStackParamList = {\n  Home: NavigatorScreenParams<HomeTabParamList>;\n  PostDetails: { id: string };\n  NotFound: undefined;\n};\n\nexport type RootStackScreenProps<T extends keyof RootStackParamList> =\n  StackScreenProps<RootStackParamList, T>;\n\nexport type HomeTabParamList = {\n  Popular: undefined;\n  Latest: undefined;\n};\n\nexport type HomeTabScreenProps<T extends keyof HomeTabParamList> =\n  CompositeScreenProps<\n    BottomTabScreenProps<HomeTabParamList, T>,\n    RootStackScreenProps<keyof RootStackParamList>\n  >;\n\ndeclare global {\n  namespace ReactNavigation {\n    interface RootParamList extends RootStackParamList {}\n  }\n}\n"})}),(0,a.jsx)(n.p,{children:"Now, when annotating your components, you can write:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {\n  // ...\n}\n"})}),(0,a.jsxs)(n.p,{children:["If you're using hooks such as ",(0,a.jsx)(n.a,{href:"/docs/use-route",children:(0,a.jsx)(n.code,{children:"useRoute"})}),", you can write:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type { HomeTabScreenProps } from './navigation/types';\n\nfunction PopularScreen() {\n  const route = useRoute<HomeTabScreenProps<'Popular'>['route']>();\n\n  // ...\n}\n"})})]})]})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var i=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>P});var a=t(67294),o=t(86010),i=t(12466),r=t(16550),s=t(20469),c=t(91980),d=t(67392),l=t(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=p(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[d,h]=u({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,l.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),x=(()=>{const e=d??m;return g({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),l=e=>{const n=e.currentTarget,t=c.indexOf(n),o=s[t].value;o!==a&&(d(n),r(o))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:l,...i,className:(0,o.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function b(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function P(e){const n=(0,f.Z)();return(0,v.jsx)(b,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);