import React from 'react'

class SearchInput extends React.Component {

  state = {
    searchTerm : ''
  }

  handleInputChange = event => {
    this.setState({searchTerm: event.target.value});
    this.props.getSearchedBooks(event.target.value);
  }
  
  render() {
    return (
      <div className="form-group mx-sm-3 mb-4">
        <input 
          type="text"
          className="form-control"
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search by title or author..." 
          autoFocus/>
      </div>
    );
  }
}

export default SearchInput;