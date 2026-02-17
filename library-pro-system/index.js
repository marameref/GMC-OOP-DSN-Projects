// index.js (Root folder)
import { Logger } from './src/utils/Logger.js';
import { UserFactory } from './src/patterns/UserFactory.js';
import { LibraryService } from './src/services/LibraryService.js';
import { Book } from './src/models/Book.js';
import { StudentFineStrategy, TeacherFineStrategy } from './src/patterns/FineStrategy.js';

// 1. Setup Infrastructure (Dependency Injection)
const myLogger = new Logger();
const library = new LibraryService(myLogger);

// 2. Create Users (Factory Pattern)
const student = UserFactory.createUser('student', 'Amarachi', 'S001');
const teacher = UserFactory.createUser('teacher', 'Prof. Nwosu', 'T001');

// 3. Register Observers (Observer Pattern)
library.subscribe(student);
library.subscribe(teacher);

// 4. Create Inventory
const book1 = new Book('978-01', 'Clean Code', 'Robert Martin');
const book2 = new Book('978-02', 'Design Patterns', 'Gang of Four');

// 5. Run Simulation
console.log('\n--- 📚 Starting Library Simulation ---\n');

library.issueBook(student, book1); // Success
library.issueBook(teacher, book1); // Fails (already issued)

// 6. Demonstrate Strategy Pattern (External to the Service)
const overdueDays = 5;
const sFine = StudentFineStrategy.calculate(overdueDays);
const tFine = TeacherFineStrategy.calculate(overdueDays);

myLogger.log(`Fine check: Student owes $${sFine} for ${overdueDays} days.`);
myLogger.log(`Fine check: Teacher owes $${tFine} for ${overdueDays} days.`);

console.log('\n--- ✅ Simulation Complete ---\n');
