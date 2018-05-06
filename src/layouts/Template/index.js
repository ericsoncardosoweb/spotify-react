import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './style.scss'

import Sidebar from './../../components/Sidebar'

import ModalLogin from './../../components/Login';

export const Template = ({ children }) => ( 
  <div className="main">
    <ModalLogin />
    <Sidebar />    
    <main className="main__content">
      {children}
    </main>
  </div>
)
Template.propTypes = {
  children: PropTypes.node,
}

export default Template
