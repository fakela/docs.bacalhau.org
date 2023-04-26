"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Simulation with OpenMM",sidebar_position:5},i="Molecular Simulation with OpenMM and Bacalhau",l={unversionedId:"examples/molecular-dynamics/openmm/index",id:"examples/molecular-dynamics/openmm/index",title:"Molecular Simulation with OpenMM and Bacalhau",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/openmm/index.md",sourceDirName:"examples/molecular-dynamics/openmm",slug:"/examples/molecular-dynamics/openmm/",permalink:"/examples/molecular-dynamics/openmm/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/openmm/index.md",tags:[],version:"current",lastUpdatedAt:1682468199,formattedLastUpdatedAt:"Apr 26, 2023",sidebarPosition:5,frontMatter:{sidebar_label:"Simulation with OpenMM",sidebar_position:5},sidebar:"documentationSidebar",previous:{title:"Gromacs",permalink:"/examples/molecular-dynamics/Gromacs/"},next:{title:"FAQs",permalink:"/faqs"}},s={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Protein data",id:"protein-data",level:2},{value:"Write the script",id:"write-the-script",level:2},{value:"Upload the Data to IPFS",id:"upload-the-data-to-ipfs",level:2},{value:"Containerize Script using Docker",id:"containerize-script-using-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Run a Bacalhau Job",id:"run-a-bacalhau-job",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"molecular-simulation-with-openmm-and-bacalhau"},"Molecular Simulation with OpenMM and Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/molecular-dynamics/openmm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=molecular-dynamics/openmm/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"In this tutorial example, we will showcase how to containerize an OpenMM workload so that it can be executed on the Bacalhau network and take advantage of the distributed storage & compute resources. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openmm/openmm"},"OpenMM")," is a toolkit for molecular simulation. It is a physic based libraries that is useful for refining the structure and exploring functional interactions with other molecules. It provides a combination of extreme flexibility (through custom forces and integrators), openness, and high performance (especially on recent GPUs) that make it truly unique among simulation codes."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running OpenMM m molecular simulation with Bacalhau"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"protein-data"},"Protein data"),(0,r.kt)("p",null,"We use a processed 2DRI dataset that represents the ribose binding protein in bacterial transport and chemotaxis. The source organism is the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Escherichia_coli"},"Escherichia coli")," bacteria.\nYou can find more details on this protein at the related ",(0,r.kt)("a",{parentName:"p",href:"https://www.rcsb.org/structure/2dri"},"RCSB Protein Data Bank page"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image.png",src:n(7313).Z,width:"500",height:"500"})),(0,r.kt)("p",null,"Protein data can be stored in a ",(0,r.kt)("inlineCode",{parentName:"p"},".pdb")," file, this is a human readable format. It provides for description and annotation of protein and nucleic acid structures including atomic coordinates, secondary structure assignments, as well as atomic connectivity.\nSee more information about PDB format ",(0,r.kt)("a",{parentName:"p",href:"https://www.cgl.ucsf.edu/chimera/docs/UsersGuide/tutorials/pdbintro.html"},"here"),"."),(0,r.kt)("h2",{id:"write-the-script"},"Write the script"),(0,r.kt)("p",null,"To run the script above all we need is a Python environment with the ",(0,r.kt)("a",{parentName:"p",href:"http://docs.openmm.org/latest/userguide/application/01_getting_started.html"},"OpenMM library")," installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile run_openmm_simulation.py\nimport os\nfrom openmm import *\nfrom openmm.app import *\nfrom openmm.unit import *\n\n# Input Files\ninput_path = '/inputs/2dri-processed.pdb'\nos.path.exists(input_path) # check if input file exists\npdb = PDBFile(input_path)\nforcefield = ForceField('amber14-all.xml', 'amber14/tip3pfb.xml')\n\n# Output\noutput_path = '/outputs/final_state.pdbx'\nif not os.path.exists(os.path.dirname(output_path)): # check if output dir exists\n    os.makedirs(os.path.dirname(output_path))\n\n# System Configuration\n\nnonbondedMethod = PME\nnonbondedCutoff = 1.0*nanometers\newaldErrorTolerance = 0.0005\nconstraints = HBonds\nrigidWater = True\nconstraintTolerance = 0.000001\nhydrogenMass = 1.5*amu\n\n# Integration Options\n\ndt = 0.002*picoseconds\ntemperature = 310*kelvin\nfriction = 1.0/picosecond\npressure = 1.0*atmospheres\nbarostatInterval = 25\n\n# Simulation Options\n\nsteps = 10\nequilibrationSteps = 0\n#platform = Platform.getPlatformByName('CUDA')\nplatform = Platform.getPlatformByName('CPU')\n#platformProperties = {'Precision': 'single'}\nplatformProperties = {}\ndcdReporter = DCDReporter('trajectory.dcd', 1000)\ndataReporter = StateDataReporter('log.txt', 1000, totalSteps=steps,\n    step=True, time=True, speed=True, progress=True, elapsedTime=True, remainingTime=True, potentialEnergy=True, kineticEnergy=True, totalEnergy=True, temperature=True, volume=True, density=True, separator='\\t')\ncheckpointReporter = CheckpointReporter('checkpoint.chk', 1000)\n\n# Prepare the Simulation\n\nprint('Building system...')\ntopology = pdb.topology\npositions = pdb.positions\nsystem = forcefield.createSystem(topology, nonbondedMethod=nonbondedMethod, nonbondedCutoff=nonbondedCutoff,\n    constraints=constraints, rigidWater=rigidWater, ewaldErrorTolerance=ewaldErrorTolerance, hydrogenMass=hydrogenMass)\nsystem.addForce(MonteCarloBarostat(pressure, temperature, barostatInterval))\nintegrator = LangevinMiddleIntegrator(temperature, friction, dt)\nintegrator.setConstraintTolerance(constraintTolerance)\nsimulation = Simulation(topology, system, integrator, platform, platformProperties)\nsimulation.context.setPositions(positions)\n\n# Minimize and Equilibrate\n\nprint('Performing energy minimization...')\nsimulation.minimizeEnergy()\nprint('Equilibrating...')\nsimulation.context.setVelocitiesToTemperature(temperature)\nsimulation.step(equilibrationSteps)\n\n# Simulate\n\nprint('Simulating...')\nsimulation.reporters.append(dcdReporter)\nsimulation.reporters.append(dataReporter)\nsimulation.reporters.append(checkpointReporter)\nsimulation.currentStep = 0\nsimulation.step(steps)\n\n# Write file with final simulation state\n\nstate = simulation.context.getState(getPositions=True, enforcePeriodicBox=system.usesPeriodicBoundaryConditions())\nwith open(output_path, mode=\"w+\") as file:\n    PDBxFile.writeFile(simulation.topology, state.getPositions(), file)\nprint('Simulation complete, file written to disk at: {}'.format(output_path))\n")),(0,r.kt)("p",null,"We are printing the first 10 lines of the file. The output contains a number of ATOM records. These describe the coordinates of the atoms that are part of the protein."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nhead ./dataset/2dri-processed.pdb\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"REMARK   1 CREATED WITH OPENMM 7.6, 2022-07-12\nCRYST1   81.309   81.309   81.309  90.00  90.00  90.00 P 1           1 \nATOM      1  N   LYS A   1      64.731   9.461  59.430  1.00  0.00           N  \nATOM      2  CA  LYS A   1      63.588  10.286  58.927  1.00  0.00           C  \nATOM      3  HA  LYS A   1      62.707   9.486  59.038  1.00  0.00           H  \nATOM      4  C   LYS A   1      63.790  10.671  57.468  1.00  0.00           C  \nATOM      5  O   LYS A   1      64.887  11.089  57.078  1.00  0.00           O  \nATOM      6  CB  LYS A   1      63.458  11.567  59.749  1.00  0.00           C  \nATOM      7  HB2 LYS A   1      63.333  12.366  58.879  1.00  0.00           H  \nATOM      8  HB3 LYS A   1      64.435  11.867  60.372  1.00  0.00           H  \n")),(0,r.kt)("h2",{id:"upload-the-data-to-ipfs"},"Upload the Data to IPFS"),(0,r.kt)("p",null,'The simplest way to upload the data to IPFS is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,r.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,r.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata")," or nft.storage . Once registered you can use their UI or API or SDKs to upload files."),(0,r.kt)("h2",{id:"containerize-script-using-docker"},"Containerize Script using Docker"),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your image."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For more information about working with custom containers, see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/docker-workload-onboarding"},"custom containers example"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM conda/miniconda3\n\nRUN conda install -y -c conda-forge openmm\n\nWORKDIR /project\n\nCOPY ./run_openmm_simulation.py /project\n\nLABEL org.opencontainers.image.source https://github.com/bacalhau-project/examples\n\nCMD ["python","run_openmm_simulation.py"]\n')),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case, this will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 --push -t ghcr.io/bacalhau-project/examples/openmm:0.3 .\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("h2",{id:"run-a-bacalhau-job"},"Run a Bacalhau Job"),(0,r.kt)("p",null,"Now that we have the data in IPFS and the docker image pushed, we can run a job on the Bacalhau network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--inputs bafybeig63whfqyuvwqqrp5456fl4anceju24ttyycexef3k5eurg5uvrq4 \\\n--wait \\\n--id-only \\\nghcr.io/bacalhau-project/examples/openmm:0.3 -- python run_openmm_simulation.py\n")),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID} # Download the results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -l results/combined_results/studout/\n")))}m.isMDXComponent=!0},7313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2dri-image-b62b408d1846f383eaa00790f8599299.png"}}]);