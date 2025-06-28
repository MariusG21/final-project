import { SidebarLink } from "./SidebarLink";
import { BookOpen, Bookmark, Clock, TrendingUp } from "lucide-react";
import styles from "./SidebarNav.module.css";

export function SidebarNav() {
  return (
    <nav className={styles["book-menu"]}>
      <SidebarLink to="/library" label="Bookshelf" icon={BookOpen} />
      <SidebarLink to="/bookmarked" label="Bookmarked" icon={Bookmark} />
      <SidebarLink to="/best-sellers" label="Best Sellers" icon={TrendingUp} />
      <SidebarLink
        to="/continue-reading"
        label="Continue reading"
        icon={Clock}
      />
    </nav>
  );
}
