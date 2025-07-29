import { NavLink } from "react-router";
import type { LucideIcon } from "lucide-react";
import styles from "./SidebarLink.module.css";
import type { ReactNode } from "react";

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
    <NavLink to={to} className={styles["links"]}>
      <div className={styles["links-icons"]}>
        <Icon />
      </div>
      {label}
      {children}
    </NavLink>
  );
}
