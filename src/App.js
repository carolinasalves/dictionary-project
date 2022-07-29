import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://elegant-florentine-6694bd.netlify.app/work.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carolina Alves
            </a>
            , it's open-sourced on{" "}
            <a
              href="https://github.com/carolinasalves/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://main--gleaming-melba-cb2338.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
