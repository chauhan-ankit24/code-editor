import './App.css';
import Editor from './Editor.jsx'

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <h1 className="center-text">r e a c t - s i m p l e - c o d e - e d i t o r</h1>
        <p className="center-text-sub">A simple no-frills code editor with syntax highlighting.</p>
        <button className="github-button">Github</button>
      </div>
      <Editor />
    </div>
  );
}

export default App;
