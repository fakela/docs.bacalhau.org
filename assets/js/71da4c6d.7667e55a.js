"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=o,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_label:"Resource Limits",sidebar_position:150},a="Resource Limits",l={unversionedId:"running-node/resource-limits",id:"running-node/resource-limits",title:"Resource Limits",description:"These are the flags that control the capacity of the Bacalhau node, and the limits for jobs that might be run.",source:"@site/docs/running-node/resource-limits.md",sourceDirName:"running-node",slug:"/running-node/resource-limits",permalink:"/running-node/resource-limits",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/resource-limits.md",tags:[],version:"current",lastUpdatedAt:1679135267,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:150,frontMatter:{sidebar_label:"Resource Limits",sidebar_position:150},sidebar:"documentationSidebar",previous:{title:"Job Selection Policy",permalink:"/running-node/job-selection"},next:{title:"Test Network Locally",permalink:"/running-node/test-network"}},s={},c=[],u={toc:c},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-limits"},"Resource Limits"),(0,o.kt)("p",null,"These are the flags that control the capacity of the Bacalhau node, and the limits for jobs that might be run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  --limit-job-cpu string                 Job CPU core limit for single job (e.g. 500m, 2, 8).\n  --limit-job-gpu string                 Job GPU limit for single job (e.g. 1, 2, or 8).\n  --limit-job-memory string              Job Memory limit for single job  (e.g. 500Mb, 2Gb, 8Gb).\n  --limit-total-cpu string               Total CPU core limit to run all jobs (e.g. 500m, 2, 8).\n  --limit-total-gpu string               Total GPU limit to run all jobs (e.g. 1, 2, or 8).\n  --limit-total-memory string            Total Memory limit to run all jobs  (e.g. 500Mb, 2Gb, 8Gb).\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--limit-total-*")," flags control the total system resources you want to give to the network.  If left blank, the system will attempt to detect these values automatically."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--limit-job-*")," flags control the maximum amount of resources a single job can consume for it to be selected for execution."),(0,o.kt)("p",null,"Resource limits are not supported for nodes running on Windows, and will be silently ignored."))}p.isMDXComponent=!0}}]);