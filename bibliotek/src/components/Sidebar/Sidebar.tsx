import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import { SidebarNav } from "./components/SidebarNav";
import { SidebarFooter } from "./components/SidebarFooter";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const { isSidebarOpenForSmallScreens } = useSidebarContext();
  return (
    <aside
      className={`${styles["sidebar"]} ${
        isSidebarOpenForSmallScreens ? styles["isOpen"] : ""
      }`}
    >
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}
