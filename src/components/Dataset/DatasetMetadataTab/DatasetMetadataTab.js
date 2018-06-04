import React from 'react';
import Moment from 'react-moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './DatasetMetadataTab.css';

class DatasetMetadataTab extends React.Component {
  constructor(props) {    
    super(props);         
     
  } 
  componentDidMount(){
    
  }

  render() {     
    console.log(this.props.dataset)  
    debugger    
    const options = {
      paginationSize: 10,
      sizePerPage: 25,
      paginationShowsTotal: true,
      hidePageListOnlyOnePage: true
    };
    var keys = Object.keys(this.props.dataset).sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));  
    var data = [];
    
    for (var index in keys){
        data.push({
          key : keys[index],
          value : this.props.dataset[keys[index]]
        })
    } 
    return (
      <div style={{padding:10}}>
      <BootstrapTable
            data={ data } 
            options={ options }
            pagination
            striped
            search          
            hover
            condensed> 
                       
            <TableHeaderColumn width='10%'  isKey dataField='key'>Name</TableHeaderColumn>
            <TableHeaderColumn dataSort width='90%' dataField='value'>Value</TableHeaderColumn>
          
          </BootstrapTable>          
                     
          </div>
    );
  }
}

export default DatasetMetadataTab;