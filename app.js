let userScore = 0;
let pcScore = 0;
const userScore_span = document.getElementById('user-score');
const pcScore_span = document.getElementById('pc-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');


function getPcChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber =(Math.floor(Math.random() * 3));
  return (choices[randomNumber]);
}


function convert(alphabet){
  if (alphabet === "r") return "Rock";
  if (alphabet === "p") return "Paper";
  if (alphabet === "s") return "Scissors";
}

function win(user, pc){
  userScore++;
  userScore_span.innerHTML = userScore;
  pcScore_span.innerHTML = pcScore;
  result_div.innerHTML = convert(user) + " beats " + convert(pc) + ", You Win!";
  document.getElementById(user).classList.add('green-glow');
  setTimeout(() =>  document.getElementById(user).classList.remove('green-glow'), 500);
}

function lose(user, pc){
  pcScore++;
  userScore_span.innerHTML = userScore;
  pcScore_span.innerHTML = pcScore;
  result_div.innerHTML = convert(user) + " loses to " + convert(pc) + ", You Lose!";
  document.getElementById(user).classList.add('red-glow');
  setTimeout(() =>  document.getElementById(user).classList.remove('red-glow'), 500);
}

function draw(user, pc){
  result_div.innerHTML = convert(user) + " equals " + convert(pc) + ",  It's a Tie!";
  document.getElementById(user).classList.add('grey-glow');
  setTimeout(() =>  document.getElementById(user).classList.remove('grey-glow'), 500);
}




function game(userChoice) {
  const pcChoice = getPcChoice();
  switch (userChoice + pcChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, pcChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, pcChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, pcChoice);
      break;

  }
}


function main() {

  rock_div.addEventListener('click', () =>   game("r"));

  paper_div.addEventListener('click', () =>  game("p"));

  scissor_div.addEventListener('click', () => game("s"));

}


main();
