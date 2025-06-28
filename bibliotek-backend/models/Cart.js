import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});
