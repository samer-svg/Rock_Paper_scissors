let score =JSON.parse(localStorage.getItem('score')) || { wins: 0 , loses: 0 , ties: 0};
let isAutoPlay=false;
let intervalId;
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      const playerMove= computerMoveAuto();
      playGame(playerMove);},1000);
    isAutoPlay=true;
    document.querySelector('.smaller').innerHTML='Stop Playing';
  }
  else {
    clearInterval(intervalId);
    isAutoPlay=false;
    document.querySelector('.smaller').innerHTML='Auto Play';
  }
}
function computerMoveAuto() {
  let Move=Math.random();
  let computerMove='';
  if (0<Move && 1/3>=Move)
    computerMove='✊';
  else if (1/3<Move && 2/3>=Move)
    computerMove='✌️';
  else if (2/3<Move && 1>Move)
    computerMove='🖐️';
  return computerMove;
}
updateScore();
function playGame(yourMove) {
  let computerMove=computerMoveAuto();
  let result=' ';
  if (yourMove==='✊') {
    if (computerMove==='✊') result='even.';
    if (computerMove==='✌️') result='you win.';
    if (computerMove==='🖐️') result='you lose.';
  }
  if (yourMove==='✌️') {
    if (computerMove==='✊') result='you lose.';
    if (computerMove==='✌️') result='even.';
    if (computerMove==='🖐️') result='you win.';
  }
  if (yourMove==='🖐️') {
    if (computerMove==='✊') result='you win.';
    if (computerMove==='✌️') result='you lose.';
    if (computerMove==='🖐️') result='even.';
  }
  if (result==='you win.') score.wins++;
  if (result==='you lose.') score.loses++;
  if (result==='even.') score.ties++;
  localStorage.setItem('score',JSON.stringify(score));
  updateScore();
  document.querySelector('.result').innerHTML=result;
  document.querySelector('.Move').innerHTML=`you ${yourMove}  ${computerMove}computer`;
}
function updateScore() {
  document.querySelector('.score').innerHTML=`wins: ${score.wins} , loses: ${score.loses} , ties: ${score.ties}`;
}
function resetScore() {
  score.wins=0;
  score.loses=0;
  score.ties=0;
  localStorage.removeItem('score');
  updateScore();
  document.querySelector('.Move').innerHTML='';
  document.querySelector('.result').innerHTML='';
}

document.querySelector('.js-rock-btn').addEventListener('click', () => {
  playGame('✊');});

document.querySelector('.js-paper-btn').addEventListener('click', () => {
  playGame('🖐️');});

document.querySelector('.js-scissors-btn').addEventListener('click', () => {
  playGame('✌️');});

document.querySelector('.smaller0').addEventListener('click', () => {
  let html = `<p> Are you sure you want to reset the score ? <div> <button class="yes">Yes</button>
  <button class="no">No</button> </div> </p>`;
  document.querySelector('.resetText').innerHTML=html;
  document.querySelector('.yes').addEventListener('click',() => {
    resetScore();
    document.querySelector('.resetText').innerHTML='';
  })
  document.querySelector('.no').addEventListener('click',() => {
    document.querySelector('.resetText').innerHTML='';
  })
});


document.querySelector('.smaller').addEventListener('click', () => {autoPlay();});


  document.body.addEventListener('keydown',event => {
    if (event.key==='r') playGame('✊');
    else if (event.key==='p') playGame('🖐️');
    else if (event.key==='s') playGame('✌️');
    else if (event.key==='a') autoPlay();
    else if (event.key==='Backspace') {
      resetScore();
    }
  });