import footerTabReducer from './footerTabReducer'
import excerciseReducer from './excerciseReducer'
import leftPaneReducer from './leftPaneReducer'


import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
   footerTabReducer,
   excerciseReducer,
   leftPaneReducer
})

export default rootReducer
