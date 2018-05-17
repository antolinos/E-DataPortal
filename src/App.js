import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer.js';
import InvestigationsContainer from './containers/InvestigationsContainer.js';
import DOIContainer from './containers/DOIContainer.js';
import DatasetsContainer from './containers/DatasetsContainer.js';
import WalleLog from './components/WalleLog/walleLog.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom";

 

class App extends Component {
  render() {
    return (  
       <Router path='/'>
        <div>                        
            <Route path="/" component={LoginContainer} />            
            <Route path="/investigations" component={InvestigationsContainer} />
            <Route path="/doi" component={DOIContainer} />
            <Route path="/wallelog" component={WalleLog} />
            <Route path="/topics"  />
            <Route path="/investigation/:id"  component={DatasetsContainer}  />            
          </div>
      </Router>
        
    );
  }

  
}


export default App;


