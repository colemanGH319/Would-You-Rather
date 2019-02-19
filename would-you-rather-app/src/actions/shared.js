import { setUsers, addUserQuestion } from './users'
import { setQuestions, createQuestion, castVote } from './questions'
import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from './loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
          dispatch(setUsers(users))
          dispatch(setQuestions(questions))
          dispatch(setAuthedUser({id: null, loggedIn: false}))
        })
        .then(() => dispatch(hideLoading()))
  }
}

export function handleNewQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestion(question)
        .then((question) => {
          return dispatch(createQuestion(question))
        })
        .catch((e) => {
          alert(e)
        })
        .then((data) => {
          return dispatch(addUserQuestion(data.question))
        })
        .catch((e) => {
          alert(e)
        })
        .then(() => dispatch(hideLoading()))
  }
}

export function handleQuestionAnswer(question) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer(question)
          .then(() => {
            dispatch(castVote(question))
          })
          .catch((e) => {
            alert(e)
          })
          .then(() => dispatch(hideLoading()))
  }
}
