import React from 'react';

const JAVA_Preparation = () => {
  return (
    <div>
      <h1>Java Interview Preparation</h1>

      <h2>1. Is Java Platform Independent? If yes, how?</h2>
      <p>
        Yes, Java is platform-independent because of the Java Virtual Machine (JVM). Java code is compiled into bytecode which can be executed by JVM on any platform (Windows, Linux, Mac, etc.), making Java platform-independent.
      </p>

      <h2>2. What are the top Java Features?</h2>
      <ul>
        <li>Platform Independent</li>
        <li>Object-Oriented</li>
        <li>Robust and Secure</li>
        <li>Multithreaded</li>
        <li>Portable</li>
        <li>High Performance (with JIT)</li>
        <li>Dynamic</li>
      </ul>

      <h2>3. What is JVM (Java Virtual Machine)?</h2>
      <p>
        JVM is an abstract machine that enables Java programs to run on any device or OS. It converts bytecode into machine-specific code.
      </p>

      <h2>4. What is JIT (Just-In-Time Compiler)?</h2>
      <p>
        JIT compiles bytecode into machine code at runtime, improving performance by converting code to native code only when needed.
      </p>

      <h2>5. Difference between JVM, JRE, and JDK</h2>
      <h3>JVM:</h3>
      <ul>
        <li>Executes Java bytecode and converts it into machine-specific code.</li>
        <li>Platform-dependent (different for different operating systems).</li>
        <li>Responsible for memory management and garbage collection.</li>
      </ul>
      <h3>JRE (Java Runtime Environment):</h3>
      <ul>
        <li>Provides the libraries and other components necessary to run Java applications.</li>
        <li>Includes the JVM and standard libraries (like java.lang, java.util).</li>
        <li>Does not include development tools like compilers or debuggers.</li>
      </ul>
      <h3>JDK (Java Development Kit):</h3>
      <ul>
        <li>A complete development kit for Java, which includes JRE plus development tools such as the Java compiler (javac), debugger, and other tools.</li>
        <li>Required for developing, compiling, and running Java applications.</li>
        <li>Platform-specific, as it includes tools tailored for specific operating systems.</li>
      </ul>

      <h2>6. Explain public static void main(String args[]) in Java.</h2>
      <p>
        public: Accessible from anywhere.<br />
        static: Can be called without an instance of the class.<br />
        void: No return type.<br />
        main: Entry point of the program.<br />
        String[] args: Command-line arguments.
      </p>

      <h2>7. What is the Java String Pool?</h2>
      <p>
        The String Pool is a special memory area in Java where string literals are stored to optimize memory usage and improve performance.
      </p>

      <h2>8. Explain different data types in Java.</h2>
      <p>
        Primitive types: int, float, double, char, byte, short, long, boolean.<br />
        Reference types: Objects, arrays, interfaces, classes.
      </p>

      <h2>9. What is the Wrapper class in Java? Why do we need wrapper classes?</h2>
      <p>
        Wrapper classes convert primitive types into objects (e.g., int to Integer). They are needed when working with collections like ArrayList, which can only store objects, not primitives.
      </p>

      <h2>10. Difference between instance and local variables.</h2>
      <h3>Instance Variables:</h3>
      <ul>
        <li>Declared inside a class but outside methods.</li>
        <li>Have a default value (0, null, etc.).</li>
        <li>Exist as long as the object exists.</li>
      </ul>
      <h3>Local Variables:</h3>
      <ul>
        <li>Declared inside methods or constructors.</li>
        <li>No default value. Must be initialized.</li>
        <li>Exist only within the method.</li>
      </ul>

      <h2>11. What is a Class Variable and a Static Variable?</h2>
      <p>
        Class Variable: A variable declared inside the class and outside methods.<br />
        Static Variable: A class variable that belongs to the class rather than instances. Shared among all instances.
      </p>

      <h2>12. What is the default value stored in Local Variables?</h2>
      <p>
        Local variables do not have default values. They must be initialized before use.
      </p>

      <h2>13. Explain the difference between System.out, System.err, and System.in.</h2>
      <p>
        System.out: Standard output stream (usually console).<br />
        System.err: Standard error stream (used for error messages).<br />
        System.in: Standard input stream (usually keyboard).
      </p>

      <h2>14. What is the difference between String, StringBuffer, and StringBuilder?</h2>
      <h3>String:</h3>
      <ul>
        <li>Immutable: once created, the value cannot be changed.</li>
        <li>Every modification creates a new String object, which can lead to memory inefficiency in case of frequent changes.</li>
        <li>Thread-safe but slower due to the overhead of immutability.</li>
      </ul>
      <h3>StringBuffer:</h3>
      <ul>
        <li>Mutable: allows modifications without creating new objects.</li>
        <li>Thread-safe (synchronized), which means it's suitable for use in multithreaded environments.</li>
        <li>Performance is slower than StringBuilder due to synchronization overhead.</li>
      </ul>
      <h3>StringBuilder:</h3>
      <ul>
        <li>Mutable and designed for single-threaded scenarios, making it faster than StringBuffer.</li>
        <li>Not thread-safe, so should be used when thread safety is not a concern.</li>
      </ul>

      <h2>15. Which among String or StringBuffer should be preferred for frequent updates?</h2>
      <p>
        StringBuffer or StringBuilder should be used for frequent updates because they are mutable.
      </p>

      <h2>16. What are the main concepts of OOPs in Java?</h2>
      <ul>
        <li>Inheritance</li>
        <li>Polymorphism</li>
        <li>Encapsulation</li>
        <li>Abstraction</li>
      </ul>

      <h2>17. What is Inheritance, and what are the types of inheritance in Java?</h2>
      <p>
        Inheritance allows one class to inherit the properties and methods of another.<br />
        Single Inheritance: One class inherits from one superclass.<br />
        Multiple Inheritance (Interface-based): Implement multiple interfaces.
      </p>

      <h2>18. What is Polymorphism?</h2>
      <p>
        Polymorphism allows one object to take many forms, typically through method overloading and method overriding.
      </p>

      <h2>19. What is method overriding and method overloading?</h2>
      <h3>Method Overloading:</h3>
      <p>Same method name, different parameters (same class). Compile-time polymorphism.</p>
      <h3>Method Overriding:</h3>
      <p>Same method signature in subclass. Runtime polymorphism.</p>

      <h2>20. Can we override the static method?</h2>
      <p>No, static methods cannot be overridden because they belong to the class, not instances.</p>

      <h2>21. What is an Interface?</h2>
      <p>
        Interface is a blueprint of a class. It can contain abstract methods and static constants. A class implements an interface.
      </p>

      <h2>22. Differences between abstract class and interface</h2>
      <h3>Abstract Class:</h3>
      <ul>
        <li>Can have both abstract and non-abstract methods.</li>
        <li>Can have constructors.</li>
        <li>Supports single inheritance.</li>
      </ul>
      <h3>Interface:</h3>
      <ul>
        <li>Only abstract methods (before Java 8).</li>
        <li>No constructors allowed.</li>
        <li>Supports multiple inheritance.</li>
      </ul>

      <h2>23. What is Encapsulation, and its advantages?</h2>
      <p>
        Encapsulation hides the internal state of an object and only exposes a controlled interface. It helps in data protection and modularity.
      </p>

      <h2>24. What is the IS-A relationship in OOPs Java?</h2>
      <p>
        IS-A is a relationship through inheritance (e.g., a Dog IS-A Animal).
      </p>

      <h2>25. What is the HAS-A relationship in OOPs Java?</h2>
      <p>
        HAS-A is a relationship where one class contains references to another class (composition).
      </p>

      <h2>26. What are the access modifiers in Java?</h2>
      <ul>
        <li>public</li>
        <li>private</li>
        <li>protected</li>
        <li>default (no modifier)</li>
      </ul>

      <h2>27. What is Exception Handling in Java?</h2>
      <p>
        Exception handling is a mechanism to handle runtime errors, allowing the program to continue its normal flow.
      </p>

      <h2>28. What are the types of exceptions in Java?</h2>
      <ul>
        <li>Checked Exceptions: Must be declared or handled (e.g., IOException).</li>
        <li>Unchecked Exceptions: Do not need to be declared or handled (e.g., NullPointerException).</li>
      </ul>

      <h2>29. How do you create a custom exception?</h2>
      <p>
        By extending the Exception class or RuntimeException class to create a new exception type.
      </p>

      <h2>30. What is the finally block in Java?</h2>
      <p>
        The finally block executes after try-catch, regardless of whether an exception occurred or not. It's used for cleanup activities.
      </p>

      <h2>31. What is the use of the throw keyword?</h2>
      <p>
        The throw keyword is used to explicitly throw an exception.
      </p>

      <h2>32. What is the use of the throws keyword?</h2>
      <p>
        The throws keyword is used in method declarations to specify that a method can throw exceptions, allowing the caller to handle them.
      </p>

      <h2>33. Explain the Java Collections Framework.</h2>
      <p>
        The Java Collections Framework provides classes and interfaces for storing and manipulating groups of objects (e.g., List, Set, Map).
      </p>

      <h2>34. What is the difference between List, Set, and Map?</h2>
      <h3>List:</h3>
      <p>Ordered collection allowing duplicates (e.g., ArrayList, LinkedList).</p>
      <h3>Set:</h3>
      <p>Unordered collection that does not allow duplicates (e.g., HashSet, TreeSet).</p>
      <h3>Map:</h3>
      <p>Collection of key-value pairs (e.g., HashMap, TreeMap).</p>

      <h2>35. What is the difference between ArrayList and LinkedList?</h2>
      <h3>ArrayList:</h3>
      <ul>
        <li>Dynamic array implementation.</li>
        <li>Faster for accessing elements (random access).</li>
        <li>Slower for insertions/deletions (requires shifting).</li>
      </ul>
      <h3>LinkedList:</h3>
      <ul>
        <li>Node-based implementation.</li>
        <li>Faster for insertions/deletions.</li>
        <li>Slower for accessing elements (sequential access).</li>
      </ul>

      <h2>36. Explain the concepts of Thread in Java.</h2>
      <p>
        A thread is a lightweight process. Java supports multithreading, allowing multiple threads to run concurrently. Threads can be created by extending the Thread class or implementing the Runnable interface.
      </p>

      <h2>37. What is the difference between synchronized and non-synchronized methods?</h2>
      <h3>Synchronized Method:</h3>
      <p>Only one thread can execute at a time, ensuring thread safety.</p>
      <h3>Non-synchronized Method:</h3>
      <p>Multiple threads can execute simultaneously, potentially leading to data inconsistency.</p>

      <h2>38. What is a deadlock?</h2>
      <p>
        A deadlock is a situation where two or more threads are blocked forever, waiting for each other to release resources.
      </p>

      <h2>39. What is the Executor Framework in Java?</h2>
      <p>
        The Executor Framework provides a higher-level API for managing threads and tasks, making it easier to work with concurrency.
      </p>

      <h2>40. What is Java 8's Stream API?</h2>
      <p>
        The Stream API allows functional-style operations on collections (like filtering, mapping, and reducing) to process data in a more declarative way.
      </p>

      <h2>41. What are Lambda Expressions?</h2>
      <p>
        Lambda expressions provide a concise way to represent functional interfaces (single abstract method) using an expression.
      </p>

      <h2>42. What is the difference between a shallow copy and a deep copy?</h2>
      <h3>Shallow Copy:</h3>
      <p>Copies the object's reference, not the actual object. Changes in the original affect the copied object.</p>
      <h3>Deep Copy:</h3>
      <p>Copies the actual object's values, creating a separate copy. Changes in the original do not affect the copied object.</p>

      <h2>43. What is Garbage Collection in Java?</h2>
      <p>
        Garbage collection automatically frees memory by removing objects that are no longer reachable or referenced.
      </p>

      <h2>44. What is the purpose of the transient keyword?</h2>
      <p>
        The transient keyword prevents serialization of a variable, meaning it will not be saved or restored during serialization.
      </p>

      <h2>45. What is the purpose of the volatile keyword?</h2>
      <p>
        The volatile keyword indicates that a variable's value may be changed by different threads, ensuring visibility and preventing caching.
      </p>

      <h2>46. What is reflection in Java?</h2>
      <p>
        Reflection allows inspection and manipulation of classes, methods, and fields at runtime, enabling dynamic behavior.
      </p>

      <h2>47. What are Annotations in Java?</h2>
      <p>
        Annotations provide metadata about the code. They do not affect the program's semantics but can be processed by tools or frameworks.
      </p>

      <h2>48. What is the Java Development Process?</h2>
      <p>
        The Java development process includes writing code, compiling to bytecode, running on the JVM, and testing/debugging.
      </p>

      <h2>49. Explain the concept of method references in Java 8.</h2>
      <p>
        Method references provide a way to refer to methods without invoking them, allowing more concise and readable code, particularly with functional interfaces.
      </p>

      <h2>50. What are Streams in Java 8?</h2>
      <p>
        Streams are sequences of elements that support various methods for processing data in a functional style (e.g., filter, map, collect).
      </p>

      <style jsx>{`
        div {
          margin: 20px;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        h2 {
          font-size: 20px;
          margin-top: 20px;
        }
        h3 {
          font-size: 18px;
          margin-top: 15px;
        }
        p, ul {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default JAVA_Preparation;
