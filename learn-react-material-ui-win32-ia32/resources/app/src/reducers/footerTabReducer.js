import {  SELECT_TAB } from "../actions/actionList";

const initState = {
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