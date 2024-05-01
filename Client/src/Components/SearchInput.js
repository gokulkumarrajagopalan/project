// SearchButton.js
import React, { useState } from 'react';
import searchicon from '../Shared/Images/search_icon.png';
import Filtericon from '../Shared/Images/filtericon.png';

const SearchButton = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInput = (e) => {
    const inputValue = e.target.value;
    setSearchValue(inputValue);
  };

  const handleSearch = () => {
    onSearch(searchValue); // Pass the search value to the parent component
  };

  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const inputContainerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const inputStyle = {
    padding: '10px',
    border: '2px solid white',
    borderRadius: '4px',
    fontSize: '16px',
    width: '350px',
    backgroundColor: '#ffffff',
    color: '#000000',
    outline: 'none',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: 'white',
    color: 'blue',
    border: 'none',
    borderRadius: '9px',
    display: 'inline',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const filterbuttonStyle = {
    innerHeight: '10vh',
    padding: '10px',
    border: '2px solid white',
    borderRadius: '4px',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    color: '#000000',
    outline: 'none',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',

    padding: '9px',
    backgroundColor: 'white',
    color: 'blue',
    border: 'none',

    display: 'inline',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const iconStyle = {
    marginLeft: '10px',
    width: '20px',
  };

  return (
    <div style={containerStyle} className="search-container">
      <div style={inputContainerStyle}>
        <input
          type="text"
          style={inputStyle}
          className="search-input"
          placeholder="Search..."
          onChange={handleSearchInput}
        />
        <button style={filterbuttonStyle} className="Filterbutton">
          <img src={Filtericon} alt="Filtericon" style={iconStyle} />
        </button>
        <button style={buttonStyle} className="Searchbutton" onClick={handleSearch}>
          <img src={searchicon} alt="Search Icon" style={iconStyle} />
        </button>
      </div>
    </div>
  );
};

export default SearchButton;
