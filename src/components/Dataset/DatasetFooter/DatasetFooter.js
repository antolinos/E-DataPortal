import React from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BeatLoader } from 'react-spinners';
import './DatasetFooter.css';

class DatasetFooter extends React.Component {
  getStorageStatus() {
    var random = Math.random();
    if (random >= 0.5) {
      const tooltip = (
        <Tooltip id="tooltip">
          <strong>Dataset is available for downloading</strong> <br />Click on Download to start the download.
        </Tooltip>
      );

      return <OverlayTrigger placement="left" overlay={tooltip}>
        <Button bsStyle="primary">
          <span class="glyphicon glyphicon-download-alt"></span> Download
                    </Button>
      </OverlayTrigger>;
    }
    else {
      if (random < 0.2) {
        const tooltip = (
          <Tooltip id="tooltip">
            <strong>Dataset is being restored</strong>
          </Tooltip>
        );

        return <OverlayTrigger placement="left" overlay={tooltip}>
         
         <div style={{ 'display': 'inline-block'}}> 
       
         <div style={{ 'display': 'inline-block'}}> 
           
            <BeatLoader
              color={'#336600'} size={10}
              loading={true}
              />
              </div>             
         
             
               </div>
        </OverlayTrigger>;


      }
    }



    const tooltip = (
      <Tooltip id="tooltip">
        <strong>Dataset is archived</strong> <br />Click on Restore to restore from tape.
        </Tooltip>
    );

    return <OverlayTrigger placement="left" overlay={tooltip}>
      <Button bsStyle="warning">
        <span class="glyphicon glyphicon-transfer"></span> Restore
                    </Button>
    </OverlayTrigger>;
  }

  getRandomFilesCount() {
    return Math.floor((Math.random() * 100) + 1);
  }
  render() {
    return (

      <div className="container-fluid">
        <div className="pull-left">
          <span style={{ color: 'orange' }}>{this.getRandomFilesCount()} files ({this.getRandomFilesCount()} GB)</span>
        </div>
        <div className="pull-right">
          {this.getStorageStatus()}

        </div>
      </div>


    );
  }
}

export default DatasetFooter;