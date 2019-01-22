import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectTab } from '../actions/index'


const Footer = ({ footerTab, selectTabReducer, selectTab }) => (
  <Paper>
    <Tabs
      value={selectTabReducer}
      // onChange={(e, index) => {
      //   selectTab(index)
      // }}
      onChange={(e, index) => {
        selectTab(index)
      }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab key={'All'} label={'All'} />
      {footerTab.map(each => (
        <Tab 
          key={each} 
          label={each} 
        />
      ))}
      
    </Tabs>
  </Paper>
)

const mapStateToProps = state => ({
  footerTab: state.footerTab,
  selectTabReducer: state.selectTabReducer
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectTab}, dispatch)
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)

export default FooterContainer

