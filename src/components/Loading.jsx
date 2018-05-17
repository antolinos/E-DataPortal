import React from 'react';
import ReactLoading from 'react-loading';
import { Grid, Row, Col } from 'react-bootstrap';

class Loading extends React.Component {
    render() {
        return <Grid fluid>        
            <Row className="show-grid" className="col-md-6 col-md-offset-3">
                <Col xs={12} md={8}>
                   
                    <ReactLoading color="#132577" type='spinningBubbles' height={300} width={300} />
                </Col>
            </Row>
            </Grid>
                }
}
export default Loading
