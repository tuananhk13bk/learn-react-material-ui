import { SELECT_TAB, 
         SELECT_LEFT_PANE,
         TOGGLE_DIALOG } from './actionList'

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

export const toggleDialog = (clicked) => {
  console.log("Clicked")
  return {
    type: TOGGLE_DIALOG,
    clicked
  }
}


