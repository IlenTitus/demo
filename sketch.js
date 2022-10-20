var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyDown("up")){
box.y+=2
  }
drawSprites()
}




