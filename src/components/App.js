import React, { Component, Fragment } from 'react'
import Header from '../containers/Header'
import Footer from '../containers/Footer'
import Main from '../containers/MainFragment/Main'
import { muscles, excercises } from '../dataSet'


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App