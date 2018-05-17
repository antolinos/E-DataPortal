import React from 'react';
import Moment from 'react-moment';
import { Grid, Row, Col } from 'react-bootstrap';
import './DatasetSummary.css';

class DatasetSummary extends React.Component {
  constructor(props) {    
    super(props);         
     
  } 
  componentDidMount(){
    
  }

  render() {          
    return (
      <Grid fluid>
      <Row>

          <Col xs={3} md={3}>
              <br />
              <table className="table table-sm table-condensed ">  
              <tbody>
                <tr>
                    <td>Name</td>
                    <td  className='column_parameter_value'>{this.props.dataset.name}</td>
                </tr>
                <tr>
                    <td>Definition</td>
                    <td  className='column_parameter_value'>{this.props.dataset.definition}</td>
                </tr>
                <tr>
                    <td>Start</td>
                    <td  className='column_parameter_value'><Moment parse="YYYY-MM-DD HH:mm" format="LTS">{this.props.dataset.startDate}</Moment></td>
                </tr>
                <tr>
                    <td>End</td>
                    <td  className='column_parameter_value'><Moment parse="YYYY-MM-DD HH:mm" format="LTS">{this.props.dataset.endDate}</Moment></td>
                </tr>
                 <tr>
                    <td>Sample</td>
                    <td  className='column_parameter_value'>{this.props.dataset.Sample_name}</td>
                </tr>   
                </tbody>             
            </table> 

          </Col> 
          <Col xs={10} md={10}>             
          </Col>         
        </Row>
      </Grid>          
                     

    );
  }
}

export default DatasetSummary;