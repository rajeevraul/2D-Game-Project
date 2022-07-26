var jumpSound;
var collectSound;
var fallSound;
var winSound;

var soundReady;
var soundLoadCounter;

function preload(){
    
    //Sound obtained from https://mixkit.co/free-sound-effects/
    soundFormats("mp3");
    jumpSound = loadSound("assets/jump.mp3", soundLoaded);
    collectSound = loadSound("assets/collect.mp3", soundLoaded)
    fallSound = loadSound("assets/fallorlose.mp3", soundLoaded);
    winSound = loadSound("assets/win.mp3", soundLoaded);
    
    soundReady = false;
    soundLoadCounter = 0;
}

function soundLoaded(){
    soundLoadCounter++;
    if(soundLoadCounter == 4){
        soundReady = true;
    }
}