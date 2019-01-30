import { excercises } from '../dataSet'
import { SUBMIT_EXCERCISE, 
         CHANGE_EXCERCISE_ELEMENT, 
         DELETE_EXCERCISE,
         SELECT_EXCERCISE_TO_EDIT } from '../actions/actionList'

// excercises = [{id:, title:, description:, muscles}, {}, ...]
const initState = {
  editMode: false,
  excercises: excercises,
  excerciseWillBeAdded: {
    id: '',
    title: '',
    description: '',
    muscles: ''
  },
}

const excerciseReducer = (state=initState, action) => {
  console.log(state.excerciseWillBeAdded)
  switch (action.type) {
    // update excerciseWillBeAdded when form elements have change
    // action has two arguments: 
    // element: 'title', 'id', ...
    // value: new value of element
    case CHANGE_EXCERCISE_ELEMENT:
      return {
        ...state,
        excerciseWillBeAdded: {
          ...state.excerciseWillBeAdded,
          // convert id = title to lowercase, replace space by dash (-)
          id: state.excerciseWillBeAdded.title.toLocaleLowerCase().replace(/ /g, '-'),
          [action.element]: action.value
        }
      }
    // action of this case has one argument: id
    case SUBMIT_EXCERCISE:
    return {
      ...state,
      editMode: false,
      excercises: [
        // remove id which already on state.excercises (if new and old are identical)
        ...state.excercises.filter((current) => current.id !== action.id),
        state.excerciseWillBeAdded
      ]
    }
    // remove all excercises have id = action.id
    // action of this case has one argument: id
    case DELETE_EXCERCISE:
      return {
        ...state,
        excercises: state.excercises.filter(current => current.id !== action.id)
      }
    // action of this case has one argument: id
    case SELECT_EXCERCISE_TO_EDIT:
      return {
        ...state,
        // if editMode = false, show content on RightPane
        // if editMode = true, show Edit form
        editMode: true,
        // fill the excercise which is selected to edit form
        // the edit form get value from excerciseWillBeAdded
        excerciseWillBeAdded: state.excercises.find(each => each.id === action.id),
        excercises: [
          // remove the excercise which is selected first
          ...state.excercises.filter((current) => current.id !== action.id)
        ]
      }

    default:
      return state
  }
  
}

export default excerciseReducer