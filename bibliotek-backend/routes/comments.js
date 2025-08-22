import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Book, Comment, User } from "../models/index.js";

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

router.use(authMiddleware);

router.post("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const { content } = req.body;
    const { userId } = req;

    if (!content || content.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Comment content cannot be empty",
      });
    }

    const book = await Book.findByPk(bookId);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    const comment = await book.createComment({
      content,
      userId,
    });

    return res.status(201).json({
      success: true,
      message: "Comment created successfully",
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.put("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;
    const { userId } = req;

    if (!content || content.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Comment content cannot be empty",
      });
    }

    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    if (comment.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You can only edit your own comments",
      });
    }

    comment.content = content;
    comment.edited = true;
    await comment.save();

    return res.status(200).json({
      success: true,
      message: "Comment updated successfully",
    });
  } catch (error) {
    console.error("Error updating comment:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.delete("/:commentId", async (req, res) => {
  try {
    const { commentId } = req.params;
    const { userId } = req;

    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: "Comment not found",
      });
    }

    if (comment.userId !== userId) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own comments",
      });
    }

    await comment.destroy();

    return res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
