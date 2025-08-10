import dayjs from "dayjs";
import { EditButton } from "@/components/Buttons/EditButton";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import styles from "./InfoGroup.module.css";

type InfoGroupProps = {
  label: "Username:" | "Gmail:" | "Joined:" | "Id:";
  value: string;
  noEditable?: boolean;
  isDate?: boolean;
};

export function InfoGroup({
  label,
  value,
  isDate,
  noEditable,
}: InfoGroupProps) {
  const { isEditingProfile } = useUserProfileContext();

  return (
    <div className={styles["info-group"]}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["info-value"]}>
        <div className={styles["value"]}>
          {isDate ? dayjs(value).format("MMMM D, YYYY") : value}
        </div>
        {isEditingProfile && !noEditable && <EditButton />}
      </div>
    </div>
  );
}
