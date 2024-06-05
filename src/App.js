
import './App.css';

function MyForm() {
  return (
    <form>
      <label>Enter your name:</label>
      <input type="text"></input>
    </form>
  );
}

const products = [
  { label: 'Item 1', id: 1 },
  { label: 'Item 2', id: 2 },
  { label: 'Item 3', id: 3 },
];


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
      </header>
      <div className="App-header">
        <h1>This is a new div</h1>
      </div>
    </div>
  );
}

export default App;
