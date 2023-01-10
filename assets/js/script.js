var startPage = document.querySelector(".start-page") 
var questionPage = document.querySelector(".question-page")
var scorePage = document.querySelector(".score-page")
var questionTitle = document.querySelector("#title")
var answerContainer = document.querySelector(".answer-choices")
var finalScore = document.querySelector("#final-score")
var submitButton = document.querySelector("#submit-name-button")
var startButton = document.querySelector(".start-quiz")

var currentQuestion = 0;
var time = 75;
var timer  

var questions = [
    {
        title: "What are JavaScript Data Types?",
        choices: ["Number", "Boolian", "String", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        title: "What is a looping structure used in JavaScript?",
        choices: ["For", "About", "Under", "Total"],
        correctAnswer: "For",
    },
    {
        title: "How can a value be appended to an array?",
        choices: ["arr = value;", "value.arr = {arr.length}", "arr[arr.length] = value; ", "var = [arr.value]"],
        correctAnswer: "arr[arr.length] = value;",
    },
    {
        title: "What is event bubbling?",
        choices: ["A parent element within JavaScript is triggered.", "If the handler of the child is clicked, the handler of the parent will also work as if it were clicked too.", "How various objects in a document interact with each other. DOM is required for developing web pages, which includes objects like paragraphs, links, etc.", "Picking the incorrect number for a duck race during break."],
        correctAnswer: "If the handler of the child is clicked, the handler of the parent will also work as if it were clicked too.",
    },
    {
        title: "What boolean operators can be used in JavaScript?",
        choices: ["The And Operator (&&)", "Or Operator (||)", "Not Operator (!)", "All of the above"],
        correctAnswer: "All of the above",
    },
];
function startQuiz () {
 questionPage.setAttribute ("class" , "hide")
}

function showQuestion(q) {
    var titleDiv = querySelectorAll(".title");

    titleDiv.textContent = q.title;

    document.querySelectorAll(".choices");
    alts.forEach(function (element, index) {
        element.textContent = q.alternative[index];
    });
}
console.log("startButton" , startButton)
startButton.addEventListener("click" ,function() {
    console.log("chicken")
    
}



// showQuestion(questions);

//click function on click event listener on each button so you can tell what button is being clicked.*//



//event listeners will have another function which compares value they choose to correct answer*//

//function that decreases time and inside that function check if time is <=0 the timer will stop*//

//end function for the end of the quiz purpose of that is to pull up page we created the score page and display final score*//

//saving the score once name is submitted and save score button is clicked, use local storage set item to store the time with name//

//on click event listeners for submit button that directs to above save score function and on click event for start button that will trigger the start quiz function*//