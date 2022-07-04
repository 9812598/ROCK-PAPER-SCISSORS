let computerSelection = function(){
    const elements = ['rock', 'paper' , 'scissors']
    let rand = Math.floor(Math.random() * elements.length)
    let compElem = elements[rand];
    console.log('Comp: ' + compElem);
    return compElem;
};

computerSelection();

let playerSelection = prompt('rock, paper or scissors?', 'rock').toLowerCase()
console.log('Player: ' + playerSelection);


let result = function(){
    if (computerSelection == playerSelection) return `Draw. Try again. You both chose ${computerSelection}`
    switch (playerSelection) {
        case 'rock':
            return (computerSelection == paper) ? `Computer wins. It has paper`: `You win. Computer has scissors`;
            break;
        case 'paper':
            return (computerSelection == scissors) ? `Computer wins. It has rock`: `You win. Computer has paper`;
            break;
        case 'scissors':
            return (computerSelection == paper) ? `Computer wins. It has scissors`: `You win. Computer has rock`;
            break;
    }
}
console.log(result)
