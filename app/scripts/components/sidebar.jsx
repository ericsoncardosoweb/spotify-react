import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <a href="#">
          <i className="icon icon-spotify"></i>
        </a>
      </div>
    </aside> 
  )
};

export default Sidebar;