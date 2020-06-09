var canvas,backgroundImage
var gameState = 0
var playerCount
var database

var form,player,game


//NOTE : : : : ALL the QUESTIONS are CREATED IN the FORM class ITSELF !.....THANKYOU

function setup(){
  database = firebase.database();
  
 canvas = createCanvas(900,400);
 
 game = new Game()
 game.getState() 
 game.start()

// game.draw()
 
}

function draw(){
  
  
}

