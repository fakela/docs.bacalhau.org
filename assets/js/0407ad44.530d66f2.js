"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2216:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"From A URL",sidebar_position:1},l="Copy Data from a URL to a Public Storage",i={unversionedId:"data-ingestion/from-url",id:"data-ingestion/from-url",title:"Copy Data from a URL to a Public Storage",description:"To upload a file from a URL we will use the bacalhau docker run command.",source:"@site/docs/data-ingestion/from-url.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/from-url",permalink:"/data-ingestion/from-url",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/from-url.md",tags:[],version:"current",lastUpdatedAt:1680711103,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"From A URL",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Specifying Hardware Requirements",permalink:"/getting-started/resources"},next:{title:"Pinning data",permalink:"/data-ingestion/pin"}},u={},s=[{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Get the CID From the Completed Job",id:"get-the-cid-from-the-completed-job",level:2},{value:"Use the CID in a New Bacalhau Job",id:"use-the-cid-in-a-new-bacalhau-job",level:3},{value:"Need Support?",id:"need-support",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copy-data-from-a-url-to-a-public-storage"},"Copy Data from a URL to a Public Storage"),(0,o.kt)("p",null,"To upload a file from a URL we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --input-urls=https://raw.githubusercontent.com/filecoin-project/bacalhau/main/README.md \\\n    ghcr.io/bacalhau-project/examples/upload:v1\n")),(0,o.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,o.kt)("p",null,"Let's look closely at the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"ghcr.io/bacalhau-project/examples/upload:v1"),": the name and the tag of the docker image we are using")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"}," --input-urls=https://raw.githubusercontent.com/filecoin-project/bacalhau/main/README.md \\"),": URL path of the input data volumes downloaded from a URL source. "))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command takes advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--input-urls")," parameter. This will download a file from a public URL and place it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," directory of the container (by default). Then we will use a helper container to move that data to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs")," directory so that it is published to your public storage via Estuary. In our case we are using Filecoin as our public storage."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can find out more about the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/tree/main/tools/upload"},"helper container in the examples repository"),".")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list $JOB_ID --output=json | jq '.[0].Status.JobState.Nodes[] | .Shards.\"0\" | select(.RunOutput)'\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe  $JOB_ID \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir ./results\nbacalhau get --output-dir ./results $JOB_ID \n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"Each job creates 3 subfolders: the ",(0,o.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,o.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,o.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nhead -n 15 ./results/combined_results/stdout\n")),(0,o.kt)("h2",{id:"get-the-cid-from-the-completed-job"},"Get the CID From the Completed Job"),(0,o.kt)("p",null,"To get the CID from a completed jon output, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out cid\nbacalhau list $JOB_ID --output=json | jq -r '.[0].Status.JobState.Nodes[] | .Shards.\"0\".PublishedResults | select(.CID) | .CID'\n")),(0,o.kt)("p",null,"The job will upload the CID to your public storage via Estuary. We will store the ",(0,o.kt)("em",{parentName:"p"},"cid")," that in an environment variable so that we can reuse it later on."),(0,o.kt)("h3",{id:"use-the-cid-in-a-new-bacalhau-job"},"Use the CID in a New Bacalhau Job"),(0,o.kt)("p",null,"Now that we have the CID, we can use it in a new job. This time we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--inputs")," parameter to tell Bacalhau to use the CID we just uploaded."),(0,o.kt)("p",null,'In this case, our "job" is just to list the contents of the ',(0,o.kt)("inlineCode",{parentName:"p"},"/inputs"),' directory. You can see that the "input" data is located under ',(0,o.kt)("inlineCode",{parentName:"p"},"/inputs/outputs/README.md"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --wait \\\n    --inputs=$CID \\\n    ubuntu -- \\\n    bash -c "set -x; ls -l /inputs; ls -l /inputs/outputs; cat /inputs/outputs/README.md"\n')),(0,o.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}d.isMDXComponent=!0}}]);