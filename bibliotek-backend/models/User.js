import { sequelize } from "./sequelize.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
  "user",
  {
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
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: "",
    },
    favoriteBook: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    favoriteAuthor: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    favoriteGenre: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
  },
  {
    defaultScope: {
      attributes: ["username", "id"],
    },

    scopes: {
      withPassword: {
        attributes: ["username", "id", "password"],
      },
      withDetails: {
        attributes: { exclude: ["password", "updatedAt"] },
      },
    },
  }
);
