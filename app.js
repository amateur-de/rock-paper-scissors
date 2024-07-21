
getComputerChoice = ()=> {
    let choice = Math.floor(Math.random() * 3)
    switch(choice)
    {
        case 0:
            return `rock`
        case 1:
            return 'paper'
        case 2:
            return 'scissors'


    }
   
}
/*
getHumanChoice = ()=> {
    let choice = prompt('Enter your choice:')
    return choice
    
}*/

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;




    playRound = (humanChoice , computerChoice)=> {
        let result = document.querySelector('.result')
        let round = document.querySelector('.round')
        let humanScoreSpan = document.querySelector('.humanscore')
        let computerScoreSpan = document.querySelector('.computerscore')
        humanChoice = humanChoice.toLowerCase()
        if(humanChoice === computerChoice )
        {
            result.textContent = `It's a tie.`
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissors')
        {
            result.textContent = `You win!Rock beats Scissors.`
            ++humanScore
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock')
        {
            result.textContent = `You win!Paper beats Rock.`
            ++humanScore
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper')
        {
            result.textContent = `You win!Scissors beat Paper.`
            ++humanScore
        }
        else if(computerChoice === 'rock' && humanChoice === 'scissors')
        {
            result.textContent = `You lose!Rock beats Scissors.`
            ++computerScore
        }
        else if(computerChoice === 'paper' && humanChoice === 'rock')
        {
            result.textContent = `You lose!Paper beats Rock.`
            ++computerScore
        }
        else if(computerChoice === 'scissors' && humanChoice === 'paper')
        {
            result.textContent = `You lose!Scissors beat Paper.`
            ++computerScore
        }
        round.textContent = `Round ${currentRound} of 5 Finished!Scores are as follows:1`
        humanScoreSpan.textContent =  humanScore
        computerScoreSpan.textContent =  computerScore
        if(currentRound === 5)
        {
               if(humanScore > computerScore)
                {
                    result.textContent += 'You won this game.'
                }
                else if(computerScore > humanScore)
                {
                    result.textContent += 'You lost this game.'
                }
                else
                {
                    result.textContent += 'This game ends in a draw.'
                }
                currentRound = 1
                humanScore = 0
                computerScore = 0

        }
        else
        {
            ++currentRound
           
        }
        
        
    



}

let buttons = document.querySelectorAll('button')
buttons.forEach((button)=>{
    button.addEventListener('click' , (e)=> {
        playRound(e.target.className , getComputerChoice())
    })
})






