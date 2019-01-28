import React from 'react'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from '../actions/index'
import withWidth from '@material-ui/core/withWidth'

const Footer = ({ 
                  // style config
                  width,
                  // state
                  muscles, indexOnSelect, 
                  // action
                  selectTab 
                }) => (
  <AppBar position='static' >
    <Tabs
      value={indexOnSelect}
      onChange={(e, index) => {
        selectTab(index)
      }}
      indicatorColor="secondary"
      textColor="secondary"
      // xs mean extra small (on mobile device)
      centered={width !== 'xs'}
      variant={(width === 'xs') ? "scrollable" : null}
    >
      <Tab key={'All'} label={'All'} />
      {muscles.map(each => (
        <Tab 
          key={each} 
          label={each} 
        />
      ))}
      
    </Tabs>
  </AppBar>
)

const mapStateToProps = state => ({
  muscles: state.muscleReducer,
  indexOnSelect: state.footerTabReducer.indexOnSelect
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectTab}, dispatch)
}


export default withWidth()(connect(mapStateToProps, mapDispatchToProps)(Footer))

