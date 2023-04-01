function generateAngryText() {
  console.log("gets here");
  var question = document.getElementById("question").value;
  console.log(question);
  // axios.post("http://127.0.0.1:5000/generate", { question: question })
  fetch("http://44a3-130-211-255-221.ngrok.io").then(function (response) {
    // var audioUrl = response.data.audio_url;
    // var audio = new Audio(audioUrl);
    // audio.play();
    var response = response.data.text;
    document.getElementById("response").innerHTML = response;
    console.log(response);
  });
}
