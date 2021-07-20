---
sidebar_position: 4
---

# Getting started

If you're interested in joining the Metaverse Wrassling Federation, the best first thing to do is join the 0xEssential developer community and tell us about your plans! We can help you make decisions about how to approach the project, point you at the best examples or docs for your chosen approach and even review code with you.

We'll also encourage you to make non-technical decisions early in the project for things like how you will distribute attribute points and whether you will create MWF specific art.

## Attributes and art



## Smart contracts

The best way to get started building Wrassleable NFTs is to review and clone our example projects.

We provide templates on Github that you can use to start your project. They include our inheritable contracts via NPM, plus tooling for linting, formatting and deploying. We offer examples for any approach, whether you have an existing NFT project or are working on something new, and whether you want to deploy multi-chain or Matic-exclusive NFTs.

You can find each of these example projects on Github, along with simple tutorials for cloning, customizing and deploying.

These example projects are opinionated - they use Hardhat for deployment, include eslint, solhint and prettier for linting and formatting, and use mocha and chai with TypeScript for testing. If these tools don't fit your workflow and you're an experienced Solidity developer, you might prefer to inherit our contracts via NPM packages and build according to your own workflow.

We'd love to hear from teams that are want to implement Wrassleable tokens - we can provide support and guidance for your build, so please reach out to us before you commit significant resources to this project!

### Existing projects

If you've already deployed an ERC721 contract, 0xEssential recommends deploying new, Matic-exclusive tokens that your current owners can claim. This approach is similar to how Bored Apes Yacht Club released their Bored Apes Kennel Club tokens.

Wrassleable NFTs must be deployed to Matic, so you'll need to think through how to distribute these NFTs. Multi-chain NFTs will be simpler to distribute, but will require more dApp development. Matic-exclusive NFTs will be simpler to deploy, won't require complicated dApp development, but 

#### Matic-exclusive

The Matic chain uses the same addresses as Ethereum mainnet, so either airdrops or a claim model work well - your Matic contract cannot read token ownership from Ethereum mainnet, so you'll need to snapshot your owners and use the snapshot addresses to airdrop or allow claiming. Airdrops require less dApp development but are more expensive. Claiming is a great model, but the ability to claim does not follow L1 ownership - if a token owner sells your original NFT on Ethereum mainnet, they can still claim the Matic-based derivative token.

#### Multi-chain

Multi-chain Wrassleable NFTs require more dApp development, but will allow for an Ethereum mainnet claim process that respects current ownership of your L1 NFTs. This allows for a token owner to sell their original token prior to claiming the derivative Wrassler, which can increase the market value of the original token. Similar to CryptoPunks => Meebits or BAYC => BAKC, you should provide dApp functionality to tell potential buyers if the derivative Wrassleable token has already been claimed.

### New Projects

#### Matic-exclusive

#### Multi-chain
