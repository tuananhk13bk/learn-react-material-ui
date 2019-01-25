import { excercises } from '../dataSet'
import { ADD_EXCERCISE, ADD_EXCERCISE_ELEMENT } from '../actions/actionList'

// excercises = [{id:, title:, description:, muscles}, {}, ...]
const initState = {
  excercises: excercises,
  excerciseWillBeAdded: {
    id: '',
    title: '',
    description: '',
    muscles: ''
  }
}

const excerciseReducer = (state=initState, action) => {
  console.log(state.excerciseWillBeAdded)
  let id = ""
  switch (action.type) {
    
    case ADD_EXCERCISE_ELEMENT:
      // if (action.element = "title") {
      //   id = action.value.toLocaleLowerCase().replace(/ /g, '-')
      // } else id = ""
      return {
        ...state,
        excerciseWillBeAdded: {
          ...state.excerciseWillBeAdded,
          id: state.excerciseWillBeAdded.title.toLocaleLowerCase().replace(/ /g, '-'),
          [action.element]: action.value
        }
      }
    case ADD_EXCERCISE:
      return {
        ...state,
        excercises: [...state.excercises, state.excerciseWillBeAdded]
      }
    default:
      return state
  }
  
}

export default excerciseReducer