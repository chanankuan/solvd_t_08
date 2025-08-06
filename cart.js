import { User } from "./user.js";

/**
 * Represents a shopping cart for a user.
 * Contains books with quantities and calculates total price.
 */
export class Cart {
  #user;
  #orders;

  /**
   * @param {User} user - The user who owns the cart.
   */
  constructor(user) {
    this.#user = user;
    this.#orders = []; // Array of { item: Book, quantity: number }
  }

  /** @returns {{ userId: number, name: string, email: string }} User details. */
  get user() {
    return this.#user.details;
  }

  /**
   * @returns {{ item: object, quantity: number }[]} Array of items and quantities.
   * Encapsulation: Returns new objects so the original cart state cannot be directly modified.
   */
  get orders() {
    return this.#orders.map((order) => ({
      item: order.item.details,
      quantity: order.quantity,
    }));
  }

  /**
   * Adds a book to the cart.
   * @param {Book} item - The book to add.
   */
  addItem(item) {
    if (!item.availability) return;

    let existingItem = this.#orders.find((order) => order.item.id === item.id);
    // console.log(existingItem);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.#orders.push({ item, quantity: 1 });
    }
  }

  /**
   * Removes one quantity of a book from the cart.
   * If quantity becomes zero, removes the book entirely.
   * @param {number} itemId - The ID of the book to remove.
   */
  removeItem(itemId) {
    let existingItem = this.#orders.find((item) => item.item.id === itemId);

    if (!existingItem) return;

    if (existingItem.quantity > 1) {
      existingItem.quantity -= 1;
    } else {
      this.#orders = this.#orders.filter((order) => order.item.id !== itemId);
    }
  }

  /** @returns {number} The total price of all books in the cart. */
  clearCart() {
    this.#orders = [];
  }

  get totalPrice() {
    return this.#orders.reduce(
      (acc, order) => acc + order.item.price * order.quantity,
      0
    );
  }
}
