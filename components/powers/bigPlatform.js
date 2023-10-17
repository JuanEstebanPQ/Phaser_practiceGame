import { Power } from "./power.js";

export class BigPlatform extends Power {
  constructor(scene, diamonds) {
    super(scene, diamonds, "reddiamond");
  }

  givePower() {
    this.relatedScene.setPlatformBig();
  }
}
