var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var rps = ["✊", "✋", "✌"]
var winlosedraw = document.getElementById("anwserh1")
var youranwser = document.getElementById("anwserp")
var anwsercomp = document.getElementById("anwsercomp")
var humanmove
var draw=0
var win = 0
var lose = 0
var drawtxt= document.getElementById("draw")
var wintxt= document.getElementById("win")
var losetxt= document.getElementById("lose")


function rpsAnswer() {
    return rps[Math.floor(Math.random() * rps.length)]
}

function mapRpsSymbolToMove(symbol) {
    if (symbol === "✊") return "rock"
    if (symbol === "✋") return "paper"
    if (symbol === "✌") return "scissors"
}

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
