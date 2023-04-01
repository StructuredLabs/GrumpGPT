function generateAngryText() {
  var question = document.getElementById("question").value;
  axios
    .post("http://127.0.0.1:5000/generate", { question: question })
    .then(function (response) {
      var responseText = response.data.text;
      document.getElementById("response").innerHTML = responseText;
    });
}
