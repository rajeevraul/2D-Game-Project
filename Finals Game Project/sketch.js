/*Commentary: 
I have added sounds, platforms and enemies to my game project. With the addition of the sound, it reinforces to the user that their inputs have an impact on the state of the game. Sound was added to all major game checkpoints to reinforce the players inputs. I have also added platforms to so as to not make my game monotonous. With  platforms, the player can find additional ways to complete the game as opposed to a single plane. I have also added enemies as an extra challenge to the game. Games are supposed to have a form of challenge to make it appealing to play it in the first place. With an added level of difficulty, the moving enemies pose a fun challenge to the player.

The bits I found difficult were fixing bugs when I combined all the elements of my game project together. I notably had problems when I added constructor functions to implement the enemies. 

I learnt to be resourceful by isolating and compartmentalising different aspects of the code. I have also learnt how to search up problems on the internet to find a fix for some of the bugs I was encountering.
*/

//Variables for game character
var gameChar_x;
var gameChar_y;
var gameChar_width;
var floorPos_y;
var gameChar_world_x;

//Variables for game character movement
var isLeft;
var isRight
var isFalling;
var isPlummeting;

//Variables for background objects
var collectables;
var canyons;
var clouds;
var mountains;
var trees;
var flagpole;
var scrollPos;
var game_score;
var lives;

//Variables for enemies
var enemies;
var hitByEnemy;

//Variables for platforms
var platforms;
var onPlatform;

function setup(){
    //Creating sketch
    createCanvas(1024, 576);
    floorPos_y = height * 3/4;
    
    lives = 3;
    
    //Initailiasing start game function
    startGame();
    
    //Drawing the emitter
    emit = new Emitter(250, height, 0, -1, 10, color(255, 0, 0, 100));
    emit.startEmitter(900, 400);
}
    
function startGame(){
    //Game character positioning
    gameChar_x = width/2;
    gameChar_y = floorPos_y;
    gameChar_width = 50;
    
    //Game starts with a dwfault of zero points
    game_score = 0;
    
    //Setting Boolean values to default false
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
    hitByEnemy = false;
    onPlatform = false;
    
    //Implemented for scrolling
    scrollPos = 0;
    gameChar_world_x = gameChar_x - scrollPos;
        
    //Initialising canyons at resective coordinates
    canyons = [{x_pos: 300, y_pos:floorPos_y},
               {x_pos: 850, y_pos:floorPos_y}];
    
    //Initialising collectables at resective coordinates along with its Boolean value
    collectables = [{x_pos: 40, y_pos: 414, size: 40, isFound: false},
                    {x_pos: 400, y_pos: 414, size: 40, isFound: false},
                    {x_pos: 1000, y_pos: 414, size: 40, isFound: false}];
                    
    //Initialising clouds at resective coordinates
    clouds = [{x_pos: random(-100,0), y_pos: random(100, 200), width: random(40,50)},
              {x_pos: random(0,100), y_pos: random(0,100), width: random(50,70)},
              {x_pos: random(100,200), y_pos: random(100,200), width: random(50,70)},
              {x_pos: random(600,700), y_pos: random(100,200), width: random(60,70)},
              {x_pos: random(800,900), y_pos: random(200,300), width: random(50,70)},    
              {x_pos: random(400,500), y_pos: random(0,100), width: random(60,70)},
              {x_pos: random(1000,1100), y_pos: random(100,200), width: random(50,70)},
              {x_pos: random(1200,1300), y_pos: random(100,200), width: random(60,70)}];
    
    //Initialising mountains at resective coordinates
    mountains=[{x_pos: -200, y_pos: floorPos_y},
               {x_pos: 400, y_pos: floorPos_y},
               {x_pos: 1000, y_pos: floorPos_y},
               {x_pos: 1200, y_pos: floorPos_y}];
    
    //Initialising trees at resective coordinates
    trees=[{x_pos: -100, y_pos: 288},
           {x_pos: 100, y_pos: 288},
           {x_pos: 350, y_pos: 288},
           {x_pos: 600, y_pos: 288},
           {x_pos: 900, y_pos: 288},
           {x_pos: 1300, y_pos: 288}]
    
    //Initialising flagpole at resective coordinate along with its Boolean value
    flagpole = {x_pos: 2000, height: 400, isReached: false};
    
    //Initialising enemies at resective coordinates and pushing them into the empty array
    enemies=[];
    enemies.push(new Enemy(-100,floorPos_y-10,100));
    enemies.push(new Enemy(300,floorPos_y-10,100));
    enemies.push(new Enemy(600,floorPos_y-10,100));
    enemies.push(new Enemy(950,floorPos_y-10,100));
    enemies.push(new Enemy(1200,floorPos_y-10,100));
    
    //Initialising platforms at resective coordinates and pushing them into the empty array
    platforms=[];
    platforms.push(createPlatform(400,floorPos_y-100,100));
    platforms.push(createPlatform(600,floorPos_y-150,100));
    platforms.push(createPlatform(1100,floorPos_y-100,100));
    
}

