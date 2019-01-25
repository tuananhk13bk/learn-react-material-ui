import React, { Component, Fragment } from 'react'
import { Paper, Typography, List } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { connect } from 'react-redux'
import { selectLeftPane } from '../../actions/index'
import { bindActionCreators } from 'redux'

class LeftPane extends Component {
  
  render() {
    const { style, excerciseReducer, indexOnSelect, selectLeftPane } = this.props

    // excerciseByMuscle =
    // {shoulders: [{}, ...], arms: [{}, ...], ...}
    const excerciseByMuscle = excerciseReducer.reduce((accum, current) => {
      let key = current['muscles']
      if (!accum[key])
        accum[key] = []
      accum[key].push(current)
      return accum
    }, {})

    // excerciseArrayPair =
    // [['shoulders', [{}, ...]], ['arms', [{}, ...]], ...]
    const excerciseArrayPair = Object.entries(excerciseByMuscle)

    
    return (
      <Paper style={style.Paper} > 
        {excerciseArrayPair.map(([group, excercises], index) =>
          indexOnSelect === 0 || indexOnSelect === index + 1
            ? <Fragment>
                <Typography
                  variant="headline"
                  style={{textTransform: 'capitalize'}}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {excercises.map(({ title, description }) =>
                    <ListItem 
                      button
                      onClick={() => selectLeftPane(title, description)}
                    >
                      <ListItemText primary={title} />
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
    indexOnSelect: state.footerTabReducer.indexOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectLeftPane}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane)