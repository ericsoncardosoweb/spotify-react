import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const ModalLogin = ({ userAuth }) => (
  <div id="modal-login" className="modal">
    <div className="modal__content">
      <h2 className="modal__title">Bem Vindo!</h2>
      <p>Clique no botão a baixo para acessar sua conta.</p>
      <button id="btn-follow" className='button flat primary block' onClick={
        console.log('iniciar login')
      }>Acessar minha conta</button>
    </div>
  </div>
)

export default ModalLogin