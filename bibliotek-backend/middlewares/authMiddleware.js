import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res
      .status(401)
      .json({ success: false, message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ success: false, message: "Token missing" });
  }

  try {
    const decodedUserId = jwt.verify(token, JWT_SECRET);
    req.userId = decodedUserId;
    console.log(decodedUserId);
    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};
