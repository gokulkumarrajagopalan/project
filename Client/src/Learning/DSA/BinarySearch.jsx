import React from 'react';
import ButtonGroup from "../buttonGroup";


function BinarySearch () {
    const javaLangBinarysearchcode =[
    "public class BinarySearch {",
    "// Function for binary search ",
    "public static int binarySearch(int[] arr, int left, int right, int search) {",
        "while (left <= right) {",
         "   int mid = left + (right - left) / 2;",
" ",
  "          // Check if search element is present at the middle",
           " if (arr[mid] == search)",
            "    return mid;",
"",
    "        // If search element is greater, ignore left half",
            "if (arr[mid] < search)",
             "   left = mid + 1;",
            "// If search element is smaller, ignore right half",
            "else",
             "   right = mid - 1;",
        "}",
        "// Search element not found in the array",
        "return -1;",
    "}",
"",
   " public static void main(String[] args) {",
        "int[] arr = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};",
        "int search = 12;",
"        int size = arr.length;",
        "int result = binarySearch(arr, 0, size - 1, search);",
        "if (result == -1)",
         "   System.out.println(&quot;Element is not present in the array&quot;);",
        "else",
         "   System.out.println(&quot;Element is present at index + result &quot;);",
    "}",
"}",
  ] ;

    const cLangBinarysearchcode =[
        "#include <stdio.h>",
"",
"// Function for binary search",
"int binarySearch(int arr[], int left, int right, int Search) {",
    "	while (left <= right) {",
        "	int mid = left + (right - left) / 2;",
"",
   "     // Check if Search element  is present at the middle",
        "if (arr[mid] == Search)",
         "   return mid;",
" ",
    "    // If Search element greater, ignore left half",
   "     if (arr[mid] < Search)",
        "    left = mid + 1;",
        "// If Search element  is smaller, ignore right half",
        "else",
            "right = mid - 1;",
"    }",

"    // Search element not found in the array",
    "return -1;",
"}",


"int main() {",
    "int arr[] = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20};",
    "int Search= 12;",
    "int size = sizeof(arr) / sizeof(arr[0]);",
    "int result = binarySearch(arr, 0, size - 1, target);",
   " if (result == -1)",
"        printf(&quot;Element is not present in the array\n &quot;);",
 "   else",
        "printf(&quot;Element is present at index %d\n &quot; ,result);  return 0;",
"}",
    ];
    return (
        <div className='BinarySearch'>

            <h3>Binary Search</h3>
            <p> A searching algorithm that operates on sorted arrays or lists by dividing the search interval in half, reducing the search space by half in each iteration. It compares the target value with the middle element and narrows down the search until it finds the target or determines its absence. </p>


            <div class="algorithm-step">
  <h3>Algorithm</h3>
  <p>Initialize: Begin with a sorted array of elements.</p>
  <p>Set Pointers: Define pointers for the start (left) and end (right) of the array.</p>
  <p>Find the Middle: Calculate the middle index of the array using mid = (left + right) / 2.</p>
  <p>Compare and Narrow Down:</p>
  <ul>
    <li>If the element at the middle index matches the target, return its index.</li>
    <li>If the target is smaller than the element at the middle index, narrow the search to the left half of the array by updating right = mid - 1.</li>
    <li>If the target is larger than the element at the middle index, narrow the search to the right half of the array by updating left = mid + 1.</li>
  </ul>
  <p>Repeat: Keep dividing the search space in half by adjusting pointers until the target is found or the pointers meet (left greater right), indicating that the target is not present in the array.</p>
  <p>Return Result: If the target is found, return its index. If not, return a sentinel value (e.g., -1) to indicate that the target is not present in the array.</p>
</div>

<ButtonGroup
handleLanguageChange={(language) => (` ${language}`)}
cLangElements={cLangBinarysearchcode}
javaLangElements={javaLangBinarysearchcode}
/>

 <h3>Time Complexity</h3>
  <p><strong>Best Case:</strong> O(1) - When the element is found right in the middle with the initial comparison.</p>
  <p><strong>Average Case:</strong> O(log n) - Logarithmic time complexity, efficiently reduces the search space by half in each step.</p>
  <p><strong>Worst Case:</strong> O(log n) - Even in the worst-case scenario, when the element is at the end or not present, it halves the search space, resulting in logarithmic time complexity.</p>



</div>
    );
}

export  default  BinarySearch ;