import {
  FECTH_INVESTIGATIONS, 
  FECTH_INVESTIGATIONS_FULFILLED, 
  FECTH_INVESTIGATIONS_PENDING, 
  FECTH_DATASETS_BY_INVESTIGATION_ID_FULFILLED
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
        }       
    }
    var array = [];
    for (var ds in datasets){   
        array.push(datasets[ds]);
    }
    return array;
};
