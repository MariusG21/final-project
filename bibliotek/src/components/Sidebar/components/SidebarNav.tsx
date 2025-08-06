import { SidebarLink } from "./SidebarLink";
import { BookOpen, Bookmark, Clock, TrendingUp, HomeIcon } from "lucide-react";
import styles from "./SidebarNav.module.css";
import { useFavoriteBooksContext } from "@/context/favoriteBooks/useFavoriteBooksContext";
import { useBookshelfContext } from "@/context/bookshelf/useBookshelfContext";

export function SidebarNav() {
  const { favoriteCount } = useFavoriteBooksContext();
  const { booksCount } = useBookshelfContext();

  return (
    <nav className={styles["book-menu"]}>
      <SidebarLink to="/" label="Home" icon={HomeIcon} />
      <SidebarLink to="/bookshelf" label="Bookshelf" icon={BookOpen}>
        {booksCount !== 0 && <span>{booksCount}</span>}
      </SidebarLink>
      <SidebarLink to="/bookmarked" label="Bookmarked" icon={Bookmark}>
        {favoriteCount !== 0 && <span>{favoriteCount}</span>}
      </SidebarLink>
      <SidebarLink to="/best-sellers" label="Best Sellers" icon={TrendingUp} />
      <SidebarLink
        to="/continue-reading"
        label="Continue reading"
        icon={Clock}
      />
    </nav>
  );
}
