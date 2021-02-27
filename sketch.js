const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine  
var myWorld
var Building1,Building2,Building3,Building4,Building5,Building6,Building7,Building8,Building9,Building10,Building11,Building12
var Building13,Building14,Building15,Building16,Building17,Building18
var ground
var ball
var rope
var monster

var backgroundImg;
function preload() {
  backgroundImg=loadImage("images/GamingBackground.png");

  
  }
function setup() {
  createCanvas(1200,600);
  myEngine=Engine.create();
  myWorld= myEngine.world;
  Building1= new Building(800,500);
  Building2= new Building(850,500);
  Building3= new Building(750,500);
  Building4= new Building(800,450);
  Building5= new Building(850,450);
  Building6= new Building(750,450);
  Building7= new Building(800,400);
  Building8= new Building(850,400);
  Building9= new Building(750,400);
  Building10= new Building(800,350);
  Building11= new Building(850,350);
  Building12= new Building(750,350);
  Building13= new Building(800,300);
  Building14= new Building(850,300);
  Building15= new Building(750,300);
  Building16= new Building(800,250);
  Building17= new Building(850,250);
  Building18= new Building(750,250);
  ground= new Ground(600,550,1200,20);
  ball= new Ball(500,450,150,150);
  monster= new Monster(1000,350,150);
  rope=new Rope(ball.body,{x:500,y:100});
}

function draw() {
  Engine.update(myEngine);
  background(backgroundImg);  
  Building1.display();
  Building2.display();
  Building3.display();
  Building4.display();
  Building5.display();
  Building6.display();
  Building7.display();
  Building8.display();
  Building9.display();
  Building10.display();
  Building11.display();
  Building12.display();
  Building13.display();
  Building14.display();
  Building15.display();
  Building16.display();
  Building17.display();
  Building18.display();
  ground.display();
  ball.display();
  rope.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}