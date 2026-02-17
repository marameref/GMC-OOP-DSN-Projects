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
