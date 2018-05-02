import React, { Component } from 'react'

export class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isFocus: false,
      value: ''
    }
  }

  render() {
    return (
      <div className="search">
          <label htmlFor="search-input">{this.props.title}</label>
          <input
              type="text"
              placeholder={this.props.placeholder}
              ref="search"
              value={this.state.value}
              onChange={(e) => {
                this.setState({
                  value: e.target.value
                })
              }}
              onFocus={(e) => {
                this.setState({
                  isFocus: true
                })
                e.target.parentElement.classList.add("focus")
              }}
              onBlur={(e) => {
                this.setState({
                  isFocus: false
                })
                e.target.parentElement.classList.remove("focus")
              }}
              id="search-input"
          />

      </div>
    )
  }

}

Search.defaultProps = {
  title: "Busca",
  placeholder: "Pesquisar por..."
}

export default Search