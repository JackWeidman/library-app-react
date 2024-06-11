import './static/AddBook.css';
import React, { useState } from 'react';

const AddBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="add-book">
      <button onClick={toggleOpen}>{isOpen ? 'Collapse' : 'Add Book'}</button>
      {isOpen && (
        <div>
          <form>
            <label>Title:</label>
            <input type="text"></input>
            <label>Author:</label>
            <input type="text"></input>
            <label>Genre:</label>
            <input type="text"></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBook;