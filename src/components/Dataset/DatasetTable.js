import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Tab, Tabs, Panel, PanelGroup } from 'react-bootstrap';
import Loading from '../Loading.jsx'
import './DatasetTable.css';
import DatasetHeader from "./DatasetHeader/DatasetHeader.js"
import DatasetFooter  from "./DatasetFooter/DatasetFooter.js"
import DatasetSummary from "./DatasetSummary/DatasetSummary.js"                            


class DatasetTable extends React.Component {
   render() {    
    if (this.props.fetching){
      return <Loading></Loading>
    }           
    return (
      <div className='dataset-table-container' >
        <Grid fluid >
          {
            this.props.datasets.map((dataset, id) => (
              <Row key={id} className="show-grid dataset-table-row" >
                <Col xs={12} md={12}>
                  <PanelGroup accordion id="myPanelGroup"  >
                    <Panel >
                      <Panel.Heading>
                        <Panel.Title toggle>
                          <DatasetHeader 
                                definition={dataset.definition} 
                                name={dataset.name}
                                startDate={dataset.startDate}
                                location={dataset.location}
                          ></DatasetHeader>
                        </Panel.Title>
                      </Panel.Heading>
                      <Panel.Collapse >
                        <Panel.Body >
                          <Tabs id="tabs">
                            <Tab eventKey={1} title="Summary">
                              <DatasetSummary dataset={dataset} ></DatasetSummary>
                            </Tab>
                            <Tab eventKey={2} title="Metadata">Tab 2 content
                                      </Tab>
                          </Tabs>
                        </Panel.Body>
                      </Panel.Collapse>
                      <Panel.Footer>
                        <DatasetFooter dataset={dataset} ></DatasetFooter>
                      </Panel.Footer>
                    </Panel>
                  </PanelGroup>
                </Col>
              </Row>
            ))
          }
        </Grid>
      </div>

    );
  }
}

DatasetTable.propTypes = {
  fetching: PropTypes.boolean,
  datasets : PropTypes.array
};

export default DatasetTable;