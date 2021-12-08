import "./App.css";
import "./Dictionary";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Marina Pyak</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
