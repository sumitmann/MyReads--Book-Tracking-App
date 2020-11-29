import React, { Fragment } from 'react';
import BookCard from './BookCard';

function SearchedBooks(props) {
  const {books, handleUpdate} = props;
  return (
    <Fragment >
      {books.map(book => (
        <div className="col-xl-3 col-lg-4 col-6 mt-4 pt-2 d-flex flex-column justify-content-between" key={book.id}>
          <BookCard
            book={book}
            handleUpdate={handleUpdate}
            shelfType={book.shelf} />
        </div>
      ))}
    </Fragment>
  );
}

export default SearchedBooks;
