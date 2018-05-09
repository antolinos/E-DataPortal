import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchDatasetsByInvestigationId } from '../actions/data.js';
import InvestigationTable  from "../components/Investigation/InvestigationTable.js"


class DatasetsContainer extends Component {
  constructor(props) {
    super(props);      
      
    this.state = {
      investigationId : this.props.match.params.id,
      username : this.props.user.username,
      sessionId : this.props.user.sessionId,
      datasets : this.props.data.datasets
    }
  }

  componentDidMount(){    
    this.props.fetchDatasetsByInvestigationId(this.state.sessionId, this.state.username, this.state.investigationId);     
  }

  render() {           
     return this.state.username;
  }
}

function mapStateToProps(state) {  
  return {
    user: state.user,
    data : state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDatasetsByInvestigationId: bindActionCreators(fetchDatasetsByInvestigationId, dispatch)    
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DatasetsContainer);