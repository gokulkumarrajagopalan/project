import React, { useEffect } from 'react';
import ButtonGroup from '../buttonGroup';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-java';

function MergeSort() {
  const javaLangMergeSortCode = [
    "public class MergeSort {",
    "    public static void main(String[] args) {",
    "        int[] arr = {12, 11, 13, 5, 6, 7};",
    "        mergeSort(arr, 0, arr.length - 1);",
    "        System.out.println(\"Sorted array: \");",
    "        printArray(arr);",
    "    }",
    "    public static void mergeSort(int[] arr, int left, int right) {",
    "        if (left < right) {",
    "            int mid = (left + right) / 2;",
    "            mergeSort(arr, left, mid);",
    "            mergeSort(arr, mid + 1, right);",
    "            merge(arr, left, mid, right);",
    "        }",
    "    }",
    "    public static void merge(int[] arr, int left, int mid, int right) {",
    "        int n1 = mid - left + 1;",
    "        int n2 = right - mid;",
    "        int[] leftArray = new int[n1];",
    "        int[] rightArray = new int[n2];",
    "        for (int i = 0; i < n1; i++)",
    "            leftArray[i] = arr[left + i];",
    "        for (int i = 0; i < n2; i++)",
    "            rightArray[i] = arr[mid + 1 + i];",
    "        int i = 0, j = 0, k = left;",
    "        while (i < n1 && j < n2) {",
    "            if (leftArray[i] <= rightArray[j]) {",
    "                arr[k] = leftArray[i];",
    "                i++;",
    "            } else {",
    "                arr[k] = rightArray[j];",
    "                j++;",
    "            }",
    "            k++;",
    "        }",
    "        while (i < n1) {",
    "            arr[k] = leftArray[i];",
    "            i++;",
    "            k++;",
    "        }",
    "        while (j < n2) {",
    "            arr[k] = rightArray[j];",
    "            j++;",
    "            k++;",
    "        }",
    "    }",
    "    public static void printArray(int[] arr) {",
    "        for (int i : arr) {",
    "            System.out.print(i + \" \");",
    "        }",
    "        System.out.println();",
    "    }",
    "}"
  ];

  const cLangMergeSortCode = [
    "#include <stdio.h>",
    "void merge(int arr[], int l, int m, int r) {",
    "    int i, j, k;",
    "    int n1 = m - l + 1;",
    "    int n2 = r - m;",
    "    int L[n1], R[n2];",
    "    for (i = 0; i < n1; i++)",
    "        L[i] = arr[l + i];",
    "    for (j = 0; j < n2; j++)",
    "        R[j] = arr[m + 1 + j];",
    "    i = 0; j = 0; k = l;",
    "    while (i < n1 && j < n2) {",
    "        if (L[i] <= R[j]) {",
    "            arr[k] = L[i];",
    "            i++;",
    "        } else {",
    "            arr[k] = R[j];",
    "            j++;",
    "        }",
    "        k++;",
    "    }",
    "    while (i < n1) {",
    "        arr[k] = L[i];",
    "        i++;",
    "        k++;",
    "    }",
    "    while (j < n2) {",
    "        arr[k] = R[j];",
    "        j++;",
    "        k++;",
    "    }",
    "}",
    "void mergeSort(int arr[], int l, int r) {",
    "    if (l < r) {",
    "        int m = l + (r - l) / 2;",
    "        mergeSort(arr, l, m);",
    "        mergeSort(arr, m + 1, r);",
    "        merge(arr, l, m, r);",
    "    }",
    "}",
    "void printArray(int A[], int size) {",
    "    for (int i = 0; i < size; i++)",
    "        printf(\"%d \", A[i]);",
    "    printf(\"\\n\");",
    "}",
    "int main() {",
    "    int arr[] = {12, 11, 13, 5, 6, 7};",
    "    int arr_size = sizeof(arr) / sizeof(arr[0]);",
    "    printf(\"Given array is \\n\");",
    "    printArray(arr, arr_size);",
    "    mergeSort(arr, 0, arr_size - 1);",
    "    printf(\"\\nSorted array is \\n\");",
    "    printArray(arr, arr_size);",
    "    return 0;",
    "}"
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="MergeSort">
      <h2>Merge Sort</h2>
      <p>
        Merge sort is a way of arranging a list of things in order. It works by repeatedly dividing the list into smaller parts until each part has only one item. Then, it combines (merges) these small parts back together in a sorted order. This process ensures that the entire list ends up sorted. Merge sort is known for being a reliable and efficient method for sorting things.
      </p>

      <h3>Algorithm:</h3>
      <p>
        <strong>Step-by-step explanation:</strong>
        <ol>
          <li><h4>Divide:</h4> Divide the list into two halves.</li>
          <li><h4>Conquer:</h4> Recursively sort each half.</li>
          <li><h4>Combine:</h4> Merge the two halves to produce a sorted list.</li>
        </ol>
      </p>

      <ButtonGroup
        handleLanguageChange={(language) => (` ${language}`)}
        cLangElements={cLangMergeSortCode}
        javaLangElements={javaLangMergeSortCode}
      />

      <h3>Characteristics:</h3>
      <ul>
        <li>Stable sorting algorithm.</li>
        <li>Efficient for large datasets.</li>
        <li>Complexity: O(n log n) for all cases (best, average, worst).</li>
        <li>Requires additional memory for temporary arrays.</li>
      </ul>

      <h3>Complexity:</h3>
      <ul>
        <li>Time Complexity: O(n log n)</li>
        <li>Space Complexity: O(n)</li>
      </ul>
    </div>
  );
}

export default MergeSort;
