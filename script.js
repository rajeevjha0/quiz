const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Goa", correct: false },
        { text: "Canada", correct: false },
        { text: "Thailand", correct: false },
      ],
    },
    {
      question: "What is the capital of Italy?",
      answers: [
        { text: "Rome", correct: true },
        { text: "Madrid", correct: false },
        { text: "Berlin", correct: false },
        { text: "London", correct: false },
      ],
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      answers: [
        { text: "Lion", correct: true },
        { text: "Tiger", correct: false },
        { text: "Elephant", correct: false },
        { text: "Zebra", correct: false },
      ],
    },
    {
      question: "How many legs does a spider have?",
      answers: [
        { text: "8", correct: true },
        { text: "6", correct: false },
        { text: "4", correct: false },
        { text: "10", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: false },
      ],
    },
    {
      question: "Which color is made by mixing red and blue?",
      answers: [
        { text: "Purple", correct: true },
        { text: "Green", correct: false },
        { text: "Orange", correct: false },
        { text: "Yellow", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButton = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = "true";
      }
      button.addEventListener("click", selectAnswer);
      answerButton.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    answerButton.innerHTML = "";
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
  
    Array.from(answerButton.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  
  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz(); // Play again works here
    }
  });
  
  startQuiz();
  