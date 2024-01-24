import React from 'react';
import Select from 'react-select';
import './CompilerNavbar.css';

const Navbar = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cs', label: 'C#' },
    { value: 'rb', label: 'Ruby' },
    { value: 'kt', label: 'Kotlin' },
    { value: 'swift', label: 'Swift' },
  ];

  const themes = [
    { value: 'vs-dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];

  return (
    <div className="navbar">
      <Select
        className="select-lang"
        value={userLang}
        options={languages}
        onChange={(selectedOption) => setUserLang(selectedOption.value)}
      />
      <Select
        className="select-theme"
        value={userTheme}
        options={themes}
        onChange={(selectedOption) => setUserTheme(selectedOption.value)}
      />
    </div>
  );
};

export default Navbar;
