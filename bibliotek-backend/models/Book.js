import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.js";
import zlib from "zlib";

export const Book = sequelize.define(
  "book",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("genre");
        return rawValue.split(",");
      },
      set(value) {
        const arrayToString = value.join(",");
        this.setDataValue("genre", arrayToString);
      },
    },
    copiesSold: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rating: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        const value = this.getDataValue("description");
        const buffer = Buffer.from(value, "base64");
        const uncompressed = zlib.inflateSync(buffer).toString();
        return uncompressed;
      },
      set(value) {
        const compressed = zlib.deflateSync(value).toString("base64");
        this.setDataValue("description", compressed);
      },
    },

    publishedYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
