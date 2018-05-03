import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doSignIn} from '../actions/user.js';

import Login from '../components/Login/LoginForm';
import Header from '../components/Header.js'
import {Menu} from '../components/Menu.js'

class LoginContainer extends Component {
  render() {        
    return (
      <div>
        <Header></Header>
        <Menu></Menu>
        <Login {...this.props}></Login>
      </div>
    );
  }
}

function mapStateToProps(state) {  
  return {
    user: state.user
    /*loading: state.general.loading,
    showError: state.general.showErrorPanel,
    showProposalsForm: state.login.showProposalsForm,
    data: state.login.data,
    selectedProposal: state.login.selectedProposal*/
  };
}

function mapDispatchToProps(dispatch) {
  return {
    doSignIn: bindActionCreators(doSignIn, dispatch),
    //doSignOut: bindActionCreators(doSignOut, dispatch)
    //setLoading: bindActionCreators(setLoading, dispatch),  
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);