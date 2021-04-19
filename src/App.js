import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';

import { AppRouter } from './app-router';

function App() {
  return (
    <AppRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
          <nav>
            <ul>
              <li>
                <Link className="App-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="App-link" to="/drum">
                  Drums
                </Link>
              </li>
              <li>
                <Link className="App-link" to="/user">
                  Users
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <main className="App-main"></main> */}
      </div>
    </AppRouter>
  );
}

export default App;
