import express from "express";
import { sequelize, User } from "../models/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const bookshelf = await user.getBookshelf();

    const books = await bookshelf.getBooks({
      through: {
        attributes: ["addedAt"],
      },
      order: [[sequelize.col("BookshelfBooks.addedAt"), "DESC"]],
      attributes: ["id", "title", "author", "image"],
    });

    const cleanBooks = books.map((book) => {
      const b = book.toJSON();
      delete b.BookshelfBooks;
      return b;
    });

    return res.json({ success: true, data: cleanBooks });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

export default router;
