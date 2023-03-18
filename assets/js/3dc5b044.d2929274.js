"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[470],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=l,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_label:"Sharding",sidebar_position:2},o="Parallel Workloads",i={unversionedId:"next-steps/parallel-workloads",id:"next-steps/parallel-workloads",title:"Parallel Workloads",description:"Bacalhau can run workloads in parallel by splitting the input data volumes and running shards of the workload on different nodes.",source:"@site/docs/next-steps/parallel-workloads.md",sourceDirName:"next-steps",slug:"/next-steps/parallel-workloads",permalink:"/next-steps/parallel-workloads",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/next-steps/parallel-workloads.md",tags:[],version:"current",lastUpdatedAt:1679135267,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Sharding",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Specifying Hardware Requirements",permalink:"/getting-started/resources"},next:{title:"GPU Workloads",permalink:"/next-steps/gpu"}},p={},s=[{value:"Glob Pattern",id:"glob-pattern",level:2},{value:"Base Path",id:"base-path",level:2},{value:"Batch Size",id:"batch-size",level:2},{value:"Putting it together",id:"putting-it-together",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parallel-workloads"},"Parallel Workloads"),(0,l.kt)("p",null,"Bacalhau can run workloads in parallel by splitting the input data volumes and running ",(0,l.kt)("inlineCode",{parentName:"p"},"shards")," of the workload on different nodes."),(0,l.kt)("p",null,"This works by using a ",(0,l.kt)("strong",{parentName:"p"},"glob pattern")," to slice the input data volumes into atoms, then grouping them using a ",(0,l.kt)("strong",{parentName:"p"},"batch size")," into ",(0,l.kt)("inlineCode",{parentName:"p"},"shards"),"."),(0,l.kt)("p",null,"Each shard runs on a different computer, and is executed in parallel. Once all of the shards have completed, the results are merged and the final result is combined from all the shards."),(0,l.kt)("h2",{id:"glob-pattern"},"Glob Pattern"),(0,l.kt)("p",null,"First, you'll need to decide how to split the input data using a glob pattern."),(0,l.kt)("p",null,"For example, if you have a folder with thousands of images all at the top layer as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"image00001.jpg"),(0,l.kt)("li",{parentName:"ul"},"image00002.jpg"),(0,l.kt)("li",{parentName:"ul"},"..."),(0,l.kt)("li",{parentName:"ul"},"image10000.jpg")),(0,l.kt)("p",null,"Then - our glob pattern could be ",(0,l.kt)("inlineCode",{parentName:"p"},"image*.jpg")," which would match 10,000 images."),(0,l.kt)("p",null,"We might have folders at the top level:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"folder1/"),(0,l.kt)("li",{parentName:"ul"},"folder2/"),(0,l.kt)("li",{parentName:"ul"},"..."),(0,l.kt)("li",{parentName:"ul"},"folderN/")),(0,l.kt)("p",null,"For this, our glob pattern could be ",(0,l.kt)("inlineCode",{parentName:"p"},"folder*"),"."),(0,l.kt)("h2",{id:"base-path"},"Base Path"),(0,l.kt)("p",null,"The base path is the common path that the glob pattern will be applied to, and can be useful if you combine multiple input volumes into one job."),(0,l.kt)("p",null,"For example, if we have 10 input volumes each containing a sequence of images as above, then we can mount them all under a single path as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/input_images/volume1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"image00001.jpg"),(0,l.kt)("li",{parentName:"ul"},"image00002.jpg"))),(0,l.kt)("li",{parentName:"ul"},"/input_images/volumeX",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"image02001.jpg"),(0,l.kt)("li",{parentName:"ul"},"image02002.jpg"))),(0,l.kt)("li",{parentName:"ul"},"/input_images/volume10",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"image04701.jpg"),(0,l.kt)("li",{parentName:"ul"},"image04702.jpg")))),(0,l.kt)("p",null,"We can then use a base path of ",(0,l.kt)("inlineCode",{parentName:"p"},"/input_images")," and a glob pattern of ",(0,l.kt)("inlineCode",{parentName:"p"},"/volume*/image*.jpg"),", which would result in all images in all mounted volumes becoming atoms in our shards."),(0,l.kt)("h2",{id:"batch-size"},"Batch Size"),(0,l.kt)("p",null,"Once we've have split our into data into atoms based on the glob pattern, we will then combine those atoms into shards using the ",(0,l.kt)("inlineCode",{parentName:"p"},"batch size"),"."),(0,l.kt)("p",null,"In our example of a folder with 10,000 images, we might want to set our batch size to 1000, resulting in 10 shards."),(0,l.kt)("p",null,"If our workload was image magic, each of the 10 shards would be operating on a different set of input images and would be executed in parallel."),(0,l.kt)("h2",{id:"putting-it-together"},"Putting it together"),(0,l.kt)("p",null,"The following is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# this CID points at the folder with 10,000 images all named image00001.jpg\nexport IMAGE_FOLDER_CID=xxx\nbacalhau docker run \\\n  # mount the input folder\n  -v $IMAGE_FOLDER_CID:/input_images \\\n  # name the output folder\n  -o results:/output_images \\\n  # the glob pattern to split the input data into shards\n  --sharding-glob-pattern image*.jpg \\\n  # the base path to start the glob pattern from\n  --sharding-base-path /input_images/ \\\n  # group the atoms into groups of this size\n  --sharding-batch-size 1000 \\\n  # this is the image magic workload that will process all images in a folder\n  dpokidov/imagemagick \\\n    -resize 100x100 -quality 100 \\\n    -path /output_images \\\n    /input_images/*.jpg\n")))}m.isMDXComponent=!0}}]);