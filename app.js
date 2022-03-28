const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn')
const question =  document.getElementById('question')
const answerButtons= document.getElementById('answer-buttons')

const start =()=>{
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextButton.classList.remove('hide');
    showQuestion();
}
startButton.addEventListener('click', start);

let pos = 0;
let questionArray;
const showQuestion=()=>{
    if(pos < questionsList.length){
        questionArray = questionsList[pos];
        question.innerText = questionArray.question;

        cleanAnswerButton();
        questionArray.answers.map( answerItem => {
            const button = document.createElement('button');
            button.classList.add('btn');
            button.innerText = answerItem.text;
            
            if (answerItem.rpta) {
              button.dataset.rpta = answerItem.rpta;
            }
            button.addEventListener('click', selectedAnswer);
            answerButtons.appendChild(button);
        })
    }else{
      reStartGame();  
    }
}
const nextQuestion =()=>{
    pos++
    showQuestion()
}
nextButton.addEventListener('click', nextQuestion);

const cleanAnswerButton=()=>{
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

let score =0;
const selectedAnswer=(e)=>{
    const selectedButton = e.target;
    const rpta = selectedButton.dataset.rpta;
    Array.from(answerButtons.children).forEach(button => {
      setClass(button, button.dataset.rpta)
    })
    //console.log(selectedButton);
    if(rpta){
      score++
    } else{
      score;
    }//console.log(score);
}
function setClass(button, rpta) {
  clearClass(button)
  if (rpta) {
    button.classList.add('correct')
  } else {
    button.classList.add('wrong')
  }
}
function clearClass(button) {
  button.classList.remove('correct')
  button.classList.remove('wrong')
}

const reStartGame=()=>{
  const gameFinish = window.confirm("Su puntaje es: "+score+"\n"+"Desea volver a jugar?");
      if(gameFinish){
        pos = 0;
        score =0;
        showQuestion()
      }else{
        pos= 0;
        score =0;
        questionContainer.classList.add('hide');
        startButton.classList.remove('hide');
        nextButton.classList.add('hide');
      }
}
const questionsList = [
    {
      question: '¿Quién protagoniza Pretty Woman?',
      answers: [
        { text: 'Richard Gere', rpta: true },
        { text: 'Nicholas Cage', rpta: false },
        { text: 'Jared Leto', rpta: false },
        { text: 'Nick Nolte', rpta: false },
      ]
    },
    {
      question: ' ¿Cuántos Oscars consiguió Titanic??',
      answers: [
        { text: '11', rpta: true },
        { text: '7', rpta: false },
        { text: '9', rpta: false},
        { text: '10', rpta: false }
      ]
    },
    {
      question: '¿En qué año se estreno Matrix??',
      answers: [
        { text: '1997', rpta: false },
        { text: '1999', rpta: true },
        { text: '2002', rpta: false },
        { text: '1992', rpta: false }
      ]
    },
    {
      question: '¿Cuántos oscars consiguió La Lista de Schindler?',
      answers: [
        { text: '8', rpta: false },
        { text: '7', rpta: true },
        { text: '10', rpta: false},
        { text: '5', rpta: false },
      ]
    }
  ]