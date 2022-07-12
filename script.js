// Caching the DOM
let body = document.querySelector('body')
let header_div = document.querySelector('.header')
let heading_h1 = document.querySelector('.heading')
let heading_div = document.querySelector('heading2')
let main_div = document.querySelector('.main')
let rock_button = document.querySelector('.rock')
let paper_button = document.querySelector('.paper')
let scissors_button = document.querySelector('.scissors')
let winner_div = document.querySelector('.winner')
let scoreboard_div = document.querySelector('.score')
let userScore_span = document.querySelector('.userScore')
let computerScore_span = document.querySelector('.computerScore')
let footer_div = document.querySelector('.footer')

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

//prompt to get user selection stored here
//function playerSelection(){
    //commented out player selection for console ui
    //let playerChoice = prompt("Rock , Paper , Scissors");
    
    //let playerChoice = 
    //return playerChoice;

    
//}





//Determines the results based on user selection and computer selection
function playRound(playerSelection, computerSelection){
        
    if(playerSelection===computerSelection){
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

//create function that runs a game of 5

function fiveround(){
if(playerScore===5){
    userScore_span.textContent = `User: ${playerScore}`
    computerScore_span.textContent = `Computer: ${computerScore}`
    winner_div.textContent = 'YOU WIN'
}else if(computerScore===5){
    userScore_span.textContent = `User: ${playerScore}`
    computerScore_span.textContent = `Computer: ${computerScore}`
    winner_div.textContent ='YOU LOSE'
}else{
    userScore_span.textContent = `User: ${playerScore}`
    computerScore_span.textContent = `Computer: ${computerScore}`
}
}


//runs one game
rock_button.addEventListener('click', function(){
    playRound('rock', computerPlay())
    console.log('You Chose Rock')
    fiveround()
})

paper_button.addEventListener('click', function(){
    playRound('paper', computerPlay())
    console.log('You Chose Paper')
    fiveround()
})

scissors_button.addEventListener('click', function(){
    playRound('scissors', computerPlay())
    console.log('You Chose Scissors')
    fiveround()
})


// Adding the Score






//runs the game
/* function game(){
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
 */