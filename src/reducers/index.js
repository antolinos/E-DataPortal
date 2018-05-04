import { combineReducers } from 'redux'
import user from './login'
import myData from './myData.js'
import doi from './doi.js'

export default combineReducers({
  user,
  myData,
  doi
})