import React from 'react';
import {  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/ebs.gif';
export class Footer extends React.Component {

  render() {    
    if ((!this.props.user) ||  (!this.props.user.sessionId)){      
      return null;      
    }
    
    return   <nav className="navbar navbar-default navbar-fixed-bottom" >     
        <Navbar.Header  >
          <Navbar.Brand >
            <Link to="/investigations" style={{ fontSize: '15px' }}><img alt="" src={logo} className='logo' />European Synchrotron Radiation Facility</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>              
    </nav>;
  }
}
export default Footer
