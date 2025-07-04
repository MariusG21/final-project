import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Book, User } from "../models/index.js";

const router = express.Router();
router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const cart = await user.getCart();

    return res.json({ success: true, data: cart });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.post("/items", async (req, res) => {
  try {
    const { userId } = req;
    const { id: bookId } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const cart = await user.getCart();

    const bookAdded = await Book.findByPk(bookId);
    if (!bookAdded) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found." });
    }

    const existingBook = await cart.hasBook(bookAdded);
    if (existingBook) {
      return res
        .status(409)
        .json({ success: false, message: "Book already in the cart." });
    }

    await cart.addBook(bookAdded);
    return res.json({ success: true, message: "Book added successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
});

export default router;
