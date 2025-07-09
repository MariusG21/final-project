import { FiMenu, FiX } from "react-icons/fi";
import { useSidebarContext } from "@/context/sidebar/useSidebarContext";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu() {
  const { isSidebarOpenForSmallScreens, toggleSidebar } = useSidebarContext();

  return (
    <div
      role="button"
      onClick={toggleSidebar}
      className={styles["hamburger-menu"]}
    >
      {isSidebarOpenForSmallScreens ? <FiX /> : <FiMenu />}
    </div>
  );
}
