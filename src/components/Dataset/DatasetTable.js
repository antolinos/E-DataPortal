import React from 'react';
import Moment from 'react-moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './DatasetTable.css';

class DatasetTable extends React.Component {
  constructor(props) {
    super(props);    
  }
  componentDidMount(){
    
  }

  render() {   
    if (this.props.fetching){
            return "Loading";
    }
    const options = {
      paginationSize: 5,
      sizePerPage: 25,
      paginationShowsTotal: true,
      hidePageListOnlyOnePage: true
    };
    

    return (        
        <div className='investigation-table-container'>
          <BootstrapTable
            data={ this.props.datasets } 
            options={ options }
            pagination
            striped
            search          
            hover
            condensed> 
            <TableHeaderColumn width='10%' hidden isKey dataField='id'>id</TableHeaderColumn>           
            <TableHeaderColumn width='10%'  dataField='name'>Name</TableHeaderColumn>
          </BootstrapTable>
      </div>

    );
  }
}

export default DatasetTable;