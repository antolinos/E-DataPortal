import {
  SIGN_IN,
  LOGGED_IN
} from '../constants/ActionTypes'

const initialState = {
  user: {"username": null, "sessionId": null},
}

const user = (state = initialState, action) => {    
  switch (action.type) {
    case SIGN_IN:
        return { user: {"username": action.username}}
    case LOGGED_IN:
        return { user: {"username": action.user.username, "sessionId": action.user.sessionId }}
    default:
        return state
  }
}

export default user
