"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[88],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return a?o.createElement(m,i(i({ref:t},p),{},{components:a})):o.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_label:"Onboard Docker Workload",sidebar_position:3,description:"How to use docker containers with Bacalhau"},i="Onboarding Your Docker Workloads",l={unversionedId:"getting-started/docker-workload-onboarding",id:"getting-started/docker-workload-onboarding",title:"Onboarding Your Docker Workloads",description:"How to use docker containers with Bacalhau",source:"@site/docs/getting-started/docker-workload-onboarding.md",sourceDirName:"getting-started",slug:"/getting-started/docker-workload-onboarding",permalink:"/getting-started/docker-workload-onboarding",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/docker-workload-onboarding.md",tags:[],version:"current",lastUpdatedAt:1685606774,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Onboard Docker Workload",sidebar_position:3,description:"How to use docker containers with Bacalhau"},sidebar:"documentationSidebar",previous:{title:"Installation",permalink:"/getting-started/installation"},next:{title:"Onboard WebAssembly Workload",permalink:"/getting-started/wasm-workload-onboarding"}},u={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Runtime Restrictions",id:"runtime-restrictions",level:2},{value:"Onboarding Your Workload",id:"onboarding-your-workload",level:2},{value:"Step 1 - Read Data From Your Directory",id:"step-1---read-data-from-your-directory",level:3},{value:"Step 2 - Write Data to the Your Directory",id:"step-2---write-data-to-the-your-directory",level:3},{value:"Step 3 - Build and Push Your Image To a Registry",id:"step-3---build-and-push-your-image-to-a-registry",level:3},{value:"Step 4 - Test Your Container",id:"step-4---test-your-container",level:3},{value:"Step 5 - Upload the Input Data",id:"step-5---upload-the-input-data",level:3},{value:"Step 6 - Run the Workload on Bacalhau",id:"step-6---run-the-workload-on-bacalhau",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Support",id:"support",level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onboarding-your-docker-workloads"},"Onboarding Your Docker Workloads"),(0,n.kt)("p",null,"Bacalhau executes jobs by running them within containers. This sections describes how to migrate a workload based on a Docker container into a format that will work with the Bacalhau client. "),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can check out this example tutorial on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/workload-onboarding/custom-containers/"},"how to work with custom containers in Bacalhau")," to see how we used all these steps together. ")),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Here are some few things to note before getting started:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You must publish the container to a public container registry that is accessible from the Bacalhau network"),(0,n.kt)("li",{parentName:"ul"},"Bacalhau supports only ",(0,n.kt)("inlineCode",{parentName:"li"},"amd64")," images. Does not support ",(0,n.kt)("inlineCode",{parentName:"li"},"arm64")," images"),(0,n.kt)("li",{parentName:"ul"},"Containers must have an ",(0,n.kt)("inlineCode",{parentName:"li"},"x86_64")," CPU architecture"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"--input ipfs://...")," flag does not support CID subpaths only ",(0,n.kt)("strong",{parentName:"li"},"directories")," "),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"--input https://...")," flag does not support URL directories only ",(0,n.kt)("strong",{parentName:"li"},"single files")," only"),(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"--input s3://...")," flag does support S3 keys and prefixes. e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"s3://bucket/logs-2023-04*")," for all April 2023 logs ")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can check to see a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/orgs/bacalhau-project/packages?repo_name=examples"},"list of example public containers")," used by the Bacalhau team"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Note"),": Only about a third of examples have their containers here. The rest are under random docker hub registries (mostly Vedants).")),(0,n.kt)("h2",{id:"runtime-restrictions"},"Runtime Restrictions"),(0,n.kt)("p",null,"To help provide a safe, secure network for all users, we add the following runtime restrictions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"All ingress/egress networking is disabled. You won't be able to pull ",(0,n.kt)("inlineCode",{parentName:"li"},"data/code/weights/")," etc from an external source"),(0,n.kt)("li",{parentName:"ul"},"Data passing is implemented with Docker volumes, using ",(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/about-bacalhau/architecture#input--output-volumes"},"Bacalhau's input/output volumes"))),(0,n.kt)("h2",{id:"onboarding-your-workload"},"Onboarding Your Workload"),(0,n.kt)("h3",{id:"step-1---read-data-from-your-directory"},"Step 1 - Read Data From Your Directory"),(0,n.kt)("p",null,"If you need to pass data into your container you will do this through a Docker volume. You'll need to modify your code to read from a local directory."),(0,n.kt)("p",null,"We make the assumption that you are reading from a directory called ",(0,n.kt)("inlineCode",{parentName:"p"},"/inputs"),", which is set as the default."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can specify which directory the data is written to with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#run-python"},(0,n.kt)("inlineCode",{parentName:"a"},"--input"))," CLI flag.")),(0,n.kt)("h3",{id:"step-2---write-data-to-the-your-directory"},"Step 2 - Write Data to the Your Directory"),(0,n.kt)("p",null,"If you need to return data from your container you will do this through a Docker volume. You'll need to modify your code to write to a local directory."),(0,n.kt)("p",null,"We make the assumption that you are writing to a directory called ",(0,n.kt)("inlineCode",{parentName:"p"},"/outputs"),", which is set as the default."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can specify which directory the data is written to with the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#run-python"},(0,n.kt)("inlineCode",{parentName:"a"},"--output-volumes"))," CLI flag.")),(0,n.kt)("h3",{id:"step-3---build-and-push-your-image-to-a-registry"},"Step 3 - Build and Push Your Image To a Registry"),(0,n.kt)("p",null,"If you haven't already, you'll need to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/build/"},"build your image")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/push/"},"push it")," to a publicly accessible container registry."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"All Bacalhau nodes are of an ",(0,n.kt)("inlineCode",{parentName:"p"},"x86_64")," architecture, therefore containers must be built for ",(0,n.kt)("a",{parentName:"p",href:"#what-containers-to-use"},(0,n.kt)("inlineCode",{parentName:"a"},"x86_64")," systems"),".")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ export IMAGE=myuser/myimage:latest\n$ docker build -t ${IMAGE} .\n$ docker image push ${IMAGE}\n")),(0,n.kt)("h3",{id:"step-4---test-your-container"},"Step 4 - Test Your Container"),(0,n.kt)("p",null,"To test your docker image locally, you'll need to execute the following command, changing the environment variables as necessary:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ export LOCAL_INPUT_DIR=$PWD\n$ export LOCAL_OUTPUT_DIR=$PWD\n$ export CMD=(sh -c 'ls /inputs; echo do something useful > /outputs/stdout')\n$ docker run --rm \\\n  -v ${LOCAL_INPUT_DIR}:/inputs  \\\n  -v ${LOCAL_OUTPUT_DIR}:/outputs \\\n  ${IMAGE} \\\n  ${CMD}\n")),(0,n.kt)("p",null,"For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ export IMAGE=ubuntu\n$ docker run --rm \\\n  -v ${LOCAL_INPUT_DIR}:/inputs  \\\n  -v ${LOCAL_OUTPUT_DIR}:/outputs \\\n  ${IMAGE} \\\n  ${CMD}\n$ cat stdout\n")),(0,n.kt)("p",null,"This snippet results in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"...file listing...\ndo something useful\n")),(0,n.kt)("h3",{id:"step-5---upload-the-input-data"},"Step 5 - Upload the Input Data"),(0,n.kt)("p",null,"Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. You can use either of these methods to upload your data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/from-url"},"Copy data from a URL to public storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/pin"},"Pin Data to public storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/data-ingestion/s3"},"Copy Data from S3 Bucket to public storage"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can mount your data anywhere on your machine, and Bacalhau will be able to run against that data")),(0,n.kt)("h3",{id:"step-6---run-the-workload-on-bacalhau"},"Step 6 - Run the Workload on Bacalhau"),(0,n.kt)("p",null,"To run your workload, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau docker run --input ipfs://${CID} ${IMAGE} ${CMD}\n")),(0,n.kt)("p",null,"To check the status of your job, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau list \n")),(0,n.kt)("p",null,"To get more information on your job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau describe JOB_ID\n")),(0,n.kt)("p",null,"To download your job"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ bacalhau get JOB_ID\n")),(0,n.kt)("p",null,"For example, running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ job_id=$(bacalhau docker run ubuntu echo hello)\n$ bacalhau list --id-filter $job_id\n$ sleep 5\n$ bacalhau list --id-filter $job_id\n$ bacalhau get $job_id\n$ ls shards\n")),(0,n.kt)("p",null,"outputs:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED \n 10:26:00  24440f0d  Docker ubuntu echo h...  Verifying                      \n CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 10:26:00  24440f0d  Docker ubuntu echo h...  Published            /ipfs/bafybeiflj3kha... \n11:26:09.107 | INF bacalhau/get.go:67 > Fetching results of job '24440f0d-3c06-46af-9adf-cb524aa43961'...\n11:26:10.528 | INF ipfs/downloader.go:115 > Found 1 result shards, downloading to temporary folder.\n11:26:13.144 | INF ipfs/downloader.go:195 > Combining shard from output volume 'outputs' to final location: '/Users/phil/source/filecoin-project/docs.bacalhau.org'\njob-24440f0d-3c06-46af-9adf-cb524aa43961-shard-0-host-QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--input")," flag does not support CID subpaths for ",(0,n.kt)("inlineCode",{parentName:"p"},"ipfs://")," content.")),(0,n.kt)("p",null,"Alternatively, you can run your workload with a publicly accessible http(s) URL, which will download the data temporarily into your public storage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ export URL=https://download.geofabrik.de/antarctica-latest.osm.pbf\n$ bacalhau docker run --input ${URL} ${IMAGE} ${CMD}\n\n$ bacalhau list \n\n$ bacalhau get JOB_ID\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"--input")," flag does not support URL directories.")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"If you run into this compute error while running your docker image "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Creating job for submission ... done \u2705\nFinding node(s) for the job ... done \u2705\nNode accepted the job ... done \u2705\nError while executing the job.\n")),(0,n.kt)("p",null,"This can often be resolved by re-tagging your docker image"),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"If have questions or need support or guidance, please reach out to the ",(0,n.kt)("a",{parentName:"p",href:"https://bit.ly/bacalhau-project-slack/archives/C02RLM3JHUY"},"Bacalhau team via Slack"),"(#bacalhau channel)"))}c.isMDXComponent=!0}}]);