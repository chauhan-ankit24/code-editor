import './App.css';
import Editor from './Editor.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <h1 className="center-text">r e a c t - s i m p l e - c o d e - e d i t o r</h1>
        <p className="center-text-sub">A simple no-frills code editor with syntax highlighting.</p>
        <a href="https://github.com/chauhan-ankit24/code-editor" target="_blank">
          <button className="github-button">Github</button>
        </a>

      </div>
      <Editor />
    </div>
  );
}

export default App;
