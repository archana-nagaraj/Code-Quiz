// Global variables
var body = document.body;
var startQuizBtn = document.querySelector("#start-quiz-btn");
var main = document.querySelector("#main-content");
var codingQuizChallengediv = document.getElementById("Coding-Quiz-Challenge-info");
var questionHeader = document.querySelector("#questionHeader");
var answerChoicesOl = document.querySelector("#answerChoices-ol");
var correctAnswerdiv = document.querySelector("#correctAnswer-div");
var quizQuestionsdiv = document.querySelector("#quizQuestions-div");
var timerEl = document.querySelector("#time");


var timeLeft = 75;
var que_Index = 0;

// The array of questions for the quiz.
const myQuestions = [
    {
      question: "Commonly used data types Do Not Include:",
      answers: {
        1: "Strings",
        2: "Boleans",
        3: "alerts",
        4: "numbers"
      },
      correctAnswer: "3"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is?",
      answers: {
        1: "Javascript",
        2: "terminal/bash",
        3: "forloops",
        4: "console.log"
      },
      correctAnswer: "4"
    },
    {
      question: "Array in JavaScript can be used to store?",
      answers: {
        1: "numbers and Storage",
        2: "Booleans",
        3: "other arrays",
        4: "all of the above"
      },
      correctAnswer: "4"
    },
    {
        question: "String values must be encloded within ____ when being assigned to variables.",
        answers: {
          1: "commas",
          2: "curly brackets",
          3: "quotes",
          4: "paranthesis"
        },
        correctAnswer: "3"
      }
  ];

  // Clear the CodingQuizChallenge Info page - Helper code to call the startQuiz()
var removeCodingChallengeInfoPage = function(){
    countdown();
    main.removeChild(codingQuizChallengediv);
    startQuiz();
  }

 // Begin the quiz! Good luck!
  var startQuiz = function()
{ 
    if (que_Index < myQuestions.length && timeLeft > 0){
        loadQuestionandAnswer();
    }
    else {
        quizQuestionsdiv.innerHTML="";
        allDone();
    }
} ;

var countdown = function(){
    timerLeft = 75;
    timerEl.textContent = timeLeft;
    var timeInterval = setInterval(function() {
        if ((timeLeft > 1) && (que_Index < 4))
        { 
        timerEl.textContent = timeLeft;
          timeLeft--;
        } else {
        //   Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
        }
      }, 1000);
    }

// Load question and answer 
var loadQuestionandAnswer =function()
{
    answerChoicesOl.innerHTML="";
    var currentQuestionObj = myQuestions[que_Index];
    var currentQuestion = currentQuestionObj.question;
    //question
    questionHeader.textContent = currentQuestion;
    questionHeader.setAttribute('style', 'margin:auto; width:50%; text-align:left;');
    //answers
    currentQuestion_answerChoiceslist = currentQuestionObj.answers;
    if (currentQuestion_answerChoiceslist){
        for (var choice in currentQuestion_answerChoiceslist)
        {
            var answerChoicesListItem = document.createElement("li");
            answerChoicesListItem.textContent = currentQuestion_answerChoiceslist[choice];
            answerChoicesListItem.setAttribute('style', 'margin:auto; width: 20%; text-align:left;');
            answerChoicesListItem.id = choice;
            answerChoicesListItem.addEventListener("click", function(event){
                showAnswer(event, currentQuestionObj.correctAnswer);
            });
            answerChoicesOl.appendChild(answerChoicesListItem); 
        } 
    };
}

//Display result - answer correct or wrong
var showAnswer = function(event, correctAnswer){
    if (event.target.id ===  correctAnswer)
    {   
        correctAnswerdiv.textContent = "Correct!";
        correctAnswerdiv.setAttribute('style', 'text-align: Center; margin-bottom: 20px, font-style: italic, font-size: 2.8rem;');
    }else
    {
        correctAnswerdiv.textContent = "Wrong!";
        correctAnswerdiv.setAttribute('style', 'text-align: Center; margin-bottom: 20px, font-style: italic, font-size: 2.8rem;');
        timeLeft-=10;
        timerEl.textContent = timeLeft;
    }
    que_Index++;
    startQuiz();
}


// click the start-quiz button
startQuizBtn.addEventListener("click", removeCodingChallengeInfoPage);


