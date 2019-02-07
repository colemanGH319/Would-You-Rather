export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    authedUser: user
  }
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER
  }
}
