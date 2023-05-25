"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4329],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Setup GCP Infrastructure",sidebar_position:1},s="Setup GCP Infrastructure using Terraform",i={unversionedId:"case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/Setup-GCP-Infrastructure-Using-Terraform",id:"case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/Setup-GCP-Infrastructure-Using-Terraform",title:"Setup GCP Infrastructure using Terraform",description:"Create 3 Compute and 1 Requestor node on GCP using Terraform",source:"@site/docs/case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/Setup-GCP-Infrastructure-Using-Terraform.md",sourceDirName:"case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform",slug:"/case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/",permalink:"/case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/case-studies/duckdb-logs-processing/Setup-GCP-Infrastructure-Using-Terraform/Setup-GCP-Infrastructure-Using-Terraform.md",tags:[],version:"current",lastUpdatedAt:1685026337,formattedLastUpdatedAt:"May 25, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Setup GCP Infrastructure",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"DuckDB",permalink:"/case-studies/duckdb-logs-processing/"},next:{title:"Setup Fake Log Generation",permalink:"/case-studies/duckdb-logs-processing/Fake-Log-Generation/set-up-a-fake-log-creating-job"}},l={},c=[{value:"Create 3 Compute and 1 Requestor node on GCP using Terraform",id:"create-3-compute-and-1-requestor-node-on-gcp-using-terraform",level:2},{value:"Run Terraform Scripts",id:"run-terraform-scripts",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-gcp-infrastructure-using-terraform"},"Setup GCP Infrastructure using Terraform"),(0,a.kt)("h2",{id:"create-3-compute-and-1-requestor-node-on-gcp-using-terraform"},"Create 3 Compute and 1 Requestor node on GCP using Terraform"),(0,a.kt)("p",null,"To deploy the infrastructure, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Access your ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/home/dashboard"},"GCP project you want to deploy to")," and take not of the Project ID."),(0,a.kt)("li",{parentName:"ol"},"Install Terraform on your local hmachine if you haven\u2019t already: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://www.terraform.io/downloads.html"},"https://www.terraform.io/downloads.html"))),(0,a.kt)("li",{parentName:"ol"},"Create a new directory for your terraform files and account, and save the service account key and terrafrom files. ",(0,a.kt)("inlineCode",{parentName:"li"},"cd")," into this file. "),(0,a.kt)("li",{parentName:"ol"},"Create a service account on GCP",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Go to the Google Cloud Console: ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/"))),(0,a.kt)("li",{parentName:"ol"},"Make sure you have the correct project selected at the top."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"IAM & Admin > Service Accounts"))," from the sidebar."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"+ CREATE SERVICE ACCOUNT"))," at the top of the page."),(0,a.kt)("li",{parentName:"ol"},"Fill in the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Service account name"))," and ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Service account description")),", then click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"CREATE")),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/iam"},"https://console.cloud.google.com/iam-admin/iam")," section, click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"+"),"Grant access"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Select a role"))," dropdown, type ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Storage")),", then select  ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"Storage Object Creator")),". Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"SAVE")),"."),(0,a.kt)("li",{parentName:"ol"},"Again Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/iam-admin/serviceaccounts"},"https://console.cloud.google.com/iam-admin/serviceaccounts")," and Click on your service account and then KEYS and then Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ADD KEY->Create new key")),", select ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"JSON")),", then click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"CREATE")),". This will download a JSON file with your credentials to your computer. ",(0,a.kt)("strong",{parentName:"li"},"Save this file in a secure place"),", because Google will not keep a copy."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"DONE")),"."))),(0,a.kt)("li",{parentName:"ol"},"Save the scripta in files named ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"main.tf, variables.tf"))," in the same directory")),(0,a.kt)("p",null,"main.tf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'provider "google" {\n  project = var.project_id\n  region  = "us-central1"\n}\n\nlocals {\n  service_account = "service-account-logging-demo@bacalhau-development.iam.gserviceaccount.com"\n\n  node_configs = {\n    "us-central1-a-node" = {\n      zone         = "us-central1-a"\n      machine_type = var.machine_types["us-central1-a"]\n      iam_access   = false\n      create_bucket = true\n    }\n    "us-east1-b-node" = {\n      zone         = "us-east1-b"\n      machine_type = var.machine_types["us-east1-b"]\n      iam_access   = true\n      create_bucket = true\n    }\n    "europe-west4-a-node" = {\n      zone         = "europe-west4-a"\n      machine_type = var.machine_types["europe-west4-a"]\n      iam_access   = true\n      create_bucket = true\n    }\n    "us-central1-a-8gb-node" = {\n      zone         = "us-central1-a"\n      machine_type = "n1-standard-1"\n      iam_access   = false\n      create_bucket = false\n    }\n  }\n}\n\nresource "google_compute_instance" "gcp_instance" {\n  for_each = local.node_configs\n\n  name         = each.key\n  machine_type = each.value.machine_type\n  zone         = each.value.zone\n\n  boot_disk {\n    initialize_params {\n      image = "projects/ubuntu-os-cloud/global/images/family/ubuntu-2004-lts"\n    }\n  }\n\n  network_interface {\n    network = "default"\n    access_config {\n      // Ephemeral IP\n    }\n  }\n\n  service_account {\n    email  = local.service_account\n    scopes = ["cloud-platform"]\n  }\n\n  metadata_startup_script = <<-EOT\n    #!/bin/bash\n    apt-get update\n    apt-get install -y golang python3 python3-pip curl unzip awscli git\n    # Install Python packages\n    pip3 install Faker\n    git clone https://github.com/bacalhau-project/logrotate\n    cd logrotate\n    chmod +x ./log-rotate.sh\n    sudo ./log-rotate.sh\n\n  # Install Docker\n    apt-get update\n    apt-get install -y docker.io\n    systemctl start docker\n    systemctl enable docker\n\n    # Install IPFS\n    wget https://dist.ipfs.io/go-ipfs/v0.9.1/go-ipfs_v0.9.1_linux-amd64.tar.gz\n    tar xvf go-ipfs_v0.9.1_linux-amd64.tar.gz\n    cd go-ipfs\n    sudo bash install.sh\n    ipfs init\n    systemctl start ipfs\n    systemctl enable ipfs\n\n    curl -sL https://get.bacalhau.org/install.sh | bash\n  EOT\n}\n\nresource "google_storage_bucket" "node_bucket" {\n  for_each = { for k, v in local.node_configs : k => v if v.create_bucket }\n  \n  name     = "${each.key}-archive-bucket"\n  location = "US"\n\n  lifecycle_rule {\n    condition {\n      age = "3"\n    }\n    action {\n      type = "Delete"\n    }\n  }\n\n  storage_class = "ARCHIVE"\n}\n')),(0,a.kt)("p",null,"variables.tf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'variable "project_id" {\n  description = "The project ID to deploy to."\n}\n\nvariable "regions" {\n  type    = list(string)\n  default = ["us-central1", "us-east1", "europe-west4"]\n}\n\nvariable "machine_types" {\n  type = map(string)\n  default = {\n    "us-central1-a"    = "n1-standard-2"\n    "us-east1-b"       = "n1-standard-2"\n    "europe-west4-a"   = "n1-standard-2"\n  }\n}\n\nvariable "disk_sizes" {\n  type = map(string)\n  default = {\n    "us-central1-a"    = "25"\n    "us-east1-b"       = "25"\n    "europe-west4-a"   = "25"\n  }\n}\n')),(0,a.kt)("h2",{id:"run-terraform-scripts"},"Run Terraform Scripts"),(0,a.kt)("p",null,"First, you will need to init terraform and add the access token that you downloaded when you created your IAM service account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"terraform init\nexport GOOGLE_CLOUD_ACCESS_TOKEN=$(gcloud auth application-default print-access-token)\n")),(0,a.kt)("p",null,"Next you are going to the terraform execution plan and set the project id variable which you can ","[find on the GCP project dashboard]","(",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home/dashboard"},"https://console.cloud.google.com/home/dashboard"),", then apply the "),(0,a.kt)("p",null,"``\nterraform plan -out=tfplan -var=project_id=<your_project_id>\nterraform apply tfplan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nAfter the resources have been deployed, we can now reserve a static IP for the requestor node\n\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Reserve a Static IP Address"),":")),(0,a.kt)("p",null,"You'll first need to reserve a static IP address to use for your instance."),(0,a.kt)("p",null,"a. Go to the Google Cloud Console: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/"))),(0,a.kt)("p",null,"b. Click on the Navigation Menu (three horizontal lines in the top left corner) and go to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"VPC network -> External IP addresses")),"."),(0,a.kt)("p",null,"c. Click on ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Reserve Static Address")),"."),(0,a.kt)("p",null,"d. Provide a name for your static IP address and select the type of IP address (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Regional"))," or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Global")),"), depending on your needs. If your node is a Compute Engine, you most likely need a ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Regional"))," IP."),(0,a.kt)("p",null,"e. Select the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"region"))," (if Regional) or ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"network service tier"))," (if Global)."),(0,a.kt)("p",null,"f. ",(0,a.kt)("strong",{parentName:"p"},"Assign the Static IP Address to an Instance")),(0,a.kt)("p",null,"g. Click ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Reserve"))," to reserve the IP."),(0,a.kt)("p",null,"That's it! Your GCP node should now have a static IP address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n![StaticIP](./StaticIP.png)\n")))}d.isMDXComponent=!0}}]);