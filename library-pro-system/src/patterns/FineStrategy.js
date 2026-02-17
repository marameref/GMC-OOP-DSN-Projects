/**
 * Fine Calculation Strategies
 * Each strategy implements a 'calculate' method (Interface Pattern).
 */

export const StudentFineStrategy = {
    calculate: (days) => {
        const rate = 0.50; // $0.50 per day for students
        return (days * rate).toFixed(2);
    }
};

export const TeacherFineStrategy = {
    calculate: (days) => {
        const rate = 0.10; // $0.10 per day for teachers (Staff discount)
        return (days * rate).toFixed(2);
    }
};
