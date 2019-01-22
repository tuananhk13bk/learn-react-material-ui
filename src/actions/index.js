import { SELECT_TAB, ADD_TAB } from './actionList'


export const addTab = muscles => ({
  type: ADD_TAB,
  muscles
})

// export const selectTab = index => ({
//   type: SELECT_TAB,
//   payload: index
  
// })

export const selectTab = index => {
  return {
    type: SELECT_TAB,
    index
  }
}
