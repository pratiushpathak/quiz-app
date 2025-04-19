const questions=[

  {
    question:"which is the largest animal in the world?",
    answers:[
      {text:"shark",correct:"false"},
      {text:"Blue whale ",correct:"true"},
      {text:"elephant",correct:"false"},
      {text:"giraffe",correct:"false"},
    ]

  },
  {
    question:"which is the smallest continent in the world?",
    answers:[
      {text:"Asia",correct:"false"},
      {text:"australia ",correct:"true"},
      {text:"arctic",correct:"false"},
      {text:"africa",correct:"false"},
    ]


  }
];
const questionElement=document.getElementById("question");
//console.log(questionElement)
const answerButtons=document.getElementById("answer-button");
//console.log(answerButton)
const nextButton=document.getElementById("nextbtn");
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML="Next"
  showQuestions();
}
function showQuestions()
{
  resetState()
  let currentQuestion=questions[currentQuestionIndex]
  //console.log(currentQuestion);
  let questionNo=currentQuestionIndex+1;
  //console.log(questionNo);
  questionElement.innerHTML=questionNo + "."+currentQuestion.question;
 // console.log(questionElement)
 currentQuestion.answers.forEach((answer)=>{
  const button=document.createElement("button");
  button.innerHTML=answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct)
  {
    button.dataset.correct=answer.correct;
  }
  button.addEventListener('click',selectAnswer)

 })
}

function resetState(){
  nextButton.style.display="none"
  while(answerButtons.firstChild)
  {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  
}
function selectAnswer(e)
{
  const selectedBtn=e.target;
  const iscorrect=selectedBtn.dataset.correct==="true";
  if(iscorrect)
  {
selectedBtn.classList.add("correct");
  }
  else
  {
    selectedBtn.classList.add("incorrect");
  }
Array.from(answerButtons.children).forEach((button)=>{
  if(button.dataset.correct=="true")
  {
    button.classList.add("correct")
  }
  button.disabled=true;

});
nextButton.style.display="block"
}
startQuiz()