import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import { Book } from "./models/index.js";
import { defaultBooks } from "./defaultData/defaultBooks.js";
import booksRouter from "./routes/books.js";
import userRouter from "./routes/users.js";
import bestSellersRouter from "./routes/bestSellers.js";
import cartRouter from "./routes/carts.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// routes
app.use("/api/books", booksRouter);
app.use("/api/users", userRouter);
app.use("/api/best-sellers", bestSellersRouter);
app.use("/api/cart", cartRouter);

const startServer = async () => {
  await sequelize.sync({ force: true });
  // await Book.destroy({ where: {} });
  const booksCount = await Book.count();
  if (booksCount === 0) {
    await Book.bulkCreate(defaultBooks);
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`);
  });
};

startServer();
