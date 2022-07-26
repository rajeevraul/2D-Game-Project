//Drawing clouds
function drawClouds(){
    fill(255);
    for(var i in clouds){
        drawCloud(clouds[i]);
    }
}

function drawCloud(t_cloud){
        ellipse(t_cloud.x_pos, t_cloud.y_pos, t_cloud.width+20, t_cloud.width+20);
        ellipse(t_cloud.x_pos-40, t_cloud.y_pos, t_cloud.width, t_cloud.width);
        ellipse(t_cloud.x_pos+40, t_cloud.y_pos, t_cloud.width, t_cloud.width);
        ellipse(t_cloud.x_pos-20, t_cloud.y_pos-20, t_cloud.width, t_cloud.width);
        ellipse(t_cloud.x_pos+20, t_cloud.y_pos-20, t_cloud.width, t_cloud.width);
    
        t_cloud.x_pos = t_cloud.x_pos +0.5; 
}

//Drawing mountains
function drawMountains(){
    for(var i in mountains){
        drawMountain(mountains[i]);
    }
}

function drawMountain(t_mountain){
    fill(0, 0, 205); 
    triangle(t_mountain.x_pos-300/4, t_mountain.y_pos, 
             t_mountain.x_pos+300/4, t_mountain.y_pos,
             t_mountain.x_pos,t_mountain.y_pos-0.5*232);
    fill(255, 250, 250);
    triangle(t_mountain.x_pos-300/12, t_mountain.y_pos-232/3, 
             t_mountain.x_pos+300/8, t_mountain.y_pos-232/4,
             t_mountain.x_pos,t_mountain.y_pos-232/2);
    fill(0, 0, 255); 
    triangle(t_mountain.x_pos, t_mountain.y_pos, 
             t_mountain.x_pos+300, t_mountain.y_pos,
             t_mountain.x_pos+300/2, t_mountain.y_pos-232);
    fill(255, 250, 250); 
    triangle(t_mountain.x_pos+300*3/8, t_mountain.y_pos-232*3/4, 
             t_mountain.x_pos+300*3/4, t_mountain.y_pos-232/2,
             t_mountain.x_pos+300/2, t_mountain.y_pos-232);
}

//Drawing trees
function drawTrees(){
    for(var i in trees){
        drawTree(trees[i]);
    }
}

function drawTree(t_tree){
        fill(128, 0, 0);
        rect(t_tree.x_pos - 15, t_tree.y_pos, 30, 146);
            
        fill(0, 128, 0);
        triangle(t_tree.x_pos - 45, t_tree.y_pos + 20,
                 t_tree.x_pos + 45, t_tree.y_pos+ 20,
                 t_tree.x_pos, t_tree.y_pos - 45);
        triangle(t_tree.x_pos - 45, t_tree.y_pos,
                 t_tree.x_pos + 45, t_tree.y_pos,
                 t_tree.x_pos, t_tree.y_pos - 65);
            
        fill(128,0,0);
        rect(t_tree.x_pos, t_tree.y_pos+35, 50, 5);
        rect(t_tree.x_pos-45, t_tree.y_pos+45, 50, 5);
            
        fill(0,128,0);
        ellipse(t_tree.x_pos+55, t_tree.y_pos+35, 50, 30);
        ellipse(t_tree.x_pos-55, t_tree.y_pos+45, 50, 30);
    
}

//Drawing canyons
function drawCanyons(){
    fill(100,155,255);
    for(var i=0;i<canyons.length;i++){
        var canyon = canyons[i];
        drawCanyon(canyon);
    }
}

function drawCanyon(t_Canyon){
    beginShape();
    vertex(t_Canyon.x_pos, t_Canyon.y_pos);
    vertex(t_Canyon.x_pos-100, t_Canyon.y_pos);
    vertex(t_Canyon.x_pos-150, t_Canyon.y_pos+150);
    vertex(t_Canyon.x_pos+50, t_Canyon.y_pos+150);
    endShape();
}

//Drawing collectables
function drawCollectables()
{
    for(var i=0;i<collectables.length;i++){
        if(collectables[i].isFound==false){
            drawCollectable(collectables[i]);
        }
    }
}

function drawCollectable(t_Collectable)
{
            fill(255, 215, 0);
            ellipse(t_Collectable.x_pos, t_Collectable.y_pos, 
                    t_Collectable.size, t_Collectable.size);
            fill(255, 255, 0);
            ellipse(t_Collectable.x_pos, t_Collectable.y_pos, 
                    t_Collectable.size/2, t_Collectable.size/2);
}

//Drawing gamescore tracker
function drawGameScore(){
    fill(0);
    textSize(30);
    text("Score:" + game_score, 10 ,30);
}

