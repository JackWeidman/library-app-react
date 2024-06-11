import './static/BookObject.css';
import React from 'react';

export default function BookObject({ book }) {
  return (
    <div className="book-object">
      <h2>{book.title}</h2>
      <h2>by</h2>
      <h2>{book.author}</h2>
    </div>
  );
}
