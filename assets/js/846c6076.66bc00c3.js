"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Video Processing",sidebar_position:6,description:"Parallel Video Resizing via File Sharding"},i="Video Processing",l={unversionedId:"examples/data-engineering/simple-parallel-workloads/index",id:"examples/data-engineering/simple-parallel-workloads/index",title:"Video Processing",description:"Parallel Video Resizing via File Sharding",source:"@site/docs/examples/data-engineering/simple-parallel-workloads/index.md",sourceDirName:"examples/data-engineering/simple-parallel-workloads",slug:"/examples/data-engineering/simple-parallel-workloads/",permalink:"/examples/data-engineering/simple-parallel-workloads/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/simple-parallel-workloads/index.md",tags:[],version:"current",lastUpdatedAt:1685606774,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"Video Processing",sidebar_position:6,description:"Parallel Video Resizing via File Sharding"},sidebar:"documentationSidebar",previous:{title:"Oceanography - Data Conversion",permalink:"/examples/data-engineering/oceanography-conversion/"},next:{title:"Model Inference",permalink:"/examples/model-inference/"}},s={},u=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Display the videos",id:"display-the-videos",level:3},{value:"Need Support?",id:"need-support",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"video-processing"},"Video Processing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"Many data engineering workloads consist of embarrassingly parallel workloads where you want to run a simple execution on a large number of files. In this example tutorial, we will run a simple video filter on a large number of video files."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running video files with Bacalhau"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,r.kt)("p",null,"To submit a workload to Bacalhau, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  --id-only \\\n  -i ipfs://Qmd9CBYpdgCLuCKRtKRRggu24H72ZUrGax5A9EYvrbC72j:/inputs \\\n  linuxserver/ffmpeg -- \\\n  bash -c \'find /inputs -iname "*.mp4" -printf "%f\\n" | xargs -I{} ffmpeg -y -i /inputs/{} -vf "scale=-1:72,setsar=1:1" /outputs/scaled_{}\'\n\n')),(0,r.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows one to pass input data volume with a ",(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,r.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,r.kt)("p",null,"We created a 72px wide video thumbnails for all the videos in the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," directory. The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," directory will contain the thumbnails for each video. We will shard by 1 video per job, and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"linuxserver/ffmpeg")," container to resize the videos."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/v0.2.3/cmd/bacalhau/docker_run.go#L64"},"Bacalhau overwrites the default entrypoint")," so we must run the full command after the ",(0,r.kt)("inlineCode",{parentName:"p"},"--")," argument. In this line you will list all of the mp4 files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," directory and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"ffmpeg")," against each instance.")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("h3",{id:"display-the-videos"},"Display the videos"),(0,r.kt)("p",null,"To view the videos, we will use ",(0,r.kt)("strong",{parentName:"p"},"glob")," to return all file paths that match a specific pattern. "),(0,r.kt)("video",{src:a(4388).Z,controls:!0},"Your browser does not support the ",(0,r.kt)("code",null,"video")," element."),(0,r.kt)("video",{src:a(2601).Z,controls:!0},"Your browser does not support the ",(0,r.kt)("code",null,"video")," element."),(0,r.kt)("video",{src:a(934).Z,controls:!0},"Your browser does not support the ",(0,r.kt)("code",null,"video")," element."),(0,r.kt)("h2",{id:"need-support"},"Need Support?"),(0,r.kt)("p",null,"For questions, feedback, please reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}c.isMDXComponent=!0},4388:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/scaled_Bird_flying_over_the_lake-f27930f63d99eb1d79eb6b9bfb26296d.mp4"},2601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/scaled_Calm_waves_on_a_rocky_sea_gulf-17102357190cb2a7f71591fc82f9b687.mp4"},934:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/medias/scaled_Prominent_Late_Gothic_styled_architecture-44a4f8a1d7fd0eb1219ce2c3e0659799.mp4"}}]);