import { setUsers } from './users'
import { setQuestions } from './questions'
import { _getUsers, _getQuestions } from '../_DATA'
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
