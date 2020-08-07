//Sprite variable
var car, wall;

//Quantity variable
var speed, weight, deformation;

function setup() {
  createCanvas(800, 400);

  //speed and weight
  speed = random(55, 90);
  weight = random(400, 1500);

  //car
  car = createSprite(200, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor=color(225,225,225);

  //wall
  wall = createSprite(750, 200, 60, 200);

}

function draw() {
  background(0);

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    //deformation
    deformation = 0.5 * weight * speed * speed / 22500;

    if (deformation < 100) {
      car.shapeColor = color(0, 225, 0);
    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation > 180) {
      car.shapeColor = color(225, 0, 0);
    }
  }
  textSize(18);
  fill("White");
  text("Deformation -" + Math.round(deformation), 400, 20);
  drawSprites();
}
