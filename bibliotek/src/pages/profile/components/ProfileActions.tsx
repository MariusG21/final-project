import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { ChangePasswordButton } from "@/components/Buttons/ChangePasswordButton";
import { DeleteAccountButton } from "@/components/Buttons/DeleteAccountButton";
import styles from "./ProfileActions.module.css";

export function ProfileActions() {
  return (
    <div className={styles["profile-actions"]}>
      <OutlineButton action="logout" label="Logout" width={16} />
      <ChangePasswordButton />
      <DeleteAccountButton />
    </div>
  );
}
