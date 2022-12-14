import PropTypes from 'prop-types';

function Book({ book, selectNewShelf }) {
  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks?.thumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf || 'none'}
              onChange={(e) => selectNewShelf(e, book)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors?.join(', ')}</div>
      </div>
    </div>
  );
}

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
  selectNewShelf: PropTypes.func.isRequired,
};

export default Book;
