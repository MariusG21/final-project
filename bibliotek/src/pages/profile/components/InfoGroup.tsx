import * as yup from "yup";
import dayjs from "dayjs";
import { useEffect, useState, type ChangeEvent } from "react";
import { toast } from "react-toastify";
import { EditButton } from "@/components/Buttons/EditButton";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import type { Body } from "@/context/userProfile/types";
import styles from "./InfoGroup.module.css";

type InfoGroupProps = {
  label: "Username:" | "Email:" | "Joined:" | "Id:";
  value: string;
  noEditable?: boolean;
  isDate?: boolean;
  field?: keyof Body;
};

const usernameSchema = yup
  .string()
  .trim()
  .required("Username is required")
  .min(2, "Username must be at least 2 characters")
  .max(20, "Username must be at most 20 characters");

const emailSchema = yup
  .string()
  .trim()
  .required("Email is required")
  .email("Invalid email format")
  .max(50, "Email must be at most 50 characters");

export function InfoGroup({
  label,
  value,
  isDate,
  noEditable,
  field,
}: InfoGroupProps) {
  const { isEditingProfile, editUserDetails, userDetails } =
    useUserProfileContext();
  const [isEditingField, setIsEditingField] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  useEffect(() => {
    if (!isEditingProfile) {
      setIsEditingField(false);
    }
  }, [isEditingProfile]);

  const handleChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleEditingField = () => {
    setIsEditingField((prev) => !prev);
  };

  const body: Partial<Body> = {};

  if (field) {
    body[field] = inputValue;
  }

  const handleKeyDownEvent = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && field) {
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

      try {
        if (field === "username") {
          await usernameSchema.validate(trimmedValue);
        } else if (field === "email") {
          await emailSchema.validate(trimmedValue);
        }

        await editUserDetails({ [field]: trimmedValue });
        toggleEditingField();
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          toast.error(error.message);
        } else {
          toast.error("Validation failed.");
        }
      }
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
            onChange={handleChangeEvent}
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
            {isDate ? dayjs(value).format("MMMM D, YYYY") : value}
          </div>
        )}
        {isEditingProfile && !noEditable && (
          <EditButton
            isEditingField={isEditingField}
            toggleEditingField={toggleEditingField}
            body={body}
          />
        )}
      </div>
    </div>
  );
}
