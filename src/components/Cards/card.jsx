import React, { PropTypes } from 'react';
import './style.scss'

const Card = ({link, image, title, description}) => (
  <div className="card">
    <div className="card__figure">
      <a href={link}>
        <img src={image}/>
      </a>
    </div>

    <div className="card__content">
      <h4 className="card__title"><a href={link}>{title}</a></h4>
      <p><a href={link}>{description}</a></p>
    </div>
  </div> 
)

Card.PropTypes = {
  link: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired
}

export default Card;