//Lets computer pick a random number, this number determines whether Rock, Paper or Scissors is chosen
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3+1);
    let ComputerSelection = (randomNumber==1) ? "rock" :
                            (randomNumber==2) ? "paper" :
                            (randomNumber==3) ? "scissors" :
                            "error";
                            console.log(`Computer Chose ${ComputerSelection}`)
    return ComputerSelection
}


//initalizing the score variables
let playerScore = 0,
    computerScore = 0;

//Determines the results based on user selection and computer selection
function playRound(playerSelection, computerSelection){
        
    
    
    if(playerSelection==computerSelection){
        return("It's a Tie")
    } else if(
        (playerSelection=="rock"&&computerSelection=="scissors")||
        (playerSelection=="scissors"&&computerSelection=="paper")||
        (playerSelection=="paper"&&computerSelection=="rock")
    ){
        playerScore++
        return("You Win")

    }else { computerScore++
            return("You Lose")}

}

//prompt to get user selection stored here
function playerSelection(){
    let playerChoice = prompt("Rock , Paper , Scissors");
    console.log(`You Chose ${playerChoice}`)
    return playerChoice.toLowerCase();
    
}



function game(){
for(let i=0; i<5; i++){
console.log(playRound(playerSelection(), computerPlay()))
console.log(`Score is ${playerScore} : ${computerScore}`)
}
if(playerScore>computerScore){
    console.log("Best out of 5: YOU WIN :)")
}else{
    console.log("Best out of 5: YOU LOSE :(")
}
}

game()