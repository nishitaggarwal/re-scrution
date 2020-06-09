class Game {

constructor(){

}


getState(){

var gameStateRef = database.ref("gameState")

gameStateRef.on("value",function (data){

gameState = data.val()

} )

}

update(state){

database.ref("/").update({

gameState:state

})

}


start(){


    if(gameState === 0){

player = new Player()
player.getCount()

form = new Form()
form.display();

     }


   //  if(gameState === 1){
//
  //   setter = createSetter("canvas color")
    // setter.position(200,20)

  //}

//etter.mousePressed(function(){





//canvas = createCanvas()
//canvas.position(200,200,400,400)
//canvas.shapeColor(X,Y,Z)

//}
//)



}





}








