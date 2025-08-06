/**
 * Represents a user in the bookstore system.
 * Each user has a unique ID, name, and email.
 * Encapsulation is maintained via private fields (#).
 */
export class User {
  static #nextId = 1; // Auto-incremented ID for each new user

  static get nextId() {
    return User.#nextId;
  }

  #id;
  #name;
  #email;

  /**
   * @param {string} name - The name of the user.
   * @param {string} email - The email address of the user.
   */
  constructor(name, email) {
    this.#name = name;
    this.#email = email;
    this.#id = User.#nextId;

    User.#nextId++;
  }

  /** @returns {number} The user's unique ID. */
  get id() {
    return this.#id;
  }

  /** @returns {string} The user's name. */
  get name() {
    return this.#name;
  }

  /** @param {string} newName - Sets a new name for the user. */
  set name(newName) {
    this.#name = newName;
  }

  /** @returns {string} The user's email. */
  get email() {
    return this.#email;
  }

  /** @param {string} newEmail - Sets a new email for the user. */
  set email(newEmail) {
    this.#email = newEmail;
  }

  /**
   * @returns {{ userId: number, name: string, email: string }}
   * Returns a plain object with user details.
   */
  get details() {
    return {
      userId: this.#id,
      name: this.#name,
      email: this.#email,
    };
  }
}
