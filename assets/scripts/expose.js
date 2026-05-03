// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const dropdown = document.getElementById("horn-select");
  const displayImage = document.querySelector("header + img")
  const sound = document.querySelector("audio");
  const button = document.querySelector("button");

  dropdown.addEventListener('change', function() {
    if(dropdown.value == "air-horn"){
      displayImage.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    }else if(dropdown.value == "car-horn"){
      displayImage.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    }else if(dropdown.value == "party-horn"){
      displayImage.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
    }else{
      displayImage.src = "assets/images/no-image.png";
    }
  });
  button.addEventListener('click', function(){
    sound.play();
  });
}