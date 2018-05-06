import React from 'react'
import PropTypes from 'prop-types'

const ModalLogin = ({ userAuth }) => (
  <div id="modal-login" className="modal">
    <h2 className="modal__title">Bem Vindo!</h2>
    <p>Clique no botão a baixo para acessar sua conta.</p>
    <button className='button primary block' onClick={
      console.log('iniciar login')
    }>Acessar minha conta</button>
  </div>
)

export default ModalLogin
