---
sidebar_position: 2
title: "Registration details"
---

## Requirements

Wrasslers is compatible with ERC721 contracts on Ethereum mainnet or Polygon. Contracts must provide an `owner` function returning an address identifying the project owner. This address needs to submit or sign a transaction for registration.

Your contract will be evaluated for activity and ownership to prevent abuse.

## Ethereum mainnet

Ethereum mainnet registration is permissionless for eligible NFT project owners. Submit a transaction to the mainnet contract. Your registration will be indexed on Polygon allowing your token owners to register.

You can then submit a transaction on Polygon to enable attribute randomization for your project.

## Polygon

Wrasslers offers a frontend that uses a meta-transaction to register your project directly in the protocol on Polygon. Wrasslers uses a centralized middleware to look up your Ethereum mainnet contract and submit a permissioned transaction for registration.

You can then submit a transaction to enable attribute randomization for your project.

## Randomness

Projects can pay the cost for randomizing a collection's starting stats with Chainlink VRF - randomly assigned starting attributes will be higher than those from projects who register for free.



## Rewards

Registering a project will mint you 25 $WRASSXP per token in your collection. 


## Next steps

Once your project is registered, your community can register individual NFTs. The Wrasslers games offer token registration, and Wrasslers provides dev tools to build your own experiences.

When an NFT registered with Wrasslers is transferred, the protocol offers both L1 and Polygon functions for updating ownership data on the protocol.

