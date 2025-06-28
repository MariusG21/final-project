import { NavLink } from "react-router";
import type { LucideIcon } from "lucide-react";
import styles from "./SidebarLink.module.css";

type SidebarLinkProps = {
  label: string;
  icon: LucideIcon;
  to: string;
};

export function SidebarLink({ to, label, icon: Icon }: SidebarLinkProps) {
  return (
    <NavLink to={to} className={styles["links"]}>
      <div className={styles["links-icons"]}>
        <Icon />
      </div>
      {label}
    </NavLink>
  );
}
