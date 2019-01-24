import { SELECT_LEFT_PANE } from '../actions/actionList'

const initState = {
  titleOnSelect: "Welcome!",
  descriptionOnSelect: "Please select a excercise from the left"
}

const leftPaneReducer = (state=initState, action) => {
  switch (action.type) {
    case SELECT_LEFT_PANE:
      return {
        ...state,
        titleOnSelect: action.titleOnSelect,
        descriptionOnSelect: action.descriptionOnSelect
      }
    default:
      return state
  }
}

export default leftPaneReducer