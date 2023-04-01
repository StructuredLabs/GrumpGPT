document.addEventListener("DOMContentLoaded", function () {
  var myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    generateAngryText();
  });

  document.getElementById("question").value = "";
  document.getElementById("response").innerHTML = "";

  document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("question").value = "";
    document.getElementById("response").innerHTML = "";
  });
});

var myForm = document.querySelector("form");
// TODO: change this everytime we start up the colab notebook
const URL = "https://ssinghal.pythonanywhere.com";

function generateAngryText() {
  var question = document.getElementById("question").value;
  fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: question
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      document.getElementById("response").innerHTML = text;
      var audioSrc =
        "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
        encodeURIComponent(text) +
        "&tl=en&client=tw-ob";
      var audio = new Audio(audioSrc);
      audio.play();
    });
}
