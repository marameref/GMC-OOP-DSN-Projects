/**
 * Recursively tests if a string is a palindrome
 * @param {string} word 
 * @returns {boolean}
 */
function isPalindrome(word) {
    // 1. Stop condition: empty word or single character
    if (word.length <= 1) {
        return true;
    }

    // 2. Compare the characters at the ends
    const firstChar = word[0];
    const lastChar = word[word.length - 1];

    if (firstChar === lastChar) {
        // 3. Equality found: test the "rest of the word" (middle part)
        const restOfWord = word.substring(1, word.length - 1);
        return isPalindrome(restOfWord);
    } else {
        // 4. Difference found: stop and return false
        return false;
    }
}

// --- Testing the Logic ---
const testWords = ["gag", "kayak", "php", "radar", "hello"];

console.log("--- Palindrome Test Results ---");
testWords.forEach(word => {
    console.log(`${word.padEnd(10)} : ${isPalindrome(word)}`);
});