import React, { Component } from 'react';
import Nav from './components/Nav'
import QuestionList from './components/QuestionList'
import PollView from './components/PollView'
import Login from './components/Login'
import NewQuestion from './components/NewQuestion'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
      <div>
          {this.props.loading === true
            ? (<div className="loading-page"><h2>Loading...</h2></div>)
            : (<div>
                <Nav />
                <Route path='/' exact component={QuestionList} />
                <Route path='/poll/:id' component={PollView} />
                <Route path='/login' exact component={Login}/>
                <Route path='/new' exact component={NewQuestion} />
              </div>)}
      </div>
      </Router>
    )}
}

function mapStateToProps({ users, questions }) {
  return {
    loading: (Object.values(users).length === 0 || Object.values(questions).length === 0),
  }
}

export default connect(mapStateToProps)(App);
