function generateReport(name, scores) {
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    const average = total / scores.length;
    const status = average >= 10 ? "PASS" : "FAIL";

    return `
    --- STUDENT REPORT ---
    Name: ${name}
    Average Score: ${average.toFixed(2)}
    Status: ${status}
    ----------------------`;
}

// Exporting the function to make it available to other files
module.exports = generateReport;
