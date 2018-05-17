import { combineReducers } from 'redux'
import user from './login'
import data from './data.js'
import doi from './doi.js'
import events from './events'

export default combineReducers({
    user,
    data,
    doi,
    events,
})