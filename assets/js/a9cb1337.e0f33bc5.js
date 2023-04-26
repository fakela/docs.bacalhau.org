"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Bacalhau Python SDK",sidebar_position:1},i="Bacalhau Python SDK :snake:",l={unversionedId:"sdk/python-sdk",id:"sdk/python-sdk",title:"Bacalhau Python SDK :snake:",description:"This is the official Python SDK for Bacalhau, named bacalhau-sdk.",source:"@site/docs/sdk/python-sdk.md",sourceDirName:"sdk",slug:"/sdk/python-sdk",permalink:"/sdk/python-sdk",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/sdk/python-sdk.md",tags:[],version:"current",lastUpdatedAt:1682468199,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Bacalhau Python SDK",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"CLI Reference",permalink:"/all-flags"},next:{title:"Debugging Jobs",permalink:"/troubleshooting/debugging"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Install",id:"install",level:2},{value:"From PyPi:",id:"from-pypi",level:3},{value:"From source:",id:"from-source",level:3},{value:"Initialize",id:"initialize",level:2},{value:"Example Use",id:"example-use",level:2},{value:"Devstack",id:"devstack",level:2},{value:"Developers guide",id:"developers-guide",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bacalhau-python-sdk-"},"Bacalhau Python SDK \ud83d\udc0d"),(0,o.kt)("p",null,"This is the official Python SDK for Bacalhau, named ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau-sdk"),"."),(0,o.kt)("p",null,"It is a ",(0,o.kt)("strong",{parentName:"p"},"high-level")," SDK that ships the client-side logic (e.g. signing requests) needed to query the endpoints.\nPlease take a look at ",(0,o.kt)("a",{parentName:"p",href:"./examples"},"the examples")," for snippets to create, list and inspect jobs.\nUnder the hood, this SDK uses ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau-apiclient")," (autogenerated via ",(0,o.kt)("a",{parentName:"p",href:"https://swagger.io/tools/swagger-codegen/"},"Swagger"),"/OpenAPI) to interact with the API."),(0,o.kt)("p",null,"Please make sure to use this SDK library in your Python projects, instead of the lower level ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau-apiclient"),".\nThe latter is listed as a dependency of this SDK and will be installed automatically when you follow the installation instructions below."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"List, create and inspect Bacalhau jobs using Python objects \ud83c\udf88"),(0,o.kt)("li",{parentName:"ul"},"Use the production network, or set the following environment variables to target any Bacalhau network out there:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_HOST")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BACALHAU_API_PORT")))),(0,o.kt)("li",{parentName:"ul"},"Generate a key pair used to sign requests stored in the path specified by the ",(0,o.kt)("inlineCode",{parentName:"li"},"BACALHAU_DIR")," env var (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.bacalhau"),")")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"from-pypi"},"From PyPi:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ pip install bacalhau-sdk\n")),(0,o.kt)("h3",{id:"from-source"},"From source:"),(0,o.kt)("p",null,"Clone the public repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/bacalhau-project/bacalhau/\n")),(0,o.kt)("p",null,"Once you have a copy of the source, you can install it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd python/\n$ pip install .\n")),(0,o.kt)("h2",{id:"initialize"},"Initialize"),(0,o.kt)("p",null,"Likewise the Bacalhau CLI, this SDK uses a key pair to be stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"BACALHAU_DIR")," used for signing requests.\nIf a key pair is not found there, it will create one for you."),(0,o.kt)("h2",{id:"example-use"},"Example Use"),(0,o.kt)("p",null,"Let's submit a Hello World job and then fetch its output data's CID.\nWe start by importing this sdk, namely ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau_sdk"),", used to create and submit a job create request.\nThen we import ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau_apiclient")," (installed automatically with this sdk), it provides various object models that compose a job create request.\nThese are used to populate a simple python dictionary that will be passed over to the ",(0,o.kt)("inlineCode",{parentName:"p"},"submit")," util method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pprint\n\nfrom bacalhau_sdk.api import submit\nfrom bacalhau_sdk.config import get_client_id\nfrom bacalhau_apiclient.models.storage_spec import StorageSpec\nfrom bacalhau_apiclient.models.spec import Spec\nfrom bacalhau_apiclient.models.job_spec_language import JobSpecLanguage\nfrom bacalhau_apiclient.models.job_spec_docker import JobSpecDocker\nfrom bacalhau_apiclient.models.job_sharding_config import JobShardingConfig\nfrom bacalhau_apiclient.models.job_execution_plan import JobExecutionPlan\nfrom bacalhau_apiclient.models.deal import Deal\n\n\ndata = dict(\n    APIVersion=\'V1beta1\',\n    ClientID=get_client_id(),\n    Spec=Spec(\n        engine="Docker",\n        verifier="Noop",\n        publisher="Estuary",\n        docker=JobSpecDocker(\n            image="ubuntu",\n            entrypoint=["echo", "Hello World!"],\n        ),\n        language=JobSpecLanguage(job_context=None),\n        wasm=None,\n        resources=None,\n        timeout=1800,\n        outputs=[\n            StorageSpec(\n                storage_source="IPFS",\n                name="outputs",\n                path="/outputs",\n            )\n        ],\n        sharding=JobShardingConfig(\n            batch_size=1,\n            glob_pattern_base_path="/inputs",\n        ),\n        execution_plan=JobExecutionPlan(shards_total=0),\n        deal=Deal(concurrency=1, confidence=0, min_bids=0),\n        do_not_track=False,\n    ),\n)\n\npprint.pprint(submit(data))\n')),(0,o.kt)("p",null,"The script above prints the following object, the ",(0,o.kt)("inlineCode",{parentName:"p"},"job.metadata.id")," value is our newly created job id!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{'job': {'api_version': 'V1beta1',\n         'metadata': {'client_id': 'bae9c3b2adfa04cc647a2457e8c0c605cef8ed93bdea5ac5f19f94219f722dfe',\n                      'created_at': '2023-02-01T19:30:21.405209538Z',\n                      'id': '710a0bc2-81d1-4025-8f80-5327ca3ce170'},\n         'spec': {'Deal': {'Concurrency': 1},\n                  'Docker': {'Entrypoint': ['echo', 'Hello World!'],\n                             'Image': 'ubuntu'},\n                  'Engine': 'Docker',\n                  'ExecutionPlan': {'ShardsTotal': 1},\n                  'Language': {'JobContext': {}},\n                  'Network': {'Type': 'None'},\n                  'Publisher': 'Estuary',\n                  'Resources': {'GPU': ''},\n                  'Sharding': {'BatchSize': 1,\n                               'GlobPatternBasePath': '/inputs'},\n                  'Timeout': 1800,\n                  'Verifier': 'Noop',\n                  'Wasm': {'EntryModule': {}},\n                  'outputs': [{'Name': 'outputs',\n                               'StorageSource': 'IPFS',\n                               'path': '/outputs'}]},\n         'status': {'JobState': {},\n                    'Requester': {'RequesterNodeID': 'QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL',\n                                  'RequesterPublicKey': 'CAASpgIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDVRKPgCfY2fgfrkHkFjeWcqno+MDpmp8DgVaY672BqJl/dZFNU9lBg2P8Znh8OTtHPPBUBk566vU3KchjW7m3uK4OudXrYEfSfEPnCGmL6GuLiZjLf+eXGEez7qPaoYqo06gD8ROdD8VVse27E96LlrpD1xKshHhqQTxKoq1y6Rx4DpbkSt966BumovWJ70w+Nt9ZkPPydRCxVnyWS1khECFQxp5Ep3NbbKtxHNX5HeULzXN5q0EQO39UN6iBhiI34eZkH7PoAm3Vk5xns//FjTAvQw6wZUu8LwvZTaihs+upx2zZysq6CEBKoeNZqed9+Tf+qHow0P5pxmiu+or+DAgMBAAE='}}}}\n")),(0,o.kt)("p",null,"We can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"results")," method to fetch, among other fields, the output data's CID."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from bacalhau_sdk.api import results\n\nprint(results(job_id="710a0bc2-81d1-4025-8f80-5327ca3ce170"))\n')),(0,o.kt)("p",null,"The line above prints the following dictionary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"{'results': [{'data': {'cid': 'QmYEqqNDdDrsRhPRShKHzsnZwBq3F59Ti3kQmv9En4i5Sw',\n                       'metadata': None,\n                       'name': 'job-710a0bc2-81d1-4025-8f80-5327ca3ce170-shard-0-host-QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3',\n                       'path': None,\n                       'source_path': None,\n                       'storage_source': 'IPFS',\n                       'url': None},\n              'node_id': 'QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3',\n              'shard_index': None}]}\n")),(0,o.kt)("p",null,"Congrats, that was a good start! \ud83c\udf88\nPlease find more code snippets in ",(0,o.kt)("a",{parentName:"p",href:"./examples"},"the examples folder")," (more examples published in the near future)."),(0,o.kt)("h2",{id:"devstack"},"Devstack"),(0,o.kt)("p",null,"You can set the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"BACALHAU_API_HOST")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BACALHAU_API_PORT")," to point this SDK to your Bacalhau API local devstack"),(0,o.kt)("h2",{id:"developers-guide"},"Developers guide"),(0,o.kt)("p",null,"We use Poetry to manage this package, take a look at ",(0,o.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/"},"their official docs")," to install it.\nNote, all targets in the Makefile use poetry as well!"),(0,o.kt)("p",null,"To develop this SDK locally, create a dedicated poetry virtual environment and install the root package (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau_sdk"),") and its dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ poetry install --no-interaction --with test,dev -vvv\nCreating virtualenv bacalhau-sdk-9mIcLX8U-py3.9 in /Users/enricorotundo/Library/Caches/pypoetry/virtualenvs\nUsing virtualenv: /Users/enricorotundo/Library/Caches/pypoetry/virtualenvs/bacalhau-sdk-9mIcLX8U-py3.9\nInstalling dependencies from lock file\n...\n")),(0,o.kt)("p",null,"Note the line above installs the root package (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau_sdk"),") in editable mode, that is, any change to its source code is reflected immediately without the need for re-packaging and re-installing it. Easy peasy!"),(0,o.kt)("p",null,"Then install the pre-commit hooks and test it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ make install-pre-commit\n\n$ make pre-commit\n")))}d.isMDXComponent=!0}}]);