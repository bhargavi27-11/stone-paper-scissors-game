let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll('.choice');
let result = document.querySelector('.result');
let player = document.querySelector('.player-score');
let computer = document.querySelector('.computer-score');
let reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    userscore = 0;
    computerscore = 0;
    player.innerHTML = userscore;
    computer.innerHTML = computerscore;
    result.innerHTML = "Game reset. Let's play again!";
});

const gencompchoice = () => {
    let objcts = ["stone", "paper", "scissors"];
    let compchoice = Math.floor(Math.random() * 3);
    //console.log("computer choice is " + compchoice);
    return objcts[compchoice];
}

const drawgame = () => {
    console.log("It's a draw");
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        player.innerHTML = userscore;
        result.innerHTML = `You win! your ${userchoice} beats ${compchoice}`;
    }else{
        computerscore++;
        computer.innerHTML = computerscore;
        result.innerHTML = `Computer wins! ${compchoice} beats ${userchoice}`;
    }
}

const playgame = (userchoice) => {
    console.log("user choice is " + userchoice);
    let compchoice = gencompchoice();
    console.log("computer choice is " + compchoice);

    if (userchoice === compchoice) {
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "stone"){
            userwin = compchoice === "scissors" ? true : false;
        }
        else if(userchoice === "paper"){
            userwin = compchoice === "stone" ? true : false;
        }
        else{
            userwin = compchoice === "paper" ? true : false;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener('click', () => {
        //console.log(choice.innerHTML +" is clicked");
        let userchoice = choice.innerHTML;
        playgame(userchoice);
    });
});

