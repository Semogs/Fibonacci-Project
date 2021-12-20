const userNum = document.getElementById("user-input");
const btn = document.getElementById("btn");
const errorText = document.getElementById("error-text");
const answer = document.getElementById("answer");
const lifeText = document.getElementById("42-text");
const resultsText = document.getElementById("results-info");
const resultsSpinner = document.getElementById("results-spinner");
const list = document.getElementById("results-list");
const saveBtn = document.getElementById("save-btn");
const dropdownBtn = document.getElementById("dropdownMenuButton1");
const li1 = document.getElementById("d-li1");
const li2 = document.getElementById("d-li2");
const li3 = document.getElementById("d-li3");
const li4 = document.getElementById("d-li4");

fetch("http://localhost:5050/getFibonacciResults")
  .then(function (response) {
    resultsSpinner.innerHTML = "";
    return response.json();
  })
  .then(function (data) {
    let resultsArray = data.results;
    list.innerHTML = `<ul id="results-list"></ul>`;
    resultsArray.forEach(function (sentence) {
      var li = document.createElement("li");
      let number = sentence.number;
      let result = sentence.result;
      let createdDate = sentence.createdDate;
      let date = new Date(createdDate);
      sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
      li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
      list.appendChild(li);
    });
  });

btn.addEventListener("click", function calcFib() {
  userNum.setAttribute(
    "class",
    "form-control-sm mx-2 fw-normal fs-5 d-flex border"
  );
  if (saveBtn.checked) {
    errorText.innerHTML = "";
    lifeText.innerHTML = "";
    answer.innerHTML = "";
    if (userNum.value > 50) {
      userNum.setAttribute(
        "class",
        "form-control-sm mx-2 fw-normal fs-5 d-flex border border-danger text-danger"
      );
      errorText.innerHTML = `<span class="alert-danger fw-normal fs-6 p-1 rounded d-flex ms-2" id="error-text">Can't be larger than 50</span>`;
    } else if (userNum.value == 42) {
      answer.innerHTML = `<div class="spinner-border d-inline-block" role="status"></div>`;
      fetch(`http://localhost:5050/fibonacci/${userNum.value}`)
        .then(function (response) {
          if (!response.ok) {
            return response.text();
          }
        })
        .then(function (data) {
          answer.setAttribute("class", "col fw-normal fs-5 mt-1 ms-3");
          answer.innerHTML = `<span class="text-danger col fw-normal fs-6 mt-1 ms-3" id="answer">Server Error: ${data}</span>`;
        });
    } else {
      answer.innerHTML = `<div class="spinner-border d-inline-block" role="status"></div>`;
      fetch(`http://localhost:5050/fibonacci/${userNum.value}`)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          let result = data;
          answer.setAttribute(
            "class",
            "col fw-bold fs-5 mt-1 ms-3 text-decoration-underline"
          );
          answer.innerHTML = result.result;
          userNum.innerHTML = userNum.value;
        });
      resultsSpinner.innerHTML = `<div class="spinner-border d-inline-block" role="status"></div>`;
      fetch("http://localhost:5050/getFibonacciResults")
        .then(function (response) {
          resultsSpinner.innerHTML = "";
          return response.json();
        })
        .then(function (data) {
          let resultsArray = data.results;
          list.innerHTML = `<ul id="results-list"></ul>`;
          resultsArray.forEach(function (sentence) {
            var li = document.createElement("li");
            let number = sentence.number;
            let result = sentence.result;
            let createdDate = sentence.createdDate;
            let date = new Date(createdDate);
            sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
            li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
            list.appendChild(li);
          });
        });
    }
  } else {
    userNum.setAttribute(
      "class",
      "form-control-sm mx-2 fw-normal fs-5 d-flex border"
    );
    errorText.innerHTML = "";
    answer.innerHTML = "";
    if (userNum.value > 50) {
      userNum.setAttribute(
        "class",
        "form-control-sm mx-2 fw-normal fs-5 d-flex border border-danger text-danger"
      );
      errorText.innerHTML = `<span class="alert-danger fw-normal fs-6 p-1 rounded d-flex ms-2" id="error-text">Can't be larger than 50</span>`;
    } else {
      let fibArray = [0, 1];
      if (userNum === 0) {
        answer.innerHTML = 0;
      } else if (userNum === 1) {
        answer.innerHTML = 1;
      } else {
        for (let i = 2; i <= userNum.value; i++) {
          fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
        }
      }
      let answer = fibArray.slice(-1);
      document.getElementById("answer").innerHTML = answer;
      document.getElementById("user-input").innerHTML = userNum.value;
    }
  }
});

li1.addEventListener("click", function () {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(function (response) {
      resultsSpinner.innerHTML = "";
      return response.json();
    })
    .then(function (data) {
      let resultsArray = data.results;
      resultsArray.sort(function (a, b) {
        return a.number - b.number;
      });
      list.innerHTML = `<ul id="results-list"></ul>`;
      resultsArray.forEach(function (sentence) {
        var li = document.createElement("li");
        let number = sentence.number;
        let result = sentence.result;
        let createdDate = sentence.createdDate;
        let date = new Date(createdDate);
        sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
        li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
        list.appendChild(li);
      });
    });
});
li2.addEventListener("click", function () {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(function (response) {
      resultsSpinner.innerHTML = "";
      return response.json();
    })
    .then(function (data) {
      let resultsArray = data.results;
      resultsArray.sort(function (a, b) {
        return b.number - a.number;
      });
      list.innerHTML = `<ul id="results-list"></ul>`;
      resultsArray.forEach(function (sentence) {
        var li = document.createElement("li");
        let number = sentence.number;
        let result = sentence.result;
        let createdDate = sentence.createdDate;
        let date = new Date(createdDate);
        sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
        li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
        list.appendChild(li);
      });
    });
});
li3.addEventListener("click", function () {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(function (response) {
      resultsSpinner.innerHTML = "";
      return response.json();
    })
    .then(function (data) {
      let resultsArray = data.results;
      resultsArray.sort(function (a, b) {
        return a.createdDate - b.createdDate;
      });
      list.innerHTML = `<ul id="results-list"></ul>`;
      resultsArray.forEach(function (sentence) {
        var li = document.createElement("li");
        let number = sentence.number;
        let result = sentence.result;
        let createdDate = sentence.createdDate;
        let date = new Date(createdDate);
        sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
        li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
        list.appendChild(li);
      });
    });
});
li4.addEventListener("click", function () {
  fetch("http://localhost:5050/getFibonacciResults")
    .then(function (response) {
      resultsSpinner.innerHTML = "";
      return response.json();
    })
    .then(function (data) {
      let resultsArray = data.results;
      resultsArray.sort(function (a, b) {
        return b.createdDate - a.createdDate;
      });
      list.innerHTML = `<ul id="results-list"></ul>`;
      resultsArray.forEach(function (sentence) {
        var li = document.createElement("li");
        let number = sentence.number;
        let result = sentence.result;
        let createdDate = sentence.createdDate;
        let date = new Date(createdDate);
        sentence = `The Fibonacci Of <strong>${number}</strong> is <strong>${result}</strong>. Calculated at: ${date}`;
        li.innerHTML = `<li class="fw-normal fs-5 lh-lg border-bottom border-dark border-1 d-inline-block pb-1">${sentence}</li>`;
        list.appendChild(li);
      });
    });
});
