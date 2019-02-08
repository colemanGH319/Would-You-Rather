import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class PollView extends Component {
  constructor(props){
    super(props)

    this.state = {
      value: ''
    }

    this.image = {
      URL: "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png"
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleInputChange = (e) => {
    e.preventDefault()
  }

  render() {

    const { user, poll } = this.props
    return (
      <div className="poll-container">
        <div className="question-info">
          <img src={this.image.URL} alt="Your face here"/>
          <h4>{user}</h4>
        </div>
        <div className="question-info">
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
            <button id="poll-button" onClick={this.handleSubmit}>
              <NavLink to={`/results/${poll.id}`}>Submit</NavLink>
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params
  const question = questions[id]
  return {
    id,
    user: question.author,
    poll: question,
  }
}

export default connect(mapStateToProps)(PollView)
