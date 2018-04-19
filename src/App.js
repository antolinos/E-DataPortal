import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import LoginForm from './components/LoginForm'
import Header from './components/Header.js'
import List from './components/List.js'

class App extends Component {
  render() {
    return (

    <Router>
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

          <Route exact path="/" component={Login} />
          <Route path="/about" component={Home} />
          <Route path="/topics" component={List} />
        </div>
      </Router>
    );
  }
}

const Login = () => (
  <LoginForm username="" password="">  
  </LoginForm>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

export default App;
