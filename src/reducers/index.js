import { combineReducers } from 'redux'
import app from './app'
import countries from './countries'

export default combineReducers({
  app,
  countries
})