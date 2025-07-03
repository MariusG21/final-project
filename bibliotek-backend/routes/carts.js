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

export default router;
