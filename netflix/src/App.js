import logo from './logo.svg';
import './App.css';
import RenderMovies from './Components/RenderMovies.js';
import Header from './Components/Header.js';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="moviesDiv">
        <RenderMovies></RenderMovies>
      </div>
    </div>
  );
}

export default App;
