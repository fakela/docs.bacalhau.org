"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6338:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"EasyOCR",sidebar_position:8},i="EasyOCR (Optical Character Recognition) on bacalhau",l={unversionedId:"examples/model-inference/EasyOCR/index",id:"examples/model-inference/EasyOCR/index",title:"EasyOCR (Optical Character Recognition) on bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/model-inference/EasyOCR/index.md",sourceDirName:"examples/model-inference/EasyOCR",slug:"/examples/model-inference/EasyOCR/",permalink:"/examples/model-inference/EasyOCR/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-inference/EasyOCR/index.md",tags:[],version:"current",lastUpdatedAt:1684409641,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:8,frontMatter:{sidebar_label:"EasyOCR",sidebar_position:8},sidebar:"documentationSidebar",previous:{title:"StyleGAN3",permalink:"/examples/model-inference/StyleGAN3/"},next:{title:"Speech Recognition using Whisper",permalink:"/examples/model-inference/Openai-Whisper/"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"TD:LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running Easy OCR Locally\u200b",id:"running-easy-ocr-locally",level:2},{value:"Containerize your Script using Docker",id:"containerize-your-script-using-docker",level:2},{value:"Build the Container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job to Generate Easy OCR output",id:"running-a-bacalhau-job-to-generate-easy-ocr-output",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"easyocr-optical-character-recognition-on-bacalhau"},"EasyOCR (Optical Character Recognition) on bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"In this example tutorial, we use Bacalhau and Easy OCR to digitize paper records or for recognizing characters or extract text data from images stored on IPFS/Filecoin or on the web. ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaided.ai/"},"EasyOCR")," is a ready-to-use OCR with 80+ supported languages and all popular writing scripts including Latin, Chinese, Arabic, Devanagari, Cyrillic and etc. With easy OCR you use the pretrained models or use your own fine tuned model."),(0,r.kt)("h2",{id:"tdlr"},"TD:LR"),(0,r.kt)("p",null,"Using Bacalhau and Easy OCR to extract text data from images stored on the web."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-easy-ocr-locally"},"Running Easy OCR Locally\u200b"),(0,r.kt)("p",null,"Install the required dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install easyocr\n")),(0,r.kt)("p",null,"Load the different example images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nnpx degit JaidedAI/EasyOCR/examples -f\n")),(0,r.kt)("p",null,"List all the images"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -l\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"total 3508\n-rw-r--r-- 1 root root   59898 Jun 16 22:36 chinese.jpg\n-rw-r--r-- 1 root root   97910 Jun 16 22:36 easyocr_framework.jpeg\n-rw-r--r-- 1 root root 1740957 Jun 16 22:36 english.png\n-rw-r--r-- 1 root root  487995 Jun 16 22:36 example2.png\n-rw-r--r-- 1 root root  127454 Jun 16 22:36 example3.png\n-rw-r--r-- 1 root root  488641 Jun 16 22:36 example.png\n-rw-r--r-- 1 root root  168376 Jun 16 22:36 french.jpg\n-rw-r--r-- 1 root root   42159 Jun 16 22:36 japanese.jpg\n-rw-r--r-- 1 root root  225531 Jun 16 22:36 korean.png\ndrwxr-xr-x 1 root root    4096 Jun 15 13:37 sample_data\n-rw-r--r-- 1 root root   82229 Jun 16 22:36 thai.jpg\n-rw-r--r-- 1 root root   34706 Jun 16 22:36 width_ths.png\n")),(0,r.kt)("p",null,"To displaying an image from the list"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# show an image\nimport PIL\nfrom PIL import ImageDraw\nim = PIL.Image.open("thai.jpg")\n')),(0,r.kt)("p",null,"Next, we create a reader to do OCR to get coordinates which represent a rectangle containing text and the text itself "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# If you change to GPU instance, it will be faster. But CPU is enough.\n# (by MENU > Runtime > Change runtime type > GPU, then redo from beginning )\nimport easyocr\nreader = easyocr.Reader(['th','en'])\n# Doing OCR. Get bounding boxes.\nbounds = reader.readtext('thai.jpg')\nbounds\n")),(0,r.kt)("h2",{id:"containerize-your-script-using-docker"},"Containerize your Script using Docker"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this step and go straight to running a Bacalhau job")),(0,r.kt)("p",null,"We will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile")," that is already created in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JaidedAI/EasyOCR"},"Easy OCR repo"),". Use the command below to clone the repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/JaidedAI/EasyOCR\ncd EasyOCR\n")),(0,r.kt)("h3",{id:"build-the-container"},"Build the Container"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command builds Docker images from a Dockerfile. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t hub-user/repo-name:tag .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("h2",{id:"running-a-bacalhau-job-to-generate-easy-ocr-output"},"Running a Bacalhau Job to Generate Easy OCR output"),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i ipfs://bafybeibvcllzpfviggluobcfassm3vy4x2a4yanfxtmn4ir7olyzfrgq64:/root/.EasyOCR/model/zh_sim_g2.pth  \\\n-i https://raw.githubusercontent.com/JaidedAI/EasyOCR/ae773d693c3f355aac2e58f0d8142c600172f016/examples/chinese.jpg \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--gpu 1  \\\n--id-only \\\n--wait \\\njsacex/easyocr \\\n--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True\n\n")),(0,r.kt)("p",null,"Since the model and the image aren't present in the container we will mount the image from an URL and the model from IPFS ou can find models to download from ",(0,r.kt)("a",{parentName:"p",href:"https://www.jaided.ai/easyocr/modelhub/"},"here"),". You can choose the model you want to use in this case we will be using the zh_sim_g2 model"),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://bafybeibvc......"),": Mounting the model from IPFS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i https://raw.githubusercontent.com.........")," Mounting the Input Image from a URL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--gpu 1"),": Specifying the no of GPUs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsacex/easyocr"),": Name of the Docker image"))),(0,r.kt)("p",null,"Breaking up the easyocr command"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"--  easyocr -l ch_sim  en -f ./inputs/chinese.jpg --detail=1 --gpu=True")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-l"),": the name of the model which is ch_sim")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-f"),": path to the input Image or directory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--detail=1"),":  level of detail")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--gpu=True"),": we set this flag to true since we are running inference on a GPU, if you run this on a CPU you set this to false "))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/ # list the contents of the current directory \ncat results/stdout # displays the contents of the current directory \n")))}d.isMDXComponent=!0}}]);