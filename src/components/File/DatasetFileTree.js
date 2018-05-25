import React from 'react';
import axios from "axios"
import { Panel} from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './react-bootstrap-treeview.css'
import { getFilesByDatasetId } from '../../api/icat/icat.js'

class DatasetFileTree extends React.Component {
  constructor(props) {
    super(props); 

    this.onClick = this.onClick.bind(this);

    this.state = {
      files : [],
      fetched : false,
      username: this.props.username,
      sessionId: this.props.sessionId,
    }               
  }
 
  componentDidMount(){    
  }

  getStorageStatus(){
    if (Math.random() >= 0.5){
        return <kbd style={{'backgroundColor':'green'}}>ONLINE</kbd>;
    }
    return <div><kbd style={{'backgroundColor':'orange'}}>ARCHIVED</kbd></div>;
  }

  getDatasetVolume(){
   
        return <kbd style={{'backgroundColor':'blue'}}>{Math.floor((Math.random() * 100) + 1)} GB</kbd>;
    
    
  }


  onClick(){
    
    if (!this.state.fecthed){  
          
      axios.get(getFilesByDatasetId(this.state.sessionId, this.state.username, this.props.dataset.id))
        .then(res => {          
          this.setState({      
            files : res.data.map(row => row.Datafile),
            fetching : true
          });          
        })
        .catch((error) => {                          
            if (error.response) {             
                if (error.response.status == 403){
                    this.props.doLogOut();
                }
            }
        });
    }
  }


  render() { 
   const options = {
      paginationSize: 10,
      sizePerPage: 25,
      paginationShowsTotal: true,
      hidePageListOnlyOnePage: true
    };
    

    return (  <Panel>
          <Panel.Heading>
            <Panel.Title toggle onClick={this.onClick}>                             
                <div className="container-fluid">
                  <div className="pull-left">                    
                    {this.props.dataset.name}                                
                  </div>
                  <div className="pull-right">    
                              
                         {this.getStorageStatus()}                                      
                  </div>         
              </div>

            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>  
                <BootstrapTable
                            data={ this.state.files } 
                            options={ options }
                            pagination
                            striped
                            search          
                            hover
                            condensed> 
                            <TableHeaderColumn width='10%' hidden isKey dataField='id'>id</TableHeaderColumn>                                                                                                      
                            <TableHeaderColumn width='80%' dataField='location' >location</TableHeaderColumn>  
                            <TableHeaderColumn width='20%' dataField='fileSize' >Size</TableHeaderColumn>  
                                                     
                          </BootstrapTable>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      );
  }
}

export default DatasetFileTree;