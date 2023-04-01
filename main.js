document.addEventListener("DOMContentLoaded", function () {
  console.log("asdfasdf")
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
const URL = "http://0ad9-34-85-140-164.ngrok.io";

function generateAngryText() {
  var question = document.getElementById("question").value;
  console.log(question);
  fetch(URL, {
    method: "GET",
    // mode: "no-cors",
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (text) {
      console.log(text)
      document.getElementById("response").innerHTML = text;
      var audioSrc =
        "https://translate.google.com/translate_tts?ie=UTF-8&q=" +
        encodeURIComponent(text) +
        "&tl=en&client=tw-ob";
      var audio = new Audio(audioSrc);
      audio.play();
    });
}
