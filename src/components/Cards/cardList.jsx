import React, {PropTypes} from 'react'
import Card from './card.jsx'

const CardList = ({id, title, albums}) => (
  <div className="cards">
    <h3 className="cards__title">{title}</h3>
    <div className="cards__list">
      {
        albums.map((item, index) => {
          return <div key={index} className="cards__list__item">
            <Card 
              image={item.image}
              title={item.name}
              description={item.artists}
              link={item.link}
            />
          </div>
        })
      }
    </div>
  </div>
)

CardList.defaultProps = {
  id: ''
}

CardList.PropTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  albums: PropTypes.array
}

export default CardList