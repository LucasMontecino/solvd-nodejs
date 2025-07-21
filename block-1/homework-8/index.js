// Part 1 Class Design

class Book {
  constructor(title, author, isbn, price, availability) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.price = price;
    this.availability = availability;
  }
}

class User {
  constructor(name, email, userID) {
    this.name = name;
    this.email = email;
    this.userID = userID;
  }
}

class Cart {
  constructor() {
    this.cart = [];
  }

  addBook(newBook) {
    if (!newBook.availability)
      throw new Error(`The book: ${newBook.title} isn't available`);
    this.cart = this.cart.concat(newBook);
  }

  removeBook(isbn) {
    this.cart = this.cart.filter((book) => book.isbn !== isbn);
  }

  calculateTotal() {
    const totalCartPrice = this.cart.reduce((acc, el) => acc + el.price, 0);
    return totalCartPrice;
  }
}

class Order {
  constructor(user, books, total) {
    this.user = user;
    this.books = books;
    this.total = total;
  }

  applyDiscount(discount) {
    this.total = this.total - this.total * (discount / 100);
  }
}

// Part 2: Implementation

const book1 = new Book(
  'The Great Gatsby',
  'F. Scott Fitzgerald',
  '9780743273565',
  10.99,
  true
);
const book2 = new Book(
  'To Kill a Mockingbird',
  'Harper Lee',
  '9780061120084',
  8.99,
  true
);
const book3 = new Book('1984', 'George Orwell', '9780451524935', 9.99, false);
const book4 = new Book(
  'Pride and Prejudice',
  'Jane Austen',
  '9780141439518',
  7.99,
  true
);
const book5 = new Book(
  'The Hobbit',
  'J.R.R. Tolkien',
  '9780547928227',
  12.99,
  true
);

const user1 = new User('Alice Johnson', 'alice@example.com', 'U001');
const user2 = new User('Bob Smith', 'bob@example.com', 'U002');
const user3 = new User('Charlie Brown', 'charlie@example.com', 'U003');

const cart1 = new Cart();

try {
  cart1.addBook(book2);
  cart1.addBook(book3);
  cart1.addBook(book4);
  console.log('display cart 1...', cart1);
  const order1 = new Order(user1, cart1.cart, cart1.calculateTotal());
} catch (error) {
  console.error({ error: error.message });
}

// Part 3: Demonstration

function cartDisplay(cart, total) {
  return {
    currentCart: cart.map((book) => ({ ...book })),
    total: `Total: $${total}`,
  };
}

function orderDisplay(order) {
  return {
    userEmail: order.user.email,
    cart: order.books.map((book) => ({ ...book })),
    total: `Total: $${order.total.toFixed(2)}`,
  };
}

const cart2 = new Cart();

cart2.addBook(book1);
cart2.addBook(book5);

console.log(cartDisplay(cart2.cart, cart2.calculateTotal()));

cart2.removeBook(book1.isbn);
console.log(cartDisplay(cart2.cart, cart2.calculateTotal()));

const order2 = new Order(user2, cart2.cart, cart2.calculateTotal());

console.log(orderDisplay(order2));

order2.applyDiscount(15);

console.log(orderDisplay(order2));
