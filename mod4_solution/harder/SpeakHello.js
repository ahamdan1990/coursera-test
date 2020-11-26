(function(window){
var speakWord = "Hello";
var helloSpeaker = new Object();
helloSpeaker.speak = function(name) {
  console.log(speakWord + " " + name);
}
window.helloSpeaker = helloSpeaker.speak
})(window);
