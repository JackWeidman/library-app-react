import './App.css';
import BookObjectList from './UI/BookObjectList.js';
import AddBook from './UI/AddBook';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>Weidman Family Library <AddBook /></nav>
        </header>
      <div className="App-background">
        
      <div className="book-container">
        <BookObjectList />
      </div>
      </div>
    </div>
  );
}

export default App;
