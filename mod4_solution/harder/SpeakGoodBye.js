// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function(window){
var speakWord = "Good Bye";
var byeSpeaker = new Object();
byeSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.byeSpeaker = byeSpeaker.speak
})(window);
