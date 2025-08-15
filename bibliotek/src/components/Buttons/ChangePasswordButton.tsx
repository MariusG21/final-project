import { FormModal } from "@/components/Modal/FormModal/FormModal";
import styles from "./ChangePasswordButton.module.css";
import { useState } from "react";

type ChangePasswordButtonProps = {
  width?: number;
  height?: number;
  widthUnits?: "rem" | "%";
  borderRadius?: number;
};

export function ChangePasswordButton({
  width = 16,
  height = 4.6,
  widthUnits = "rem",
  borderRadius = 10,
}: ChangePasswordButtonProps) {
  const [openModalFn, setOpenModalFn] = useState<() => void>(() => () => {});

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };
  return (
    <>
      <div
        onClick={() => openModalFn()}
        className={styles["change-password-border"]}
        style={style}
      >
        <div
          className={styles["change-password-button"]}
          style={{ borderRadius: `${borderRadius - 0.2}rem` }}
        >
          Change Password
        </div>
      </div>
      <FormModal setOpenModalFn={setOpenModalFn} />
    </>
  );
}
