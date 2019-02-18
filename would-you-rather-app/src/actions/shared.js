import { setUsers, addUserQuestion } from './users'
import { setQuestions, createQuestion } from './questions'
import { _getUsers, _getQuestions, _saveQuestion } from '../_DATA'
import { setAuthedUser } from './authedUser'

export function handleInitialData () {
  return (dispatch) => {
    return Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
          dispatch(setUsers(users))
          dispatch(setQuestions(questions))
          dispatch(setAuthedUser({id: null, loggedIn: false}))
        })
  }
}

export function handleNewQuestion(question) {
  return (dispatch) => {

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
  }
}
