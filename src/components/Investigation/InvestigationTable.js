import React from 'react';
import Moment from 'react-moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './InvestigationTable.css';

class InvestigationTable extends React.Component {
  constructor(props) {
    super(props);                    
    this.state = {
         investigations : this.props.data.investigations,
         fetching : this.props.data.fetching,
    }
  }
  componentDidMount(){
    
  }

  doiFormatter(cell, row) {   // String example    
    if (cell != null) {    
         return `<span class='doiBadge borderRadius-5 font-1p4rem'>DOI<a id='doiLink' target='_blank' href='https://doi.esrf.fr/${cell}' >${cell}</a></span>`;
    }
  }

  dateFormatter(cell, row) {   // String example    
    if (cell != null) {          
        return <Moment parse="YYYY-MM-DD HH:mm" format="DD/MM/YYYY">${cell}</Moment>;
    }
  }

  volumeFormatter(cell, row) {   // String example    
    return "<kbd style='background-color:#E8E8E8;color:gray;'>" + Math.floor((Math.random() * 100) + 1) + " GB </kbd>";    
  }

  datasetFormatter(cell, row) {   // String example    
    return "<kbd style='background-color:#E8E8E8;color:gray;'>" + Math.floor((Math.random() * 10000) + 100) + "</kbd>";    
  }

   nameFormatter(cell, row) {   // String example         
    return `<a href='/investigation/${row.id}'><span class="glyphicon glyphicon-circle-arrow-right"> ${cell} </span></a>`;    
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
            data={ this.state.investigations } 
            options={ options }
            pagination
            striped
            search          
            hover
            condensed> 
            <TableHeaderColumn width='10%' hidden isKey dataField='id'>id</TableHeaderColumn>           
            <TableHeaderColumn width='10%'  dataFormat={ this.nameFormatter } dataField='name'>Name</TableHeaderColumn>
            <TableHeaderColumn dataSort width='5%' dataField='visitId'>Beamline</TableHeaderColumn>
            <TableHeaderColumn dataSort dataField='summary'>Title</TableHeaderColumn>
            <TableHeaderColumn width='5%' dataFormat={ this.datasetFormatter }>Datasets</TableHeaderColumn>
            <TableHeaderColumn width='5%'  dataFormat={ this.volumeFormatter }>Volume</TableHeaderColumn>
            <TableHeaderColumn dataSort width='5%' dataField='startDate' dataFormat={ this.dateFormatter }>Date</TableHeaderColumn>  
             <TableHeaderColumn dataSort width='5%' dataField='releaseDate' dataFormat={ this.dateFormatter }>Release</TableHeaderColumn>            
            <TableHeaderColumn width='15%' dataFormat={ this.doiFormatter } dataField='doi'></TableHeaderColumn>
          </BootstrapTable>
      </div>

    );
  }
}

export default InvestigationTable;