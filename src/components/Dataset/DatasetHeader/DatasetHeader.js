import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import './DatasetHeader.css';

class DatasetHeader extends React.Component {
  constructor(props) {    
    super(props);          
  }
  componentDidMount(){
    
  }

 

  render() {          
    return (                                
      <div className="container-fluid">
            <div className="pull-left">
              <span className="glyphicon glyphicon-collapse-down color-gray"></span>
              <span className="dataset-type left-margin">{this.props.definition}</span>
              <span  className="left-margin dataset-name">{this.props.name}</span>
            </div>
            <div className="pull-right">              
              <span><Moment className="dataset-header-date" parse="YYYY-MM-DD HH:mm" format="LLLL">{this.props.startDate}</Moment></span>                                         
            </div>         
      </div>                                          
    );
  }
}

DatasetHeader.propTypes = {
  name: PropTypes.string,
  definition: PropTypes.string,
  startDate: PropTypes.string
};

export default DatasetHeader;