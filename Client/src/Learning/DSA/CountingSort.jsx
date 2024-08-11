import React, { useState } from 'react';
import Textbox from "../../Components/Textbox";

function CountingSort() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="CountingSort-container">
      <h2>Counting Sort</h2>
      <Textbox
        label="Enter a programming language:"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
        style={{ width: '300px', padding: '10px', margin: '10px 0' }}
        className="textbox"
      />
    </div>
  );
}

export default CountingSort;
