let computerSelection 

function compSelect(){
    const elements = ['rock', 'paper' , 'scissors']
    let rand = Math.floor(Math.random() * elements.length)
    let compElem = elements[rand];
    console.log('Comp: ' + compElem)
    computerSelection = compElem;
};


let playerSelection

function  playerSelect() {
    let plElem = prompt('rock, paper or scissors?', 'rock').toLowerCase();
    console.log('Player: ' + plElem);
    playerSelection = plElem;
}


let roundResult
function playRound(){

    playerSelect();
    compSelect();

    if (computerSelection == playerSelection) roundResult = `eqval`
    else {
        switch (playerSelection) {
        case 'rock':
            (computerSelection == 'paper') ? roundResult = 'lose': roundResult = 'win';
            break;
        case 'paper':
            (computerSelection == 'scissors') ? roundResult = 'lose': roundResult = 'win';
            break;
        case 'scissors':
            (computerSelection == 'paper') ? roundResult = 'win': roundResult = 'lose';
            break;
        }
        // massage
    if (roundResult == 'eqval') console.log(`Draw. Try again. You both chose ${computerSelection}`)
    else if (roundResult == 'win') console.log(`You win. Computer has ${computerSelection}`)
    else console.log(`You lose. Computer has ${computerSelection}`)
    
}
}



function game(){
    let compWinCount = 0;
    let playerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        playRound();

        if (roundResult == 'win') {
            playerWinCount += 1;
            console.log(`you win ${i} round`)
        }
        else if (roundResult == 'lose') {
            compWinCount += 1;
            console.log(`you lose ${i} round`)
        }
        else if (roundResult == 'eqval') {
            console.log(`${i} round eqval`)
        }

     }
    (playerWinCount < compWinCount) ? console.log(`You lose. Computer wins ${compWinCount} / ${playerWinCount}`): 
    (playerWinCount == compWinCount) ? console.log(`You have same wins as computer.  Wins ${compWinCount} / ${playerWinCount} `): 
    console.log(`You win. Computer wins only ${compWinCount} / ${playerWinCount}`);
}


game();

