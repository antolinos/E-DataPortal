import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signIn } from '../../actions'
import {Modal, Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap/lib';
import loader from '../../images/loader.gif';


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
    //this.props.setLoading(true);
    this.props.signIn(username, password);
  }

  render() {  
     if (this.props.loading) {
      return <img alt="" src={loader} className="centered" />;
    }  
    return (
      <div className="static-modal">
        <Modal.Dialog autoFocus>
          <Modal.Header closeButton>
            <Modal.Title>ESRF Data Portal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                    <Form horizontal >
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
                      <FormGroup>
                        <Col smOffset={2} sm={10}>
                        {/* <Button type="submit" onClick={()=>this.props.setUser("Marcus", "")}>Sign in</Button> */}
                          <Button type="submit" bsStyle="primary" onClick={this.onSignInClicked}>Sign in</Button>
                        </Col>
                      </FormGroup>
                    </Form>
         </Modal.Body>
      </Modal.Dialog>
    </div>
    
    );
  }
}

LoginForm.propTypes = {  
  username: PropTypes.string,
  password: PropTypes.string
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