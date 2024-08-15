let question = document.getElementById('Question');
let answer = document.getElementById('answer');
const skip = document.getElementById("SkipButton");
var radios = document.getElementsByName('math');
let finalOutput = document.getElementById("congrats")

//This is from the script js file that takes the radio buttons as input
const gameType = (sessionStorage.getItem("mathChoice"));
const minVal = Number((sessionStorage.getItem("minVal")));
const maxVal = Number((sessionStorage.getItem("maxVal")));

document.getElementById("min").innerHTML = `Minimum: ${minVal}`;
document.getElementById("max").innerHTML = `Maximum: ${maxVal}`;

let numList = [1, 1];
switch (gameType) {
  case 'addition': {
    const nums = makeNumbers()
    question.innerHTML = `${nums[0]} + ${nums[1]}`;
    break
  }
  case 'subtraction': {
    const nums = makeNumbers()
    question.innerHTML = `${nums[0]} - ${nums[1]}`;
    break
  }
  case 'multiplication': {
    const nums = makeNumbers()
    question.innerHTML = `${nums[0]} * ${nums[1]}`;
    break
  }
  case 'division': {
    const nums = makeNumbersDivision()
    question.innerHTML = `${nums[0]} / ${nums[1]}`;
    break
  }
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
  const num1 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
  const num2 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
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
  //Max val/2 to prevent a lot of high numbers over themselves
  const divisor = Math.floor(Math.random() * (Math.floor(maxVal / 2) - minVal + 1)) + minVal;
  const multipliers = multiplesOf(divisor, maxVal)
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

window.onload = function () {
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
      answer.disabled = true
      skip.disabled = true
      finalOutput.innerHTML = `Good Job, you scored ${totRight.innerHTML} points`
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