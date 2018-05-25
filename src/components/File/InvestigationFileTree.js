import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import DatasetFileTree from './DatasetFileTree.js'

class InvestigationFileTree extends React.Component {
  constructor(props) {    
    super(props);                    
    
  }


  render() {   
 return (
      <div className='dataset-table-container' >
        <Grid fluid >
          {
            this.props.datasets.map((dataset, id) => (
              <Row key={id} className="show-grid dataset-table-row" >
                <Col xs={12} md={12}>
                    <DatasetFileTree dataset={dataset} sessionId={this.props.sessionId} username={this.props.username}></DatasetFileTree>
                </Col>
              </Row>
            ))
          }
        </Grid>
      </div>

    );
  }
}
export default InvestigationFileTree;