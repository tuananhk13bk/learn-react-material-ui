import React, { Component, Fragment } from 'react'
import { Paper, Typography, List, IconButton } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import { connect } from 'react-redux'
import { selectLeftPane } from '../../actions/index'
import { deleteExcercise } from '../../actions/index'
import { selectExcerciseToEdit } from '../../actions/index'

import { bindActionCreators } from 'redux'

class LeftPane extends Component {
  
  render() {
    // declare props use in this class LeftPane
    const { // style config
            style, 
            // state
            muscleReducer, 
            excerciseReducer, 
            indexOnSelect,
            // action 
            selectLeftPane, 
            deleteExcercise,
            selectExcerciseToEdit,
             } = this.props

    // init state for excerciseByMuscle
    const initStateExcerciseByMuscle = muscleReducer.reduce((accum, current) => {
      return {
        ...accum,
        [current]: []
      }
    }, {})

    // excerciseByMuscle =
    // {shoulders: [{}, ...], arms: [{}, ...], ...}
    const excerciseByMuscle = excerciseReducer.reduce((accum, current) => {
      let key = current['muscles']
      if (!accum[key])
        accum[key] = []
      accum[key].push(current)
      return accum
    }, initStateExcerciseByMuscle)

    // excerciseArrayPair =
    // [['shoulders', [{}, ...]], ['arms', [{}, ...]], ...]
    const excerciseArrayPair = Object.entries(excerciseByMuscle)
    return (
      <Paper style={style.Paper} > 
        {excerciseArrayPair.map(([group, excercises], index) =>
          indexOnSelect === 0 || indexOnSelect === index + 1
            ? <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {excercises.map(({ id, title, description, muscles }) =>
                    <ListItem 
                      key={title}
                      button
                      onClick={() => selectLeftPane(title, description)}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton 
                          onClick={() => selectExcerciseToEdit(id)}
                        >
                          <Edit />
                        </IconButton>
                        <IconButton 
                          onClick={() => deleteExcercise(id)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )}
                </List>
              </Fragment>
            : null
          )}
      </Paper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    excerciseReducer: state.excerciseReducer.excercises,
    indexOnSelect: state.footerTabReducer.indexOnSelect,
    muscleReducer: state.muscleReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectLeftPane, 
                             deleteExcercise, 
                             selectExcerciseToEdit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane)