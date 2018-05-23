import React, { PureComponent } from 'react'
import { render, ReactDOM } from 'react-dom'

import PropTypes from 'prop-types';

class Notify extends PureComponent {
  static defaultProps = {
    type: 'info',
    position: {
      top: 20,
      right: 20
    }
  }

  constructor(...args) {
    super(...args);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    this.modal = document.createElement('div');
    document.body.appendChild(this.modal);
    this.renderModalContent(this.props);

    console.log(this.props)
  }
  componentWillReceiveProps(newProps) {
    this.renderModalContent(newProps);
  }
  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modal);
    document.body.removeChild(this.modal);
  }
  handleClickInside(e) {
    e.stopPropagation();
  }
  handleClickOutside() {
    this.props.closeModal();
  }
  renderModalContent(props) {
    let cont = document.createElement('div');
    ReactDOM.render(
      <div className={`notify ${this.props.type} ${this.props.position}`}>
        {!!this.props.title && <h4 class="notify__title">{this.props.title}</h4>}
        {this.props.message}
        {this.props.children}
        <button class="notify__button-close" onClick={this.handleClickOutside}></button>
      </div>,
      this.modal
    );
  }

  render() {
    return null
  }
}

Notify.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired,
  title: PropTypes.string,
  position: PropTypes.object,
  autoClose: PropTypes.number
};


export default Notify