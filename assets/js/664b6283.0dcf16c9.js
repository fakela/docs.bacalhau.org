"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Observability",sidebar_position:200},i="Observability",l={unversionedId:"running-node/observability",id:"running-node/observability",title:"Observability",description:"Bacalhau supports the three main 'pillars' of observability - logging, metrics and tracing. Bacalhau uses the OpenTelemetry Go SDK for metrics and tracing, which can be configured using the standard environment variables. Exporting metrics and traces can be as simple as setting the OTELEXPORTEROTLPPROTOCOL and OTELEXPORTEROTLPENDPOINT environment variables. Custom code is used for logging as the OpenTelemetry Go SDK currently doesn't support logging.",source:"@site/docs/running-node/observability.md",sourceDirName:"running-node",slug:"/running-node/observability",permalink:"/running-node/observability",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/observability.md",tags:[],version:"current",lastUpdatedAt:1685606774,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:200,frontMatter:{sidebar_label:"Observability",sidebar_position:200},sidebar:"documentationSidebar",previous:{title:"Windows Support",permalink:"/running-node/windows-support"},next:{title:"SDK",permalink:"/sdk"}},s={},c=[{value:"Logging",id:"logging",level:2},{value:"Metrics",id:"metrics",level:2},{value:"Tracing",id:"tracing",level:2},{value:"Viewing",id:"viewing",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"observability"},"Observability"),(0,a.kt)("p",null,"Bacalhau supports the three main 'pillars' of observability - logging, metrics and tracing. Bacalhau uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-go"},"OpenTelemetry Go SDK")," for metrics and tracing, which can be configured using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-specification/blob/main/specification/protocol/exporter.md"},"standard environment variables"),". Exporting metrics and traces can be as simple as setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_OTLP_PROTOCOL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_OTLP_ENDPOINT")," environment variables. Custom code is used for logging as the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-go#project-status"},"OpenTelemetry Go SDK currently doesn't support logging"),"."),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Logging in Bacalhau outputs in human-friendly format to stderr at ",(0,a.kt)("inlineCode",{parentName:"p"},"INFO")," level by default, but this can be changed by two environment variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOG_LEVEL")," - Can be one of ",(0,a.kt)("inlineCode",{parentName:"li"},"trace"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"warn")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"fatal")," to output more or fewer logging messages as required"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LOG_TYPE")," - Can be one of the following values:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," - output logs to stderr in a human-friendly format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json")," - log messages outputted to stdout in JSON format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"combined")," - log JSON formatted messages to stdout and human-friendly format to stderr")))),(0,a.kt)("p",null,"Log statements should include the relevant trace, span and job ID so it can be tracked back to the work being performed. "),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Bacalhau produces a number of different metrics including those aroundf the libp2p resource manager (",(0,a.kt)("inlineCode",{parentName:"p"},"rcmgr"),"), performance\nof the requester HTTP API and number of jobs accepted/completed/received."),(0,a.kt)("h2",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Traces are produced for all major pieces of work when processing a job, although the naming of some spans is still being worked on. You can find relevant traces covering working on a job by searching for the ",(0,a.kt)("inlineCode",{parentName:"p"},"jobid")," attribute."),(0,a.kt)("h2",{id:"viewing"},"Viewing"),(0,a.kt)("p",null,"The metrics and traces can easily be forwarded to a variety of different services as we use OpenTelemetry, such as Honeycomb or Datadog."),(0,a.kt)("p",null,"To view the data locally, or simply to not use a SaaS offering, you can start up Jaeger and Prometheus placing these three files into a directory then running ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose start")," while running Bacalhau with the\n",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_OTLP_PROTOCOL=grpc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317")," environment variables."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yaml"',title:'"docker-compose.yaml"'},'version: "2"\nservices:\n\n  jaeger-all-in-one:\n    image: "jaegertracing/all-in-one:1.42"\n    restart: "always"\n    ports:\n      - "16686:16686" # Jaeger UI\n      - "14250:14250" # Jaeger gRPC endpoint\n\n  otel-collector:\n    image: "otel/opentelemetry-collector:0.70.0"\n    restart: "always"\n    command: ["--config=/etc/otel-collector-config.yaml"]\n    volumes:\n      - "./otel-collector-config.yaml:/etc/otel-collector-config.yaml"\n    ports:\n      - "8888:8888"   # Prometheus metrics exposed by the collector\n      - "8889:8889"   # Prometheus exporter metrics\n      - "13133:13133" # health_check extension\n      - "4317:4317"   # OTLP gRPC receiver\n    depends_on:\n      - "jaeger-all-in-one"\n      - "prometheus"\n\n  prometheus:\n    container_name: "prometheus"\n    image: "prom/prometheus:v2.42.0"\n    restart: "always"\n    volumes:\n      - "./prometheus.yaml:/etc/prometheus/prometheus.yml"\n    ports:\n      - "9090:9090" # Prometheus UI\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="otel-collector-config.yaml"',title:'"otel-collector-config.yaml"'},'receivers:\n  otlp:\n    protocols:\n      grpc:\n\nexporters:\n  prometheus:\n    endpoint: "0.0.0.0:8889"\n\n  jaeger:\n    endpoint: jaeger-all-in-one:14250\n    tls:\n      insecure: true\n\nprocessors:\n  batch:\n\nextensions:\n  health_check:\n\nservice:\n  extensions: [health_check]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [jaeger]\n    metrics:\n      receivers: [otlp]\n      processors: [batch]\n      exporters: [prometheus]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="prometheus.yaml"',title:'"prometheus.yaml"'},"scrape_configs:\n  - job_name: 'otel-collector'\n    scrape_interval: 10s\n    static_configs:\n      - targets: ['otel-collector:8889']\n      - targets: ['otel-collector:8888']\n")))}u.isMDXComponent=!0}}]);