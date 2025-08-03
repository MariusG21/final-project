import { toast } from "react-toastify";
import { useRedirect } from "@/hooks/redirect/useRedirect";
import { useLogout } from "@/hooks/common/useLogout";
import styles from "./OutlineButton.module.css";

type OutlineButtonProps = {
  label: string;
  action: "link" | "logout";
};

export function OutlineButton({ label, action }: OutlineButtonProps) {
  const { redirectBackOr } = useRedirect();
  const logout = useLogout();

  const handleEvent = () => {
    switch (action) {
      case "logout":
        logout();
        break;
      case "link":
        redirectBackOr();
        break;
      default:
        toast.error("Something went wrong");
    }
  };

  return (
    <div onClick={handleEvent} className={styles["outline-button"]}>
      {label}
    </div>
  );
}
