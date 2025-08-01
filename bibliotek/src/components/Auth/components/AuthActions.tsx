import { AuthButton } from "@/components/Buttons/AuthButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import styles from "./AuthActions.module.css";

type AuthActionsProps = {
  submitLabel: "Login" | "Register";
  cancelLabel?: "Cancel";
};

export function AuthActions({
  submitLabel,
  cancelLabel = "Cancel",
}: AuthActionsProps) {
  return (
    <div className={styles["auth-actions"]}>
      <AuthButton type="submit" label={submitLabel} action="submit" />
      <OutlineButton label={cancelLabel} action="link" />
    </div>
  );
}
