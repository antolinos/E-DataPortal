import {
  SIGN_IN,
  LOGGED_IN,
  LOG_OUT
} from '../constants/ActionTypes'

const initialState =  {"username": null, "sessionId": null}


const user = (state = initialState, action) => {    
  
  switch (action.type) {
    case SIGN_IN: {      
        state = {...state,  username: action.username}                
        break;
    }
    case LOGGED_IN:{      
        state = {...state, username: action.username, sessionId: action.sessionId}                
        break;  
    }
    case LOG_OUT: {
        state = {...state, username: null, sessionId: null}                
        break;  
    }
    default:
        break;
  }
  return state
}

export default user
