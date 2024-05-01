import React from 'react';
import ButtonGroup from "../buttonGroup";


function BubbleSort() {

const cLangBubbleSortCode =[
    "#include <stdio.h>",
"",
"// Function to perform Bubble Sort",
"void bubbleSort(int arr[], int n) {",
"    for (int i = 0; i < n - 1; i++) {",
"        for (int j = 0; j < n - i - 1; j++) {",
"            // Swap if the element found is greater",
"            // than the next element",
"            if (arr[j] > arr[j + 1]) {",
"                int temp = arr[j];",
"                arr[j] = arr[j + 1];",
"                arr[j + 1] = temp;",
"            }",
"        }",
"    }",
"}",
"",
"// Function to print an array",
"void printArray(int arr[], int size) {",
"    for (int i = 0; i < size; i++)",
"        printf(\"%d \", arr[i]);",
"    printf(\"\\n\");",
"}",
"",
"int main() {",
"    int arr[] = {64, 34, 25, 12, 22, 11, 90};",
"    int n = sizeof(arr) / sizeof(arr[0]);",
"",
"    printf(\"Original array: \");",
"    printArray(arr, n);",
"",
"    bubbleSort(arr, n);",
"",
"    printf(\"Sorted array: \");",
"    printArray(arr, n);",
"",
"    return 0;",
"}"


];

const javaLangBubbleSortCode =[ 
    "public class BubbleSort {",
"    // Function to perform Bubble Sort",
"    static void bubbleSort(int arr[]) {",
"        int n = arr.length;",
"        for (int i = 0; i < n - 1; i++) {",
"            for (int j = 0; j < n - i - 1; j++) {",
"                // Swap if the element found is greater",
"                // than the next element",
"                if (arr[j] > arr[j + 1]) {",
"                    int temp = arr[j];",
"                    arr[j] = arr[j + 1];",
"                    arr[j + 1] = temp;",
"                }",
"            }",
"        }",
"    }",
"",
"    // Function to print an array",
"    static void printArray(int arr[]) {",
"        int n = arr.length;",
"        for (int i = 0; i < n; i++)",
"            System.out.print(arr[i] + \" \");",
"        System.out.println();",
"    }",
"",
"    public static void main(String[] args) {",
"        int arr[] = {64, 34, 25, 12, 22, 11, 90};",
"",
"        System.out.print(\"Original array: \");",
"        printArray(arr);",
"",
"        bubbleSort(arr);",
"",
"        System.out.print(\"Sorted array: \");",
"        printArray(arr);",
"    }",
"}"


];

    return(
        <div className="Bubblesort-Container">

            <h2>Bubble Sort</h2>
            <p>Bubble sort is a basic sorting algorithm that repeatedly steps through a list of elements, compares adjacent items, and swaps them if they are in the wrong order. 
            The process is repeated until the list is sorted.
            The algorithm gets its name because smaller elements "bubble" to the top of the list during each pass. While simple, bubble sort is not very efficient and is typically not used for large datasets.</p>
  
      
    <h2>Algorithm:</h2>
    <ul>
        <li>Start with the first element of the array (outer loop).</li>
        <li>Compare the current element with the next element (inner loop).</li>
        <li>If the current element is greater than the next element, swap them.</li>
        <li>Move to the next pair of elements and repeat steps 2-3 until the end of the array.</li>
        <li>After the first pass, the largest element will be at the end of the array.</li>
        <li>Repeat the process for the remaining elements (excluding the last sorted element).</li>
        <li>Continue this process until the entire array is sorted.</li>
    </ul>

    <h2>Print Array Function:</h2>
    <ul>
        <li>Iterate through each element of the array.</li>
        <li>Print the value of each element.</li>
    </ul>

    <h2>Main Function:</h2>
    <ul>
        <li>Initialize an array with values.</li>
        <li>Print the original array.</li>
        <li>Call the bubbleSort function to sort the array.</li>
        <li>Print the sorted array.</li>
    </ul>
             <ButtonGroup
          handleLanguageChange={(language) => (` ${language}`)}
          cLangElements={cLangBubbleSortCode}
          javaLangElements={javaLangBubbleSortCode}
        />
    <h2>Time Complexity:</h2>
    <p><strong>Worst Case:</strong> O(n^2) - Occurs when the input array is in reverse order, requiring swaps for every comparison in the inner loop.</p>
    <p><strong>Average Case:</strong> O(n^2) - The average case analysis also yields O(n^2) as Bubble Sort performs a quadratic number of swaps and comparisons on average.</p>
    <p><strong>Best Case:</strong> O(n) - The best case occurs when the input array is already sorted, resulting in only one pass through the array without any swaps in the inner loop.</p>

        
        </div>
    );
}

export default BubbleSort; 