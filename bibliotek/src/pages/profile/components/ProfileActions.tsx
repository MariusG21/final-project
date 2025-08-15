import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { ChangePasswordButton } from "@/components/Buttons/ChangePasswordButton";
import { DeleteAccountButton } from "@/components/Buttons/DeleteAccountButton";
import styles from "./ProfileActions.module.css";

export function ProfileActions() {
  const { isSmall } = useScreenSizeContext();
  return (
    <div className={styles["profile-actions"]}>
      <OutlineButton action="logout" label="Logout" width={isSmall ? 14 : 16} />
      <ChangePasswordButton width={isSmall ? 14 : 16} />
      <DeleteAccountButton width={isSmall ? 14 : 16} />
    </div>
  );
}
