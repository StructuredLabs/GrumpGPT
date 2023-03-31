let recognizer;

async function record() {
  recognizer = new webkitSpeechRecognition();
  recognizer.interimResults = true;
  recognizer.continuous = true;
  recognizer.onresult = function (event) {
    let interim_transcript = "";
    let final_transcript = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
      }
    }
    document.getElementById("text-area").innerHTML = final_transcript;
  };
  recognizer.start();
}

document.getElementById("record-button").addEventListener("click", function () {
  record();
});
