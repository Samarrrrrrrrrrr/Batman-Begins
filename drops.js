class Drops{

constructor(x,y) {

    //making the rain drops
this.rain = Bodies.circle(x,y,5)
World.add(world, this.rain)

}
    
display() {

    //relocating drops back to the top
if(this.rain.position.y > height) {

    Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
}

}

showDrops() {

    //displaying the drops
fill("blue")
ellipseMode(CENTER)
ellipse(this.rain.position.x,this.rain.position.y,5,5)

}
}