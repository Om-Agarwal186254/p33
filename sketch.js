const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var snow2=[]
,grnd
var Jeryme
var BgmImg

function preload() {
   BgmImg = loadImage("snow3.jpg")
  

}

function setup() {
  var canvas = createCanvas(1400,700);
  engine = Engine.create()
  world = engine.world
 Jeryme = createSprite(1300,650,50,50)
 
  
}

function draw() {
  background(BgmImg); 

   //create the particles using frameCount
if(frameCount%60===0){
  snow2.push(new Snow(random(0,800),0))
}

  //display the particles 
  for (var k = 0; k < snow2.length; k++) {
    snow2[k].display();   
  }
  
  Jeryme.display()
  drawSprites();
}
