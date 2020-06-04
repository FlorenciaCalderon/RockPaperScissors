
function computerPlay() {
    let results=["Rock","Paper","Scissors"];
    let randomR= results[Math.floor(Math.random() * (3) )];
    return randomR;
}


function playRound(playerSelection, computerSelection) {
    let playerS=playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1).toLowerCase();
    let computerS=computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1).toLowerCase();
   
    if (playerS=="Rock"&&computerS=="Scissors"||playerS=="Paper"&&computerS=="Rock"||playerS=="Scissors"&&computerS=="Paper"){
     alert("You WIN!!! "+playerS+" beats "+computerS);
     playerScore++;
     }
 else if (computerS=="Rock"&&playerS=="Scissors"||computerS=="Paper"&&playerS=="Rock"||computerS=="Scissors"&&playerS=="Paper"){
     alert("You Lose :( "+computerS+" beats "+playerS);
     computerScore++;
     }
 else if (playerS==computerS){
     alert("You are EVEN! "+playerS+" = "+computerS);
     }
 else {
     alert("ERROR!, try again");
     }
}



let playerSelection;
let computerSelection;
let playerScore;
let computerScore;



function game(){
    playerScore=0;
    computerScore=0;
    for(let i=1;i<=5;i++){
        playerSelection = prompt("Play Round","Rock,Paper,Scissors");
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
      }
    if (playerScore<computerScore){
        alert("Your Score is "+playerScore+"/5\nComputer's Score is "+computerScore+"/5\nYou Lose!");
    } else if (playerScore>computerScore){
        alert("Your Score is "+playerScore+"/5\nComputer's Score is "+computerScore+"/5\nYou Win!");
    } else if(playerScore==computerScore){
        alert("Your Score is "+playerScore+"/5\nComputer's Score is "+computerScore+"/5\nYou are Even!")
    } else{
        alert("Something went wrong!")
    }
}

game();



