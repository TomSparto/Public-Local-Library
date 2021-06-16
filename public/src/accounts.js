function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last > nameB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  books.forEach((book) => {
    book.borrows.forEach((transaction) => {
      if (transaction.id === account.id) counter++;
    });
  });
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const array = [];
  books.forEach((book) => {
    const borrowed = book.borrows.filter(
      (borrow) => borrow.id === account.id && borrow.returned === false
    );
    if (borrowed.length > 0) {
      const found = authors.find((author) => book.authorId === author.id);
      array.push({
        id: book.id,
        title: book.title,
        genre: book.genre,
        authorId: book.authorId,
        author: found,
        borrows: borrowed,
      });
    }
  });
  return array;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
