import { SET_USERS, USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case SET_USERS :
      return {
        ...state,
        ...action.users
      }
    case USER_ANSWER :
      return {
        ...state,
        [action.user.authedUser]: {
          ...state[action.user.authedUser],
          answers: {
            ...state[action.user.authedUser].answers,
            [action.user.qid]: action.user.answer
          }
        }
      }
    default :
      return state
  }
}
