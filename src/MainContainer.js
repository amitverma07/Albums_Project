import React, { Component } from 'react'
import Header from './Header'
import Cards from './Cards'

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Cards />
      </div>
    );
  }
}