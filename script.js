let computerSelection 

function compSelect(){
    const elements = ['rock', 'paper' , 'scissors']
    let rand = Math.floor(Math.random() * elements.length)
    let compElem = elements[rand];
    console.log('Comp: ' + compElem)
    computerSelection = compElem;
};


let playerSelection

const btns = document.querySelectorAll('button');

for (const btn of btns) {
    btn.addEventListener('click', () => {
        playerSelection = btn.id
        compSelect()
        playRound()
    })
}

const text = document.createElement('div');
document.body.appendChild(text)
text.textContent = 'Just make your chose'

let compWinCount = 0;
let playerWinCount = 0;


let roundResult

function playRound(){
    if (computerSelection.toString() == playerSelection.toString()) {
        roundResult = `eqval`;
    }
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
    }
    massage()
}    
let ccount = document.getElementById('comp');

let pcount = document.getElementById('player');

    function massage() {
        if (roundResult == 'eqval') {
            text.textContent =`Draw. Try again. You both chose ${computerSelection}`;
        }
        else if (roundResult == 'win') {
            text.textContent =`You win. Computer has ${computerSelection}`;
            playerWinCount ++;
            console.log(`playerWinCount = ${playerWinCount}`);
            pcount.textContent = playerWinCount;
            check()
        }
        else {
            text.textContent =`You lose. Computer has ${computerSelection}`;
            compWinCount ++;
            console.log(`compWinCount = ${compWinCount}`);
            ccount.textContent = compWinCount;
            check()
            
        }
}

function check(){
    if (compWinCount > 4) {
        alert('Sorry comp wins 5 times');
        refresh()
    }

    if (playerWinCount > 4) {
        alert('Congrats you wins 5 times');
        refresh()
    }
}

function refresh(){
    compWinCount = 0;
    playerWinCount = 0;
    ccount.textContent = compWinCount;
    pcount.textContent = playerWinCount;
}
