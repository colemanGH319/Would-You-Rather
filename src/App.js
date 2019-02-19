import React, { Component, Fragment } from 'react';
import Nav from './components/Nav'
import QuestionList from './components/QuestionList'
import PollView from './components/PollView'
import Login from './components/Login'
import LeaderBoard from './components/LeaderBoard'
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
        <Fragment>
            {this.props.loading === true
              ? (<div className="loading-page"><h2>Loading...</h2></div>)
              : (<div>
                  <Nav />
                  <Route exact path='/' component={QuestionList} />
                  <Route path='/questions/:id' component={PollView} />
                  <Route path='/login' component={Login}/>
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard}/>
                </div>)}
        </Fragment>
      </Router>
    )}
}

function mapStateToProps({ loading }) {
  return {
    ...loading,
  }
}

export default connect(mapStateToProps)(App);
