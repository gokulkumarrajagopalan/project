import React, { useState ,useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';
import ButtonGroup from '../buttonGroup'; 
function QuickSort() {

  const javaLangQuickSortCode = [
    "public class QuickSort {",
    "    public static void main(String[] args) {",
    "        int[] arr = {10, 7, 8, 9, 1, 5};",
    "        int n = arr.length;",
    "        quickSort(arr, 0, n - 1);",
    "        System.out.println(\"Sorted array: \");",
    "        printArray(arr, n);",
    "    }",
    "    public static void quickSort(int[] arr, int low, int high) {",
    "        if (low < high) {",
    "            int pi = partition(arr, low, high);",
    "            quickSort(arr, low, pi - 1);",
    "            quickSort(arr, pi + 1, high);",
    "        }",
    "    }",
    "    public static int partition(int[] arr, int low, int high) {",
    "        int pivot = arr[high];",
    "        int i = (low - 1);",
    "        for (int j = low; j < high; j++) {",
    "            if (arr[j] < pivot) {",
    "                i++;",
    "                int temp = arr[i];",
    "                arr[i] = arr[j];",
    "                arr[j] = temp;",
    "            }",
    "        }",
    "        int temp = arr[i + 1];",
    "        arr[i + 1] = arr[high];",
    "        arr[high] = temp;",
    "        return i + 1;",
    "    }",
    "    public static void printArray(int[] arr, int size) {",
    "        for (int i = 0; i < size; i++) {",
    "            System.out.print(arr[i] + \" \");",
    "        }",
    "        System.out.println();",
    "    }",
    "}"
  ];

  // C code for Quick Sort
  const cLangQuickSortCode = [
    "#include <stdio.h>",
    "void swap(int* a, int* b) {",
    "    int t = *a; *a = *b; *b = t;",
    "}",
    "int partition(int arr[], int low, int high) {",
    "    int pivot = arr[high];",
    "    int i = (low - 1);",
    "    for (int j = low; j < high; j++) {",
    "        if (arr[j] < pivot) {",
    "            i++; swap(&arr[i], &arr[j]);",
    "        }",
    "    }",
    "    swap(&arr[i + 1], &arr[high]);",
    "    return (i + 1);",
    "}",
    "void quickSort(int arr[], int low, int high) {",
    "    if (low < high) {",
    "        int pi = partition(arr, low, high);",
    "        quickSort(arr, low, pi - 1);",
    "        quickSort(arr, pi + 1, high);",
    "    }",
    "}",
    "void printArray(int arr[], int size) {",
    "    for (int i = 0; i < size; i++)",
    "        printf(\"%d \", arr[i]);",
    "    printf(\"\\n\");",
    "}",
    "int main() {",
    "    int arr[] = {10, 7, 8, 9, 1, 5};",
    "    int n = sizeof(arr) / sizeof(arr[0]);",
    "    quickSort(arr, 0, n - 1);",
    "    printf(\"Sorted array: \\n\");",
    "    printArray(arr, n);",
    "    return 0;",
    "}"
  ];

  useEffect(() => {
    // Highlight code using Prism when the component is mounted or updated
    Prism.highlightAll();
  }, []);
  const initialArray = [10, 7, 8, 9, 1, 5];

  const [array, setArray] = useState(initialArray);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [pivotIndex, setPivotIndex] = useState(null);
  const [comparedIndex, setComparedIndex] = useState(null);
  const [sortedIndices, setSortedIndices] = useState([]);

  // Quick Sort with step-by-step visuals and explanations
  const quickSort = (arr, low, high, steps) => {
    if (low < high) {
      const pi = partition(arr, low, high, steps);
      quickSort(arr, low, pi - 1, steps); // Sort left half
      quickSort(arr, pi + 1, high, steps); // Sort right half
      setSortedIndices([...sortedIndices, pi]); // Mark pivot as sorted
    }
  };

  // Partition function with steps and visuals for each loop iteration
  const partition = (arr, low, high, steps) => {
    let pivot = arr[high];
    setPivotIndex(high); // Mark the pivot index

    let i = low - 1;
    steps.push({
      array: [...arr],
      message: `New iteration: Pivot selected as ${pivot}`,
      pivotIndex: high,
      comparedIndex: null,
    });

    for (let j = low; j < high; j++) {
      setComparedIndex(j); // Mark the index being compared
      steps.push({
        array: [...arr],
        message: `Comparing ${arr[j]} with pivot (${pivot})`,
        pivotIndex: high,
        comparedIndex: j,
      });

      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap if element is less than pivot
        steps.push({
          array: [...arr],
          message: `Swapped ${arr[i]} and ${arr[j]}`,
          pivotIndex: high,
          comparedIndex: j,
        });
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Place pivot in its correct position
    steps.push({
      array: [...arr],
      message: `Placed pivot (${pivot}) in its correct position`,
      pivotIndex: i + 1,
      comparedIndex: null,
    });

    return i + 1;
  };

  // Initialize sorting steps when component is rendered
  const startSorting = () => {
    let stepsArray = [];
    let arrCopy = [...initialArray];
    quickSort(arrCopy, 0, arrCopy.length - 1, stepsArray);
    setSteps(stepsArray);
    setCurrentStep(0);
    setExplanation(stepsArray[0].message);
    setSortedIndices([]); // Reset sorted elements
  };

  // Proceed to the next step
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setArray(steps[currentStep + 1].array);
      setExplanation(steps[currentStep + 1].message);
      setPivotIndex(steps[currentStep + 1].pivotIndex);
      setComparedIndex(steps[currentStep + 1].comparedIndex);
    }
  };

  return (
    <>
    <div className="QuickSort-container">
      <h2>Quick Sort Visualization</h2>
      <div className="array-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="array-bar"
            style={{
              height: `${value * 10}px`,
              backgroundColor:
                sortedIndices.includes(index)
                  ? 'green' // Mark sorted elements in green
                  : index === pivotIndex
                  ? 'yellow' // Mark the pivot element in yellow
                  : index === comparedIndex
                  ? 'orange' // Mark the currently compared element in orange
                  : 'lightblue', // Default color
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={startSorting}>Start Sorting</button>
      <button onClick={nextStep} disabled={currentStep >= steps.length - 1}>
        Next Step
      </button>
      <div className="explanation-container">
        <h3>Explanation:</h3>
        <p>{explanation}</p>
      </div>
    </div>

<div className="QuickSort">
<h2>Quick Sort</h2>
<p>
  Quick sort is a highly efficient sorting algorithm and is based on partitioning an array into smaller sub-arrays. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.
</p>

<h3>Algorithm:</h3>
<ol>
  <li><strong>Choose a pivot:</strong> Select an element as a pivot (e.g., first, last, or middle element).</li>
  <li><strong>Partition the array:</strong> Rearrange the array so that elements less than the pivot are on the left and those greater than the pivot are on the right.</li>
  <li><strong>Recursively apply:</strong> Apply the same logic to the left and right sub-arrays until each sub-array has only one element.</li>
</ol>

<ButtonGroup
  handleLanguageChange={(language) => console.log(`Selected language: ${language}`)}
  cLangElements={cLangQuickSortCode}
  javaLangElements={javaLangQuickSortCode}
/>

<h3>Characteristics:</h3>
<ul>
  <li>Quick sort is an in-place sorting algorithm.</li>
  <li>It uses a divide-and-conquer strategy.</li>
  <li>Efficient on average, but worst-case performance occurs with poorly chosen pivots.</li>
</ul>

<h3>Complexity:</h3>
<ul>
  <li><strong>Best Case:</strong> O(n log n)</li>
  <li><strong>Average Case:</strong> O(n log n)</li>
  <li><strong>Worst Case:</strong> O(n²) - This happens when the smallest or largest element is always picked as the pivot.</li>
  <li><strong>Space Complexity:</strong> O(log n) - due to the recursive stack.</li>
</ul>

<div>
  <h3>Java Quick Sort Code:</h3>
  <pre>
    <code className="language-java">
      {javaLangQuickSortCode.join('\n')}
    </code>
  </pre>
</div>

<div>
  <h3>C Quick Sort Code:</h3>
  <pre>
    <code className="language-c">
      {cLangQuickSortCode.join('\n')}
    </code>
  </pre>
</div>
</div>
</>
  );
}

export default QuickSort;
