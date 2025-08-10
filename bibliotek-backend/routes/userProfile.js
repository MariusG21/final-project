import express from "express";
import { User } from "../models/index.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/me", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.scope("withDetails").findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
