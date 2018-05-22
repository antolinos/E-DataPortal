import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { LinkContainer } from 'react-router-bootstrap'
import { Glyphicon, Nav, NavItem, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/ebs.gif';
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
    if ((!this.props.user) ||  (!this.props.user.sessionId)){      
    return <Navbar fluid className="navbar-fixed-top ">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/investigations" ><img alt="" src={logo} className='logo' /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>       
      </Navbar>;     
    }
    return <Navbar fluid className="navbar-fixed-top ">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/investigations" ><img alt="" src={logo} className='logo' /></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              <Link to="/investigations" >Home</Link>
            </NavItem>
                   
          </Nav>
          <Nav pullRight>
              <NavItem>
                    <Button bsSize="small" onClick={this.onLogOutClicked} href="/" >
                      <Glyphicon glyph="glyphicon glyphicon-log-out" /> Log out <strong>{this.props.user.username}</strong>
                    </Button>
               </NavItem>    
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>;


  }
};
