import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit} />
    );
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
