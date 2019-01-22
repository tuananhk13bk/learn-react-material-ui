import footerTab from './footerTab'
import selectTabReducer from './selectTabReducer'
import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
   footerTab,
   selectTabReducer
})

export default rootReducer
