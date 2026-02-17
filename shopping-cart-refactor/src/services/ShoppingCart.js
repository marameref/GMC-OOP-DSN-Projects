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
