import express from "express";
import { Book } from "../models/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rawValue = await Book.findAll({
      order: [["copiesSold", "DESC"]],
      limit: 3,
      attributes: ["id", "title", "author", "image"],
      raw: true,
    });

    const bestSellers = rawValue.map((book, i) => {
      return {
        ...book,
        place: i + 1,
      };
    });

    return res.status(200).json({
      success: true,
      data: bestSellers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching best sellers.",
    });
  }
});

export default router;
