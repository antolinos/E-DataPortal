import {
  FECTH_INVESTIGATIONS, 
  FECTH_INVESTIGATIONS_FULFILLED, 
  FECTH_INVESTIGATIONS_PENDING, 
  FECTH_DATASETS_BY_INVESTIGATION_ID_FULFILLED,
  FECTH_DATASETS_BY_INVESTIGATION_ID_REJECTED
} from '../constants/ActionTypes'


const initialState =  {"fetching": false, "fetched": false, "investigations":[], "error": null}

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
  
    default:
        break;
  }
  return state
}

export default data


