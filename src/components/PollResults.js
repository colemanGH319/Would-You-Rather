import React, { Component } from 'react'

class PollResults extends Component {

  userSelectedOptionOne = () => {
    return this.props.poll.optionOne.votes.includes(this.props.authedUser.id)
  }

  userSelectedOptionTwo = () => {
    return this.props.poll.optionTwo.votes.includes(this.props.authedUser.id)
  }

  render() {
    const { poll } = this.props
    const resultOne = poll.optionOne.votes.length
    const resultTwo = poll.optionTwo.votes.length
    const optionOneSelected = this.userSelectedOptionOne()
                                ? ' (your selection)'
                                : ''
    const optionTwoSelected = this.userSelectedOptionTwo()
                                ? ' (your selection)'
                                : ''
    return (
      <div>
        <h2>Results</h2>
        <p>{poll.optionOne.text + ': '
            + ((resultOne / (resultOne + resultTwo)) * 100)
            .toFixed(2) + '%'
            + ` - ${resultOne} answer(s)` + optionOneSelected}</p>
        <p>{poll.optionTwo.text + ': '
            + ((resultTwo / (resultOne + resultTwo)) * 100)
            .toFixed(2) + '%'
            + ` - ${resultTwo} answer(s)` + optionTwoSelected}</p>
      </div>
    )
  }
}

export default PollResults
