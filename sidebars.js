/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [

    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
        slug: '/getting-started',
      },
      collapsed: false,
      description: "Get Started with Bacalhau!",
      items: [
        'getting-started/architecture',
        'getting-started/installation',
        'getting-started/docker-workload-onboarding',
        'getting-started/wasm-workload-onboarding',
        'getting-started/resources'
      ],
    },
  ],

};
