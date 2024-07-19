
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

getHumanChoice = ()=> {
    let choice = prompt('Enter your choice:')
    return choice
    
}



playGame = ()=> {

    playRound = (humanChoice , computerChoice)=> {
        humanChoice = humanChoice.toLowerCase()
        if(humanChoice === computerChoice )
        {
            console.log(`It's a tie`)
        }
        else if(humanChoice === 'rock' && computerChoice === 'scissors')
        {
            console.log(`You win!Rock beats Scissors`)
            ++humanScore
        }
        else if(humanChoice === 'paper' && computerChoice === 'rock')
        {
            console.log(`You win!Paper beats Rock`)
            ++humanScore
        }
        else if(humanChoice === 'scissors' && computerChoice === 'paper')
        {
            console.log(`You win!Scissors beat Paper`)
            ++humanScore
        }
        else if(computerChoice === 'rock' && humanChoice === 'scissors')
        {
            console.log(`You lose!Rock beats Scissors`)
            ++computerScore
        }
        else if(computerChoice === 'paper' && humanChoice === 'rock')
        {
            console.log(`You lose!Paper beats Rock`)
            ++computerScore
        }
        else if(computerChoice === 'scissors' && humanChoice === 'paper')
        {
            console.log(`You lose!Scissors beat Paper`)
            ++computerScore
        }
    
    }
    let humanScore = 0;
    let computerScore = 0;
    for(let i =0;i < 5;i++)
    {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        console.log(`Round ${i} of 5 Finished!Scores are as follows:1`)
        console.log('Your score:', humanScore)
        console.log('Computer score:', computerScore)
        
    }
    if(humanScore > computerScore)
    {
        console.log('You won this game')
    }
    else if(computerScore > humanScore)
    {
        console.log('You lost this game')
    }
    else
    {
        console.log('This game ends in a draw')
    }



}






