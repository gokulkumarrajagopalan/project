
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-c"; // Import the 'c' component for C language support
import "./buttongroup.css";

function ButtonGroup({ handleLanguageChange, cLangElements, javaLangElements }) {
  const [language, setLanguage] = useState("c");
  const [copyStatus, setCopyStatus] = useState("");

  const copyToClipboard = () => {
    const codeToCopy =
      (language === "c" ? cLangElements : javaLangElements).join("\n");
    navigator.clipboard
      .writeText(codeToCopy)
      .then(() => {
        setCopyStatus("Copied..!");
        setTimeout(() => {
          setCopyStatus("");
        }, 1000);
      })
      .catch(() => setCopyStatus("Copy Failed"));
  };

  useEffect(() => {
    Prism.highlightAll(); 
  }, [cLangElements, javaLangElements]);

  const renderSyntax = (selectedLangElements) => {
    return (
      <div className="code-section">
        <div className="copy-button-container">
          <button
            className={`copy-button ${copyStatus && "copied"}`}
            onClick={copyToClipboard}
          >
            {copyStatus || "Copy Code"}
          </button>
        </div>
        <pre className={`language-c`}>
          <code className={`language-c`}>
            {selectedLangElements.join("\n")}
          </code>
        </pre>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="button-group">
        <button
          className={`btnC ${language === "c" ? "active" : ""}`}
          onClick={() => {
            setLanguage("c");
            handleLanguageChange("c");
          }}
        >
          C
        </button>
        <button
          className={`btnJava ${language === "java" ? "active" : ""}`}
          onClick={() => {
            setLanguage("java");
            handleLanguageChange("java");
          }}
        >
          Java
        </button>
      </div>
      <div className="code-section-container">
        {renderSyntax(language === "c" ? cLangElements : javaLangElements )
}
      </div>
    </div>
  );
}

export default ButtonGroup; 
