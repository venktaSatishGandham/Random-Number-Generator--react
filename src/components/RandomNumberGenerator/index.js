// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    num: 0,
  }

  onClickGenerateButton = () => {
    const updatedNum = Math.ceil(Math.random() * 100)

    this.setState({
      num: updatedNum,
    })
  }

  render() {
    const {num} = this.state

    return (
      <div className="bg-container">
        <div className="bg-shadow">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.onClickGenerateButton}
          >
            Generate
          </button>
          <p>{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
