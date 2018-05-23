import React, { Component } from 'react';
import axios from "axios"
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import DatasetTable from "../../components/Dataset/DatasetTable.js"
import { bindActionCreators } from 'redux';
import { getDatasetsByInvestigationId } from '../../api/icat/icat.js'
import { parseQueryParameters } from '../../helpers/URLParser.js'
import { doLogOut, doSignIn } from '../../actions/login.js';
import { PERSPECTIVE } from '../../constants/Perspectives.js'
import InvestigationContainerMenu from './InvestigationContainerMenu.js'
import { Menu }  from "../../components/Menu/Menu.js"
import Footer  from "../../components/Footer.js"
import LoginForm  from "../../components/Login/LoginForm.js"

class InvestigationContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      investigationId: this.props.match.params.id,
      username: this.props.user.username,
      sessionId: this.props.user.sessionId,
      datasets: [],
      fetching : true,
      perspective : this.getActivePerspective()
    }
  }
 

  getActivePerspective = function () {    
    const queryParameters = parseQueryParameters(this.props.location.search.replace("?", "")); 
      
    if (queryParameters.perspective) {
      if (Number(queryParameters.perspective) === PERSPECTIVE.DATASETS) {
        return PERSPECTIVE.DATASETS;
      }
      if (Number(queryParameters.perspective) === PERSPECTIVE.FILES) {
        return PERSPECTIVE.FILES;
      }
      if (Number(queryParameters.perspective) === PERSPECTIVE.EVENTS) {
        return PERSPECTIVE.EVENTS;
      }
    }    
    
    return PERSPECTIVE.DATASETS;
  }

  groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  parametersToDatasetObject = function (parametersGroupedByInvestigationId) {
    let datasets = {};
    for (var datasetId in parametersGroupedByInvestigationId) {
      for (var index in parametersGroupedByInvestigationId[datasetId]) {
        var param = parametersGroupedByInvestigationId[datasetId][index];
        var key = param[5];
        var value = param[6];
        if (datasets[datasetId] == null) {
          datasets[datasetId] = {};
        }
        datasets[datasetId][key] = value;
        /** Some metadata at level of dataset to be added as parameters of the dataset */
        datasets[datasetId]["id"] = param[0];
        datasets[datasetId]["name"] = param[1];
        datasets[datasetId]["startDate"] = param[2];
        datasets[datasetId]["endDate"] = param[3];
        datasets[datasetId]["investigationName"] = param[4];        
        datasets[datasetId]["location"] = param[8];
      }
    }

    var array = [];
    for (var ds in datasets) {
      array.push(datasets[ds]);
    }
    return array;
  };


  onLogbookButtonClicked(){    
      this.setState({         
          perspective : PERSPECTIVE.EVENTS
        });
  }
  
  componentDidMount() {    
    axios.get(getDatasetsByInvestigationId(this.state.sessionId, this.state.username, this.state.investigationId))
      .then(res => {
        let datasets = this.parametersToDatasetObject(this.groupBy(res.data, 0));                
        this.setState({      
          datasets: datasets,
          fetching : false

        });
      })
      .catch((error) => {                
           if (error.response) {             
              if (error.response.status == 403){
                  this.props.doLogOut();
              }
           }
      });
  }

  render() {
    let perspective = this.getActivePerspective();   
       
    switch (perspective) {
        case PERSPECTIVE.DATASETS:                       
           return   <div>                        
                        <InvestigationContainerMenu investigationId={this.state.investigationId} perspective={perspective} ></InvestigationContainerMenu>
                        <DatasetTable datasets={this.state.datasets} fetching={this.state.fetching}></DatasetTable>                                         
                      </div>

      case PERSPECTIVE.FILES:
                  return  <div>
                        
                        <InvestigationContainerMenu investigationId={this.state.investigationId} perspective={perspective} ></InvestigationContainerMenu>
                        <br /><br /><br /><h1>files</h1>
                        
                      </div>
        case PERSPECTIVE.EVENTS:
                  return  <div>
                              <InvestigationContainerMenu investigationId={this.state.investigationId} perspective={perspective} ></InvestigationContainerMenu>"Events"</div>;
     
        default: 
                  return "Nothing to display";
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,  
    events: state.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {    
           
  };
}

InvestigationContainer.propTypes = {
  perspective: PropTypes.oneOf([PERSPECTIVE.DATASETS, PERSPECTIVE.FILES, PERSPECTIVE.EVENTS])
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvestigationContainer);
