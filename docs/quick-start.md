---
sidebar_position: 2
---

# Integration overview

If you're interested in joining the Metaverse Wrassling Federation, the best first thing to do is join the 0xEssential developer community and tell us about your plans! We can help you make decisions about how to approach the project, point you at the best examples or docs for your chosen approach and even review code with you.

Please note that the MWF is currently being formed, and will be closed at launch. 0xEssential will onboard projects as we see fit to help manage scaling the gaming platform.

Here's how we suggest structuring and approaching your project as you explore joining the MEtaverse Wrassling Federation.

## 1. Chain and distribution choices

Wrassleable NFTs must exist on the Matic chain to join the MWF. At the outset, your team should determine how you want to achieve this.

We recommend NFTs that live exclusively on Matic - this limits the amount of engineering required to launch your project.

You might also want to create tokens that can be bridged between Ethereum mainnet and Matic, especially if you are selling your Wrassleable tokens - many users are not as comfortable purchasing on Matic, and you'll need to help educate buyers on wrapped ETH.

You should also determine early on how you will distribute tokens. If you are a new project, we assume you will be selling your tokens via a dApp or marketplace. If you already have an existing community of token owners, we recommend airdropping them new Wrassleable tokens, or setting up a user flow where they can claim the new Wrassleable token. You can also use the Matic PoS bridge to migrate your original tokens to Matic, but we assume most projects will want to keep original tokens on Ethereum mainnet.

## 2. Art

The Wrassling Arena interface currently expects an avatar image to be used in the matchmaking lobby and match HUDs. We don't require that existing projects create new artwork for these tokens, but do encourage it - even layering a wrestling onesie on your avatar project could give it that extra bit of polish that makes the new NFTs desirable.

We don't need to see 10k images in order to approve your project - we just want to hear about how you are approaching this aspect of your project. For projects that have not yet launched we assume you will be creating original art for your tokens. We will likely not approach tokens that infringe on intellectual property the project creators do not own. This includes "homages."

## 3. Attributes

In order to keep gameplay fair, 0xEssential is developing a system for starting attributes for partner projects. If we allowed each project to determine their tokens' attribute points freely we fear that every partner project would make extremely strong Wrasslers, which would defeat the purpose of the game.

We will grant each partner project a number of attribute points per token in the project supply. Let's say you have 1,000 tokens in your project - we might allow you to distribute 10,000 attribute points among those tokens, or 1,000 attribute points per token. With 5 attributes, you could assign each token 200 points in each category for a flat distribution.

You may also decide to distribute attribute points in a more random fashion, or in a way that corresponds to your token rarity, where your rarest tokens get more attribute points than your common tokens.

0xEssential will ask you to pin a JSON file to IPFS that specifies the attribute points for each token ID. We'll have automated tests to ensure your JSON file is in compliance. When you launch, the WrasslingArena contracts will fetch attributes from IPFS and set them for your project's tokens.

## 4. Project approval

Once you've made decisions about your chain and distribution approach, know how you'll produce art for your tokens, and have an idea of how to distribute your attribute points, you're ready to apply for approval from 0xEssential.

We aspire to remove this step, or allow community members to determine approvals, but at the outset 0xEssential will take a top-down approach to ensure a strong experience for all projects and players.

We don't have an official form or anything, and hope that you will open conversation with us prior to applying for approval - we want to help! Please don't contribute significant resources in creative or engineering prior to having our approval. We may not be able to approve your project immediately based on our scaling, and we'd hate for you to take on this project before we are totally ready for you.

## 5. Smart contracts

The best way to get started building Wrassleable NFTs is to review and clone our example projects.

We provide templates on Github that you can use to start your project. They include our inheritable contracts via NPM, plus tooling for linting, formatting and deploying. We offer examples for any approach, whether you have an existing NFT project or are working on something new, and whether you want to deploy multi-chain or Matic-exclusive NFTs.

You can find each of these example projects on Github, along with simple tutorials for cloning, customizing and deploying.

These example projects are opinionated - they use Hardhat for deployment, include eslint, solhint and prettier for linting and formatting, and use mocha and chai with TypeScript for testing. If these tools don't fit your workflow and you're an experienced Solidity developer, you might prefer to inherit our contracts via NPM packages and build according to your own workflow.

<!-- We'd love to hear from teams that are want to implement Wrassleable tokens - we can provide support and guidance for your build, so please reach out to us before you commit significant resources to this project!

### Existing projects

If you've already deployed an ERC721 contract, 0xEssential recommends deploying new, Matic-exclusive tokens that your current owners can claim. This approach is similar to how Bored Apes Yacht Club released their Bored Apes Kennel Club tokens.

Wrassleable NFTs must be deployed to Matic, so you'll need to think through how to distribute these NFTs. Multi-chain NFTs will be simpler to distribute, but will require more dApp development. Matic-exclusive NFTs will be simpler to deploy, won't require complicated dApp development, but 

#### Matic-exclusive

The Matic chain uses the same addresses as Ethereum mainnet, so either airdrops or a claim model work well - your Matic contract cannot read token ownership from Ethereum mainnet, so you'll need to snapshot your owners and use the snapshot addresses to airdrop or allow claiming. Airdrops require less dApp development but are more expensive. Claiming is a great model, but the ability to claim does not follow L1 ownership - if a token owner sells your original NFT on Ethereum mainnet, they can still claim the Matic-based derivative token.

#### Multi-chain

Multi-chain Wrassleable NFTs require more dApp development, but will allow for an Ethereum mainnet claim process that respects current ownership of your L1 NFTs. This allows for a token owner to sell their original token prior to claiming the derivative Wrassler, which can increase the market value of the original token. Similar to CryptoPunks => Meebits or BAYC => BAKC, you should provide dApp functionality to tell potential buyers if the derivative Wrassleable token has already been claimed.

### New Projects

#### Matic-exclusive

#### Multi-chain -->
