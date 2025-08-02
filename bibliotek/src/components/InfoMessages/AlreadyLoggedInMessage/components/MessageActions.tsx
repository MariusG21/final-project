import { AuthButton } from "@/components/Buttons/AuthButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import styles from "./MessageActions.module.css";

export function MessageActions() {
  return (
    <div className={styles["message-actions"]}>
      <OutlineButton label="Logout" action="logout" />
      <AuthButton type="button" label="Back" action="goBack" />
    </div>
  );
}
