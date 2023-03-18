"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6627],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,k=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Sparkov-Data-Generation",sidebar_position:2},i="Generate Synthetic Data using Sparkov Data Generation technique",l={unversionedId:"examples/workload-onboarding/Sparkov-Data-Generation/index",id:"examples/workload-onboarding/Sparkov-Data-Generation/index",title:"Generate Synthetic Data using Sparkov Data Generation technique",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/Sparkov-Data-Generation/index.md",sourceDirName:"examples/workload-onboarding/Sparkov-Data-Generation",slug:"/examples/workload-onboarding/Sparkov-Data-Generation/",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Sparkov-Data-Generation/index.md",tags:[],version:"current",lastUpdatedAt:1679157372,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Sparkov-Data-Generation",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Python - Hello World",permalink:"/examples/workload-onboarding/trivial-python/"},next:{title:"Python - Pandas",permalink:"/examples/workload-onboarding/python-pandas/"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequiste",id:"prerequiste",level:2},{value:"Running Sparkov Locally\u200b",id:"running-sparkov-locally",level:2},{value:"Running the script",id:"running-the-script",level:2},{value:"Containerize Script using Docker",id:"containerize-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],s={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"generate-synthetic-data-using-sparkov-data-generation-technique"},"Generate Synthetic Data using Sparkov Data Generation technique"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Sparkov-Data-Generation/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Sparkov-Data-Generation/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A synthetic dataset is generated by algorithms or simulations which has similar characteristics of real world data. Collecting real world data especially the data which contains sensitive user data like credit card information is not possible due to security and privacy concerns. If a data scientist needs to train  a model to detect credit fraud they can use synthetically generated data instead of using the real data without compromising privacy of users."),(0,r.kt)("p",null,"The advantage of using bacalhau is that you can generate terabytes of synthetic data without having to install any dependencies or store the data locally. "),(0,r.kt)("p",null,"In this example we will generate synthetic credit card transaction data using the Sparkov program and store the results to IPFS"),(0,r.kt)("h2",{id:"prerequiste"},"Prerequiste"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-sparkov-locally"},"Running Sparkov Locally\u200b"),(0,r.kt)("p",null,"To run Sparkov locally, you'll need to clone the repo and install dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/js-ts/Sparkov_Data_Generation/\npip3 install -r Sparkov_Data_Generation/requirements.txt\n")),(0,r.kt)("p",null,"Go to the Sparkov_Data_Generation directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%cd Sparkov_Data_Generation\n")),(0,r.kt)("p",null,"Creating a temporary directory to store the outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir ../outputs\n")),(0,r.kt)("h2",{id:"running-the-script"},"Running the script"),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\npython3 datagen.py -n 1000 -o ../outputs "01-01-2022" "10-01-2022"\n')),(0,r.kt)("p",null,"Below are some of the parameters you need before running the script"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-n"),":  Number of customers to generate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-o"),": path to store the outputs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Start date"),': "01-01-2022" ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"End date"),': "10-01-2022"'))),(0,r.kt)("p",null,"To see the full list of options, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython datagen.py -h\n")),(0,r.kt)("h2",{id:"containerize-script-using-docker"},"Containerize Script using Docker"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this entirely and directly go to running on Bacalhau.")),(0,r.kt)("p",null,"If you want any additional dependencies to be installed along with DuckDB, you need to build your own container."),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your DuckDB docker container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt update && apt install git\n\nRUN git clone https://github.com/js-ts/Sparkov_Data_Generation/\n\nWORKDIR /Sparkov_Data_Generation/\n\nRUN pip3 install -r requirements.txt\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t jsacex/sparkov-data-generation\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push jsacex/sparkov-data-generation\n")),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"Now we're ready to run a Bacalhau job. This code runs a job, downloads the results and prints the stdout."),(0,r.kt)("p",null,"Copy and paste the following code to your terminal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\\njsacex/sparkov-data-generation \\\n--  python3 datagen.py -n 1000 -o ../outputs "01-01-2022" "10-01-2022"\n')),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsacex/sparkov-data-generation"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'-o ../outputs "01-01-2022" "10-01-2022'),":  path to store the outputs, start date and end-date.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"python3 datagen.py -n 1000"),": execute Sparktov"))),(0,r.kt)("p",null,"When a job is sumbitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/combined_results/outputs # list the contents of the current directory \n")))}d.isMDXComponent=!0}}]);