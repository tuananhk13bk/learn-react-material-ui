import { SELECT_TAB, 
         SELECT_LEFT_PANE,
         TOGGLE_DIALOG,
         ADD_EXCERCISE,
         ADD_EXCERCISE_ELEMENT } from './actionList'

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

export const addExcerciseElement = (element, value) => {
  
  // let id
  // if (element="title") {
  //   id = value.toLocaleLowerCase().replace(/ /g, '-')
  // } else id = ""
  console.log(element + value)
  return {
    type: ADD_EXCERCISE_ELEMENT,
    // id,
    element,
    value
  }
}

export const addExcercise = (clicked) => {
  return {
    type: ADD_EXCERCISE
  }
}


