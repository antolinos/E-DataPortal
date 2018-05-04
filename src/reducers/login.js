import {
  LOG_IN,
  LOGGED_IN,
  LOG_OUT,
  LOGIN_ERROR
} from '../constants/ActionTypes'


const initialState =  {"username": null, "sessionId": null, "isAuthenticating":false, "error": null}

const user = (state = initialState, action) => {    
  switch (action.type) {
    case LOG_IN: {      
        state = {...state,  username: action.username, isAuthenticating : true, error : null}                  
        break;
    }
    case LOGGED_IN:{      
        state = {...state, username: action.username, sessionId: action.sessionId, isAuthenticating : false, error : null}                  
        break;  
    }
    case LOG_OUT: {
        state = {...state, username: null, sessionId: null, isAuthenticating : false, error : null}                
        break;  
    }
    case LOGIN_ERROR: {
        state = {...state, username: null, sessionId: null, isAuthenticating : false, error : action.error}                
        break;
    }
    default:
        break;
  }
  return state
}

export default user
