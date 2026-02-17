# Reflection Report: Procedural to Pattern-Based Refactoring

### 1. Challenges Faced During Refactoring
The primary challenge during the refactor was shifting from a "Global State" mindset to an "Encapsulated" one. In the procedural version, the `cart` array was globally accessible, making it easy—but dangerous—to manipulate from anywhere in the script. When moving to the **Module Pattern**, I had to carefully define a public interface (the returned object) while ensuring the internal data remained private. Managing the scope within the Immediately Invoked Function Expression (IIFE) required a more disciplined approach to how variables are accessed and updated.

### 2. Improvements with Design Patterns
Applying the **Module Pattern** significantly improved the code in three ways:
* **Encapsulation:** The cart data is now private. It cannot be accidentally overwritten or corrupted by other scripts, which is a major risk in procedural programming.
* **Namespace Protection:** By wrapping the logic in a single `ShoppingCart` object, I reduced global scope pollution, preventing naming conflicts with other functions or variables.
* **Maintainability:** The code is now logically grouped. If the "Add Item" logic needs to change, I know exactly where to find it within the module, and I can be confident the change won't have unintended side effects on global variables.

### 3. Procedural vs. Design Patterns
I would choose procedural programming for small, one-off scripts or simple automation tasks where overhead should be minimal. However, for any application intended for production, scaling, or team collaboration, a design pattern is essential. Patterns provide a predictable structure that makes debugging easier and ensures the codebase remains robust as new features are added.
