function Hello () {
    console.log("Hello");
    console.log("World");
}

function pickComputerMove() {
    const randomNumber = Math.floor(Math.random()*10);

    if (randomNumber >= 0 && randomNumber <=3) {
        return "Pedra";
    } else if (randomNumber >= 4 && randomNumber <= 6) {
       return "Papel";
    } else {
        return "Tesoura";
    }
}

function playGame() {
    let computer = pickComputerMove();
    const player = prompt("Digite (Pedra, Papel ou Tesoura");

    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Empate");
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Player ganhou");
    } else {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Conputer ganhou");
    }
}

function playGame2(escolha) {
    let computer = pickComputerMove();
    const player = escolha;

    if((player == "Pedra" && computer == "Pedra") || (player =="Papel" && computer == "Papel") || (player == "Tesoura" && computer == "Tesoura")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Empate");
    } else if ((player == "Pedra" && computer=="Tesoura") || (player == "Papel" && computer=="Pedra") || (player =="Tesoura" && computer=="Papel")) {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Player ganhou");
    } else {
        console.log(`Player: ${player} vs Computer ${computer}`);
        console.log("Conputer ganhou");
    }
}