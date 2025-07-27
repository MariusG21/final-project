import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { User } from "../models/index.js";

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

    const favoriteList = await user.getFavoriteList();

    const favoriteBooks = await favoriteList.getBooks();

    return res.json({ success: true, data: favoriteBooks });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

router.post("/", async (req, res) => {
  try {
    const { userId } = req;
    const { id: bookId } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const favoriteList = await user.getFavoriteList();
    const isFavorite = await favoriteList.hasBook(bookId);
    if (isFavorite) {
      return res
        .status(409)
        .json({ success: false, message: "Already in favorites." });
    }
    await favoriteList.addBook(bookId);

    return res.json({ success: true, message: "Successfully bookmarked." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { userId } = req;
    const { id: bookId } = req.params;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const favoriteList = await user.getFavoriteList();
    await favoriteList.removeBook(bookId);

    return res.json({ success: true, message: "Book removed from favorites." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

export default router;
