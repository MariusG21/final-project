import { User } from "./User.js";
import { Book } from "./Book.js";
import { Cart } from "./Cart.js";

User.hasOne(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(User, { onDelete: "CASCADE" });

Book.belongsToMany(Cart, { through: "CartBooks" });
Cart.belongsToMany(Book, { through: "CartBooks" });
