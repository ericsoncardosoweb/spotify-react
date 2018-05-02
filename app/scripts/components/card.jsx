import React from 'react';
import ReactDom from 'react-dom'; 

const Card = ({children, props}) => {
  
    return (
      <div className="card">
        <div className="card__figure">
          <a href="#">
            <img src="http://via.placeholder.com/172x172"/>
          </a>
        </div>

        <div className="card__content">
          <h4 className="card__title"><a href="#">Nome do álbum</a></h4>
          <p><a href="#">Nome do artista</a></p>
        </div>
      </div> 
    );                               
};

Card.propTypes = {
  // loading : React.PropTypes.bool,
  // items : React.PropTypes.array
}

export default Card;