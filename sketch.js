function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  moverect=createSprite(300,200,40,40 );
  fixrect.debug=true;
  moverect.debug=true;
}

function draw() {
  background("black");
  moverect.x=mouseX;
  moverect.y=mouseY; 
  if(moverect.x-fixrect.x < fixrect.width/2+moverect.width/2
    && fixrect.x-moverect.x < fixrect.width/2+moverect.width/2
    && moverect.y-fixrect.y < fixrect.height/2+moverect.height/2
    && fixrect.y-moverect.y < fixrect.height/2+moverect.height/2
    ){
    fixrect.shapeColor = "red";
    moverect.shapeColor = "red";
  }
  else{
    fixrect.shapeColor = "green";
    moverect.shapeColor = "green";
  }
  drawSprites();
}