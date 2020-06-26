function computerPlay() {
   let results=["Rock","Paper","Scissors"];
   let randomR= results[Math.floor(Math.random() * (3) )];
   return randomR;
 }
 
 
 let playerScore=0;
 let computerScore=0;
 
 const content1 = document.createElement('div');
 const content2 = document.createElement('div');
 const content3 = document.createElement('div');
 
 
 function playRound(playerSelection, computerSelection) {
   
  if (container.contains(star)) {
      container.removeChild(star);
    } 
 
 if (playerSelection=="Rock"&&computerSelection=="Scissors"||playerSelection=="Paper"&&computerSelection=="Rock"||playerSelection=="Scissors"&&computerSelection=="Paper"){
    playerScore++; 
   container.insertBefore(star, content1);
  
 }
 else if (computerSelection=="Rock"&&playerSelection=="Scissors"||computerSelection=="Paper"&&playerSelection=="Rock"||computerSelection=="Scissors"&&playerSelection=="Paper"){
    computerScore++;
   container.appendChild(star);
 
 }
  
 content1.textContent = "Player: "+playerScore;
 content2.textContent=playerSelection+"    vs    "+computerSelection;
 content3.textContent = "Computer: "+computerScore;
  
  
  }
 
 
   var star = document.createElement("img");
   star.setAttribute("src", "star.png");
   star.setAttribute("width", "20px");
   star.setAttribute("height", "20px");
 
 
 
 
 
 
 
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
 container.appendChild(star);
 container.appendChild(content1);
 container.appendChild(content2);
 container.appendChild(content3);



