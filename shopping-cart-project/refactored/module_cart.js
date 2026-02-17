// Part 2: Refactored Module Pattern Implementation

const ShoppingCart = (function () {
    // Private data - Encapsulated and protected from global scope
    let items = [];

    // Public API returned to the user
    return {
        addItem: function (name, quantity, price) {
            items.push({ name, quantity, price });
            console.log(`> ShoppingCart.addItem("${name}", ${quantity}, ${price})`);
        },
        viewCart: function () {
            console.log("\n--- Refactored Module Cart View ---");
            if (items.length === 0) {
                console.log("Cart is empty.");
                return;
            }
            let total = 0;
            items.forEach(item => {
                let itemTotal = item.quantity * item.price;
                total += itemTotal;
                console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
            });
            console.log(`Total: ${total.toFixed(2)} TND\n`);
        },
        removeItem: function (name) {
            items = items.filter(item => item.name !== name);
            console.log(`> ShoppingCart.removeItem("${name}")`);
        },
        clearCart: function () {
            items = [];
            console.log("> ShoppingCart.clearCart()");
        }
    };
})();

// --- Testing Module Version ---
ShoppingCart.addItem("Apple", 2, 1.5);
ShoppingCart.addItem("Orange", 3, 2.0);
ShoppingCart.viewCart();
ShoppingCart.removeItem("Apple");
ShoppingCart.viewCart();
