export class Book {
    constructor(isbn, title, author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }

    issue() {
        this.isAvailable = false;
    }

    returnBook() {
        this.isAvailable = true;
    }
}
