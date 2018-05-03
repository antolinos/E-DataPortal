import React from 'react';
import { Glyphicon, Thumbnail, Nav, Image, NavItem, NavDropdown, MenuItem, Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import logo from'../../images/ebs.gif';
import './Menu.css';


export class Menu extends React.Component {     
  constructor(props) {
    super(props);  
    this.onLogOutClicked = this.onLogOutClicked.bind(this);            
  }

 onLogOutClicked(e) {    
    this.props.doLogOut();
  }


  render() {       
     /** If there is not sessionId it means that we are not already been authenticated **/       
     if (!this.props.user.sessionId) {
      return null;
    }      
    return  <Navbar collapseOnSelect   style={{ marginTop:'5px'}}>
            <Navbar.Header >                             
              <Navbar.Brand >
                 <a href="#" style={{fontSize:'24px'}}><img src={logo}  style={{height:'15', width:'15'}} />ESRF Data Portal</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>  
                <NavItem eventKey={1} href="#">
                  Dashboard
                </NavItem>            
                <NavItem eventKey={2} href="#">
                  My Data
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Open Data
                </NavItem>
                <NavDropdown eventKey={4} title="Datasets" id="basic-nav-dropdown">
                  <MenuItem eventKey={4.1}>DOI</MenuItem>
                  <MenuItem eventKey={4.2}>LogBook</MenuItem>
                  <MenuItem eventKey={4.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={5} href="#">
                  
                </NavItem>              
              </Nav>
              <Navbar.Form pullRight disabled> 
                  <Button bsSize="small" onClick={this.onLogOutClicked}>
                    <Glyphicon glyph="glyphicon glyphicon-log-out" /> Log out <strong>{this.props.user.username}</strong>
                  </Button>
               </Navbar.Form>
            </Navbar.Collapse>
          </Navbar>;
  }
};
