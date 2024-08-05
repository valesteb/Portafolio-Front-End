import 

document.querySelector('.forgot-password').addEventListener('click', function(event) {
    event.preventDefault();
    // Add logic to reset password here
    console.log('Forgot password link clicked!');
});
    
    
    document.getElementById('index').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('catalog').addEventListener('click', function() {
    window.location.href = 'catalog.html';
});

document.getElementById('contact').addEventListener('click', function() {
    window.location.href = 'contact.html';
});


// voice control 
const voiceOptions = document.querySelector(".voice");
const startButton = document.querySelector(".start");
const cancelButton = document.querySelector(".cancel");
const pitchInput = document.querySelector(".pitch");
const rateInput = document.querySelector(".rate");
const volumeInput = document.querySelector(".volume");

SpeechSynthesis.addEventListener("voiceschanged", () => {
  const voices = SpeechSynthesis.getVoices();
  const options = voices.map((voice, index) => {
    return `<option value"${index}">${voice.name}</option>`;
  });
  voice.Options.innerHTML = options.join("");
});

startButton.addEventListener("click", () => {
  const text = document.querySelector(".text").value;
  const message = new SpeechSynthesisUtterance(text);
  const index = voiceOptions.selectedIndex;
  message.voice = speechSynthesis.getVoices()[index];
  message.pitch = pitchInput.value;
  message.rate = rateInput.value;
  message.volume = volumeInput.value;
  SpeechSynthesis.speak(message);
});
