import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMyInvestigations} from '../actions/data.js';
import { doLogOut } from '../actions/login.js';
import InvestigationTable  from "../components/Investigation/InvestigationTable.js"
import MenuContainer  from "./MenuContainer.js"
import Footer  from "../components/Footer.js"
import InvestigationContainerMenu  from "./Investigation/InvestigationContainerMenu.js"

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
     if ((!this.props.user) ||  (!this.props.user.sessionId)){      
      return null;      
    }

    return (
        <div>
          <MenuContainer  {...this.props}></MenuContainer>       
          <InvestigationTable data={this.props.data}></InvestigationTable>
          <Footer  {...this.props}></Footer>
        </div>);
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
    fetchMyInvestigations: bindActionCreators(fetchMyInvestigations, dispatch),
    doLogOut: bindActionCreators(doLogOut, dispatch)       
  };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InvestigationsContainer);







