import React, { Fragment, Component } from 'react'
import { Button } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { toggleDialog } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import DialogForm from './DialogForm'

class CreateDialog extends Component {
  
  render() {
    const { isOpen, toggleDialog } = this.props
    return (
      <Fragment>
        <Fab 
          aria-label="Add"
          size="small"
          // the reducer of this toggleDialog action does not use action.payload
          // so we can pass everything here
          // anw, a action always need receive something
          // {() => toggleDialog()} is not accepted
          onClick={() => toggleDialog(null)}
        >
          <AddIcon />
        </Fab>
        <Dialog
          open={isOpen}
          onClose={() => toggleDialog(null)}
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
              <DialogForm>

              </DialogForm>
          </DialogContent>
          {/* <DialogActions>
            <Button 
              color="primary" 
              variant="contained"
              onClick = {() => }
            >
              Create
            </Button>
          </DialogActions> */}
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
  return bindActionCreators({toggleDialog}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDialog)