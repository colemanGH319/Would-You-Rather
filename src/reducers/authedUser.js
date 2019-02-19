import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser'

export default function authedUser(state = {}, action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      return {
        ...state,
        ...action.authedUser
      }
    case REMOVE_AUTHED_USER :
      return Object.assign({}, state, {id: null, loggedIn: false})
    default :
      return state
  }
}
