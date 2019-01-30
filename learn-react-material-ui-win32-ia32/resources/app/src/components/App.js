import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from '../containers/Footer'
import MainFragment from './MainFragment'
import CssBaseline from '@material-ui/core/CssBaseline'


class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <CssBaseline /> */}
        <Header />
        <MainFragment />
        <Footer />
      </Fragment>
    )
  }
}

export default App