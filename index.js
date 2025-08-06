// Design and implement an object-oriented program in JavaScript to simulate the functioning of an online bookstore. This assignment will test your understanding of classes, encapsulation, inheritance, and polymorphism.

// ### **Part 2: Implementation**

// 3. **Place Orders**: Implement the process of placing an order. Users should be able to create instances of the `Order` class, specifying the books they want to purchase.

import { User } from "./user.js";
import { Book } from "./book.js";
import { Cart } from "./cart.js";
import { Order } from "./order.js";

/**
 * Create Objects: Instantiate multiple `Book` objects, representing different books available in the bookstore.
 * Also, create a few `User` objects.
 */

const users = [
  new User("John", "john@mail.com"),
  new User("Jane", "jane@mail.com"),
  new User("Rick", "rick@mail.com"),
  new User("Bober", "bober@mail.com"),
  new User("Fernando", "fernando@mail.com"),
];

const books = [
  new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "9780743273565",
    45.99,
    true
  ),
  new Book("To Kill a Mockingbird", "Harper Lee", "9780060935467", 39.99, true),
  new Book("1984", "George Orwell", "9780451524935", 42.5, false),
  new Book("Pride and Prejudice", "Jane Austen", "9780141040349", 34.99, true),
  new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    "9780316769488",
    29.99,
    true
  ),
  new Book("The Hobbit", "J.R.R. Tolkien", "9780547928227", 54.99, true),
  new Book("Fahrenheit 451", "Ray Bradbury", "9781451673319", 41.99, false),
  new Book("Moby Dick", "Herman Melville", "9781503280786", 49.99, true),
  new Book("The Odyssey", "Homer", "9780140268867", 55.99, true),
  new Book("War and Peace", "Leo Tolstoy", "9781853260629", 64.99, false),
];

/**
 * Add Books to Cart: Simulate users adding books to their cart by creating instances of the `Cart` class and using its methods.
 */

const johnCart = new Cart(users[0]);
johnCart.addItem(books[0]); // add "The Great Gatsby"
johnCart.addItem(books[2]); // add "1984" -> should not be added because it is not available
johnCart.addItem(books[3]); // add one "Pride and Prejudice"
johnCart.addItem(books[3]); // add one more "Pride and Prejudice"
johnCart.removeItem(4); // remove one "Pride and Prejudice"

const johnOrder = new Order(users[0], johnCart);

console.log("Cart");
console.log(johnCart.orders);
console.log("Total in cart: PLN " + johnCart.totalPrice);

console.log("Order");
console.log(johnOrder.orders);
console.log("Total order price: PLN " + johnOrder.totalPrice);
