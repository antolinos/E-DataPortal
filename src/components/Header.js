import React from 'react';
import PageHeader from 'react-bootstrap/lib/Grid';

class Header extends React.Component {
  render() {
    return   <PageHeader>
                        <img src="/static/media/logo.5d5d9eef.svg" className="App-logo" alt="logo" />
                         EDP <small>Electronic Data Portal</small>
            </PageHeader>;
  }
}
export default Header
