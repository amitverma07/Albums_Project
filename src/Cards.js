import React, { Component } from 'react'
import CardsData from './CardsData'

//This is a parent of "CardsData.js" and passes state as a prop to "CardsData.js"
export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseItems: [
        {
          "id": 1,
          "title": "Under the Red Cloud",
          "description": "Amorphis, 2015",
          "url": "https://www.amazon.ca/Under-Red-Cloud-Amorphis-2015-10-21/dp/B01M74P7EE/ref=sr_1_3?keywords=under+the+red+cloud&qid=1579888516&s=electronics&sr=1-3-catcorr",
          "votes": 0,
          "submitterAvatarUrl": "./amit.jfif",
          "productImageUrl": "./amorphis.jpg"
        },
        {
          "id": 2,
          "title": "Twilight of the Thunder God",
          "description": "Amon Amarth, 2008",
          "url": "https://www.amazon.ca/Twilight-Thunder-God-Amon-Amarth/dp/B001CISHU4/ref=sr_1_1?keywords=amon+amarth+twilight+of+the+thunder+god&qid=1579888584&s=music&sr=1-1",
          "votes": 0,
          "submitterAvatarUrl": "./amit.jfif",
          "productImageUrl": "./twilight.jfif"
        },
        {
          "id": 3,
          "title": "Relentless Mutation",
          "description": "Archspire, 2017",
          "url": "https://www.amazon.ca/Relentless-Mutation-Archspire/dp/B073VGQDMW/ref=sr_1_1?gclid=Cj0KCQiAyKrxBRDHARIsAKCzn8zuXLaa8qcSJtAkJevPnqr-jfgWUkp2O71rTORgj6QBHIF5YqJsccQaAtbsEALw_wcB&hvadid=312011771255&hvdev=c&hvlocphy=9001172&hvnetw=g&hvpos=1t1&hvqmt=e&hvrand=6466900384173491050&hvtargid=kwd-383797004860&hydadcr=23336_10308585&keywords=relentless+mutation&qid=1579888461&sr=8-1",
          "votes": 0,
          "submitterAvatarUrl": "./amit.jfif",
          "productImageUrl": "./relentless.jfif"
        },
        {
          "id": 4,
          "title": "Algorythm",
          "description": "Beyond Creation, 2018",
          "url": "https://www.amazon.ca/Algorythm-Beyond-Creation/dp/B07G2DLVGY/ref=sr_1_1?qid=1579888556&refinements=p_32%3ABeyond+Creation&s=music&sr=1-1",
          "votes": 0,
          "submitterAvatarUrl": "./amit.jfif",
          "productImageUrl": "./beyond.jfif"
        }
      ]      
    }
  }

  //First, I used custom hooks to increase the counter but i was not able to apply the sort then i took help from "zach and dragon" to work this thing out.
  incrementItem = (idNum) => {
    this.setState({votes: this.state.databaseItems.map(item => {
      if (item.id === idNum) {
        item.votes = item.votes + 1
      }
      return item;
    })})
    this.state.databaseItems.sort((a, b) => b.votes - a.votes);
  }

  render() {
    return (
      <div>
        <CardsData displayContent={this.state.databaseItems} votesData={this.incrementItem} />
      </div>
    )
  }
}
