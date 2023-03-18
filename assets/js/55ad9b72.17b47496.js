"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=i,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},400:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Pinning to Filecoin",sidebar_position:2,description:"How to pin data to IPFS using filecoin"},r="Pinning Data to IPFS with Filecoin",l={unversionedId:"examples/data-ingestion/pinning/index",id:"examples/data-ingestion/pinning/index",title:"Pinning Data to IPFS with Filecoin",description:"How to pin data to IPFS using filecoin",source:"@site/docs/examples/data-ingestion/pinning/index.md",sourceDirName:"examples/data-ingestion/pinning",slug:"/examples/data-ingestion/pinning/",permalink:"/examples/data-ingestion/pinning/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-ingestion/pinning/index.md",tags:[],version:"current",lastUpdatedAt:1679135267,formattedLastUpdatedAt:"Mar 18, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Pinning to Filecoin",sidebar_position:2,description:"How to pin data to IPFS using filecoin"},sidebar:"documentationSidebar",previous:{title:"From A URL",permalink:"/examples/data-ingestion/from-url/"},next:{title:"From S3",permalink:"/examples/data-ingestion/s3-to-ipfs/"}},s={},p=[{value:"Using a Third-Party to Pin Data",id:"using-a-third-party-to-pin-data",level:2},{value:"Web3.Storage",id:"web3storage",level:2},{value:"1. Create an Account",id:"1-create-an-account",level:3},{value:"2. Sign In and Create an API Key",id:"2-sign-in-and-create-an-api-key",level:3},{value:"3. Pin a Local File Using Their Test Client",id:"3-pin-a-local-file-using-their-test-client",level:3},{value:"4. Pin a Local File Via Curl",id:"4-pin-a-local-file-via-curl",level:3},{value:"5. Pin Multiple Local Files Via Node.JS",id:"5-pin-multiple-local-files-via-nodejs",level:3},{value:"6. Pin Files Via the IPFS CLI",id:"6-pin-files-via-the-ipfs-cli",level:3},{value:"7. Pin A File from a URL Via Curl",id:"7-pin-a-file-from-a-url-via-curl",level:3},{value:"8. Pin A File from a URL Via Node.JS",id:"8-pin-a-file-from-a-url-via-nodejs",level:3},{value:"Estuary",id:"estuary",level:2},{value:"1. Create an Account",id:"1-create-an-account-1",level:3},{value:"2. Create an API Key",id:"2-create-an-api-key",level:3},{value:"3. Pin a Local File via the Esturay UI",id:"3-pin-a-local-file-via-the-esturay-ui",level:3},{value:"4. Pin a Local File Via Curl",id:"4-pin-a-local-file-via-curl-1",level:3},{value:"5. View Pinned Files",id:"5-view-pinned-files",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pinning-data-to-ipfs-with-filecoin"},"Pinning Data to IPFS with Filecoin"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-ingestion/pinning/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-ingestion/pinning/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("p",null,"Before you can start crunching data, you need to make it addressable and accessible via IPFS. ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a set of protocols that allow data to be discovered and accessed in a decentralised way. Data is identified by its content identifier (CID) and can be accessed by anyone who knows the CID. "),(0,i.kt)("p",null,"The goal of the Bacalhau project is to make it easy to perform distributed, decentralised computation next to where the data resides. So a key step in this process is making your data accessible. This tutorial shows how to pin data to IPFS using ",(0,i.kt)("a",{parentName:"p",href:"https://filecoin.io/"},"Filecoin"),"."),(0,i.kt)("h2",{id:"using-a-third-party-to-pin-data"},"Using a Third-Party to Pin Data"),(0,i.kt)("p",null,"If you have data that you want to make available to your Bacalhau jobs (or other people), you can pin it using a pinning service like Web3.Storage, Estuary, etc. Pinning services store data on behalf of users and expose the data over IPFS. The pinning provider is essentially guaranteeing that your data will be available if someone knows the CID. Implementation details differ, but the pinning services often use a combination of IPFS nodes and third-party storage providers which are paid for via cryptocurrencies like Filecoin. Most pinning services offer you a free tier, so you can try them out without spending any money. "),(0,i.kt)("p",null,"For the course of this tutorial, we will explore how to use Web3.Storage and Estuary pinning services to upload data onto Filecoin and pin it to IPFS."),(0,i.kt)("h2",{id:"web3storage"},"Web3.Storage"),(0,i.kt)("p",null,"This example will demonstrate how to pin data using Web3.Storage. Web3.Storage is a pinning service that is built on top of IPFS and Filecoin. It is free to use for small amounts of data, and has a generous free tier. You can find more information about Web3.Storage ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/"},"here"),"."),(0,i.kt)("h3",{id:"1-create-an-account"},"1. Create an Account"),(0,i.kt)("p",null,"First you need to create an account (if you don't have one already). Browse to ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/login/"},"https://web3.storage/login/")," and sign up."),(0,i.kt)("h3",{id:"2-sign-in-and-create-an-api-key"},"2. Sign In and Create an API Key"),(0,i.kt)("p",null,"Next, sign in and browse to the ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/tokens/?create=true"},'"Create API Key" page'),". Follow the instructions to create an API key. Once created, you will need to copy the API key to your clipboard."),(0,i.kt)("h3",{id:"3-pin-a-local-file-using-their-test-client"},"3. Pin a Local File Using Their Test Client"),(0,i.kt)("p",null,"To test that your API key is working, use ",(0,i.kt)("a",{parentName:"p",href:"https://bafybeic5r5yxjh5xpmeczfp34ysrjcoa66pllnjgffahopzrl5yhex7d7i.ipfs.dweb.link/"},"web3.storage's test client to test that it's working"),"."),(0,i.kt)("p",null,"You can now see (or upload) your file via the web3.storage account page: ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/account/"},"https://web3.storage/account/"),"."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Note that you shouldn't share your API key with anyone. Delete this API key once you have finished with this example.")),(0,i.kt)("h3",{id:"4-pin-a-local-file-via-curl"},"4. Pin a Local File Via Curl"),(0,i.kt)("p",null,"You can also pin a file via curl. Please view the ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/reference/http-api/"},"API documentation")," to see all available commands. This example submits a single file to be pinned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: foo.txt" -d @foo.txt\n')),(0,i.kt)("h3",{id:"5-pin-multiple-local-files-via-nodejs"},"5. Pin Multiple Local Files Via Node.JS"),(0,i.kt)("p",null,"Web3.Storage has a ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/reference/js-client-library/"},"node.js library")," to interact with their API. The following example requires node.js to be installed. The following code uses a docker container. The javascript code is located on ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/intro/#create-the-upload-script"},"their website")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/blob/main/data-ingestion/nodejs/put-files.js"},"github"),"."),(0,i.kt)("p",null,"First create some files to upload."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile nodejs/test1.txt\nFirst test file\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Overwriting nodejs/test1.txt\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile nodejs/test2.txt\nSecond test file\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Overwriting nodejs/test2.txt\n")),(0,i.kt)("p",null,"Then run the following command, which uses the environmental variable ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," to authenticate with the API."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export TOKEN=YOUR_API_KEY\ndocker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && npm install && node put-files.js --token=$TOKEN test1.txt test2.txt'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nup to date, audited 245 packages in 706ms\n\n54 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\nUploading 2 files\nContent added with CID: bafybeic5smk3bgbsisp566kapp5clmo2ofgmvf223behdpcvjpndpnafka\n")),(0,i.kt)("p",null,"The CID listed at the bottom can now be used as an input to Bacalhau."),(0,i.kt)("h3",{id:"6-pin-files-via-the-ipfs-cli"},"6. Pin Files Via the IPFS CLI"),(0,i.kt)("p",null,"See the web3.storage documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://web3.storage/docs/how-tos/pinning-services-api/#using-the-ipfs-cli"},"instructions on how to pin files via the IPFS CLI"),"."),(0,i.kt)("h3",{id:"7-pin-a-file-from-a-url-via-curl"},"7. Pin A File from a URL Via Curl"),(0,i.kt)("p",null,"You can use curl to download a file then re-upload to web3.storage. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\ncurl -o train-images-idx3-ubyte.gz http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz\ncurl -X POST https://api.web3.storage/upload -H "Authorization: Bearer ${TOKEN}" -H "X-NAME: train-images-idx3-ubyte.gz" -d @train-images-idx3-ubyte.gz\n')),(0,i.kt)("p",null,"Which results in something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100 9680k  100 9680k    0     0  6281k      0  0:00:01  0:00:01 --:--:-- 6318k\n{"cid":"bafybeiereqxn546lkskldoybaa4xe7wk5fricm33nor4oofrxphlaywwd4","carCid":"bagbaieran5ufs752r5vdforovbnjc2gur7kzrsanr3avphsyp7hd6fms7pia"}%  \n')),(0,i.kt)("h3",{id:"8-pin-a-file-from-a-url-via-nodejs"},"8. Pin A File from a URL Via Node.JS"),(0,i.kt)("p",null,"You can combine the node.js example above with a ",(0,i.kt)("inlineCode",{parentName:"p"},"wget")," to then upload it to web3.storage."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --env TOKEN=$TOKEN -v $PWD/nodejs:/nodejs node:18-alpine ash -c 'cd /nodejs && wget http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz && npm install && node put-files.js --token=$TOKEN train-images-idx3-ubyte.gz'\n")),(0,i.kt)("h2",{id:"estuary"},"Estuary"),(0,i.kt)("p",null,"This example show you how to pin data using ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"https://estuary.tech"),"."),(0,i.kt)("h3",{id:"1-create-an-account-1"},"1. Create an Account"),(0,i.kt)("p",null,"Before you can upload files via estuary, you need an account. ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech"},"Sign up"),"."),(0,i.kt)("h3",{id:"2-create-an-api-key"},"2. Create an API Key"),(0,i.kt)("p",null,"Browse to ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"the API Key management page")," and create a key."),(0,i.kt)("h3",{id:"3-pin-a-local-file-via-the-esturay-ui"},"3. Pin a Local File via the Esturay UI"),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/upload"},"browse to the Estuary UI")," to upload a file via your web browser."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Due to the way Estuary batches files for pinning, it may take some time before your file is accessible/listable.")),(0,i.kt)("h3",{id:"4-pin-a-local-file-via-curl-1"},"4. Pin a Local File Via Curl"),(0,i.kt)("p",null,"Please view the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.estuary.tech/tutorial-uploading-your-first-file"},"API documentation")," to see all available commands. This example submits a single file to be pinned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export TOKEN=YOUR_API_KEY\necho hello world > foo.txt\ncurl -X POST https://upload.estuary.tech/content/add -H "Authorization: Bearer ${TOKEN}" -H "Content-Type: multipart/form-data" -F "data=@foo.txt"\n')),(0,i.kt)("p",null,"The response will return the CID of the file."),(0,i.kt)("h3",{id:"5-view-pinned-files"},"5. View Pinned Files"),(0,i.kt)("p",null,"If the upload was successful, you can view the file via your ",(0,i.kt)("a",{parentName:"p",href:"https://estuary.tech/home"},"estuary account page"),"."),(0,i.kt)("p",null,"Alternatively, you can obtain this information from the CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET -H "Authorization: Bearer ${TOKEN}" https://api.estuary.tech/content/list\n')))}d.isMDXComponent=!0}}]);