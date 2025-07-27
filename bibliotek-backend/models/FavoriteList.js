import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";

export const FavoriteList = sequelize.define(
  "FavoriteList",
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
