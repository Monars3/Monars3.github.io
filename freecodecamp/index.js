let number = ["1","2","3","4","5","6","7","8","9","10","11"]

function star(){
    for (let i=0; i<10 ; i+=1){
    document.getElementById("count").textContent += number[i];
    
    }
}
















































/*
let firstCard = 10
let secondCard = 4
let cards = [firstCard ,  secondCard]
let sum = firstCard + secondCard;
let isAlive = true

function startGame(){
   renderGame()
}


function renderGame(){ 
    
    document.getElementById("card").textContent +=
    cards ;
    document.getElementById("sum").textContent += sum;

if (sum < 21) {
    me=("Do you want to draw a new card ?")
}  else if (sum === 21) {
    me=("Wohoo! You've got blackjack")     
    
}  else {
    me=("You're out of the game! ")
    isAlive = false
}
document.getElementById("play").textContent=me;

}
function newCard(){
    
    let card = 8
    sum += card
    cards.push(card)
    renderGame()
}
*/





























/*let num1 = 8
let num2 = 4
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    document.getElementById("sum-el").textContent +=
    num1 + num2 ;
    
}


function subtract(){

    document.getElementById("sum-el").textContent +=
    num1 - num2 ;
    
    
}
function divide(){
    document.getElementById("sum-el").textContent +=
    num1 / num2 ;
 

}
function multiply(){
    document.getElementById("sum-el").textContent +=
    num1 * num2 ;


}
*/








/*let a=0
function increment() {
    
    a = a+1;
    
    document.getElementById("count").textContent = a  ;
}
function save(){
    //alert(a);
   let countStr = a + " - "
   document.getElementById("saveEl").textContent += 
   countStr;
   a=0
   document.getElementById("count").textContent = a ;
   
}*/


/*let welcomeEl= document.getElementById("welcome-el")
let name = "joe v"
let greeting = "welcome back "
welcomeEl.innerText = greeting +  name 

welcomeEl.innerText = welcomeEl.innerText + 2*/