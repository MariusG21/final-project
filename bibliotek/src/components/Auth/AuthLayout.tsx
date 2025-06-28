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
        <div className={styles["separator-line"]}></div>
        {children}
      </div>
    </div>
  );
}
