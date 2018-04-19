import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../actions'
import {Row, Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap/lib';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
        
    this.onSignInClicked = this.onSignInClicked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

 handleKeyPress(target) {
    if (target.charCode === 13) {
      this.onSignInClicked();
    }
  }
  onSignInClicked(e) {   
    const username = this.loginID.value;   
    const password = this.password.value;   

    this.props.signIn("root", "root");
  }

  render() {    
    return (
      <Row>
        <Col className="col-md-6 col-md-offset-3">
                <Form horizontal  style={{width:'450px'}}>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Login
                    </Col>
                    <Col sm={10}>                      
                      <FormControl type="text" placeholder="LoginID" autoFocus required 
                      inputRef={(ref) => {this.loginID = ref;}}
                      />
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      Password
                    </Col>
                    <Col sm={10}>
                      <FormControl type="password" placeholder="Password" onKeyPress={this.handleKeyPress} 
                      inputRef={(ref) => {this.password = ref;}} />
                    </Col>
                  </FormGroup>
                  {/*
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                      <Checkbox>Remember me</Checkbox>
                    </Col>
                  </FormGroup>
                  */}
                  <FormGroup>
                    <Col smOffset={2} sm={10}>
                    {/* <Button type="submit" onClick={()=>this.props.setUser("Marcus", "")}>Sign in</Button> */}
                      <Button type="submit" bsStyle="primary" onClick={this.onSignInClicked}>Sign in</Button>
                    </Col>
                  </FormGroup>
                </Form>
      </Col>
    </Row>
    
    );
  }
}

LoginForm.propTypes = {  
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: bindActionCreators(signIn, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);