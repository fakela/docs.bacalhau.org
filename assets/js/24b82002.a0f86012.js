"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[809],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=n,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7127:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_label:"Architecture",sidebar_position:1},i="Architecture",s={unversionedId:"getting-started/architecture",id:"getting-started/architecture",title:"Architecture",description:"image",source:"@site/docs/getting-started/architecture.md",sourceDirName:"getting-started",slug:"/getting-started/architecture",permalink:"/getting-started/architecture",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/getting-started/architecture.md",tags:[],version:"current",lastUpdatedAt:1681171643,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Architecture",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Home",permalink:"/"},next:{title:"Installation",permalink:"/getting-started/installation"}},l={},c=[{value:"System Components",id:"system-components",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Requester node",id:"requester-node",level:3},{value:"Compute node",id:"compute-node",level:3},{value:"Interface",id:"interface",level:2},{value:"Transport",id:"transport",level:3},{value:"Executor",id:"executor",level:3},{value:"Storage Provider",id:"storage-provider",level:3},{value:"Verifier",id:"verifier",level:3},{value:"Publisher",id:"publisher",level:3},{value:"Job Lifecycle",id:"job-lifecycle",level:2},{value:"Job Submission",id:"job-submission",level:3},{value:"Job Acceptance",id:"job-acceptance",level:3},{value:"Job Execution",id:"job-execution",level:3},{value:"Verification",id:"verification",level:3},{value:"Publishing",id:"publishing",level:3},{value:"Networking",id:"networking",level:3},{value:"Input / Output Volumes",id:"input--output-volumes",level:3}],u={toc:c},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(7762).Z,title:"Bacalhau Architecture",width:"1152",height:"864"})),(0,n.kt)("p",null,"Bacalhau is a peer-to-peer network of nodes that allows for decentralized communication between computers. Each node in the network has two components: a ",(0,n.kt)("strong",{parentName:"p"},"requestor")," component and a ",(0,n.kt)("strong",{parentName:"p"},"compute")," component."),(0,n.kt)("p",null,"To interact with the Bacalhau network, users can use the Bacalhau CLI (command-line interface) to send requests to a node in the network. These requests are sent using the JSON format over HTTP, a widely-used protocol for transmitting data over the internet."),(0,n.kt)("p",null,"When a request is received by a node in the network, it is broadcasted over the transport layer to all other nodes in the network. The transport layer is responsible for transmitting data between nodes, and because all nodes are connected to it, they all have a shared view of the network."),(0,n.kt)("p",null,"This shared view enables efficient and decentralized communication between nodes in the network, as all nodes are immediately made aware of any updates or changes made by other nodes."),(0,n.kt)("h2",{id:"system-components"},"System Components"),(0,n.kt)("p",null,"Bacalhau's architecture involves to main sections which is the ",(0,n.kt)("strong",{parentName:"p"},"core components")," and ",(0,n.kt)("strong",{parentName:"p"},"interfaces"),"."),(0,n.kt)("h2",{id:"core-components"},"Core Components"),(0,n.kt)("p",null,"The core components are responsible for handling requests and connecting different nodes. It consist of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#requestor-node"},"Requester node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#compute-node"},"Compute node"))),(0,n.kt)("h3",{id:"requester-node"},"Requester node"),(0,n.kt)("p",null,"In the Bacalhau network, the requestor node is responsible for handling requests from clients using JSON over HTTP. This node serves as the main custodian of jobs that are submitted to it."),(0,n.kt)("p",null,"When a job is submitted to a requestor node, it broadcasts the job to the network and accepts or rejects the bids that come back for that job. It is important to note that there is only ever a single requestor node for a given job, which is the node that the job was originally submitted to."),(0,n.kt)("p",null,"Once the compute nodes in the network have executed the job, they will produce verification proposals. These proposals will be collated and combined by the requestor node when enough have been proposed. At this point, the proposals will be either accepted or rejected, and the compute nodes will then publish their raw results."),(0,n.kt)("p",null,"Overall, the requestor node plays a crucial role in the Bacalhau network, serving as the main point of contact for clients and the primary handler of jobs that are submitted to the network. By effectively managing job requests and verification proposals, the requestor node enables efficient and effective communication between nodes in the network, making it a valuable tool for decentralized computing applications."),(0,n.kt)("h3",{id:"compute-node"},"Compute node"),(0,n.kt)("p",null,"In the Bacalhau network, the compute node plays a critical role in the process of executing jobs and producing results. When a new job is detected on the network, the compute node will determine whether it wants to bid on that job or not. If a bid is made and accepted by the requester node, the compute node will run the job using its collection of executors, each of which has its own collection of storage providers."),(0,n.kt)("p",null,"Once the executor has run the job and produced results, the compute node will generate a verification proposal. This proposal will be collated by the requester node along with proposals from other compute nodes that ran the same job. These proposals will then be either accepted or rejected, after which the compute node will publish its raw results via the publisher interface. The compute node has a collection of named executors, verifiers, and publishers, and it will choose the most appropriate ones based on the job specifications."),(0,n.kt)("p",null,"Overall, the compute node is a crucial component of the Bacalhau network, responsible for executing jobs and producing results. By efficiently managing the bidding and verification process, the Compute node enables effective communication between nodes in the network, making it a valuable tool for decentralized computing applications."),(0,n.kt)("h2",{id:"interface"},"Interface"),(0,n.kt)("p",null,"The interface handles the distribution, execution, storage, verification and publishing of jobs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#transport"},"Transport")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#executor"},"Executor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#storage-provider"},"Storage Provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#verifier"},"Verifier")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#publisher"},"Publisher"))),(0,n.kt)("h3",{id:"transport"},"Transport"),(0,n.kt)("p",null,"The transport interface is responsible for sending messages about jobs that are created, bid upon, and executed  to other compute nodes. It also manages the identity of individual Bacalhau nodes to ensure that messages are only delivered to authorized nodes, which improves network security."),(0,n.kt)("p",null,"To achieve this, the transport interface uses a protocol called ",(0,n.kt)("strong",{parentName:"p"},"bprotocol"),", which is a point-to-point scheduling protocol that runs over ",(0,n.kt)("a",{parentName:"p",href:"https://libp2p.io/"},"libp2p")," and is used to distribute job messages efficiently to other nodes on the network. This is our upgrade to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/publish-subscribe/"},"GossipSub")," handler as it ensures that messages are delivered to the right nodes without causing network congestion, thereby making communication between nodes more scalable and efficient."),(0,n.kt)("h3",{id:"executor"},"Executor"),(0,n.kt)("p",null,"The executor is a critical component of the Bacalhau network that handles the execution of jobs and ensures that the storage used by the job is local. One of its main responsibilities is to present the input and output storage volumes into the job when it is run."),(0,n.kt)("p",null,"It is important to note that storage can differ between Docker and WebAssembly (wasm). Therefore, if a job references a specific CID (Content IDentifier), two different storage providers may be used based on the executor used for the job."),(0,n.kt)("p",null,"The executor performs two primary functions: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"presenting the storage volumes in a format that is suitable for the executor, and,"),(0,n.kt)("li",{parentName:"ul"},"running the job. ")),(0,n.kt)("p",null,"When the job is completed, the executor will merge the stdout, stderr, and named output volumes into a results folder. This results folder is used to generate a verification proposal that is sent to the requester."),(0,n.kt)("p",null,"Once the proposal is accepted or rejected, the results folder is then forwarded to the publisher for publication. Overall, the executor plays a crucial role in the Bacalhau network by ensuring that jobs are executed properly, and their results are published accurately."),(0,n.kt)("h3",{id:"storage-provider"},"Storage Provider"),(0,n.kt)("p",null,"In a peer-to-peer network like Bacalhau, storage providers play a crucial role in presenting an upstream storage source. There can be different storage providers available in the network, each with its own way of manifesting the CI to the executor."),(0,n.kt)("p",null,"For instance, there can be a posix storage provider that presents the CID as a POSIX filesystem, or a library storage provider that streams the contents of the CID (Content IDentifier) via a library call."),(0,n.kt)("p",null,"On the other hand, there can be different executor implementations, such as Docker or WASM, that are responsible for running the job. When a job is submitted to these executors, the executor should select the appropriate storage provider to work with, depending on the implementation."),(0,n.kt)("p",null,"For instance, the Docker executor might use the posix storage provider to manifest the CID as a POSIX filesystem, while the WASM executor might use a library storage provider to stream the contents of the CID (Content IDentifier) via a library call."),(0,n.kt)("p",null,"Therefore, the storage providers and Executor implementations are loosely coupled, allowing the POSIX and library storage providers to be used across multiple executors, wherever it is deemed appropriate."),(0,n.kt)("h3",{id:"verifier"},"Verifier"),(0,n.kt)("p",null,"The verifier component is responsible for ensuring the validity of the results produced by the executor and transporting those results back to the requester node. There are two main tasks that the verifier performs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"checking the results produced by the executor against results produced by other nodes, and, "),(0,n.kt)("li",{parentName:"ul"},"transporting those results back to the requester node.")),(0,n.kt)("p",null,'How the results are checked depends on the nature of the job. For example, if the job is deterministic, the "deterministic hash" verifier can be used to ensure that the results produced by different nodes are the same. However, if the job is non-deterministic, a different approach must be used to check the results.'),(0,n.kt)("p",null,"Both the compute node and the requester node have a verifier component. The compute node verifier produces a verification proposal based on having run the job, while the requester node verifier collates the proposals from various compute nodes. Once enough proposals have arrived, the requester node verifier decides which compute nodes have actually performed the work and emits events to the network indicating whether the verification proposals are accepted or rejected."),(0,n.kt)("h3",{id:"publisher"},"Publisher"),(0,n.kt)("p",null,"The publisher is responsible for uploading the final results of a job to a public location where clients can access them. However, before the results can be published, the verification process must be completed to ensure the accuracy and authenticity of the results."),(0,n.kt)("p",null,"During the verification process, the raw results are kept private between the compute node and requester node to prevent unauthorized access or copying. Once the verification is complete and the results are deemed valid, the publisher interface takes over the task of uploading the local folder of results to a public location that can be accessed by the wider network."),(0,n.kt)("p",null,"The default publisher used is either Estuary, with the published results being stored with a unique content identifier (cid) that can be used to retrieve them. If Estuary is used as the publisher, the results will also be stored on Filecoin. The publisher interface is responsible for ensuring that the published results are accessible and can be read by other nodes on the network."),(0,n.kt)("h2",{id:"job-lifecycle"},"Job Lifecycle"),(0,n.kt)("p",null,"The job lifecycle involves several steps that are handled by different components of the network, from job submission to jobs download."),(0,n.kt)("h3",{id:"job-submission"},"Job Submission"),(0,n.kt)("p",null,"Jobs submitted via the Bacalhau CLI are forwarded to a Bacalhau network node at ",(0,n.kt)("inlineCode",{parentName:"p"},"bootstrap.production.bacalhau.org")," via port 1234 by default. This Bacalhau node will act as the requestor node for the duration of the job lifecycle. Jobs can also be submitted to any requestor node on the Bacalhau network."),(0,n.kt)("p",null,"When jobs are submitted to the requestor node, all compute nodes hear of this new job and can choose to ",(0,n.kt)("inlineCode",{parentName:"p"},"bid")," on it. The job deal will have a ",(0,n.kt)("inlineCode",{parentName:"p"},"concurrency")," setting, which refers to how many different nodes you may want to run this job. It will also have ",(0,n.kt)("inlineCode",{parentName:"p"},"confidence")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"min-bids")," properties.  Confidence is how many verification proposals must agree for the job to be deemed successful. ",(0,n.kt)("inlineCode",{parentName:"p"},"Min-bids")," is how many bids must have been made before we will choose to accept any."),(0,n.kt)("p",null,"The job might also mention the use of ",(0,n.kt)("inlineCode",{parentName:"p"},"volumes")," (for example some CIDs). The compute node can choose to bid on the job if the data for the volumes resides locally to the compute node, or it can choose to bid anyway. Bacalhau supports the use of external http or exec hooks to decide if a node wants to bid on a job. This means that a node operator can give granular rules about the jobs they are willing to run."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(6808).Z,title:"Bacalhau Architecture Bid on Job",width:"1152",height:"864"})),(0,n.kt)("h3",{id:"job-acceptance"},"Job Acceptance"),(0,n.kt)("p",null,"As bids from compute nodes arrive back at the originating requester node, it can choose which bids to accept and which ones to reject. This can be based on the previous reputation of each compute node, or any other factors the requestor node might take into account (like locality, hardware resources, cost etc). The requestor node will also have the same http or exec hooks to decide if it wants to accept a bid from a given compute node. The ",(0,n.kt)("inlineCode",{parentName:"p"},"min-bids")," setting is useful to ensure that we don\u2019t accept bids on a first bid first accepted basis."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(476).Z,title:"Bacalhau Architecture Accept Job Bid",width:"1152",height:"864"})),(0,n.kt)("h3",{id:"job-execution"},"Job Execution"),(0,n.kt)("p",null,"As accepted bids are received by compute nodes, they will ",(0,n.kt)("inlineCode",{parentName:"p"},"execute")," the job using the executor for that job, and the storage providers that executor has mapped in."),(0,n.kt)("p",null,"For example, a job could use the ",(0,n.kt)("inlineCode",{parentName:"p"},"docker")," executor, ",(0,n.kt)("inlineCode",{parentName:"p"},"WASM")," executor or a library storage volumes. This would result in a POSIX mount of the storage into a running container or a WASM style ",(0,n.kt)("inlineCode",{parentName:"p"},"syscall")," to stream the storage bytes into the WASM runtime. Each executor will deal with storage in a different way, so even though each job mentions the storage volumes, they would both end up with different implementations at runtime."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(4608).Z,title:"Bacalhau Architecture Execute Job",width:"1152",height:"864"})),(0,n.kt)("h3",{id:"verification"},"Verification"),(0,n.kt)("p",null,"Once the executor has completed the running of the job, a verification proposal will be generated by the verifier module running on the compute node. The nature of this proposal depends on the module used. For example, the deterministic hash verifier will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calculate a ",(0,n.kt)("inlineCode",{parentName:"li"},"sha256")," hash of the contents of the results folder"),(0,n.kt)("li",{parentName:"ul"},"Encrypt this hash using the public key of the requester node"),(0,n.kt)("li",{parentName:"ul"},"Broadcast the encrypted hash over the network",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Nodes that are NOT the requester node cannot copy the hash because they do not have the requesters private key"),(0,n.kt)("li",{parentName:"ul"},"The requester will use it\u2019s private key to decrypt the message and read the hash"),(0,n.kt)("li",{parentName:"ul"},"This means that bad actors cannot simply copy the results hash from other nodes"))),(0,n.kt)("li",{parentName:"ul"},"The requester node will wait for enough proposals before comparing the results hashes"),(0,n.kt)("li",{parentName:"ul"},"It will then broadcast \u201cresults accepted\u201d and \u201cresults rejected\u201d events based on it\u2019s decision for verification")),(0,n.kt)("p",null,"In the case of a deterministic job, a user can guard against malicious compute nodes that join the network, bids and propose wrong results by using ",(0,n.kt)("inlineCode",{parentName:"p"},"--verifier deterministic --min-bids N --concurrency 3")," (where N is, say, >half of the size  of the network, currently 9). This will require that ",(0,n.kt)("em",{parentName:"p"},"N")," bids are received before the requestor node chooses between them randomly. So when you submit WASM jobs (which are deterministic) this can give you a good level of confidence the jobs are evenly spread across nodes and malicious nodes will be, on average, caught out."),(0,n.kt)("p",null,"It\u2019s possible to use other types of verification methods by re-implementing the verification interface and using another technique."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(5671).Z,title:"Bacalhau Architecture Verification",width:"1152",height:"864"})),(0,n.kt)("h3",{id:"publishing"},"Publishing"),(0,n.kt)("p",null,"Once verification has resulted in ",(0,n.kt)("inlineCode",{parentName:"p"},"results accepted")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"results rejected")," events, the publisher will publish the raw results folder currently residing on the compute node."),(0,n.kt)("p",null,"The default publisher is ",(0,n.kt)("inlineCode",{parentName:"p"},"Estuary")," (if no API key is provided this falls back to the IPFS publisher).  The publisher interface mainly consists of a single function, which has the task of uploading the local results folder somewhere and returning a storage reference to where it has been uploaded."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"image",src:o(8562).Z,title:"Bacalhau Architecture Publishing",width:"1152",height:"864"})),(0,n.kt)("h3",{id:"networking"},"Networking"),(0,n.kt)("p",null,"It is possible to run Bacalhau completely disconnected from the main Bacalhau network, so that you can run private workloads without risking running on public nodes or inadvertently sharing your data outside of your organization. The isolated network will not connect to the public Bacalhau network nor connect to a public network. Read more on ",(0,n.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/next-steps/private-cluster"},"networking")),(0,n.kt)("h3",{id:"input--output-volumes"},"Input / Output Volumes"),(0,n.kt)("p",null,"A job includes the concept of input and output volumes, and the Docker executor implements support for these. This means you can specify your CIDs, URLs, as input paths and also write results to an output volume. This can be seen by the following example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cid=$(ipfs add file.txt)\nbacalhau docker run \\\n  -v $cid:/file.txt \\\n  -o apples:/output_folder \\\n  ubuntu \\\n  bash -c 'cat /file.txt > /output_folder/file.txt'\n")),(0,n.kt)("p",null,"The above example demonstrates an input volume flag ",(0,n.kt)("inlineCode",{parentName:"p"},"-v $cid:/file.txt"),", which mounts the contents of $cid within the docker container at location ",(0,n.kt)("inlineCode",{parentName:"p"},"/file.txt")," (root)."),(0,n.kt)("p",null,"Output volumes are mounted to the Docker container at the location specified. In the example above, any content written to ",(0,n.kt)("inlineCode",{parentName:"p"},"/output_folder")," will be made available within the apples folder in the job results CID."),(0,n.kt)("p",null,"Once the job has run on the executor, the contents of ",(0,n.kt)("inlineCode",{parentName:"p"},"stdout")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"stderr")," will be added to any named output volumes the job has used (in this case apples), and all those entities will be packaged into the results folder which is then published to your storage location via the verifier."))}d.isMDXComponent=!0},476:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-accept-job-bid-c541f3a23a90c2cfb07b47d401b202ca.jpeg"},6808:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-bid-on-job-7c64a8dd1e973cf99d718cb59cc2d2b0.jpeg"},4608:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-execute-job-2bac1c0560e5a8804b88b118ac04f1f2.jpeg"},8562:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-publishing-8f865f05dff72589a09fb378056cbc3a.jpeg"},7762:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-purpose-f192f229e16abe177d77f146ab2dca30.jpeg"},5671:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/architecture-verification-0ec9f7e4ade22c66791960bbae7f09f3.jpeg"}}]);