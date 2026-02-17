# Shopping Cart System: Procedural vs. Refactored

This project demonstrates the transition from a **Procedural Programming** approach to a structured **Module Design Pattern** implementation in JavaScript.

## 📂 Project Structure
* `procedural/procedural_cart.js`: Initial implementation using global variables and standalone functions.
* `refactored/module_cart.js`: Refactored implementation using the Module Pattern for encapsulation and state safety.
* `Reflection.md`: A detailed report on the refactoring process and the benefits of design patterns.

## 🚀 Features
* **Add Items:** Store item name, quantity, and price.
* **View Cart:** Display all items with formatted currency and a grand total.
* **Remove Items:** Filter items out of the cart by name.
* **Clear Cart:** Reset the system state.

## 🛠️ How to Run
Ensure you have [Node.js](https://nodejs.org/) installed, then execute the files via terminal:

### Test Procedural Version:
```bash
node procedural/procedural_cart.js