function draw()
{
    //Ensures the game starts only when sound is loaded
    if(!soundReady){
        return;
    }
    ///////////DRAWING CODE//////////
    drawSky();
    drawGround();
    
    push();
    translate(scrollPos,0);
    drawClouds();
    drawMountains();
    drawTrees();
    drawCanyons();
    drawCollectables();
    collectCollectables();
    checkIfGameCharFallIntoCanyon();
    drawFlagpole();
    checkFlagpole();   
    checkIfGameCharInContactWithEnemies();
    drawEnemies();
    drawPlatforms();
    emit.updateParticles();
    
    pop();
    drawLifeTokens();
    
    //Drawing game character
    drawGameChar();  
    drawGameScore();
    
    //Starting game requirements
    if(checkIsGameOver()){
        drawGameOver();
        return;
    }
    
    if(hitByEnemy==true){
        if(lives>0){
            startGame();
        }
        return;
    }
    
    ///////////INTERACTION CODE//////////
    if(isPlummeting==true)
    {
        gameChar_y += 10;
        checkPlayerDie();
        return;
    }

    if(gameChar_y<floorPos_y){
        isFalling = true;
    }else{
        isFalling = false;
    }

    if(isLeft==true){
        if(gameChar_x > width * 0.2)
        {
            gameChar_x -= 5;
        }
        else
        {   //positive for moving against the background
            scrollPos += 5;
        }
    }
    else if(isRight==true){
        if(gameChar_x < width * 0.8)
        {
            gameChar_x  += 5;
        }
        else
        {   //negative for moving against the background
            scrollPos -= 5; 
        }
    }
    
    checkIfCharacterIsUnderAnyPlatform();
    
    //Update real position of gameChar for collision detection.
    gameChar_world_x = gameChar_x - scrollPos;

}

//Drawing movement code of game character
function drawGameChar(){
    
    if(isLeft && isFalling)
    {
        drawJumpingLeft();
    }
    else if(isRight && isFalling)
    {
        drawJumpingRight();
    }
    else if(isLeft)
    {
        drawWalkingLeft();
    }
    else if(isRight)
    {
        drawWalkingRight();
    }
    else if(isLeft && onPlatform)
    {
        drawWalkingLeft();
    }
    else if(isRight && onPlatform)
    {
        drawWalkingRight();
    }
    else if(isFalling || isPlummeting)
    {
        drawJumpingFacingForwards();
    }
    else if(onPlatform)
    {
        drawStandingFrontFacing();
    }
    else
    {
        drawStandingFrontFacing();
    }
}

//Collecting collecatbles interaction code
function collectCollectables(){
    for(var i=0;i<collectables.length;i++){
        if(collectables[i].isFound == false){
            
        //check if game character is in the range of the collectable
        if(dist(gameChar_world_x,gameChar_y,
            collectables[i].x_pos+15,collectables[i].y_pos)<20){
            collectables[i].isFound=true;
            
            //increment game score if collectables are collected
            game_score++;
            collectSound.play();
            }
        }
    }
}

//Game character falling into canyon interaction code
function checkIfGameCharFallIntoCanyon(){
    
    //To prevent the falling sound from playing in a loop
    if(checkIsGameOver()){
        return;
    }
    
    for(var i=0;i<canyons.length;i++){
        var canyon = canyons[i];
        
        //check if game character is over the canyon
        if((gameChar_world_x>canyon.x_pos-90 && gameChar_y== floorPos_y) 
           &&
           (gameChar_world_x<canyon.x_pos-10 && gameChar_y== floorPos_y))
        {
            //if game character is over  canyon, it will fall into it and minus a life  
            isPlummeting=true;
            lives--;
            fallSound.play();   
        } 
    }
}


//Game ending interaction code
function checkFlagpole(){
    if(flagpole.isReached == false){
        var d = dist(gameChar_world_x,gameChar_y,flagpole.x_pos,floorPos_y);
    if(d<10)
        {
            flagpole.isReached=true;
            winSound.play();
        }
    }
}

//Game starting requirement code
function checkPlayerDie(){
    if(gameChar_y>height || hitByEnemy){
        if(lives>0){
            startGame();
        }
    }
}

//Game character interaction with enemies code
function checkIfGameCharInContactWithEnemies(){
    
    if(checkIsGameOver()){
        return;
    }
        for(var i=0; i<enemies.length;i++){
            var isContact = enemies[i].checkContact(gameChar_world_x,gameChar_y);
            if(isContact){
                
                //if game chracter hits any enemies, minus a life
                hitByEnemy=true;
                lives--;
                break;
            }
        }
}

//Game over code
function checkIsGameOver(){
    var gameOver = false;
    
    if(lives<1 || flagpole.isReached){
        gameOver = true;
    }
    return gameOver;
}

function drawGameOver(){
    fill(0);
    textSize(100);
    text("Game Over", 250, height/2 - 100);
    
    if(lives>0){
        text("You Win!", 300, height/2);
    }else{
        text("You Lose!", 300, height/2);
    }
}

//Game chacracter movement under platform code
function checkIfCharacterIsUnderAnyPlatform(){
    
    if(isFalling){
        var inContact = false; 
        onPlatform = false;
        
        for(var i=0; i<platforms.length; i++){
            inContact = platforms[i].checkContact(gameChar_world_x, gameChar_y);
            
            if(inContact){
                onPlatform = true;
                break;
            }
        }
        if(!inContact){
            gameChar_y += 2;
        }
    }
}

function keyPressed()
{
    // if statements to control the animation of the character when
    // keys are pressed.

    if(keyCode == 37){
        isLeft = true;
    }
    else if(keyCode == 39){
        isRight = true;
    }
    else if(keyCode == 38){
        //ensure that the character only jump when it is touching the ground
        if(gameChar_y>=floorPos_y || onPlatform){
            gameChar_y -= 100;
            jumpSound.play();
        }
    }
}

function keyReleased()
{
    // if statements to control the animation of the character when
    // keys are released.

    if(keyCode == 37){
        isLeft = false;
    }else if(keyCode == 39){
        isRight = false;
    }
}
