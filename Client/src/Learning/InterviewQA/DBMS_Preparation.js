import React from 'react';

const DBMS_Preparation = () => {
  return (
    <div>
      <h1>DBMS Interview Questions and Answers</h1>
      <h2>1. What is a Database Management System (DBMS)?</h2>
      <p>A Database Management System (DBMS) is software that enables users to create, manage, and manipulate databases. It provides a systematic way to store, retrieve, and manage data while ensuring data integrity, security, and consistency. Examples include MySQL, Oracle, PostgreSQL, and SQL Server.</p>

      <h2>2. Explain the difference between a database and a DBMS.</h2>
      <p>Database: A structured collection of data. DBMS: The software that manages and interacts with the database.</p>

      <h2>3. What are the different types of DBMS?</h2>
      <p>Types include Hierarchical DBMS, Network DBMS, Relational DBMS, Object-Oriented DBMS, and NoSQL DBMS.</p>

      <h2>4. What is a relational database? How does it differ from a non-relational database?</h2>
      <p>Relational Database: Uses tables with rows and columns. Non-relational: Does not use tables, stores unstructured data.</p>

      <h2>5. What is the purpose of a primary key in a database?</h2>
      <p>A primary key uniquely identifies each record in a table, ensuring no duplicates.</p>

      <h2>6. Explain foreign key constraints.</h2>
      <p>Foreign key constraints ensure referential integrity by linking a foreign key in one table to a primary key in another.</p>

      <h2>7. What is normalization? Why is it important?</h2>
      <p>Normalization is the process of structuring data to reduce redundancy and improve integrity.</p>

      <h2>8. Describe the different normal forms (1NF, 2NF, 3NF, BCNF).</h2>
      <p>1NF: Atomic columns. 2NF: No partial dependency. 3NF: No transitive dependency. BCNF: A stricter form of 3NF.</p>

      <h2>9. What are the advantages of normalization?</h2>
      <p>Reduced redundancy, improved data integrity, easier maintenance, and better performance.</p>

      <h2>10. Explain the concept of denormalization and when it is used.</h2>
      <p>Denormalization introduces redundancy to improve read performance, often used in data-heavy applications.</p>

      <h2>11. What is SQL? Describe its different types (DDL, DML, DCL, TCL).</h2>
      <p>SQL is the language used to manage and manipulate databases. Types: DDL, DML, DCL, TCL.</p>

      <h2>12. Write a SQL query to find the second highest salary from an Employee table.</h2>
      <pre>
        SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary &lt; (SELECT MAX(salary) FROM Employee);
      </pre>

      <h2>13. How can you retrieve unique records from a table?</h2>
      <pre>
        SELECT DISTINCT column_name FROM table_name;
      </pre>

      <h2>14. What is the difference between INNER JOIN and OUTER JOIN?</h2>
      <p>INNER JOIN returns matched records. OUTER JOIN returns matched and unmatched records.</p>

      <h2>15. Explain the purpose of GROUP BY and HAVING clauses.</h2>
      <p>GROUP BY groups rows with the same values. HAVING filters groups based on aggregate functions.</p>

      <h2>16. What is a subquery? Give an example.</h2>
      <p>A subquery is a query nested inside another. Example: SELECT employee_id FROM Employee WHERE department_id = (SELECT department_id FROM Department WHERE name = 'Sales').</p>

      <h2>17. Describe the differences between UNION and UNION ALL.</h2>
      <p>UNION removes duplicates, UNION ALL retains them.</p>

      <h2>18. What is indexing, and how does it improve performance?</h2>
      <p>Indexing speeds up data retrieval by creating a data structure for fast access.</p>

      <h2>19. Explain the difference between clustered and non-clustered indexes.</h2>
      <p>Clustered indexes determine physical order, non-clustered indexes maintain logical order.</p>

      <h2>20. How do you handle NULL values in SQL?</h2>
      <p>Use IS NULL, IS NOT NULL, COALESCE(), or NULLIF() to handle NULL values.</p>

      <h2>21. What is a transaction? Describe its properties (ACID).</h2>
      <p>A transaction is a unit of work in a database. ACID: Atomicity, Consistency, Isolation, Durability.</p>

      <h2>22. Explain the concept of isolation levels in transactions.</h2>
      <p>Isolation levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.</p>

      <h2>23. What is a deadlock, and how can it be resolved?</h2>
      <p>A deadlock occurs when transactions wait on each other. Resolve by preventing, detecting, or avoiding deadlocks.</p>

      <h2>24. Describe the different concurrency control mechanisms.</h2>
      <p>Concurrency control methods include locking, optimistic concurrency control, and timestamp ordering.</p>

      <h2>25. What are the different types of locks used in DBMS?</h2>
      <p>Shared, exclusive, and update locks are used for concurrency control.</p>

      <h2>26. What is Entity-Relationship (ER) modeling? Describe its components.</h2>
      <p>ER modeling represents a database’s structure using entities, attributes, and relationships.</p>

      <h2>27. Explain the concept of a database schema.</h2>
      <p>A schema defines the structure of a database, including tables, relationships, and constraints.</p>

      <h2>28. What is the difference between a logical schema and a physical schema?</h2>
      <p>Logical schema defines the structure. Physical schema describes how data is stored.</p>

      <h2>29. Describe the role of a database administrator (DBA).</h2>
      <p>A DBA manages database operations, including security, backups, and performance tuning.</p>

      <h2>30. How do you perform data migration between databases?</h2>
      <p>Data migration involves extracting, transforming, and loading data from the source to the target database.</p>

      <h2>31. What is a stored procedure? How does it differ from a function?</h2>
      <p>Stored procedures perform operations on a database. Functions return a value and can be used in queries.</p>

      <h2>32. Explain triggers in a database.</h2>
      <p>Triggers are automatic actions that occur in response to events like INSERT, UPDATE, or DELETE.</p>

      <h2>33. What is a view, and how is it different from a table?</h2>
      <p>A view is a virtual table that shows data from one or more tables.</p>

      <h2>34. Describe the concept of partitioning in databases.</h2>
      <p>Partitioning divides large tables into smaller parts to improve performance and manageability.</p>

      <h2>35. What is data warehousing, and how does it differ from a traditional database?</h2>
      <p>A data warehouse stores historical data for analysis, whereas traditional databases handle transactional processing.</p>

      <h2>36. How do you optimize SQL queries?</h2>
      <p>Use indexes, limit columns and rows, optimize JOINs, and analyze execution plans to optimize queries.</p>

      <h2>37. What tools or techniques do you use for performance monitoring and tuning?</h2>
      <p>Tools include query execution plans, indexing, monitoring tools like SQL Profiler, and APM tools.</p>

      <h2>38. Explain the concept of caching in databases.</h2>
      <p>Caching stores frequently accessed data in memory for quick retrieval, reducing the need for disk I/O.</p>

      <h2>39. What is database sharding, and when would you use it?</h2>
      <p>Sharding distributes large databases across multiple servers to improve performance and scalability.</p>

      <h2>40. Describe the use of materialized views in performance tuning.</h2>
      <p>Materialized views store query results, improving performance for frequent queries.</p>

      <h2>41. What are the different types of database backups?</h2>
      <p>Full, incremental, and differential backups.</p>

      <h2>42. Explain the recovery process in a database.</h2>
      <p>Database recovery involves restoring backups and replaying logs to bring the database to a consistent state.</p>

      <h2>43. What is database replication?</h2>
      <p>Replication involves copying data from one database to another for high availability, fault tolerance, or load balancing.</p>

      <h2>44. Describe the CAP theorem in the context of distributed databases.</h2>
      <p>CAP theorem states that a distributed database can achieve only two of Consistency, Availability, and Partition Tolerance simultaneously.</p>

      <h2>45. What is the difference between horizontal and vertical scaling?</h2>
      <p>Horizontal scaling adds more servers. Vertical scaling adds more power to existing servers.</p>

      <h2>46. What are the security measures used in databases?</h2>
      <p>Security measures include authentication, authorization, encryption, and auditing.</p>

      <h2>47. How do you implement data encryption in a database?</h2>
      <p>Encryption can be applied to data at rest, data in transit, or specific fields like passwords.</p>

      <h2>48. What is SQL injection, and how can you prevent it?</h2>
      <p>SQL injection is a security vulnerability where attackers manipulate SQL queries. Prevent it by using parameterized queries and input validation.</p>

      <h2>49. What are the challenges of working with large-scale databases?</h2>
      <p>Challenges include data management, performance optimization, scaling, backup, recovery, and security.</p>

      <h2>50. How do you ensure data integrity in a database?</h2>
      <p>Data integrity is ensured through constraints, triggers, ACID properties, and proper design of schemas and relationships.</p>
    </div>
  );
};

export default DBMS_Preparation;
