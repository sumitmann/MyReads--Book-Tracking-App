import React from "react";
import Shelf from "../../components/BookShelf";
import Loading from "../../components/Loading";

function Dashboard(props) {
  const { shelf_books, isLoading, updateBookShelf } = props;
  return (
    <section className="pb-3 mb-5">
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container">
          <Shelf
            books={shelf_books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            shelfType="currentlyReading"
            handleUpdate={updateBookShelf}
          />
          <Shelf
            books={shelf_books.filter((book) => book.shelf === "wantToRead")}
            shelfType="wantToRead"
            handleUpdate={updateBookShelf}
          />
          <Shelf
            books={shelf_books.filter((book) => book.shelf === "read")}
            shelfType="read"
            handleUpdate={updateBookShelf}
          />
        </div>
      )}
    </section>
  );
}

export default Dashboard;
