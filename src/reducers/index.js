import footerTabReducer from './footerTabReducer'
import excerciseReducer from './excerciseReducer'

import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
   footerTabReducer,
   excerciseReducer
})

export default rootReducer
