const rockBtn = document.getElementById('img-div1');
const scissorsBtn = document.getElementById('img-div2');
const paperBtn = document.getElementById('img-div3');
const userResult = document.getElementById('user-result');
const computerResult = document.getElementById('computer-result');
const closeBtn = document.getElementById('close-btn');
const ruleBtn = document.getElementById('rules-btn');
const miniSection = document.getElementById("mini_section");
const result_main = document.querySelector(".result-main");
const you_picked = document.querySelector(".you_picked");
const pc_picked = document.querySelector(".pc_picked");
const playAgainBtn = document.getElementById('play_again');
const game_section = document.getElementById('game_section');
const imgDiv = document.querySelectorAll('.img-div');
const section_result = document.getElementById('section_result');
const result_text = document.getElementById('result_text');
const result_header = document.getElementById('result_header');
const next_btn = document.querySelector(".next_btn");
window.onload = function () {
  domUserScore();
  domPcScore();
};
const choices = {
  rock: 1,
  scissors: 2,
  paper: 3,
};

const winningCombinations = {
  1: 2, // Rock beats Scissors
  2: 3, // Paper beats Rock
  3: 1, // Scissors beats Paper
};

const result_1 = document.getElementById('result_1');
const result_2 = document.getElementById('result_2');

const handleChoice = (userChoice) => {

  const pcChoice = play();
  let userScore = getUserScore();
  let pcScore = getPcScore();
  // console.log(userChoice);
  // console.log(pcChoice);
  section_result.style.visibility = "visible";
  if (userChoice === pcChoice) {
    console.log(`Clicked ${userResult}, no change`);
    result_1.innerText = "TIE UP";
    result_2.innerText = "";
    const selectedButton = document.getElementById(`img-div${userChoice}`);
    // console.log(selectedButton);
    //console.log(selectedImage);
    you_picked.innerHTML = `<div class="ideal">${selectedButton.outerHTML}</div>`;
    const selectedButton2 = document.getElementById(`img-div${pcChoice}`);
    //  console.log(`img-div${pcChoice}`);
    pc_picked.innerHTML = `<div class="ideal"> ${selectedButton2.outerHTML}</div>`;

  } else if (winningCombinations[userChoice] === pcChoice) {
    const selectedButton = document.getElementById(`img-div${userChoice}`);
    you_picked.innerHTML = ` <div class="circle1">
                              <div class="circle2">
                              <div class="circle3">
                                   ${selectedButton.outerHTML}
                              </div></div></div>`;
    const selectedButton2 = document.getElementById(`img-div${pcChoice}`);
    pc_picked.innerHTML = `<div class="ideal"> ${selectedButton2.outerHTML}</div>`
    next_btn.style.visibility = "visible";
    ruleBtn.style.right = "200px";
    //console.log(selectedButton);
    //console.log(selectedImage);
    result_1.innerText = "YOU WIN";
    result_2.innerText = "AGAINST PC"
    console.log(`Clicked ${userScore}, score for user`);
    userScore++;
    console.log(userScore);
  } else {
    const selectedButton = document.getElementById(`img-div${userChoice}`);
    you_picked.innerHTML = `<div class="ideal"> ${selectedButton.outerHTML}</div>`
    const selectedButton2 = document.getElementById(`img-div${pcChoice}`);
    pc_picked.innerHTML = ` <div class="circle1">
                              <div class="circle2">
                              <div class="circle3">
                                   ${selectedButton2.outerHTML}
                              </div></div></div>`;
    result_1.innerText = "YOU LOST";
    result_2.innerText = "AGAINST PC"
    console.log(`Clicked ${pcScore}, score for system`);
    pcScore++;

    console.log(pcScore);
  }

  setPcScore(pcScore);
  setUserScore(userScore);
  //console.log(setUserScore(userResult));
  win();
  game_section.classList.add('hidden');
  section_result.classList.remove('hidden');

};


rockBtn.addEventListener("click",() => handleChoice(choices.rock));
scissorsBtn.addEventListener("click",() => handleChoice(choices.scissors));
paperBtn.addEventListener("click",() => handleChoice(choices.paper));


function getUserScore() {
  return parseInt(localStorage.getItem("user-result",userScore)) || 0;
}

function getPcScore() {
  return parseInt(localStorage.getItem("computer-result",pcScore)) || 0;
}

function win(result) {
  var userResult = getUserScore();
  var computerResult = getPcScore();
  if (result === "user") {
    userScore();
  } else if (result === "computer") {
    pcScore()
  }
  domUserScore();
  domPcScore();
}

function setUserScore(result) {
  result = Math.max(0,result);
  localStorage.setItem("user-result",result);
  domUserScore();
}

function setPcScore(result) {
  result = Math.max(0,result);
  localStorage.setItem("computer-result",result);
  domPcScore();
}

function domUserScore() {
  document.getElementById("user-result").textContent = getUserScore();
}

function domPcScore() {
  document.getElementById("computer-result").textContent = getPcScore();
}

function randInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function play() {
  var a = randInt(1,3);
  return a;
}

ruleBtn.addEventListener('click',() => {
  miniSection.style.display = "block";
});
closeBtn.addEventListener('click',() => {
  miniSection.style.display = "none";
})
function userScore() {
  let userScore = getUserScore();
  userScore++;
  userResult.innerText = userScore;
}
function pcScore() {
  let pcScore = getPcScore();
  pcScore++;
  computerResult.innerText = pcScore;
}

playAgainBtn.addEventListener("click",() => {
  section_result.classList.add('hidden');
  game_section.classList.remove('hidden');
  next_btn.style.visibility = "hidden";
  ruleBtn.style.right = "80px";
  // Reset results
  result_1.innerText = '';
  result_2.innerText = '';
  you_picked.innerHTML = '';
  pc_picked.innerHTML = '';
});