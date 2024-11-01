import { useEffect, useState } from 'react'
import BookComponent from '../components/All_books';
import BookForm from '../components/BookFile';

import './App.css'

function App()  {
  const [books, setBooks] = useState([]);
  const [Title, setTitle] = useState("");
  const [Genre, setGenre] = useState("");
  const [Author, setAuthor] = useState("");
  const [Publish_date, setPublishDate] = useState("2000-01-01");
  const [Number_pages, setNumberPages] = useState(0);
  const [Book_cover, setBookCover] = useState("");
  const [isShowBooks, setIsShowBooks] = useState(false);
  const [isAddBooks, setIsAddBooks] = useState(false);

  const HandleClick_ShowBooks = () => { 
    setIsShowBooks(!isShowBooks);
    setIsAddBooks(false);
  };

  const HandleClick_AddBooks = () => {
    setIsAddBooks(!isAddBooks);
    setIsShowBooks(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try{
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (err){
      console.log(err);
    }
  };

  const addBook = async () => {
    const bookData = {
      Title,
      Genre,
      Author,
      Publish_date,
      Number_pages,
      Book_cover,
    };
    try{
    const response = await fetch("http://127.0.0.1:8000/api/books/add/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    const data = await response.json();
    setBooks((prev) => [...prev, data]);

  } catch(err){
    console.log(err);
  }
  };

  const deleteBook = async (pk) =>{
    try{
    const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
    method: "DELETE",
    });
    setBooks((prev) => prev.filter((book) => book.id !== pk))
    } catch(err){
    console.log(err);
    }
  };

  const UpdateTitle = async (pk,Genre,Author,Publish_date ,Number_pages,Book_cover) => {
    const bookData = {
      Title: New_Title,
      Genre,
      Author,
      Publish_date,
      Number_pages,
      Book_cover,
    };

    try{
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
  
      const data = await response.json();
  setBooks((prev) =>
    prev.map((book) => {
      if(book.id === pk){
        return data;
      }else {
        return book;
      }
    })
  );
  } catch(err){
      console.log(err);
  }
  };

 
  return (
    <>
      <h1>Library</h1>

        <div className='Buttons'>
        <button onClick={() => HandleClick_AddBooks()}>Add Books</button>
        <button onClick={() => HandleClick_ShowBooks()}>Show Books</button>
        </div>

        {isAddBooks && (
          <BookForm
            setTitle={setTitle}
            setGenre={setGenre}
            setAuthor={setAuthor}
            setPublishDate={setPublishDate}
            setNumberPages={setNumberPages}
            setBookCover={setBookCover}
            addBook={addBook}
          />
        )}
        
        {isShowBooks && (books.map((book) => (
          <BookComponent
            key={book.id}
            book={book}
            UpdateTitle={UpdateTitle}
            deleteBook={deleteBook}
          />
        )))}
    </>
  );  
};

export default App;