import { FiMenu, FiX } from "react-icons/fi";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu() {
  const { isSidebarOpenForSmallSize, toggleSidebar } = useScreenSizeContext();

  return (
    <div
      role="button"
      onClick={toggleSidebar}
      className={styles["hamburger-menu"]}
    >
      {isSidebarOpenForSmallSize ? <FiX /> : <FiMenu />}
    </div>
  );
}
