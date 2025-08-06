/**
 * Represents a book in the bookstore.
 * Each book has a unique ID, title, author, ISBN, price, and availability.
 */
export class Book {
  static #nextId = 1; // Auto-incremented ID for each new book

  #id;
  #title;
  #author;
  #isbn;
  #price;
  #availability;

  static get nextId() {
    return Book.#nextId;
  }

  /**
   * @param {string} title - The title of the book.
   * @param {string} author - The author of the book.
   * @param {string} isbn - The ISBN number of the book.
   * @param {number} price - The price of the book.
   * @param {boolean} availability - Whether the book is available for purchase.
   */
  constructor(title, author, isbn, price = 0, availability = true) {
    this.#id = Book.#nextId;
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.price = price;
    this.#availability = availability;

    Book.#nextId++;
  }

  /** @returns {number} The book's unique ID. */
  get id() {
    return this.#id;
  }

  /** @returns {string} The book's title. */
  get title() {
    return this.#title;
  }

  /** @param {string} newTitle - Sets a new title for the book. */
  set title(newTitle) {
    this.#title = newTitle;
  }

  /** @returns {string} The book's author. */
  get author() {
    return this.#author;
  }

  /** @param {string} newAuthor - Sets a new author for the book. */
  set author(newAuthor) {
    this.#author = newAuthor;
  }

  /** @returns {string} The book's ISBN number. */
  get isbn() {
    return this.#isbn;
  }

  /** @param {string} newIsbn - Sets a new ISBN number for the book. */
  set isbn(newIsbn) {
    this.#isbn = newIsbn;
  }

  /** @returns {number} The book's price. */
  get price() {
    return this.#price;
  }

  /** @param {number} newPrice - Sets a new price for the book. */
  set price(newPrice) {
    if (newPrice < 0) {
      throw new Error("Price cannot be negative");
    }
    this.#price = newPrice;
  }

  /** @returns {boolean} Whether the book is available for purchase. */
  get availability() {
    return this.#availability;
  }

  /** @param {boolean} newAvailability - Sets book availability. */
  set availability(value) {
    this.#availability = Boolean(value);
  }

  /**
   * @returns {{ bookId: number, title: string, author: string, isbn: string, price: number, availability: boolean }}
   * Returns a plain object with book details.
   */
  get details() {
    return {
      bookId: this.#id,
      title: this.#title,
      author: this.#author,
      isbn: this.#isbn,
      price: this.#price,
      availability: this.#availability,
    };
  }
}
