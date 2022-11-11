let n1 = 0;
let n2 = 0;
let answer = 0;

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getNumbers() {
    n1 = getRndInt(1, 12);
    n2 = getRndInt(1, 12);
}

function getAnswer() {
    answer = n1 * n2
}

function compareInput() {
    answer = document.getElementById("n1").innerText * document.getElementById("n2").innerText;
    //document.getElementById("answer").innerText = answer;
    input = document.getElementById("user-answer").value;

    if (answer == input) {
        document.body.style.background = "#587b2e";
        return true;
    }
    else {
        document.body.style.background = "#990000";
        return false;
    }
}

function newQuestion() {
    getNumbers()
    document.getElementById("n1").innerText = n1
    document.getElementById("n2").innerText = n2
}