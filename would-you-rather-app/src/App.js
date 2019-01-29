import React, { Component } from 'react';

class App extends Component {
  render() {
    const imgUrl = "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png"
    return (
      <div>
        <div>
          <ul className="nav">
            <li id="brand">WYR?</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Question</a></li>
            <li><a href="#">Leader Board</a></li>
            <li id="logout"><a href="#">Logout</a></li>
            <li id="hello">Hello, user!</li>
          </ul>
        </div>
        <div className="container">
          <div className="filter-btn">
            <button>Unanswered Questions</button>
            <button>Answered Questions</button>
          </div>
          <div className="panel">
            <ul className="question-list">
              <li>
                <div className="question">
                  <span id="panel-left"><img src={imgUrl} alt="Your face here"/></span>
                  <span id="panel-right"><p>Would you rather...</p></span>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
              <li>
                <div className="question">
                  <img src={imgUrl} alt="Your face here"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
