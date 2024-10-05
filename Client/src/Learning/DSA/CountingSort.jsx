import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';


function CountingSort() {
  const [array, setArray] = useState([4, 2, 2, 8, 3, 3, 1]);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [countArray, setCountArray] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [currentElement, setCurrentElement] = useState(null); // State for the current element
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    Prism.highlightAll(); // To highlight syntax on first render
  }, []);

  const countingSort = (arr) => {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const steps = [];

    // Count the occurrences
    arr.forEach((num, index) => {
      count[num]++;
      steps.push({
        array: [...arr],
        countArray: [...count],
        currentElement: index, // Track the current element index
        explanation: `Incrementing count for element ${num}`,
      });
    });

    // Accumulate the counts
    for (let i = 1; i < count.length; i++) {
      count[i] += count[i - 1];
      steps.push({
        array: [...arr],
        countArray: [...count],
        currentElement: i, // Track the current index
        explanation: `Updating cumulative count at index ${i}`,
      });
    }

    // Sort the array
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
      steps.push({
        array: [...output],
        countArray: [...count],
        currentElement: i, // Track the current index
        explanation: `Placing element ${arr[i]} in the sorted array`,
        sortedIndices: [...output.keys()],
      });
    }

    setSteps(steps);
    setCountArray(count);
    setCurrentStep(0);
    setExplanation(steps[0].explanation);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setArray(steps[currentStep + 1].array);
      setCountArray(steps[currentStep + 1].countArray);
      setExplanation(steps[currentStep + 1].explanation);
      setSortedIndices(steps[currentStep + 1].sortedIndices || []);
      setCurrentElement(steps[currentStep + 1].currentElement); // Update current element being processed
    }
  };

  return (
    <div className="CountingSort-container">
      <h2>Counting Sort Visualization</h2>

      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value * 10}px`,
              backgroundColor: index === currentElement ? 'orange' : sortedIndices.includes(index) ? 'green' : 'lightblue',
            }}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="count-array-container">
        {countArray.map((value, index) => (
          <div key={index} className="count-bar">
            {index} ({value})
          </div>
        ))}
      </div>

      <button onClick={() => countingSort(array)}>Start Counting Sort</button>
      <button onClick={nextStep} disabled={currentStep >= steps.length - 1}>
        Next Step
      </button>

      <div className="explanation-container">
        <h3>Explanation:</h3>
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default CountingSort;
