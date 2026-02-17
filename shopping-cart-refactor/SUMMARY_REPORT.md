
---

### ## 📂 Project Structure

```text
shopping-cart-refactor/
├── src/
│   ├── models/
│   │   └── Product.js       # Builder Pattern
│   ├── patterns/
│   │   ├── Strategy.js      # Strategy Pattern (Discounts)
│   │   └── Observer.js      # Observer Pattern (Notifications)
│   └── services/
│       └── ShoppingCart.js  # Refactored Cart Logic
├── index.js                 # Simulation & Testing
├── SUMMARY_REPORT.md        # Technical Reflection
└── package.json             # ES Modules config

```

---

### ## 🛠️ Iteration 0: The "Bad Code" (Starting Point)

Before we refactor, here is the "messy" code you are improving. It has **tight coupling** and a **massive method** (The "God Method" smell).

```javascript
// This is what we are fixing!
function process(items, discountType, userEmail) {
    let t = 0;
    for (let i = 0; i < items.length; i++) {
        t += items[i].price;
    }
    if (discountType === "SALE") t = t * 0.9;
    else if (discountType === "VIP") t = t * 0.8;
    
    console.log("Total: " + t);
    if (userEmail) console.log("Sending email to " + userEmail);
}

```

---

### ## 🛠️ Iteration 1: The Builder Pattern (`src/models/Product.js`)

We replace simple objects with a **Builder** to handle complex product creation (like adding categories or weights) cleanly.

```javascript
export class Product {
    constructor(builder) {
        this.name = builder.name;
        this.price = builder.price;
        this.category = builder.category || "General";
    }
}

export class ProductBuilder {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    setCategory(category) {
        this.category = category;
        return this;
    }
    build() {
        return new Product(this);
    }
}

```

---

### ## 🛠️ Iteration 2: Strategy & Observer (`src/patterns/`)

We move the discount logic into a **Strategy** and the notification logic into an **Observer**.

**Strategy.js**

```javascript
export const VIPDiscount = { calculate: (total) => total * 0.8 };
export const RegularDiscount = { calculate: (total) => total };

```

**Observer.js**

```javascript
export class User {
    constructor(name) { this.name = name; }
    update(msg) { console.log(`🔔 [${this.name}]: ${msg}`); }
}

```

---

### ## 🛠️ Iteration 3: The Refactored Cart (`src/services/ShoppingCart.js`)

This brings everything together, following **Single Responsibility** and **Open/Closed** principles.

```javascript
export class ShoppingCart {
    constructor() {
        this.items = [];
        this.observers = [];
        this.strategy = { calculate: (t) => t }; // Default
    }

    setDiscountStrategy(strategy) { this.strategy = strategy; }
    subscribe(user) { this.observers.push(user); }

    addItem(product) {
        this.items.push(product);
    }

    checkout() {
        const subtotal = this.items.reduce((acc, item) => acc + item.price, 0);
        const final = this.strategy.calculate(subtotal);
        this.observers.forEach(u => u.update(`Order total: ${final.toFixed(2)} TND`));
    }
}

```

---

### ## 📝 Summary Report Snippet (`SUMMARY_REPORT.md`)

To meet the "Description" requirements, your report should include:

> **How patterns improved design:**
> * **Strategy:** Removed hardcoded `if/else` blocks. Adding a new discount (e.g., "SummerSale") no longer requires changing the `ShoppingCart` class.
> * **Builder:** Standardized product creation, making the code more readable and preventing errors with optional parameters.
> * **Observer:** Decoupled the notification logic from the checkout process.
> 
> 

---

### ## 🚀 Testing the Refactor (`index.js`)

Run this to see it all work:

```javascript
import { ProductBuilder } from './src/models/Product.js';
import { ShoppingCart } from './src/services/ShoppingCart.js';
import { VIPDiscount } from './src/patterns/Strategy.js';
import { User } from './src/patterns/Observer.js';

const cart = new ShoppingCart();
const user = new User("Amarachi");

cart.subscribe(user);
cart.setDiscountStrategy(VIPDiscount);

const laptop = new ProductBuilder("MacBook Pro", 2500)
    .setCategory("Tech")
    .build();

cart.addItem(laptop);
cart.checkout();

```