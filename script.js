function computerPlay(){
    let randomNumber = ((Math.random()*10)+1).toFixed(2);
    if(randomNumber>3.3 && randomNumber<=6.6){
        return "rock"
    }else if(randomNumber>6.6 && randomNumber<=11){
        return "scissors"
    }else{
        return "paper"
    }
}

function playRound(playerSelection, computerSelection){
        
    if(playerSelection==computerSelection){
        console.log("Tie")
    } else if(
        (playerSelection=="rock"&&computerSelection=="scissors")||
        (playerSelection=="scissors"&&computerSelection=="paper")||
        (playerSelection=="paper"&&computerSelection=="rock")
    ){
        console.log("You Win")
    }else {console.log("You Lose")}
}

function playerChoice(){
    return prompt("Choose Rock, Paper Scissors")
}

const playerSelection = playerChoice();
const computerSelection = computerPlay();

console.log(computerSelection)

playRound(playerSelection.toLowerCase(), computerSelection)
