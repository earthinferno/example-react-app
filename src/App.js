import logo from './logo.svg'
import './App.css'

import { HelloWorld } from './components/hello-world/hello-world'
import { ContextModule } from './modules/context-module/context.module'

function App() {
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
      <main className="App-main">
        <HelloWorld />
        <ContextModule />
      </main>
    </div>
  )
}

export default App
