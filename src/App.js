import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer.js';
import InvestigationsContainer from './containers/InvestigationsContainer.js';
import DOIContainer from './containers/DOIContainer.js';
import InvestigationContainer from './containers/Investigation/InvestigationContainer.jsx';
import WalleLog from './components/Event/walleLog.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";

 

class App extends Component {
  render() {
    return (  
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


