// tests/unit/strategy.test.js
import { StudentFineStrategy, TeacherFineStrategy } from '../../src/patterns/FineStrategy.js';

describe('Fine Calculation Strategy', () => {
    test('Student should be charged $0.50 per day', () => {
        expect(StudentFineStrategy.calculate(10)).toBe(5.00);
    });

    test('Teacher should be charged $0.10 per day', () => {
        expect(TeacherFineStrategy.calculate(10)).toBe(1.00);
    });
});
