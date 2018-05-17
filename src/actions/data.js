import axios from "axios"
import { 
  getInvestigationsByUser,
  getInvestigationsWithDOI,
  getDatasetsByInvestigationId 
} from '../api/icat/icat.js'

import { 
  FECTH_INVESTIGATIONS, 
  FECTH_INVESTIGATIONS_DOI, 
  FECTH_DATASETS_BY_INVESTIGATION_ID
} from '../constants/ActionTypes'

export function fetchMyInvestigations(sessionId, username) {
  return function (dispatch) {
    dispatch(
      {
        type: FECTH_INVESTIGATIONS,
        payload : axios.get(getInvestigationsByUser(sessionId, username))
      
    });
  }      
}

export function fetchInvestigationsWithDOI(sessionId, username) {
  return function (dispatch) {
    dispatch(
      {
        type: FECTH_INVESTIGATIONS_DOI,
        payload : axios.get(getInvestigationsWithDOI(sessionId, username))
      
    });
  }      
}

/*
export function fetchDatasetsByInvestigationId(sessionId, username, investigationId){  
   return function (dispatch) {
    dispatch(
      {
        type: FECTH_DATASETS_BY_INVESTIGATION_ID,
        payload : axios.get(getDatasetsByInvestigationId(sessionId, username, investigationId))      
    });
  }     
}
*/