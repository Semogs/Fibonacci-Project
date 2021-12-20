const userNum = document.getElementById("user-input");
const btn = document.getElementById("btn");

btn.addEventListener("click", function calcFib(userNum) {
  if (userNum <= 1) return userNum;
  return calcFib(userNum - 1) + calcFib(userNum - 2);
});
let result = calcFib(userNum);
document.getElementById("answer").innerHTML = result;
document.getElementById("user-input").innerHTML = userNum.value;
