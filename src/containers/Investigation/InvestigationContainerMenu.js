import React, { Component } from 'react';
import { Glyphicon, Grid, Row, Col,NavItem, MenuItem, NavDropdown, FormGroup, FormControl, Button, ButtonToolbar, Navbar, ToggleButtonGroup, ToggleButton, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './InvestigationContainerMenu.css';

class InvestigationContainerMenu extends Component { 
  render() {
    let logURL = "/investigation/" + this.props.investigationId;  
    debugger        
    return <Grid fluid className="navbar-fixed-top MenuBar">        
       <Row>
         <Col  xs={2}>
            <ButtonToolbar >
              <ToggleButtonGroup  style={{ marginTop: "5px" }} type="radio" name="options" value={this.props.perspective}>
                <ToggleButton bsSize="small" value={1}>
                  <Link to={{ patname: logURL, search: "perspective=1" }}>
                    <span className="glyphicon glyphicon-comment"></span> Datasets
                      </Link>
                </ToggleButton>
                <ToggleButton bsSize="small" value={2}>
                  <Link to={{ patname: logURL, search: "perspective=2" }}><span className="glyphicon glyphicon-comment"></span> Files</Link>
                </ToggleButton>

                <ToggleButton bsSize="small" value={3}>
                  <Link to={{ patname: logURL, search: "perspective=3" }}> <span className="glyphicon glyphicon-comment"></span> Logbook</Link>
                </ToggleButton>
              </ToggleButtonGroup>
            </ButtonToolbar>
        
        </Col>
        <Col xs={7}>
             
        </Col>
       
        <Col xs={2}>
             <FormControl bsSize="small" type="text" placeholder="Search" style={{"margin-top":"4px", "margin-left": "30px"}}/>
        </Col>

       </Row>
      </Grid>;
  }
}

export default InvestigationContainerMenu;
