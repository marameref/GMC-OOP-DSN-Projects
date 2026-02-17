// tests/integration/library.test.js
import { LibraryService } from '../../src/services/LibraryService.js';
import { UserFactory } from '../../src/patterns/UserFactory.js';

describe('Library System Integration', () => {
    let library;
    const mockLogger = { log: jest.fn() }; // Dependency Injection (Mock)

    beforeEach(() => {
        library = new LibraryService(mockLogger);
    });

    test('should notify subscribed users when a book is issued', () => {
        const student = UserFactory.createUser('student', 'Amarachi', 'U001');
        student.update = jest.fn(); // Mock the update method

        library.subscribe(student);
        library.issueBook(student, { title: 'Dijkstra Logic', isAvailable: true });

        expect(student.update).toHaveBeenCalledWith(expect.stringContaining('checked out'));
    });
});
