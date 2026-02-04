This is a classic problem that perfectly illustrates **Recursive Logic**—the idea of a function calling itself to solve smaller versions of the same problem.

we’ll approach this by breaking down the **LLD (Low-Level Design)** of the algorithm before looking at the code.

---

## 🧠 Step 1: Understanding the "Recursive" Logic

To check if a word is a palindrome, we don't need to look at the whole word at once. We only need to look at the "edges" and then shrink our perspective.

1. **The Base Case (Stop Condition):** If the word has 0 or 1 characters, it is a palindrome by default.
2. **The Recursive Step:** * Compare the **first** character and the **last** character.
* If they are **different**, stop—it’s not a palindrome.
* If they are **the same**, strip those two characters off and run the test again on the "inner" word.



---

## 💻 Step 2: Implementation (JavaScript)

Here is a clean implementation following your specific instructions. Notice how the function calls itself (`isPalindrome`) until it hits the stop condition.

```javascript
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

```

---

## 🏗️ Step 3: Performance & Complexity (LLD Insight)

When you document this for your portfolio or your Medium article, keep these engineering metrics in mind:

* **Time Complexity:** , where  is the length of the word. We have to check at most half of the characters.
* **Space Complexity:**  because of the **Recursion Stack**. Every time the function calls itself, it takes up a bit of memory until it hits the stop condition.

---

## ✍️ Senior Tip: Why Use Recursion?

In a professional setting, you could solve this with a simple `for` loop or by using `split().reverse().join()`. However, practicing **Recursion** is vital for your AI infrastructure work because:

1. **Tree Traversal:** Many AI models and graph algorithms (like the **Dijkstra's** project you did) rely on traversing nodes recursively.
2. **Code Elegance:** It mirrors the mathematical definition of the problem perfectly.

### **Submission Checklist for Engr. Amarachi**

* [x] Defined the base case (length  1).
* [x] Implemented end-to-end character comparison.
* [x] Used `substring` to reduce the problem size iteratively.