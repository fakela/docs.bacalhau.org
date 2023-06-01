"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3491],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>h});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Amplify",sidebar_position:1,description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data."},i="Bacalhau Amplify",l={unversionedId:"integration/amplify",id:"integration/amplify",title:"Bacalhau Amplify",description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data.",source:"@site/docs/integration/amplify.md",sourceDirName:"integration",slug:"/integration/amplify",permalink:"/integration/amplify",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/integration/amplify.md",tags:[],version:"current",lastUpdatedAt:1685606774,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Amplify",sidebar_position:1,description:"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data."},sidebar:"documentationSidebar",previous:{title:"Apache Airflow",permalink:"/integration/apache-airflow"},next:{title:"Community",permalink:"/community"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What is Bacalhau Amplify?",id:"what-is-bacalhau-amplify",level:3},{value:"Who is Bacalhau Amplify For?",id:"who-is-bacalhau-amplify-for",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Beginners -- Use the UI and the Hosted Service",id:"beginners----use-the-ui-and-the-hosted-service",level:3},{value:"Developers -- As a Service -- Use the Amplify API",id:"developers----as-a-service----use-the-amplify-api",level:3},{value:"On-Prem Developers -- Use the Amplify Container",id:"on-prem-developers----use-the-amplify-container",level:3},{value:"Advanced Users -- Use the Amplify Binary",id:"advanced-users----use-the-amplify-binary",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Database",id:"database",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Creating New Workflows and Jobs",id:"creating-new-workflows-and-jobs",level:3},{value:"Developer Documentation",id:"developer-documentation",level:2}],u={toc:p},c="wrapper";function d(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bacalhau-amplify"},"Bacalhau Amplify"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Bacalhau Amplify is a tool for automatically explaining, enriching, and enhancing your data. This document explains how it works and how to use it."),(0,r.kt)("h3",{id:"what-is-bacalhau-amplify"},"What is Bacalhau Amplify?"),(0,r.kt)("p",null,"Amplify is both a service and a tool that leverages the power of Bacalhau to automatically run a wide range of data engineering tasks on your data."),(0,r.kt)("p",null,"It works by running a separate service, the Amplify daemon, that hosts a bundled UI and API, and all of the logic to manage jobs and communicate with executors."),(0,r.kt)("p",null,"It is designed to be easily extended and used in a variety of deployment scenarios."),(0,r.kt)("h3",{id:"who-is-bacalhau-amplify-for"},"Who is Bacalhau Amplify For?"),(0,r.kt)("p",null,"Amplify is for anyone who wants to automatically run data engineering tasks on their data. You can choose to use the hosted service or deploy it yourself."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"There are four ways you can leverage Amplify, depending on your needs."),(0,r.kt)("h3",{id:"beginners----use-the-ui-and-the-hosted-service"},"Beginners -- Use the UI and the Hosted Service"),(0,r.kt)("p",null,"If you're just getting started with Bacalhau, or you don't want to manage your own infrastructure, you can use the hosted Amplify UI."),(0,r.kt)("p",null,"To get started, visit ",(0,r.kt)("a",{parentName:"p",href:"http://amplify.bacalhau.org"},"amplify.bacalhau.org")," and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Submit a Job")," button on the dashboard."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This currently only accepts a CID as an input.")),(0,r.kt)("h3",{id:"developers----as-a-service----use-the-amplify-api"},"Developers -- As a Service -- Use the Amplify API"),(0,r.kt)("p",null,"If you're a developer and you want to integrate Amplify into your own application, you can use the Amplify API."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/bacalhau-project/amplify/main/api/openapi.yaml"},"browse the OpenAPI specification on the Swagger Editor"),"."),(0,r.kt)("h3",{id:"on-prem-developers----use-the-amplify-container"},"On-Prem Developers -- Use the Amplify Container"),(0,r.kt)("p",null,"If you're a developer and you want to run Amplify on your own infrastructure, you can use the Amplify container."),(0,r.kt)("p",null,"To start Amplify as a service, like the hosted version, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080 ghcr.io/bacalhau-project/amplify:latest serve\n")),(0,r.kt)("p",null,"To run a single job without starting the service, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run ghcr.io/bacalhau-project/amplify:latest run QmS8ioZzB8foNEwFmJZTVJT1se5ycgRuc1Ey5fjHfZi5wb\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can replace that CID with your own!")),(0,r.kt)("h3",{id:"advanced-users----use-the-amplify-binary"},"Advanced Users -- Use the Amplify Binary"),(0,r.kt)("p",null,"If you're an advanced user and you want to bundle amplify, then you can use the Amplify binary, or indeed the raw ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/amplify/"},"Go code"),"."),(0,r.kt)("p",null,"You can find the most recent binary builds on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/amplify/releases"},"releases page"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the latest version for your platform."),(0,r.kt)("li",{parentName:"ol"},"Untar the file."),(0,r.kt)("li",{parentName:"ol"},"Make the binary executable and place it in a location that is on the PATH.")),(0,r.kt)("p",null,"Now you can run the binary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"amplify serve # for the service\n# or\namplify run QmS8ioZzB8foNEwFmJZTVJT1se5ycgRuc1Ey5fjHfZi5wb # for a single job\n")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Amplify can be configured using parameters or environment variables. "),(0,r.kt)("p",null,"Get the most recent configuration options by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," to the subcommand of your choice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run ghcr.io/bacalhau-project/amplify:latest serve -h\n")),(0,r.kt)("h3",{id:"database"},"Database"),(0,r.kt)("p",null,"By default, Amplify runs with an in-memory database. But that implementation is very bare-bones and obviously you will lose historical information when it restarts. We recommend running Amplify with a PostgreSQL database."),(0,r.kt)("p",null,"The instructions below describe how to start a PostgreSQL database using Docker. You can also use a managed database service like ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/rds/postgresql/"},"Amazon RDS")," or ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sql/docs/postgres"},"Google Cloud SQL"),"."),(0,r.kt)("p",null,"Start a PostgreSQL database and then point Amplify to it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"AMPLIFY_DB_URI")," environment variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker network create anet\ndocker run -p 5432:5432 --network=anet --name amplify-postgres -e POSTGRES_DB=amplify -e POSTGRES_PASSWORD=mysecretpassword -d postgres\ndocker run -p 8080:8080 --network=anet --env AMPLIFY_DB_URI="postgres://postgres:mysecretpassword@amplify-postgres.anet/amplify?sslmode=disable" ghcr.io/bacalhau-project/amplify:latest serve\n')),(0,r.kt)("h3",{id:"triggers"},"Triggers"),(0,r.kt)("p",null,"Amplify workflows are executed via a trigger. As of May 2023, Amplify supports the following triggers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"API -- A trigger that accepts a POST request with a CID as the body."),(0,r.kt)("li",{parentName:"ul"},"IPFS-Search.com -- A trigger that watches an IPFS-Search.com index for new IPFS CIDs. This must be enabled in the configuration.")),(0,r.kt)("h3",{id:"creating-new-workflows-and-jobs"},"Creating New Workflows and Jobs"),(0,r.kt)("p",null,"It's really easy to add new workflows and jobs to Amplify. You can see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/amplify/blob/main/config.yaml"},"existing workflows and jobs in the ",(0,r.kt)("inlineCode",{parentName:"a"},"config.yaml")," file in the repository"),"."),(0,r.kt)("p",null,"Jobs are simply Docker containers that are executed in Bacalhau. Workflows connect jobs into an execution graph. To find out more please read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/amplify/tree/main/docs"},"developer documentation"),"."),(0,r.kt)("h2",{id:"developer-documentation"},"Developer Documentation"),(0,r.kt)("p",null,"All of the documentation intended for a developer audience is located in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/amplify/tree/main/docs"},"developer documentation of the repository"),"."))}d.isMDXComponent=!0}}]);