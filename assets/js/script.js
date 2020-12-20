//Query for Start-quiz button
var startQuizBtn = document.querySelector("#start-quiz-btn");
var main = document.querySelector("#main-content");
var questionHeader = document.querySelector("#questionHeader");
var answerChoices = document.querySelector("#answerChoices");
var correctAnswer = document.querySelector("#correctAnswer");

var timer = 75;
var counter = 0;

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
      correctAnswer: "alerts"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is?",
      answers: {
        1: "Javascript",
        2: "terminal/bash",
        3: "forloops",
        4: "console.log"
      },
      correctAnswer: "console.log"
    },
    {
      question: "Array in JavaScript can be used to store?",
      answers: {
        1: "numbers and Storage",
        2: "Booleans",
        3: "other arrays",
        4: "all of the above"
      },
      correctAnswer: "all of the above"
    },
    {
        question: "String values must be encloded within ____ when being assigned to variables.",
        answers: {
          1: "commas",
          2: "curly brackets",
          3: "quotes",
          4: "paranthesis"
        },
        correctAnswer: "quotes"
      }
  ];

  // Remove parent element
  var removeParent = function()
{ 
    var parent = document.getElementById("main-content");
    //console.log(parent);
    var child = document.getElementById("Coding-Quiz-Challenge-info");
   // console.log(child);
    parent.removeChild(child);
    loadQuestion1();
} ;


// Place all Questions on html page
var loadQuestions = function()
{
    for (var i = 0; i < myQuestions.length; i++) {  
        var question = document.createElement("h2");
        question.textContent = myQuestions[i].question;
        question.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
        main.appendChild(question);
        
        for ( var j = 0;j <=4; j++){
            var answers = document.createElement("li");
            answers.textContent = myQuestions[i].answers[j];
            answers.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
            main.appendChild(answers);
        }
        }
}


// Load question 1 
var loadQuestion1 =function()
{
    //question
    var question = document.createElement("h2");
    question.textContent = myQuestions[0].question;
    question.setAttribute('style', 'margin:auto; width:50%; text-align:left;');
    questionHeader.appendChild(question);
    //answers
    for ( var j = 1; j<=4; j++){
        var answers = document.createElement("li");
        answers.textContent = myQuestions[0].answers[j];
        answers.setAttribute('style', 'margin:auto; width: 20%; text-align:left;');
        answers.id = myQuestions[0].answers[j];
        var show_rightORWrong = document.createElement("h2");
        show_rightORWrong.setAttribute('style', 'text-align: Center; margin-bottom: 20px, font-style: italic, font-size: 2.8rem;');
        answers.addEventListener("click", function(event){
            if (event.target.id ===  myQuestions[0].correctAnswer)
            {   
                show_rightORWrong.textContent = "Correct";
                correctAnswer.appendChild(show_rightORWrong);
            }else
            {
                show_rightORWrong.textContent = "Wrong!!";
                timer = timer-10
            };
        }
    )
        answerChoices.appendChild(answers);
    }

}


 
// click the start-quiz button
startQuizBtn.addEventListener("click", removeParent);



