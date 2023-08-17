const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const winFriends = new Book(
  'How to Win Friends and Influence People',
  'Dale Carnegie',
  276,
  'true'
);

const myLibrary = [theHobbit, winFriends];

// Operator constructor that helps us create new book items and manipulate them.
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === true ? true : read === false;
}

function displayBooks() {
  myLibrary.forEach((book) => {
    // Div for the book card
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-card');

    // Book title
    const bookTitle = document.createElement('h2');
    bookTitle.innerText = book.title;
    bookTitle.classList.add('book-title');

    // Book author
    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = book.author;
    bookAuthor.classList.add('book-author');

    // Number of pages
    const bookPages = document.createElement('p');
    bookPages.innerText = book.pages;
    bookPages.classList.add('book-pages');

    // Read?
    const didRead = document.createElement('p');
    book.read
      ? (didRead.innerText = 'Already read it.')
      : (didRead.innerText = 'Not yet.');

    book.read
      ? didRead.classList.add('read')
      : didRead.classList.add('not-read');

    bookDiv.append(bookTitle, bookAuthor, bookPages, didRead);
    document.body.appendChild(bookDiv);
  });
}

function addBookToLibrary() {
  // let visitor add his own books.
}

displayBooks();
