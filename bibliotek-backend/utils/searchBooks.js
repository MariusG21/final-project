import fuzzysort from "fuzzysort";
import { Book } from "../models/index.js";

export const searchBooks = async (search) => {
  if (!search) {
    return;
  }

  const cleanSearch = search.trim().toLowerCase();

  const books = await Book.scope("withKeywords").findAll({
    attributes: {
      exclude: ["description", "publishedYear", "genre", "copiesSold"],
    },
  });

  const searchedBooks = books.map((book) => ({
    id: book.id,
    keywords: book.keywords.join(" ").toLowerCase(),
  }));

  const results = fuzzysort.go(cleanSearch, searchedBooks, {
    keys: ["keywords"],
    threshold: -20,
    limit: 10,
  });

  const matchedBooks = results
    .map((result) => {
      return books.find((book) => {
        return book.id === result.obj.id;
      });
    })
    .filter(Boolean)
    .map((book) => {
      const { keywords, ...rest } = book.get({ plain: true });
      return rest;
    });

  return matchedBooks;
};
