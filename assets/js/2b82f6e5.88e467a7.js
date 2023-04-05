"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=o,k=c["".concat(s,".").concat(d)]||c[d]||h[d]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Quick Start Using Docker",sidebar_position:101},i="Running a Compute Node Using Docker",l={unversionedId:"running-node/quick-start-docker",id:"running-node/quick-start-docker",title:"Running a Compute Node Using Docker",description:"Good news everyone! You can now run your Bacalhau-IPFS stack in Docker.",source:"@site/docs/running-node/quick-start-docker.md",sourceDirName:"running-node",slug:"/running-node/quick-start-docker",permalink:"/running-node/quick-start-docker",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/quick-start-docker.md",tags:[],version:"current",lastUpdatedAt:1680711103,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:101,frontMatter:{sidebar_label:"Quick Start Using Docker",sidebar_position:101},sidebar:"documentationSidebar",previous:{title:"Quick Start",permalink:"/running-node/quick-start"},next:{title:"Networking",permalink:"/running-node/networking"}},s={},u=[{value:"Pre-Prerequisites",id:"pre-prerequisites",level:3},{value:'<a id="public">Connect to the Public Bacalhau Network Using Docker</a>',id:"connect-to-the-public-bacalhau-network-using-docker",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"(Optional) Start a Public IPFS Node",id:"optional-start-a-public-ipfs-node",level:3},{value:"Start a Public Bacalhau Node",id:"start-a-public-bacalhau-node",level:3},{value:'<a id="private">Run a Private Bacalhau Network Using Docker (Insecure)</a>',id:"run-a-private-bacalhau-network-using-docker-insecure",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Start a Local IPFS Node (Insecure)",id:"start-a-local-ipfs-node-insecure",level:3},{value:'<a id="start-bacalhau">Start a Private Bacalhau Node</a>',id:"start-a-private-bacalhau-node",level:3},{value:'<a id="run-job">Run a Job on the Private Network</a>',id:"run-a-job-on-the-private-network",level:3},{value:"Retrieve the Results on the Private Network (Insecure)",id:"retrieve-the-results-on-the-private-network-insecure",level:3},{value:'<a id="secure">Run a Private Bacalhau Network Using Docker (Secure)</a>',id:"run-a-private-bacalhau-network-using-docker-secure",level:2},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"Start a Private IPFS Node (Secure)",id:"start-a-private-ipfs-node-secure",level:3},{value:"Start a Private Bacalhau Node (Secure)",id:"start-a-private-bacalhau-node-secure",level:3},{value:"Run a Job on the Private Network (Secure)",id:"run-a-job-on-the-private-network-secure",level:3},{value:"Retrieve the Results on the Private Network (Secure)",id:"retrieve-the-results-on-the-private-network-secure",level:3},{value:"Common Prerequisites",id:"common-prerequisites",level:2},{value:'<a id="docker-network">Create a New Docker Network</a>',id:"create-a-new-docker-network",level:3},{value:'<a id="test-ipfs">Test that the IPFS Node is Working</a>',id:"test-that-the-ipfs-node-is-working",level:3},{value:'<a id="test-bacalhau">Test that the Bacalhau Node is Working</a>',id:"test-that-the-bacalhau-node-is-working",level:3}],p={toc:u},c="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-compute-node-using-docker"},"Running a Compute Node Using Docker"),(0,o.kt)("p",null,"Good news everyone! You can now run your Bacalhau-IPFS stack in Docker."),(0,o.kt)("p",null,"This page describes several ways in which to operate Bacalhau. You can choose the method that best suits your needs. The methods are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#public"},"Connect to and Contribute Resources to the Public Bacalhau Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#private"},"Run a Private Insecure Local Network for Testing And Development")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#secure"},"Run a Private Secure Cluster"))),(0,o.kt)("h3",{id:"pre-prerequisites"},"Pre-Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This guide works best on a Linux machine. If you're trying to run this on a mac, you may encounter issues. Remember that network host mode doesn't work."),(0,o.kt)("li",{parentName:"ul"},"You need to have Docker installed. If you don't have it, you can ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"install it here"),".")),(0,o.kt)("h2",{id:"connect-to-the-public-bacalhau-network-using-docker"},(0,o.kt)("a",{id:"public"},"Connect to the Public Bacalhau Network Using Docker")),(0,o.kt)("p",null,"This method is appropriate for those that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide compute resources to the public Bacalhau network")),(0,o.kt)("p",null,"This is not appropriate for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testing and development"),(0,o.kt)("li",{parentName:"ul"},"Running a private network")),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-network"},"Create a new Docker network"))),(0,o.kt)("h3",{id:"optional-start-a-public-ipfs-node"},"(Optional) Start a Public IPFS Node"),(0,o.kt)("p",null,"This will start a local IPFS node and connect it to the public DHT. If you already have an IPFS node running, then you can skip this step."),(0,o.kt)("p",null,"Some notes about this command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It wipes the ",(0,o.kt)("inlineCode",{parentName:"li"},"$(pwd)/ipfs")," directory to make sure you have a clean slate"),(0,o.kt)("li",{parentName:"ul"},"It runs the IPFS container in the specified Docker network"),(0,o.kt)("li",{parentName:"ul"},"It exposes the IPFS API port to the world on port 4002, to avoid clashes with Bacalhau"),(0,o.kt)("li",{parentName:"ul"},"It exposes the admin RPC API to the local host only, on port 5001"),(0,o.kt)("li",{parentName:"ul"},"We are not specifying or removing the bootstrap nodes, so it will default to connecting to public machines")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Wipe the current ipfs directory if it exists\nrm -rf $(pwd)/ipfs && mkdir $(pwd)/ipfs\n# Start the IPFS node\ndocker run \\\n    -d --network bacalhau-network --name ipfs_host \\\n    -v $(pwd)/staging:/export -v $(pwd)/ipfs:/data/ipfs \\\n    -p 4002:4001 -p 4002:4001/udp \\\n    -p 127.0.0.1:5001:5001 \\\n    ipfs/kubo:latest\n")),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"#test-ipfs"},"test that the IPFS node is working"),"."),(0,o.kt)("h3",{id:"start-a-public-bacalhau-node"},"Start a Public Bacalhau Node"),(0,o.kt)("p",null,'Bacalhau consists of two parts: a "requester" that is responsible for operating the API and managing jobs, and a "compute" element that is responsible for executing jobs. In a public context, you\'d typically just run a compute node, and allow the public requesters to handle the traffic.'),(0,o.kt)("p",null,"Notes about the command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'It runs the Bacalhau container in "host" mode. This means that the container will use the same network as the host.'),(0,o.kt)("li",{parentName:"ul"},"It uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user, which is the default system user that has access to the Docker socket on a mac. You may need to change this to suit your environment."),(0,o.kt)("li",{parentName:"ul"},"It mounts the Docker Socket"),(0,o.kt)("li",{parentName:"ul"},"It mounts the ",(0,o.kt)("inlineCode",{parentName:"li"},"/tmp")," directory"),(0,o.kt)("li",{parentName:"ul"},"It exposes the Bacalhau API ports to the world"),(0,o.kt)("li",{parentName:"ul"},"The container version should match that of the current release"),(0,o.kt)("li",{parentName:"ul"},"The IPFS connect string points to the RPC port of the IPFS node in Docker. Because Bacalhau is running in the same network, it can use DNS to find the IPFS container IP. If you're running your own node, replace it."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--node-type")," flag is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"compute")," because we only want to run a compute node"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--labels")," flag is used to set a human-readable label for the node, and so we can run jobs on our machine later"),(0,o.kt)("li",{parentName:"ul"},"We do not specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"peer")," flag, so it defaults to using the public bootstrap nodes")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run \\\n    -d --rm --name bacalhau \\\n    --net host \\\n    --env BACALHAU_ENVIRONMENT=production \\\n    -u root \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    -v /tmp:/tmp \\\n    ghcr.io/bacalhau-project/bacalhau:latest \\\n    serve \\\n        --ipfs-connect /dns4/localhost/tcp/5001 \\\n        --node-type compute \\\n        --labels "owner=docs-quick-start"\n')),(0,o.kt)("p",null,"There are several ways to ensure that the Bacalhau compute node is connected to the network."),(0,o.kt)("p",null,"First check that the Bacalhau libp2p port is open and connected. On linux you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"lsof")," and it should look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f sudo lsof -i :1235\n\nCOMMAND      PID USER   FD   TYPE    DEVICE SIZE/OFF NODE NAME\nbacalhau 1284922 root    3u  IPv4 134301303      0t0  TCP *:1235 (LISTEN)\nbacalhau 1284922 root    7u  IPv4 134301307      0t0  UDP *:1235\nbacalhau 1284922 root    8u  IPv6 134301308      0t0  TCP *:1235 (LISTEN)\nbacalhau 1284922 root    9u  IPv6 134301309      0t0  UDP *:1235\nbacalhau 1284922 root   12u  IPv4 134303799      0t0  TCP phil-ethereum-node.europe-west2-c.c.bacalhau-development.internal:1235->191.115.245.35.bc.googleusercontent.com:1235 (ESTABLISHED)\nbacalhau 1284922 root   13u  IPv4 134302914      0t0  TCP phil-ethereum-node.europe-west2-c.c.bacalhau-development.internal:1235->251.61.245.35.bc.googleusercontent.com:1235 (ESTABLISHED)\nbacalhau 1284922 root   14u  IPv4 134302917      0t0  TCP phil-ethereum-node.europe-west2-c.c.bacalhau-development.internal:1235->239.251.245.35.bc.googleusercontent.com:1235 (ESTABLISHED)\n")),(0,o.kt)("p",null,"Note the three established connections at the bottom. These are the production bootstrap nodes that Bacalhau is now connected to."),(0,o.kt)("p",null,"You can also check that the node is connected by listing the current network peers and grepping for your IP address or node ID. The node ID can be obtained from the Bacalhau logs. It will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\u276f curl -s bootstrap.production.bacalhau.org:1234/peers | jq | grep -A 10 QmaEpsWj4Gw31tBZZ6yagS9ZRSfT8oPgqFuqbvffWJrba5\n\n    "ID": "QmaEpsWj4Gw31tBZZ6yagS9ZRSfT8oPgqFuqbvffWJrba5",\n    "Addrs": [\n      "/ip4/35.197.229.139/tcp/1235",\n      "/ip4/10.154.0.4/tcp/1235",\n      "/ip4/127.0.0.1/tcp/1235",\n      "/ip4/10.154.0.4/udp/1235/quic",\n      "/ip4/127.0.0.1/udp/1235/quic",\n      "/ip6/::1/tcp/1235",\n      "/ip6/::1/udp/1235/quic"\n    ]\n  }\n')),(0,o.kt)("p",null,"Finally, submit a job with the label you specified when you ran the compute node. If this label is unique, there should be only one node with this label. The job should succeed. Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run --input-urls=http://example.org/index.html --selector owner=docs-quick-start ghcr.io/bacalhau-project/examples/upload:v1\n")),(0,o.kt)("p",null,"If instead your job fails with the following error, it means that the compute node is not connected to the network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Error: failed to submit job: publicapi: after posting request: error starting job: not enough nodes to run job. requested: 1, available: 0\n")),(0,o.kt)("h2",{id:"run-a-private-bacalhau-network-using-docker-insecure"},(0,o.kt)("a",{id:"private"},"Run a Private Bacalhau Network Using Docker (Insecure)")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This method is insecure. It does not lock down the IPFS node. Anyone connected to your network can access the IPFS node and read/write data. This is not recommended for production use.")),(0,o.kt)("p",null,"This method is appropriate for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testing and development"),(0,o.kt)("li",{parentName:"ul"},"Evaluating the Bacalhau platform before scaling jobs via the public network")),(0,o.kt)("p",null,"This method is useful for testing and development. It's easier to use because it doesn't require a secret IPFS swarm key -- this is essentially an authentication token that allows you to connect to the node."),(0,o.kt)("p",null,"This method is not appropriate for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Secure, private use"),(0,o.kt)("li",{parentName:"ul"},"Production use")),(0,o.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-network"},"Create a new Docker network"))),(0,o.kt)("h3",{id:"start-a-local-ipfs-node-insecure"},"Start a Local IPFS Node (Insecure)"),(0,o.kt)("p",null,"To run an insecure, private node, you need to initialise your IPFS configuration by removing all of the default public bootstrap nodes. Then we run the node in the normal way, without the special ",(0,o.kt)("inlineCode",{parentName:"p"},"LIBP2P_FORCE_PNET")," flag that checks for a secure private connection."),(0,o.kt)("p",null,"Some notes about this command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It wipes the ",(0,o.kt)("inlineCode",{parentName:"li"},"$(pwd)/ipfs")," directory to make sure you have a clean slate"),(0,o.kt)("li",{parentName:"ul"},"It removes the default bootstrap nodes"),(0,o.kt)("li",{parentName:"ul"},"It runs the IPFS container in the specified Docker network"),(0,o.kt)("li",{parentName:"ul"},"It exposes the IPFS API port to the local host only, to prevent accidentally exposing the IPFS node, on 4002, to avoid clashes with Bacalhau"),(0,o.kt)("li",{parentName:"ul"},"It exposes the admin RPC API to the local host only, on port 5001")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Wipe the current ipfs directory if it exists\nrm -rf $(pwd)/ipfs && mkdir $(pwd)/ipfs\n# Remove the bootstrap nodes\ndocker run -t -v $(pwd)/staging:/export -v $(pwd)/ipfs:/data/ipfs ipfs/kubo:latest bootstrap rm --all\n# Start the IPFS node\ndocker run \\\n    -d --network bacalhau-network --name ipfs_host \\\n    -v $(pwd)/staging:/export -v $(pwd)/ipfs:/data/ipfs \\\n    -p 127.0.0.1:4002:4001 -p 127.0.0.1:4002:4001/udp \\\n    -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 \\\n    ipfs/kubo:latest\n")),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"#test-ipfs"},"test that the IPFS node is working"),"."),(0,o.kt)("h3",{id:"start-a-private-bacalhau-node"},(0,o.kt)("a",{id:"start-bacalhau"},"Start a Private Bacalhau Node")),(0,o.kt)("p",null,'Bacalhau consists of two parts: a "requester" that is responsible for operating the API and managing jobs, and a "compute" element that is responsible for executing jobs. In a public context, you\'d typically just run a compute node, and allow the public requesters to handle the traffic. But in a private context, you\'ll want to run both.'),(0,o.kt)("p",null,"Notes about the command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It runs the Bacalhau container in the specified Docker network"),(0,o.kt)("li",{parentName:"ul"},"It uses the ",(0,o.kt)("inlineCode",{parentName:"li"},"root")," user, which is the default system user that has access to the Docker socket on a mac. You may need to change this to suit your environment."),(0,o.kt)("li",{parentName:"ul"},"It mounts the Docker Socket"),(0,o.kt)("li",{parentName:"ul"},"It mounts the ",(0,o.kt)("inlineCode",{parentName:"li"},"/tmp")," directory"),(0,o.kt)("li",{parentName:"ul"},"It exposes the Bacalhau API ports to the local host only, to prevent accidentally exposing the API to the public internet"),(0,o.kt)("li",{parentName:"ul"},"The container version should match that of the Bacalhau installed on your system"),(0,o.kt)("li",{parentName:"ul"},"The IPFS connect string points to the RPC port of the IPFS node. Because Bacalhau is running in the same network, it can use DNS to find the IPFS container IP."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--peer")," flag is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"none")," because we don't want to bootstrap to the public network"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"--node-type")," flag is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"requester,compute")," because we want to run both a requester and a compute node")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n    -d --network bacalhau-network --name bacalhau \\\n    -u root \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    -v /tmp:/tmp \\\n    -p 127.0.0.1:1234:1234 -p 127.0.0.1:1235:1235 -p 127.0.0.1:1235:1235/udp \\\n    ghcr.io/bacalhau-project/bacalhau:latest \\\n    serve \\\n        --ipfs-connect /dns4/ipfs_host/tcp/5001 \\\n        --peer "none" \\\n        --node-type requester,compute\n')),(0,o.kt)("p",null,"You can now ",(0,o.kt)("a",{parentName:"p",href:"#test-bacalhau"},"test that Bacalhau is working"),"."),(0,o.kt)("h3",{id:"run-a-job-on-the-private-network"},(0,o.kt)("a",{id:"run-job"},"Run a Job on the Private Network")),(0,o.kt)("p",null,"Now it's time to run a job. Recall that you exposed the Bacalhau API on the default ports to the local host only. So you'll need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--api-host")," flag to tell Bacalhau where to find the API. Everything else is a standard part of the Bacalhau CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run --api-host=localhost --input-urls=http://example.org/index.html ghcr.io/bacalhau-project/examples/upload:v1\n")),(0,o.kt)("p",null,"The job should succeed. Run it again but this time capture the job ID to make it easier to retrieve the results."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export JOB_ID=$(bacalhau docker run --api-host=localhost --input-urls=http://example.org/index.html --wait --id-only ghcr.io/bacalhau-project/examples/upload:v1)\n")),(0,o.kt)("h3",{id:"retrieve-the-results-on-the-private-network-insecure"},"Retrieve the Results on the Private Network (Insecure)"),(0,o.kt)("p",null,"To retrieve the results using the Bacalhau CLI, you need to know the p2p swarm multiaddress of the IPFS node, because you don't want to connect to the public global IPFS network. To do that you can run the IPFS id command (and parse to remove the trub at the bottom of the barrel):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export SWARM_ID=$(docker run -t --rm --network=bacalhau-network ipfs/kubo:latest --api=/dns4/ipfs_host/tcp/5001 id -f="<id>" | tail -n 1)\nexport SWARM_ADDR=/ip4/127.0.0.1/tcp/4002/p2p/$SWARM_ID\n')),(0,o.kt)("p",null,"Note that the command above changes the reported port from 4001 to 4002. This is because the IPFS node is running on port 4002, but the IPFS id command reports the port as 4001."),(0,o.kt)("p",null,"Now get the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results && \\\n    bacalhau --api-host=localhost --ipfs-swarm-addrs=$SWARM_ADDR get --output-dir=results $JOB_ID\n")),(0,o.kt)("p",null,"Alternatively, you can use the Docker container, mount the results volume, and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"--api-host")," to the name of the Bacalhau container and the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ipfs-swarm-addrs")," back to port 4001:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results && \\\ndocker run -t --rm --network=bacalhau-network \\\n    -v $(pwd)/results:/results \\\n    ghcr.io/bacalhau-project/bacalhau:latest \\\n    get --api-host=bacalhau --ipfs-swarm-addrs=/dns4/bacalhau/tcp/4001/p2p/$SWARM_ID --output-dir=/results $JOB_ID\n")),(0,o.kt)("h2",{id:"run-a-private-bacalhau-network-using-docker-secure"},(0,o.kt)("a",{id:"secure"},"Run a Private Bacalhau Network Using Docker (Secure)")),(0,o.kt)("p",null,"Running a private secure network is useful in a range of scenarios, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Running a private network for a private project")),(0,o.kt)("p",null,"You need two things. A private IPFS node to store data and a Bacalhau node to execute over that data. To keep the nodes private you need to tell the nodes to shush and use a secret key. This is a bit harder to use, and a bit more involved than the insecure version."),(0,o.kt)("h3",{id:"prerequisites-2"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-network"},"Create a new Docker network"))),(0,o.kt)("h3",{id:"start-a-private-ipfs-node-secure"},"Start a Private IPFS Node (Secure)"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Private IPFS nodes are experimental. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ipfs/kubo/blob/master/docs/experimental-features.md#private-networks"},"See the IPFS documentation")," for more information.")),(0,o.kt)("p",null,"First you need to bootstrap a new IPFS cluster for your own private use. This consists of a process of generating a swarm key, removing any bootstrap nodes and then starting the IPFS node."),(0,o.kt)("p",null,"Some notes about this command:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It wipes the ",(0,o.kt)("inlineCode",{parentName:"li"},"$(pwd)/ipfs")," directory to make sure you have a clean slate"),(0,o.kt)("li",{parentName:"ul"},"It generates a new swarm key -- this is the token that is required to connect to this node"),(0,o.kt)("li",{parentName:"ul"},"It removes the default bootstrap nodes"),(0,o.kt)("li",{parentName:"ul"},"It runs the IPFS container in the specified Docker network"),(0,o.kt)("li",{parentName:"ul"},"It exposes the IPFS API port to the local host only, to prevent accidentally exposing the IPFS node, on 4002, to avoid clashes with Bacalhau"),(0,o.kt)("li",{parentName:"ul"},"It exposes the admin RPC API to the local host only, on port 5001")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Wipe the current ipfs directory if it exists\nrm -rf $(pwd)/ipfs && mkdir $(pwd)/ipfs\n# Create a new swarm key -- a secret key that will be used to bootstrap the private network\necho -e \"/key/swarm/psk/1.0.0/\\n/base16/\\n`tr -dc 'a-f0-9' < /dev/urandom | head -c64`\" > $(pwd)/ipfs/swarm.key\n# Remove the bootstrap nodes\ndocker run -t -v $(pwd)/staging:/export -v $(pwd)/ipfs:/data/ipfs ipfs/kubo:latest bootstrap rm --all\n# Start the IPFS node\ndocker run \\\n    -d --network bacalhau-network --name ipfs_host \\\n    -e LIBP2P_FORCE_PNET=1 \\\n    -v $(pwd)/staging:/export -v $(pwd)/ipfs:/data/ipfs \\\n    -p 127.0.0.1:4002:4001 -p 127.0.0.1:4002:4001/udp \\\n    -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 \\\n    ipfs/kubo:latest\n")),(0,o.kt)("h3",{id:"start-a-private-bacalhau-node-secure"},"Start a Private Bacalhau Node (Secure)"),(0,o.kt)("p",null,"The instructions to run a secure private Bacalhau network are the same as the insecure version, ",(0,o.kt)("a",{parentName:"p",href:"#start-bacalhau"},"please follow those instructions"),"."),(0,o.kt)("h3",{id:"run-a-job-on-the-private-network-secure"},"Run a Job on the Private Network (Secure)"),(0,o.kt)("p",null,"The instructions to run a job are the same as the insecure version, ",(0,o.kt)("a",{parentName:"p",href:"#run-job"},"please follow those instructions"),"."),(0,o.kt)("h3",{id:"retrieve-the-results-on-the-private-network-secure"},"Retrieve the Results on the Private Network (Secure)"),(0,o.kt)("p",null,"It is not yet possible to retrieve the results from a secure IPFS node because Bacalhau does not yet support the IPFS swarm key. To retrieve the results you must use the IPFS command or container with the CID."),(0,o.kt)("p",null,"First obtain the CID from the Bacalhau job. The following parses the JSON output of the Bacalhau job to get the CID using ",(0,o.kt)("inlineCode",{parentName:"p"},"jq"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export CID=$(bacalhau --api-host=localhost list $JOB_ID --output json | jq -r '.[0].Status.JobState.Nodes[] | .Shards.\"0\".PublishedResults | select(.CID) | .CID')\n")),(0,o.kt)("p",null,"Next, use the IPFS CLI, using the admin RPC API, to retrieve the results:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results && \\\n    ipfs --api /ip4/127.0.0.1/tcp/5001 get $CID --output $(pwd)/results\n")),(0,o.kt)("p",null,"Alternatively, you can use the information contained within the ",(0,o.kt)("inlineCode",{parentName:"p"},"ipfs")," directory to point you to the admin RPC port:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"IPFS_PATH=$(pwd)/ipfs ipfs get $CID --output $(pwd)/results\n")),(0,o.kt)("p",null,"If you exported that environmental variable, that's probably a bit easier to use."),(0,o.kt)("p",null,"And finally, you could also use the IPFS container to retrieve the results from the admin API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir results && \\\n    docker run -t --rm --network=bacalhau-network \\\n        -v $(pwd)/results:/results \\\n        ipfs/kubo:latest --api /dns4/ipfs_host/tcp/5001 get --output=/results $CID\n")),(0,o.kt)("h2",{id:"common-prerequisites"},"Common Prerequisites"),(0,o.kt)("h3",{id:"create-a-new-docker-network"},(0,o.kt)("a",{id:"docker-network"},"Create a New Docker Network")),(0,o.kt)("p",null,"Without this, inter-container dns will not work, and internet access may not work either."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create --driver bridge bacalhau-network\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Double check that this network can access the internet (so bacalhau can call external URLs)."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --network bacalhau-network alpine ping -c 2 bacalhau.org\n")),(0,o.kt)("p",{parentName:"admonition"},"This should be successful. If it is not, then please troubleshoot your docker networking. For example, on my mac, I had to totally uninstall Docker, restart the computer, and then reinstall Docker. Then it worked. Also check ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/troubleshoot/known-issues/"},"https://docs.docker.com/desktop/troubleshoot/known-issues/"),'. Apparently "ping from inside a container to the Internet does not work as expected.". No idea what that means. How do you break ping?')),(0,o.kt)("h3",{id:"test-that-the-ipfs-node-is-working"},(0,o.kt)("a",{id:"test-ipfs"},"Test that the IPFS Node is Working")),(0,o.kt)("p",null,"You can now browse to the IPFS web UI at ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:5001/webui"},"http://127.0.0.1:5001/webui"),"."),(0,o.kt)("p",null,"Read more about the IPFS docker image ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/run-ipfs-inside-docker/#set-up"},"here"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"As described in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/reference/kubo/rpc/#getting-started"},"their documentation"),", never expose the RPC API port (port 5001) to the public internet.")),(0,o.kt)("h3",{id:"test-that-the-bacalhau-node-is-working"},(0,o.kt)("a",{id:"test-bacalhau"},"Test that the Bacalhau Node is Working")),(0,o.kt)("p",null,"Ensure that the Bacalhau logs (",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs bacalhau"),") have no errors."),(0,o.kt)("p",null,"Check that your Bacalhau installation is the same version:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau --api-host=localhost version\n")),(0,o.kt)("p",null,"The versions should match. Alternatively, you can use the Docker container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --network=bacalhau-network --rm ghcr.io/bacalhau-project/bacalhau:latest --api-host=bacalhau version\n")),(0,o.kt)("p",null,"Perform a list command to ensure you can connect to the Bacalhau API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau --api-host=localhost list\n")),(0,o.kt)("p",null,"It should return empty."))}h.isMDXComponent=!0}}]);