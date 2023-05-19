//start-quiz
function playQuiz() {
    localStorage.clear();
}

let counter = localStorage.getItem('rightcount') || 0;
let wrongCount = 0;

//click-option
function right() {
    document.getElementById("right").style.backgroundColor="#32cd32";
    document.getElementById("right").style.color="white";
    document.getElementById("wrong1").disabled= true;
    document.getElementById("wrong2").disabled= true;
    document.getElementById("wrong3").disabled= true;
    document.getElementById("tryagain").style.visibility="hidden";
    document.getElementById("goto").innerHTML="Go to next";
    
    if(wrongCount < 3) {
        counter++;
        localStorage.setItem('rightcount', counter);
    }
    
}

function rightFinal() {
    document.getElementById("right").style.backgroundColor="#32cd32";
    document.getElementById("right").style.color="white";
    document.getElementById("wrong1").disabled= true;
    document.getElementById("wrong2").disabled= true;
    document.getElementById("wrong3").disabled= true;
    document.getElementById("tryagain").style.visibility="hidden";

    if(wrongCount < 3) {
        counter++;
        localStorage.setItem('rightcount', counter);
    }
  
}

function wrong1() {
    document.getElementById("wrong1").style.backgroundColor="#f4666a";
    document.getElementById("wrong1").style.color="white";
    document.getElementById("right").disabled= true;
    document.getElementById("wrong2").disabled= true;
    document.getElementById("wrong3").disabled= true;
    document.getElementById("tryagain").style.visibility="visible";
    wrongCount++;
}

function wrong2() {
    document.getElementById("wrong2").style.backgroundColor="#f4666a";
    document.getElementById("wrong2").style.color="white";
    document.getElementById("right").disabled= true;
    document.getElementById("wrong1").disabled= true;
    document.getElementById("wrong3").disabled= true;
    document.getElementById("tryagain").style.visibility="visible";
    wrongCount++;
}

function wrong3() {
    document.getElementById("wrong3").style.backgroundColor="#f4666a";
    document.getElementById("wrong3").style.color="white";
    document.getElementById("right").disabled= true;
    document.getElementById("wrong2").disabled= true;
    document.getElementById("wrong1").disabled= true;
    document.getElementById("tryagain").style.visibility="visible";
    wrongCount++;
}

function tryAgain() {
    const collection = document.getElementsByClassName("optionClick");
    for (let i = 0; i < collection.length; i++) {
        collection[i].removeAttribute('disabled');
        collection[i].style.backgroundColor="#ffffff";
        collection[i].style.color="#000000";
    }
}

//send result
var result = counter + ("/3");
document.getElementById("result").innerHTML= result;