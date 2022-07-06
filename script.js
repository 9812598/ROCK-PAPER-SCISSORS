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


let layR
function playRound(computerSelection, playerSelection){
    let res
    playerSelect();
    compSelect();

    if (computerSelection == playerSelection) res = `eqval`
    else {
        switch (playerSelection) {
        case 'rock':
            (computerSelection == 'paper') ? res = 'win': res = 'lose';
            break;
        case 'paper':
            (computerSelection == 'scissors') ? res = 'win': res = 'lose';
            break;
        case 'scissors':
            (computerSelection == 'paper') ? res = 'win': res = 'lose';
            break;
        }
        // massage
        if (res == 'eqval') console.log(`Draw. Try again. You both chose ${computerSelection}`)
        else if (playRound == 'win') console.log(`You win. Computer has ${computerSelection}`)
        else console.log(`You lose. Computer has ${computerSelection}`)
        layR = res;
}
}



function game(){
    let compWinCount = 0;
    let playerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);

        if (layR == 'win') playerWinCount += 1;
        else if (layR == 'lose') compWinCount += 1;
     }
    (playerWinCount < compWinCount) ? console.log(`You lose. Computer wins ${compWinCount} times`): 
    (playerWinCount == compWinCount) ? console.log(`You have same wins as computer. Computer wins ${compWinCount} times`): 
    console.log(`You win. Computer wins only ${compWinCount} times`);
};


game();

