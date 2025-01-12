const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Blue whale",
        correct: true,
      },
      {
        text: "Elephant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the smallest country in the world?",
    answers: [
      {
        text: "Vatican City",
        correct: true,
      },
      {
        text: "Bhutan",
        correct: false,
      },
      {
        text: "Nepal",
        correct: false,
      },
      {
        text: "Shri Lanka",
        correct: false,
      },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      {
        text: "Kalahari",
        correct: false,
      },
      {
        text: "Gobi",
        correct: false,
      },
      {
        text: "Sahara",
        correct: false,
      },
      {
        text: "Antarctica",
        correct: true,
      },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      {
        text: "Asia",
        correct: false,
      },
      {
        text: "Australia",
        correct: true,
      },
      {
        text: "Arctic",
        correct: false,
      },
      {
        text: "Africa",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
};

const showQuestion = () => {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectButton = e.target;
  const isCorrect = selectButton.dataset.correct === "true";
  if (isCorrect) {
    selectButton.classList.add("correct");
    score++;
  } else {
    selectButton.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
      button.disabled = true;
    } else {
      button.disabled = true;
    }
  });
  nextButton.style.display = "block";
};

const showScore = () => {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
};

const handleNextButton = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
