
var garden;
var cat,mouse,gardenbg,mouserun,catrun;
var cat1,cat2,cat3,cat4; 
var mouse1,mouse2,mouse3,mouse4;
var cat_running, mouse_teasing;

function preload() {
    //load the images here
    garden = loadImage("images/garden.png");

    cat1 = loadImage("images/cat1.png");
    cat_running = loadAnimation("images/cat2.png","images/cat3.png");
    cat4 = loadAnimation("images/cat4.png");

    mouse1 = loadImage("images/mouse1.png");
    mouse_teasing = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    gardenbg = createSprite(500,400,500,400);
    gardenbg.addImage("bgimage",garden);

    cat = createSprite(900,700,30,30);
    cat.addImage("cat1",cat1);

    mouse = createSprite(100,700,30,30);
    mouse.addImage("mouse1", mouse1);

}

function draw() {

    background(gardenbg);
    //    keyPressed();
    
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
        cat.changeImage("yes",cat4);
        cat.Velocity = 0;
        mouse.changeImage("yes",mouse4);
    }

    drawSprites();
}


function keyPressed(){

    if(keycode===LEFT_ARROW){
        mouse.addAnimation("run",mouse_teasing);
        cat.addAnimation("run",cat_running);
        cat.velocityY = 2;
    };

  //For moving and changing animation write code here


}
