import React, {Fragment} from 'react';
import BookCard from './BookCard';
import ShelfHeader from './ShelfHeader';
import AddBook from './AddBook';

function ShelfBook(props) {
  const {books, shelfType, handleUpdate} = props;
  const booksCount = books.length || false;
  return (
    <Fragment>
      <ShelfHeader shelfType={shelfType} booksCount={booksCount}/>
      { !booksCount && (<AddBook />)}
      { booksCount && ( <div className="row">
        {books.map(book => (
          <div className="col-xl-3 col-lg-4 col-6 mt-4 pt-2 d-flex flex-column justify-content-between" key={book.id}>
            <BookCard book={book} handleUpdate={handleUpdate} shelfType={book.shelf} />
          </div>
        ))}
      </div>
      )}
    </Fragment>
  );
}

export default ShelfBook;