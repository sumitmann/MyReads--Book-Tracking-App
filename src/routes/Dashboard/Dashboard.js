import React from "react";
import Shelf from "../../components/BookShelf";
import Loading from "../../components/Loading";

function Dashboard(props) {
  const { handleUpdate, isLoading, books } = props;
  return (
    <section className="pb-3 mb-5">
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="container">
          <Shelf
            books={books.filter(
              (book) => book.shelf === "currentlyReading"
            )}
            shelfType="currentlyReading"
            handleUpdate={handleUpdate}
          />
          <Shelf
            books={books.filter((book) => book.shelf === "wantToRead")}
            shelfType="wantToRead"
            handleUpdate={handleUpdate}
          />
          <Shelf
            books={books.filter((book) => book.shelf === "read")}
            shelfType="read"
            handleUpdate={handleUpdate}
          />
        </div>
      )}
    </section>
  );
}

export default Dashboard;
