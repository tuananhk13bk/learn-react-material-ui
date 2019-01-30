import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import { submitExcercise, changeExcerciseElement } from '../actions/index'
import { toggleDialog } from '../actions/index'


const DialogForm = ({ // style config
                      // state
                      id,
                      title,
                      description,
                      muscleOnSelect,
                      muscleReducer,
                      editMode,
                      // action
                      changeExcerciseElement,
                      submitExcercise,
                      toggleDialog,
                    }) => {
  return (
    <form>
      <TextField
        label="Title"
        // value={title}
        value={title}
        onChange={(event) => changeExcerciseElement('title', event.target.value)}
        margin="normal"
        fullWidth
      />
      <br />
      <FormControl fullWidth>
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select
          value={muscleOnSelect}
          onChange={(event) => changeExcerciseElement('muscles', event.target.value)}
        >
          {muscleReducer.map(each =>
            <MenuItem
              key={each}
              value={each}
            >
              {each}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <br />
      <TextField
        label="Description"
        multiline
        rows="4"
        value={description}
        onChange={(event) => changeExcerciseElement('description', event.target.value)}
        margin="normal"
        fullWidth
      />
      <br />
      {editMode
        ? <Button
            color="primary"
            variant="contained"
            onClick = {() => {
              submitExcercise(id)
            }}
          >
            Edit
          </Button>
        : <Button
            color="primary"
            variant="contained"
            onClick = {() => {
              toggleDialog(true)
              submitExcercise(id)
            }}
          >
            Create
          </Button>
      }
      
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    muscleReducer: state.muscleReducer,
    id: state.excerciseReducer.excerciseWillBeAdded.id,
    title: state.excerciseReducer.excerciseWillBeAdded.title,
    description: state.excerciseReducer.excerciseWillBeAdded.description,
    muscleOnSelect: state.excerciseReducer.excerciseWillBeAdded.muscles,
    editMode: state.excerciseReducer.editMode
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({submitExcercise, 
                             changeExcerciseElement,
                             toggleDialog }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogForm)