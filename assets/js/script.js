// Global variables
var startQuizBtn = document.querySelector("#start-quiz-btn");
var main = document.querySelector("#main-content");
var codingQuizChallengediv = document.getElementById("Coding-Quiz-Challenge-info");
var questionHeader = document.querySelector("#questionHeader");
var answerChoicesOl = document.querySelector("#answerChoices-ol");
var correctAnswerdiv = document.querySelector("#correctAnswer-div");
var quizQuestionsdiv = document.querySelector("#quizQuestions-div");

var timer = 75;
var counter = 0;
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
    main.removeChild(codingQuizChallengediv);
    startQuiz();
  }

 // Begin the quiz! Good luck!
  var startQuiz = function()
{ 
    if (que_Index < myQuestions.length){
       // console.log("len" +myQuestions.length);
        loadQuestionandAnswer();
    }
    else {
        quizQuestionsdiv.innerHTML="";
        allDone();
    }
} ;

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
   // console.log("Target id is " + event.target.id );
    if (event.target.id ===  correctAnswer)
    {   
        correctAnswerdiv.textContent = "Correct!";
        correctAnswerdiv.setAttribute('style', 'text-align: Center; margin-bottom: 20px, font-style: italic, font-size: 2.8rem;');
    }else
    {
        correctAnswerdiv.textContent = "Wrong!";
        correctAnswerdiv.setAttribute('style', 'text-align: Center; margin-bottom: 20px, font-style: italic, font-size: 2.8rem;');
    }
    que_Index++;
   // console.log("Queindex is "+que_Index);
    startQuiz();
}



 

// click the start-quiz button
startQuizBtn.addEventListener("click", removeCodingChallengeInfoPage);


var allDone = function() {
    console.log("Entered All Done Page!");
}



