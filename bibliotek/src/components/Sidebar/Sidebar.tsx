import { SidebarNav } from "./components/SidebarNav";
import { SidebarFooter } from "./components/SidebarFooter";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles["sidebar"]}>
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}
