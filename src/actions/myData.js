import axios from "axios"
import { 
  getInvestigationsByUser,
  getInvestigationsWithDOI } from '../api/icat/icat.js'

import { FECTH_INVESTIGATIONS, FECTH_INVESTIGATIONS_DOI} from '../constants/ActionTypes'

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

