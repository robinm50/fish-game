import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'


export class Fish extends Actor {
   randomY;
   constructor() {
    super();
    console.log("ik ben een vis");
   }

   onInitialize(engine) {
    this.graphics.use(Resources.Fish.toSprite());
    this.vel = new Vector(-100,0) ;
    const randomX = Math.random() * engine.drawWidth;
    this.randomY = Math.random() * engine.drawHeight;
    this.pos = new Vector(randomX, this.randomY);
    this.events.on("exitviewport", (e) => this.fishLeft(e));
   
   }

    fishLeft(engine) {
    //  const randomY1 = Math.random() * engine.drawHeight;
        this.pos = new Vector(this.scene.engine.drawWidth + Resources.Fish.width /2, this.randomY);
    }
}