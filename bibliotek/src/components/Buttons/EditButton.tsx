import * as yup from "yup";

import { toast } from "react-toastify";
import { MdEdit, MdCheck } from "react-icons/md";
import { useScreenSizeContext } from "@/context/screenSize/useScreenSizeContext";
import { useUserProfileContext } from "@/context/userProfile/useUserProfileContext";
import type { Body } from "@/context/userProfile/types";
import styles from "./EditButton.module.css";

type EditButtonProps = {
  label?: string;
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
  toggleEditingField: () => void;
  isEditingField: boolean;
  body: Partial<Body>;
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

export function EditButton({
  label = "Edit",
  width = 8,
  height = 3,
  widthUnits = "rem",
  borderRadius = 1,
  toggleEditingField,
  isEditingField,
  body,
}: EditButtonProps) {
  const { isSmall } = useScreenSizeContext();
  const { editUserDetails, userDetails } = useUserProfileContext();

  const style = {
    width: isSmall ? `${width / 2 + widthUnits}` : `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  const handleClickEvent = async () => {
    if (isEditingField) {
      const key = Object.keys(body)[0] as keyof Body;
      const trimmedValue = body[key]?.trim() || "";

      if (!trimmedValue) {
        toast.info("Empty value won't be saved.");
        toggleEditingField();
        return;
      } else if (trimmedValue === userDetails![key]) {
        toast.info("No changes detected.");
        toggleEditingField();
        return;
      }

      try {
        // Validate based on field
        if (key === "username") {
          await usernameSchema.validate(trimmedValue);
        } else if (key === "email") {
          await emailSchema.validate(trimmedValue);
        }

        await editUserDetails({ [key]: trimmedValue });
        toggleEditingField();
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          toast.error(error.message);
        } else {
          toast.error("Validation failed.");
        }
      }
    } else {
      toggleEditingField();
    }
  };

  return (
    <div
      role="button"
      className={styles["edit-border"]}
      style={style}
      onClick={handleClickEvent}
    >
      <div
        className={styles["edit-button"]}
        style={{ borderRadius: `${borderRadius - 0.2}rem` }}
      >
        {!isSmall && !isEditingField && label}
        {!isEditingField ? <MdEdit /> : <MdCheck style={{ fontSize: 20 }} />}
      </div>
    </div>
  );
}
