const generateReport = require('./reportGenerator');

const studentName = "Engr. Amarachi";
const testScores = [12, 15, 8, 11];

const report = generateReport(studentName, testScores);
console.log(report);
