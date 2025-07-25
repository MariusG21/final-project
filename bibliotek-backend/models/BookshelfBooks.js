import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export const BookshelfBooks = sequelize.define(
  "BookshelfBooks",
  {
    addedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false, freezeTableName: true }
);
