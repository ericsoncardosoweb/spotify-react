import React from 'react';
import Search from '../components/search.jsx';
import SearchResult from '../components/searchResult.jsx';
import CardList from '../components/cardList.jsx';
// import ItemStore from '../stores/itemStore';
// import ItemActions from '../actions/itemActions';


class Home extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchInit: false,
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { 
    this.setState({
      
    });

  }

  componentWillUnmount() {

  }

  onStatusChange(state) {
    this.setState(state);
  }

  handleChange() {
    this.setState({

    });
  }

  render() {
    const searchInit = this.state.searchInit;

    return (
      <section className="entry-content">
        <div className="section">
          <Search title="Busque por artistas, álbuns ou músicas" placeholder="Comece a escrever..." />
        </div>

        <div className="section">
          {searchInit ? (
            <SearchResult />
          ) : (
              <CardList key="card-list-1" limit="5" title="Álbuns buscados recentemente" />
          )}

          {/* {!searchInit && <CardList key="card-list-2" limit="15" title="Principais Álbuns" />} */}
        </div>
        
      </section>
    );
  }
}

export default Home;