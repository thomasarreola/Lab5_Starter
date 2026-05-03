// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  
  //get and make objects to modify and use
  const voiceSelect = document.getElementById("voice-select");
  const synth = window.speechSynthesis;
  const option = document.createElement("option");
  const button = document.querySelector("button");
  const text = document.querySelector("textarea");

  //get all of the voices available for the current device
  let voices = [];

  function populateVoiceList(){
    voices = synth.getVoices();

    //sets the voices to be the dropdown
    for(const voice of voices){
      const option = document.createElement("option");
      option.textContent =  `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();  
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  
  //plays the voices if the button is clicked
  button.addEventListener("click", function(){
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }
    //utterThis.pitch = pitch.value;
    //utterThis.rate = rate.value;
    synth.speak(utterThis);
  });
  
}
  




