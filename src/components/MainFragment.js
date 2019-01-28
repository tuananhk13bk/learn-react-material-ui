import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from '../containers/MainFragment/LeftPane'
import RightPane from '../containers/MainFragment/RightPane'
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
  Paper: { padding: 20, 
           marginTop: 5, 
          //  marginBottom: 10, 
           height: 500, 
           overflowY: 'auto' }
})

const Main = ({ classes }) => {
  return (
    <Grid container spacing={8} >
      <Grid item xs={12} sm={6}>
        <LeftPane className={classes.Paper} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <RightPane className={classes.Paper} />
      </Grid>

    </Grid>
  )
}

export default withStyles(styles)(Main)