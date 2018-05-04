import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';


import { fetchInvestigationsWithDOI} from '../actions/myData.js';
import Login from '../components/Login/LoginForm';
import Header from '../components/Header.js'
import { Menu } from '../components/Menu/Menu.js'
import InvestigationTable  from "../components/Investigation/InvestigationTable.js"


class DOIContainer extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      investigations : this.props.doi.investigations,
      error : null,
      username : this.props.user.username,
      sessionId : this.props.user.sessionId,
    }
  }

  componentDidMount(){
    this.props.fetchInvestigationsWithDOI(this.state.sessionId, this.state.username);     
  }

  render() {        
   
     return (<InvestigationTable data={this.props.doi}></InvestigationTable>);
  }
}

function mapStateToProps(state) {  
  return {
    user: state.user,  
    doi: state.doi
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestigationsWithDOI: bindActionCreators(fetchInvestigationsWithDOI, dispatch)    
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DOIContainer);