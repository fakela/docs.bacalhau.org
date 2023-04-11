"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(a),h=s,m=d["".concat(o,".").concat(h)]||d[h]||c[h]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,i=new Array(l);i[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:s,i[1]=r;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2073:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var n=a(7462),s=(a(7294),a(3905));const l={sidebar_label:"Ethereum Blockchain Analysis",sidebar_position:1},i="Ethereum Blockchain Analysis with Ethereum-ETL and Bacalhau",r={unversionedId:"examples/data-engineering/blockchain-etl/index",id:"examples/data-engineering/blockchain-etl/index",title:"Ethereum Blockchain Analysis with Ethereum-ETL and Bacalhau",description:"Open In Colab",source:"@site/docs/examples/data-engineering/blockchain-etl/index.md",sourceDirName:"examples/data-engineering/blockchain-etl",slug:"/examples/data-engineering/blockchain-etl/",permalink:"/examples/data-engineering/blockchain-etl/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/blockchain-etl/index.md",tags:[],version:"current",lastUpdatedAt:1681171643,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Ethereum Blockchain Analysis",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Data Engineering",permalink:"/examples/data-engineering/"},next:{title:"csv-to-avro-or-parquet",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/"}},o={},u=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Analysing Ethereum Data Locally",id:"analysing-ethereum-data-locally",level:2},{value:"Analysing Ethereum Data With Bacalhau",id:"analysing-ethereum-data-with-bacalhau",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Display the image",id:"display-the-image",level:3},{value:"Massive Scale Ethereum Analysis",id:"massive-scale-ethereum-analysis",level:3},{value:"Display the image",id:"display-the-image-1",level:3},{value:"Appendix 1: List Ethereum Data CIDs",id:"appendix-1-list-ethereum-data-cids",level:2},{value:"Appendix 2: Setting up an Ethereum Node",id:"appendix-2-setting-up-an-ethereum-node",level:2},{value:"Geth setup and sync",id:"geth-setup-and-sync",level:3},{value:"Extracting the Data",id:"extracting-the-data",level:3},{value:"Upload the data",id:"upload-the-data",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,s.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ethereum-blockchain-analysis-with-ethereum-etl-and-bacalhau"},"Ethereum Blockchain Analysis with Ethereum-ETL and Bacalhau"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/blockchain-etl/index.ipynb"},(0,s.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/blockchain-etl/index.ipynb"},(0,s.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,s.kt)("p",null,"Mature blockchains are difficult to analyze because of their size. Ethereum-ETL is a tool that makes it easy to extract information from an Ethereum node, but it's not easy to get working in a batch manner. It takes approximately 1 week for an Ethereum node to download the entire chain (event more in my experience) and importing and exporting data from the Ethereum node is slow."),(0,s.kt)("p",null,"For this example, we ran an Ethereum node for a week and allowed it to synchronise. We then ran ethereum-etl to extract the information and pinned it on Filecoin. This means that we can both now access the data without having to run another ethereum node."),(0,s.kt)("p",null,"But there's still a lot of data and these types of analyses typically need repeating or refining. So it makes absolute sense to use a decentralised network like Bacalhau to process the data in a scalable way."),(0,s.kt)("h2",{id:"tdlr"},"TD;LR"),(0,s.kt)("p",null,"Running Ethereum-etl tool on Bacalhau to extract Ethereum node."),(0,s.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,s.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,s.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[-1]}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/Users/phil/.zshenv:.:1: no such file or directory: /Users/phil/.cargo/env\nenv: PATH=./:/Users/phil/.pyenv/versions/3.9.7/bin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.gvm/bin:/opt/homebrew/opt/findutils/libexec/gnubin:/opt/homebrew/opt/coreutils/libexec/gnubin:/opt/homebrew/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/bin:/Users/phil/.pyenv/shims:/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Library/TeX/texbin:/usr/local/MacGPG2/bin:/Users/phil/source/bacalhau-project/examples/workload-onboarding/rust-wasm/./bin:/Users/phil/.nexustools\n")),(0,s.kt)("h2",{id:"analysing-ethereum-data-locally"},"Analysing Ethereum Data Locally"),(0,s.kt)("p",null,"First let's download one of the IPFS files and inspect it locally. You can see the full list of IPFS CIDs in the appendix."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nwget -q -O file.tar.gz https://w3s.link/ipfs/bafybeifgqjvmzbtz427bne7af5tbndmvniabaex77us6l637gqtb2iwlwq\ntar -xvf file.tar.gz\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install pandas\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Use pandas to read in transaction data and clean up the columns\nimport pandas as pd\nimport glob\n\nfile = glob.glob('output_*/transactions/start_block=*/end_block=*/transactions*.csv')[0]\nprint(\"Loading file %s\" % file)\ndf = pd.read_csv(file)\ndf['value'] = df['value'].astype('float')\ndf['from_address'] = df['from_address'].astype('string')\ndf['to_address'] = df['to_address'].astype('string')\ndf['hash'] = df['hash'].astype('string')\ndf['block_hash'] = df['block_hash'].astype('string')\ndf['block_datetime'] = pd.to_datetime(df['block_timestamp'], unit='s')\ndf.info()\n")),(0,s.kt)("p",null,"The following code inspects the daily trading volume of Ethereum for a single chunk (100,000 blocks) of data."),(0,s.kt)("p",null,"This is all good, but we can do better. We can use the Bacalhau client to download the data from IPFS and then run the analysis on the data in the cloud. This means that we can analyse the entire Ethereum blockchain without having to download it locally."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Total volume per day\ndf[['block_datetime', 'value']].groupby(pd.Grouper(key='block_datetime', freq='1D')).sum().plot()\n\n")),(0,s.kt)("h2",{id:"analysing-ethereum-data-with-bacalhau"},"Analysing Ethereum Data With Bacalhau"),(0,s.kt)("p",null,"To run jobs on the Bacalhau network you need to package your code. In this example I will package the code as a Docker image."),(0,s.kt)("p",null,"But before we do that, we need to develop the code that will perform the analysis. The code below is a simple script to parse the incoming data and produce a CSV file with the daily trading volume of Ethereum."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile main.py\nimport glob, os, sys, shutil, tempfile\nimport pandas as pd\n\ndef main(input_dir, output_dir):\n    search_path = os.path.join(input_dir, "output*", "transactions", "start_block*", "end_block*", "transactions_*.csv")\n    csv_files = glob.glob(search_path)\n    if len(csv_files) == 0:\n        print("No CSV files found in %s" % search_path)\n        sys.exit(1)\n    for transactions_file in csv_files:\n        print("Loading %s" % transactions_file)\n        df = pd.read_csv(transactions_file)\n        df[\'value\'] = df[\'value\'].astype(\'float\')\n        df[\'block_datetime\'] = pd.to_datetime(df[\'block_timestamp\'], unit=\'s\')\n        \n        print("Processing %d blocks" % (df.shape[0]))\n        results = df[[\'block_datetime\', \'value\']].groupby(pd.Grouper(key=\'block_datetime\', freq=\'1D\')).sum()\n        print("Finished processing %d days worth of records" % (results.shape[0]))\n\n        save_path = os.path.join(output_dir, os.path.basename(transactions_file))\n        os.makedirs(os.path.dirname(save_path), exist_ok=True)\n        print("Saving to %s" % (save_path))\n        results.to_csv(save_path)\n\ndef extractData(input_dir, output_dir):\n    search_path = os.path.join(input_dir, "*.tar.gz")\n    gz_files = glob.glob(search_path)\n    if len(gz_files) == 0:\n        print("No tar.gz files found in %s" % search_path)\n        sys.exit(1)\n    for f in gz_files:\n        shutil.unpack_archive(filename=f, extract_dir=output_dir)\n\nif __name__ == "__main__":\n    if len(sys.argv) != 3:\n        print(\'Must pass arguments. Format: [command] input_dir output_dir\')\n        sys.exit()\n    with tempfile.TemporaryDirectory() as tmp_dir:\n        extractData(sys.argv[1], tmp_dir)\n        main(tmp_dir, sys.argv[2])\n')),(0,s.kt)("p",null,"Next, let's make sure the file works as expected..."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython main.py . outputs/\n")),(0,s.kt)("p",null,"And finally, package the code inside a Docker image to make the process reproducible. Here I'm passing the Bacalhau default ",(0,s.kt)("inlineCode",{parentName:"p"},"/inputs")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"/outputs")," directories. The ",(0,s.kt)("inlineCode",{parentName:"p"},"/inputs")," directory is where the data will be read from and the ",(0,s.kt)("inlineCode",{parentName:"p"},"/outputs")," directory is where the results will be saved to."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM python:3.11-slim-bullseye\nWORKDIR /src\nRUN pip install pandas==1.5.1\nADD main.py .\nCMD ["python", "main.py", "/inputs", "/outputs"]\n')),(0,s.kt)("p",null,"We've already pushed the container, but for posterity, the following command pushes this container to GHCR."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/blockchain-etl:0.0.1 .\n")),(0,s.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,s.kt)("p",null,"To run our analysis on the Ethereum blockchain, we will use the ",(0,s.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --id-only \\\n    --input-volumes bafybeifgqjvmzbtz427bne7af5tbndmvniabaex77us6l637gqtb2iwlwq:/inputs/data.tar.gz \\\n    ghcr.io/bacalhau-project/examples/blockchain-etl:0.0.6\n")),(0,s.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id. We store that in an environment variable so that we can reuse it later on."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows to pass input data volume with a ",(0,s.kt)("inlineCode",{parentName:"p"},"-v CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,s.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,s.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,s.kt)("p",null,"Bacalhau also mounts a data volume to store output data. The ",(0,s.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command creates an output data volume mounted at ",(0,s.kt)("inlineCode",{parentName:"p"},"/outputs"),". This is a convenient location to store the results of your job. "),(0,s.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,s.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 14:03:17 \x1b[0m\x1b[97;40m 0955253b \x1b[0m\x1b[97;40m Docker ghcr.io/bacal... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmPnZdFNRXgVxe... \x1b[0m\n")),(0,s.kt)("p",null,"When it says ",(0,s.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,s.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,s.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf ./results && mkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Fetching results of job '0955253b-5221-4452-819f-351baac88dba'...\nResults for job '0955253b-5221-4452-819f-351baac88dba' have been written to...\n./results\n")),(0,s.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,s.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,s.kt)("p",null,"Each job creates 3 subfolders: the ",(0,s.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,s.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,s.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -lah results/combined_results/outputs\n")),(0,s.kt)("h3",{id:"display-the-image"},"Display the image"),(0,s.kt)("p",null,"To view the images, we will use ",(0,s.kt)("strong",{parentName:"p"},"glob")," to return all file paths that match a specific pattern. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nimport pandas as pd\n\n# Get CSV files list from a folder\ncsv_files = glob.glob(\"results/combined_results/outputs/*.csv\")\ndf = pd.read_csv(csv_files[0], index_col='block_datetime')\ndf.plot()\n")),(0,s.kt)("h3",{id:"massive-scale-ethereum-analysis"},"Massive Scale Ethereum Analysis"),(0,s.kt)("p",null,"Ok so that works. Let's scale this up! We can run the same analysis on the entire Ethereum blockchain (up to the point where I have uploaded the Ethereum data). To do this, we need to run the analysis on each of the chunks of data that we have stored on IPFS. We can do this by running the same job on each of the chunks."),(0,s.kt)("p",null,"See the appendix for the ",(0,s.kt)("inlineCode",{parentName:"p"},"hashes.txt")," file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\nprintf "" > job_ids.txt\nfor h in $(cat hashes.txt); do \\\n    bacalhau docker run \\\n    --id-only \\\n    --wait=false \\\n    --input-volumes=$h:/inputs/data.tar.gz \\\n    ghcr.io/bacalhau-project/examples/blockchain-etl:0.0.6 >> job_ids.txt \ndone\n')),(0,s.kt)("p",null,"Now take a look at the job id's. You can use these to check the status of the jobs and download the results. You might want to double check that the jobs ran ok by doing a ",(0,s.kt)("inlineCode",{parentName:"p"},"bacalhau list"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat job_ids.txt\n")),(0,s.kt)("p",null,"Wait until all of these jobs have completed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list -n 50\n")),(0,s.kt)("p",null,"And then download all the results and merge them into a single directory. This might take a while, so this is a good time to treat yourself to a nice Dark Mild. There's also been some issues in the past communicating with IPFS, so if you get an error, try again."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nfor id in $(cat job_ids.txt); do \\\n    rm -rf results_$id && mkdir results_$id\n    bacalhau get --output-dir results_$id $id &\ndone\nwait\n")),(0,s.kt)("h3",{id:"display-the-image-1"},"Display the image"),(0,s.kt)("p",null,"To view the images, we will use ",(0,s.kt)("strong",{parentName:"p"},"glob")," to return all file paths that match a specific pattern. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'import os, glob\nimport pandas as pd\n\n# Get CSV files list from a folder\npath = os.path.join("results_*", "combined_results", "outputs", "*.csv")\ncsv_files = glob.glob(path)\n\n# Read each CSV file into a list of DataFrames\ndf_list = (pd.read_csv(file, index_col=\'block_datetime\') for file in csv_files)\n\n# Concatenate all DataFrames\ndf_unsorted = pd.concat(df_list, ignore_index=False)\n\n# Some files will cross days, so group by day and sum the values\ndf = df_unsorted.groupby(level=0).sum()\n\n# Plot\ndf.plot(figsize=(16,9))\n')),(0,s.kt)("p",null,"That's it! There is several years of Ethereum transaction volume data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results_* output_* outputs results combined_results temp # Remove temporary results\n")),(0,s.kt)("h2",{id:"appendix-1-list-ethereum-data-cids"},"Appendix 1: List Ethereum Data CIDs"),(0,s.kt)("p",null,"The following list is a list of IPFS CID's for the Ethereum data that we used in this tutorial. You can use these CID's to download the rest of the chain if you so desire. The CIDs are ordered by block number and they increase 50,000 blocks at a time. Here's a list of ordered CIDs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile hashes.txt\nbafybeihvtzberlxrsz4lvzrzvpbanujmab3hr5okhxtbgv2zvonqos2l3i\nbafybeifb25fgxrzu45lsc47gldttomycqcsao22xa2gtk2ijbsa5muzegq\nbafybeig4wwwhs63ly6wbehwd7tydjjtnw425yvi2tlzt3aii3pfcj6hvoq\nbafybeievpb5q372q3w5fsezflij3wlpx6thdliz5xowimunoqushn3cwka\nbafybeih6te26iwf5kzzby2wqp67m7a5pmwilwzaciii3zipvhy64utikre\nbafybeicjd4545xph6rcyoc74wvzxyaz2vftapap64iqsp5ky6nz3f5yndm\nbafybeicgo3iofo3sw73wenc3nkdhi263yytjnds5cxjwvypwekbz4sk7ra\nbafybeihvep5xsvxm44lngmmeysihsopcuvcr34an4idz45ixl5slsqzy3y\nbafybeigmt2zwzrbzwb4q2kt2ihlv34ntjjwujftvabrftyccwzwdypama4\nbafybeiciwui7sw3zqkvp4d55p4woq4xgjlstrp3mzxl66ab5ih5vmeozci\nbafybeicpmotdsj2ambf666b2jkzp2gvg6tadr6acxqw2tmdlmsruuggbbu\nbafybeigefo3esovbveavllgv5wiheu5w6cnfo72jxe6vmfweco5eq5sfty\nbafybeigvajsumnfwuv7lp7yhr2sr5vrk3bmmuhhnaz53waa2jqv3kgkvsu\nbafybeih2xg2n7ytlunvqxwqlqo5l3daykuykyvhgehoa2arot6dmorstmq\nbafybeihnmq2ltuolnlthb757teihwvvw7wophoag2ihnva43afbeqdtgi4\nbafybeibb34hzu6z2xgo6nhrplt3xntpnucthqlawe3pmzgxccppbxrpudy\nbafybeigny33b4g6gf2hrqzzkfbroprqrimjl5gmb3mnsqu655pbbny6tou\nbafybeifgqjvmzbtz427bne7af5tbndmvniabaex77us6l637gqtb2iwlwq\nbafybeibryqj62l45pxjhdyvgdc44p3suhvt4xdqc5jpx474gpykxwgnw2e\nbafybeidme3fkigdjaifkjfbwn76jk3fcqdogpzebtotce6ygphlujaecla\nbafybeig7myc3eg3h2g5mk2co7ybte4qsuremflrjneer6xk3pghjwmcwbi\nbafybeic3x2r5rrd3fdpdqeqax4bszcciwepvbpjl7xdv6mkwubyqizw5te\nbafybeihxutvxg3bw7fbwohq4gvncrk3hngkisrtkp52cu7qu7tfcuvktnq\nbafybeicumr67jkyarg5lspqi2w4zqopvgii5dgdbe5vtbbq53mbyftduxy\nbafybeiecn2cdvefvdlczhz6i4afbkabf5pe5yqrcsgdvlw5smme2tw7em4\nbafybeiaxh7dhg4krgkil5wqrv5kdsc3oewwy6ym4n3545ipmzqmxaxrqf4\nbafybeiclcqfzinrmo3adr4lg7sf255faioxjfsolcdko3i4x7opx7xrqii\nbafybeicjmeul7c2dxhmaudawum4ziwfgfkvbgthgtliggfut5tsc77dx7q\nbafybeialziupik7csmhfxnhuss5vrw37kmte7rmboqovp4cpq5hj4insda\nbafybeid7ecwdrw7pb3fnkokq5adybum6s5ok3yi2lw4m3edjpuy65zm4ji\nbafybeibuxwnl5ogs4pwa32xriqhch24zbrw44rp22hrly4t6roh6rz7j4m\nbafybeicxvy47jpvv3fi5umjatem5pxabfrbkzxiho7efu6mpidjpatte54\nbafybeifynb4mpqrbsjbeqtxpbuf6y4frrtjrc4tm7cnmmui7gbjkckszrq\nbafybeidcgnbhguyfaahkoqbyy2z525d3qfzdtbjuk4e75wkdbnkcafvjei\nbafybeiefc67s6hpydnsqdgypbunroqwkij5j26sfmc7are7yxvg45uuh7i\nbafybeiefwjy3o42ovkssnm7iihbog46k5grk3gobvvkzrqvof7p6xbgowi\nbafybeihpydd3ivtza2ql5clatm5fy7ocych7t4czu46sbc6c2ykrbwk5uu\nbafybeiet7222lqfmzogur3zlxqavlnd3lt3qryw5yi5rhuiqeqg4w7c3qu\nbafybeihwomd4ygoydvj5kh24wfwk5kszmst5vz44zkl6yibjargttv7sly\nbafybeidbjt2ckr4oooio3jsfk76r3bsaza5trjvt7u36slhha5ksoc5gv4\nbafybeifyjrmopgtfmswq7b4pfscni46doy3g3z6vi5rrgpozc6duebpmuy\nbafybeidsrowz46yt62zs64q2mhirlc3rsmctmi3tluorsts53vppdqjj7e\nbafybeiggntql57bw24bw6hkp2yqd3qlyp5oxowo6q26wsshxopfdnzsxhq\nbafybeidguz36u6wakx4e5ewuhslsfsjmk5eff5q7un2vpkrcu7cg5aaqf4\nbafybeiaypwu2b45iunbqnfk2g7bku3nfqveuqp4vlmmwj7o7liyys42uai\nbafybeicaahv7xvia7xojgiecljo2ddrvryzh2af7rb3qqbg5a257da5p2y\nbafybeibgeiijr74rcliwal3e7tujybigzqr6jmtchqrcjdo75trm2ptb4e\nbafybeiba3nrd43ylnedipuq2uoowd4blghpw2z7r4agondfinladcsxlku\nbafybeif3semzitjbxg5lzwmnjmlsrvc7y5htekwqtnhmfi4wxywtj5lgoe\nbafybeiedmsig5uj7rgarsjans2ad5kcb4w4g5iurbryqn62jy5qap4qq2a\nbafybeidyz34bcd3k6nxl7jbjjgceg5eu3szbrbgusnyn7vfl7facpecsce\nbafybeigmq5gch72q3qpk4nipssh7g7msk6jpzns2d6xmpusahkt2lu5m4y\nbafybeicjzoypdmmdt6k54wzotr5xhpzwbgd3c4oqg6mj4qukgvxvdrvzye\nbafybeien55egngdpfvrsxr2jmkewdyha72ju7qaaeiydz2f5rny7drgzta\n")),(0,s.kt)("h2",{id:"appendix-2-setting-up-an-ethereum-node"},"Appendix 2: Setting up an Ethereum Node"),(0,s.kt)("p",null,"In the course of writing this example I had to setup an Ethereum node. It was a slow and painful process so I thought I would share the steps I took to make it easier for others."),(0,s.kt)("h3",{id:"geth-setup-and-sync"},"Geth setup and sync"),(0,s.kt)("p",null,"Geth supports Ubuntu by default, so use that when creating a VM. Use Ubuntu 22.04 LTS."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud compute instances create phil-ethereum-node \\\n    --project=bacalhau-development --zone=europe-west2-c \\\n    --machine-type=c2-standard-4 --tags=geth \\\n    --create-disk=auto-delete=yes,boot=yes,device-name=phil-ethereum-node,image=projects/ubuntu-os-cloud/global/images/ubuntu-2204-jammy-v20221101a,mode=rw,size=50,type=projects/bacalhau-development/zones/europe-west2-c/diskTypes/pd-balanced \\\n    --create-disk=auto-delete=yes,device-name=phil-ethereum-disk,mode=rw,name=phil-ethereum-disk,size=3000,type=projects/bacalhau-development/zones/europe-west2-c/diskTypes/pd-standard\n")),(0,s.kt)("p",null,"Mount the disk:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkfs.ext4 -m 0 -E lazy_itable_init=0,lazy_journal_init=0,discard /dev/sdb\nsudo mkdir -p /mnt/disks/ethereum\nsudo mount -o discard,defaults /dev/sdb /mnt/disks/ethereum\nsudo chmod a+w /mnt/disks/ethereum\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository -y ppa:ethereum/ethereum\nsudo apt-get update\nsudo apt-get install -y ethereum\nsudo mkdir /prysm && cd /prysm\nsudo curl https://raw.githubusercontent.com/prysmaticlabs/prysm/master/prysm.sh --output prysm.sh && sudo chmod +x prysm.sh\n")),(0,s.kt)("p",null,"Run as a new user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo useradd -d /home/ethuser -m --uid 10000 ethuser\nsudo chown -R ethuser /prysm\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'sudo tee "/etc/systemd/system/geth.service" > /dev/null <<\'EOF\'\n[Unit]\nDescription=Geth\n\n[Service]\nType=simple\nUser=ethuser\nRestart=always\nRestartSec=12\nExecStart=/bin/geth --syncmode "full" --datadir /mnt/disks/ethereum\n\n[Install]\nWantedBy=default.target\nEOF\n\nsudo tee "/etc/systemd/system/prysm.service" > /dev/null <<\'EOF\'\n[Unit]\nDescription=Prysm\n\n[Service]\nType=simple\nUser=ethuser\nRestart=always\nRestartSec=12\nExecStart=/prysm/prysm.sh beacon-chain --execution-endpoint=/mnt/disks/ethereum/geth.ipc --suggested-fee-recipient=0x7f68cb1cdE000AF82291A0D0c21E0f88FD7dB440 --checkpoint-sync-url=https://beaconstate.info\n--genesis-beacon-api-url=https://beaconstate.info --accept-terms-of-use --datadir /mnt/disks/ethereum/prysm\n\n[Install]\nWantedBy=default.target\nEOF\n\nsudo systemctl daemon-reload\nsudo systemctl enable prysm.service\nsudo systemctl enable geth.service\nsudo systemctl daemon-reload\nsudo service prysm start \nsudo service geth start \n')),(0,s.kt)("p",null,"Check they are running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"service prysm status\nservice geth status\n")),(0,s.kt)("p",null,"Watch the logs:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u prysm -f\n")),(0,s.kt)("p",null,"Prysm will need to finish synchronising before geth will start synchronising."),(0,s.kt)("p",null,"In Prysm you will see lots of log messages saying: ",(0,s.kt)("inlineCode",{parentName:"p"},"Synced new block"),", and in Geth you will see: ",(0,s.kt)("inlineCode",{parentName:"p"},"Syncing beacon headers    downloaded=11,920,384 left=4,054,753  eta=2m25.903s"),". This tells you how long it will take to sync the beacons. Once that's done, get will start synchronising the blocks."),(0,s.kt)("p",null,"Bring up the ethereum javascript console with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo geth --datadir /mnt/disks/ethereum/ attach\n")),(0,s.kt)("p",null,"Once the block sync has started, ",(0,s.kt)("inlineCode",{parentName:"p"},"eth.syncing")," will return values. Before it starts, this value will be ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Note that by default, geth will perform a fast sync, without downloading the full blocks. The ",(0,s.kt)("inlineCode",{parentName:"p"},"syncmode=flull")," flag forces geth to do a full sync. If we didn't do this, then we wouldn't be able to backup the data properly."),(0,s.kt)("h3",{id:"extracting-the-data"},"Extracting the Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# Install pip and ethereum-etl\nsudo apt-get install -y python3-pip\nsudo pip3 install ethereum-etl\ncd\nmkdir ethereum-etl\ncd ethereum-etl\n\n# Export data with one 50000-item batch in a directory. Up to this point we've processed about 3m.\n# The full chain is about 16m blocks\nfor i in $(seq 0 50000 16000000); do sudo ethereumetl export_all --partition-batch-size 50000 --start $i --end $(expr $i + 50000 - 1)  --provider-uri file:///mnt/disks/ethereum/geth.ipc -o output_$i; done\n")),(0,s.kt)("h3",{id:"upload-the-data"},"Upload the data"),(0,s.kt)("p",null,"Tar and compress the directories to make them easier to upload:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y jq # Install jq to parse the cid\ncd\ncd ethereum-etl\nfor i in $(seq 0 50000 16000000); do tar cfz output_$i.tar.gz output_$i; done\n")),(0,s.kt)("p",null,"Export your Web3.storage JWT API key as an environment variable called ",(0,s.kt)("inlineCode",{parentName:"p"},"TOKEN"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'printf "" > hashes.txt\nfor i in $(seq 0 50000 16000000); do curl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H \'accept: application/json\' -H \'Content-Type: text/plain\' -H "X-NAME: ethereum-etl-block-$i" --data-binary "@output_$i.tar.gz" >> raw.json; done\n')))}c.isMDXComponent=!0}}]);