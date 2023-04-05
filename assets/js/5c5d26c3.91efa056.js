"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6478],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>c});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,c=m["".concat(l,".").concat(g)]||m[g]||d[g]||o;return t?n.createElement(c,s(s({ref:a},u),{},{components:t})):n.createElement(c,s({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=g;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1365:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Rust WASM",sidebar_position:10},s="Running Rust programs as WebAssembly (WASM)",i={unversionedId:"examples/workload-onboarding/rust-wasm/index",id:"examples/workload-onboarding/rust-wasm/index",title:"Running Rust programs as WebAssembly (WASM)",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/rust-wasm/index.md",sourceDirName:"examples/workload-onboarding/rust-wasm",slug:"/examples/workload-onboarding/rust-wasm/",permalink:"/examples/workload-onboarding/rust-wasm/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/rust-wasm/index.md",tags:[],version:"current",lastUpdatedAt:1680711103,formattedLastUpdatedAt:"Apr 5, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"Rust WASM",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"R Script",permalink:"/examples/workload-onboarding/r-hello-world/"},next:{title:"Sparkov Data Generation",permalink:"/examples/workload-onboarding/Sparkov-Data-Generation/"}},l={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Develop a Rust Program Locally",id:"develop-a-rust-program-locally",level:2},{value:"Running WASM on Bacalhau",id:"running-wasm-on-bacalhau",level:2},{value:"Viewing Job Output",id:"viewing-job-output",level:2}],u={toc:p},m="wrapper";function d(e){let{components:a,...o}=e;return(0,r.kt)(m,(0,n.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-rust-programs-as-webassembly-wasm"},"Running Rust programs as WebAssembly (WASM)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/rust-wasm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/rust-wasm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"Bacalhau supports running jobs as a ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"WebAssembly (WASM)")," program rather than using a Docker container. This examples demonstrates how to compile a ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," project into WebAssembly and run the program on Bacalhau."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Run WASM job on Bacalhau"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("li",{parentName:"ul"},"A working Rust installation with the ",(0,r.kt)("inlineCode",{parentName:"li"},"wasm32-wasi")," target. For example, you can use ",(0,r.kt)("a",{parentName:"li",href:"https://rustup.rs/"},(0,r.kt)("inlineCode",{parentName:"a"},"rustup"))," to install Rust and configure it to build WASM targets.")),(0,r.kt)("p",null,"For those using the notebook, these are installed in hidden cells below."),(0,r.kt)("h2",{id:"develop-a-rust-program-locally"},"Develop a Rust Program Locally"),(0,r.kt)("p",null,"We can use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," (which will have been installed by ",(0,r.kt)("inlineCode",{parentName:"p"},"rustup"),") to start a new project and compile it. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncargo init my-program\n")),(0,r.kt)("p",null,"We can then write a Rust program. Rust programs that run on Bacalhau can read and write files, access a simple clock and make use of psudeo-random numbers. They cannot memory-map files or run code on multiple threads."),(0,r.kt)("p",null,"The below program will make use of the Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"imageproc")," create to resize an image through seam carving, based on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/image-rs/imageproc/blob/master/examples/seam_carving.rs"},"an example from their repository"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile ./my-program/src/main.rs \nuse image::{open, GrayImage, Luma, Pixel};\nuse imageproc::definitions::Clamp;\nuse imageproc::gradients::sobel_gradient_map;\nuse imageproc::map::map_colors;\nuse imageproc::seam_carving::*;\nuse std::path::Path;\n\nfn main() {\n    let input_path = "inputs/image0.JPG";\n    let output_dir = "outputs/";\n\n    let input_path = Path::new(&input_path);\n    let output_dir = Path::new(&output_dir);\n\n    // Load image and convert to grayscale\n    let input_image = open(input_path)\n        .expect(&format!("Could not load image at {:?}", input_path))\n        .to_rgb8();\n\n    // Save original image in output directory\n    let original_path = output_dir.join("original.png");\n    input_image.save(&original_path).unwrap();\n\n    // We will reduce the image width by this amount, removing one seam at a time.\n    let seams_to_remove: u32 = input_image.width() / 6;\n\n    let mut shrunk = input_image.clone();\n    let mut seams = Vec::new();\n\n    // Record each removed seam so that we can draw them on the original image later.\n    for i in 0..seams_to_remove {\n        if i % 100 == 0 {\n            println!("Removing seam {}", i);\n        }        \n        let vertical_seam = find_vertical_seam(&shrunk);\n        shrunk = remove_vertical_seam(&mut shrunk, &vertical_seam);\n        seams.push(vertical_seam);\n    }\n\n    // Draw the seams on the original image.\n    let gray_image = map_colors(&input_image, |p| p.to_luma());\n    let annotated = draw_vertical_seams(&gray_image, &seams);\n    let annotated_path = output_dir.join("annotated.png");\n    annotated.save(&annotated_path).unwrap();\n\n    // Draw the seams on the gradient magnitude image.\n    let gradients = sobel_gradient_map(&input_image, |p| {\n        let mean = (p[0] + p[1] + p[2]) / 3;\n        Luma([mean as u32])\n    });\n    let clamped_gradients: GrayImage = map_colors(&gradients, |p| Luma([Clamp::clamp(p[0])]));\n    let annotated_gradients = draw_vertical_seams(&clamped_gradients, &seams);\n    let gradients_path = output_dir.join("gradients.png");\n    clamped_gradients.save(&gradients_path).unwrap();\n    let annotated_gradients_path = output_dir.join("annotated_gradients.png");\n    annotated_gradients.save(&annotated_gradients_path).unwrap();\n\n    // Save the shrunk image.\n    let shrunk_path = output_dir.join("shrunk.png");\n    shrunk.save(&shrunk_path).unwrap();\n}\n')),(0,r.kt)("p",null,"We also need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"imageproc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," libraries and switch off the default features to make sure that multi-threading is disabled."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile ./my-program/Cargo.toml\n[package]\nname = "my-program"\nversion = "0.1.0"\nedition = "2021"\n\n[dependencies.image]\nversion = "0.24.4"\ndefault-features = false\nfeatures = ["png", "jpeg", "bmp"]\n\n[dependencies.imageproc]\nversion = "0.23.0"\ndefault-features = false\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Overwriting ./my-program/Cargo.toml\n")),(0,r.kt)("p",null,"We can now build the Rust program into a WASM blob using ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncd my-program && cargo build --target wasm32-wasi --release\n")),(0,r.kt)("p",null,"This will generate a WASM file at ",(0,r.kt)("inlineCode",{parentName:"p"},"./my-program/target/wasm32-wasi/my-program.wasm")," which can now be run on Bacalhau."),(0,r.kt)("h2",{id:"running-wasm-on-bacalhau"},"Running WASM on Bacalhau"),(0,r.kt)("p",null,"Now that we have a WASM binary, we can upload it to IPFS and use it as input to a Bacalhau job."),(0,r.kt)("p",null,"The -v switch allows specifying an IPFS CID to mount as a named volume in the job. There is also a -u switch which can download inputs via HTTP."),(0,r.kt)("p",null,"For this example, we are using an image of the Statue of Liberty that has been pinned to a storage facility."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau wasm run ./my-program/target/wasm32-wasi/release/my-program.wasm _start \\\n    -v bafybeifdpl6dw7atz6uealwjdklolvxrocavceorhb3eoq6y53cbtitbeu:inputs | tee job.txt\n")),(0,r.kt)("p",null,"We can now get the results. When we view the files, we can see the original image, the resulting shrunk image, and the seams that were removed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash\nrm -rf wasm_results && mkdir -p wasm_results\nbacalhau get $(grep "Job ID:" job.txt | cut -f2 -d:) --output-dir wasm_results\n')),(0,r.kt)("h2",{id:"viewing-job-output"},"Viewing Job Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import IPython.display as display\ndisplay.Image("./wasm_results/combined_results/outputs/original.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:t(9844).Z,width:"1024",height:"910"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display.Image("./wasm_results/combined_results/outputs/annotated_gradients.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:t(7100).Z,width:"1024",height:"910"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'display.Image("./wasm_results/combined_results/outputs/shrunk.png")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"png",src:t(7817).Z,width:"854",height:"910"})))}d.isMDXComponent=!0},9844:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/index_17_0-71638aed0115d5bcc05fe121fce8d93a.png"},7100:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/index_18_0-210fd212e58be3cae39a9debd38a666a.png"},7817:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/index_19_0-220da7754eb4e335100d52c0ac75ce2f.png"}}]);