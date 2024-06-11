import './App.css';
import BookObject from './BookObject';
import AddBook from './AddBook';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>Weidman Family Library <AddBook /></nav>
        </header>
      <div className="App-background">
        
      <div className="book-container">
        <BookObject />
        <BookObject />
        <BookObject />
        <BookObject />
        <BookObject />
        <BookObject />
        
      </div>
      </div>
    </div>
  );
}

export default App;
