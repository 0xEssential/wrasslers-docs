---
sidebar_position: 1
---

# Let's Wrassle

Welcome to the Metaverse Wrassling Federation! Wrassling is a new form of wrestling, open to any and all metaverse beings. Wrassling is the flagship game and smart contract NFT standard from 0xEssential.

The Wrassling Arena is and permissionless gaming platform built on top of open-source standards for NFT smart contracts. 0xEssential helps NFT creators easily add utility to their tokens - in a few hours, smart contract developers can inherit our standards and immediately offer their community entry into an exciting gaming platform. NFT projects can join the Wrassling Arena for free, but gameplay does require paying for transactions, and 0xEssential aims to make Wrassling a play-to-earn game with our own ERC20 token.

## Prerequisites

The Wrassling Arena is an on-chain gaming platform on Polygon's Matic chain. In order to participate in the Wrassling platform, a project's NFTs must exist on the Matic chain as spec-compliant ERC721 tokens that implement the `IWrassleable` interface standard.

0xEssential provides open source code and tutorials for both existing NFT communities and NFT projects that have not yet launched. There are multiple strategies for deploying an NFT project to the Matic chain - new projects can decide to deploy to Matic exclusively or with tokens that can be migrated between Ethereum mainnet and Matic, while existing projects can create derivative tokens with either of these approaches and a claim or airdrop distribution model, or implement a Matic bridge to migrate their existing tokens to Matic.

The Wrassling Arena is open to all NFT projects, but to ensure the integrity and fairness of the game mechanics and to sensibly scale the platform, it will start with 0xEssential admitting NFT projects on a case-by-case basis. Each NFT project will be awarded the same amount of Wrassler attribute points per token in collection - you are free to distribute these attribute points as you choose, where perhaps the rare tokens in your collection get more points to be stronger Wrasslers.

You will primarily need smart contract development skills to make Wrassleable tokens. Depending on your approach, you will also need dApp development expertise. 0xEssential will also prioritize partners who create original art for the Wrassling platform.

### Multi-chain vs. Matic-exclusive

Whether you've already created an NFT project or are planning to deploy one, you must create NFTs on the Matic chain that implement the `IWrassleable` interface in order to join the Wrassling Arena platform.

In either case, the first decision you must make is whether your Wrassleable tokens will exist exclusively on the Matic chain, or as NFTs that can be migrated between Ethereum mainnet and the Matic network. The simpler approach is to deploy Matic-exclusive tokens, but we provide OSS contracts and documentation for either choice. Note that migrating a token between L1 and L2 is a complex series of on-chain transactions, and you would be responsible for building the dApp functionality to allow your token owners to perform these transactions.

Popular wallets like MetaMask and Rainbow are adding Matic as a default network, and secondary markets like OpenSea are starting to better support Matic NFTs. But particularly if you are selling your Wrassleable tokens at mint, deploying exclusively to Matic introduces a UX challenge of wrapping ETH and migrating it to the Matic network - paying to mint NFTs on Ethereum mainnet is still the gold-standard from a user perspective.

### Existing NFT projects

If you already have an NFT contract deployed, the first decision you must make is whether you want to create _new_ NFTs for Wrassling, or allow your token owners to migrate your existing NFTs to Matic using the Matic PoS bridge. Unless your NFT contract is upgradeable, or you implemented the required functions for bridging tokens from Matic to Ethereum mainnet (unlikely), using the PoS bridge is an **irreversible action** - your users will effectively burn your tokens on Ethereum mainnet, and re-mint them on Matic. They can't be migrated back to Ethereum mainnet because you probably have not implemented the required functions in your original ERC721 contract.

0xEssential instead recommends a derivative token approach - provide new, Wrassleable NFTs to your existing token owners. These new tokens can also exist exclusively on the Matic chain, or as multi-chain tokens that can be migrated between the L1 and L2 chains - with secondary marketplaces improving support for Matic, we suggest a Matic-exclusive derivative token in order to keep your project small, simple and single-chain.

The Matic network uses the same public addresses for users, so an airdrop or claim functionality work well for distributing these tokens. Note that the Matic chain cannot determine the current owner of an L1 NFT, so you will need to snapshot your owners and implement on-chain claiming or perform airdrops.

### New NFT projects

If you're working on a new NFT project, 0xEssential wants to help you launch successfully by having an entertaining utility layer for your tokens from day 1. As a new project, you have the opportunity to create tokens that can be migrated back and forth between Ethereum and the Matic chain.

Our open-source contracts make it easy to write Wrassleable NFT contracts for each chain that include the functionality to migrate the tokens back and forth. But 0xEssential does not currently provide dApp tooling to help your users accomplish this task. You'll need to support both chains in your dApp, get approval from the Polygon team for your L1 <=> L2 address mapping, and use the Matic JS SDK to build the user flows for migration.

0xEssential recommends deploying Matic-exlusive tokens, but provides inheritable contracts and documentation for the multi-chain approach. Your decision should consider the tradeoffs between an easier buy + mint flow on Ethereum mainnet versus the challenges of building the functionality to support migration between L1 and L2.

## Approval and Fairness

0xEssential hopes to progressively decentralize the Wrassling Arena platform, but we will start with a top-down model to help manage scaling and gameplay integrity.

In order to enter the Wrassling Arena, 0xEssential must approve your project on a case-by-case basis. Please do not deploy any mainnet contracts before you have our approval.

### Approval process

If you are an NFT project developer interested in joining the Wrassling Arena, please get in touch with us on Discord or Twitter! We're extremely excited to have you join the community, and will eventually accept any compliant projects, but we want to manage scale and maintain a great gameplay experience.

The first projects we will allow will be the projects that contribute the most to 0xEssential's community driven standards - we want `IWrassleable` to be useful to other game developers and to be simple to implement. Please join our community Discord, engage with our RFCs, join our community calls and be a committed partner as we seek to open and decentralize the protocol. We will also consider a community's interest when choosing which projects to onboard, so we hope you'll get your token holders excited about Wrassling with their NFTs, and can commit resources to create art specifically for your Wrassleable NFTs.

### Attribute fairness

The `IWrassleable` standard specifies attributes for a Wrassler that are utilized in the game mechanics - `attack`, `defense`, `strength`, `agility` and `creativity`. Each of these attributes is expressed as an integer from `0` to `1000`. The attributes points are summed to determine a star rating for each Wrassler, giving players a simple way to determine their chances of victory when challenging another Wrassler. 0xEssential plans to make Wrassling a play-to-earn game, where attributes can be upgraded by spending $WRASS.

In order to maintain fairness between projects, 0xEssential will allow each project to distribute a specific number of attribute points determined by their collection size. You are free to distribute these points across tokens as you see fit - perhaps the more rare tokens get more attribute points. Before your project is added to the Wrassling Arena, 0xEssential will require you to pin a JSON file on IPFS that defines the attribute distribution for your collection. We provide some testing tools to ensure your JSON file is in compliance with our rules.

Once your project is approved, your contract address will be added to an allow-list mapping with the approved IPFS JSON hash. The gaming platform contracts will read from this JSON file to assign and persist Wrassling attributes. Your contract must also implement callback functions that allow the Wrassling Arena to pass Wrassler attributes for persistence in a mapping on your ERC721 contract. Your NFTs should carry these stateful attributes with them for other experiences, rather than being locked in the Wrassling Arena walled garden.