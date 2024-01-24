import React from "react";
import { Link } from "react-router-dom";
import  "./DSAHome.css";
function DSAHome (){
    return(
        <div className="DSA_home">
           <h3>Welcome to Our Data Structures and Algorithms (DSA) Page!</h3>
           <p>Are you ready to delve into the exciting world of Data Structures and Algorithms? You're in the right place!</p>
    <p>Our DSA resources are designed to help you understand and master fundamental concepts that form the backbone of computer science and programming.</p>
    <p>Whether you're a beginner taking your first steps or an experienced developer looking to refresh your knowledge, our comprehensive collection of data structures and algorithms will guide you every step of the way.</p>


    <h2>Data Structures</h2>
  <p> </p>
  <ul>
    <li>Data structures are essential tools for efficiently organizing and storing data.</li>
    <li>They allow us to manage and manipulate data in various ways, leading to optimized algorithms and faster computations.</li>
  </ul>

        
<h3><Link to="/Array">Array</Link></h3>
<h3><Link to="/linkedlist">Linked List</Link></h3>
<ul>
    <li>Singly Linked List</li>
    <li>Doubly Linked List</li>
    <li>Circular Linked List</li>
</ul>
<h3>Stack</h3>
<h3>Queue</h3>
<h3>Hash Table</h3>
<h3>Tree</h3>
<ul>
    <li>Binary Tree</li>
    <li>Binary Search Tree (BST)</li>
    <li>AVL Tree</li>
</ul>
<h3>Graph</h3>
<h3>Linked List Types</h3>
<ul>
    <li>Singly Linked List</li>
    <li>Doubly Linked List</li>
    <li>Circular Linked List</li>
</ul>
<h2>Algorithms</h2>

<h2>Searching Algorithms:</h2>
<ul>

    <li><Link to="/LinearSearch">Linear Search</Link></li>
    <li><Link to="/BinarySearch">Binary Search</Link></li>
</ul>

<h2>Sorting Algorithms:</h2>
<ul>
    <li><Link to="/SelectionSort">Selection Sort</Link> </li>
    <li> <Link to="/BubbleSort"> Bubble Sort</Link></li>
    <li> <Link to="/InsertionSort">Insertion Sort</Link></li>
    <li> <Link to="/MergeSort">Merge Sort</Link></li>
    <li> <Link to="/QuickSort">Quick Sort</Link></li>
    <li> <Link to="/HeapSort">Heap Sort</Link></li>
    <li> <Link to="/RadixSort">Radix Sort</Link></li>
    <li> <Link to="/CountingSort">Counting Sort</Link></li>
</ul>

<h2>Graph Algorithms:</h2>
<ul>
    <li>Topological Sort</li>
    <li>Breadth-First Search (BFS)</li>
    <li>Depth-First Search (DFS)</li>
    <li>Dijkstra's Algorithm</li>
    <li>Bellman-Ford Algorithm</li>
    <li>Floyd-Warshall Algorithm</li>
    <li>Kruskal's Algorithm</li>
    <li>Prim's Algorithm</li>
</ul>

        </div>
    )
}
export default DSAHome;