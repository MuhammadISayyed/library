// TODO

// Operator constructor that helps us create new book items and manipulate them.
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = readIt.checked ? true : false;
}

const myLibrary = [];

// Dealing with the dialog
const bookDialog = document.getElementById('book-dialog');
const openBtn = document.getElementById('open-btn');
const submitBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('close-btn');
const addTitle = document.getElementById('book-title');
const addAuthor = document.getElementById('book-author');
const addPages = document.getElementById('book-pages');
const readIt = document.getElementById('read-it');

openBtn.addEventListener('click', () => {
  bookDialog.showModal();
});

closeBtn.addEventListener('click', () => {
  bookDialog.close();
});

submitBtn.addEventListener('click', () => {
  console.log('there we go adding a new book...');
  const newBook = new Book(
    addTitle.value,
    addAuthor.value,
    addPages.value,
    readIt.checked
  );
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks(myLibrary[myLibrary.length - 1]);
});

// Display added books
const displayBooks = function (book) {
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
  const didRead = document.createElement('button');
  didRead.setAttribute('id', 'read-btn');
  book.read === true
    ? (didRead.innerText = 'Already read it.')
    : (didRead.innerText = 'Not yet.');
  book.read ? didRead.classList.add('read') : didRead.classList.add('not-read');
  didRead.addEventListener('click', () => {
    if (book.read === true) {
      didRead.innerText = 'Not yet.';
      book.read = false;
    } else {
      didRead.innerText = 'Already read it.';
      book.read = true;
    }
  });

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove book';
  removeBtn.classList.add('remove-btn');
  removeBtn.setAttribute('id', 'remove-btn');

  removeBtn.addEventListener('click', () => {
    bookDiv.remove();
  });

  bookDiv.append(bookTitle, bookAuthor, bookPages, didRead, removeBtn);
  document.body.appendChild(bookDiv);
};

// // Display added books
// const displayBooks = function (library) {
//   library.forEach((book) => {
//     // Div for the book card
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('book-card');

//     // Book title
//     const bookTitle = document.createElement('h2');
//     bookTitle.innerText = book.title;
//     bookTitle.classList.add('book-title');

//     // Book author
//     const bookAuthor = document.createElement('p');
//     bookAuthor.innerText = book.author;
//     bookAuthor.classList.add('book-author');

//     // Number of pages
//     const bookPages = document.createElement('p');
//     bookPages.innerText = book.pages;
//     bookPages.classList.add('book-pages');

//     // Read?
//     const didRead = document.createElement('p');
//     book.read
//       ? (didRead.innerText = 'Already read it.')
//       : (didRead.innerText = 'Not yet.');

//     book.read
//       ? didRead.classList.add('read')
//       : didRead.classList.add('not-read');

//     bookDiv.append(bookTitle, bookAuthor, bookPages, didRead);
//     document.body.appendChild(bookDiv);

//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Remove book';
//     // removeBtn.classList.add('remove-btn');
//     removeBtn.setAttribute('id', 'remove-btn');

//     removeBtn.addEventListener('click', () => {
//       bookDiv.remove();
//       let index = myLibrary.indexOf(book);
//       if (index > -1) {
//         myLibrary.splice(index, 1);
//       }
//     });
//   });
// };

// addBookToLibrary();
