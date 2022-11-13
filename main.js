let n1 = 0;
let n2 = 0;
let answer = 0;
let highscore = 0;
let score = 0;
let answer_checked = false;

function startQuiz() {
    document.getElementById('start').style.visibility = 'hidden';
    document.getElementById('quiz').style.visibility = 'visible';
}

function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getAnswer() {
    answer = n1 * n2
}

function compareInput() {
    answer = document.getElementById("n1").innerText * document.getElementById("n2").innerText;
    input = document.getElementById("user-answer").value;

    if (answer == input) {
        if (answer_checked == false) {
            document.body.style.background = "#587b2e";
            document.getElementById('nxtbtn').style.visibility = 'visible';
            //Reveal answer
            document.getElementById("answer").innerText = answer;
            document.getElementById('answer').style.visibility = 'visible';
            //update score
            score += 1;
            document.getElementById("score-txt").innerText = score;
            checkHighscore();
            answer_checked = true;
        }
        return true;
    }
    else {
        score = 0;
        document.getElementById("score-txt").innerText = score;
        document.body.style.background = "#990000";
        return false;
    }
}

function newQuestion() {
    answer_checked = false;
    //Generate new question
    n1 = getRndInt(1, 12);
    n2 = getRndInt(1, 12);
    document.getElementById("n1").innerText = n1
    document.getElementById("n2").innerText = n2
    //Hide answer and clear user input
    document.getElementById('answer').style.visibility = 'hidden';
    document.getElementById('user-answer').value = ' ';
    document.getElementById('nxtbtn').style.visibility = 'hidden';
}

function checkHighscore() {
    if (score > highscore) {
        highscore = score
        document.getElementById("highscore-txt").innerText = highscore;
    }
}