import { ADD_TAB, SELECT_TAB } from "../actions/actionList";
import { muscles } from '../dataSet'

const footerTab = (state=muscles, action) => {
   switch (action.type) {
      case ADD_TAB:
         return [
            ...state,
            action.index
         ]
                
      default:
         return state
      
         // return [
         //    'All',
         //    ...state
         // ]
      

   }
}

export default footerTab