import { SELECT_TAB } from '../actions/actionList'

const selectTabReducer = (state=0, action) => {
   
   switch (action.type) {
      case SELECT_TAB:
         return action.index
      default:
         return state
      
   }
}

export default selectTabReducer