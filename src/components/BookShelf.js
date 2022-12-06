import PropTypes from 'prop-types';
import Book from './Book';

function BookShelf({ title, bookList, selectNewShelf }) {
  const books = bookList.map((book) => (
    <li key={book.id}>
      <Book book={book} selectNewShelf={selectNewShelf} />
    </li>
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{books}</ol>
      </div>
    </div>
  );
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  bookList: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectNewShelf: PropTypes.func.isRequired,
};

export default BookShelf;
