import type {
  FieldError,
  FieldValues,
  UseFormRegister,
  Path,
} from "react-hook-form";
import type { Ref } from "react";
import ErrorIcon from "@/assets/images/icons/error-icon.png";
import styles from "./FormGroup.module.css";

type FormGroupProps<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  type?: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: FieldError;
  inputProps: React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: Ref<HTMLInputElement>;
  };
  autoComplete?:
    | "username"
    | "email"
    | "new-password"
    | "current-password"
    | "off";
};

export function FormGroup<T extends FieldValues>({
  id,
  label,
  type = "text",
  placeholder,
  register,
  error,
  inputProps,
  autoComplete,
}: FormGroupProps<T>) {
  return (
    <div className={styles["form-group"]}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete ?? "off"}
        {...register(id)}
        {...inputProps}
      />
      {error && (
        <>
          <img src={ErrorIcon} className={styles["error-icon"]} />
          <span className={styles["error-message"]}>{error.message}</span>
        </>
      )}
    </div>
  );
}
