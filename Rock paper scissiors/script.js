//variables
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
var rps = ["✊", "✋", "✌"]
const winlosedraw = document.getElementById("anwserh1")
const youranwser = document.getElementById("anwserp")
const anwsercomp = document.getElementById("anwsercomp")
let humanmove
let draw=0
let win = 0
let lose = 0
const drawtxt= document.getElementById("draw")
const wintxt= document.getElementById("win")
const losetxt= document.getElementById("lose")
let ResetBtnelem = document.querySelector(".resetBTN")
let isAutoPlaying = false
let intervalId

//functions
function rpsAnswer() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function mapRpsSymbolToMove(symbol) {
    if (symbol === "✊") return "rock"
    if (symbol === "✋") return "paper"
    if (symbol === "✌") return "scissors"
}


ResetBtnelem.addEventListener("click" , function(){
    
        draw = 0;
        win = 0;
        lose = 0;
    
        // Update the DOM to reflect the reset counts
        drawtxt.innerText = `Draw count ${draw}`;
        wintxt.innerText = `Win count ${win}`;
        losetxt.innerText = `Lose count ${lose}`;
    
        // Optionally, clear other displayed results
        winlosedraw.innerText = "";
        youranwser.innerText = "";
        anwsercomp.innerText = "";
    })
    



rock.addEventListener("click", (e) => {
    humanmove = "rock"
    let computerMoveSymbol = rpsAnswer()
    let computerMove = mapRpsSymbolToMove(computerMoveSymbol)

    youranwser.innerText = `You chose rock`
    anwsercomp.innerText = `Computer chose ${computerMoveSymbol}`
    checkResult(humanmove, computerMove)
})

paper.addEventListener("click", (e) => {
    humanmove = "paper"
    let computerMoveSymbol = rpsAnswer()
    let computerMove = mapRpsSymbolToMove(computerMoveSymbol)

    youranwser.innerText = `You chose paper`
    anwsercomp.innerText = `Computer chose ${computerMoveSymbol}`
    checkResult(humanmove, computerMove)
})

scissors.addEventListener("click", (e) => {
    humanmove = "scissors"
    let computerMoveSymbol = rpsAnswer()
    let computerMove = mapRpsSymbolToMove(computerMoveSymbol)

    youranwser.innerText = `You chose scissiors`
    anwsercomp.innerText = `Computer chose ${computerMoveSymbol}`
    checkResult(humanmove, computerMove)
})

function checkResult(human, computer) {
    if (human === computer) {
        winlosedraw.innerText = "It's a draw!"
        draw++
        drawtxt.innerText= `Draw count ${draw}`
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        winlosedraw.innerText = "You win!"
        win++
        wintxt.innerText= `Win count ${win}`
    } else {
        winlosedraw.innerText = "You lose!"
        lose++
        losetxt.innerText= `Lose count ${lose}`
    }
}

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(function () {
        
        // Simulate a random human move
        const humanMoveSymbol = rpsAnswer();
        const humanMove = mapRpsSymbolToMove(humanMoveSymbol);

        // Simulate the computer's move
        const computerMoveSymbol = rpsAnswer();
        const computerMove = mapRpsSymbolToMove(computerMoveSymbol);

        // Update the UI
        youranwser.innerText = `You chose ${humanMoveSymbol}`;
        anwsercomp.innerText = `Computer chose ${computerMoveSymbol}`;

        // Check the result
        checkResult(humanMove, computerMove);
    }, 1000); // Repeat every second
    isAutoPlaying = true
    }else{
        clearInterval(intervalId)
        isAutoPlaying = false
    }
}
