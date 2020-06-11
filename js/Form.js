class Form {

constructor(){

}


display(){

var title = createElement("h2")

title.html("Re Creation")

title.position(130,0)

var input = createInput("Name")
input.position(130,160)

var button = createButton("Play")
button.position(250,200)

var greeting  = createElement("h3")


// q1
var greeting2 = createElement("h3")
var button2 = createButton("YES")
var button1 = createButton("NO")

// q2
var greeting3 = createElement("h3")
var button3 = createButton("YES")
var button4 = createButton("NO")

// q3
var greeting4 = createElement("h3")

var button5 = createButton("100")
var button7 = createButton("500")
var button8 = createButton("1000")
var button9 = createButton("MORE")

var greeting6 = createElement("h3")



button.mousePressed(function() {


input.hide()
button.hide()

var name = input.value()

playerCount += 1

player.update(name)
player.updateCount(playerCount)

greeting.html("hello " + name)
greeting.position(130,160)


textSize(150)
fill("red")

//text("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?", 170 ,100)
// Q 1 STARTS FROM HERE


greeting2.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?")
greeting2.position(450,160)

button1.position(450,268)
button2.position(450,243)

})


// New QUESTION codes STARTS FROM HERE.

     button2.mousePressed(function() {


     greeting2.hide()
      button1.hide()
     button2.hide()


     greeting3.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
     greeting3.position(450,160)

     button4.position(470,268)
     button3.position(470,243)

     })


     button1.mousePressed(function() {


     greeting2.hide()
      button1.hide()
     button2.hide()
    
     //   var greeting3 = createElement("h3")
     greeting3.html("Q2. Would you be willing to contribute a small amount every month for such a program?")
     greeting3.position(450,160)
       
     // var button3 = createButton("YES")
     //var button4 = createButton("NO")
     button4.position(470,268)
     button3.position(470,243)
          
   
    
     })

     // NEW QUESTION  codes WILL START FROM NOW PLEASE GET READY

     button3.mousePressed(function() {
   
     greeting3.hide()
     button3.hide()
     button4.hide()
 
  
     greeting4.html("Q3. How much per month would you be willing to pay?")
     greeting4.position(450,160)

 
 
     button5.position(470,243)
     button7.position(470,268)
     button8.position(470,293) 
     button9.position(470,318)
   
    })
      

     button4.mousePressed(function() {
   
        greeting3.hide()
        button3.hide()
        button4.hide()
     
     //  var greeting4 = createElement("h3")
       greeting4.html("Q3. How much per month would you be willing to pay?")
      greeting4.position(450,160)
     
     //   var button5 = createButton("100")
      //  var button7 = createButton("500")
      //  var button8 = createButton("1000")
       // var button9 = createButton("MORE")
     
        button5.position(470,243)
        button7.position(470,268)
        button8.position(470,293) 
        button9.position(470,318)
       
     
        
        } )
    
     
     button5.mousePressed(function(){
     
     
     greeting4.hide()
     button5.hide()
     //button6.hide()
     button7.hide()
     button8.hide() 
          button9.hide()
          
          greeting6.html("thankyou my friend")
          greeting6.position(450,160)
          
     })

     button7.mousePressed(function(){
     
     
     greeting4.hide()
     button5.hide()
     //button6.hide()
     button7.hide()
     button8.hide() 
          button9.hide()
          
          greeting6.html("thankyou my friend")
          greeting6.position(450,160)
          
     })
     
     
     button8.mousePressed(function(){
     
     
     greeting4.hide()
     button5.hide()
     //button6.hide()
     button7.hide()
     button8.hide() 
          button9.hide()
          
          greeting6.html("thankyou my friend")
          greeting6.position(450,160)
          
     })
     
     
     button9.mousePressed(function(){
     
     
     greeting4.hide()
     button5.hide()
     //button6.hide()
     button7.hide()
     button8.hide() 
     button9.hide()     
          greeting6.html("thankyou my friend")
          greeting6.position(450,160)
          
     })
     
     }



     }
