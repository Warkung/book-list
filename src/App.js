import React, { useEffect, useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const responses = await axios.get("http://localhost:3001/books");
    setBooks(responses.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBooks = async (title) => {
    const responses = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, responses.data];
    return setBooks(updatedBooks);
  };

  const editBooksById = async (id, newTitle) => {
    const responses = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...responses.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBooksById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>READING LIST</h1>
      <BookList
        books={books}
        onDelete={deleteBooksById}
        onEdit={editBooksById}
      />
      <BookCreate onCreate={createBooks} />
    </div>
  );
}

export default App;
