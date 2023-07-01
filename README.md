# allies

## Inspiration

This project aims to modify the popular party game [Mafia](https://en.wikipedia.org/wiki/Mafia_(party_game)) by replacing the traditional Game Master with a web server, allowing all players to participate without any restrictions.


## Rules

The game can be played with 4 to 20 players. Each player is assigned a secret role at the beginning.

The game consists of two phases:

* **Night**: All players close their eyes. Upon a sound signal, the Mafia members open their eyes and choose a player to eliminate. After making a decision, the Mafia members close their eyes.
* **Day**: All players open their eyes. The game master reveals the eliminated players. The surviving players discuss and vote to eliminate a suspect. The person with the most votes is eliminated, and their role is revealed.

The game ends when the last Mafia member is voted out or when the number of regular citizens is less than the number of Mafia members.

## Additional roles

Numerous versions of this game exist all around the world, with each version having a different set of additional roles. This project includes the following optional roles:

*   💉 **Doctor** - during the night, the Doctor can choose one player to **heal** and save from elimination that night
*   🔎 **Cop** - during the night, the Cop can choose one player to **learn their alignment** (Mafia or non-Mafia)
*   🥜 **Nitwit** - the Nitwit's role is to create confusion and **act suspicious**. Their objective is to be voted out during the daytime elimination
*   🚕 **Cabby** - during the night, the Cabby can choose one player to **block**, preventing them from receiving or using any special abilities (the sniper wouldn't shoot, the healed wouldn't be healed, etc.)
*   🎯 **Sniper** - during the night, the Sniper can choose to **shoot** once throughout the game and select a player. If the Sniper selects a Mafia member, only the selected person is eliminated. If the Sniper selects a non-Mafia player, both the Sniper, and the selected person are eliminated
