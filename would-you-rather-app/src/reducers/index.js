import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import loading from './loading'

export default combineReducers({
  users,
  questions,
  authedUser,
  loading
})
