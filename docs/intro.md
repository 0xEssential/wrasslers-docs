---
sidebar_position: 1
title: "Let's Wrassle"

---

## Intro

Wrasslers is an open NFT gaming protocol for **_Wrassleability_**. NFT developers can register their projects to give their tokens wrestling skills - six integer-based attributes that describe a wrestler's skill tree, stored on-chain and indexed in a subgraph.

These attributes can be used to build gaming experiences. Wrasslers offers two game modes to start, a single player vs. blockchain CPU experience and an auto-battler tournament game, both built on Polygon.

The Wrasslers protocol uses a utility token $WRASSXP for upgrading Wrassler skills. $WRASSXP has an unlimited variable supply and Wrasslers reserves the right to mint or burn $WRASSXP to maintain a healthy skill-upgrading and game achievement ecosystem. NFT projects and owners receive $WRASSXP for registering. Game developers may apply for grants from the Wrasslers treasury to offer $WRASSXP for achievements in their games. Wrasslers' single player game mode rewards players with $WRASSXP for winning matches. 

The Wrasslers protocol is primarily available on Polygon. An Ethereum mainnet contract is available to pass NFT ownership data to the Polygon mirror. NFT owners may also index the Polygon attribute state on L1, but the most recent attribute data is available on Polygon.

The Polygon contract is the source for the Wrasslers subgraph, but may not have perfect ownership data. Wrasslers offers open source tools to help game developers resolve these challenges - the L1 protocol allows consumers to update Polygon ownership data as needed, while our JS SDK provides a Meta-Transaction Middleware for using fresh L1 ownership as authorization for off-chain or L2 operations.


## NFT Developers

NFT developers may register eligible projects in the Wrasslers protocol permissionlessly. The protocol only supports ERC721 compliant contracts that provide an `owner` function for the project developer (i.e. OpenZeppelin `Ownable`). 

During registration, project owners can choose to cover the cost of using Chainlink VRF to randomize NFT starting attributes. Otherwise all tokens from the contract will start at lower base stats. Randomizing 10k tokens costs ~15 $MATIC payable by NFT project owner.

NFT developers will receive $WRASSXP for registering their project. NFT Wrassling attributes can be upgraded by spending $WRASSXP on the Wrasslers protocol. Upgrading is permissionless, so NFT projects can spend to upgrade tokens from their contract, or reward community members with $WRASSXP.

Attributes are attached to the NFT, so when one of your owners sells a token they are also selling it's Wrasslers skill state. Wrasslers seeks positive sum outcomes, where NFT projects, collectors and game developers are more successful by working together through open standards.

## Game and Metaverse Developers

Wrasslers offers standards-based data for wrestling attributes useful in building games. Instead of profile pictures, Wrasslers imagines NFT avatars as metaverse beings. When a project owner registers their NFT collection with Wrasslers, it's like Neo learning Kung Fu through a disk in _The Matrix_. The NFTs a user passionately owns now have a set of skills that are available to any game that wants to use them.

However on-chain your game is, Wrasslers provides data and tools that can help you integrate your users' NFTs. Wrasslers attributes - power, speed, aggression, determination, resilience and ring awareness - are designed to be specific to wrestling, but you're free to use these skills in any context you dream up.

The Wrasslers treasury provides $WRASSXP grants to game developers to seed game achievement rewards pools. NFT owners upgrade their NFTs' attributes by spending $WRASSXP on the Wrasslers protocol. Game developers receive revenue share for upgrades made through their experiences and may also offer attribute upgrade incentives for gameplay - stat upgrades are permissionless, so your game is free to provide character upgrades as incentives for accomplishments or reward $WRASSXP to your players directly.

Wrasslers seeks positive sum outcomes, where NFT projects, game developers and players collaborate to build sustainable communities and experiences. Integrating avatar NFTs can bring a passionate user base and a new revenue stream to your project.

## About 0xEssential

0xEssential builds developer tools and services to enable the open metaverse. Public ledger blockchains offer an opportunity to build games that are better for publishers and players by integrating digital assets users already own. Instead of in-game assets being locked in a single game, 0xEssential is committed to championing standards to enable interoperability between metaverse experiences.

Blockchain gaming is primarily focused on ownership, earning and profit. Current blockchain games are an improvement with regard to digital assets and assigning them real world value, but this singular focus ignores the power of composability of assets that live on a public ledger.

Wrasslers is 0xEssential's test case to create an open standard for a type of metaverse actor that can be used in many game experiences.
