import React from "react";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./routes/Dashboard/Dashboard";
import Search from "./routes/Search/Search";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";

class App extends React.Component {
  state = {
    booksInShelves: [],
    isLoading: true,
  };

  fetchBooks = () =>
    BooksAPI.getAll().then((books) => {
      this.setState({ booksInShelves: books, isLoading: false });
    });

  handleUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.fetchBooks();
    });
  };

  componentDidMount() {
    return this.fetchBooks();
  }

  render() {
    return (
      <div className="app">
        <Navigation />
        <Route exact path="/">
          <Dashboard
            handleUpdate={this.handleUpdate}
            books={this.state.booksInShelves}
            isLoading={this.state.isLoading}
          />
        </Route>
        <Route exact path="/search">
          <Search
            books={this.state.booksInShelves}
            handleUpdate={this.handleUpdate}
          />
        </Route>
      </div>
    );
  }
}

export default App;
