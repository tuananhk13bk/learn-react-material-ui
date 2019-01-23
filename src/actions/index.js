import { SELECT_TAB, ADD_TAB, SELECT_LEFT_PANE } from './actionList'


export const addTab = muscles => ({
  type: ADD_TAB,
  muscles
})

export const selectTab = index => {
  
  return {
    type: SELECT_TAB,
    index
  }
  
}

export const selectLeftPane = (titleOnSelect, descriptionOnSelect) => {
  return {
    type: SELECT_LEFT_PANE,
    titleOnSelect,
    descriptionOnSelect
  }
}
