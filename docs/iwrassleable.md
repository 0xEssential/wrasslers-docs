---
sidebar_position: 2
---

# Wrassleable Standard

:::caution Seeking Community Input

The `IWrassleable` standard is under development and we're seeking community input! Please contribute to our RFC if you have strong feelings about the standard, required functions for calling and receiving calls from the Wrassling Arena contract and our approach to roles and permissions.

https://github.com/OpenZeppelin/openzeppelin-contracts/issues/2769
:::

The `IWrassleable` interface is the open-source standard that allows access to the Wrassling Arena. Your contract must implement the required functions from this interface in order to create compliant tokens. You will also need to import the `IWrasslingArena` interface in order to call the arena contract.

0xEssential will not approve contracts that have not been verified on PolygonScan. Until we are supremely confident that we can maintain gameplay integrity through automated means, we must be able to evaluate your deployed contract's source code for compliance with standards and our rules for fair play.

## Attributes

Wrassler attributes are defined using the `IWrassleable.Wrassler` struct:

```solidity
    struct Wrassler {
        bytes id;
        address wrassleableContract;
        uint256 tokenId;
        string name;
        string bio;
        uint256 attack;
        uint256 defense;
        uint256 strength;
        uint256 agility;
        uint256 creativity;
    }
```

You are welcome to use the interface and write your own compliant contract from scratch, but we also provide inheritable contracts that implement the required functions alongside virtual functions to be overridden by you where necessary.

The `id`, `wrassleableContract` and `tokenId` allow the Wrassling Arena to interact with your contract and should be derived from your deployment and token IDs from your minting. 

The `name` and `bio` strings are used in the gaming layer for display purposes, and may be set by your users, generated based on traits or written by your team.

The `attack`, `defense`, `strength`, `agility` and `creativity` integers are the gameplay attributes used by the gaming contracts and are derived from the an approved JSON file you pin to IPFS prior to contract deployment.

## Functions

Your contract must also implement functions to handle registering a token in the Wrassling Arena and for receiving a call from the Wrassling Arena to upgrade a Wrassler's attributes.

Registration can be performed by your contract admin in bulk, or as a public function called by a token owner. The Wrassling Arena provides a public function for registration that can only be called by approved contracts. Your contract can call `IWrasslingArena(arenaAddress).registerWrassler` to register a Wrassler, so you will need to call that internally, either in bulk by contract owner or per-token by the token owner.

## Roles and permissions

0xEssential is committed to the open metaverse, and wants to allow your contract to persist the same upgraded wrassling attributes as our gaming contracts persist. If your token holder increases their stats through playing the game, we want those increased stats to be available to any game that uses the Wrassleable standard via your ERC721 contract.

To achieve this, your contract must implement Role Based Access Control, preferably using OpenZeppelin's `AccessControl` contracts - our open source contracts handle this for you.

First, in your constructor you will create an `ATTRIBUTE_UPGRADER_ROLE` and grant it to the Wrassling Arena address. You must then also set the Wrassling Arena as the role admin - this gives the Wrassling Arena exclusive permission to grant and revoke the `ATTRIBUTE_UPGRADER_ROLE`. When 0xEssential adds your contract to the allow-list of Wrassleable contracts, the Wrassling Arena contract will ensure that it has this role, is the role administrator, and no other addresses have this role.

0xEssential takes fairness and integrity incredibly seriously. Any attempt to circumvent our rules will result in being banned from the Metaverse Wrassling Federation.
