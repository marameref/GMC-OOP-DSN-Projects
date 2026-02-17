/**
 * Base User Class (The Abstraction)
 */
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    /**
     * Required for the Observer Pattern.
     * This is called by LibraryService.notifyObservers()
     */
    update(message) {
        console.log(`🔔 [Notification for ${this.name}]: ${message}`);
    }
}

export class Student extends User {
    constructor(name, id) {
        super(name, id);
        this.type = 'Student';
        this.maxBooks = 5; // Example Student-specific property
    }
}

export class Teacher extends User {
    constructor(name, id) {
        super(name, id);
        this.type = 'Teacher';
        this.maxBooks = 10; // Example Teacher-specific property
    }
}
