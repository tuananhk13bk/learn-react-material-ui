import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from '../actions/index'


const Footer = ({ 
                  // state
                  muscles, indexOnSelect, 
                  // action
                  selectTab 
                }) => (
  <Paper>
    <Tabs
      value={indexOnSelect}
      onChange={(e, index) => {
        selectTab(index)
      }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab key={'All'} label={'All'} />
      {muscles.map(each => (
        <Tab 
          key={each} 
          label={each} 
        />
      ))}
      
    </Tabs>
  </Paper>
)

const mapStateToProps = state => ({
  muscles: state.muscleReducer,
  indexOnSelect: state.footerTabReducer.indexOnSelect
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectTab}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer)

