document.addEventListener("DOMContentLoaded", function () {
  var myForm = document.getElementById("myForm");
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    generateAngryText();
  });
});

var myForm = document.querySelector("form");
const URL = "http://310a-104-155-223-75.ngrok.io/";

function generateAngryText() {
  var question = document.getElementById("question").value;
  fetch(URL, {
    method: "GET",
    mode: "no-cors",
  }).then(function (response) {
    var response = response.text();
    document.getElementById("response").innerHTML = response;
  });
}
