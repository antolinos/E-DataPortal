import React from 'react';
import PropTypes from 'prop-types'
import Button from 'react-bootstrap-button-loader';
//import { Grid, Row, Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class InvestigationTable extends React.Component {
  constructor(props) {
    super(props);                    
    this.state = {
         investigations : this.props.data.investigations,
         fetching : this.props.data.fetching,
    }
  }

  render() {   
    if (this.props.fetching){
            return "Loading";
    }
    return (        
      /*<Grid fluid>
        {this.state.investigations.map((object, i) => 
          <Row key={i} className="show-grid">
            <Col xs={2} md={2}>{object.name}</Col>
            <Col xs={6} md={6}>{object.summary}</Col>
            <Col xs={2} md={2}>{object.startDate}</Col>
            <Col xs={2} md={2}>{object.doi}</Col>
          </Row>)}        
      </Grid>*/

        <div>
        <BootstrapTable data={ this.state.investigations } pagination>
          <TableHeaderColumn dataField='id' isKey>id</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='summary'>Summary</TableHeaderColumn>
          <TableHeaderColumn dataField='doi'>DOI</TableHeaderColumn>
        </BootstrapTable>
      </div>

    );
  }
}

export default InvestigationTable;