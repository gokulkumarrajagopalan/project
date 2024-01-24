import React, { useState } from 'react';

function FrontendPractice() {
  const [cssCode, setCssCode] = useState('');
  const [htmlCode, setHtmlCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [compiledCode, setCompiledCode] = useState('');

  const handleCompile = () => {
    // Perform compilation logic here
    const compiledResult = `Compiled code will be shown here`;
    setCompiledCode(compiledResult);
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      <h1>Developer's Hub</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Compiled Code</h2>
        <div style={{ width: '100%', height: '200px', border: '1px solid #ccc', padding: '10px' }}>
          {compiledCode}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2>CSS Code</h2>
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            style={{ width: '100%', height: '200px', padding: '10px' }}
          />
        </div>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <h2>HTML Code</h2>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            style={{ width: '100%', height: '200px', padding: '10px' }}
          />
        </div>
        <div style={{ flex: '1' }}>
          <h2>JavaScript Code</h2>
          <textarea
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
            style={{ width: '100%', height: '200px', padding: '10px' }}
          />
        </div>
      </div>
      <button onClick={handleCompile} style={{ marginTop: '20px' }}>
        Compile
      </button>
    </div>
  );
}

export default FrontendPractice;
