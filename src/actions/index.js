import $ from 'jquery'; 

import {
  SIGN_IN,
  LOGGED_IN
} from '../constants/ActionTypes'



export function setLoginInfo(user) {
  return {
    type: LOGGED_IN,
    user
  };
}


export function signIn(username, password) {
  let server = "https://ovm-icat-test.esrf.fr:8181";
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
                  url: server + "/icat/session",		
                  data: { json : JSON.stringify(connection) },		
                  type: "post",		
                  dataType : "json",		
                  success: function( data ) {			
                      if (data){
                        if (data.sessionId){
                          //dispatch(setLoginInfo({"username" : username, "sessionId" : data.sessionId}));
                          alert("Logged IN with sessionId: " + data.sessionId)
                        }
                      }

                      
                  },			
                  error: function(error) {
                    
                    console.log(error);
                      alert( "Sorry, there was a problem!" );
                  }
            });


   
  };
}