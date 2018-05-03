import React from 'react';
import PropTypes from 'prop-types'
import {Glyphicon, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap/lib';
import Button from 'react-bootstrap-button-loader';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);            
    this.onSignInClicked = this.onSignInClicked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.loading = false;
  }

 handleKeyPress(target) {
    if (target.charCode === 13) {
      this.onSignInClicked();
    }
  }
  onSignInClicked(e) {   
    const username = this.loginID.value;   
    const password = this.password.value;       
    this.loading = true;    
    this.props.doSignIn(username, password);
    this.loading = false;
  }

  render() {   
    /** If there is sessionId it means that we are already been authenticated **/       
     if (this.props.user.sessionId) {
      return null;
    }  
    
    return (
      <div className="static-modal">
        <Modal.Dialog autoFocus>
          <Modal.Header>            
            <Modal.Title>ESRF Data Portal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form horizontal >
                      <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                          Login
                        </Col>
                        <Col sm={10}>                      
                          <FormControl type="text" placeholder="LoginID" autoFocus required  inputRef={(ref) => {this.loginID = ref;}}
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
                    </Form>
                    <div  className="center-block text-center">                                                                    
                              <Button type="submit" loading={this.loading} bsStyle="primary" onClick={this.onSignInClicked}>
                                  <Glyphicon glyph="glyphicon glyphicon-log-in" /> Log in
                              </Button>                        
                    </div>
         </Modal.Body>
      </Modal.Dialog>
    </div>
    
    );
  }
}

LoginForm.propTypes = {  
  username: PropTypes.string 
}

/*
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: bindActionCreators(doSignIn, dispatch),   
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);*/

export default LoginForm;