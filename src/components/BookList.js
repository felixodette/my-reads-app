import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

function BookList({ bookList, selectNewShelf }) {
  const currentlyReading = [];
  const wantToRead = [];
  const read = [];
  bookList.forEach((ele) => {
    if (ele.shelf === 'currentlyReading') {
      currentlyReading.push(ele);
    } else if (ele.shelf === 'wantToRead') {
      wantToRead.push(ele);
    } else if (ele.shelf === 'read') {
      read.push(ele);
    }
  });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            bookList={currentlyReading}
            selectNewShelf={selectNewShelf}
          />
          <BookShelf
            title="Want To Read"
            bookList={wantToRead}
            selectNewShelf={selectNewShelf}
          />
          <BookShelf
            title="Read"
            bookList={read}
            selectNewShelf={selectNewShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectNewShelf: PropTypes.func.isRequired,
};

export default BookList;
