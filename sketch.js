const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var plinko1 = [];
var particle1 = [];
var divisions1 = [];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
   ground1 = new ground(240,780,480,20);
   for (var k = 0; k <=width; k = k + 80) {
      divisions1.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight));
     } 
     
     for (var j = 40; j <= width; j=j+50) {
        plinko1.push(new plinko(j,75));
       }

      for(var j = 15; j <= width-10; j = j+50 ){
        plinko1.push(new plinko (j,175));
      }
  

}

function draw() {
  background(0);  
  Engine.update(engine);
  ground1.display();
  for(var k = 0; k < divisions1.length;k = k +1){
    divisions1[k].display();
  }

  for (var i = 0; i < plinko1.length; i++) { 
    plinko1[i].display(); 
  }

  if(frameCount%60===0){ 
    particle1.push(new particle(random(width/2-30, width/2+30), 10,10));
    score++; 
  }

  for (var j = 0; j < particle1.length; j++) {
     particle1[j].display(); 
    }
  drawSprites();
}



