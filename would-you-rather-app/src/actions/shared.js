import { setUsers } from './users'
import { _getUsers } from '../_DATA'

export function handleInitialData () {
  return (dispatch) => {
    return _getUsers()
        .then((users) => {
          setUsers(users)

        })
  }
}
