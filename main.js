let n1 = 0;
let n2 = 0;
let answer = 0;

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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
        document.getElementById("answer").innerText = answer;
        document.getElementById('nxtbtn').style.visibility = 'visible';
        document.getElementById('answer').style.visibility = 'visible';
        return true;
    }
    else {
        document.body.style.background = "#990000";
        return false;
    }
}

function newQuestion() {
    n1 = getRndInt(1, 12);
    n2 = getRndInt(1, 12);
    document.getElementById("n1").innerText = n1
    document.getElementById("n2").innerText = n2
    document.getElementById('nxtbtn').style.visibility = 'hidden';
    document.getElementById('answer').style.visibility = 'hidden';
    document.getElementById('user-answer').value = ' ';
}



//document.getElementById('nxtbtn').style.visibility = 'hidden';
//document.getElementById('nxtbtn').style.visibility = 'visible';