let durationInput = document.querySelector("#durationInput");
let startButton = document.querySelector("#startButton");
let pausedButton = document.querySelector("#pausedButton");
let circle = document.querySelector("circle");
let premeter = circle.getAttribute("r") * 2 * Math.PI ;
circle.setAttribute("stroke-dasharray", premeter);
let duration = 0 ;
new Timer(durationInput, startButton, pausedButton, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute("stroke-dashoffset", 
    premeter * timeRemaining / duration - premeter);
  },
  onComplete() {
    console.log("on complete");
  },
});
