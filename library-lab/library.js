// --- 1. User Management (Abstract Classes & Inheritance) ---
class User {
    constructor(name, id) {
        if (this.constructor === User) throw new Error("Cannot instantiate abstract class.");
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
    notify(message) {
        console.log(`🔔 Notification for ${this.name}: ${message}`);
    }
}

class Student extends User {
    constructor(name, id) { super(name, id); this.type = "Student"; }
}

class Teacher extends User {
    constructor(name, id) { super(name, id); this.type = "Teacher"; }
}

// --- 2. The Factory Pattern ---
class UserFactory {
    static createUser(type, name, id) {
        if (type === 'student') return new Student(name, id);
        if (type === 'teacher') return new Teacher(name, id);
        throw new Error("User type not recognized.");
    }
}

// --- 3. Book Class ---
class Book {
    constructor(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
}

// --- 4. The Singleton Library System ---
class LibrarySystem {
    constructor() {
        if (LibrarySystem.instance) return LibrarySystem.instance;
        this.books = [];
        this.users = [];
        LibrarySystem.instance = this;
    }

    addBook(book) { this.books.push(book); }
    addUser(user) { this.users.push(user); }

    borrowBook(userId, isbn) {
        const user = this.users.find(u => u.id === userId);
        const book = this.books.find(b => b.isbn === isbn);

        if (user && book && book.isAvailable) {
            book.isAvailable = false;
            user.borrowedBooks.push(book);
            console.log(`✅ ${user.name} successfully borrowed "${book.title}"`);
        } else {
            console.log(`❌ Borrowing failed: Book unavailable or User not found.`);
        }
    }

    simulateOverdueCheck() {
        this.users.forEach(user => {
            if (user.borrowedBooks.length > 0) {
                user.notify(`The book "${user.borrowedBooks[0].title}" is overdue!`);
            }
        });
    }
}

// --- 🧪 Testing the System ---
const library = new LibrarySystem(); // Singleton Instance

// Use Factory to create users
const student1 = UserFactory.createUser('student', 'Amarachi', 'S001');
const teacher1 = UserFactory.createUser('teacher', 'Dr. Smith', 'T001');

library.addUser(student1);
library.addUser(teacher1);

// Add Books
library.addBook(new Book('123', 'Clean Code', 'Robert Martin'));
library.addBook(new Book('456', 'Design Patterns', 'Gang of Four'));

// Transactions
library.borrowBook('S001', '123');
library.simulateOverdueCheck(); // Observer pattern simulation