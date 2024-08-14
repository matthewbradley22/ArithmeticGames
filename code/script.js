const submit = document.getElementById("submit");

submit.onclick = function(){
    let radioChoice = document.querySelector('input[name="math"]:checked').value;
    localStorage.setItem("mathChoice",radioChoice);
  }