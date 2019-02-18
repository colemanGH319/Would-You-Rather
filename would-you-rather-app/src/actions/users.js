export const SET_USERS = 'SET_USERS'
export const USER_ANSWER = 'USER_ANSWER'

export function setUsers(users) {
  return {
    type: SET_USERS,
    users: users,
  }
}

export function updateUserAnswers(user) {
  return {
    type: USER_ANSWER,
    user: user
  }
}
