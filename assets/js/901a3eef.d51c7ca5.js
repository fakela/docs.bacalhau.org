"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1480:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_label:"GPU Support",sidebar_position:101,description:"How to enable GPU support on your Bacalhau node."},s="GPU Support",u={unversionedId:"running-node/gpu",id:"running-node/gpu",title:"GPU Support",description:"How to enable GPU support on your Bacalhau node.",source:"@site/docs/running-node/gpu.md",sourceDirName:"running-node",slug:"/running-node/gpu",permalink:"/running-node/gpu",editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/gpu.md",tags:[],version:"current",sidebarPosition:101,frontMatter:{sidebar_label:"GPU Support",sidebar_position:101,description:"How to enable GPU support on your Bacalhau node."},sidebar:"documentationSidebar",previous:{title:"Overview",permalink:"/running-node/overview"},next:{title:"CLI Flags",permalink:"/cli-flags/all-flags"}},d=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Unofficial GPU Node Setup One-Liner",id:"unofficial-gpu-node-setup-one-liner",children:[],level:3}],level:2},{value:"GPU Node Configuration",id:"gpu-node-configuration",children:[{value:"Adding Global GPU Limits",id:"adding-global-gpu-limits",children:[],level:3},{value:"Adding Job GPU Limits",id:"adding-job-gpu-limits",children:[],level:3}],level:2},{value:"Limitations",id:"limitations",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gpu-support"},"GPU Support"),(0,o.kt)("p",null,"Bacalhau supports GPUs out of the box and defaults to allowing execution on all GPUs installed on the node."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Bacalhau assumes you have installed all the necessary NVIDIA drivers on your node. Bacalhau requires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://get.docker.com/"},"docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html"},"cuda-drivers for your GPU")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html"},"NVIDIA Container Toolkit (nvidia-docker2)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user"},"permission to access Docker"))),(0,o.kt)("p",null,"You can test whether you have a working GPU setup with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n")),(0,o.kt)("h3",{id:"unofficial-gpu-node-setup-one-liner"},"Unofficial GPU Node Setup One-Liner"),(0,o.kt)("p",null,"You should review the documented links above for official install instructions, but if you're desperate for something to copy and paste, this should work:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt-get install -y linux-headers-$(uname -r)\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID | sed -e 's/\\.//g') && wget https://developer.download.nvidia.com/compute/cuda/repos/$distribution/x86_64/cuda-keyring_1.0-1_all.deb && sudo dpkg -i cuda-keyring_1.0-1_all.deb\nsudo apt-get update && sudo apt-get -y install cuda-drivers\ncurl https://get.docker.com | sh \\\n  && sudo systemctl --now enable docker\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\\n      && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \\\n            sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\\n            sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\ndistribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n      && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \\\n      && curl -s -L https://nvidia.github.io/libnvidia-container/experimental/$distribution/libnvidia-container.list | \\\n         sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \\\n         sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\nsudo apt-get update\nsudo apt-get install -y nvidia-docker2\nsudo systemctl restart docker\nsudo groupadd docker && sudo usermod -aG docker $USER && newgrp docker \ndocker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi\n")),(0,o.kt)("p",null,"This was tested on a VM in GCP, in ",(0,o.kt)("inlineCode",{parentName:"p"},"europe-west1-b"),", of type ",(0,o.kt)("inlineCode",{parentName:"p"},"n1-highmem-4"),", with ",(0,o.kt)("inlineCode",{parentName:"p"},"1 x NVIDIA Tesla T4"),"."),(0,o.kt)("h2",{id:"gpu-node-configuration"},"GPU Node Configuration"),(0,o.kt)("p",null,"The following settings refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau serve")," command. To see all settings please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/cli-flags/all-flags"},"CLI documentation"),"."),(0,o.kt)("h3",{id:"adding-global-gpu-limits"},"Adding Global GPU Limits"),(0,o.kt)("p",null,"To limit the number of GPUs that Bacalhau has access to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-total-gpu")," flag."),(0,o.kt)("h3",{id:"adding-job-gpu-limits"},"Adding Job GPU Limits"),(0,o.kt)("p",null,"To limit the number of GPUs that individual jobs can use use the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-job-gpu")," flag."),(0,o.kt)("h2",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/gpu#limitations"},"GPU page in the getting started guide"),"."))}c.isMDXComponent=!0}}]);