//Drawing flagpole
function drawFlagpole(){
    fill(125);
    rect(flagpole.x_pos,floorPos_y-flagpole.height,30,flagpole.height);
    fill(random(0,255), 255, random (0,255));
    
    if(flagpole.isReached){
        rect(flagpole.x_pos,floorPos_y-flagpole.height,100,50);
    }else{
        rect(flagpole.x_pos,floorPos_y-50,100,50);
    }
}

//Drawing life tokens counter 
function drawLifeTokens(){
    fill(0);
    for(var i=0;i<lives;i++){
        rect(40*i+900,10,30,30)
        
    }
}

//Drawing enemies
function Enemy(x,y,range){
    
    this.x = x;
    this.y = y;
    this.range = range;
    
    this.currentX = x;
    this.inc = 1;
    
    this.update = function(){
        this.currentX += this.inc;
        if(this.currentX > this.x + this.range){
            this.inc = -1;
        }
        else if(this.currentX < this.x){
            this.inc = 1;
        }
    }
    
    this.draw = function(){
    this.update();
    
    stroke(0);
    fill(0, 250, 152);
    ellipse(this.currentX, this.y - 20, 20, 40);
    fill(0, 0, 120);
    ellipse(this.currentX, this.y-5 - 20, 10, 10);
    fill(128, 0, 128);
    rect(this.currentX - 11, this.y - 7, 5, 20);
    fill(128, 0, 128);
    rect(this.currentX + 4, this.y - 7, 5, 20);
    fill(128, 0, 128);
    rect(this.currentX + 10, this.y - 46, 5, 25);
    fill(128, 0, 128);
    rect(this.currentX - 15, this.y - 46, 5, 25);
    }
    
    this.checkContact = function(gc_x,gc_y){
        var d = dist(gc_x, gc_y, this.currentX, this.y);
        if(d<20){
            return true;
        }
        return false;
    }
}

function drawEnemies(){
    for(var i=0; i<enemies.length; i++){
        enemies[i].draw();
    }
}

//Drawing platforms
function createPlatform(x,y,length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function(){
        
              fill(255,0,255)
              rect(this.x, this.y, this.length, 20);
       },
    checkContact: function(gc_x, gc_y){
        
        if(gc_x+20>this.x && gc_x<this.x+20+this.length){
            
            var d = this.y - gc_y;
            
            if(d>=0 && d<1){
                return true;
                }
            } 
            return false;
        }
    }
    return p;
}

function drawPlatforms(){
    for(var i=0; i<platforms.length; i++){
        platforms[i].draw();
    }
}

//Drawing emitter
function Particle(x, y, xSpeed, ySpeed, size, colour){
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.colour = colour;
    this.age = 0;
    
    this.drawParticle = function()
    {
        fill(this.colour);
        ellipse(this.x ,this.y , this.size);
    }
    
    this.updateParticle = function()
    {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.age++;
    }
}

function Emitter(x, y, xSpeed, ySpeed, size, colour)
{
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = size;
    this.colour = colour;
    
    this.startParticles = 0;
    this.lifetime = 0;
    
    this.particles = [];
    
    this.addParticle = function()
    {
        var p = new Particle(random(this.x-10,  this.x-10), 
                             random(this.y-10, this.y+10), 
                             random(this.xSpeed-1, this.xSpeed+1), 
                             random(this.ySpeed-1, this.ySpeed+1), 
                             random(this.size-4, this.size+4), 
                             this.colour);
        
        return p;
    }
    
    this.startEmitter = function(startParticles, lifetime)
    {
        this.startParticles = startParticles;
        this.lifetime = lifetime;
        
        //start emitter with initial particles
        
        for(var i=0; i<startParticles; i++)
            {
                this.particles.push(this.addParticle());
            }
    }
    
    this.updateParticles = function()
    {
        //iterate through particles and draw them to the screen
        var deadParticles = 0;
        for(var i = this.particles.length-1; i >= 0; i--)
            {
                this.particles[i].drawParticle();
                this.particles[i].updateParticle();
                
                if(this.particles[i].age > random(0, this.lifetime))
                    {
                        this.particles.splice(i, 1);
                        deadParticles++;
                    }
            }
        
        if(deadParticles > 0)
            {
                for(i = 0; i < deadParticles; i++)
                    {
                        this.particles.push(this.addParticle());
                    }
            }
    }
}

//Drawing the ground
function drawGround(){
    noStroke();
    fill(0,155,0);
    rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
}

//Drawing the sky
function drawSky(){
    background(100,155,255); //fill the sky blue  
}