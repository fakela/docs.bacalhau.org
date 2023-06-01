"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"CLI Reference",sidebar_position:7},r="CLI Commands",l={unversionedId:"all-flags",id:"all-flags",title:"CLI Commands",description:"The following commands refer to bacalhau cli version v0.3.29.",source:"@site/docs/all-flags.md",sourceDirName:".",slug:"/all-flags",permalink:"/all-flags",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/all-flags.md",tags:[],version:"current",lastUpdatedAt:1685606774,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:7,frontMatter:{sidebar_label:"CLI Reference",sidebar_position:7}},s={},u=[{value:"Cancel",id:"cancel",level:2},{value:"Examples",id:"examples",level:4},{value:"Create",id:"create",level:2},{value:"Examples",id:"examples-1",level:4},{value:"UCAN Invocation format",id:"ucan-invocation-format",level:3},{value:"Examples",id:"examples-2",level:4},{value:"Describe",id:"describe",level:2},{value:"Example",id:"example",level:4},{value:"Docker run",id:"docker-run",level:2},{value:"Get",id:"get",level:2},{value:"Example",id:"example-1",level:4},{value:"List",id:"list",level:2},{value:"Example",id:"example-2",level:4},{value:"Logs",id:"logs",level:2},{value:"Examples",id:"examples-3",level:4},{value:"Run Python",id:"run-python",level:2},{value:"Serve",id:"serve",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cli-commands"},"CLI Commands"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The following commands refer to bacalhau cli version ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.29"),".\nFor installing or upgrading a client, follow the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"installation page"),".\nRun ",(0,a.kt)("inlineCode",{parentName:"p"},"bacalhau version")," in a terminal to check what version you have.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\u276f bacalhau --help\nCompute over data\n\nUsage:\n  bacalhau [command]\n\nAvailable Commands:\n  cancel      Cancel a previously submitted job\n  completion  Generate the autocompletion script for the specified shell\n  create      Create a job using a json or yaml file.\n  describe    Describe a job on the network\n  devstack    Start a cluster of bacalhau nodes for testing and development\n  docker      Run a docker job on the network (see run subcommand)\n  get         Get the results of a job\n  help        Help about any command\n  id          Show bacalhau node id info\n  list        List jobs on the network\n  logs        Follow logs from a currently executing job\n  run         Run a job on the network (see subcommands for supported flavors)\n  serve       Start the bacalhau compute node\n  validate    validate a job using a json or yaml file.\n  version     Get the client and server version.\n\nFlags:\n      --api-host string   The host for the client and server to communicate on (via REST). Ignored if BACALHAU_API_HOST environment variable is set. (default "bootstrap.production.bacalhau.org")\n      --api-port int      The port for the client and server to communicate on (via REST). Ignored if BACALHAU_API_PORT environment variable is set. (default 1234)\n  -h, --help              help for bacalhau\n\nUse "bacalhau [command] --help" for more information about a command.\n')),(0,a.kt)("h2",{id:"cancel"},"Cancel"),(0,a.kt)("p",null,"Cancels a job that was previously submitted and stops it running if it has not yet completed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cancel a previously submitted job.\n\nUsage:\n  ./bin/darwin_arm64/bacalhau cancel [id] [flags]\n\nFlags:\n  -h, --help    help for cancel\n      --quiet   Do not print anything to stdout or stderr\n")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Examples:\n  # Cancel a previously submitted job\n  bacalhau cancel 51225160-807e-48b8-88c9-28311c7899e1\n\n  # Cancel a job, with a short ID.\n  bacalhau cancel ebd9bf2f\n")),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"Submit a job to the network in a declarative way by writing a jobspec instead of writing a command.\nJSON and YAML formats are accepted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Create a job from a file or from stdin.\n\n JSON and YAML formats are accepted.\n\nUsage:\n  bacalhau create [flags]\n\nFlags:\n      --download                    Download the results and print stdout once the job has completed (implies --wait).\n      --download-timeout-secs int   Timeout duration for IPFS downloads. (default 10)\n  -g, --gettimeout int              Timeout for getting the results of a job in --wait (default 10)\n  -h, --help                        help for create\n      --ipfs-swarm-addrs string     Comma-separated list of IPFS nodes to connect to.\n      --local                       Run the job locally. Docker is required\n      --output-dir string           Directory to write the output to. (default ".")\n      --wait                        Wait for the job to finish.\n      --wait-timeout-secs int       When using --wait, how many seconds to wait for the job to complete before giving up. (default 600)\n')),(0,a.kt)("h4",{id:"examples-1"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Examples:\n  # Create a job using the data in job.yaml\n  bacalhau create ./job.yaml\n\n  # Create a new job from an already executed job\n  bacalhau describe 6e51df50 | bacalhau create -\n")),(0,a.kt)("p",null,"An example job in YAML format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n    engine: Docker\n    verifier: Noop\n    publisher: IPFS\n    docker:\n        image: ubuntu\n        entryPoint:\n            - echo\n            - Hello\n            - World\n    outputs:\n        - name: outputs\n          path: /outputs\ndeal:\n    concurrency: 1\n")),(0,a.kt)("h3",{id:"ucan-invocation-format"},"UCAN Invocation format"),(0,a.kt)("p",null,"You can also specify a job to run using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ucan-wg/invocation"},"UCAN Invocation")," object in JSON format. For the fields supported by Bacalhau, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/pkg/model/schemas/bacalhau.ipldsch"},"IPLD schema"),"."),(0,a.kt)("p",null,"There is no support for sharding, concurrency or minimum bidding for these jobs."),(0,a.kt)("h4",{id:"examples-2"},"Examples"),(0,a.kt)("p",null,"An example UCAN Invocation that runs the same job as the above example would look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "with": "ubuntu",\n    "do": "docker/run",\n    "inputs": {\n        "entrypoint": ["echo", "hello", "world"],\n        "workdir": "/",\n        "mounts": {},\n        "outputs": {\n            "/outputs": ""\n        },\n    },\n    "meta": {\n        "bacalhau/config": {\n            "verifier": 1,\n            "publisher": 4,\n        }\n    }\n}\n')),(0,a.kt)("p",null,"An example UCAN Invocation that runs a WebAssembly job might look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "with": "ipfs://bafybeig7mdkzcgpacpozamv7yhhaelztfrnb6ozsupqqh7e5uyqdkijegi",\n    "do": "wasm32-wasi/run",\n    "inputs": {\n        "entrypoint": "_start",\n        "parameters": ["/inputs/data.tar.gz"],\n        "mounts": {\n            "/inputs": "https://www.example.com/data.tar.gz"\n        },\n        "outputs": {\n            "/outputs": ""\n        },\n        "env": {\n            "HELLO": "world"\n        }\n    },\n    "meta": {\n    "bacalhau/config": {\n        "verifier": 2,\n        "publisher": 4,\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"describe"},"Describe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Full description of a job, in yaml format. Use 'bacalhau list' to get a list of all ids. Short form and long form of the job id are accepted.\n\nUsage:\n  bacalhau describe [id] [flags]\n\nFlags:\n  -h, --help             help for describe\n      --include-events   Include events in the description (could be noisy)\n      --spec             Output Jobspec to stdout\n")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Examples:\n  # Describe a job with the full ID\n  bacalhau describe e3f8c209-d683-4a41-b840-f09b88d087b9\n\n  # Describe a job with the a shortened ID\n  bacalhau describe 47805f5c\n\n  # Describe a job and include all server and local events\n  bacalhau describe --include-events b6ad164a\n")),(0,a.kt)("h2",{id:"docker-run"},"Docker run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Runs a job using the Docker executor on the node.\n\nUsage:\n  bacalhau docker run [flags] IMAGE[:TAG|@DIGEST] [COMMAND] [ARG...]\n\nExamples:\n  # Run a Docker job, using the image 'dpokidov/imagemagick', with a CID mounted at /input_images and an output volume mounted at /outputs in the container. All flags after the '--' are passed directly into the container for execution.\n  bacalhau docker run \\\n  -i src=ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72,dst=/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n\n  # Dry Run: check the job specification before submitting it to the bacalhau network\n  bacalhau docker run --dry-run ubuntu echo hello\n\n  # Save the job specification to a YAML file\n  bacalhau docker run --dry-run ubuntu echo hello > job.yaml\n\n  # Specify an image tag (default is 'latest' - using a specific tag other than 'latest' is recommended for reproducibility)\n  bacalhau docker run ubuntu:bionic echo hello\n\n  # Specify an image digest\n  bacalhau docker run ubuntu@sha256:35b4f89ec2ee42e7e12db3d107fe6a487137650a2af379bbd49165a1494246ea echo hello\n\nFlags:\n  -c, --concurrency int                  How many nodes should run the job (default 1)\n      --confidence int                   The minimum number of nodes that must agree on a verification result\n      --cpu string                       Job CPU cores (e.g. 500m, 2, 8).\n      --domain stringArray               Domain(s) that the job needs to access (for HTTP networking)\n      --download                         Should we download the results once the job is complete?\n      --download-timeout-secs duration   Timeout duration for IPFS downloads. (default 5m0s)\n      --dry-run                          Do not submit the job, but instead print out what will be submitted\n      --engine string                    What executor engine to use to run the job (default \"docker\")\n  -e, --env strings                      The environment variables to supply to the job (e.g. --env FOO=bar --env BAR=baz)\n      --filplus                          Mark the job as a candidate for moderation for FIL+ rewards.\n  -f, --follow                           When specified will follow the output from the job as it runs\n  -g, --gettimeout int                   Timeout for getting the results of a job in --wait (default 10)\n      --gpu string                       Job GPU requirement (e.g. 1, 2, 8).\n  -h, --help                             help for run\n      --id-only                          Print out only the Job ID on successful submission.\n  -i, --input storage                    Mount URIs as inputs to the job. Can be specified multiple times. Format: src=URI,dst=PATH[,opt=key=value]\n                                         Examples:\n                                         # Mount IPFS CID to /inputs directory\n                                         -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72\n\n                                         # Mount S3 object to a specific path\n                                         -i s3://bucket/key,dst=/my/input/path\n\n                                         # Mount S3 object with specific endpoint and region\n                                         -i src=s3://bucket/key,dst=/my/input/path,opt=endpoint=https://s3.example.com,opt=region=us-east-1\n\n      --ipfs-swarm-addrs string          Comma-separated list of IPFS nodes to connect to. (default \"/ip4/35.245.115.191/tcp/1235/p2p/QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL,/ip4/35.245.61.251/tcp/1235/p2p/QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF,/ip4/35.245.251.239/tcp/1235/p2p/QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3\")\n  -l, --labels strings                   List of labels for the job. Enter multiple in the format '-l a -l 2'. All characters not matching /a-zA-Z0-9_:|-/ and all emojis will be stripped.\n      --local                            Run the job locally. Docker is required\n      --memory string                    Job Memory requirement (e.g. 500Mb, 2Gb, 8Gb).\n      --min-bids int                     Minimum number of bids that must be received before concurrency-many bids will be accepted (at random)\n      --network network-type             Networking capability required by the job (default None)\n      --node-details                     Print out details of all nodes (overridden by --id-only).\n      --output-dir string                Directory to write the output to.\n  -o, --output-volumes strings           name:path of the output data volumes. 'outputs:/outputs' is always added.\n  -p, --publisher publisher              Where to publish the result of the job (default Estuary)\n      --raw                              Download raw result CIDs instead of merging multiple CIDs into a single result\n  -s, --selector string                  Selector (label query) to filter nodes on which this job can be executed, supports '=', '==', and '!='.(e.g. -s key1=value1,key2=value2). Matching objects must satisfy all of the specified label constraints.\n      --skip-syntax-checking             Skip having 'shellchecker' verify syntax of the command\n      --timeout float                    Job execution timeout in seconds (e.g. 300 for 5 minutes and 0.1 for 100ms) (default 1800)\n      --verifier string                  What verification engine to use to run the job (default \"noop\")\n      --wait                             Wait for the job to finish. (default true)\n      --wait-timeout-secs int            When using --wait, how many seconds to wait for the job to complete before giving up. (default 600)\n  -w, --workdir string                   Working directory inside the container. Overrides the working directory shipped with the image (e.g. via WORKDIR in Dockerfile).\n")),(0,a.kt)("h2",{id:"get"},"Get"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Get the results of the job, including `stdout` and `stderr`.\n\nUsage:\n  bacalhau get [id] [flags]\n\nFlags:\n      --download-timeout-secs int   Timeout duration for IPFS downloads. (default 600)\n  -h, --help                        help for get\n      --ipfs-swarm-addrs string     Comma-separated list of IPFS nodes to connect to.\n      --output-dir string           Directory to write the output to. (default ".")\n')),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Get the results of a job.\nbacalhau get 51225160-807e-48b8-88c9-28311c7899e1\n\n# Get the results of a job, with a short ID.\nbacalhau get ebd9bf2f\n")),(0,a.kt)("h2",{id:"list"},"List"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'List jobs on the network.\n\nUsage:\n  bacalhau list [flags]\n\nFlags:\n      --all                Fetch all jobs from the network (default is to filter those belonging to the user). This option may take a long time to return, please use with caution.\n  -h, --help               help for list\n      --hide-header        do not print the column headers.\n      --id-filter string   filter by Job List to IDs matching substring.\n      --no-style           remove all styling from table output.\n  -n, --number int         print the first NUM jobs instead of the first 10. (default 10)\n      --output string      The output format for the list of jobs (json or text) (default "text")\n      --reverse            reverse order of table - for time sorting, this will be newest first. Use \'--reverse=false\' to sort oldest first (single quotes are required). (default true)\n      --sort-by Column     sort by field, defaults to creation time, with newest first [Allowed "id", "created_at"]. (default created_at)\n      --wide               Print full values in the table results\n')),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# List jobs on the network\nbacalhau list\n\n# List jobs and output as json\nbacalhau list --output json\n")),(0,a.kt)("h2",{id:"logs"},"Logs"),(0,a.kt)("p",null,"Retrieves the log output (stdout, and stderr) from a job.\nIf the job is still running it is possible to follow the logs after the previously generated logs are retrieved."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Follow logs from a currently executing job\n\nUsage:\n  ./bin/darwin_arm64/bacalhau logs [flags] [id]\n\nFlags:\n  -f, --follow   Follow the logs in real-time after retrieving the current logs.\n  -h, --help     help for logs\n")),(0,a.kt)("h4",{id:"examples-3"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Examples:\n  # Follow logs for a previously submitted job\n  bacalhau logs -f 51225160-807e-48b8-88c9-28311c7899e1\n\n  # Retrieve the log output with a short ID, but don't follow any newly generated logs\n  bacalhau logs ebd9bf2f\n")),(0,a.kt)("h2",{id:"run-python"},"Run Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Runs a job by compiling language file to WASM on the node.\n\nUsage:\n  bacalhau run python [flags]\n\nExamples:\n  # Run a simple "Hello, World" script within the current directory\n  bacalhau run python -- hello-world.py\n\nFlags:\n  -c, --command string                   Program passed in as string (like python)\n      --concurrency int                  How many nodes should run the job (default 1)\n      --confidence int                   The minimum number of nodes that must agree on a verification result\n      --context-path string              Path to context (e.g. python code) to send to server (via public IPFS network) for execution (max 10MiB). Set to empty string to disable (default ".")\n      --deterministic                    Enforce determinism: run job in a single-threaded wasm runtime with no sources of entropy. NB: this will make the python runtime executein an environment where only some libraries are supported, see https://pyodide.org/en/stable/usage/packages-in-pyodide.html (default true)\n      --download                         Should we download the results once the job is complete?\n      --download-timeout-secs duration   Timeout duration for IPFS downloads. (default 5m0s)\n  -e, --env strings                      The environment variables to supply to the job (e.g. --env FOO=bar --env BAR=baz)\n  -f, --follow                           When specified will follow the output from the job as it runs\n  -g, --gettimeout int                   Timeout for getting the results of a job in --wait (default 10)\n  -h, --help                             help for python\n      --id-only                          Print out only the Job ID on successful submission.\n  -i, --input storage                    Mount URIs as inputs to the job. Can be specified multiple times. Format: src=URI,dst=PATH[,opt=key=value]\n                                         Examples:\n                                         # Mount IPFS CID to /inputs directory\n                                         -i ipfs://QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72\n\n                                         # Mount S3 object to a specific path\n                                         -i s3://bucket/key,dst=/my/input/path\n\n                                         # Mount S3 object with specific endpoint and region\n                                         -i src=s3://bucket/key,dst=/my/input/path,opt=endpoint=https://s3.example.com,opt=region=us-east-1\n\n      --ipfs-swarm-addrs string          Comma-separated list of IPFS nodes to connect to. (default "/ip4/35.245.115.191/tcp/1235/p2p/QmdZQ7ZbhnvWY1J12XYKGHApJ6aufKyLNSvf8jZBrBaAVL,/ip4/35.245.61.251/tcp/1235/p2p/QmXaXu9N5GNetatsvwnTfQqNtSeKAD6uCmarbh3LMRYAcF,/ip4/35.245.251.239/tcp/1235/p2p/QmYgxZiySj3MRkwLSL4X2MF5F9f2PMhAE3LV49XkfNL1o3")\n  -l, --labels strings                   List of labels for the job. Enter multiple in the format \'-l a -l 2\'. All characters not matching /a-zA-Z0-9_:|-/ and all emojis will be stripped.\n      --local                            Run the job locally. Docker is required\n      --min-bids int                     Minimum number of bids that must be received before concurrency-many bids will be accepted (at random)\n      --node-details                     Print out details of all nodes (overridden by --id-only).\n      --output-dir string                Directory to write the output to.\n  -o, --output-volumes strings           name:path of the output data volumes\n      --raw                              Download raw result CIDs instead of merging multiple CIDs into a single result\n  -r, --requirement string               Install from the given requirements file. (like pip)\n      --timeout float                    Job execution timeout in seconds (e.g. 300 for 5 minutes and 0.1 for 100ms) (default 1800)\n      --wait                             Wait for the job to finish. (default true)\n      --wait-timeout-secs int            When using --wait, how many seconds to wait for the job to complete before giving up. (default 600)\n')),(0,a.kt)("h2",{id:"serve"},"Serve"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Start a bacalhau node.\n\nUsage:\n  bacalhau serve [flags]\n\nExamples:\n  # Start a private bacalhau requester node\n  bacalhau serve\n  # or\n  bacalhau serve --node-type requester\n  \n  # Start a private bacalhau hybrid node that acts as both compute and requester\n  bacalhau serve --node-type compute --node-type requester\n  # or\n  bacalhau serve --node-type compute,requester\n  \n  # Start a private bacalhau node with a persistent local IPFS node\n  BACALHAU_SERVE_IPFS_PATH=/data/ipfs bacalhau serve\n  \n  # Start a public bacalhau requester node\n  bacalhau serve --peer env --private-internal-ipfs=false\n\nFlags:\n      --estuary-api-key string                           The API key used when using the estuary API.\n      --filecoin-unsealed-path string                    The go template that can turn a filecoin CID into a local filepath with the unsealed data.\n  -h, --help                                             help for serve\n      --host string                                      The host to listen on (for both api and swarm connections). (default "0.0.0.0")\n      --ipfs-connect string                              The ipfs host multiaddress to connect to, otherwise an in-process IPFS node will be created if not set.\n      --ipfs-swarm-addr strings                          IPFS multiaddress to connect the in-process IPFS node to - cannot be used with --ipfs-connect.\n      --job-execution-timeout-bypass-client-id strings   List of IDs of clients that are allowed to bypass the job execution timeout check\n      --job-selection-accept-networked                   Accept jobs that require network access.\n      --job-selection-data-locality string               Only accept jobs that reference data we have locally ("local") or anywhere ("anywhere"). (default "local")\n      --job-selection-probe-exec string                  Use the result of a exec an external program to decide if we should take on the job.\n      --job-selection-probe-http string                  Use the result of a HTTP POST to decide if we should take on the job.\n      --job-selection-reject-stateless                   Reject jobs that don\'t specify any data.\n      --labels stringToString                            Labels to be associated with the node that can be used for node selection and filtering. (e.g. --labels key1=value1,key2=value2) (default [])\n      --limit-job-cpu string                             Job CPU core limit for single job (e.g. 500m, 2, 8).\n      --limit-job-gpu string                             Job GPU limit for single job (e.g. 1, 2, or 8).\n      --limit-job-memory string                          Job Memory limit for single job  (e.g. 500Mb, 2Gb, 8Gb).\n      --limit-total-cpu string                           Total CPU core limit to run all jobs (e.g. 500m, 2, 8).\n      --limit-total-gpu string                           Total GPU limit to run all jobs (e.g. 1, 2, or 8).\n      --limit-total-memory string                        Total Memory limit to run all jobs  (e.g. 500Mb, 2Gb, 8Gb).\n      --lotus-max-ping duration                          The highest ping a Filecoin miner could have when selecting. (default 2s)\n      --lotus-path-directory string                      Location of the Lotus Filecoin configuration directory.\n      --lotus-storage-duration duration                  Duration to store data in Lotus Filecoin for.\n      --lotus-upload-directory string                    Directory to use when uploading content to Lotus Filecoin.\n      --node-type strings                                Whether the node is a compute, requester or both. (default [requester])\n      --peer string                                      A comma-separated list of libp2p multiaddress to connect to. Use "none" to avoid connecting to any peer, "env" to connect to the default peer list of your active environment (see BACALHAU_ENVIRONMENT env var). (default "none")\n      --private-internal-ipfs                            Whether the in-process IPFS node should auto-discover other nodes, including the public IPFS network - cannot be used with --ipfs-connect. Use "--private-internal-ipfs=false" to disable. To persist a local Ipfs node, set BACALHAU_SERVE_IPFS_PATH to a valid path. (default true)\n      --swarm-port int                                   The port to listen on for swarm connections. (default 1235)\n\nGlobal Flags:\n      --api-host string         The host for the client and server to communicate on (via REST).\n                                Ignored if BACALHAU_API_HOST environment variable is set. (default "bootstrap.production.bacalhau.org")\n      --api-port uint16         The port for the client and server to communicate on (via REST).\n                                Ignored if BACALHAU_API_PORT environment variable is set. (default 1234)\n      --log-mode logging-mode   Log format: \'default\',\'station\',\'json\',\'combined\',\'event\' (default default)\n')))}p.isMDXComponent=!0}}]);