import React from 'react'

function BookActions(props){
  const {bookId, shelfType, handleUpdate } = props;

  return (
    <div className="dropdown-menu">
      <button 
        className={`dropdown-item ${shelfType === "currentlyReading" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "currentlyReading")}
        >Start reading
      </button>
      <button 
        className={`dropdown-item ${shelfType === "wantToRead" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "wantToRead")}
        >Want to read
      </button>
      <button 
        className={`dropdown-item ${shelfType === "read" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "read")}
        >Completed
      </button>
      <button 
        className={`dropdown-item ${shelfType === "none" && 'disabled'}`}
        onClick={() => handleUpdate({id: bookId}, "none")}
        >Remove
      </button>
    </div>
  );
}

export default BookActions;