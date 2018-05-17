import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import axios from "axios"
import { connect } from 'react-redux';
import DatasetTable from "../components/Dataset/DatasetTable.js"
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import '../components/Dataset/DatasetTable.css';
import { Link } from 'react-router-dom';
import {
  getDatasetsByInvestigationId
} from '../api/icat/icat.js'
import { Route } from 'react-router-dom'



class DatasetsContainer extends Component {
  constructor(props) {
    super(props);
    this.onLogbookButtonClicked= this.onLogbookButtonClicked.bind(this);
    
    
   


    this.state = {
      investigationId: this.props.match.params.id,
      username: this.props.user.username,
      sessionId: this.props.user.sessionId,
      datasets: [],
      fetching : true,
      perspective : "DATASETS" // "FILES" || "EVENTS"
    }
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
          perspective : "EVENTS"
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
  }

  render() {
    switch (this.state.perspective) {
        case "DATASETS": 
                  return (<div>
                    <DatasetContainerMenu investigationId={this.state.investigationId} onLogbookButtonClicked={this.onLogbookButtonClicked} ></DatasetContainerMenu>
                    <DatasetTable style={{ 'margin-top': '5px' }} datasets={this.state.datasets} fetching={this.state.fetching}></DatasetTable>
                  </div>);
        case "EVENTS":
                  return  <div>
                              <DatasetContainerMenu onLogbookButtonClicked={this.onLogbookButtonClicked} ></DatasetContainerMenu>"Events"</div>;
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



export default connect(
  mapStateToProps
)(DatasetsContainer);



class DatasetContainerMenu extends Component {
  constructor(props) {
    super(props);
    this.onLogbookButtonClicked= this.onLogbookButtonClicked.bind(this);
  };

  handleChange(value, a) {
    return value;
  }
  onLogbookButtonClicked(x,a){        
    this.props.onLogbookButtonClicked();
    
  }
  //<ToggleButton onChange={this.onLogbookButtonClicked}  value={3}><span className="glyphicon glyphicon-comment"></span> Logbook</ToggleButton>
  render() {
    const logURL = "/investigation/" + this.props.investigationId;

    return <div className='menu-dataset-container'>
      <Nav pullLeft style={{ marginBottom: "10px" }}  >
      </Nav>
      <Nav pullRight style={{ marginBottom: "10px", marginRight: "100px" }}  >

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}><span className="glyphicon glyphicon-tasks"></span> Datasets</ToggleButton>
            <ToggleButton value={2}><span className="glyphicon glyphicon-folder-open"></span> Files</ToggleButton>
            <ToggleButton onChange={this.onLogbookButtonClicked}  value={3}><span className="glyphicon glyphicon-comment"></span> Logbook</ToggleButton>
            <ToggleButton  value={3}>
              <span className="glyphicon glyphicon-comment"></span>
                <Link to={{patname: logURL, search :"perspetive=logbook"}}>Logbook</Link> 
            </ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </Nav>
    </div>;
    return (
      <div>
        <Nav pullLeft >
          <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Nav>
        <Nav pullRight>
          <ButtonToolbar>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
              <ToggleButton value={1}>Dataset</ToggleButton>
              <ToggleButton value={2}>Files</ToggleButton>
              <ToggleButton value={3}>Logbook</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Nav>
      </div>);
  }
}