import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'
const styles = {
  Paper: { padding: 20, 
           marginTop: 10, 
           marginBottom: 10, 
           height: 500, 
           overflowY: 'auto' }
}

const Main = () => {
  return (
    <Grid container spacing={8} >
      <Grid item xs={6}>
        <LeftPane style={styles} />
      </Grid>
      <Grid item xs={6}>
        <RightPane style={styles} />
      </Grid>

    </Grid>
  )
}

export default Main