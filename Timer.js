class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.paused);
    this.timer;
  }

  start = () => {
    if (this.onStart) {
      this.onStart(this.getTime);
    }
    this.tick();
    this.timer = setInterval(() => {
      this.tick();
    }, 50);
    console.log(this.timer);
  };
  paused = () => {
    clearInterval(this.timer);
    console.log("stop");
  };
  tick = () => {
    if (this.getTime <= 0) {
      this.paused();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.getTime = this.getTime - 0.05;
      if (this.onTick) {
        this.onTick(this.getTime);
      }
    }
  };

  get getTime() {
    return  parseFloat(this.durationInput.value);
  }

  set getTime(time) {
    console.log("a",time);
    this.durationInput.value = time.toFixed(2);
  }
}
