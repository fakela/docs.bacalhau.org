"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[125],{6699:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var o=a(7462),r=a(3366),n=(a(7294),a(3905)),i=(a(2004),["components"]),l={sidebar_label:"Onboard Your Workload",sidebar_position:2},u="Onboarding Your Workloads",d={unversionedId:"getting-started/workload-onboarding",id:"getting-started/workload-onboarding",title:"Onboarding Your Workloads",description:"Steps to onboard your workload",source:"@site/docs/getting-started/workload-onboarding.md",sourceDirName:"getting-started",slug:"/getting-started/workload-onboarding",permalink:"/getting-started/workload-onboarding",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/workload-onboarding.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Onboard Your Workload",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Installation",permalink:"/getting-started/installation"},next:{title:"GPU Support",permalink:"/getting-started/gpu"}},s=[{value:"Steps to onboard your workload",id:"steps-to-onboard-your-workload",children:[{value:"1. Modify your workload scripts",id:"1-modify-your-workload-scripts",children:[{value:"Inputs",id:"inputs",children:[],level:4},{value:"Outputs",id:"outputs",children:[],level:4}],level:3},{value:"2. Build the docker container",id:"2-build-the-docker-container",children:[],level:3},{value:"3. Test the docker image locally",id:"3-test-the-docker-image-locally",children:[],level:3},{value:"4. Migrate input data for the workload to IPFS",id:"4-migrate-input-data-for-the-workload-to-ipfs",children:[],level:3},{value:"5. Run the workload on Bacalhau:",id:"5-run-the-workload-on-bacalhau",children:[],level:3}],level:2},{value:"Example Onboarded Workload",id:"example-onboarded-workload",children:[],level:2},{value:"Support",id:"support",children:[],level:2}],c={toc:s};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"onboarding-your-workloads"},"Onboarding Your Workloads"),(0,n.kt)("h2",{id:"steps-to-onboard-your-workload"},"Steps to onboard your workload"),(0,n.kt)("h3",{id:"1-modify-your-workload-scripts"},"1. Modify your workload scripts"),(0,n.kt)("h4",{id:"inputs"},"Inputs"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: all ingres/egres networking is disabled from the Bacalhau cluster, which will impact your workload if it pulls input data directly via HTTP.")),(0,n.kt)("p",null,"Option 1) Mount input data folder via Docker mount & IPFS\nUse docker mounts for inputs if your data needs to be consumed from IPFS and your workload allows directory paths as inputs. Note: some python functions such as ",(0,n.kt)("inlineCode",{parentName:"p"},"open()")," will fail when given a directory path."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Modify your workload (scripts) so that any input files are read from a ",(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/about-bacalhau/architecture#input--output-volumes"},"local directory")," mounted to the Docker container."),(0,n.kt)("li",{parentName:"ul"},'Any input files in your script, must be modified to read from files in an "input" folder in your project that can be mounted via IPFS.')),(0,n.kt)("p",null,"Option 2) Mount external HTTP/S URL as a path within Docker container. Per the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/cli-flags/all-flags#run"},"Run command CLI flags documentation"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"--input-urls strings")," flag can be used to mount data from an external URL (HTTP/S) to a specified PATH within the Docker container."),(0,n.kt)("p",null,"Option 3) Embed input data in the Docker image\nYou can choose to embed your workload's input data within the docker image. As a result, your ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command will not require an input volume mount from IPFS."),(0,n.kt)("h4",{id:"outputs"},"Outputs"),(0,n.kt)("p",null,'Modify your workload so that any output files are written to an "output/" folder. This will allow for the clear/specific mounting of the output folder when the "bacalhau docker run" command is executed. '),(0,n.kt)("p",null,"Please see this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wesfloyd/bacalhau_socat_test/blob/9e51e48d6f9efa4adc8125fe97004c204e387fe5/main.py#L31"},"modified script example here"),"."),(0,n.kt)("h3",{id:"2-build-the-docker-container"},"2. Build the docker container"),(0,n.kt)("p",null,"Build a an ",(0,n.kt)("strong",{parentName:"p"},"x86_64 / amd64")," based docker image for your workload (",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/language/python/build-images/"},"example here"),") and push the image to a ",(0,n.kt)("a",{parentName:"p",href:"https://codefresh.io/docs/docs/integrations/docker-registries/"},"public docker registry"),". "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: do not build your docker image on a arm64 (Apple Silicon) Mac, the Bacalhau testnet is running x86_64 servers, so the docker images must be built on the same CPU architecture. You may execute bacalhau jobs from the CLI on a Mac, but please avoid building your docker images there.")),(0,n.kt)("h3",{id:"3-test-the-docker-image-locally"},"3. Test the docker image locally"),(0,n.kt)("p",null,"Executing the following style of command to test your docker image locally:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"docker run -v /host-mount-location:/container-input-location/  \\\n -o output-folder-name:/container-output-location/\nIMAGENAME\n")),(0,n.kt)("h3",{id:"4-migrate-input-data-for-the-workload-to-ipfs"},"4. Migrate input data for the workload to IPFS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Leverage an IPFS \u201cpinning service\u201d such as:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://web3.storage/account/"},"Web3.Storage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://estuary.tech/sign-in"},"Estuary")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.ipfs.io/how-to/pin-files/"},"Manually pin your files to IPFS")," with your own IPFS server."))),(0,n.kt)("li",{parentName:"ul"},"If uploading a folder of input files, consider ",(0,n.kt)("a",{parentName:"li",href:"https://web3.storage/docs/#create-the-upload-script"},"uploading with this script"),". However, please note that any content uploaded to Web3.storage is ",(0,n.kt)("a",{parentName:"li",href:"https://web3.storage/docs/how-tos/store/#directory-wrapping"},"also wrapped in a parent directory"),". You will need to take care to reference the inner directory CID in your bacalhau command.")),(0,n.kt)("h3",{id:"5-run-the-workload-on-bacalhau"},"5. Run the workload on Bacalhau:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Bacalhau does ",(0,n.kt)("strong",{parentName:"p"},"not")," support subpaths within a CID. You must reference the CID of an atomic folder in your ",(0,n.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"bacalhau docker run -v CID:/container-input-location/ \\\n    -o output-folder-name:/container-output-location/ IMAGENAME\n\nbacalhau list \n\nbacalhau get JOB_ID\n")),(0,n.kt)("h2",{id:"example-onboarded-workload"},"Example Onboarded Workload"),(0,n.kt)("p",null,"Here is an example of an onboarded workload leveraging the Surface Ocean CO\u2082 Atlas (SOCAT) to Bacalhau:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=t2AHD8yJhLY"},"Youtube: Bacalhau SOCAT Workload Demo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wesfloyd/bacalhau_socat_test"},"Github: bacalhau_socat_test"))),(0,n.kt)("p",null,"Here is an example of running a job live on the Bacalhau network: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wkOh05J5qgA"},"Youtube: Bacalhau Intro Video")),(0,n.kt)("h2",{id:"support"},"Support"),(0,n.kt)("p",null,"Please reach out to the ",(0,n.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack")," if you would like help pinning data to IPFS for your job or in case of any issues."))}p.isMDXComponent=!0}}]);