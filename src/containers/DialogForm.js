import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

import { addExcercise, addExcerciseElement } from '../actions/index'

const DialogForm = ({ title,
                      description,
                      muscles,
                      addExcerciseElement,
                      addExcercise }) => {
  return (
    <form>
      <TextField
        label="Title"
        value={title}
        onChange={(event) => addExcerciseElement('title', event.target.value)}
        margin="normal"
      />
      <br />
      <FormControl>
        <InputLabel htmlFor="muscles">Muscles</InputLabel>
        <Select
          value={muscles}
          onChange={(event) => addExcerciseElement('muscles', event.target.value)}
        >
          {muscles.map(each =>
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
        onChange={(event) => addExcerciseElement('description', event.target.value)}
        margin="normal"
      />
      <br />
      <Button
        color="primary"
        variant="contained"
        onClick = {() => addExcercise(true)}
      >
        Create
      </Button>

    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    muscles: state.muscleReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addExcercise, addExcerciseElement }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogForm)