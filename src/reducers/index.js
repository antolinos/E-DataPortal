import { combineReducers } from 'redux'
import user from './login'
import data from './data.js'
import doi from './doi.js'

export default combineReducers({
  user,
  data,
  doi
})