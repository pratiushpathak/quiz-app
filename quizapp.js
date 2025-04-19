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
const queBox= document.getElementById("queBox");
const optionInputs=document.querySelectorAll('.options')

function loadQuestion()
{
  const data=questions[index];// first object
  queBox.innerText=`${index+1} ${data.que}`;// first question retrieved with question no
  

}
loadQuestion()