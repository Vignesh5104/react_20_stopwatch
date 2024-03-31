// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isWatchRunning: false,
    timeElapsedInSeconds: 0,
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isWatchRunning: false})
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isWatchRunning: false, timeElapsedInSeconds: 0})
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.updateTime, 1000)
    this.setState({isWatchRunning: true})
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isWatchRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bgcon">
        <div className="card">
          <h1 className="head">Stopwatch</h1>
          <div className="timer-con">
            <div className="img-con">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-head">Timer</p>
            </div>
            <h1 className="timer">{time}</h1>
            <div className="btn-con">
              <button
                onClick={this.onStartTimer}
                disabled={isWatchRunning}
                className="btn start-btn"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.onStopTimer}
                className="btn stop-btn"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.onResetTimer}
                className="btn reset-btn"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
