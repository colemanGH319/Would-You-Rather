import React, { Component } from 'react';
import Nav from './components/Nav'
import QuestionList from './components/QuestionList'
import { handleInitialData } from './actions/shared'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <div>
        <Nav />
        <QuestionList />
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    loading: Object.values(users).length === 0
  }
}
export default connect(mapStateToProps)(App);
