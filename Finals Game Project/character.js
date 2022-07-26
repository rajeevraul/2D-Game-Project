//Drawing character jumping left
function drawJumpingLeft(){
    fill(255, 0, 0);
    ellipse(gameChar_x - 10, gameChar_y - 70, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x - 20, gameChar_y - 56, 19, 40);
    fill(0, 0, 0);
    rect(gameChar_x -15, gameChar_y - 17, 10, 10);
    fill(255)
    rect(gameChar_x - 17, gameChar_y - 77, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x - 15, gameChar_y - 56, 5, 25);
}

//Drawing character jumping right
function drawJumpingRight(){  
    fill(255, 0, 0);
    ellipse(gameChar_x + 10, gameChar_y - 70, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x + 1, gameChar_y - 56, 19, 40);
    fill(0, 0, 0);
    rect(gameChar_x + 5, gameChar_y - 17, 10, 10);
    fill(255)
    rect(gameChar_x + 13, gameChar_y - 77, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x + 11, gameChar_y - 56, 5, 25);
}

//Drawing character walking left
function drawWalkingLeft(){
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 60, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x - 9, gameChar_y - 46, 19, 40);
    fill(0, 0, 0);
    rect(gameChar_x - 5, gameChar_y - 7, 10, 10);
    fill(255);
    rect(gameChar_x - 9, gameChar_y - 67, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x - 4, gameChar_y - 46, 5, 25);

}

//Drawing character walking right
function drawWalkingRight(){
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 60, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x - 9, gameChar_y - 46, 19, 40);
    fill(0, 0, 0);
    rect(gameChar_x - 5, gameChar_y - 7, 10, 10);
    fill(255);
    rect(gameChar_x + 3, gameChar_y - 67, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x, gameChar_y - 46, 5, 25);
}

//Drawing character jumping 
function drawJumpingFacingForwards(){
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 70, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x - 13, gameChar_y - 56, 26, 40);
    fill(0, 0, 0);
    rect(gameChar_x - 18, gameChar_y - 17, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x + 8, gameChar_y - 17, 10, 10);
    fill(255);
    rect(gameChar_x - 7, gameChar_y - 77, 5, 5);
    fill(255)
    rect(gameChar_x + 3, gameChar_y - 77, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x + 13, gameChar_y - 56, 5, 13);
    fill(0, 0, 0);
    rect(gameChar_x - 18, gameChar_y - 56, 5, 13);
}

//Drawing character standing stationary
function drawStandingFrontFacing(){
    fill(255, 0, 0);
    ellipse(gameChar_x, gameChar_y - 60, 30, 30);
    stroke(0);
    fill(255, 0, 0);
    rect(gameChar_x - 13, gameChar_y - 46, 26, 40);
    fill(0, 0, 0);
    rect(gameChar_x - 13, gameChar_y - 7, 10, 10);
    fill(0, 0, 0);
    rect(gameChar_x + 3, gameChar_y - 7, 10, 10);
    fill(255);
    rect(gameChar_x - 7, gameChar_y - 67, 5, 5);
    fill(255)
    rect(gameChar_x + 3, gameChar_y - 67, 5, 5);
    fill(0, 0, 0);
    rect(gameChar_x + 13, gameChar_y - 46, 5, 25);
    fill(0, 0, 0);
    rect(gameChar_x - 18, gameChar_y - 46, 5, 25);
}
