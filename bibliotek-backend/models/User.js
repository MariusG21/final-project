import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    set(value) {
      this.setDataValue("username", value.trim());
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("email", value.trim().toLowerCase());
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
