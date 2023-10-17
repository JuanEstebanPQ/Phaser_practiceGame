import { RestartButton } from "../components/restartButton.js";

export class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "gameover" });

    this.restartButton = new RestartButton(this);
  }

  preload() {
    this.load.image("gameover", "images/gameover.png");
    this.restartButton.preload();
  }

  create() {
    this.add.image(410, 250, "background");
    this.restartButton.create();
    this.gameoverImage = this.add.image(400, 130, "gameover");
  }
}
