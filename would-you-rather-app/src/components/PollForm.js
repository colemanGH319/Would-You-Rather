import React, { Component } from 'react'

class PollForm extends Component {

  state = {
    value: ''
  }

  render() {
    const { poll } = this.props
    return (
      <div>
        <h2>Would you rather?</h2>
        <form action="#">
          <label>
            <input type="radio"
                  name="poll-option"
                  value="optionOne"
                  onChange={this.handleInputChange}/> {poll.optionOne.text}
          </label><br/>
          <label>
            <input type="radio"
                  name="poll-option"
                  value="optionTwo"
                  onChange={this.handleInputChange}/> {poll.optionTwo.text}
          </label>
          <input type="submit" id="poll-button" value="Submit" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default PollForm
