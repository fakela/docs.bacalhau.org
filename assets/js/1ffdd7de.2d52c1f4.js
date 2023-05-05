"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3211],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(7462),i=(t(7294),t(3905));const o={sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},r="Bacalhau FAQs",s={unversionedId:"faqs",id:"faqs",title:"Bacalhau FAQs",description:"Can I use multiple data sources in the same job?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/faqs",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/faqs.md",tags:[],version:"current",lastUpdatedAt:1683298136,formattedLastUpdatedAt:"May 5, 2023",sidebarPosition:90,frontMatter:{sidebar_label:"FAQs",sidebar_position:90,hide_title:!0},sidebar:"documentationSidebar",previous:{title:"Apache Airflow",permalink:"/integration/apache-airflow"},next:{title:"Landscape",permalink:"/advanced-guides/compute-landscape"}},l={},u=[{value:"Can I use multiple data sources in the same job?",id:"can-i-use-multiple-data-sources-in-the-same-job",level:3},{value:"How can I submit Job requests through CLI to communicate with my Node directly?",id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly",level:3},{value:"Why does my API server listening on <code>/ip4/127.0.0.1/tcp/5001</code> when I invoke IPFS Daemon when fetching an IPFS Multiaddress?",id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress",level:3},{value:"What to do when I get error connection refused when running Bacalhau API?",id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api",level:3},{value:"Problem",id:"problem",level:4},{value:"What to do",id:"what-to-do",level:4},{value:"Can I run Bacalhau in a containerized setup (nested containers)?",id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers",level:3},{value:"Can I run non Docker jobs?",id:"can-i-run-non-docker-jobs",level:3},{value:"How do I run a script that requires installing packages from a package repository like pypi or apt?",id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt",level:3},{value:"How do I see a job\u2019s progress while it\u2019s running?",id:"how-do-i-see-a-jobs-progress-while-its-running",level:2},{value:"How do I get an IPFS peer if I want to start Bacalhau Server?",id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server",level:2},{value:"How can I download and query SQLite when it complains about being in read-only directory?",id:"how-can-i-download-and-query-sqlite-when-it-complains-about-being-in-read-only-directory",level:2},{value:"Can I run bacalhau serve on my home machine? What are the requirements?",id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements",level:2},{value:"Can I stop a running job?",id:"can-i-stop-a-running-job",level:2}],c={toc:u},p="wrapper";function h(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bacalhau-faqs"},"Bacalhau FAQs"),(0,i.kt)("h3",{id:"can-i-use-multiple-data-sources-in-the-same-job"},"Can I use multiple data sources in the same job?"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--input")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," flag multiple times with multiple different CIDs, URLs or S3 objects, and give each of them a path to be mounted at. "),(0,i.kt)("p",null,"For example, doing ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau run cat/main.wasm -i ipfs://CID1:/input1 -i ipfs://CID2:/input2")," will result in both the ",(0,i.kt)("inlineCode",{parentName:"p"},"input1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"input2")," folders being available to your running WASM with the CID contents. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"-i")," as many times as you need. "),(0,i.kt)("h3",{id:"how-can-i-submit-job-requests-through-cli-to-communicate-with-my-node-directly"},"How can I submit Job requests through CLI to communicate with my Node directly?"),(0,i.kt)("p",null,"To ensure the CLI can communicate with our node directly (",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"),"), you need to make sure the ",(0,i.kt)("strong",{parentName:"p"},"1234")," port is open."),(0,i.kt)("h3",{id:"why-does-my-api-server-listening-on-ip4127001tcp5001-when-i-invoke-ipfs-daemon-when-fetching-an-ipfs-multiaddress"},"Why does my API server listening on ",(0,i.kt)("inlineCode",{parentName:"h3"},"/ip4/127.0.0.1/tcp/5001")," when I invoke IPFS Daemon when fetching an IPFS Multiaddress?"),(0,i.kt)("p",null,"Bacalhau communicates with IPFS via it's API port and not the swarm port which is why it's ",(0,i.kt)("strong",{parentName:"p"},"5001")," and not ",(0,i.kt)("strong",{parentName:"p"},"4001"),"."),(0,i.kt)("p",null,"The key thing is whether the IPFS node is running on the same host as the Bacalhau daemon. If it is, then ",(0,i.kt)("strong",{parentName:"p"},"127.0.0.1")," is enough to route traffic between the two (because they are both on the same node). If IPFS is running on a different node than Bacalhau, then we need to replace ",(0,i.kt)("strong",{parentName:"p"},"127.0.0.1")," with the IP that the IPFS server is running on."),(0,i.kt)("h3",{id:"what-to-do-when-i-get-error-connection-refused-when-running-bacalhau-api"},"What to do when I get error connection refused when running Bacalhau API?"),(0,i.kt)("h4",{id:"problem"},"Problem"),(0,i.kt)("p",null,"When running ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"),"  and you get this error message: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Error running version: publicapi: after posting request: Post "http://127.0.0.1:1234/version": dial tcp 127.0.0.1:1234: connect: connection refused\n')),(0,i.kt)("h4",{id:"what-to-do"},"What to do"),(0,i.kt)("p",null,"First, you'll need to check that the bacalhau server is up and running on the same host then it should be connecting using ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". This can be checked by running ",(0,i.kt)("inlineCode",{parentName:"p"},"telnet 127.0.0.1 1234"),". If telnet is not connecting to ",(0,i.kt)("strong",{parentName:"p"},"127.0.0.1 1234")," on the machine that bacalhau is running then one of 3 things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bacalhau is running on a different machine"),(0,i.kt)("li",{parentName:"ul"},"it's running on a different port"),(0,i.kt)("li",{parentName:"ul"},"it's not running")),(0,i.kt)("h3",{id:"can-i-run-bacalhau-in-a-containerized-setup-nested-containers"},"Can I run Bacalhau in a containerized setup (nested containers)?"),(0,i.kt)("p",null,"We don't support this as it will result in the classic Dind(Docker In Docker) problem. "),(0,i.kt)("h3",{id:"can-i-run-non-docker-jobs"},"Can I run non Docker jobs?"),(0,i.kt)("p",null,"Yes! You can run programs using WebAssembly instead. See the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/wasm-workload-onboarding"},"onboarding WebAssembly")," for information on how to do that."),(0,i.kt)("h3",{id:"how-do-i-run-a-script-that-requires-installing-packages-from-a-package-repository-like-pypi-or-apt"},"How do I run a script that requires installing packages from a package repository like pypi or apt?"),(0,i.kt)("p",null,"Networking is supported by Bacalhau which enables one to run a script that requires packages from external repository. This is only for Docker workloads"),(0,i.kt)("h2",{id:"how-do-i-see-a-jobs-progress-while-its-running"},"How do I see a job\u2019s progress while it\u2019s running?"),(0,i.kt)("p",null,"That's currently not possible"),(0,i.kt)("h2",{id:"how-do-i-get-an-ipfs-peer-if-i-want-to-start-bacalhau-server"},"How do I get an IPFS peer if I want to start Bacalhau Server?"),(0,i.kt)("p",null,"A viable option is to run your own IPFS daemon and fetch your multiaddress as explained ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/quick-start/#ensure-ipfs-is-running"},"here"),"."),(0,i.kt)("h2",{id:"how-can-i-download-and-query-sqlite-when-it-complains-about-being-in-read-only-directory"},"How can I download and query SQLite when it complains about being in read-only directory?"),(0,i.kt)("p",null,"When downloading content to run your code against, it is written to a read-only directory. Unfortunately, by default, SQLite requires the directory to be writable so that it can create utility files during its use."),(0,i.kt)("p",null,"If you run your command with the ",(0,i.kt)("inlineCode",{parentName:"p"},"immutable")," setting set to 1, then it will work. From the sqlite3 command you can use ",(0,i.kt)("inlineCode",{parentName:"p"},".open 'file:/inputs/database.db?immutable=1'"),' where you should replace "database.db" with your downloaded database filename.'),(0,i.kt)("h2",{id:"can-i-run-bacalhau-serve-on-my-home-machine-what-are-the-requirements"},"Can I run bacalhau serve on my home machine? What are the requirements?"),(0,i.kt)("p",null,"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau serve")," on any machine that fits the prerequisites listed ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/quick-start/"},"here"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The walkthrough in the docs has been tested only on Ubuntu 22, bacalhau is being developed on Linux/macOS environments and therefore should work fine there as well. However, Windows hosts are supported with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/running-node/windows-support/"},"limitations"),".")),(0,i.kt)("h2",{id:"can-i-stop-a-running-job"},"Can I stop a running job?"),(0,i.kt)("p",null,"Yes. Given a valid job ID, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#cancel"},"cancel command")," to cancel the job,\nand stop it from running."))}h.isMDXComponent=!0}}]);