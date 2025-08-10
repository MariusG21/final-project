import { useEffect, useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";
import { EditButton } from "@/components/Buttons/EditButton";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import type { Body } from "@/context/userProfile/types";
import styles from "./ExtraInfoGroup.module.css";

type ExtraInfoGroupProps = {
  label: string;
  field: keyof Body;
  value?: string;
};

export function ExtraInfoGroup({ label, value, field }: ExtraInfoGroupProps) {
  const { isEditingProfile, editUserDetails, userDetails } =
    useUserProfileContext();
  const [isEditingField, setIsEditingField] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    if (!isEditingProfile) {
      setInputValue(value || "");
    }
    setInputValue(value || "");
  }, [value, isEditingProfile]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleEditingField = () => {
    setIsEditingField((prev) => !prev);
  };

  useEffect(() => {
    if (!isEditingProfile) {
      setIsEditingField(false);
    }
  }, [isEditingProfile]);

  const body: Partial<Body> = {
    [field]: inputValue,
  };

  const handleKeyDownEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const trimmedValue = body[field]?.trim() || "";

      if (!trimmedValue) {
        toast.info("Empty value won't be saved.");
        toggleEditingField();
        return;
      } else if (trimmedValue === userDetails![field]) {
        toast.info("No changes detected.");
        toggleEditingField();
        return;
      }

      editUserDetails({ [field]: trimmedValue });
      toggleEditingField();
    }
  };

  return (
    <div className={styles["info-group"]}>
      <div className={styles["label"]}>{label}</div>
      <div className={styles["info-value"]}>
        {isEditingField ? (
          <input
            type="text"
            autoComplete="off"
            value={inputValue}
            onChange={handleOnChange}
            onKeyDown={handleKeyDownEvent}
            className={styles["edit-value"]}
            placeholder={`${label.slice(0, label.length - 1)}...`}
          />
        ) : (
          <div
            className={styles["value"]}
            style={{ maxWidth: !isEditingProfile ? 250 : 230 }}
            title={value ? value : ""}
          >
            {value ? value : "Still a mystery"}
          </div>
        )}
        {isEditingProfile && (
          <EditButton
            toggleEditingField={toggleEditingField}
            isEditingField={isEditingField}
            body={body}
          />
        )}
      </div>
    </div>
  );
}
