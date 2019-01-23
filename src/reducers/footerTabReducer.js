import { ADD_TAB, SELECT_TAB } from "../actions/actionList";
import { muscles } from '../dataSet'

const initState = {
   muscles,
   indexOnSelect: undefined
}

const footerTabReducer = (state=initState, action) => {
   switch (action.type) {
      case ADD_TAB:
         return {
            ...state,
            muscles: [...state.muscles, action.muscles]
         }
      case SELECT_TAB:
         return {
            ...state,
            indexOnSelect: action.index
         }
      default:
         return state

   }
}

export default footerTabReducer