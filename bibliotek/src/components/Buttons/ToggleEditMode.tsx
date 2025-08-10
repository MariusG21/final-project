import { MdEdit, MdCheck } from "react-icons/md";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import styles from "./ToggleEditMode.module.css";

export function ToggleEditMode() {
  const { isEditingProfile, toggleEditMode } = useUserProfileContext();

  return (
    <div
      role="button"
      onClick={toggleEditMode}
      className={styles["toggle-edit-mode-border"]}
    >
      <div className={styles["toggle-edit-mode-button"]}>
        {!isEditingProfile ? <MdEdit /> : <MdCheck />}
      </div>
    </div>
  );
}
