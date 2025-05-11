const questions = [
    {
        questions: "Which is  largest animal in the world ?" ,
        answers: [
          
                {text: "Shark" , corret : false },
                {text: "Blue whale" , corret : false },
                {text: "Elephant" , corret : false },
                {text: "Giraffe" , corret : false }
            
        ]
    },

    //question 2
    {
          questions: "Which is  largest animal in the world ?" ,
        answers: [
          
                {text: "Vaticam City" , corret : false },
                {text: "Bhutan" , corret : false },
                {text: "Nepal" , corret : false },
                {text: "Shri Lanka" , corret : false }
            
        ]

    },

    // question 3 

    {
  questions: "Which is  largest desert in the world ?" ,
        answers: [
          
                {text: "Kalahari" , corret : false },
                {text: "Gobi" , corret : false },
                {text: "Sahara" , corret : false },
                {text: "Antarctica" , corret : true }
            
        ]
    },

    {
          questions: "Which is  the smallest continent in the world  ?" ,
        answers: [
          
                {text: "Asia" , corret : false },
                {text: "Australia" , corret : true },
                {text: "Arctic" , corret : false },
                {text: "Africa" , corret : false }
            
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0 ;
let score = 0 ;

function startquize(){
      currentQuestionIndex = 0 ;
      score = 0 ;
      nextButton.innerHTML = "Next";

      showQuestion() ;
}



function showQuestion(){
        let currentQuestion  = questions[currentQuestionIndex];
        let questionNo  = currentQuestionIndex +1 ;
        questionElement.innerHTML = questionNo + "." + currentQuestion.question ;


        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text ;
            button.classList.add("btn");
            answerButton.appendChild(button);
        });

}

startquize(); 
