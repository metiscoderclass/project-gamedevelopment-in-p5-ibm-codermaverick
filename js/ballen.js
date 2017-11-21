var xSize = 1520;
var ySize = 755;
var bal1;
var player1_y = 70;
var player2_y = 70;
var player2_x = 30;
var player1_x = 1470;

function setup(){
  createCanvas(xSize, ySize);
  bal1 = new Bal();
  bal1.xPos = 21;
  bal1.yPos = 21;
  bal1.radius = 10;
  bal1.xSpeed = 6;
  bal1.ySpeed = 6;
}

function draw(){
  background(0);
  bal1.teken();
  bal1.beweeg();
  rect(player2_x, player2_y, 20, 125);
  rect(player1_x, player1_y, 20, 125);
  if (keyIsDown(UP_ARROW)){
       player1_y -= 8;
       console.log("Boven");
     } else if (keyIsDown(DOWN_ARROW)){
       player1_y += 8;
       console.log("Beneden");
     } if (keyIsDown(87)){
       player2_y -= 8;
       console.log("Beneden");
     } else if (keyIsDown(83)){
       player2_y += 8;
       console.log("Beneden");
     } if (player2_y < 0){
       player2_y = 0;
     } if (player2_y > 630){
       player2_y = 630;
     }
}

function Bal(){
  this.xPos;
  this.yPos;
  this.radius;
  this.xSpeed;
  this.ySpeed;

  this.teken = function(){
    fill(255, 255, 255);
    ellipse(this.xPos, this.yPos, 2*this.radius, 2*this.radius);
  }

  this.beweeg = function(){
    if (this.xPos > width - this.radius || this.xPos < this.radius){
      this.xSpeed = -this.xSpeed;
    }
    if (this.yPos > height - this.radius || this.yPos < this.radius){
      this.ySpeed = -this.ySpeed;
    }
    this.xPos += this.xSpeed;
    this.yPos += this.ySpeed;
  }
}
