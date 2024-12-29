document.addEventListener("DOMContentLoaded", () => {
  const questionsArray = [
    {
      questionA: "which is the smallest country in the world ?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "monaco", correct: false },
        { text: "nauru", correct: false },
        { text: "tuvalu", correct: false },
      ],
    },
    {
      questionA: "how many countries are there in the world ?",
      answers: [
        { text: 190, correct: false },
        { text: 192, correct: false },
        { text: 195, correct: true },
        { text: 201, correct: false },
      ],
    },
    {
      questionA: "which is the wettest state in the world ?",
      answers: [
        { text: "meghalaya", correct: true },
        { text: "nagaland", correct: false },
        { text: "madhay pradesh", correct: false },
        { text: "maharashtra", correct: false },
      ],
    },
    {
      questionA: "Which country is known as the land of the rising sun?",
      answers: [
        { text: "india", correct: false },
        { text: "japan", correct: true },
        { text: "indonesia", correct: false },
        { text: "bangaladesh", correct: false },
      ],
    },
    {
      questionA:
        " Which animal is known for its intelligence and ability to use tools?",
      answers: [
        { text: "chimpanzee", correct: true },
        { text: "monkey", correct: false },
        { text: "chameleon", correct: false },
        { text: "african elephant", correct: false },
      ],
    },
    {
      questionA: "which is the largest oil refinery in the world ?",
      answers: [
        { text: "jamnagar refinery", correct: true },
        { text: "Paraguaná Refinery Complex", correct: false },
        { text: "SK Energy Ulsan Refinery Complex", correct: false },
        { text: "Ruwais Refinery", correct: false },
      ],
    },
    {
      questionA: "Who discovered penicillin?",
      answers: [
        { text: "Wilhelm Roentgen", correct: false },
        { text: "Peter Henlein", correct: false },
        { text: "Alexander Fleming", correct: true },
        { text: "not me", correct: false },
      ],
    },
    {
      questionA: "Which was the earliest civilization in India?",
      answers: [
        { text: " Harappan Civilization", correct: true },
        { text: "the Gupta Empire.", correct: false },
        { text: "the Mauryan Empire", correct: false },
        { text: "the Vedic Age", correct: false },
      ],
    },
    {
      questionA: "Name the National Heritage Animal of India?",
      answers: [
        { text: "elephant", correct: true },
        { text: "tiger", correct: false },
        { text: "lion", correct: false },
        { text: "rhino", correct: false },
      ],
    },
    {
      questionA: "Which is the National Aquatic Animal of India?",
      answers: [
        { text: "Glyphis gangeticus", correct: false },
        { text: "Clown knife fish", correct: false },
        { text: "Dolphin", correct: true },
        { text: "I don't know", correct: false },
      ],
    },
  ];
  const btnContainer = document.querySelector(".btn-container");
  const nextBtn = document.querySelector(".nxt-btn");
  const question = document.querySelector(".question");
  const scoreCount = document.querySelector(".score");

  let questionIndex = 0;
  let score = 0
  function startquize() {
    questionShow();
  }
  function questionShow() {
    resetstate();
    let currentQuestion = questionsArray[questionIndex];
    let questionNo = questionIndex + 1;
    question.innerHTML = questionNo + "." + currentQuestion.questionA;
    currentQuestion.answers.forEach((answer) => {
      let button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      btnContainer.appendChild(button);
      // scoreCount.innerHTML = score
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", (e) => {
        const selectBtn = e.target
        // selectBtn.dataset.correct ==="true"
        nextBtn.style.display = "block"
        const isCorrect = selectBtn.dataset.correct ==="true"
        if (isCorrect) {
          selectBtn.classList.add("correct")
          score ++
        }else{
          selectBtn.classList.add('incorrect')
        }
        Array.from(btnContainer.children).forEach(button =>{
          if (button.dataset.correct) {
            button.classList.add("correct")
          }
          button.disabled = true
        })
        // nextBtn.Style.display = 
      });
    });
  }
  function resetstate() {
    while (btnContainer.firstChild) {
      btnContainer.removeChild(btnContainer.firstChild);
      nextBtn.style.display = "none"
    }
  }
  startquize();
  // questionShow()
  console.log(btnContainer);
  
  nextBtn.addEventListener('click',()=>{
    questionIndex++;
    if (questionIndex < 10) {
      questionShow()
      
    } else {
      showScore()
      question.style.display = "none"
    }
  })
  function showScore() {
    resetstate()
      scoreCount.innerHTML = `your score is ${score} out of 10`
  }
  console.log(question);
  
});
