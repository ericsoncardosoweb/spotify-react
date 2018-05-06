import React from 'react';
import { IndexLink } from 'react-router'
import './style.scss'

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar__brand">
      <IndexLink to='/'>
        <i className="icon icon-spotify"></i>
      </IndexLink>
    </div>
  </aside> 
)

export default Sidebar;