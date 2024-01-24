import React, { useState } from 'react';
import Editor from 'react-monaco-editor';
import './Compiler.css';
import Navbar from './compilerNavbar';
import axios from 'axios';

function Compiler() {
  const [userCode, setUserCode] = useState('');
  const [userLang, setUserLang] = useState('python');
  const [userTheme, setUserTheme] = useState('vs-dark');
  const [fontSize, setFontSize] = useState(20);
  const [userInput, setUserInput] = useState('');
  const [userOutput, setUserOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: `${fontSize}px`,
  };

  function compile() {
    setLoading(true);
    if (userCode === '') {
      return;
    }

    axios
      .post('/compile', { code: userCode, language: userLang, input: userInput })
      .then((response) => {
        setUserOutput(response.data.output);
      })
      .catch((error) => { 
        console.error(error);
        setUserOutput('An error occurred during compilation.');
      })
      .finally(() => {
        setLoading(false); 
      });
  }

  function clearOutput() {
    setUserOutput('');
  }

  return (
    <div className="App">
      <Navbar
        userLang={userLang}
        setUserLang={setUserLang}
        userTheme={userTheme}
        setUserTheme={setUserTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />
      <div className="main">
        <div className="left-container">
          <Editor
            options={options}
            height="calc(100vh - 50px)"
            width="100%"
            theme={userTheme}
            language={userLang}
            defaultValue="# Enter your code here"
            onChange={(value) => {
              setUserCode(value);
            }}
          />
          <button className="run-btn" onClick={() => compile()} disabled={loading}>
            {loading ? 'Running...' : 'Run'}
          </button>
        </div>
        <div className="right-container">
          <h4>Input</h4>
          <div className="input-box">
            <textarea id="code-inp" onChange={(e) => setUserInput(e.target.value)}></textarea>
          </div>
          <div className="output-box">
            <pre>{userOutput}</pre>
            <button onClick={() => clearOutput()} className="clear-btn">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compiler;