// All Done Page loaded dynamically using DOM methods
var allDone = function() {
    var allDonediv = document.createElement("div");
    allDonediv.setAttribute('style', 'text-align: center, margin-bottom: 20px, position: absolute, top: 40%, left: 50%;');
    allDonediv.style.position = "absolute";
    allDonediv.style.top = "30%";
    allDonediv.style.left = "30%";

    main.appendChild(allDonediv);

    var allDoneh1 = document.createElement("h1");
    allDoneh1.textContent = "All Done!";
    allDoneh1.setAttribute('style', 'text-align: left; margin-bottom: 20px;');
    allDonediv.appendChild(allDoneh1);

    var allDoneFinalScore = document.createElement("h2");
    allDoneFinalScore.textContent = "Your final score is: " +timeLeft + ".";
    allDoneh1.setAttribute('style', 'text-align: left; margin-bottom: 20px;');
    allDonediv.appendChild(allDoneFinalScore);

    //create enter initials div to hold 3 different elements
    var enterInitialsdiv = document.createElement("div");
    enterInitialsdiv.setAttribute('style', 'text-align: left;');
    enterInitialsdiv.style.width = "100%"; 
    
    allDonediv.appendChild(enterInitialsdiv);

    var allDoneEnterInitials = document.createElement("h2");
    allDoneEnterInitials.textContent = "Enter Initials: ";
    allDoneEnterInitials.setAttribute('style', 'text-align: left; margin-bottom: 20px;');
    enterInitialsdiv.appendChild(allDoneEnterInitials);

    // var initialsInputForm = document.createElement("form");
    // enterInitialsdiv.appendChild(initialsInputForm);

    // var formdiv = document.createElement("div");
    // initialsInputForm.appendChild(formdiv);

    // var labelInitials = document.createElement("Label");
    // initialsInputForm.appendChild(labelInitials);

    var enterInitialsInput = document.createElement("INPUT");
    enterInitialsInput.setAttribute("type", "text");
    enterInitialsdiv.appendChild(enterInitialsInput);
    
    var submitButton = document.createElement("BUTTON");
    var submit = document.createTextNode("Submit");
    submitButton.appendChild(submit);
    submitButton.setAttribute("style", "cursor: pointer");
    submitButton.style.backgroundColor = "navy";
    submitButton.style.padding = "5px 32px";
    submitButton.style.borderRadius = "8px";
    submitButton.style.color = "white";
    submitButton.style.textAlign = "center";
    submitButton.style.fontSize = "16px";
    submitButton.style.margin= "4px 2px"; 
    enterInitialsdiv.appendChild(submitButton);
    clickSubmit(submitButton);
}


// Function to click Submit button in the All Done page
var clickSubmit = function(element ){
    element.addEventListener("click", finalHighScores);
}

//Function to build FibalHighScores page using DOM methods
var finalHighScores = function() {
    body.innerHTML = "";
    var highScoresdiv = document.createElement("div");
    highScoresdiv.setAttribute('style', 'text-align: center, margin-bottom: 20px, position: absolute, top: 40%, left: 50%;');
    highScoresdiv.style.position = "absolute";
    highScoresdiv.style.top = "30%";
    highScoresdiv.style.left = "30%";
    body.appendChild(highScoresdiv);

    var highScoresh1 = document.createElement("h1");
    highScoresh1.textContent = "High Scores";
    highScoresdiv.appendChild(highScoresh1);

    var showScores = document.createElement("li");
    showScores.textContent = timerEl.textContent;
    showScores.style.background = "skyblue";
    showScores.style.fontSize = "20px";
    showScores.style.padding = "10px";
    showScores.style.margin = "10px";
    showScores.style.listStyleType = "decimal";
    highScoresdiv.appendChild(showScores);

    var goBackButton = document.createElement("BUTTON");
    var goBack = document.createTextNode("Go Back");
    goBackButton.appendChild(goBack);
    goBackButton.setAttribute("style", "cursor: pointer");
    goBackButton.style.backgroundColor = "navy";
    goBackButton.style.padding = "5px 32px";
    goBackButton.style.borderRadius = "8px";
    goBackButton.style.color = "white";
    goBackButton.style.textAlign = "center";
    goBackButton.style.fontSize = "16px";
    goBackButton.style.margin= "4px 2px"; 

    highScoresdiv.appendChild(goBackButton);

    var clearHighScoresButton = document.createElement("BUTTON");
    var clearHighScores = document.createTextNode("Clear high scores");
    clearHighScoresButton.appendChild(clearHighScores);
    clearHighScoresButton.setAttribute("style", "cursor: pointer");
    clearHighScoresButton.style.backgroundColor = "navy";
    clearHighScoresButton.style.padding = "5px 32px";
    clearHighScoresButton.style.borderRadius = "8px";
    clearHighScoresButton.style.color = "white";
    clearHighScoresButton.style.textAlign = "center";
    clearHighScoresButton.style.fontSize = "16px";
    clearHighScoresButton.style.margin= "4px 2px"; 

    highScoresdiv.appendChild(clearHighScoresButton);
   
}

// Function to take back to the original page - Click Goback button
var clickGoBack = function(element){
    element.addEventListener("click", )

}
