import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doSignIn, doLogOut } from '../actions/login.js';

import Login from '../components/Login/LoginForm';
import Header from '../components/Header.js'
import { Menu } from '../components/Menu/Menu.js'
import { Footer } from '../components/Footer.js'


class LoginContainer extends Component {
  render() {        
    return <Login {...this.props}></Login>;
  }
}

function mapStateToProps(state) {  
  return {
    user: state.user  
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doSignIn: bindActionCreators(doSignIn, dispatch),
    doLogOut: bindActionCreators(doLogOut, dispatch)    
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);