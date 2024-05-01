import React, { useEffect } from 'react';
import ButtonGroup from '../buttonGroup';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';

function LinearSearch() {
  const javaLangLinearsearchcode = [
    "public class LinearSearch {",
    "    public static void main(String[] args) {",
    "        int[] arr = {2, 5, 8, 10, 13, 18, 23};",
    "        int target = 13;",
    "        int size = arr.length;",
    "        int result = linearSearch(arr, size, target);",
    "        if (result != -1) {",
    "            System.out.println(\"Element found at index: \" + result);",
    "        } else {",
    "            System.out.println(\"Element not found in the array\");",
    "        }",
    "    }",
    "    public static int linearSearch(int[] arr, int size, int target) {",
    "        for (int i = 0; i < size; i++) {",
    "            if (arr[i] == target) {",
    "                return i; // Return the index if found",
    "            }",
    "        }",
    "        return -1; // Return -1 if not found",
    "    }",
    "}"
  ];

  const cLangLinearsearchcode = [
    "#include <stdio.h>",
    "int main() {",
    "    int arr[] = {2, 5, 8, 10, 13, 18, 23};",
    "    int target = 13;",
    "    int size = sizeof(arr) / sizeof(arr[0]);",
    "    int result = linearSearch(arr, size, target);",
    "    if (result != -1) {",
    "        printf(\"Element found at index: %d\\n\", result);",
    "    } else {",
    "        printf(\"Element not found in the array\\n\");",
    "    }",
    "    return 0;",
    "}",
    "int linearSearch(int arr[], int size, int target) {",
    "    for (int i = 0; i < size; i++) {",
    "        if (arr[i] == target) {",
    "            return i; // Return the index if found",
    "        }",
    "    }",
    "    return -1; // Return -1 if not found",
    "}"
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

    return (
        <div className='LinearSearch'>
            <h2>Linear Search</h2>
            <p>
                Linear search, also known as sequential search, is a simple searching algorithm used to find a particular element in a list or array.
                It sequentially checks each element of the list until the desired element is found or until the end of the list is reached.
            </p>
            <h3>Algorithm:</h3>
            <p>
                <strong>Step-by-step explanation:</strong>
                <ol>
                    <li> <h4>Start at the beginning:</h4> Linear search starts from the first element of the list.</li>
                    <li> <h4>Compare elements:</h4> It compares the target element with each element in the list sequentially.</li>
                    <li> <h4>If found:</h4> If the current element matches the target, the search ends, and the index of the element is returned.</li>
                    <li><h4>If not found:</h4>
                        <ol >
                            <li>Move to the next element.</li>
                            <li>Repeat steps 2-3 until the element is found or until the end of the list is reached.</li>
                        </ol>
                    </li>
                    <li><h4>If reached the end:</h4> If the search completes without finding the element, a signal (like returning -1) is used to indicate that the element is not present in the list.</li>
                </ol>
            </p>

            <ButtonGroup
          handleLanguageChange={(language) => (` ${language}`)}
          cLangElements={cLangLinearsearchcode}
          javaLangElements={javaLangLinearsearchcode}
        />

            <h3>Characteristics:</h3>
            <ul>
                <li>Unordered lists: Linear search can be used on both sorted and unsorted lists.</li>
                <li>Simple implementation: It's straightforward to understand and implement.</li>
                <li>Efficiency: For large lists, it's less efficient compared to other search algorithms like binary search for sorted lists.</li>
            </ul>
            <h3>Complexity:</h3>
            <ul>
                <li>Best Case: O(1) - When the element is found at the beginning.</li>
                <li>Average Case: O(n) - where 'n' is the number of elements in the list.</li>
                <li>Worst Case: O(n) - When the element is at the end of the list or not present.</li>
            </ul>
            <p>
                Linear search is suitable for small lists or situations where the list is unordered or the overhead of sorting the list for more efficient algorithms isn't worth it.
            </p>
        </div>
    );
}

export default LinearSearch;
