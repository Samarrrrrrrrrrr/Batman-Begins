class Umbrella{

    constructor(x,y) {

        // making the umbrella
        this.image = loadImage("images/Walking Frame/walking_1.png")
    this.umbrella = bodies.circle(x,y,50)
World.add(world, this.umbrella)
    }

    display() {

        //attaching the image to the object
var pos = this.umbrella.position
imageMode(CENTER)
this.image(this.image,pos.x,pos.y+70,200,200)
    }

}