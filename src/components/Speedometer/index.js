import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="speed-limits">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="button accelerate-button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button className="button break-button" onClick={this.onBrake}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
