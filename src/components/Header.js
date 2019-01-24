import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../containers/CreateDialog'


const Header = (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}} >
        Excercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
)

export default Header