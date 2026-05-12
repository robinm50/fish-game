import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Fish } from './fish.js'
export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
       
            for(let i = 0; i < 100; i++){
            const fish = new Fish();
            this.add(fish);
        }
           
        // fish.graphics.use(Resources.Fish.toSprite()) // plaatje toevoegen aan je actor
        // fish.pos = new Vector(500, 300)  // positie van je actor
        // fish.vel = new Vector(-10,0) // velociteit van je actor 
        // fish.events.on("exitviewport", (e) => this.fishLeft(e)) //wat er gebeurt als de actor het scherm verlaat na de , is wat die uitvoert
        // this.add(fish)// toevoegen aan de scene this omdat je in de game zit

        // const shark = new Actor()
        // shark.graphics.use(Resources.Shark.toSprite()) 
        // shark.pos= new Vector(1000, 500)
        // shark.vel = new Vector(300,0)
        // shark.events.on("exitviewport", (e) => this.sharkRight(e))
        // this.add(shark)
        
        // for(let i = 0; i < 100; i++){
        //     this.createBubble()
        // }
    }

createBubble(){
    const bubble = new Actor()
    bubble.graphics.use(Resources.Bubble.toSprite())
   
    const randomX = Math.random() * this.drawWidth
    const randomY = Math.random() * 1000 +(this.drawHeight - Resources.Bubble.height / 2)
    bubble.pos = new Vector(randomX, randomY)
    bubble.vel = new Vector(0, -(Math.random() * 20 + 10))
    
    this.add(bubble)
}
   
    
    sharkRight(e) {     
           e.target.pos = new Vector(-50, 500)
    }
}

new Game()
