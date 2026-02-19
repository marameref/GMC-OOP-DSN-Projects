## ## Project README: JavaScript Async/Await Checkpoint

This README provides a comprehensive overview of the implementation for the Asynchronous Programming checkpoint, covering tasks from sequential iteration to concurrent API handling using modern JavaScript syntax.

---

### ## Project Overview

This project demonstrates the mastery of **asynchronous JavaScript** concepts. It explores the transition from traditional callback-based logic to modern **Promises** and the **Async/Await** syntax to write cleaner, more maintainable code.

### ## Core Features & Tasks

#### **Task 01: Iterating with Async/Await**

* **Function:** `iterateWithAsyncAwait`
* **Logic:** Uses a `for...of` loop combined with a `setTimeout` wrapped in a Promise to create a deliberate 1-second pause between logging each element of an array.

#### **Task 02 & 03: Awaiting a Call & Handling Errors**

* **Function:** `awaitCall`
* **Logic:** Simulates a data fetch from an external API. It utilizes a `try...catch` block to ensure that if the network request fails or the API returns an error, the user receives a graceful, readable notification instead of a raw console error.

#### **Task 04: Awaiting Concurrent Requests**

* **Function:** `concurrentRequests`
* **Logic:** Demonstrates performance optimization by using `Promise.all()`. This allows multiple network requests to be initiated simultaneously, significantly reducing the total waiting time compared to sequential execution.

#### **Task 05: Awaiting Parallel Calls**

* **Function:** `parallelCalls`
* **Logic:** Takes an array of URLs and maps them to a series of fetch requests, resolving them all at once to log the final combined response set.

---

### ## Technical Implementation

* **Language:** JavaScript (ES6+)
* **Runtime:** Node.js
* **Methodology:** Modular design (ES Modules)

### ## How to Run

1. Ensure you have **Node.js** installed.
2. Clone the repository and navigate to the project folder.
3. Run the following command:
```bash
node tasks.js

```



---

### ## Developer Information

**Author:** Engr. Amarachi Omereife

**Email:** amarachiomereife@gmail.com

**Role:** JavaScript Developer / Engineer

---
