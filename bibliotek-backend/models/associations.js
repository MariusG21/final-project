import { User } from "./User.js";
import { Book } from "./Book.js";
import { Cart } from "./Cart.js";
import { Bookshelf } from "./Bookshelf.js";
import { BookshelfBooks } from "./BookshelfBooks.js";
import { FavoriteList } from "./FavoriteList.js";
import { Comment } from "./Comment.js";

User.hasOne(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(User, { onDelete: "CASCADE" });

Book.belongsToMany(Cart, { through: "CartBooks" });
Cart.belongsToMany(Book, { through: "CartBooks" });

User.hasOne(Bookshelf, { onDelete: "CASCADE" });
Bookshelf.belongsTo(User, { onDelete: "CASCADE" });

Book.belongsToMany(Bookshelf, { through: BookshelfBooks });
Bookshelf.belongsToMany(Book, { through: BookshelfBooks });

User.hasOne(FavoriteList, { onDelete: "CASCADE" });
FavoriteList.belongsTo(User, { onDelete: "CASCADE" });

FavoriteList.belongsToMany(Book, { through: "BookmarkedBooks" });
Book.belongsToMany(FavoriteList, { through: "BookmarkedBooks" });

User.hasMany(Comment, { onDelete: "CASCADE", foreignKey: "userId" });
Comment.belongsTo(User, { onDelete: "CASCADE", foreignKey: "userId" });

Book.hasMany(Comment, { onDelete: "CASCADE", foreignKey: "bookId" });
Comment.belongsTo(Book, { onDelete: "CASCADE", foreignKey: "bookId" });
