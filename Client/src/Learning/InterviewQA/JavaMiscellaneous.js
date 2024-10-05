import React from 'react';

const JavaMiscellaneous = () => {
  const questionsAndAnswers = [
    {
      question: "1. What is a classloader?",
      answer: "A classloader is a part of the Java Runtime Environment that loads Java classes into memory. It is responsible for finding and loading class files, which can be stored in the file system or downloaded from the network. The classloader follows a specific delegation model, where it first delegates the request to its parent classloader before loading the class itself."
    },
    {
      question: "2. Explain the transient keyword in Java.",
      answer: "The transient keyword is used in Java to indicate that a particular variable should not be serialized. When an object is serialized, the transient variables are ignored and not included in the serialized representation. This is useful for variables that contain sensitive data or that are derived and do not need to be saved."
    },
    {
      question: "3. What’s the difference between the methods sleep() and wait()?",
      answer: (
        <div>
          <strong>sleep():</strong>
          <ul>
            <li>Belongs to the Thread class.</li>
            <li>Pauses the current thread for a specified duration without releasing any locks.</li>
            <li>Can be called on any thread and does not require synchronization.</li>
          </ul>
          <strong>wait():</strong>
          <ul>
            <li>Belongs to the Object class.</li>
            <li>Causes the current thread to release the lock and wait until another thread invokes notify() or notifyAll() on the same object.</li>
            <li>Must be called within a synchronized block or method.</li>
          </ul>
        </div>
      )
    },
    {
      question: "4. What is the difference between Reader/Writer and InputStream/OutputStream?",
      answer: (
        <div>
          <strong>Reader/Writer:</strong>
          <ul>
            <li>Used for character data (text).</li>
            <li>Handle encoding and decoding of characters.</li>
            <li>Examples: FileReader, FileWriter.</li>
          </ul>
          <strong>InputStream/OutputStream:</strong>
          <ul>
            <li>Used for binary data.</li>
            <li>Read and write bytes and do not handle character encoding.</li>
            <li>Examples: FileInputStream, FileOutputStream.</li>
          </ul>
        </div>
      )
    },
    {
      question: "5. Explain method overloading with a real-time example.",
      answer: (
        <div>
          Method overloading occurs when multiple methods in the same class have the same name but different parameters (different types or number of parameters).
          <pre>
{`class MathOperations {
    // Method to add two integers
    int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded method to add three integers
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded method to add two double values
    double add(double a, double b) {
        return a + b;
    }
}`}
          </pre>
        </div>
      )
    },
    {
      question: "6. Can we overload the main() method in Java?",
      answer: "Yes, we can overload the main() method in Java. However, only the main method with the specific signature public static void main(String[] args) serves as the entry point of the application. Overloaded versions can be created but will not be executed by the Java Virtual Machine (JVM)."
    },
    {
      question: "7. What is a marker interface in Java?",
      answer: "A marker interface is an interface that does not contain any methods or fields and serves to mark a class for some special behavior. By implementing a marker interface, a class indicates that it possesses certain properties. Example: Serializable and Cloneable are marker interfaces."
    },
    {
      question: "8. Explain how ArrayList dynamically grows in Java.",
      answer: "An ArrayList in Java is a resizable array implementation of the List interface. When the number of elements exceeds its capacity, it automatically increases its size by creating a new array with a larger capacity (usually 1.5 times the original size) and copying the elements from the old array to the new one."
    },
    {
      question: "9. What is a Vector in Java, and how is it different from ArrayList?",
      answer: "A Vector is a dynamic array that can grow or shrink in size. The main differences between Vector and ArrayList are: \n- **Synchronization:** Vector is synchronized, making it thread-safe, while ArrayList is not. \n- **Growth Factor:** When an ArrayList grows, it usually increases its size by 50%, while Vector doubles its size."
    },
    {
      question: "10. How to make an ArrayList read-only?",
      answer: (
        <div>
          To make an ArrayList read-only, you can use the <code>Collections.unmodifiableList()</code> method to wrap the original list:
          <pre>
{`ArrayList<String> list = new ArrayList<>();
list.add("A");
list.add("B");

List<String> readOnlyList = Collections.unmodifiableList(list);`}
          </pre>
        </div>
      )
    },
    {
      question: "11. What is a priority queue in Java?",
      answer: "A priority queue is a data structure that stores elements in a way that allows for the retrieval of the highest (or lowest) priority element efficiently. Elements are ordered according to their natural ordering or by a comparator provided at queue construction time. It is part of the Java Collections Framework and can be created using the PriorityQueue class."
    },
    {
      question: "12. Explain LinkedHashSet in Java Collections Framework.",
      answer: "A LinkedHashSet is a part of the Java Collections Framework and is an implementation of the Set interface. It maintains a linked list of the entries in the set, allowing for predictable iteration order. Unlike HashSet, which does not guarantee any specific order, LinkedHashSet retains the order of elements as they were added."
    },
    {
      question: "13. Can we use any class as a Map key in Java?",
      answer: "Yes, any class can be used as a Map key in Java, provided it correctly implements the hashCode() and equals() methods. This is essential to ensure that the keys are compared properly and that the hash table functions correctly."
    },
    {
      question: "14. What is the difference between Comparable and Comparator in Java?",
      answer: (
        <div>
          <strong>Comparable:</strong>
          <ul>
            <li>An interface that defines a natural ordering for a class.</li>
            <li>The compareTo() method is used to compare objects of the same class.</li>
            <li>The class must implement the Comparable interface.</li>
          </ul>
          <strong>Comparator:</strong>
          <ul>
            <li>An interface that defines a custom ordering for objects of different classes or the same class.</li>
            <li>The compare() method is implemented to define the comparison logic.</li>
            <li>Can be passed to sorting methods without modifying the original class.</li>
          </ul>
        </div>
      )
    },
    {
      question: "15. What is exception propagation?",
      answer: "Exception propagation is the process by which an exception is passed up the call stack when it is not handled in the current method. If a method throws an exception and does not catch it, the exception is propagated to the method that called it, and so on, until it is either caught or reaches the main method."
    },
    {
      question: "16. What is the use of System.exit(0) in exception handling?",
      answer: "System.exit(0) is used to terminate the Java Virtual Machine (JVM) and exit the program. The argument 0 indicates a normal termination without errors. In the context of exception handling, it can be used to stop the application if a critical exception occurs that cannot be handled gracefully."
    },
    {
      question: "17. Explain how object cloning is achieved in Java.",
      answer: (
        <div>
          Object cloning in Java is achieved using the Cloneable interface. A class that implements this interface can create a copy of itself using the clone() method defined in the Object class. However, the class must override the clone() method and call super.clone() to perform the cloning operation.
          <pre>
{`class MyClass implements Cloneable {
    int value;

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}`}
          </pre>
        </div>
      )
    },
    {
      question: "18. What is the difference between process and thread?",
      answer: (
        <div>
          <strong>Process:</strong>
          <ul>
            <li>A process is an independent program in execution, with its own memory space and resources.</li>
            <li>Processes are isolated from each other and do not share memory.</li>
          </ul>
          <strong>Thread:</strong>
          <ul>
            <li>A thread is a lightweight sub-process that can be executed within a process.</li>
            <li>Threads share the same memory and resources of the process, making communication between them easier.</li>
          </ul>
        </div>
      )
    },
    {
      question: "19. What are daemon threads?",
      answer: "Daemon threads are low-priority threads that run in the background to perform tasks such as garbage collection or monitoring. They do not prevent the JVM from exiting when the program finishes, as they are terminated once all user (non-daemon) threads have completed."
    },
    {
      question: "20. What is the difference between a shallow copy and a deep copy?",
      answer: (
        <div>
          <strong>Shallow Copy:</strong>
          <ul>
            <li>Creates a new object, but the fields of the object are references to the same objects as the original.</li>
            <li>Modifying a mutable object in the shallow copy also modifies the same object in the original.</li>
          </ul>
          <strong>Deep Copy:</strong>
          <ul>
            <li>Creates a new object and recursively copies all objects referenced by the original object.</li>
            <li>Changes made to the deep copy do not affect the original object.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div>
      <h1>Java Miscellaneous Questions and Answers</h1>
      {questionsAndAnswers.map((qa, index) => (
        <div key={index} className="qa">
          <h2>{qa.question}</h2>
          <p>{qa.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default JavaMiscellaneous;
