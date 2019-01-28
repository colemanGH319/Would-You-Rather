import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ul class="nav">
            <li id="brand">WYR?</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Question</a></li>
            <li><a href="#">Leader Board</a></li>
            <li id="logout"><a href="#">Logout</a></li>
          </ul>
        </div>
        <div class="container">
          <div class="filter-btn">
            <button>Unanswered Questions</button>
            <button>Answered Questions</button>
          </div>
          <div class="panel">
            <ul class="questions">
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
