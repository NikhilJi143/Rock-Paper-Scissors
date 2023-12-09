
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }else{
        msg.innerText = `You loss!! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    // Genarate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            // rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
