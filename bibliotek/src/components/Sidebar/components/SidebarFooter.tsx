import { SocialLinks } from "./SocialLinks";
import { CopyrightMessage } from "./CopyrightMessage";
import styles from "./SidebarFooter.module.css";

export function SidebarFooter() {
  return (
    <footer className={styles["footer"]}>
      <SocialLinks />
      <CopyrightMessage />
    </footer>
  );
}
