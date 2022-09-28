let display = document.querySelector("h1");
let dice01 = document.querySelector("#dice01");
let dice02 = document.querySelector("#dice02");

function diceRoll() {
    return Math.ceil(Math.random() * 6);
}

function showDice(d, n) {
    (d === 1) ? d = dice01 : d = dice02;

    switch(n) {
        case 1:
            d.querySelector(".b1").classList.add("hide");
            d.querySelector(".b2").classList.add("hide");
            d.querySelector(".b3").classList.add("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.remove("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.add("hide");
            d.querySelector(".b8").classList.add("hide");
            d.querySelector(".b9").classList.add("hide");
            break;
        case 2:
            d.querySelector(".b1").classList.add("hide");
            d.querySelector(".b2").classList.add("hide");
            d.querySelector(".b3").classList.remove("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.add("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.remove("hide");
            d.querySelector(".b8").classList.add("hide");
            d.querySelector(".b9").classList.add("hide");
            break;
        case 3:
            d.querySelector(".b1").classList.add("hide");
            d.querySelector(".b2").classList.add("hide");
            d.querySelector(".b3").classList.remove("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.remove("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.remove("hide");
            d.querySelector(".b8").classList.add("hide");
            d.querySelector(".b9").classList.add("hide");
            break;
        case 4:
            d.querySelector(".b1").classList.remove("hide");
            d.querySelector(".b2").classList.add("hide");
            d.querySelector(".b3").classList.remove("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.add("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.remove("hide");
            d.querySelector(".b8").classList.add("hide");
            d.querySelector(".b9").classList.remove("hide");
            break;
        case 5:
            d.querySelector(".b1").classList.remove("hide");
            d.querySelector(".b2").classList.add("hide");
            d.querySelector(".b3").classList.remove("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.remove("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.remove("hide");
            d.querySelector(".b8").classList.add("hide");
            d.querySelector(".b9").classList.remove("hide");
            break;
        case 6:
            d.querySelector(".b1").classList.remove("hide");
            d.querySelector(".b2").classList.remove("hide");
            d.querySelector(".b3").classList.remove("hide");
            d.querySelector(".b4").classList.add("hide");
            d.querySelector(".b5").classList.add("hide");
            d.querySelector(".b6").classList.add("hide");
            d.querySelector(".b7").classList.remove("hide");
            d.querySelector(".b8").classList.remove("hide");
            d.querySelector(".b9").classList.remove("hide");
            break;
    }
}

addEventListener("click", (e) => {
    let roll1 = diceRoll(); showDice(1, roll1);
    let roll2 = diceRoll(); showDice(2, roll2);

    if(roll1 > roll2) display.textContent = "Player 1 Wins!";
    else if(roll2 > roll1) display.textContent = "Player 2 Wins!";
    else display.textContent = "Draw!"
})
