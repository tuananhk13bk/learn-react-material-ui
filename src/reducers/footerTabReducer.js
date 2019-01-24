import {  SELECT_TAB } from "../actions/actionList";
import { muscles } from '../dataSet'

const initState = {
   muscles,
   indexOnSelect: 0
}

const footerTabReducer = (state=initState, action) => {
   switch (action.type) {
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