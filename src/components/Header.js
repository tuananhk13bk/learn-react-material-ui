import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../containers/CreateDialog'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  flex: {
    flex: 1
  }
}

const Header = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography className={classes.flex} variant="headline" color="inherit" >
        Excercise Database
      </Typography>
      <CreateDialog />
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)