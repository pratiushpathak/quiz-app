const questions=[

  {
    'que':'which of the following is markup langauge',
    'a':'HTML',
    'b':'CSS',
    'c':'javascript',
    'd':'php',
    'correct':'a'
  },
  {
    'que':'what year was js launched',
    'a':'1996',
    'b':'1995',
    'c':'1994',
    'd':'none of the above',
    'correct':'b'
  },
  {
    'que':'what does css stand for',
    'a':'hyper text markup language',
    'b':'cascading style sheet',
    'c':'jason object notation',
    'd':'none of the above',
    'correct':'b'
  }

]
let index=0;
let total=questions.length;
let right=0,
    wrong=0;
const queBox= document.getElementById("queBox");
const optionInputs=document.querySelectorAll('.options')


function loadQuestion()
{
  if(index===total)
  {
     return endQuiz();
  }
  reset();
  const data=questions[index];// first object
  queBox.innerText=`${index+1} ${data.que}`;// first question retrieved with question no
  optionInputs[0].nextElementSibling.innerText=data.a;//retring first option
  optionInputs[1].nextElementSibling.innerText=data.b;
  optionInputs[2].nextElementSibling.innerText=data.c;
  optionInputs[3].nextElementSibling.innerText=data.d;
  

}

function submitQuiz(){
  const data=questions[index];
  const ans=getAnswer()
  if(ans=== data.correct)
  {
   right++;
  }
  else
  {
    wrong++;
  }
  index++; // moving to next question
  loadQuestion();

  return;


}
 
function getAnswer()
{
  let answer;
  optionInputs.forEach((input)=>{
    if(input.checked)
    {
      // console.log(input.value)
      answer=input.value;
    }
    

  })
  return answer;

}
function reset()
{
  optionInputs.forEach((input)=>{
    input.checked=false;

  })

}
function endQuiz()
{
  document.getElementById("box").innerHTML=
  `
  <h3>Thank you for playing the Quiz </h3>
  <h2>${right} / ${total} is correct</h2>
  `

}
loadQuestion()