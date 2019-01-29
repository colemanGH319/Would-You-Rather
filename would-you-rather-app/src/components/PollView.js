import React, { Component } from 'react'

class PollView extends Component {

  render() {
    return (
      <div className="question">
        <div className="question-info">
          <img src={imgUrl} alt="Your face here"/>
          <h4>{this.props.user}</h4>
        </div>
        <div className="question-info">
          <h2>Would you rather?</h2>
          <form action="#">
            <input type="radio" name="poll-option" value={this.props.options[0]}/>
            <input type="radio" name="poll-option" value={this.props.options[1]}/>
          </form>
          <button><a href="#">Submit</a></button>
        </div>
      </div>
    )
  }
}

export default PollView
