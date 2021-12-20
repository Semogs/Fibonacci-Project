const userNum = document.getElementById("user-input");
const btn = document.getElementById("btn");

function calcFib() {
  let fibArray = [0, 1];
  if (userNum === 0) {
    document.getElementById("result").innerHTML = 0;
  } else if (userNum === 1) {
    document.getElementById("result").innerHTML = 1;
  } else {
    for (let i = 2; i <= userNum.value; i++) {
      fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    }
  }
  let result = fibArray.slice(-1);
  document.getElementById("result").innerHTML = result;
  document.getElementById("user-input").innerHTML = userNum.value;

  fetch(`http://localhost:5050/fibonacci/${userNum.value}`).then(function (
    response
  ) {
    return response.json();
  });
}
btn.addEventListener("click", calcFib);
