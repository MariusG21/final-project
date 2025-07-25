import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { Book, sequelize, User } from "../models/index.js";
import { getCartTotals } from "../utils/getCartTotals.js";

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
    const cart = await user.getCart({
      attributes: {
        exclude: ["userId"],
      },
    });

    const cartTotals = await getCartTotals(cart);

    return res.json({ success: true, data: cartTotals });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

router.get("/items", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    const cart = await user.getCart();
    const books = await cart.getBooks({
      attributes: ["id", "title", "author", "image", "price", "discount"],
      joinTableAttributes: [],
    });

    return res.json({ success: true, data: books });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
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

    const bookAdded = await Book.findByPk(bookId);
    if (!bookAdded) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found." });
    }

    const cart = await user.getCart();
    const bookshelf = await user.getBookshelf();

    const [inCart, inBookshelf] = await Promise.all([
      cart.hasBook(bookAdded),
      bookshelf.hasBook(bookAdded),
    ]);

    if (inCart || inBookshelf) {
      const message = inCart
        ? "Book already in the cart."
        : "You already own this book";
      return res.status(409).json({ success: false, message });
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

router.delete("/items/:id", async (req, res) => {
  try {
    const { userId } = req;
    const { id: bookId } = req.params;

    const user = await User.findByPk(userId);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    const cart = await user.getCart();
    await cart.removeBook(bookId);

    return res.json({ success: true, message: "Removed from cart." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to remove." });
  }
});

router.post("/checkout", async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { userId } = req;
    const user = await User.findByPk(userId, { transaction });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    const cart = await user.getCart({ transaction });
    const bookshelf = await user.getBookshelf({ transaction });

    const booksCount = await cart.countBooks({ transaction });
    if (!booksCount) {
      return res.json({ success: true, message: "Your cart is empty." });
    }

    const books = await cart.getBooks({ transaction });

    await bookshelf.addBooks(books, { transaction });

    await cart.removeBooks(books, { transaction });

    await transaction.commit();

    return res.json({
      success: true,
      message: "Purchase completed successfully. Enjoy reading.",
    });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
});

export default router;
