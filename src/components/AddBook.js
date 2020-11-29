import React from 'react';
import {Link} from 'react-router-dom';

function AddBook(){
  return (
    <div className="text-center p-3 bg-light">
        <Link className="btn btn-primary" to="/search">
          Add Book
        </Link>
    </div>
  );
}

export default AddBook;