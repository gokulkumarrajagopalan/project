import React, { useState } from 'react';
//import Editor from 'react-monaco-editor';
//import Navbar from '../Online_Compiler/NavBar'; 
import axios from 'axios'; // Import axios to make API calls

function Compiler() {

  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const apiUrl = 'http://localhost:8000/compile';

  const compileCode = async () => {
    try {
      const response = await axios.post(apiUrl, { code });
      setOutput(response.data.output.trim());
    } catch (error) {
      console.error('Error compiling code:', error);
    }
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={compileCode}>Compile</button>
      <pre>
        {output.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
    </div>
  );
}



export default Compiler;

