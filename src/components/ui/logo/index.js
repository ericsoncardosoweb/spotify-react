import React from 'react';  
import { Link } from 'react-router-dom';

import logo from './galache.png';

const Brand = () => {  
  return (
    <div className="brand">
      <Link to='/'><img src={logo} /></Link>
    </div>
  ); 
};

export default Brand;  