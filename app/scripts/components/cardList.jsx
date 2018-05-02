import React, { Component } from 'react'
import Card from './card.jsx'

export class CardList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const albums = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    return (
      <div className="cards">
        <h3 className="cards__title">{this.props.title}</h3>
        <div className="cards__list">
          {
            albums.map((item, index) => {
              return <div key={index} className="cards__list__item"><Card key={index} /></div>
            })
          }
        </div>
      </div>
    )
  }

}

CardList.defaultProps = {
  
}

export default CardList