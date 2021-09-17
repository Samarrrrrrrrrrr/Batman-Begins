var thunder, thunder1, thunder2, thunder3, thunder4
var engine, world
var drops = []
var rand
var maxDrops
var thunderCreateFrame=0

function preload() {

    // loading all images and giving names
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/1.png")
    thunder3 = loadImage("images/thunderbolt/1.png")
    thunder4 = loadImage("images/thunderbolt/1.png")

}

function setup() {

    engine = Engine.create()
    world = engine.world

    createCanvas(500,1000);
    
    //using the class to make a object
umbrella = new Umbrella(200,500)

//spawns rain drops (99 in total)
if(frameCount % 150 === 0) {

    for(var i=0; i<maxDrops; i++) {

        drops.push(new createDrops(random(0,400), random(0,400)));
    }
}
}

function draw() {

Engine.undate(engine)

background(0)

//spawning in lightning bolts at random
rand = Math.round(random(1,4))
if(frameCount%80===0) {
    thunderCreatedFrame=frameCount
    thunder = createSprite(random(10,370), random(10,30), 10, 10)
    switch(rand) {
        case 1: thunder.addImage(thunder1)
        break
        case 2: thunder.addImage(thunder2)
        break
        case 3: thunder.addImage(thunder3)
        break
        case 4: thunder.addImage(thunder4)
        break
        default: break
    }
    thunder.scale = random(0.3,0.6)
}

// distroys lightning bolt quickly after its been shown
if(thunderCreatedFrame + 10 === frameCount && thunder) {
    thunder.destroy()
}

//displays the umbrella
umbrella.display()

//updates the drops
for(var i = 0; i<maxDrops; i++) {
    drops[i].showDrop()
    drops[i].update()
}

drawSprites()
}
