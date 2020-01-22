// start button to begin quiz

var startButton = document.getElementById("start-button");
var questionIndex = 0;

// function to begin loop of questions
var timer; 
    var time = 7;

    function renderQuestions(){
        console.log("questions", questions[questionIndex]);
        var currentQuestion = questions[questionIndex]
        var questTitle = document.getElementById("question-title")
        
        // be able to render one question at a time with the answers
        // create an index telling us our current question to render
        // render the question
        // loop over the choices for each question
        // after we loop we want to be able to render each question
        // for each choice we want to attach a click eventlistener
        // render each of the choices
    }





 function myFunction(){
    // var i;
    var startScreen = document.getElementById("start-button");
    startScreen.style.display = "none";
    renderQuestions();

    
    // var text = "";
    // for (i = 0; i < questions.length; i++) {
    //     text += questions;
    // }
    // document.getElementById("main-section").innerHTML = text;
    timer = setInterval(countdown, 1000);
}
function countdown(){
    time-- ;
    console.log("time", time)
    if(time == 0){
        console.log('time is up')
        clearInterval(timer);
    }
};
startButton.onclick = myFunction;