import { SELECT_TAB, 
         SELECT_LEFT_PANE,
         TOGGLE_DIALOG,
         SUBMIT_EXCERCISE,
         CHANGE_EXCERCISE_ELEMENT,
         DELETE_EXCERCISE,
         SELECT_EXCERCISE_TO_EDIT } from './actionList'

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
  return {
    type: TOGGLE_DIALOG,
    clicked
  }
}

export const changeExcerciseElement = (element, value) => {
  return {
    type: CHANGE_EXCERCISE_ELEMENT,
    element,
    value
  }
}

export const submitExcercise = (id) => {
  return {
    type: SUBMIT_EXCERCISE,
    id
  }
}

export const deleteExcercise = (id) => {
  return {
    type: DELETE_EXCERCISE,
    id
  }
}

export const selectExcerciseToEdit = (id) => {
  return {
    type: SELECT_EXCERCISE_TO_EDIT,
    id
  }
}





