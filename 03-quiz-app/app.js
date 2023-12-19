const questions = [
  {
    question: "which is most venomous snake in the world",
    answers: [
      { text: "King Kobra", correct: false },
      { text: "inland taipan", correct: true },
      { text: "Black Mamba", correct: false },
      { text: "Russell's Viper ", correct: false },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Beijing", correct: false },
      { text: "Seoul", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false },
    ],
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "Charles Dickens", correct: false },
      { text: "William Shakespeare", correct: true },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
  {
    question: "What is the largest mammal?",
    answers: [
      { text: "African Elephant", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Hippopotamus", correct: false },
    ],
  },
  {
    question: "In what year did World War II end?",
    answers: [
      { text: "1943", correct: false },
      { text: "1945", correct: true },
      { text: "1950", correct: false },
      { text: "1939", correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Osmium", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Oganesson", correct: false },
      { text: "Opium", correct: false },
    ],
  },
  {
    question: "What is the currency of Australia?",
    answers: [
      { text: "Dollar", correct: true },
      { text: "Euro", correct: false },
      { text: "Pound", correct: false },
      { text: "Yen", correct: false },
    ],
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
];


const questionElement = document.getElementById("questions");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestions();
}


function showQuestions(){
    resetState();

    const currentQuestion = questions[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    // console.log(currentQuestion);
    questionElement.innerHTML = questionNumber + " . " + currentQuestion.question; 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        if(answer.correct){
          button.dataset.correct = answer.correct;
        }

        button.addEventListener("click" , selectAnswer);
    })
}

function resetState(){
   nextBtn.style.display="none";

   while(answerBtns.firstChild){
      answerBtns.removeChild(answerBtns.firstChild);
   }
}

function selectAnswer(e){
  const selectBtn = e.target;
  const isCorrect = (selectBtn.dataset.correct === "true");
  if(isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  }else{
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerBtns.children).forEach((btn) => {

      if(btn.dataset.correct == "true"){
         btn.classList.add("correct");
      }

      btn.disabled = true;

  });

  nextBtn.style.display = 'block';
}

function handleNextBtn() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
      showQuestions();
  }else{
     showScore();
  }
}

nextBtn.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length) {
        handleNextBtn();
    }else{
       startQuiz();
    }
});


function showScore(){
   resetState()
   questionElement.innerHTML = `You scored ${score} out of ${questions.length} .`
   nextBtn.innerHTML = "Play Again";
   nextBtn.style.display="block";
}


startQuiz();

