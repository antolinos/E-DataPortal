import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMyInvestigations} from '../actions/data.js';
import InvestigationTable  from "../components/Investigation/InvestigationTable.js"


class InvestigationsContainer extends Component {
  constructor(props) {
    super(props);    

    this.state = {
      investigations : this.props.data.investigations,
      error : null,
      username : this.props.user.username,
      sessionId : this.props.user.sessionId,
    }
  }

  componentDidMount(){
    this.props.fetchMyInvestigations(this.state.sessionId, this.state.username);   
  }

  render() {        
    return (<InvestigationTable data={this.props.data}></InvestigationTable>);
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
    fetchMyInvestigations: bindActionCreators(fetchMyInvestigations, dispatch)    
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InvestigationsContainer);