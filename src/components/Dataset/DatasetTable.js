import React from 'react';
import Moment from 'react-moment';
import { Grid, Row, Col, Tab, Tabs } from 'react-bootstrap';
import './DatasetTable.css';

class DatasetTable extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      datasets : props.datasets
    }
  }
  componentDidMount(){
    
  }

  render() {   
    if (this.props.fetching){
            return "Loading";
    }
    const options = {
      paginationSize: 5,
      sizePerPage: 25,
      paginationShowsTotal: true,
      hidePageListOnlyOnePage: true
    };
    
    return (        
        <div className='investigation-table-container'>
          <Grid>

               {
                this.state.datasets.map((city, id) => (
                  <Row className="show-grid border right-tabs clearfix" style={{ height:'300px' }}>
                    <Col xs={12} md={12}>
                    Dataset Name
                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example" right>
                            <Tab eventKey={1} title="Tab 1">
                              Tab 1 content
                            </Tab>
                            <Tab eventKey={2} title="Tab 2">
                              Tab 2 content
                            </Tab>
                            <Tab eventKey={3} title="Tab 3" disabled>
                              Tab 3 content
                            </Tab>
                          </Tabs>
                    </Col>
                </Row>
                ))
                }
          </Grid>;
      </div>

    );
  }
}

export default DatasetTable;