import React, { Component, Fragment } from 'react'
import { Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { connect } from 'react-redux'

class LeftPane extends Component {
  
  render() {
    const { style, excerciseReducer } = this.props

    const excerciseByMuscle = excerciseReducer.reduce((accum, current) => {
      let key = current['muscles']
      if (!accum[key])
        accum[key] = []
      accum[key].push(current)
      return accum
    }, {})

    const excerciseArrayPair = Object.entries(excerciseByMuscle)

    return (
      <Paper style={style.Paper} > 
        {excerciseArrayPair.map(([group, excercises]) =>
          <Fragment>
            <Typography
              variant="headline"
              style={{textTransform: 'capitalize'}}
            >
              {group}
            </Typography>
            <List component="ul">
              {excercises.map(({ title }) =>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              )}
              
            
            </List>
          </Fragment>
        )}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    excerciseReducer: state.excerciseReducer
  }
}

const LeftPaneContainer = connect(mapStateToProps)(LeftPane)

export default LeftPaneContainer