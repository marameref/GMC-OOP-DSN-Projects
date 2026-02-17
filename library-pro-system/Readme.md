This project is the culmination of my architectural studies at **Woolf University**. We are moving beyond simple logic and into **Enterprise JavaScript**. By using **ES Modules (ESM)** and **Dependency Injection**, we are building a system that is testable, decoupled, and professional.

---

## 🏗️ The Project Blueprint

In a Node.js environment, we use a directory structure that reflects our **High-Level Design (HLD)**.

```text
library-pro-system/
├── src/
│   ├── utils/              # Reusable Utility Modules
│   │   └── Logger.js
│   ├── models/             # Data Entities (Abstraction)
│   │   ├── Book.js
│   │   └── User.js
│   ├── patterns/           # Design Pattern Implementations
│   │   ├── UserFactory.js  # Factory Pattern
│   │   ├── FineStrategy.js # Strategy Pattern
│   │   └── Notifier.js     # Observer Pattern
│   ├── services/           # Business Logic
│   │   └── LibraryService.js
│   └── index.js            # Entry Point
└── package.json            # Ensure "type": "module" is set

```

---

## 🛠️ 1. Reusable Utility & Dependency Injection

Instead of hardcoding `console.log`, we create a `Logger` utility. We will **inject** this logger into our services so we can easily swap it out for a file logger or a cloud logger later.

```javascript
// src/utils/Logger.js
export class Logger {
    log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] INFO: ${message}`);
    }
}

```

---

## 🧩 2. Implementing Design Patterns

### **Strategy Pattern (Fine Calculation)**

Different users might have different fine rates. The **Strategy Pattern** allows us to switch these algorithms at runtime without changing the `LibraryService`.

```javascript
// src/patterns/FineStrategy.js
export const StudentFineStrategy = {
    calculate: (days) => days * 0.50 // $0.50 per day
};

export const TeacherFineStrategy = {
    calculate: (days) => days * 0.10 // $0.10 per day
};

```

### **Factory Pattern (User Creation)**

The Factory handles the complexity of object creation, ensuring the rest of the app doesn't need to know the specific details of `Student` vs. `Teacher` constructors.

```javascript
// src/patterns/UserFactory.js
import { Student, Teacher } from '../models/User.js';

export class UserFactory {
    static createUser(type, name, id) {
        if (type === 'student') return new Student(name, id);
        if (type === 'teacher') return new Teacher(name, id);
        throw new Error('Invalid user type');
    }
}

```

---

## 🚀 3. The Core Service (Observer & Dependency Injection)

The `LibraryService` is the heart of the system. It uses **Dependency Injection** (receiving the logger via the constructor) and the **Observer Pattern** to notify users of events.

```javascript
// src/services/LibraryService.js
export class LibraryService {
    constructor(logger) {
        this.logger = logger; // Dependency Injection
        this.books = [];
        this.observers = []; // For Observer Pattern
    }

    subscribe(user) {
        this.observers.push(user);
    }

    notifyObservers(message) {
        this.observers.forEach(obs => obs.update(message));
    }

    issueBook(user, book, strategy) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.logger.log(`Book ${book.title} issued to ${user.name}`);
            this.notifyObservers(`New activity: ${book.title} has been borrowed.`);
        }
    }
}

```

---

## 🧪 4. Simulation (The Entry Point)

Notice how we use `import` statements (ESM) to bring everything together.

```javascript
// src/index.js
import { Logger } from './utils/Logger.js';
import { UserFactory } from './patterns/UserFactory.js';
import { LibraryService } from './services/LibraryService.js';
import { StudentFineStrategy } from './patterns/FineStrategy.js';

const myLogger = new Logger();
const library = new LibraryService(myLogger);

// Create Users via Factory
const student = UserFactory.createUser('student', 'Amarachi', 'S123');

// Subscribe to notifications (Observer Pattern)
library.subscribe(student);

// Perform action
library.issueBook(student, { title: 'Mastering OOD', isAvailable: true });

```

---

## 🎓 Why This is "Master's Level" Code

1. **ES Modules:** Using `export/import` is the modern standard for modularity.
2. **Testability:** Because the `Logger` is injected, you can pass a "Mock Logger" during unit tests to avoid cluttering your console.
3. **Extensibility:** Want to add a "PhD Student" fine rate? Just add a new **Strategy** object. You don't have to touch the `LibraryService` logic.

### **Final Submission Tip**

Ensure your `package.json` includes `"type": "module"`. This tells Node.js to treat your files as modern ES modules rather than the older CommonJS style.