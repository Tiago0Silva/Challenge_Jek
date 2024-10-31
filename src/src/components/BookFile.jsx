import React from 'react';

const BookForm = ({ setTitle, setGenre, setAuthor, setPublishDate, setNumberPages, setBookCover, addBook }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Book Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book genre..."
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author..."
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="date"
        placeholder="Publish date..."
        onChange={(e) => setPublishDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of pages..."
        onChange={(e) => setNumberPages(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cover URL..."
        onChange={(e) => setBookCover(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
