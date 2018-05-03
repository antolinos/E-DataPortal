import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
//import LoginForm from './components/Login/LoginForm'
//import Header from './components/Header.js'
//import List from './components/List.js'
import LoginContainer from './containers/LoginContainer.js';

class App extends Component {
  render() {
    return <LoginContainer></LoginContainer>

   /* <Router>
      <div>
        <Header></Header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />
          
         
          <Route path="/login" component={LoginContainer} />
          <Route path="/about" component={Home} />
          <Route path="/topics" component={List} />
        </div>
      </Router>
    );*/
  }
}

export default App;

