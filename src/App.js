import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer.js';
import InvestigationsContainer from './containers/InvestigationsContainer.js';

import MenuContainer from './containers/MenuContainer.js';
import InvestigationContainer from './containers/Investigation/InvestigationContainer.js';
import WalleLog from './components/Event/walleLog.jsx'
import Footer from './components/Footer.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

 function requireAuth(nextState, replace, callback) {
  alert("Auth")
  debugger
}
/*
 <Router>
        <div>                        
            <Route exact path="/" component={WelcomePage} />            
            <Route path="/doi" component={DOIContainer} />
            <Route path="/wallelog" component={WalleLog} />
            <Route path="/topics"  />
            <Route path="/investigation/:id"  component={InvestigationContainer}  />   
            <Route path="/investigations" component={InvestigationsContainer} />         
          </div>
      </Router>
      */
class App extends Component {
  render() {
    return ( 
       <Router>
            <div>                   
                  <MenuContainer></MenuContainer>                   
                  <LoginContainer></LoginContainer>
                  <Route path="/investigation/:id"  component={InvestigationContainer}  />   
                  <Route exact path="/investigations" component={InvestigationsContainer} />    
                  <Footer></Footer>     
            </div>
        </Router>
    );
  }
}

const WelcomePage = () => (
  <div>
      <LoginContainer></LoginContainer>
      <InvestigationsContainer></InvestigationsContainer>
  </div>
);

export default App;


