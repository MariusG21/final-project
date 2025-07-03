import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";
import { JWT_SECRET } from "../config.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUsername = await User.findOne({
      where: { username: username.trim() },
    });
    if (existingUsername) {
      return res
        .status(409)
        .json({ success: false, message: "Username already taken" });
    }
    const existingEmail = await User.findOne({
      where: { email: email.trim().toLowerCase() },
    });
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

    await newUser.createCart();

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

    const existingUser = await User.findOne({
      where: { username: username.trim() },
      raw: true,
    });
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
    const accessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.json({ success: true, data: { user, accessToken } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

export default router;
