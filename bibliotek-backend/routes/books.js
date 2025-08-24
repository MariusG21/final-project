import express from "express";
import fuzzysort from "fuzzysort";
import { Op } from "sequelize";
import { Book } from "../models/index.js";
import { searchBooks } from "../utils/searchBooks.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { id: targetId, search, page = 1, limit = 20 } = req.query;

    if (targetId) {
      const targetBook = await Book.findByPk(targetId);

      if (!targetBook) {
        return res.status(404).json({
          success: false,
          message: "Something went wrong.",
        });
      }

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

    if (search) {
      const matchedBooks = await searchBooks(search);

      return res.status(200).json({
        success: true,
        data: matchedBooks,
      });
    }

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const offset = (pageNum - 1) * limitNum;

    const { count, rows } = await Book.findAndCountAll({
      attributes: {
        exclude: ["description", "publishedYear", "genre", "copiesSold"],
      },
      limit: limitNum,
      offset,
    });
    return res.status(200).json({
      success: true,
      data: rows,
      pagination: {
        totalBooks: count,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(count / limitNum),
      },
    });
  } catch (error) {
    console.log("Error in Get /api/books:" + error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found. Please check the ID and try again.",
      });
    }
    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    console.error("Error in GET /api/books/:id:" + error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

export default router;
