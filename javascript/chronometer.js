
class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here

    // callback ?
    this.intervalId = setInterval(
        () => {
          console.log(this.currentTime)
          this.currentTime += 1
          callback?.()
          //callback && callback()          
        }, 1000
      )
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime/60) 
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    return value < 10 ?
      `0${value}`
      : `${value}`
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

/* export default Chronometer */

