const submit = document.getElementById("submit");

submit.onclick = function(){
    let radioChoice = document.querySelector('input[name="math"]:checked').value;
    console.log(radioChoice);
  }