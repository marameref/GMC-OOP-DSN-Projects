/**
 * TASK: Fibonacci Sequence
 * Returns the nth Fibonacci number.
 * F(n) = F(n-1) + F(n-2)
 */
function fibonacci(n) {
    // Base Cases: 0 and 1 are the starting points
    if (n <= 0) return 0;
    if (n === 1) return 1;

    // Recursive Case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * TASK: Palindrome Checker
 * Uses recursion to compare outer characters.
 */
function isPalindrome(str) {
    // Standardize: Remove non-alphanumeric and lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    function check(s) {
        // Base Case: 0 or 1 characters left means it's a palindrome
        if (s.length <= 1) return true;

        // Base Case: If outer characters don't match, it fails
        if (s[0] !== s[s.length - 1]) return false;

        // Recursive Case: Slice off the ends and check the inner string
        return check(s.slice(1, -1));
    }

    return check(cleanStr);
}

module.exports = { fibonacci, isPalindrome };