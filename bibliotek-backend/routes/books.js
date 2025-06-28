import express from "express";
import { Op } from "sequelize";
import { Book } from "../models/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { id: targetId } = req.query;

  if (targetId) {
    const targetBook = await Book.findByPk(targetId);
    const targetGenres = targetBook.genre;

    const theRestOfTheBooks = await Book.findAll({
      where: {
        id: {
          [Op.ne]: targetId,
        },
      },
    });

    const similarBooks = theRestOfTheBooks.filter((book) => {
      const bookGenres = book.genre;
      return targetGenres.some((g) => bookGenres.includes(g));
    });

    return res.status(200).json({ success: true, data: similarBooks });
  }

  const books = await Book.findAll({
    attributes: {
      exclude: ["description", "publishedYear", "genre", "copiesSold"],
    },
  });
  res.status(200).json({
    success: true,
    data: books,
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    const book = await Book.findByPk(id);
    if (book) {
      return res.status(200).json({
        success: true,
        data: book,
      });
    }
  }
  res.status(400).json({
    success: false,
    message: "Book not found. Please check the ID and try again.",
  });
});

export default router;
