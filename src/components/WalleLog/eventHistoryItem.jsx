import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import { Grid, Col, Row, Table } from 'react-bootstrap';

/**
 * This class displays a event history item. As such it does not have any knowledge of history.
 */
class EventHistoryItem extends React.Component {
  constructor(props) {
    super(props);

    this.visuals = {
      paddingLeft: this.props.paddingLeft ? this.props.paddingLeft : 0,
      toggleHistoryButton: this.props.toggleHistoryButton ? true : false,
      quitHistoryButton: this.props.quitHistoryButton ? true : false,
    }
    this.state = {
      expanded: this.props.expanded ? true : false,
    }
  }

  render() {
    return (
      <div style={{ 'padding-left': this.visuals.paddingLeft }}>
        <Panel id="collapsible-panel-example-1" expanded={this.state.expanded}>
          <Panel.Heading className="padding-top-5 padding-bottom-5">
            <Row>
              <Col xs={6}>
                <span className="glyphicon glyphicon-time padding-right-5"> </span> {this.props.createdAt} {this.props.dateMsg}
              </Col>
              <Col xs={6}>
                <div className="pull-right">
                  <span className="glyphicon glyphicon-user"> </span> {this.props.item.logger} |  &nbsp;
                        <Button className="noPadding" bsStyle="link" onClick={() => this.setState({ expanded: !this.state.expanded })}>
                    <span className="glyphicon glyphicon-zoom-in"></span>
                  </Button>

                  {this.visuals.toggleHistoryButton ?
                    <Button className="noPadding" bsStyle="link" onClick={() => this.props.toggleHistory()}>
                      <span className="glyphicon glyphicon-time noPadding"></span>
                    </Button> : ""}

                  {this.visuals.quitHistoryButton ?
                    < Button className="noPadding" bsStyle="link" onClick={() => this.props.toggleHistory()}>
                      <span className="glyphicon glyphicon-remove-circle noPadding"></span>
                    </Button > : ""}

                </div>
              </Col>
            </Row>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Row>
                <Col xs={12}>
                  <p> {this.props.item.content} </p>
                </Col>
              </Row>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    )
  }
}

export default EventHistoryItem;
