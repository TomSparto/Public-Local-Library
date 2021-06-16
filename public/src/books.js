function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const result = [];
  const resultReturned = [];
  const resultNotReturned = [];
  books.forEach((book) => {
    if (book.borrows.some((borrow) => borrow.returned === false)) {
      resultNotReturned.push(book);
    } else resultReturned.push(book);
  });
  result.push(resultNotReturned, resultReturned);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  const result = borrowed.map((borrow) => {
    const account = accounts.find((account) => borrow.id === account.id);
    return { ...borrow, ...account };
  });
  result.length = 10;
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
