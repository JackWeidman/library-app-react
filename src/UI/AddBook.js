import './static/AddBook.css';
import React, { useState } from 'react';

const AddBook = () => {
  const initialFormData = {
    id: '',
    title: '',
    author: '',
    genre: '',
  }
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData)
  };

  return (
    <div className="add-book">
      <button onClick={toggleOpen}>
        {isOpen ? 'Collapse' : <span className="plus-sign"></span>}
      </button>
      {isOpen && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              name='title'
              value={formData.title || ''}
              onChange={handleChange}
              placeholder="Title"
            ></input>
            <input
              name='author'
              value={formData.author || ''}
              onChange={handleChange}
              placeholder="Author"
            ></input>
            <input
              name='genre'
              value={formData.genre || ''}
              onChange={handleChange}
              placeholder="Genre"
            ></input>
            <button type="submit">
              Add Book!
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddBook;
