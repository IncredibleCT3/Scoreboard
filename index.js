let homeScore = 0;
let awayScore = 0;

function addOneHome(){
    homeScore += 1;
    document.getElementById("scoreHome").innerText = homeScore;
}

function addTwoHome(){
    homeScore += 2;
    document.getElementById("scoreHome").innerText = homeScore;
}

function addThreeHome(){
    homeScore += 3;
    document.getElementById("scoreHome").innerText = homeScore;
}

function addOneAway(){
    awayScore += 1;
    document.getElementById("scoreAway").innerText = awayScore;
}

function addTwoAway(){
    awayScore += 2;
    document.getElementById("scoreAway").innerText = awayScore;
}

function addThreeAway(){
    awayScore += 3;
    document.getElementById("scoreAway").innerText = awayScore;
}

function reset(){
    homeScore = 0;
    awayScore = 0;
    document.getElementById("scoreHome").innerText = homeScore;
    document.getElementById("scoreAway").innerText = awayScore;
}