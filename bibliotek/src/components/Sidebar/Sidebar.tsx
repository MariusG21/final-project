import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { SidebarNav } from "./components/SidebarNav";
import { SidebarFooter } from "./components/SidebarFooter";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const { isSidebarOpenForSmallSize } = useScreenSizeContext();
  return (
    <aside
      className={`${styles["sidebar"]} ${
        isSidebarOpenForSmallSize ? styles["isOpen"] : styles["isClosed"]
      }`}
    >
      <SidebarNav />
      <SidebarFooter />
    </aside>
  );
}
