//--setting variables


var quizContainer = document.querySelector("#quiz-container");
var questionContainer = document.querySelector("#question-container");
var startButton = document.querySelector("#start-button");
var quizTimer = document.querySelector("#content-timer");
var secondsLeft = 100;
var questionChoices = document.querySelector("#question-choices");
var questionIndex=0;
var ulCreate = document.createElement("ul");
var score=0;
var penalty=10
var results = document.querySelector("#results")
var quizCompleted = document.querySelector("#quiz-completed")


var myQuestions = [
    //question0
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
      answer: "<script>",
    },
    //question1
    {
      question: "Where is the correct place to insert a JavaScript?",
      choices: ["Ther <head> section", "Both the <head> section and the <body> section are correct", "The <body> section"],
      answer: "Both the <head> section and the <body> section are correct",
    },
    //question 2
    {
        question: "What Javascript function would you use to print out to the console?",
        choices: ["alert", "console.log", "windows.event"],
        answer: "console.log",
    },
      //question 3
    {
        question: "What type of statement would you use to copare a result?",
        choices: ["If", ".textContent", "Nothing"],
        answer: "If",
    },
  
  ];

//question index
//var questionIndex = Number;
var currentQuestionIndex = myQuestions[questionIndex].question;
var choicesArray = myQuestions[questionIndex].choices;
var answer = myQuestions[questionIndex].answer;
console.log(currentQuestionIndex);
console.log(choicesArray);
console.log(answer);




//--making button disappear

startButton.addEventListener("click", settime);

//set timer
function settime() {
    startButton.classList.add("d-none");
    
    
    //questionContainer.classList.add("d-none");
    //showQuestions();
    var timerInterval = setInterval(function () {

      quizTimer.innerHTML = "Timer : " + secondsLeft + " seconds left!!!!!!!";
      if (secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        //sendMessage();
      }
      secondsLeft--;
    }, 1000);
    render(questionIndex);  
  }



//question function

  function render(questionIndex) {
    questionContainer.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < myQuestions.length; i++) {
        // Appends question title only
        var userQuestion = myQuestions[questionIndex].question;
        var userChoices = myQuestions[questionIndex].choices;
        questionContainer.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionContainer.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == myQuestions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + myQuestions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + myQuestions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= myQuestions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + myQuestions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionContainer.appendChild(createDiv);

}
// store initial and score to localstorage

var userInitial = document.querySelector("#user-initial");

userInitial.textContent = "-";

var submitInitialBtn = document.querySelector("#submit-initial");

submitInitialBtn.setAttribute("style", "color:white; background-color:blue");

submitInitialBtn.addEventListener("click", function () {
  var initialText = userInitial.value;

  if (initialText.length === 0) {
    alert("Pleas enter your initial");
  } else {
    var finalText = {
      initials: initialText,

      score: score,
    };


    var allScores = localStorage.getItem("allScores");

    if (allScores === null) {
      allScores = [];
    } else {
      allScores = JSON.parse(allScores);
    }

    allScores.push(finalText);

    var newScore = JSON.stringify(allScores);

    localStorage.setItem("allScores", newScore);

    window.location.href = "highscore.html";
  }
});
function allDone() {
  questionContainer.classList.add("d-none");

  result.classList.add("d-none");

  quizCompleted.classList.remove("d-none");

}

  


  