import styles from "./FormHeader.module.css";

type FormHeaderProps = {
  title: string;
  subtitle: string;
};

export function FormHeader({ title, subtitle }: Partial<FormHeaderProps>) {
  return (
    <div className={styles["form-header"]}>
      <h2 className={styles["form-title"]}>{title || "Update Password?"}</h2>
      <p className={styles["form-subtitle"]}>
        {subtitle || "Enter your current and new password."}
      </p>
    </div>
  );
}
