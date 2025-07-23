import { User } from "./User.js";
import { Book } from "./Book.js";
import { Cart } from "./Cart.js";
import { Bookshelf } from "./Bookshelf.js";

User.hasOne(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(User, { onDelete: "CASCADE" });

Book.belongsToMany(Cart, { through: "CartBooks" });
Cart.belongsToMany(Book, { through: "CartBooks" });

User.hasOne(Bookshelf, { onDelete: "CASCADE" });
Bookshelf.belongsTo(User, { onDelete: "CASCADE" });

Book.belongsToMany(Bookshelf, { through: "BookshelfBooks" });
Bookshelf.belongsToMany(Book, { through: "BookshelfBooks" });
