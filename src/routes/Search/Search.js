import React from "react";
import SearchInput from "../../components/SearchInput";
import Loading from "../../components/Loading";
import NoBookFound from "../../components/NoBookFound";
import SearchedBooks from "../../components/SearchedBooks";
import * as BooksAPI from "../../utils/BooksAPI";

class Search extends React.Component {
  state = {
    matchedBooks: [],
    isLoading: false,
    noResult: false,
    searchText: "",
  };

  updateShelfs = (booksFound) => {
    const booksInShelf = this.props.books;
    booksFound.forEach((book) => {
      const matchedBook = booksInShelf.find(
        (bookInShelf) => bookInShelf.id === book.id
      );
      if (matchedBook) {
        book.shelf = matchedBook.shelf;
      } else {
        book.shelf = "none";
      }
    });
    return booksFound;
  }

  searchBooks = (searchTerm) => {
    this.setState({ noResult: false });
    if (searchTerm.trim().length !== 0) {
      BooksAPI.search(searchTerm).then((booksFound) => {
        if (Array.isArray(booksFound)) {
          this.setState({ matchedBooks: booksFound, noResult: false, isLoading: false });
        } else if ("error" in booksFound) {
          this.setState({ matchedBooks: [], noResult: true, isLoading: false });
        }
      });
    } else {
      this.setState({
        matchedBooks: [],
        noResult: true,
        isLoading: false,
        searchText: "",
      });
    }
  };

  render() {
    const updatedSearchedBooks = this.updateShelfs(this.state.matchedBooks);
    return (
      <section className="pb-3 my-5">
        <div className="container">
          <SearchInput searchBooks={this.searchBooks} />
          {this.state.noResult && this.state.searchText.length !== 0 && (
            <NoBookFound searchText={this.state.searchText} />
          )}
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <div className="row">
              <SearchedBooks
                books={updatedSearchedBooks}
                handleUpdate={this.props.handleUpdate}
              />
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Search;
