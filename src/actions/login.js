import $ from 'jquery'; 
import ICAT from '../config/icat/icat.js'

import {
  LOG_IN,
  LOGGED_IN,
  LOG_OUT,
  LOGIN_ERROR
} from '../constants/ActionTypes'


export function doLogOut(user) { 
  return {
    type: LOG_OUT,
    user
  };
}


export function setLoginInfo(user) {
  return {
    type: LOGGED_IN,
    user
  };
}

export function doSignIn(username, password) {  
  let connection = {
          plugin : ICAT.connection.plugins[0],
          credentials : [
              {
                  "username" : username,
                  "password" : password
              }
          ]
    };            

  return function (dispatch) {
               $.ajax({		
                  url: ICAT.server + "/icat/session",		
                  data: { json : JSON.stringify(connection) },		
                  type: "post",	dataType : "json",		
                  beforeSend : function(){
                      dispatch({type: LOG_IN, username: username});  
                  },  
                  success: function( data ) {			
                      if (data){
                        if (data.sessionId){                                                    
                            dispatch({type: LOGGED_IN, username: username, sessionId: data.sessionId});                        
                        }
                      }                      
                  },			
                  error: function(error) {                                          
                      dispatch({type: LOGIN_ERROR, username: username, error : "Authentication Failed" }); 
                  }
            });


   
  };
}