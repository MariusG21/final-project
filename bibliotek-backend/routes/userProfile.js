import express from "express";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
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

router.put("/me", async (req, res) => {
  try {
    const { userId } = req;
    const updates = req.body;
    let wasUsername = false;

    const user = await User.scope("withDetails").findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (updates.password) {
      return res.status(400).json({
        success: false,
        message: "Password cannot be updated through this endpoint",
      });
    }
    if (updates.username) {
      const existingUser = await User.findOne({
        where: { username: updates.username, id: { [Op.ne]: userId } },
      });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "Username already exists",
        });
      }
      wasUsername = true;
    }
    if (updates.email) {
      const existingEmailUser = await User.findOne({
        where: { email: updates.email, id: { [Op.ne]: userId } },
      });
      if (existingEmailUser) {
        return res.status(409).json({
          success: false,
          message: "Email already exists",
        });
      }
    }

    Object.keys(updates).forEach((key) => {
      if (updates[key] !== undefined) {
        user[key] = updates[key].trim();
      }
    });

    await user.save();

    return res.status(200).json({
      success: true,
      message: "User profile updated successfully",
      ...(wasUsername && { username: user.username }),
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.put("/me/password", async (req, res) => {
  try {
    const { userId } = req;
    const { currentPassword, password } = req.body;

    const user = await User.scope("withPassword").findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    user.password = await bcrypt.hash(password, 8);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Error updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.delete("/me", async (req, res) => {
  try {
    const { userId } = req;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.destroy();

    return res.status(200).json({
      success: true,
      message: "User account deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user account:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export default router;
