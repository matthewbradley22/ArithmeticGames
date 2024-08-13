let question = document.getElementById('Question');
let answer = document.getElementById('answer');
const skip = document.getElementById("SkipButton");
const submit = document.getElementById("SubmitButton");
const start = document.getElementById("StartButton")

let numList = [1,1];
question.innerHTML =  "1 + 1";

let totRight = document.getElementById("score")
let counter = 0
totRight.innerHTML = `Score: ${counter}`


function makeNumbers(){
  const options = [10, 100, 1000];
  const multiplier1 = Math.floor(Math.random() * options.length);
  const multiplier2 = Math.floor(Math.random() * options.length);
  const num1 = Math.floor(Math.random() * options[multiplier1]);
  const num2 = Math.floor(Math.random() * options[multiplier2]);
  const numArray = [num1, num2]
  numList = numArray
  return numArray
}

skip.onclick = function(){
  const nums = makeNumbers()
  question.innerHTML =  `${nums[0]} + ${nums[1]}`;
  answer.value = ""
}

submit.onclick = function(){
  if(answer.value == numList[0] + numList[1]){
    const nums = makeNumbers()
    question.innerHTML =  `${nums[0]} + ${nums[1]}`;
    answer.value = ""
    counter = counter + 1
    totRight.innerHTML = `Score: ${counter}`
  }
}

start.onclick = function(){
  let min = 2;
  let sec = 0;
  setInterval(function(){
    let time = document.getElementById("time")
    time.innerHTML = `${min}:${sec}`
    if(min == 0 && sec == 0){
      time.innerHTML = `Game over`
    }
    else if(sec == 0){
      min--
      sec = 59
    }
    else{
      sec--
    }
  }, 1000)

}