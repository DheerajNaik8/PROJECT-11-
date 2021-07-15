  var runner, runnerImg;
 var path, pathImg;
 var leftBoundary;
 var rightBoundary;


function preload(){
  //pre-load images
 runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
 pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

 //Moving background
 path = createSprite (200,200);
 path.addImage(pathImg);
 path.velocityY = 4;
 path.scale = 1.2; 


  //create sprites here
  runner = createSprite(180,340,30,30);
  runner.addAnimation("running",runnerImg);
  runner.scale = 0.08;

  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;


  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

}

function draw() {
  background(0);
path.velocityY = 4;

 edges = createEdgeSprites();
 runner.collide(leftBoundary);
 runner.collide(rightBoundary);
 runner.collide(edges[3]);
 runner.x = World.mouseX;




  //code to reset the background
if (path.y > 400) {
  path.y = height/2;
}

  drawSprites();

}

