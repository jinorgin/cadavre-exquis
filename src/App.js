import './App.css';
import { useState } from 'react';
import WritingForm from './components/WritingForm';
import LineList from './components/LineList';
import ModeToggle from './components/ModeToggle';

function App() {

  const [lines, setLines] = useState([]);
  const [mode, setMode] = useState("writing");

  const addLine = function (line, arthor) {
    const newLines = [...lines, { line, arthor, key: lines.length }];
    setLines(newLines);
  };

  const lastLine = [...lines].pop();

  const switchMode = function () {
    setMode(mode === "writing" ? "reading" : "writing");
  };



  return (
    <div className="App">
      <WritingForm  {...{ lastLine, addLine }} />
      <LineList {...{ lines, mode }} />
      <ModeToggle {...{ mode, switchMode }} />
    </div>
  );
}

export default App;
