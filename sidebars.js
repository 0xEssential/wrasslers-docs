/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  tutorialSidebar: [
    'intro',
    'wrassxp',
    {
      type: 'category',
      label: 'NFT Developers',
      items: ['nft_developers/intro', 'nft_developers/registration'],
    },
    {
      type: 'category',
      label: 'Game & Metaverse Developers',
      items: ['game_developers/wrassleable'],
    },
    {
      type: 'category',
      label: 'Players & Collectors',
      items: ['players/intro', 'players/gameplay'],
    },
    {
      type: 'category',
      label: 'API Docs',
      items: ['api/mainnet', 'api/polygon', 'api/subgraph', 'api/js_sdk'],
    },
  ],
};
