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
const URL = "http://17bf-104-155-223-75.ngrok.io";

function generateAngryText() {
  var question = document.getElementById("question").value;
  fetch(URL, {
    method: "GET",
    mode: "no-cors",
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      document.getElementById("response").innerHTML = "hello!!!!";
      var audioSrc =
        "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
        encodeURIComponent("hellooo fool") +
        "&tl=en&client=tw-ob";
      var audio = new Audio(audioSrc);
      audio.play();
    });
}
