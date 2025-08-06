import { Cart } from "./cart.js";
import { User } from "./user.js";

/**
 * Represents an order placed by a user.
 * Contains user information, ordered books, and total price.
 */
export class Order {
  #user;
  #cart;

  /**
   * @param {User} user - The user placing the order.
   * @param {Cart} cart - The cart associated with the order.
   */
  constructor(user, cart) {
    this.#user = user;
    this.#cart = cart;
  }

  /** @returns {{ item: object, quantity: number }[]} Ordered books and quantities. */
  get orders() {
    return this.#cart.orders;
  }

  /** @returns {{ userId: number, name: string, email: string }} User details for the order. */
  get user() {
    return this.#user.details;
  }

  /** @returns {number} Total price of the order. */
  get totalPrice() {
    return this.#cart.totalPrice;
  }
}
