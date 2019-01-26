import React, { Fragment, Component } from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { changeExcerciseElement } from '../actions/index'
import { toggleDialog } from '../actions/index'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DialogForm from './DialogForm'

class CreateDialog extends Component {
  
  render() {
    const { // state
            isOpen, 
            // action
            toggleDialog,
            changeExcerciseElement
          } = this.props
    return (
      <Fragment>
        <Fab 
          aria-label="Add"
          size="small"
          // the reducer of this toggleDialog action does not use action.payload
          // so we can pass everything here
          // anw, a action always need receive something
          // {() => toggleDialog()} is not accepted
          onClick={() => {
            toggleDialog(true)
            // reset all current state of dialog form
            changeExcerciseElement('title', '')
            changeExcerciseElement('description', '')
            changeExcerciseElement('muscles', '')
          }}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={isOpen}
          onClose={() => toggleDialog(true)}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title"
          >
            Create a new excercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
              <DialogForm />
          </DialogContent>
        </Dialog>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.dialogReducer.isOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleDialog, changeExcerciseElement}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDialog)