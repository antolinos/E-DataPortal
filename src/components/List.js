

import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap/lib';

class List extends React.Component {
  render() {
    return  <Grid  style={{border: "1px solid brown"}}>
            <Row className="show-grid">
                <Col xs={12} md={8}>
                blablabla
                </Col>
                <Col xs={6} md={4}>
                blablabla
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={6} md={4}>
                blablabla
                </Col>
                <Col xs={6} md={4}>
                blablabla
                </Col>
                <Col xsHidden md={4}>
                blablabla
                </Col>
            </Row>

            <Row className="show-grid">
                <Col xs={6} xsOffset={6}>
                blablabla
                </Col>
            </Row>

            <Row className="show-grid">
                <Col md={6} mdPush={6}>
                blablabla
                </Col>
                <Col md={6} mdPull={6}>
               blablabla
                </Col>
            </Row>
            </Grid>
  }
}
export default List






