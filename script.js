function computerPlay(){
    let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber)
    if(randomNumber>3 && randomNumber<6){
        return "rock"
    }else if(randomNumber>6 && randomNumber<10){
        return "scissors"
    }else{
        return "paper"
    }
}

console.log(computerPlay())