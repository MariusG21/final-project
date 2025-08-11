import { FormModal } from "@/components/Modal/FormModal/FormModal";
import styles from "./ChangePasswordButton.module.css";
import { useChangePasswordForm } from "@/hooks/auth/useChangePasswordForm";
import { useChangePassword } from "@/hooks/auth/useChangePassword";

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
  const formHook = useChangePasswordForm();
  const { reset, setError } = formHook;

  const changePasswordHook = useChangePassword(reset, setError);
  const { openModal } = changePasswordHook;

  const style = {
    width: `${width + widthUnits}`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };
  return (
    <>
      <div
        className={styles["change-password-border"]}
        style={style}
        onClick={openModal}
      >
        <div
          className={styles["change-password-button"]}
          style={{ borderRadius: `${borderRadius - 0.2}rem` }}
        >
          Change Password
        </div>
      </div>
      <FormModal formHook={formHook} changePasswordHook={changePasswordHook} />
    </>
  );
}
