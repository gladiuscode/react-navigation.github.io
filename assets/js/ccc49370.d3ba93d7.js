"use strict";(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[46103],{65203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});n(67294);var r=n(86010),s=n(10833),a=n(35281),i=n(9460),o=n(61460),l=n(30390),c=n(95999),d=n(32244),m=n(85893);function u(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(d.Z,{...n,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,m.jsx)(d.Z,{...t,subLabel:(0,m.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.C)(),{title:n,description:r,date:a,tags:o,authors:l,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.d,{title:n,description:r,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var f=n(39407),p=n(22212);function g(e){let{sidebar:t,children:n}=e;const{metadata:r,toc:s}=(0,i.C)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:h}=r,{hide_table_of_contents:g,toc_min_heading_level:v,toc_max_heading_level:b}=d;return(0,m.jsxs)(o.Z,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(f.Z,{toc:s,minHeadingLevel:v,maxHeadingLevel:b}):void 0,children:[h&&(0,m.jsx)(p.Z,{}),(0,m.jsx)(l.Z,{children:n}),(a||c)&&(0,m.jsx)(u,{nextItem:a,prevItem:c})]})}function v(e){const t=e.content;return(0,m.jsx)(i.n,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.FG,{className:(0,r.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,m.jsx)(h,{}),(0,m.jsx)(g,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>c});n(67294);var r=n(86010),s=n(93743);const a={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(85893);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,r.Z)(a.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(s.Z,{...n,linkClassName:o,linkActiveClassName:l})})}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),s=n(86668);function a(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):r.push(s)})),r}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>o(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function c(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,r.useRef)(void 0),n=c();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:i}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),o=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let s=t;s<=n;s+=1)r.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:a,maxHeadingLevel:i}),c=l(o,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}var m=n(39960),u=n(85893);function h(e){let{toc:t,className:n,linkClassName:r,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:r})]},e.id)))}):null}const f=r.memo(h);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const p=(0,s.L)(),g=c??p.tableOfContents.minHeadingLevel,v=m??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,r.useMemo)((()=>i({toc:a(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,r.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:v}}),[o,l,g,v])),(0,u.jsx)(f,{toc:b,className:n,linkClassName:o,...h})}},22212:(e,t,n)=>{n.d(t,{Z:()=>h});n(67294);var r=n(86010),s=n(95999),a=n(35742),i=n(85893);function o(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,i.jsx)(a.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(35281),m=n(59047);function u(e){let{className:t}=e;return(0,i.jsx)(m.Z,{type:"caution",title:(0,i.jsx)(o,{}),className:(0,r.Z)(t,d.k.common.unlistedBanner),children:(0,i.jsx)(l,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{}),(0,i.jsx)(u,{...e})]})}},55946:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(96694),s=n(94104),a=n(92949),i=n(28084),o=n(11925),l=n(67294),c=n(74866),d=n(85162),m=n(85893);const u={config:[{value:"static",label:"Static",default:!0},{value:"dynamic",label:"Dynamic"}]};const h={...r.Z,pre:function e(t){let{children:n,"data-name":r,"data-snack":h,"data-dependencies":f,"data-tabs":p,"data-lang":g,...v}=t;const{colorMode:b}=(0,a.I)(),x=(0,s.zu)(),{versions:j}=(0,i.eZ)("react-navigation-versions"),k=l.Children.only(n);if(p&&p in u)return(0,m.jsx)(c.Z,{groupId:"config",queryString:"config",children:u[p].map((t=>{const s=k.props.children;if("string"!=typeof s)throw new Error("Code to display in tabs must be a string, but received "+typeof s);const a=s.split("\n");let i="",o=!1;for(const e of a)e.trim().startsWith("// codeblock-tabs=")?o=e.trim()!==`// codeblock-tabs=${t.value}`:"// codeblock-tabs-end"===e.trim()?o=!1:o||(i+=e+"\n");return(0,m.jsx)(d.Z,{value:t.value,label:t.label,default:t.default,children:(0,m.jsx)(e,{...v,"data-name":r,"data-snack":h,"data-dependencies":f,"data-lang":g,children:l.cloneElement(n,{...k.props,children:i.trim()})})},t.value)}))});if("language-diff"===k.props.className&&g){const e=k.props.children;if("string"!=typeof e)throw new Error("Diff code must be a string, but received "+typeof e);const t=e.split("\n").map((e=>e.startsWith("+ ")?`// diff-add\n${e.replace(/^\+ /,"")}`:e.startsWith("- ")?`// diff-remove\n${e.replace(/^- /,"")}`:e)).join("\n");return n=l.cloneElement(k,{className:`language-${g}`,children:t}),(0,m.jsx)(o.Z,{...v,children:n})}if(h){const e=k.props.children;if("string"!=typeof e)throw new Error("Playground code must be a string, but received "+typeof e);const t=f?Object.fromEntries(f.split(",").map((e=>{let t="";e.startsWith("@")&&(t="@",e=e.slice(1));const[n,r="*"]=e.split("@");return[t+n,r]}))):{},s=x?.name;if(null==s||null==j[s])throw new Error(`Invalid version: ${s}`);Object.assign(t,Object.entries(j[s]).reduce(((t,n)=>{let[r,a]=n;if(e.includes(`from '${r}'`))if(Array.isArray(a)){const[e,n]=a;Object.assign(t,{[r]:e,...Object.fromEntries(Object.entries(n).map((e=>{let[t,n]=e;const r=j[s][t];if("*"===n&&r){return[t,Array.isArray(r)?r[0]:r]}return[t,n]})))})}else t[r]=a;return t}),{}));const a=new URL("https://snack.expo.dev");if(r&&a.searchParams.set("name",r),a.searchParams.set("code",e.split("\n").filter((e=>["// highlight-start","// highlight-end","// highlight-next-line","// codeblock-focus-start","// codeblock-focus-end"].every((t=>e.trim()!==t)))).join("\n").replace(/import (.*) from 'react-native-vector-icons\/(.*)'/g,'import $1 from "@expo/vector-icons/$2"')),a.searchParams.set("dependencies",Object.entries(t).map((e=>{let[t,n]=e;return`${t}@${n}`})).join(",")),a.searchParams.set("platform","web"),a.searchParams.set("supportedPlatforms","ios,android,web"),a.searchParams.set("preview","true"),a.searchParams.set("hideQueryParams","true"),"embed"===h)return a.searchParams.set("theme","dark"===b?"dark":"light"),a.pathname="embedded",(0,m.jsx)("iframe",{src:a.href,style:{width:"100%",height:660,border:"none",border:"1px solid var(--ifm-table-border-color)",borderRadius:"var(--ifm-global-radius)",overflow:"hidden"}});if(e.includes("// codeblock-focus-start")){const t=e.split("\n");let r,s="",a=!1;for(const e of t)"// codeblock-focus-start"===e.trim()?a=!0:"// codeblock-focus-end"===e.trim()?a=!1:a&&(void 0===r&&(r=e.match(/^\s*/)[0]),e.startsWith(r)?s+=e.slice(r.length)+"\n":s+=e+"\n");n=l.Children.map(n,(e=>l.cloneElement(e,{children:s})))}return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{...v,children:n}),(0,m.jsxs)("a",{className:"snack-sample-link","data-snack":"true",target:"_blank",href:a.href,children:["Try on ",(0,m.jsx)("b",{children:"Snack"}),(0,m.jsx)("svg",{width:"14px",height:"14px",viewBox:"0 0 16 16",style:{verticalAlign:"-1px"},children:(0,m.jsxs)("g",{stroke:"none",strokeWidth:"1",fill:"none",children:[(0,m.jsx)("polyline",{stroke:"currentColor",points:"8.5 0.5 15.5 0.5 15.5 7.5"}),(0,m.jsx)("path",{d:"M8,8 L15.0710678,0.928932188",stroke:"currentColor"}),(0,m.jsx)("polyline",{stroke:"currentColor",points:"9.06944444 3.5 1.5 3.5 1.5 14.5 12.5 14.5 12.5 6.93055556"})]})})]})]})}return(0,m.jsx)(o.Z,{...v,children:n})}}}}]);