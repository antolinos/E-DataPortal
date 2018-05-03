import $ from 'jquery'; 
import ICAT from '../config/icat.js'

import {
  //SIGN_IN,
  LOGGED_IN,
  //SIGN_OUT
} from '../constants/ActionTypes'

/*
export function doSignOut(user) {
  return {
    type: SIGN_OUT,
    user
  };
}
*/

export function setLoginInfo(user) {
  return {
    type: LOGGED_IN,
    user
  };
}

export function doSignIn(username, password) {
  let connection = {
          plugin : 'db',
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
                  success: function( data ) {			
                      if (data){
                        if (data.sessionId){                                                    
                            dispatch({type: LOGGED_IN, username: username, sessionId: data.sessionId})                        
                        }
                      }                      
                  },			
                  error: function(error) {                                          
                      alert( "Sorry, there was a problem!" );
                  }
            });


   
  };
}