import express from "express";
import { User } from "../models/index.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUsername = await User.findOne({ where: { username } });
    if (existingUsername) {
      return res
        .status(409)
        .json({ success: false, message: "Username already taken" });
    }
    const existingEmail = await User.findOne({ where: { email } });
    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Account already in use under this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "Success",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ where: { username }, raw: true });
    if (!existingUser) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username." });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password." });
    }

    const { password: _, updatedAt: __, ...user } = existingUser;

    return res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

export default router;
