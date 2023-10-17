import { Game } from "./scenes/game.js";
import { GameOver } from "./scenes/gameOver.js";
import { Congratulation } from "./scenes/congratulations.js";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  scene: [Game, Congratulation, GameOver],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
