import React, {Fragment} from 'react';
import blankImage from '../assets/blank.png';
import BookActions from './BookActions';

function BookCard(props) {
  const {book, shelfType, handleUpdate} = props;
  const bookThumb = (book.imageLinks && book.imageLinks.smallThumbnail)|| blankImage;
  const title = book.title || 'No Title';
  const authors = book.authors || 'No author';
  return (
    <Fragment>
      <div className="card shadow-sm rounded">
        <div className="card-img-box">
          <div className="card-img-box-bg"
            style={{backgroundImage : 'url(' + bookThumb  +')'}}></div>
          <img className="card-img-top" src={bookThumb} alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{authors.toString()}</p>
          <div className="dropdown dropleft">
            <button className={`btn btn-sm shadow rounded btn-${shelfType!== 'none' ? 'primary' : 'secondary'}`} data-toggle="dropdown">
              &#8943;
            </button>
            <BookActions bookId={book.id} shelfType={shelfType} handleUpdate={handleUpdate} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BookCard;