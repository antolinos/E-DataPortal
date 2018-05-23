import ICAT from '../../config/icat/icat.js'

//const GET_INVESTIGATIONS_BY_USER = "query=select distinct investigation from Investigation investigation , investigation.investigationUsers as investigationUserPivot , investigationUserPivot.user as investigationUser where investigationUser.name = ':user' ORDER BY investigation.name asc limit 0, 50"
const GET_INVESTIGATIONS_BY_USER = "query=select distinct investigation from Investigation investigation , investigation.investigationUsers as investigationUserPivot , investigationUserPivot.user as investigationUser order by investigation.startDate DESC"

const GET_INVESTIGATIONS_WITH_DOI = "query=select distinct investigation from Investigation investigation , investigation.investigationUsers as investigationUserPivot , investigationUserPivot.user as investigationUser where investigation.doi <> null ORDER BY investigation.name asc "

const GET_DATASETS_BY_INVESTIGATION_ID = "query=SELECT dataset.id, dataset.name, dataset.startDate, dataset.endDate, investigation.name, parameterType.name, parameter.stringValue, parameter.numericValue, dataset.location FROM DatasetParameter as parameter JOIN parameter.dataset dataset JOIN parameter.type parameterType JOIN dataset.investigation investigation where investigation.id = :investigationId";

const GET_SESSION = "sessionId=:sessionId";
const ICAT_ENTITY_MANAGER = ICAT.server + "/icat/entityManager?";



function getSession(sessionId, user){
    return GET_SESSION.replace(":sessionId", sessionId);
}

export function getInvestigationsByUser(sessionId, user){    
    return ICAT_ENTITY_MANAGER + getSession(sessionId) + "&" + GET_INVESTIGATIONS_BY_USER.replace(":user", user) + "&server=https://icat.esrf.fr";
}

export function getInvestigationsWithDOI(sessionId, user){    
    return ICAT_ENTITY_MANAGER + getSession(sessionId) + "&" + GET_INVESTIGATIONS_WITH_DOI.replace(":user", user) + "&server=https://icat.esrf.fr";
}


export function getDatasetsByInvestigationId(sessionId, user, investigationId){        
    return ICAT_ENTITY_MANAGER + getSession(sessionId) + "&" + GET_DATASETS_BY_INVESTIGATION_ID.replace(":investigationId", investigationId) + "&server=https://icat.esrf.fr";
}

