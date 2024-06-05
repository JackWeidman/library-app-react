import './App.css';
import { useState } from 'react';
import TestComponent from './Component';
import BookObject from './BookObject';

function MyButton(){
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function MyForm() {

  function handleClick(){
    alert('You clicked me!');
  }
  return (
    <form>
      <label>Enter your name:</label>
      <input type="text"></input>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
}

const products = [
  { label: 'Item 1', id: 1 },
  { label: 'Item 2', id: 2 },
  { label: 'Item 3', id: 3 },
];

function ItemsList() {
  const listItems = products.map((product) => (
    <li key={product.id}>{product.label}</li>
  ));
  return <ul>{listItems}</ul>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello there.
          <br />
          How do you do?
        </h1>
        <MyForm />
        <ItemsList />
        <MyButton />
        <MyButton />
        <TestComponent />
        <BookObject />
      </header>
      <div className="App-header">
        <h1>This is a new div</h1>
      </div>
    </div>
  );
}

export default App;
