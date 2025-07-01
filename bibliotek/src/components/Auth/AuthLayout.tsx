import { SeparatorLine } from "../SeparatorLine/SeparatorLine";
import styles from "./AuthLayout.module.css";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
  return (
    <div className={styles["auth-page"]}>
      <div className={styles["auth-header"]}>Bibliotek</div>
      <div className={styles["auth-content"]}>
        <p>{title}</p>
        <h1>{subtitle}</h1>
        <SeparatorLine color="secondary" />
        {children}
      </div>
    </div>
  );
}
