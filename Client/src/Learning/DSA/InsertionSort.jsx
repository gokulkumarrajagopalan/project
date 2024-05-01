import React, { useEffect } from 'react';
import ButtonGroup from '../buttonGroup';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';


function InsertionSort(){

    const cLangIsertionSortchcode  = ["#include <stdio.h>",
    "",
    "void insertionSort(int arr[], int n) {",
    "    int i, key, j;",
    "    for (i = 1; i < n; i++) {",
    "        key = arr[i];",
    "        j = i - 1;",
    "",
    "        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position",
    "        while (j >= 0 && arr[j] > key) {",
    "            arr[j + 1] = arr[j];",
    "            j = j - 1;",
    "        }",
    "        arr[j + 1] = key;",
    "    }",
    "}",
    "",
    "void printArray(int arr[], int size) {",
    "    int i;",
    "    for (i = 0; i < size; i++)",
    "        printf(\"%d \", arr[i]);",
    "    printf(\"\\n\");",
    "}",
    "",
    "int main() {",
    "    int arr[] = {12, 11, 13, 5, 6};",
    "    int n = sizeof(arr) / sizeof(arr[0]);",
    "",
    "    printf(\"Original array: \\n\");",
    "    printArray(arr, n);",
    "",
    "    insertionSort(arr, n);",
    "",
    "    printf(\"Sorted array: \\n\");",
    "    printArray(arr, n);",
    "",
    "    return 0;",
    "}"
    ];


const javaLangIsertionSortchcode = [
    "public class InsertionSort {",
"    // Function to perform insertion sort",
"    static void insertionSort(int arr[], int n) {",
"        int i, key, j;",
"        for (i = 1; i < n; i++) {",
"            key = arr[i];",
"            j = i - 1;",
"",
"            // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position",
"            while (j >= 0 && arr[j] > key) {",
"                arr[j + 1] = arr[j];",
"                j = j - 1;",
"            }",
"            arr[j + 1] = key;",
"        }",
"    }",
"",
"    // Function to print an array",
"    static void printArray(int arr[], int size) {",
"        for (int i = 0; i < size; i++)",
"            System.out.print(arr[i] + \" \");",
"        System.out.println();",
"    }",
"",
"    public static void main(String[] args) {",
"        int arr[] = {12, 11, 13, 5, 6};",
"        int n = arr.length;",
"",
"        System.out.println(\"Original array: \");",
"        printArray(arr, n);",
"",
"        insertionSort(arr, n);",
"",
"        System.out.println(\"Sorted array: \");",
"        printArray(arr, n);",
"    }",
"}"

] ; 

    return(
        <div className="Insertionsort-container">
            <h2>Insertion Sort</h2>

            <p> 
Insertion sort is a simple sorting algorithm that iterates through an array, gradually building a sorted sequence. 
It repeatedly takes one element at a time and inserts it into its proper position in the sorted part of the array.
</p>
           
<h2>Algorithm:</h2>
<ul>
    <li>Start with the second element (index 1) of the array.</li>
    <li>Compare it with the first element.</li>
        <ul>
            <li>If it's smaller, swap them.</li>
        </ul>
    <li>Move to the third element (index 2) and insert it into its correct position among the first three elements.</li>
        <ul>
            <li>Compare with the second element and swap if needed.</li>
            <li>Compare with the first element and swap if needed.</li>
        </ul>
    <li>Continue this process for each element in the array.</li>
    <li>Insert each element into its proper place among the sorted elements to its left.</li>
    <li>The array is sorted when all elements are in their correct positions.</li>
</ul>


<ButtonGroup
          handleLanguageChange={(language) => (` ${language}`)}
          cLangElements={cLangIsertionSortchcode}
          javaLangElements={javaLangIsertionSortchcode}
        />


        
<h2>Time Complexity</h2>

<p><strong>Worst Case (O(n^2)):</strong> In the worst case, each element in the unsorted array needs to be compared and potentially swapped with every other element, resulting in a quadratic time complexity of O(n^2).</p>

<p><strong>Best Case (O(n)):</strong> In the best case, when the array is already sorted, only one pass through the array is needed, and each element is compared to its predecessor once, leading to a linear time complexity of O(n).</p>

<p><strong>Average Case (O(n^2)):</strong> On average, insertion sort requires approximately n^2/4 comparisons and n^2/4 swaps, resulting in a quadratic time complexity of O(n^2).</p>


        </div>
    );
}
export default InsertionSort;