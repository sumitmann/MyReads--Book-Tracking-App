import React from "react";

function Loading() {
  return (
    <div className="bookshelf_animation">
      <div className="bookshelf_wrapper">
        <ul className="books_list">
          <li className="book_item first" />
          <li className="book_item second" />
          <li className="book_item third" />
          <li className="book_item fourth" />
          <li className="book_item fifth" />
          <li className="book_item sixth" />
        </ul>
        <div className="shelf" />
      </div>
    </div>
  );
}

export default Loading;
