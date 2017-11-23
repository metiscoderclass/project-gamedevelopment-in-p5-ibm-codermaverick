var xSize = 1520;
var ySize = 755;
var bal1;
var player1_y = 70;
var player2_y = 70;
var player2_x = 30;
var player1_x = 1470;
var distance = 125;

function setup(){
  createCanvas(xSize, ySize);
  bal1 = new Bal();
  bal1.xPos = 21;
  bal1.yPos = 21;
  bal1.radius = 10;
  bal1.xSpeed = 7;
  bal1.ySpeed = 7;
}

function draw(){
  background(0);
  bal1.teken();
  bal1.beweeg();
  bal1.check();
  rect(player2_x, player2_y, 20, distance);
  rect(player1_x, player1_y, 20, distance);
  if (keyIsDown(UP_ARROW)){
       player1_y -= 9;
       console.log("Boven player 1");
     } else if (keyIsDown(DOWN_ARROW)){
       player1_y += 9;
       console.log("Beneden player 1");
     } if (keyIsDown(87)){
       player2_y -= 9;
       console.log("Boven player 2");
     } else if (keyIsDown(83)){
       player2_y += 9;
       console.log("Beneden player 2");
     } if (player2_y < 0){
       player2_y = 0;
     } if (player2_y > 630){
       player2_y = 630;
     } if (player1_y < 0){
       player1_y = 0;
     } if (player1_y > 630){
       player1_y = 630;
     }
}

function Bal(){
  this.xPos;
  this.yPos;
  this.radius;
  this.xSpeed;
  this.ySpeed;

  this.check = function(){
    if (this.yPos > player2_y && this.yPos < player2_y + distance && this.xPos < player2_x){
      this.xSpeed = -this.xSpeed;
      this.ySpeed = -this.ySpeed;
      console.log("Geraakt");
    }  if (this.yPos > player1_y && this.yPos < player1_y + distance && this.xPos > player1_x){
        this.xSpeed = -this.xSpeed;
        this.ySpeed = -this.ySpeed;
        console.log("Geraakt");
      }
  }

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
