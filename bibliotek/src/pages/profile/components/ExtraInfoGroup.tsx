import { EditButton } from "@/components/Buttons/EditButton";
import styles from "./ExtraInfoGroup.module.css";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";

type ExtraInfoGroupProps = {
  label: string;
  value?: string;
};

export function ExtraInfoGroup({ label, value }: ExtraInfoGroupProps) {
  const { isEditingProfile } = useUserProfileContext();

  return (
    <div className={styles["info-group"]}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["info-value"]}>
        <div className={styles["value"]}>
          {value ? value : "Still a mystery"}
        </div>
        <input
          type="text"
          autoComplete="off"
          value={value}
          className={styles["edit-value"]}
        />
        {isEditingProfile && <EditButton />}
      </div>
    </div>
  );
}
