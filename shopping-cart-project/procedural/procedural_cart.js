// Part 1: Procedural Implementation
// Global variable to store cart data
let cart = [];

function addItem(name, quantity, price) {
    cart.push({ name, quantity, price });
    console.log(`> addItem("${name}", ${quantity}, ${price})`);
}

function viewCart() {
    console.log("\n--- Procedural Cart View ---");
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.quantity * item.price;
        total += itemTotal;
        console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
    });
    console.log(`Total: ${total.toFixed(2)} TND\n`);
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    console.log(`> removeItem("${name}")`);
}

function clearCart() {
    cart = [];
    console.log("> clearCart()");
}

// --- Testing Procedural Version ---
addItem("Apple", 2, 1.5);
addItem("Orange", 3, 2.0);
viewCart();
removeItem("Apple");
