import { NavLink } from "react-router";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./SidebarLink.module.css";

type SidebarLinkProps = {
  label: string;
  icon: LucideIcon;
  to: string;
  children?: ReactNode;
};

export function SidebarLink({
  to,
  label,
  icon: Icon,
  children,
}: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles["links"]} ${styles["active"]}` : styles["links"]
      }
    >
      <div className={styles["links-icons"]}>
        <Icon />
      </div>
      {label}
      {children}
    </NavLink>
  );
}
