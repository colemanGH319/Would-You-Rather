import React, { Component } from 'react'

class PollResults extends Component {

  render() {
    const { poll } = this.props
    const resultOne = poll.optionOne.votes.length
    const resultTwo = poll.optionTwo.votes.length
    return (
      <div>
        <h2>Results</h2>
        <p>{poll.optionOne.text + ": " + (resultOne / (resultOne + resultTwo)) * 100 + '%'}</p>
        <p>{poll.optionTwo.text + ": " + (resultTwo / (resultOne + resultTwo)) * 100 + '%'}</p>
      </div>
    )
  }
}

export default PollResults
