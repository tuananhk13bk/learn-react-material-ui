import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from '../containers/Footer'
import MainFragment from './MainFragment'



class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <MainFragment />
        <Footer />
      </Fragment>
    )
  }
}

export default App