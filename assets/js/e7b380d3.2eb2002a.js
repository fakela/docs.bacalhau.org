"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6125],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},161:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={},l="Coresets On Bacalhau",s={unversionedId:"examples/molecular-dynamics/Coreset/index",id:"examples/molecular-dynamics/Coreset/index",title:"Coresets On Bacalhau",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/Coreset/index.md",sourceDirName:"examples/molecular-dynamics/Coreset",slug:"/examples/molecular-dynamics/Coreset/",permalink:"/examples/molecular-dynamics/Coreset/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/Coreset/index.md",tags:[],version:"current",lastUpdatedAt:1679157372,formattedLastUpdatedAt:"Mar 18, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running BIDS Apps on Bacalhau",permalink:"/examples/molecular-dynamics/BIDS/"},next:{title:"Running Genomics on Bacalhau",permalink:"/examples/molecular-dynamics/Genomics/"}},i={},p=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Running Locally</strong>",id:"running-locally",level:2},{value:"Running on Bacalhau",id:"running-on-bacalhau",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coresets-on-bacalhau"},"Coresets On Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/Coreset/BIDS/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=miscellaneous/Coreset/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("h2",{id:"introduction"},(0,o.kt)("strong",{parentName:"h2"},"Introduction")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2011.09384"},"Coreset "),"is a data subsetting method. Since the uncompressed datasets can get very large when compressed, it becomes much harder to train them as training time increases with the dataset size. To reduce the training time to save costs we use the coreset method the coreset method can also be applied to other datasets"),(0,o.kt)("p",null,"Coresets similar functionality as same as the whole dataset"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/AQDLMXn.png",alt:null})),(0,o.kt)("p",null,"In this case, we use the coreset method which can lead to a fast speed in solving the k-means problem among the big data with high accuracy in the meantime."),(0,o.kt)("p",null,"We construct a small coreset for arbitrary shapes of numerical data with a decent time cost. The implementation was mainly based on the coreset construction algorithm that was proposed by Braverman et al. (SODA 2021)."),(0,o.kt)("h2",{id:"running-locally"},(0,o.kt)("strong",{parentName:"h2"},"Running Locally")),(0,o.kt)("p",null,"Clone the repo which contains the code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/js-ts/Coreset\n")),(0,o.kt)("p",null,"To download the dataset you should open Street Map, which is a public repository that aims to generate and distribute accessible geographic data for the whole world. Basically, it supplies detailed position information, including the longitude and latitude of the places around the world. "),(0,o.kt)("p",null," The dataset is a osm.pbf (compressed format for .osm file), the file can be downloaded from ",(0,o.kt)("a",{parentName:"p",href:"https://download.geofabrik.de/"},"Geofabrik Download Server")," "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nwget https://download.geofabrik.de/europe/liechtenstein-latest.osm.pbf -o liechtenstein-latest.osm.pbf\n")),(0,o.kt)("p",null,"The following command is installing Linux dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nsudo apt-get -y update \\\nsudo apt-get -y install osmium-tool \\\nsudo apt update \\\nsudo apt-get -y install libpq-dev gdal-bin libgdal-dev libxml2-dev libxslt-dev\n")),(0,o.kt)("p",null,"The following command is installing Python dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip3 install -r Coreset/requirements.txt\n")),(0,o.kt)("p",null,"To run coreset locally, you need to convert from compressed pbf format to geojson format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nosmium export liechtenstein-latest.osm.pbf -o liechtenstein-latest.geojson\n")),(0,o.kt)("p",null,"The following command is to run the python script to generate the coreset:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython Coreset/python/coreset.py -f liechtenstein-latest.geojson\n")),(0,o.kt)("p",null,"Now, lets build the Docker container. Let's create a  ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," to create your Docker deployment. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," is a text document that contains the commands used to assemble the image."),(0,o.kt)("p",null,"First, create the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"."),(0,o.kt)("p",null,"Next, add your desired configuration to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". These commands specify how the image will be built, and what extra requirements will be included."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt-get -y update && apt-get -y install osmium-tool && apt update && apt-get -y install libpq-dev gdal-bin libgdal-dev libxml2-dev libxslt-dev\n\nADD Coreset Coreset\n\nADD monaco-latest.geojson .\n\nRUN cd Coreset && pip3 install -r requirements.txt\n")),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"python:3.8")," image, and we will choose the src directory in the container as our work directory, we run the same commands for installing dependencies that we used locally, but we also add files and directories which are present on our local machine, we also run a test command, in the end, to check whether the script works"),(0,o.kt)("p",null,"To Build the docker container run the docker build command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,o.kt)("p",null,"You need to replace"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<hub-user>")," with your Docker hub username. If you don\u2019t have a docker hub account ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"Follow these instructions to create docker account"),", and use the username of the account you created.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<repo-name>")," with the name of the container, you can name it anything you want")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"<tag>"),": this is not required but you can use the latest tag"))),(0,o.kt)("p",null,"After you have build the container, the next step is to test it locally and then push it Docker hub."),(0,o.kt)("p",null,"Now you can push this repository to the registry designated by its name or tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," docker push <hub-user>/<repo-name>:<tag>\n")),(0,o.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on bacalhau"),(0,o.kt)("h2",{id:"running-on-bacalhau"},"Running on Bacalhau"),(0,o.kt)("p",null,"The following command let you to run the example on Bacalhau:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n-v QmXuatKaWL24CwrBPC9PzmLW8NGjgvBVJfk6ZGCWUGZgCu:/input \\\njsace/coreset \\\n-- /bin/bash -c 'osmium export input/liechtenstein-latest.osm.pbf -o liechtenstein-latest.geojson;\npython Coreset/python/coreset.py -f input/liechtenstein-latest.geojson -o outputs'\n")),(0,o.kt)("p",null,"Backend: Docker backend here for running the job"),(0,o.kt)("p",null,"Input dataset: Upload the .osm.pbf file while you want to use as a dataset to IPFS, use this CID here "),(0,o.kt)("p",null,"we mount it to the folder inside the container so it can be used by the script"),(0,o.kt)("p",null,"Image: custom docker Image (it has osmium, python and the requirements for the script installed )"),(0,o.kt)("p",null,"The following command converts the osm.pbf dataset to geojson (the dataset is stored in the input volume folder):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"osmium export input/.osm.pbf -o liechtenstein-latest.geojson\n")),(0,o.kt)("p",null,"Let's run the script, we use flag ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," to determine the path of the output geojson file from the step above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"python Coreset/python/coreset.py -f liechtenstein-latest.geojson -o outputs\n")),(0,o.kt)("p",null,"We get the output in stdout"),(0,o.kt)("p",null,"Additional parameters: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-k"),": amount of initialized centers (default=5)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-n"),": size of coreset (default=50)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-o"),": the output folder"))),(0,o.kt)("p",null,"Let's install Bacalhau:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncurl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-v QmXuatKaWL24CwrBPC9PzmLW8NGjgvBVJfk6ZGCWUGZgCu:/input \\\njsace/coreset\n-- /bin/bash -c 'osmium export input/liechtenstein-latest.osm.pbf -o liechtenstein-latest.geojson; python Coreset/python/coreset.py -f liechtenstein-latest.geojson -o outputs'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("p",null,"Running the commands will output a UUID. This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"Where it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("p",null,"To find out more information about your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("p",null,"Since there is no error we can\u2019t see any error instead we see the state of our job to be complete, that means\nwe can download the results!\nwe create a temporary directory to save our results"),(0,o.kt)("p",null,"To download the results of your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("p",null,"After the download has finishe, you should see the following contents in results directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/\n")),(0,o.kt)("p",null,"To view the output csv file run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/combined_results/outputs/centers.csv | head -n 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/combined_results/outputs/coreset-values-liechtenstein-latest.csv | head -n 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/combined_results/outputs/coreset-weights-liechtenstein-latest.csv | head -n 10\n")),(0,o.kt)("p",null,"Sources"),(0,o.kt)("p",null,"[1][http://proceedings.mlr.press/v97/braverman19a/braverman19a.pdf]","(",(0,o.kt)("a",{parentName:"p",href:"http://proceedings.mlr.press/v97/braverman19a/braverman19a.pdf"},"http://proceedings.mlr.press/v97/braverman19a/braverman19a.pdf"),")"),(0,o.kt)("p",null,"[2][https://aaltodoc.aalto.fi/bitstream/handle/123456789/108293/master_Wu_Xiaobo_2021.pdf?sequence=2]","(",(0,o.kt)("a",{parentName:"p",href:"https://aaltodoc.aalto.fi/bitstream/handle/123456789/108293/master_Wu_Xiaobo_2021.pdf?sequence=2"},"https://aaltodoc.aalto.fi/bitstream/handle/123456789/108293/master_Wu_Xiaobo_2021.pdf?sequence=2"),")"))}d.isMDXComponent=!0}}]);