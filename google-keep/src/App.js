import Header from './Components/Header';
import './App.css';
import SideBar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <hr className='hrAppjs'></hr>
      <section>
        <SideBar></SideBar>
      </section>

    </div>
  );
}

export default App;
