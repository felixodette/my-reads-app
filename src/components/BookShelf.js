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

export default BookShelf;
