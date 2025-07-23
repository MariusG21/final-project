import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export const Bookshelf = sequelize.define(
  "bookshelf",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
  }
);
