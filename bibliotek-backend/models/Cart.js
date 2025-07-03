import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

export const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  subtotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  taxRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
  },
  tax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});
