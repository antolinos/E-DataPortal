import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';


import { fetchMyInvestigations} from '../actions/myData.js';
import Login from '../components/Login/LoginForm';
import Header from '../components/Header.js'
import { Menu } from '../components/Menu/Menu.js'
import InvestigationTable  from "../components/Investigation/InvestigationTable.js"


class MyDataContainer extends Component {
  constructor(props) {
    super(props);    

    this.state = {
      investigations : this.props.myData.investigations,
      error : null,
      username : this.props.user.username,
      sessionId : this.props.user.sessionId,
    }
  }

  componentDidMount(){
    this.props.fetchMyInvestigations(this.state.sessionId, this.state.username);   
  }

  render() {        
    return (<InvestigationTable data={this.props.myData}></InvestigationTable>);
  }
}

function mapStateToProps(state) {  
  return {
    user: state.user,  
    myData : state.myData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMyInvestigations: bindActionCreators(fetchMyInvestigations, dispatch)    
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyDataContainer);