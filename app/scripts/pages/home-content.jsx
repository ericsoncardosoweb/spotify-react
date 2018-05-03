import React, {PropTypes} from 'react'
import Search from '../components/search.jsx';
import SearchResult from '../components/searchResult.jsx';
import CardList from '../components/cardList.jsx';

const HomeContent = ({ userAuth, searchInit, albumsMoreRecents, albumsRecentSearch}) => (
  <section className="entry-content">
    <div className="section">
      <Search title="Busque por artistas, álbuns ou músicas" placeholder="Comece a escrever..." />
    </div>

    <div className="section">
      {!!searchInit ? (
        <SearchResult />
      ) : (
        <div>
            {!!albumsMoreRecents.length &&
              <CardList limit="5" title="Álbuns buscados recentemente" albums={albumsMoreRecents} />
            }

            {!!albumsRecentSearch.length &&
              <CardList limit="15" title="Principais Álbuns" albums={albumsRecentSearch} />
            }
        </div>
      )}

    </div>

  </section>
)

HomeContent.PropTypes = {
  userAuth: PropTypes.object.isRequired,
  searchInit: PropTypes.boolean,
  albumsMoreRecents: PropTypes.array.isRequired,
  albumsRecentSearch: PropTypes.array.isRequired
}

export default HomeContent