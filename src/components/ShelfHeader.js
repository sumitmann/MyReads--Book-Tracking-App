import React from 'react';


function ShelfHeader(props) {
  const ShelfHeader = {
    currentlyReading : "Currently Reading",
    wantToRead : "Want To Read",
    read : "Completed Reading"
  };
  const {shelfType, booksCount} = props;
  return (
    <div className="p-3 mt-5 bg-light shadow-sm border rounded">
      <h5 className="shelf-heading">{ShelfHeader[shelfType]} <span className="badge badge-secondary">{booksCount}</span></h5>
    </div>
  );
}

export default ShelfHeader;