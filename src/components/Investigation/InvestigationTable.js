import React from 'react';
import Moment from 'react-moment';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
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

  doiFormatter(cell, row) {       
    if (cell != null) {    
         return <span className='doiBadge borderRadius-5 font-1p4rem'>DOI<a id='doiLink' target='_blank' rel='noopener noreferrer'  href='https://doi.esrf.fr/${cell}' >{cell}</a></span>;
    }
    return <span className='glyphicon glyphicon-lock'></span>;
  }

  dateFormatter(cell, row) {       
    if (cell != null) {          
        return <Moment parse="YYYY-MM-DD HH:mm" format="DD/MM/YYYY">${cell}</Moment>;
    }
  }

  volumeFormatter(cell, row) {       
    return <kbd style={{'backgroundColor':'#E8E8E8','color':'orange'}}>{Math.floor((Math.random() * 100) + 1)} GB </kbd>;    
  }

  datasetFormatter(cell, row) {      
    return <kbd style={{'backgroundColor':'#E8E8E8','color':'orange'}}>{Math.floor((Math.random() * 10000) + 100)} </kbd>;    
  }

  beamlineFormatter(cell, row) {      
    return cell.toUpperCase();    
  }

   nameFormatter(cell, investigation) {          
     return <Link to={`/investigation/${investigation.id}`}>
       <span className="glyphicon glyphicon-circle-arrow-right"> {cell} </span>
     </Link>
  }

  render() {   
    if (this.props.fetching){
            return "Loading";
    }
    const options = {
      paginationSize: 10,
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
            <TableHeaderColumn dataSort width='5%' dataField='visitId' dataFormat={ this.beamlineFormatter }>Beamline</TableHeaderColumn>
            <TableHeaderColumn dataSort dataField='summary'>Title</TableHeaderColumn>
            <TableHeaderColumn width='5%' dataFormat={ this.datasetFormatter }>Datasets</TableHeaderColumn>
            <TableHeaderColumn width='5%'  dataFormat={ this.volumeFormatter }>Volume</TableHeaderColumn>
            <TableHeaderColumn dataSort width='5%' dataField='startDate' dataFormat={ this.dateFormatter }>Date</TableHeaderColumn>  
             <TableHeaderColumn dataSort width='5%' dataField='releaseDate' dataFormat={ this.dateFormatter }>Release</TableHeaderColumn>            
            <TableHeaderColumn width='15%' dataFormat={ this.doiFormatter } dataField='doi' dataAlign='center'></TableHeaderColumn>
          </BootstrapTable>
      </div>

    );
  }
}

export default InvestigationTable;