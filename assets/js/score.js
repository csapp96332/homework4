var showScore = document.querySelector("#show-score");
var listHighScore = document.getElementById("list-highscore");
var clearHighScoreBtn = document.querySelector("#clear-highscore");
clearHighScoreBtn.setAttribute("style", "color:white; background-color:blue");
var showFinalHighScore = localStorage.getItem("score");
var showUserInitial = localStorage.getItem("initial");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var addScoreBtn = document.createElement("li");
       
        addScoreBtn.textContent = allScores[i].initials + " : " + allScores[i].score;
        listHighScore.appendChild(addScoreBtn);

    }
}


//back to quiz
var backToQuiz = document.querySelector("#back-quiz");
backToQuiz.setAttribute("style", "color:white; background-color:blue");
backToQuiz.addEventListener("click", function () {
  window.location.href = "index.html";
});



//clear score 
  clearHighScoreBtn.addEventListener("click", function () {
  localStorage.clear();
  listHighScore.classList.add("d-none");

});