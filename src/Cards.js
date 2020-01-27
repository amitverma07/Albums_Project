import React, { Component } from 'react'
import CardsData from './CardsData'

//This is a parent of "CardsData.js" and passes state as a prop to "CardsData.js"
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseItems: ''
    }
  }
  
  //Get the data from the "Database.json" file and set the data from database to state
  componentDidMount() {
    fetch("./Database.json")
      .then(response => response.json())
      .then(json => this.setState({ databaseItems: json }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <CardsData dataForDisplay={this.state.databaseItems} />
      </div>
    )
  }
}
