import React, { Fragment } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { connect } from 'react-redux'


const RightPane = ({ style, 
                     titleOnSelect,
                     descriptionOnSelect }) => (
  <Paper style={style.Paper}>
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
  </Paper>
)

const mapStateToProps = (state) => {
  return {
    titleOnSelect: state.leftPaneReducer.titleOnSelect,
    descriptionOnSelect: state.leftPaneReducer.descriptionOnSelect,
    excerciseReducer: state.excerciseReducer
  }
}

export default connect(mapStateToProps)(RightPane)