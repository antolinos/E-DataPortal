import React from 'react';

import './DatasetFooter.css';

class DatasetFooter extends React.Component {
  getStorageStatus(){
    if (Math.random() >= 0.5){
        return <kbd style={{'backgroundColor':'green'}}>ONLINE</kbd>;
    }
    return <div><kbd style={{'backgroundColor':'orange'}}>ARCHIVED</kbd></div>;
  }

  getRandomFilesCount(){
    return  Math.floor((Math.random() * 100) + 1);
  }
  render() {          
    return (        
                        
      <div className="container-fluid">
            <div className="pull-left">      
                {this.getStorageStatus()}
            </div>
            <div className="pull-right">              
                <span style={{color:'orange'}}>{this.getRandomFilesCount()} files ({this.getRandomFilesCount()} GB)</span>                           
            </div>         
      </div>                        
                     

    );
  }
}

export default DatasetFooter;