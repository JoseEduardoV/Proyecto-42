var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  bg2= loadImage("treasure.jpg")
  bg= loadImage("aladdin_cave.jpg")
  //load image for the treasure background
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}



/*function clues()
{
fill("white");
textSize(15);
text ("R E V B A L I A", 100,50);
fill("lightblue");
text("Hint: Always changing not constant !!", 100,70);
text("A T E B A S A D", 700,50);
text("Hint: Stores all information !!", 700,70)
text("C U N I T F O N", 100,330)
text("Hint: performs a particular task", 100,350)
}*/