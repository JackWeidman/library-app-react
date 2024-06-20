import './static/AddBook.css';
import React, { useState } from 'react';

const AddBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
  });
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-book">
      <button onClick={toggleOpen}>
        {isOpen ? 'Collapse' : <span className="plus-sign"></span>}
      </button>
      {isOpen && (
        <div>
          <form>
            <input type="text" placeholder="Title"></input>
            <input type="text" placeholder="Author"></input>
            <input type="text" placeholder="Genre"></input>
            <button type="submit">Add Book!</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBook;
