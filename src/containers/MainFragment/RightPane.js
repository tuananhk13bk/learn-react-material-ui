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
    {editMode
      ? <DialogForm />
      : <Fragment>
          <Typography
          variant="display1"
          >
            {titleOnSelect}
          </Typography>
          <Typography
            variant="subheading"
            style={{marginTop: 20}}
          >
            {descriptionOnSelect}
          </Typography>
        </Fragment>
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