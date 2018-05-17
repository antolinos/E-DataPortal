import {
  FECTH_INVESTIGATIONS, 
  FECTH_INVESTIGATIONS_FULFILLED, 
  FECTH_INVESTIGATIONS_PENDING, 
  FECTH_DATASETS_BY_INVESTIGATION_ID_FULFILLED,
  FECTH_DATASETS_BY_INVESTIGATION_ID_REJECTED
} from '../constants/ActionTypes'


const initialState =  {"fetching": false, "fetched": false, "investigations":[], "error": null, datasets : []}

const data = (state = initialState, action) => {    
  
  switch (action.type) {
    case FECTH_INVESTIGATIONS_PENDING:{
        state = {...state,  fetched: false, fetching: true}                
        break;
    }
    case FECTH_INVESTIGATIONS_FULFILLED: {      
        state = {...state, investigations: action.payload.data.map((object,i ) => object.Investigation), fetched: true, fetching: false}                
        break;
    }
    case FECTH_INVESTIGATIONS: {        
        state = {...state, error: action.payload.message, fetched: false, fetching: false}                
        break;
    }
    case FECTH_DATASETS_BY_INVESTIGATION_ID_FULFILLED:{
        /** this groups by column 0 that correspond to investigationId */                
        let datasets = parametersToDatasetObject(groupBy(action.payload.data, 0));        
        state = {...state, datasets: datasets, fetched: true, fetching: false}     
        break;
    }
    case FECTH_DATASETS_BY_INVESTIGATION_ID_REJECTED:{
        // TODO: this should be managed properly    
        if (action.payload.error){
            alert(action.payload);
        }
        state = {...state, fetched: false, fetching: false}     
        break;
    }
    default:
        break;
  }
  return state
}

export default data


var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

var parametersToDatasetObject = function(parametersGroupedByInvestigationId){
    let datasets = {};    
    for (var datasetId in parametersGroupedByInvestigationId){        
        for (var index in parametersGroupedByInvestigationId[datasetId]){
            var param = parametersGroupedByInvestigationId[datasetId][index];
            var key = param[5];
            var value = param[6];
            if (datasets[datasetId] == null){
                datasets[datasetId] = {};
            }
             datasets[datasetId][key] = value;
            /** Some metadata at level of dataset to be added as parameters of the dataset */    
             datasets[datasetId]["id"] =  param[0];
             datasets[datasetId]["name"] =  param[1];
             datasets[datasetId]["startDate"] =  param[2];
             datasets[datasetId]["endDate"] =  param[3];
             datasets[datasetId]["investigationName"] =  param[4];
        }       
    }

    var array = [];
    for (var ds in datasets){           
        array.push(datasets[ds]);
    }
    return array;
};
