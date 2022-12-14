import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

function Search({ bookList, selectNewShelf, addNewBook }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (searchQuery !== '') {
      BooksAPI.search(searchQuery, 20).then((res) => {
        if (res.error) {
          // eslint-disable-next-line no-console
          console.log(res.error, " didn't find anything");
          setSearchResults([]);
          return;
        }
        setSearchResults(res);
      });
    }
  }, [searchQuery]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchQuery !== '' ? (
            searchResults.map((ele) => {
              let book = {};
              let isNewBook = true;
              // eslint-disable-next-line no-plusplus
              for (let i = 0; i < bookList.length; i++) {
                if (ele.id === bookList[i].id) {
                  book = { ...bookList[i] };
                  isNewBook = false;
                  break;
                }
                book = { ...ele };
              }
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    selectNewShelf={isNewBook ? addNewBook : selectNewShelf}
                  />
                </li>
              );
            })
          ) : (
            <h1>Nothing To Show Yet...</h1>
          )}
        </ol>
      </div>
    </div>
  );
}

Search.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectNewShelf: PropTypes.func.isRequired,
  addNewBook: PropTypes.func.isRequired,
};

export default Search;
