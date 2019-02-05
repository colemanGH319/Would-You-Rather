import { SET_AUTHED_USER } from '../actions/authedUser'

export default function authedUser(state = {}, action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      console.log("This is what's dispatching: ", action.authedUser)
      return {
        ...state,
        ...action.authedUser
      }
    default :
      return state
  }
}
