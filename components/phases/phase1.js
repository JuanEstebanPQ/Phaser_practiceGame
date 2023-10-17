import { Phase } from "./phase.js";
import {Diamonds} from "../diamonds.js";
import {LivePower} from "../powers/livePower.js";
import { BigPlatform } from '../powers/bigPlatform.js';
import { GluePower } from '../powers/gluePower.js';

export class Phase1 extends Phase {
  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ["bluebrick", "orangebrick", "greenbrick", "blackbrick"],
      frameQuantity: 10,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 67,
        cellHeight: 34,
        x: 70,
        y: 100,
      },
    });

    this.configureColisions();
    this.diamonds = new Diamonds(this.relatedScene);
    this.setBrickCollider(this.diamonds.diamonds);

    this.powers[3] = new LivePower(this.relatedScene, this.diamonds);
    this.powers[35] = new LivePower(this.relatedScene, this.diamonds);
    this.powers[1] = new BigPlatform(this.relatedScene, this.diamonds);
    this.powers[24] = new BigPlatform(this.relatedScene, this.diamonds);
    this.powers[16] = new GluePower(this.relatedScene, this.diamonds);
    this.powers[29] = new GluePower(this.relatedScene, this.diamonds);
  }
}
