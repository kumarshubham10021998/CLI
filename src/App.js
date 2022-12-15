import logo from './Vector.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{zIndex:1}} />
      
        <a
          className="App-link"
          href="https://www.propelleraero.com/dirtmate/"
          target="_blank"
          rel="noopener noreferrer"
          style={{zIndex:2}}
        >
          Propeller
        </a>
      </header>
    </div>
  );
}

export default App;
