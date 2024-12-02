import React, { useState, useEffect } from "react";
import ButtonGroup from "../buttonGroup"; 
import "./ArrayPage.css";

function ArrayPage() {
     const cLangElementsSection1 = [
      "// Declare and initialize an array with values in a single line",
         "    int numbers[] = {'{1, 2, 3, 4, 5}'};",
    ];
  
    const javaLangElementsSection1 = [
      "// Declare and initialize an array with values in a single line",
      "    int[] numbers = {'{1, 2, 3, 4, 5}'};",
    ];
  
    const cLangElementsSection2 = [
      "printf(\"Hello from Section 2!\\n\");",
      "// More C code for Section 2",
    ];
  
    const javaLangElementsSection2 = [
      "public class Section2 {",
      "    public static void main(String[] args) {",
      "        System.out.println(\"Hello from Section 2!\");",
      "        // More Java code for Section 2",
      "    }",
      "}",
    ];
  
    return (
      <div className="Array-header">
         <h2>Array</h2>
      <ul>
        <li>
          An array is a linear data structure used to store a collection of
          elements of the same data type in a sequential manner.
        </li>
        <li>
          Elements in an array are accessed using an index that starts from zero
          for the first element and increments by one for each subsequent
          element.
        </li>
      </ul>

      <h4>Declaration of array</h4>
        <ButtonGroup
          handleLanguageChange={(language) => console.log(` ${language}`)}
          cLangElements={cLangElementsSection1}
          javaLangElements={javaLangElementsSection1}
        />
        <ButtonGroup
          handleLanguageChange={(language) => console.log(`${language} `)}
          cLangElements={cLangElementsSection2}
          javaLangElements={javaLangElementsSection2}
        />
      </div>
    );
  }
  

  
export default ArrayPage;
