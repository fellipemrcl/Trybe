const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll({
    order: [["title", "ASC"]],
  });
  return books;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    ORDER: [["title", "ASC"]],
  });
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });
  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

module.exports = {
  createBook,
  deleteBook,
  getAll,
  getByAuthor,
  getById,
  updateBook,
};
