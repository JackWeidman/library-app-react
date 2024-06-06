import './App.css';
import BookObject from './BookObject';

function App() {
  return (
    <div className="App">
      <header className="App-header">Weidman Family Library</header>
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
