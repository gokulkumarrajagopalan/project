import React from 'react';
import ButtonGroup from "../buttonGroup";


function SelectionSort() {
    const cLangSelectionSortCode = [
        "#include <stdio.h>",
"",
"void selectionSort(int arr[], int n) {",
"    int i, j, min_index;",
"",
"    for (i = 0; i < n-1; i++) {",
"        // Find the index of the minimum element in the unsorted part",
"        min_index = i;",
"        for (j = i+1; j < n; j++) {",
"            if (arr[j] < arr[min_index]) {",
"                // Swap the found minimum element with the first element",
"                int temp = arr[i];",
"                arr[i] = arr[j];",
"                arr[j] = temp;",
"            }",
"        }",
"    }",
"}",
"",
"void printArray(int arr[], int size) {",
"    for (int i=0; i < size; i++) {",
"        printf(\"%d \", arr[i]);",
"    }",
"    printf(\"\\n\");",
"}",
"",
"int main() {",
"    int arr[] = {64, 25, 12, 22, 11};",
"    int n = sizeof(arr)/sizeof(arr[0]);",
"",
"    printf(\"Unsorted array: \\n\");",
"    printArray(arr, n);",
"",
"    selectionSort(arr, n);",
"",
"    printf(\"Sorted array: \\n\");",
"    printArray(arr, n);",
"",
"    return 0;",
"}"

    ];

    const javaLangSelectionSortCode = [ "public class SelectionSort {",
    "    void selectionSort(int arr[]) {",
    "        int n = arr.length;",
    "",
    "        for (int i = 0; i < n-1; i++) {",
    "            int minIndex = i;",
    "            for (int j = i+1; j < n; j++) {",
    "                if (arr[j] < arr[minIndex]) {",
    "                    int temp = arr[i];",
    "                    arr[i] = arr[j];",
    "                    arr[j] = temp;",
    "                }",
    "            }",
    "        }",
    "    }",
    "",
    "    void printArray(int arr[]) {",
    "        int n = arr.length;",
    "        for (int i = 0; i < n; i++) {",
    "            System.out.print(arr[i] + \", \");",
    "        }",
    "        System.out.println();",
    "    }",
    "",
    "    public static void main(String args[]) {",
    "        int arr[] = {64, 25, 12, 22, 11};",
    "        int n = arr.length;",
    "",
    "        System.out.print(\"\\\"Unsorted array\\\": \");",
    "        new SelectionSort().printArray(arr);",
    "",
    "        new SelectionSort().selectionSort(arr);",
    "",
    "        System.out.print(\"\\\"Sorted array\\\": \");",
    "        new SelectionSort().printArray(arr);",
    "    }",
    "}"
    

    ];

    return(
            <div className='selectionSort-ontainer'> 
            <h3>Selection Sort </h3>
            <p>Selection sort is a simple comparison-based sorting algorithm that divides the input list into two parts:
                 the sorted and the unsorted sublists. The algorithm repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted sublist and swaps it with the first unsorted element. 
                 This process is repeated until the entire list is sorted. 
                Selection sort has a time complexity of O(n^2), making it inefficient for large datasets, but it is easy to understand and implement.</p>
            


    <h2> Algorithm </h2>

    <p><strong>Initialization:</strong>
    Start with the first element as the minimum (consider it as the minimum for now).</p>

    <p><strong>Iteration (Outer Loop):</strong>
    For each element in the array (except the last one), do the following:
        <ul>
            <li>Assume the current element is the minimum.</li>
        </ul>
    </p>

    <p><strong>Inner Loop:</strong>
    Iterate through the remaining unsorted elements.
        <ul>
            <li>Compare each element with the assumed minimum.</li>
            <li>If a smaller element is found, update the minimum index.</li>
        </ul>
    </p>

    <p><strong>Swap:</strong>
    Swap the element at the current index of the outer loop with the element at the minimum index found in the inner loop.</p>

    <p><strong>Repeat:</strong>
    Repeat steps 2-4 until the entire array is sorted.</p>




                <ButtonGroup
          handleLanguageChange={(language) => (` ${language}`)}
          cLangElements={cLangSelectionSortCode}
          javaLangElements={javaLangSelectionSortCode}
        />

        <h2>Selection Sort Time Complexity</h2>

<p><strong>Best Case (O(n^2)):</strong> Even in the best situation, selection sort takes a long time because it needs to repeatedly go through the entire list to find the smallest element.</p>

<p><strong>Average Case (O(n^2)):</strong> On average, selection sort has a slow performance, as it doesn't take advantage of any patterns in the data.</p>

<p><strong>Worst Case (O(n^2)):</strong> In the worst situation, where the list is in reverse order, selection sort is still slow because it requires multiple passes to sort the elements.</p>


            </div>
    );
}

export default SelectionSort ;