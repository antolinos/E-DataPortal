import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer.js';
import MyDataContainer from './containers/MyDataContainer.js';
import DOIContainer from './containers/DOIContainer.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from './components/Login/LoginForm'
import Header from './components/Header.js'
import { Menu } from './components/Menu/Menu.js'
 

class App extends Component {
  render() {
    return (  
       <Router>
        <div>                        
            <Route path="/" component={LoginContainer} />
            
            <Route path="/investigations" component={MyDataContainer} />
            <Route path="/doi" component={DOIContainer} />
            <Route path="/topics"  />
          </div>
      </Router>
        
    );
  }

  
}


export default App;


