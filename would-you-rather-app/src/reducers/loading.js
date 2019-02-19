import { SHOW_LOADING, HIDE_LOADING } from '../actions/loading'

export default function loading(state={}, action) {
  switch(action.type) {
    case SHOW_LOADING :
      return {
        ...state,
        loading: true
      }
    case HIDE_LOADING :
      return {
        ...state,
        loading: false
      }
    default :
      return state
  }
}
