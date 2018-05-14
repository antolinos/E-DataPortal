import React from 'react';
import Moment from 'react-moment';
import './DatasetFooter.css';

class DatasetFooter extends React.Component {
  constructor(props) {    
    super(props);          
  }
  componentDidMount(){
    
  }

  getRandomFilesCount(){
    return  Math.floor((Math.random() * 100) + 1);
  }
  render() {          
    return (        
                        
      <div className="container-fluid">
            <div className="pull-left">              
            </div>
            <div className="pull-right">              
                <span style={{color:'orange'}}>{this.getRandomFilesCount()} files ({this.getRandomFilesCount()} GB)</span>                           
            </div>         
      </div>                        
                     

    );
  }
}

export default DatasetFooter;