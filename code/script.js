const submit = document.getElementById("submit");
document.getElementById("min").defaultValue = "0";
document.getElementById("max").defaultValue = "1000";
document.getElementById("minutes").defaultValue = "2";

submit.onclick = function(){
    let radioChoice = document.querySelector('input[name="math"]:checked').value;
    sessionStorage.setItem("mathChoice",radioChoice);

    const min = document.getElementById("min").value;
    sessionStorage.setItem("minVal", min);

    const max = document.getElementById("max").value;
    sessionStorage.setItem("maxVal", max);

    let minuteCount = document.getElementById("minutes").value;
    sessionStorage.setItem("minuteCount", minuteCount);
  }

