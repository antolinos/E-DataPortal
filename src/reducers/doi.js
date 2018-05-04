import {
  FECTH_INVESTIGATIONS_DOI, FECTH_INVESTIGATIONS_DOI_FULFILLED, FECTH_INVESTIGATIONS_DOI_PENDING
} from '../constants/ActionTypes'


const initialState =  {"fetching": false, "fetched": false, "investigations":[], "error": null}

const doi = (state = initialState, action) => {    
  
  switch (action.type) {
    case FECTH_INVESTIGATIONS_DOI_PENDING:{        
        state = {...state,  fetched: false, fetching: true}                
        break;
    }
    case FECTH_INVESTIGATIONS_DOI_FULFILLED: {              
        state = {...state, investigations: action.payload.data.map((object,i ) => object.Investigation), fetched: true, fetching: false}                
        break;
    }
    case FECTH_INVESTIGATIONS_DOI: {        
        state = {...state, error: action.payload.message, fetched: false, fetching: false}                
        break;
    }
    default:
        break;
  }
  return state
}

export default doi
