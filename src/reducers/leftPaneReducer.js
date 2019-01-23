import { SELECT_LEFT_PANE } from '../actions/actionList'

const initState = {
  titleOnSelect: "",
  descriptionOnSelect: ""
}

const leftPaneReducer = (state=initState, action) => {
  console.log(state)
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