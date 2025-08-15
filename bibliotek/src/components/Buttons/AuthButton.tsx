import { useRedirect } from "@/hooks/redirect/useRedirect";
import styles from "./AuthButton.module.css";

type AuthButtonProps = {
  width: number;
  height: number;
  borderRadius: number;
  label: "Login" | "Register" | "Back" | "Update";
  type: "button" | "submit";
  action: "link" | "submit" | "goBack";
};

export function AuthButton({
  width = 12,
  height = 4.6,
  borderRadius = 10,
  label = "Login",
  type = "button",
  action = "link",
}: Partial<AuthButtonProps>) {
  const { redirectTo, redirectBackOr } = useRedirect();

  const handleEvent = () => {
    switch (action) {
      case "link":
        redirectTo("/login");
        break;
      case "goBack":
        redirectBackOr();
        break;
      case "submit":
        break;
    }
  };

  const style = {
    width: `${width}rem`,
    height: `${height}rem`,
    borderRadius: `${borderRadius}rem`,
  };

  return (
    <button
      onClick={handleEvent}
      type={type}
      className={styles["auth-button"]}
      style={style}
    >
      {label}
    </button>
  );
}
