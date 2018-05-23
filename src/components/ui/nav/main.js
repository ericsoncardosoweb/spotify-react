import './style.scss'

import React from 'react';  
import { Link, IndexLink } from 'react-router';

const MainNav = () => {  
  return (
    <nav>
      <IndexLink to="/" 
        activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/cats" activeClassName="active">Cats</Link>
    </nav>
  ); 
};

export default MainNav;  