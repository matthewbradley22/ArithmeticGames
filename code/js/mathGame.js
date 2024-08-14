let question = document.getElementById('Question');
let answer = document.getElementById('answer');
const skip = document.getElementById("SkipButton");
const start = document.getElementById("StartButton")
var radios = document.getElementsByName('math');

//This is from the script js file that takes the radio buttons as input
const gameType = (sessionStorage.getItem("mathChoice"));
const minVal = (sessionStorage.getItem("minVal"));
const maxVal = (sessionStorage.getItem("maxVal"));

document.getElementById("min").innerHTML = `Minimum: ${minVal}`;
document.getElementById("max").innerHTML = `Maximum: ${maxVal}`;

let numList = [1, 1];
switch (gameType) {
  case 'addition':
    question.innerHTML = "1 + 1";
    break
  case 'subtraction':
    question.innerHTML = "1 - 1";
    break
  case 'multiplication':
    question.innerHTML = "1 * 1";
    break
  case 'division':
    question.innerHTML = "1/1";
    break
}


let totRight = document.getElementById("score")

let counter = 0
totRight.innerHTML = `Score: ${counter}`

answer.onkeyup = function () {
  switch (gameType) {
    case 'addition':
      if (answer.value == numList[0] + numList[1]) {
        const nums = makeNumbers()
        question.innerHTML = `${nums[0]} + ${nums[1]}`;
        answer.value = ""
        counter++
        totRight.innerHTML = `Score: ${counter}`
        break
      }
    case 'subtraction':
      if (answer.value == numList[0] - numList[1]) {
        const nums = makeNumbers()
        question.innerHTML = `${nums[0]} - ${nums[1]}`;
        answer.value = ""
        counter++
        totRight.innerHTML = `Score: ${counter}`
        break

      }
    case 'multiplication':
      if (answer.value == numList[0] * numList[1]) {
        const nums = makeNumbers()
        question.innerHTML = `${nums[0]} * ${nums[1]}`;
        answer.value = ""
        counter++
        totRight.innerHTML = `Score: ${counter}`
        break

      }
    case 'division':
      if (answer.value == numList[0] / numList[1]) {
        const nums = makeNumbersDivision()
        question.innerHTML = `${nums[0]} / ${nums[1]}`;
        answer.value = ""
        counter++
        totRight.innerHTML = `Score: ${counter}`
        break

      }
  }
}

function makeNumbers() {
  const options = [10, 100, 1000];
  const multiplier1 = Math.floor(Math.random() * options.length);
  const multiplier2 = Math.floor(Math.random() * options.length);
  const num1 = Math.floor(Math.random() * options[multiplier1]);
  const num2 = Math.floor(Math.random() * options[multiplier2]);
  const numArray = [num1, num2]
  numList = numArray
  return numArray
}

function multiplesOf(factor, max) {
  highest = Math.floor(max / factor);
  allFactors = Array(highest).fill(1);
  allFactors = Array(highest).fill().map((element, index) => index + 1);
  return allFactors
}
function makeNumbersDivision() {
  const options = [10, 100]
  const multiplier1 = Math.floor(Math.random() * options.length);
  const divisor = Math.floor(Math.random() * options[multiplier1]);
  const multipliers = multiplesOf(divisor, 999)
  const randomMultiplier = multipliers[Math.floor(Math.random() * multipliers.length)];
  const numerator = divisor * randomMultiplier
  numList = [numerator, divisor]
  return numList
}

skip.onclick = function () {
  let nums = makeNumbers()
  switch (gameType) {
    case 'addition':
      question.innerHTML = `${nums[0]} + ${nums[1]}`;
      break
    case 'subtraction':
      question.innerHTML = `${nums[0]} - ${nums[1]}`;
      break
    case 'multiplication':
      question.innerHTML = `${nums[0]} * ${nums[1]}`;
      break
    case 'division':
      let numDivs = makeNumbersDivision()
      question.innerHTML = `${numDivs[0]} / ${numDivs[1]}`;
      break
  }
  counter--
  totRight.innerHTML = `Score: ${counter}`
  answer.value = ""
}

start.onclick = function () {
  let min = 2;
  let sec = 0;
  setInterval(function () {
    let time = document.getElementById("time")
    if (sec > 9) {
      time.innerHTML = `${min}:${sec}`
    } else if (sec > 0) {
      time.innerHTML = `${min}:0${sec}`
    } else {
      time.innerHTML = `${min}:${sec}0`
    }
    if (min == 0 && sec == 0) {
      time.innerHTML = `Game over`
    }
    else if (sec == 0) {
      min--
      sec = 59
    }
    else {
      sec--
    }
  }, 1000)

}