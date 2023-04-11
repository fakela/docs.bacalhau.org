"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=r,h=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Job Selection Policy",sidebar_position:140},i="Job selection policy",l={unversionedId:"running-node/job-selection",id:"running-node/job-selection",title:"Job selection policy",description:"When running a node, you can choose which jobs you want to run. This is done by passing a combination of --job-selection type flags to bacalhau serve.",source:"@site/docs/running-node/job-selection.md",sourceDirName:"running-node",slug:"/running-node/job-selection",permalink:"/running-node/job-selection",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/job-selection.md",tags:[],version:"current",lastUpdatedAt:1681171643,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:140,frontMatter:{sidebar_label:"Job Selection Policy",sidebar_position:140},sidebar:"documentationSidebar",previous:{title:"Storage Providers",permalink:"/running-node/storage-providers"},next:{title:"Resource Limits",permalink:"/running-node/resource-limits"}},s={},c=[{value:"Job selection hooks",id:"job-selection-hooks",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"job-selection-policy"},"Job selection policy"),(0,r.kt)("p",null,"When running a node, you can choose which jobs you want to run. This is done by passing a combination of ",(0,r.kt)("inlineCode",{parentName:"p"},"--job-selection")," type flags to ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau serve"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  --job-selection-data-locality string   Only accept jobs that reference data we have locally ("local") or anywhere ("anywhere"). (default "local")\n  --job-selection-probe-exec string      Use the result of a exec an external program to decide if we should take on the job.\n  --job-selection-probe-http string      Use the result of a HTTP POST to decide if we should take on the job.\n  --job-selection-reject-stateless       Reject jobs that don\'t specify any data.\n')),(0,r.kt)("p",null,"These are the flags that control how the bacalhau node selects jobs to run."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--job-selection-data-locality"),' flag (which can be "local" or "anywhere") controls whether the data used for a job has a actually live on the IPFS server you are connected to.'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--job-selection-reject-stateless")," controls whether you want to accept jobs that don't use any data volumes."),(0,r.kt)("h2",{id:"job-selection-hooks"},"Job selection hooks"),(0,r.kt)("p",null,"If you want more control over making the decision to take on jobs, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--job-selection-probe-exec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--job-selection-probe-http")," flags."),(0,r.kt)("p",null,"These are external programs that are passed the following data structure, so that they can make a decision about whether or not to take on a job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node_id": "XXX",\n  "job_id": "XXX",\n  "spec": {\n    "engine": "docker",\n    "verifier": "ipfs",\n    "job_spec_vm": {\n      "image": "ubuntu:latest",\n      "entrypoint": ["cat", "/file.txt"]\n    },\n    "inputs": [{\n      "engine": "ipfs",\n      "cid": "XXX",\n      "path": "/file.txt"\n    }]\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"exec")," probe is a script to run that will be given the job data on ",(0,r.kt)("inlineCode",{parentName:"p"},"stdin"),", and must exit with status code 0 if the job should be run."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," probe is a URL to POST the job data to, and must return a 200 status code if the job should be run."))}d.isMDXComponent=!0}}]);