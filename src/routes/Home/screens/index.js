import React, { Component } from 'react'
import HomeContent from './container.jsx'


class HomeView extends Component {
  constructor() {
    super()
    this.state = {
      userAuth: false,
      searchInit: false,
      albumsMoreRecents: [
        {
          image: 'http://via.placeholder.com/172x172',
          name: 'Nome do Album',
          artists: 'Nome do Artista',
          link: '#'
        },
        {
          image: 'http://via.placeholder.com/172x172',
          name: 'Nome do Album 2',
          artists: 'Nome do Artista',
          link: '#'
        }
      ],
      albumsRecentSearch: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {

    
  }

  componentWillReceiveProps(nextProps) {


  }

  componentWillUnmount() {

  }

  handleChange() {

  }

  render() {
    return <HomeContent
      userAuth={this.state.userAuth}
      searchInit={this.state.searchInit}
      albumsMoreRecents={this.state.albumsMoreRecents}
      albumsRecentSearch={this.state.albumsRecentSearch}
    />
  }
}

export default HomeView