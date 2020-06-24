function computerPlay() {
  let results=["Rock","Paper","Scissors"];
  let randomR= results[Math.floor(Math.random() * (3) )];
  return randomR;
}


let playerScore=0;
let computerScore=0;

function playRound(playerSelection, computerSelection) {
if (playerSelection=="Rock"&&computerSelection=="Scissors"||playerSelection=="Paper"&&computerSelection=="Rock"||playerSelection=="Scissors"&&computerSelection=="Paper"){
   playerScore++;

   if(playerScore==5){
    const content = document.createElement('div');
    content.textContent = "You WIN!!! "+playerSelection+" beats "+computerSelection+", Your Score is "+playerScore+"/5, YOU ARE THE WINNER!";
    container.appendChild(content);
    playerScore=0;
    computerScore=0;
  }else{
    const content = document.createElement('div');
    content.textContent = "You WIN!!! "+playerSelection+" beats "+computerSelection+", Your Score is "+playerScore+"/5";
    container.appendChild(content);
  }
}
else if (computerSelection=="Rock"&&playerSelection=="Scissors"||computerSelection=="Paper"&&playerSelection=="Rock"||computerSelection=="Scissors"&&playerSelection=="Paper"){
   computerScore++;

  if(computerScore==5){
   const content = document.createElement('div');
   content.textContent = "You Lose :( "+computerSelection+" beats "+playerSelection+", Computer Score is "+computerScore+"/5, COMPUTER IS THE WINNER!";
   container.appendChild(content);
   playerScore=0;
   computerScore=0;
  }else{
   const content = document.createElement('div');
   content.textContent = "You Lose :( "+computerSelection+" beats "+playerSelection+", Computer Score is "+computerScore+"/5";
   container.appendChild(content);
  }
  }
else if (playerSelection==computerSelection){
   const content = document.createElement('div');
   content.textContent = "You are EVEN! "+playerSelection+" = "+computerSelection;
   container.appendChild(content);
   }
}


document.getElementById("Rock").addEventListener("click", function() {
playRound("Rock",computerPlay());
});
document.getElementById("Paper").addEventListener("click", function() {
playRound("Paper",computerPlay());
});
document.getElementById("Scissors").addEventListener("click", function() {
playRound("Scissors",computerPlay());
});


const container = document.querySelector('#container');




