import React from 'react';
import Moment from 'react-moment';
import { Grid, Row, Col, Tab, Tabs, Panel, PanelGroup } from 'react-bootstrap';
import './DatasetTable.css';
import DatasetHeader from "./DatasetHeader/DatasetHeader.js"
import DatasetFooter  from "./DatasetFooter/DatasetFooter.js"
import DatasetSummary from "./DatasetSummary/DatasetSummary.js"                            

class DatasetTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: props.datasets,
      expanded: false
    }
  }

  render() {
    return (
      <div className='dataset-table-container' >
        <Grid fluid>
          {
            this.state.datasets.map((dataset, id) => (
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
        </Grid>;
      </div>

    );
  }
}

export default DatasetTable;