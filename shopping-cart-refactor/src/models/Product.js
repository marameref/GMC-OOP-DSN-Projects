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
