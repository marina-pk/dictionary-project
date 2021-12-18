import "./App.css";
import "./Dictionary";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="star" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Marina Pyak and is
            <a
              href="https://github.com/marina-pk/dictionary-project"
              target="noreferrer"
              className="footer-link"
            >
              {" "}
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
