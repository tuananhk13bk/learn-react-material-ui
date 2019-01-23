import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const RightPane = ({ style }) => (
  <Paper style={style.Paper}>
    <Typography
      variant="display1"
    >
      Welcome!
    </Typography>
    <Typography
      variant="subheading"
      style={{marginTop: 20}}
    >
      Please select excercise from the list on the left...
    </Typography>
  </Paper>
)

export default RightPane