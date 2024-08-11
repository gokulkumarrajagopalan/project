
import React, { useState, useEffect } from 'react';


const Textbox = ({ label, placeholder, style, className }) => {
  const languages = ['C', 'C++', 'Java', 'Python', 'Kotlin', 'Ruby', 'C#', 'SQL', 'Unix'];
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    console.log(selectedOptions.join(', '));
  }, [selectedOptions]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filteredSuggestions = languages.filter((lang) =>
        lang.toLowerCase().startsWith(value.toLowerCase()) &&
        !selectedOptions.includes(lang)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedOptions([...selectedOptions, suggestion]);
    setInputValue('');
    setSuggestions([]);
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  return (
    <div className="textbox-container">
      <label className="textbox-label">{label}</label>
      <div className="textbox-input-container">
        {selectedOptions.map((option, index) => (
          <div key={index} className="textbox-selected-option">
            {option}
            <span onClick={() => handleRemoveOption(option)}>&times;</span>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder={placeholder}
          className={`textbox-input ${className}`}
          style={style}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="textbox-suggestions">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="textbox-suggestion"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Textbox;
