
---

# 📘 Technical Design Document: Library Management System

**Project Phase:** Object-Oriented Analysis & Architectural Planning

**Coursework:** MSc Software Engineering (Woolf University)

**Lead Engineer:** Engr. Amarachi Crystal Omereife

---

## 📂 Project Structure & Content

In a professional OOA/OOD workflow, we separate our **design artifacts** from our **implementation logic**.

```text
library-architecture-lab/
├── docs/
│   ├── use_case_analysis.md    # Requirements & actor definitions
│   ├── diagrams/
│   │   ├── class_diagram.png   # Structural model
│   │   ├── state_diagram.png   # Behavioral model
│   │   └── sequence.png        # Interaction model
├── src/
│   ├── models/                 # Domain Objects (Book, Member)
│   ├── services/               # Business Logic (BorrowingService)
│   └── main.js                 # Entry point / System Simulation
└── README_ARCHITECTURE.md      # This design document

```

### **Content Description:**

* **`docs/`**: Contains the "Blueprints." This is the result of your OOA. It defines the logic before code exists.
* **`src/models/`**: Contains classes that hold data and state (the "Nouns").
* **`src/services/`**: Contains the logic that coordinates between models (the "Verbs").

---

## 🏗️ 1. System Architecture

We are utilizing a **Layered Architecture** to ensure the system is maintainable and scalable.

* **Presentation Layer:** Interface for Librarians and Members.
* **Service Layer:** Implements business rules (e.g., "A student cannot borrow more than 5 books").
* **Domain Layer:** The core OOA models (Book, User, Transaction).

---

## 🧬 2. Object-Oriented Analysis (OOA)

### **Structural Model (Class Diagram)**

Our analysis identified a hierarchy where `Student` and `Teacher` inherit from a base `User` class to maximize code reuse.

### **Behavioral Model (State Machine)**

The `Book` entity is not just a data container; it is a state-driven object. Its behavior changes based on its current status.

---

## 🔄 3. Interaction Modeling (Sequence Diagram)

To understand how our components interact in a **loosely coupled** way, we modeled the **Issue Book** use case. This ensures the `LibraryService` coordinates the action without the `User` and `Book` classes needing to know too much about each other.

---

## 💻 4. Abstraction to Implementation

Below is the pseudocode snippet demonstrating how the **State Machine** and **Encapsulation** are handled in the `src/models/Book.js` file:

```javascript
// src/models/Book.js
class Book {
    constructor(isbn, title) {
        this.isbn = isbn;
        this.title = title;
        this.status = "AVAILABLE"; // Initial State
    }

    // This method handles the state transition logic identified in OOA
    transitionTo(newState) {
        const allowedTransitions = {
            "AVAILABLE": ["ISSUED"],
            "ISSUED": ["RETURNED"],
            "RETURNED": ["AVAILABLE"]
        };

        if (allowedTransitions[this.status].includes(newState)) {
            this.status = newState;
            return true;
        }
        throw new Error(`Invalid state transition from ${this.status} to ${newState}`);
    }
}

```

---

## 🎓 Learning Outcomes

* **Separation of Concerns:** Defined clear boundaries between data and logic.
* **State Integrity:** Used behavioral modeling to prevent a book from being "Issued" twice.
* **Design for Growth:** The modular folder structure allows for future subsystems (like "Fines" or "Room Booking") to be added without a total rewrite.

---