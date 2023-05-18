"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5583],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return t?n.createElement(m,i(i({ref:a},c),{},{components:t})):n.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},6990:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"Landscape",sidebar_position:2},i="Compute Over Data - Landscape Analysis",s={unversionedId:"advanced-guides/compute-landscape",id:"advanced-guides/compute-landscape",title:"Compute Over Data - Landscape Analysis",description:"This page is an introduction to a landscape analysis of general-purpose compute frameworks.",source:"@site/docs/advanced-guides/compute-landscape.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/compute-landscape",permalink:"/advanced-guides/compute-landscape",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/advanced-guides/compute-landscape.md",tags:[],version:"current",lastUpdatedAt:1684409641,formattedLastUpdatedAt:"May 18, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Landscape",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"FAQs",permalink:"/faqs"},next:{title:"Style Guide",permalink:"/community/style-guide"}},l={},p=[{value:"Compute Landscape",id:"compute-landscape",level:2},{value:"Code repository",id:"code-repository",level:2},{value:"Sample code",id:"sample-code",level:3},{value:"Benchmarks",id:"benchmarks",level:3},{value:"Key findings",id:"key-findings",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compute-over-data---landscape-analysis"},"Compute Over Data - Landscape Analysis"),(0,o.kt)("p",null,"This page is an introduction to a landscape analysis of general-purpose compute frameworks.\nIts purpose is to map the roughness of existing technologies and serve as an introduction to key concepts for those who are new to the Bacalhau community."),(0,o.kt)("p",null,"Watch the video below for a short walkthrough and continue to the sections below to learn more about landscape analysis within the compute ecosystem.\nMore content is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit?usp=sharing"},"full slide deck")," and in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks"},"code repository"),", where you'll find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A description of each technology and how they're positioned in the compute space"),(0,o.kt)("li",{parentName:"ul"},"A collection of code samples to showcase and compare APIs"),(0,o.kt)("li",{parentName:"ul"},"A performance benchmark to compare how they behave in processing a large dataset")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://Winder.AI/comparison-computational-frameworks-spark-dask-snowflake/#video"},(0,o.kt)("img",{src:t(3471).Z,width:"888",height:"499"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The past can hurt. But the way I see it, you can either run from it, or learn from it. - ",(0,o.kt)("em",{parentName:"p"},"Walt Disney"))),(0,o.kt)("p",null,"Ultimately, Bacalhau aims to offer efficient distributed computation -- to achieve that, we're learning from the past."),(0,o.kt)("h2",{id:"compute-landscape"},"Compute Landscape"),(0,o.kt)("p",null,"The traditional compute landscape counts dozens of frameworks capable of processing generic workloads.\nSome are specifically designed to take advantage of data locality, by bringing the computation close to where data lives. The landscape analysis provided here reviewed a selection of these tools in order to summarize their pros and cons."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit?usp=sharing"},"full slide deck")," contains a detailed overview of the compute frameworks and include sample code snippets. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compute Framework Analysis",src:t(6925).Z,width:"1456",height:"780"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Python data stack")," includes tools like Pandas and Dask, which offers a very convenient data structure, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dataframe"},"Dataframe"),", which is particularly suitable for handling tabular data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"database ecosystem")," offers a variety of choices optimized for various use cases (including tabular data, real-time time series, etc.). This research looked at Postgres and Snowflake, a couple of widely used tools in this space.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Big data tools")," like Apache Spark and Hadoop were also considered in this analysis. Tools like these are capable of processing structured and unstructured data in very large clusters. This category introduced first the concept of data-locality, to avoid data transfers over the cluster network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"web3 tools")," are also part of this analysis. Tools in this category aim at supporting distributed storage and computation. Note, at the time of writing most tools in this category are under heavy development. In many cases, it's still unclear how they work and what direction they'll take in the future."))),(0,o.kt)("p",null,"Unfortunately, many of these systems are far from being easy to operate on your localhost, or at scale. Traditional frameworks are plagued by significant operational overhead resulting in inefficient resource usage. Moreover, there's often a significant setup burden even to running a getting started guide, setting a relatively high barrier to entry."),(0,o.kt)("p",null,"The table below summarizes their score in terms of different requirements. The rating presented is based on the experience of setting up and running the code as described in the next section. To learn more, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g11f8b483676_0_87"},"slides presented here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compute Framework Analysis",src:t(746).Z,width:"1660",height:"740"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why is Bachalau not on this list?")," This analysis is not a direct comparison between Bacalhau and existing frameworks. Instead, this research aims to help the Bacalhau community to learn more about the benefits and drawbacks of traditional systems."),(0,o.kt)("h2",{id:"code-repository"},"Code repository"),(0,o.kt)("h3",{id:"sample-code"},"Sample code"),(0,o.kt)("p",null,"A good starting point to begin a compute journey is to take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks"},"code repository"),", where you'll find working examples of parallel workloads (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Word_count"},"word count"),", dataset aggregation, etc.).Take a look at the dedicated folder for viewing the demos in a notebook format, with no installation needed. Alternatively, you can find the collection of examples on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g122e31b6546_0_0"},"slides"),"."),(0,o.kt)("p",null,"When researching a path to compute, its helpful to compare the verbosity and complexity between APIs.\nFor example, implementing a simple ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Word_count"},"word count")," job ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks/blob/main/sample-code/word-count/pandas.ipynb"},"in Pandas")," is concise and can be achieved just by chaining methods, while ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks/blob/main/sample-code/word-count/hadoop.ipynb"},"the Hadoop implementation")," is far less intuitive, mainly because it's bound to use ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/MapReduce"},"the Map-Reduce paradigm"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks#sample-code"},"Setup instructions")," guide you through the installation process if you'd like to run the examples yourself -- give it a try to get an idea of how a simple single-node setup work."),(0,o.kt)("h3",{id:"benchmarks"},"Benchmarks"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks"},"code repository")," here shares benchmark scripts that run a parallel workload on a large dataset, its time its execution, and log resource usage. Explore the related section to familiarize yourself with the rough edges of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks#benchmarks"},"the installation process"),"."),(0,o.kt)("p",null,"You can choose to spawn either a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks/blob/main/installation/SINGLE-NODE.md"},"single-node")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks/blob/main/installation/MULTI-NODE.md"},"multi-node")," cluster. Trying out ",(0,o.kt)("em",{parentName:"p"},"both")," options gives a firsthand experience with the local-to-cluster hurdles, as well as a look at the complexities around installing a framework like Hadoop."),(0,o.kt)("p",null,"The benchmarked task is a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Word_count"},"word count")," job processing a dataset containing +1.7B words. The plot below reports the benchmark running time for each framework. In the chart, a missing bar implies that the tool doesn't support a fully-fledged multi-node set-up (i.e can only scale vertically)."),(0,o.kt)("p",null,"Performance across the landscape can vary 10x, and that behavior is expected, because Pandas is not a big-data tool and Hadoop was not really designed to perform well on a single-node setup. Its surprising to learn that only Spark and Snowflake provide an efficient setup combined with quick processing and very low resource usage."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compute Framework Benchmarks",src:t(1253).Z,width:"1246",height:"766"})),(0,o.kt)("p",null,"Check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g11c07429d0d_0_1091"},"the slides for a complete report on the benchmark results")," or dive into the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/winderai/bacalhau-landscape-analysis-benchmarks"},"code repository")," to spin up a cluster and run the benchmarks yourself."),(0,o.kt)("h2",{id:"key-findings"},"Key findings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"General")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modern frameworks must be intuitive, and shouldn't impose a byzantine approach like ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MapReduce"},"MapReduce")," (see Hadoop). High-level API is a must."),(0,o.kt)("li",{parentName:"ul"},"Installation is often a hurdle that should be simplified to allow for an easier onboarding experience."),(0,o.kt)("li",{parentName:"ul"},"Declarative pipelines aren't yet established in these technologies."),(0,o.kt)("li",{parentName:"ul"},"Support for repeatable containerized jobs is needed. None of the frameworks reviewed provide an effective way to package dependencies (",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g13641fb0d49_8_0"},"see Spark/Hadoop"),")."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g11c07429d0d_0_1178"},"local to multi-node cluster journey")," is quite bumpy, and requires additional installations, configurations, and even a different approach to writing code. This should be simplified going forward.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Benchmark")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In Multi-node setups, you may need to ",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g13641fb0d49_8_6"},"optimize the cluster size"),". (see Dask, Hadoop)"),(0,o.kt)("li",{parentName:"ul"},"Tested vanilla configurations: tweaking knobs improves performance but adds complexity. Modern tools must provide an out-of-the-box experience (",(0,o.kt)("a",{parentName:"li",href:"https://docs.google.com/presentation/d/1wOh-ASGshgc1Ivkoyaz9zGpVGTxX9LDMZQB4-eXOBP4/edit#slide=id.g11cf604b99b_0_236"},"see Snowflake setup"),")."),(0,o.kt)("li",{parentName:"ul"},"Except for Spark, these tools have poor performance with unsharded large files (i.e. strive to parallelize) -- a real use case will require additional data preparation upstream."),(0,o.kt)("li",{parentName:"ul"},"These tools are optimized to tackle different use cases, so a different task may vary results. Other tools strive to be as generic as possible (see Spark, Dask).")))}u.isMDXComponent=!0},1253:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/landscape-benchmarks-a8f79eaf34970d6935609f81c6be6815.png"},746:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/landscape-table-0d853357138e4031db46e01729a024d6.png"},6925:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/landscape-98f784b9f0ce01f307e79f3d83183d9d.png"},3471:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/summary_video-29ce8112622d71d8d0f5f87e4773e58f.png"}}]);