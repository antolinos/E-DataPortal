import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDatasetsByInvestigationId } from '../actions/data.js';
import DatasetTable from "../components/Dataset/DatasetTable.js"
import { Navbar, NavItem, NavDropdown, Nav, MenuItem, ButtonToolbar, ToggleButtonGroup, ToggleButton, ButtonGroup, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';
import '../components/Dataset/DatasetTable.css';

class DatasetsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investigationId: this.props.match.params.id,
      username: this.props.user.username,
      sessionId: this.props.user.sessionId,
      datasets: this.props.data.datasets
    }
  }
  search(value, a) {
    alert("bingo");
  }
  componentDidMount() {
    this.props.fetchDatasetsByInvestigationId(this.state.sessionId, this.state.username, this.state.investigationId);
  }

  render() {
    return <div>
      <DatasetContainerMenu search={this.search} ></DatasetContainerMenu>
      <DatasetTable style={{ 'margin-top': '5px' }} datasets={this.props.data.datasets}></DatasetTable>
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    data: state.data
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


class DatasetContainerMenu extends Component {
  constructor(props) {
    super(props);

  };

  
  handleChange(value, a) {   
    return value;
  }

  render() {
    return <div className='menu-dataset-container'>
      <Nav pullLeft style={{ marginBottom: "10px" }}  >
        <form>
          <FormGroup>            
            <FormControl
              type="text"
              value=""
              placeholder="Enter text"
              onChange={this.handleChange}
              />
            <FormControl.Feedback />
          
          </FormGroup>
        </form>

      </Nav>
      <Nav pullRight style={{ marginBottom: "10px", marginRight: "100px" }}  >

        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}><span class="glyphicon glyphicon-tasks"></span> Datasets</ToggleButton>
            <ToggleButton value={2}><span class="glyphicon glyphicon-folder-open"></span> Files</ToggleButton>
            <ToggleButton value={3}><span class="glyphicon glyphicon-comment"></span> Logbook</ToggleButton>
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