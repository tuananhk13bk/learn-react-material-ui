import { TOGGLE_DIALOG } from '../actions/actionList'

const initState = {
  isOpen: false,
  submitIsClick: false
}

const dialogReducer = (state=initState, action) => {
  console.log(state)
  switch (action.type) {
    case TOGGLE_DIALOG:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    default:
      return state
  }
}

export default dialogReducer