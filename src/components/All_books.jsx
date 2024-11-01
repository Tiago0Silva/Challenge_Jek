import React, { useState } from 'react';

const BookComponent = ({ book, UpdateTitle, deleteBook }) => {
  const [newTitle, setNewTitle] = useState('');

  return (
    <div key={book.id} className="book">
      <div className="bookinfo">
        <img src={book.Book_cover} alt="Book cover" />
        <div className= "WrittenInfo">
          <p>Title: {book.Title}</p>
          <p>Genre: {book.Genre}</p>
          <p>Author: {book.Author}</p>
          <p>Publish Date: {book.Publish_date}</p>
          <p>Number of Pages: {book.Number_pages}</p>
        </div>
      </div>
      <div className="Buttons">
        <input
          type="text"
          placeholder="New Title..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={() => UpdateTitle(book.id)}>Change Title</button>
        <button onClick={() => deleteBook(book.id)}>Delete</button>
      </div>
    </div>
  );
};

export default BookComponent;
