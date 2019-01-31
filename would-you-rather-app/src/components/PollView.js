import React, { Component } from 'react'

class PollView extends Component {

  render() {
    const imgUrl = "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png"
    return (
      <div className="question">
        <div className="question-info">
          <img src={imgUrl} alt="Your face here"/>
          <h4>"Matt Coleman"</h4>
        </div>
        <div className="question-info">
          <h2>Would you rather?</h2>
          <form action="#">
            <input type="radio" name="poll-option" value="Something"/>
            <input type="radio" name="poll-option" value="Something else"/>
          </form>
          <button><a href="#">Submit</a></button>
        </div>
      </div>
    )
  }
}

export default PollView
