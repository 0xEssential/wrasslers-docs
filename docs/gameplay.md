---
sidebar_position: 10
---

# Gameplay

0xEssential will verify the gaming contracts once we launch the Wrassling Arena. Until then, and for those interested who don't read Solidity, this documents how match gameplay works.

The gameplay is scripted, much like wrestling in real life. Players have no control over their Wrasslers or moves performed - the strategy is to challenge Wrasslers who you match up with well.

## WrasslingMatch

Each match is performed by the `WrasslingMatch` contract. This contract allows a Wrassleable token owner to `challenge` another Wrassleable NFT. The owner of the token that receives the challenge can `accept` the challenge, which performs the match.

The `WrasslingMatch` contract uses Chainlink VRF to request a provably random number that is used to perform the match, and the match is performed in a single transaction.

Each competitor starts the match with 1000 HP. The challenger performs the first move, and then moves alternate until one of the competitors reaches 0 HP. Each move calculates an HP hit based on a randomly selected move, where each move interacts with a Wrassler's attributes plus some luck to determine the final HP hit. Some moves work better for strong Wrasslers, while others work better for agile Wrasslers.

## Moves

0xEssential creates and sets the list of moves for the `WrasslingMatch` contract. The JSON file that describes each move is available on IPFS, allowing for third parties to perform data analysis to look for an edge. Moves are mutable - 0xEssential will from time-to-time change the list of moves to keep gameplay varied.

This is the struct that defines a `WrasslingMove`:

```solidity
    struct WrasslingMove {
        string id;
        uint8 impact;
        uint8 attackMultiplier;
        uint8 strengthMultiplier;
        uint8 agilityMultiplier;
        uint8 creativityMultiplier;
        uint8 defenseMultiplier;
        uint8 strengthDefenseMultiplier;
        uint8 agilityDefenseMultiplier;
        uint8 creativityDefenseMultiplier;
    }
```

Here is an example move:

```typescript
{
    id: 0,
    impact: 90,
    attackMultiplier: 7,
    strengthMultiplier: 25,
    agilityMultiplier: 12,
    creativityMultiplier: 17,
    defenseMultiplier: 6,
    strengthDefenseMultiplier: 19,
    agilityDefenseMultiplier: 13,
    creativityDefenseMultiplier: 21,
}
```

## Events

Each move emits an `MovePerformed` event including the move `id` and the `hpImpact` as determined on-chain. We use a The Graph subgraph to index these events, and construct the narrative data implied by the move - for instance, we persist a winner on the subgraph entity by performing the same math logic performed by the contract. This winner isn't stored on chain, but can be reliably recreated from emitted events, or queried from the subgraph. We may eventually build our own indexing service depending on The Graph cost and performance.

In the Wrasslers demo, matches have been pre-performed and indexed, and when you select your competitors you are being shown one of the matches the 0xEssential team previously performed. This will be available in the Wrassling Arena, but the 0xEssential team has deep experience with low-latency web-socket events and will pursue an experience where every spectator of a match receives output simultaneously for live matches.
