/**
 * LibraryService handles the core business logic.
 * It uses Dependency Injection for logging and the 
 * Observer Pattern for notifications.
 */
export class LibraryService {
    /**
     * @param {Object} logger - The injected logging utility
     */
    constructor(logger) {
        this.logger = logger; // Dependency Injection: No import needed!
        this.observers = [];
    }

    // --- Observer Pattern Methods ---
    
    subscribe(user) {
        this.observers.push(user);
        this.logger.log(`New subscriber added: ${user.name}`);
    }

    notifyObservers(message) {
        this.observers.forEach(subscriber => {
            // Checks if the subscriber has an update method (Interface-like check)
            if (typeof subscriber.update === 'function') {
                subscriber.update(message);
            }
        });
    }

    // --- Business Logic ---

    issueBook(user, book) {
        // Logic check: Is the book available for borrowing?
        if (book.isAvailable || book.status === 'AVAILABLE') {
            
            // Update state
            if (typeof book.issue === 'function') {
                book.issue(); // Use the method if it exists
            } else {
                book.isAvailable = false; // Fallback for simple objects
            }

            this.logger.log(`Transaction Successful: "${book.title}" issued to ${user.name}`);
            this.notifyObservers(`The book "${book.title}" is now checked out.`);
            return true;
        } else {
            this.logger.log(`Transaction Failed: "${book.title}" is currently unavailable.`);
            return false;
        }
    }
}
