import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doSignIn, doLogOut } from '../actions/user.js';

import Login from '../components/Login/LoginForm';
import Header from '../components/Header.js'
import { Menu } from '../components/Menu/Menu.js'
import { Grid, Row, Col } from 'react-bootstrap';

class LoginContainer extends Component {
  render() {        
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
            <Header></Header>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col>
            <Menu {...this.props}></Menu>
          </Col>
        </Row>
        <Row className="show-grid">
          <Login {...this.props}></Login>
        </Row>
      </Grid>
    );
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