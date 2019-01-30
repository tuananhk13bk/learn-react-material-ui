import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import DialogForm from '../DialogForm'

const RightPane = ({ // style config
                     className,
                     // state
                     titleOnSelect,
                     descriptionOnSelect,
                     editMode
                     // action
                    }) => (
  <Paper className={className}>
    <Typography
      color='secondary'
      variant="display1"
      gutterBottom
    >
      {titleOnSelect}
    </Typography>
    {editMode
      ? <DialogForm />
      : <Typography
            variant="subheading"
          >
            {descriptionOnSelect}
        </Typography>
    }
  </Paper>
)

const mapStateToProps = (state) => {
  return {
    titleOnSelect: state.leftPaneReducer.titleOnSelect,
    descriptionOnSelect: state.leftPaneReducer.descriptionOnSelect,
    excerciseReducer: state.excerciseReducer,
    editMode: state.excerciseReducer.editMode
  }
}

export default connect(mapStateToProps)(RightPane)