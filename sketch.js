const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(200,390,800,20);
   
    console.log(ground.width);
   

    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
   
    


   
}