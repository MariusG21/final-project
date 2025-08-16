import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Book, User } from "../models/index.js";

const router = express.Router();

router.get("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const comments = await book.getComments({
      include: [{ model: User, attributes: ["username", "id"] }],
      order: [["createdAt", "DESC"]],
    });

    return res.status(200).json({
      success: true,
      data: comments,
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
