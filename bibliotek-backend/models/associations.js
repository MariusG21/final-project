import { User } from "./User.js";
import { Book } from "./Book.js";
import { Cart } from "./Cart.js";

User.hasOne(Cart);
Cart.belongsTo(User);

Book.belongsToMany(Cart, { through: "CartBooks" });
Cart.belongsToMany(Book, { through: "CartBooks" });
