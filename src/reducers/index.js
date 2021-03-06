import muscleReducer from './muscleReducer'
import footerTabReducer from './footerTabReducer'
import excerciseReducer from './excerciseReducer'
import leftPaneReducer from './leftPaneReducer'
import dialogReducer from './dialogReducer'

import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
   muscleReducer,
   footerTabReducer,
   excerciseReducer,
   leftPaneReducer,
   dialogReducer
})

export default rootReducer
