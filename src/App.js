import logo from './logo.svg';
import WireSolver from './module_solvers/wires';
import './App.css';

function App() {
  const wires = ['RED', 'BLUE', 'YELLOW'];
  console.log(WireSolver.solve(wires, 9));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
